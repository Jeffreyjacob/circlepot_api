// Runs inside Redis as one unbreakable step: add 1 to the counter and,
import { ThrottlerStorage } from "@nestjs/throttler";
import Redis from "ioredis";

// if the counter has no expiry yet, start the countdown.
const INCREMENT_SCRIPT = `
local hits = redis.call('INCR', KEYS[1])
local pttl = redis.call('PTTL', KEYS[1])
if pttl < 0 then
  redis.call('PEXPIRE', KEYS[1], ARGV[1])
  pttl = tonumber(ARGV[1])
end
return { hits, pttl }
`;

type ThrottlerStorageRecord = Awaited<
  ReturnType<ThrottlerStorage["increment"]>
>;

export class RedisThrottlerStorage implements ThrottlerStorage {
  constructor(private readonly redis: Redis) {}

  async increment(
    key: string,
    ttl: number,
    limit: number,
    _blockDuration: number,
    throttlerName: string
  ): Promise<ThrottlerStorageRecord> {
    const redisKey = `throttle:${throttlerName}:${key}`;

    const [hits, pttl] = (await this.redis.eval(
      INCREMENT_SCRIPT,
      1,
      redisKey,
      ttl
    )) as [number, number];

    const timeToExpire = Math.ceil(pttl / 1000);
    const isBlocked = hits > limit;

    return {
      totalHits: hits,
      timeToExpire,
      isBlocked,
      timeToBlockExpire: isBlocked ? timeToExpire : 0,
    };
  }
}
