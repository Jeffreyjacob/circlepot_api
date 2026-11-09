import { OnApplicationShutdown } from "@nestjs/common";
import { Redis } from "ioredis";
export declare class RedisModule implements OnApplicationShutdown {
    private readonly redis;
    constructor(redis: Redis);
    onApplicationShutdown(): Promise<void>;
}
