import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto, VerifyEmailDto } from "./dto/register.dto";
import { ConfigService } from "@nestjs/config";
import { LoginDto } from "./dto/login.dto";
import type { Response, Request } from "express";
import { ForgetPasswordDto } from "./dto/forget-password.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { Throttle } from "@nestjs/throttler";

const REFRESH_COOKIE = "refresh_token";
const COOKIE_PATH = "/api/v1/auth";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly config: ConfigService
  ) {}

  @Throttle({ default: { limit: 5, ttl: 60 * 60_000 } })
  @Post("register")
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Throttle({ default: { limit: 10, ttl: 15 * 60_000 } })
  @Post("verify-email")
  @HttpCode(200)
  verifyEmail(@Body() dto: VerifyEmailDto) {
    return this.authService.verifyEmail(dto.token);
  }

  @Throttle({ default: { limit: 20, ttl: 15 * 60_000 } })
  @Post("login")
  @HttpCode(200)
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const { session, user } = await this.authService.login(dto);
    this.setRefreshCookie(res, session.refreshToken, session.refreshExpiresAt);
    return { accessToken: session.accessToken, user };
  }

  @Post("refresh")
  @HttpCode(200)
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    const raw: unknown = req.cookies?.[REFRESH_COOKIE];
    if (typeof raw !== "string" && raw) throw new UnauthorizedException();

    const session = await this.authService.refresh(raw as string);
    this.setRefreshCookie(res, session.refreshToken, session.refreshExpiresAt);
    return { accessToken: session.accessToken };
  }

  @Throttle({ default: { limit: 5, ttl: 15 * 60_000 } })
  @Post("forget-password")
  @HttpCode(200)
  forgetPassword(@Body() dto: ForgetPasswordDto) {
    return this.authService.forgetPassword(dto.email);
  }

  @Throttle({ default: { limit: 10, ttl: 15 * 60_000 } })
  @Post("reset-password")
  @HttpCode(200)
  async resetPassword(
    @Body() dto: ResetPasswordDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const result = await this.authService.resetPassword(
      dto.token,
      dto.password
    );
    res.clearCookie(REFRESH_COOKIE, { path: COOKIE_PATH });
    return result;
  }

  @Post("logout")
  @HttpCode(204)
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const raw = req.cookies?.[REFRESH_COOKIE];
    if (typeof raw === "string" && raw) await this.authService.logout(raw);
    res.clearCookie(REFRESH_COOKIE, { path: COOKIE_PATH });
  }

  private setRefreshCookie(res: Response, token: string, expires: Date) {
    res.cookie(REFRESH_COOKIE, token, {
      httpOnly: true,
      secure: this.config.get("NODE_ENV") === "production",
      sameSite: "lax",
      path: COOKIE_PATH,
      expires,
    });
  }
}
