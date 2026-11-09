"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../infra/database/database.service");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const crypto_1 = require("crypto");
const token_1 = require("../../common/utils/token");
const redis_constants_1 = require("../../infra/redis/redis.constants");
const ioredis_1 = __importDefault(require("ioredis"));
const redis_key_1 = require("../../common/utils/redis-key");
const DAY_MS = 24 * 60 * 60 * 1000;
const REUSE_GRACE_MS = 10_000;
let TokenService = class TokenService {
    prisma;
    jwt;
    config;
    redis;
    constructor(prisma, jwt, config, redis) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
        this.redis = redis;
    }
    async issueSession(userId, familyId = (0, crypto_1.randomUUID)()) {
        const accessToken = await this.jwt.signAsync({
            sub: userId,
            sid: familyId,
        });
        const { raw, hash } = (0, token_1.generateToken)(48);
        const days = this.config.getOrThrow("REFRESH_TTL_DAYS");
        const refreshExpiresAt = new Date(Date.now() + days * DAY_MS);
        await this.prisma.refreshToken.create({
            data: { userId, familyId, tokenHash: hash, expiresAt: refreshExpiresAt },
        });
        return { accessToken, refreshToken: raw, refreshExpiresAt };
    }
    async rotate(rawToken) {
        const record = await this.prisma.refreshToken.findUnique({
            where: { tokenHash: (0, token_1.hashToken)(rawToken) },
        });
        if (!record)
            throw new common_1.UnauthorizedException();
        const now = new Date();
        if (record.revokedAt) {
            if (now.getTime() - record.revokedAt.getTime() > REUSE_GRACE_MS) {
                await this.revokeFamily(record.familyId);
            }
            throw new common_1.UnauthorizedException();
        }
        if (record.expiresAt <= now)
            throw new common_1.UnauthorizedException();
        const claimed = await this.prisma.refreshToken.updateMany({
            where: { id: record.id, revokedAt: null },
            data: { revokedAt: now },
        });
        if (claimed.count !== 1)
            throw new common_1.UnauthorizedException();
        return this.issueSession(record.userId, record.familyId);
    }
    async revokeByRawToken(rawToken) {
        const record = await this.prisma.refreshToken.findUnique({
            where: { tokenHash: (0, token_1.hashToken)(rawToken) },
        });
        if (record)
            await this.revokeFamily(record.familyId);
    }
    async denySessions(familyId) {
        if (familyId.length === 0)
            return;
        const ttl = this.config.getOrThrow("JWT_ACCESS_TTL_SECONDS");
        const pipeline = this.redis.pipeline();
        for (const id of familyId) {
            pipeline.set((0, redis_key_1.revokedSessionKey)(id), "1", "EX", ttl);
        }
        await pipeline.exec();
    }
    async revokeFamily(familyId) {
        await this.prisma.refreshToken.updateMany({
            where: { familyId, revokedAt: null },
            data: { revokedAt: new Date() },
        });
        await this.denySessions([familyId]);
    }
    async revokeAllForUser(userId) {
        await this.prisma.refreshToken.updateMany({
            where: { userId, revokedAt: null },
            data: { revokedAt: new Date() },
        });
    }
};
exports.TokenService = TokenService;
exports.TokenService = TokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, common_1.Inject)(redis_constants_1.REDIS)),
    __metadata("design:paramtypes", [database_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService,
        ioredis_1.default])
], TokenService);
//# sourceMappingURL=auth.tokens.service.js.map