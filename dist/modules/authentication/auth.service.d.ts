import { PrismaService } from "../../infra/database/database.service";
import { ConfigService } from "@nestjs/config";
import { MailQueueService } from "../mail/mail.queue.service";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { TokenService } from "./auth.tokens.service";
export declare class AuthService {
    private readonly prisma;
    private readonly config;
    private readonly mailQueue;
    private readonly tokens;
    constructor(prisma: PrismaService, config: ConfigService, mailQueue: MailQueueService, tokens: TokenService);
    register(dto: RegisterDto): Promise<{
        message: string;
    }>;
    private createUserWithToken;
    private readonly dummyHash;
    verifyEmail(token: string): Promise<{
        message: string;
    }>;
    login(dto: LoginDto): Promise<{
        session: {
            accessToken: string;
            refreshToken: string;
            refreshExpiresAt: Date;
        };
        user: {
            id: string;
            email: string;
            name: string;
        };
    }>;
    forgetPassword(email: string): Promise<{
        message: string;
    }>;
    resetPassword(token: string, newPassword: string): Promise<{
        message: string;
    }>;
    refresh(rawToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        refreshExpiresAt: Date;
    }>;
    logout(rawToken: string): Promise<void>;
}
