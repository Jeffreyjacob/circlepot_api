import { Module } from "@nestjs/common";
import { DatabaseModue } from "../../infra/database/database.modules";
import { MailModule } from "../mail/mail.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { TokenService } from "./auth.tokens.service";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { REDIS } from "../../infra/redis/redis.constants";
import Redis from "ioredis";
import { RedisThrottlerStorage } from "../../infra/redis/redis-throttler.storage";
import { APP_GUARD } from "@nestjs/core";

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
    ThrottlerModule.forRootAsync({
      inject: [REDIS],
      useFactory: (redis: Redis) => ({
        throttlers: [{ name: "default", ttl: 60_000, limit: 100 }],
        storage: new RedisThrottlerStorage(redis),
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    TokenService,
    { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
})
export class AuthModules {}
