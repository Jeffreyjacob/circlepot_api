import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../../infra/database/database.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { randomUUID } from "crypto";
import { generateToken, hashToken } from "../../common/utils/token";

const DAY_MS = 24 * 60 * 60 * 1000;
const REUSE_GRACE_MS = 10_000;

@Injectable()
export class TokenService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService
  ) {}

  async issueSession(userId: string, familyId: string = randomUUID()) {
    const accessToken = await this.jwt.signAsync({ sub: userId });
    const { raw, hash } = generateToken(48);
    const days = this.config.getOrThrow<number>("REFRESH_TTL_DAYS");
    const refreshExpiresAt = new Date(Date.now() + days * DAY_MS);

    await this.prisma.refreshToken.create({
      data: { userId, familyId, tokenHash: hash, expiresAt: refreshExpiresAt },
    });

    return { accessToken, refreshToken: raw, refreshExpiresAt };
  }

  async rotate(rawToken: string) {
    const record = await this.prisma.refreshToken.findUnique({
      where: { tokenHash: hashToken(rawToken) },
    });
    if (!record) throw new UnauthorizedException();
    const now = new Date();

    if (record.revokedAt) {
      if (now.getTime() - record.revokedAt.getTime() > REUSE_GRACE_MS) {
        await this.revokeFamily(record.familyId);
      }
      throw new UnauthorizedException();
    }

    if (record.expiresAt <= now) throw new UnauthorizedException();

    const claimed = await this.prisma.refreshToken.updateMany({
      where: { id: record.id, revokedAt: null },
      data: { revokedAt: now },
    });

    if (claimed.count !== 1) throw new UnauthorizedException();

    return this.issueSession(record.userId, record.familyId);
  }

  async revokeByRawToken(rawToken: string) {
    const record = await this.prisma.refreshToken.findUnique({
      where: { tokenHash: hashToken(rawToken) },
    });
    if (record) await this.revokeFamily(record.familyId);
  }

  async revokeFamily(familyId: string) {
    await this.prisma.refreshToken.updateMany({
      where: { familyId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  async revokeAllForUser(userId: string) {
    await this.prisma.refreshToken.updateMany({
      where: { userId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }
}
