import { Module } from "@nestjs/common";
import { createObserveModule } from "@nestjs/observe";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { validateEnv } from "./config/env.validator";
import { HealthModule } from "./modules/health/health.module";
import { DatabaseModue } from "./infra/database/database.modules";
import { AuthModules } from "./modules/authentication/auth.module";
import { QueueModule } from "./infra/queue/queue.module";
import { UserModule } from "./modules/users/user.module";
import { RedisModule } from "./infra/redis/redis.module";
import { GroupModule } from "./modules/groups/group.module";

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: "YOUR_APP_KEY",
      appSecret: "YOUR_APP_SECRET",
      serviceId: "circlepot_api",
    }),
    ConfigModule.forRoot({ isGlobal: true, validate: validateEnv }),
    DatabaseModue,
    HealthModule,
    AuthModules,
    QueueModule,
    UserModule,
    RedisModule,
    GroupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
