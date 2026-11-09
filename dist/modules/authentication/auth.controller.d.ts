import { AuthService } from "./auth.service";
import { RegisterDto, VerifyEmailDto } from "./dto/register.dto";
import { ConfigService } from "@nestjs/config";
import { LoginDto } from "./dto/login.dto";
import type { Response, Request } from "express";
import { ForgetPasswordDto } from "./dto/forget-password.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
export declare class AuthController {
    private readonly authService;
    private readonly config;
    constructor(authService: AuthService, config: ConfigService);
    register(dto: RegisterDto): Promise<{
        message: string;
    }>;
    verifyEmail(dto: VerifyEmailDto): Promise<{
        message: string;
    }>;
    login(dto: LoginDto, res: Response): Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string;
            name: string;
        };
    }>;
    refresh(req: Request, res: Response): Promise<{
        accessToken: string;
    }>;
    forgetPassword(dto: ForgetPasswordDto): Promise<{
        message: string;
    }>;
    resetPassword(dto: ResetPasswordDto, res: Response): Promise<{
        message: string;
    }>;
    logout(req: Request, res: Response): Promise<void>;
    private setRefreshCookie;
}
