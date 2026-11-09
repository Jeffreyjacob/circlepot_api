import { PrismaService } from "../../infra/database/database.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import Redis from "ioredis";
export declare class TokenService {
    private readonly prisma;
    private readonly jwt;
    private readonly config;
    private readonly redis;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService, redis: Redis);
    issueSession(userId: string, familyId?: string): Promise<{
        accessToken: string;
        refreshToken: string;
        refreshExpiresAt: Date;
    }>;
    rotate(rawToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        refreshExpiresAt: Date;
    }>;
    revokeByRawToken(rawToken: string): Promise<void>;
    denySessions(familyId: string[]): Promise<void>;
    revokeFamily(familyId: string): Promise<void>;
    revokeAllForUser(userId: string): Promise<void>;
}
