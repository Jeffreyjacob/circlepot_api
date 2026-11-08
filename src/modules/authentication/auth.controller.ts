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

const REFRESH_COOKIE = "refresh_token";
const COOKIE_PATH = "/api/v1/auth";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly config: ConfigService
  ) {}

  @Post("register")
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post("verify-email")
  @HttpCode(200)
  verifyEmail(@Body() dto: VerifyEmailDto) {
    return this.authService.verifyEmail(dto.token);
  }

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
