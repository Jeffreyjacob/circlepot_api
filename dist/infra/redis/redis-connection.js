"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisConnectionFromUrl = redisConnectionFromUrl;
function redisConnectionFromUrl(url) {
    const parsed = new URL(url);
    return {
        host: parsed.hostname,
        port: Number(parsed.port || 6379),
        username: parsed.username ? decodeURIComponent(parsed.username) : undefined,
        password: parsed.password ? decodeURIComponent(parsed.password) : undefined,
        tls: parsed.protocol === "rediss:" ? {} : undefined,
    };
}
//# sourceMappingURL=redis-connection.js.map