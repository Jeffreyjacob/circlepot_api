"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisThrottlerStorage = void 0;
const INCREMENT_SCRIPT = `
local hits = redis.call('INCR', KEYS[1])
local pttl = redis.call('PTTL', KEYS[1])
if pttl < 0 then
  redis.call('PEXPIRE', KEYS[1], ARGV[1])
  pttl = tonumber(ARGV[1])
end
return { hits, pttl }
`;
class RedisThrottlerStorage {
    redis;
    constructor(redis) {
        this.redis = redis;
    }
    async increment(key, ttl, limit, _blockDuration, throttlerName) {
        const redisKey = `throttle:${throttlerName}:${key}`;
        const [hits, pttl] = (await this.redis.eval(INCREMENT_SCRIPT, 1, redisKey, ttl));
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
exports.RedisThrottlerStorage = RedisThrottlerStorage;
//# sourceMappingURL=redis-throttler.storage.js.map