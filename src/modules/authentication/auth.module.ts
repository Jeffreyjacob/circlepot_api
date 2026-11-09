import { Module } from "@nestjs/common";
import { DatabaseModue } from "../../infra/database/database.modules";
import { MailModule } from "../mail/mail.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { TokenService } from "./auth.tokens.service";

@Module({
  imports: [
    DatabaseModue,
    MailModule,
    JwtModule.registerAsync({
      global: true,
      inject: [ConfigService],
      useFactory: (confifg: ConfigService) => ({
        secret: confifg.getOrThrow<string>("JWT_ACCESS_SECRET"),
        signOptions: {
          algorithm: "HS256",
          expiresIn: confifg.getOrThrow<number>("JWT_ACCESS_TTL_SECONDS"),
        },
        verifyOptions: { algorithms: ["HS256"] },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, TokenService],
})
export class AuthModules {}
