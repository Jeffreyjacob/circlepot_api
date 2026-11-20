import { ThrottlerStorage } from "@nestjs/throttler";
import Redis from "ioredis";
type ThrottlerStorageRecord = Awaited<ReturnType<ThrottlerStorage["increment"]>>;
export declare class RedisThrottlerStorage implements ThrottlerStorage {
    private readonly redis;
    constructor(redis: Redis);
    increment(key: string, ttl: number, limit: number, _blockDuration: number, throttlerName: string): Promise<ThrottlerStorageRecord>;
}
export {};
