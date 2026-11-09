import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { PrismaService } from "../../infra/database/database.service";
import { ConfigService } from "@nestjs/config";
import { MailQueueService } from "../mail/mail.queue.service";
import { RegisterDto } from "./dto/register.dto";
import * as argon2 from "argon2";
import { Prisma } from "../../generated/prisma/client";
import { generateToken, hashToken } from "../../common/utils/token";
import { LoginDto } from "./dto/login.dto";
import { TokenService } from "./auth.tokens.service";

const VERIFY_TTL_MS = 24 * 60 * 60 * 1000;
const RESET_TTL_MS = 30 * 60 * 1000;
const RESET_COOLDOWN_MS = 60 * 1000;
const RESET_HOUR_MS = 60 * 60 * 1000;
const RESET_HOURLY_LIMIT = 5;

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly mailQueue: MailQueueService,
    private readonly tokens: TokenService
  ) {}

  async register(dto: RegisterDto) {
    const passwordhash = await argon2.hash(dto.password, {
      type: argon2.argon2id,
    });
    const { raw, hash } = generateToken();
    const user = await this.createUserWithToken(dto, passwordhash, hash);
    await this.mailQueue.enqueue({
      template: "verify-email",
      to: user.email,
      name: user.email,
      url: `${this.config.getOrThrow<string>("FRONTEND_URL")}/verify-email?token=${raw}`,
    });

    return {
      message: "Account created. Check your email to verify it.",
    };
  }

  private async createUserWithToken(
    dto: RegisterDto,
    passwordHash: string,
    tokenHash: string
  ) {
    try {
      return await this.prisma.$transaction(async (tx) => {
        const user = await tx.user.create({
          data: { email: dto.email, name: dto.name, passwordHash },
        });
        await tx.emailVerificationToken.create({
          data: {
            userId: user.id,
            tokenHash,
            expiresAt: new Date(Date.now() + VERIFY_TTL_MS),
          },
        });

        return user;
      });
    } catch (error: any) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P20002"
      ) {
        throw new ConflictException(
          "An Account with this email already exists"
        );
      }
      throw error;
    }
  }

  private readonly dummyHash = argon2.hash("circlepot-dummy-password", {
    type: argon2.argon2id,
  });

  async verifyEmail(token: string) {
    const tokenHash = hashToken(token);
    const now = new Date();

    await this.prisma.$transaction(async (tx) => {
      const claimed = await tx.emailVerificationToken.updateMany({
        where: { tokenHash, usedAt: null, expiresAt: { gt: now } },
        data: { usedAt: now },
      });

      if (claimed.count !== 1) {
        throw new BadRequestException("This link is invalid or has expired");
      }

      const record = await tx.emailVerificationToken.findUniqueOrThrow({
        where: { tokenHash },
      });
      await tx.user.update({
        where: { id: record.userId },
        data: { emailVerifiedAt: now },
      });
    });

    return { message: "Email verified." };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    const hash = user?.passwordHash ?? (await this.dummyHash);
    const valid = await argon2.verify(hash, dto.password);
    if (!user || !valid)
      throw new UnauthorizedException("Invalid email or password");
    if (!user.emailVerifiedAt)
      throw new ForbiddenException("Please verify your email first");

    const session = await this.tokens.issueSession(user.id);
    return {
      session,
      user: { id: user.id, email: user.email, name: user.name },
    };
  }

  async forgetPassword(email: string) {
    const reply = {
      message: "if an account exists for that email, we sent a reset link.",
    };

    const user = await this.prisma.user.findUniqueOrThrow({ where: { email } });
    if (!user) return reply;

    const now = Date.now();
    const recent = await this.prisma.passwordResetToken.findMany({
      where: {
        userId: user.id,
        createdAt: { gt: new Date(now - RESET_HOUR_MS) },
      },
    });

    const tooSoon = recent.some(
      (t) => now - t.createdAt.getTime() < RESET_COOLDOWN_MS
    );
    if (tooSoon || recent.length >= RESET_HOURLY_LIMIT) return reply;

    const { raw, hash } = generateToken();

    await this.prisma.$transaction([
      // Only the newest link should worker, so retire the older ones
      this.prisma.passwordResetToken.updateMany({
        where: { userId: user.id, usedAt: null },
        data: { usedAt: new Date() },
      }),

      this.prisma.passwordResetToken.create({
        data: {
          userId: user.id,
          tokenHash: hash,
          expiresAt: new Date(now + RESET_TTL_MS),
        },
      }),
    ]);

    await this.mailQueue.enqueue({
      template: "reset-password",
      to: user.email,
      name: user.name,
      url: `${this.config.getOrThrow<string>("FRONTEND_URL")}/reset-password?token=${raw}`,
    });
    return reply;
  }

  async resetPassword(token: string, newPassword: string) {
    const passwordHash = await argon2.hash(newPassword, {
      type: argon2.argon2id,
    });
    const tokenHash = hashToken(token);
    const now = new Date();

    const user = await this.prisma.$transaction(async (tx) => {
      const claimed = await tx.passwordResetToken.updateMany({
        where: { tokenHash, usedAt: null, expiresAt: { gt: now } },
        data: { usedAt: now },
      });

      if (claimed.count !== 1)
        throw new BadRequestException("this link is invalid or has expired");

      const record = await tx.passwordResetToken.findUniqueOrThrow({
        where: { tokenHash },
      });
      const updated = await tx.user.update({
        where: { id: record.userId },
        data: { passwordHash },
        select: { id: true, email: true, name: true },
      });

      // they proved they control this inbox, so verify the email if it wasn't yet
      await tx.user.updateMany({
        where: { id: updated.id, emailVerifiedAt: null },
        data: { emailVerifiedAt: now },
      });

      await tx.refreshToken.updateMany({
        where: { userId: updated.id, revokedAt: null },
        data: { revokedAt: now },
      });

      // retire any other open reset link
      await tx.passwordResetToken.updateMany({
        where: { userId: updated.id, usedAt: null },
        data: { usedAt: now },
      });
      return updated;
    });

    await this.mailQueue.enqueue({
      template: "password-changed",
      to: user.email,
      name: user.name,
    });

    return {
      message: "Password updated. Please log in with your new password",
    };
  }

  refresh(rawToken: string) {
    return this.tokens.rotate(rawToken);
  }

  logout(rawToken: string) {
    return this.tokens.revokeByRawToken(rawToken);
  }
}
