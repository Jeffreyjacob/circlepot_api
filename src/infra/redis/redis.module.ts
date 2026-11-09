import { Global, Inject, Module, OnApplicationShutdown } from "@nestjs/common";
import { REDIS } from "./redis.constants";
import { ConfigService } from "@nestjs/config";
import { Redis } from "ioredis";

@Global()
@Module({
  providers: [
    {
      provide: REDIS,
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        new Redis(config.getOrThrow<string>("REDIS_URL")),
    },
  ],
  exports: [REDIS],
})
export class RedisModule implements OnApplicationShutdown {
  constructor(@Inject(REDIS) private readonly redis: Redis) {}

  async onApplicationShutdown() {
    await this.redis.quit();
  }
}
