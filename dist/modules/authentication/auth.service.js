"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../infra/database/database.service");
const config_1 = require("@nestjs/config");
const mail_queue_service_1 = require("../mail/mail.queue.service");
const argon2 = __importStar(require("argon2"));
const client_1 = require("../../generated/prisma/client");
const token_1 = require("../../common/utils/token");
const auth_tokens_service_1 = require("./auth.tokens.service");
const VERIFY_TTL_MS = 24 * 60 * 60 * 1000;
const RESET_TTL_MS = 30 * 60 * 1000;
const RESET_COOLDOWN_MS = 60 * 1000;
const RESET_HOUR_MS = 60 * 60 * 1000;
const RESET_HOURLY_LIMIT = 5;
let AuthService = class AuthService {
    prisma;
    config;
    mailQueue;
    tokens;
    constructor(prisma, config, mailQueue, tokens) {
        this.prisma = prisma;
        this.config = config;
        this.mailQueue = mailQueue;
        this.tokens = tokens;
    }
    async register(dto) {
        const passwordhash = await argon2.hash(dto.password, {
            type: argon2.argon2id,
        });
        const { raw, hash } = (0, token_1.generateToken)();
        const user = await this.createUserWithToken(dto, passwordhash, hash);
        await this.mailQueue.enqueue({
            template: "verify-email",
            to: user.email,
            name: user.email,
            url: `${this.config.getOrThrow("FRONTEND_URL")}/verify-email?token=${raw}`,
        });
        return {
            message: "Account created. Check your email to verify it.",
        };
    }
    async createUserWithToken(dto, passwordHash, tokenHash) {
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
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                error.code === "P20002") {
                throw new common_1.ConflictException("An Account with this email already exists");
            }
            throw error;
        }
    }
    dummyHash = argon2.hash("circlepot-dummy-password", {
        type: argon2.argon2id,
    });
    async verifyEmail(token) {
        const tokenHash = (0, token_1.hashToken)(token);
        const now = new Date();
        await this.prisma.$transaction(async (tx) => {
            const claimed = await tx.emailVerificationToken.updateMany({
                where: { tokenHash, usedAt: null, expiresAt: { gt: now } },
                data: { usedAt: now },
            });
            if (claimed.count !== 1) {
                throw new common_1.BadRequestException("This link is invalid or has expired");
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
    async login(dto) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        const hash = user?.passwordHash ?? (await this.dummyHash);
        const valid = await argon2.verify(hash, dto.password);
        if (!user || !valid)
            throw new common_1.UnauthorizedException("Invalid email or password");
        if (!user.emailVerifiedAt)
            throw new common_1.ForbiddenException("Please verify your email first");
        const session = await this.tokens.issueSession(user.id);
        return {
            session,
            user: { id: user.id, email: user.email, name: user.name },
        };
    }
    async forgetPassword(email) {
        const reply = {
            message: "if an account exists for that email, we sent a reset link.",
        };
        const user = await this.prisma.user.findUniqueOrThrow({ where: { email } });
        if (!user)
            return reply;
        const now = Date.now();
        const recent = await this.prisma.passwordResetToken.findMany({
            where: {
                userId: user.id,
                createdAt: { gt: new Date(now - RESET_HOUR_MS) },
            },
        });
        const tooSoon = recent.some((t) => now - t.createdAt.getTime() < RESET_COOLDOWN_MS);
        if (tooSoon || recent.length >= RESET_HOURLY_LIMIT)
            return reply;
        const { raw, hash } = (0, token_1.generateToken)();
        await this.prisma.$transaction([
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
            url: `${this.config.getOrThrow("FRONTEND_URL")}/reset-password?token=${raw}`,
        });
        return reply;
    }
    async resetPassword(token, newPassword) {
        const passwordHash = await argon2.hash(newPassword, {
            type: argon2.argon2id,
        });
        const tokenHash = (0, token_1.hashToken)(token);
        const now = new Date();
        const user = await this.prisma.$transaction(async (tx) => {
            const claimed = await tx.passwordResetToken.updateMany({
                where: { tokenHash, usedAt: null, expiresAt: { gt: now } },
                data: { usedAt: now },
            });
            if (claimed.count !== 1)
                throw new common_1.BadRequestException("this link is invalid or has expired");
            const record = await tx.passwordResetToken.findUniqueOrThrow({
                where: { tokenHash },
            });
            const updated = await tx.user.update({
                where: { id: record.userId },
                data: { passwordHash },
                select: { id: true, email: true, name: true },
            });
            await tx.user.updateMany({
                where: { id: updated.id, emailVerifiedAt: null },
                data: { emailVerifiedAt: now },
            });
            await tx.refreshToken.updateMany({
                where: { userId: updated.id, revokedAt: null },
                data: { revokedAt: now },
            });
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
    refresh(rawToken) {
        return this.tokens.rotate(rawToken);
    }
    logout(rawToken) {
        return this.tokens.revokeByRawToken(rawToken);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.PrismaService,
        config_1.ConfigService,
        mail_queue_service_1.MailQueueService,
        auth_tokens_service_1.TokenService])
], AuthService);
//# sourceMappingURL=auth.service.js.map