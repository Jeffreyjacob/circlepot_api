"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const redis_constants_1 = require("../../infra/redis/redis.constants");
const ioredis_1 = __importDefault(require("ioredis"));
const redis_key_1 = require("../utils/redis-key");
let JwtAuthGuard = class JwtAuthGuard {
    jwt;
    redis;
    constructor(jwt, redis) {
        this.jwt = jwt;
        this.redis = redis;
    }
    async canActivate(context) {
        const request = context
            .switchToHttp()
            .getRequest();
        const [type, token] = request.headers.authorization?.split(" ") ?? [];
        if (type !== "Bearer" || !token)
            throw new common_1.UnauthorizedException();
        let payload;
        try {
            payload = await this.jwt.verifyAsync(token);
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
        if (!payload.sid)
            throw new common_1.UnauthorizedException();
        if ((await this.redis.exists((0, redis_key_1.revokedSessionKey)(payload.sid))) === 1) {
            throw new common_1.UnauthorizedException();
        }
        request.user = { id: payload.sub };
        return true;
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(redis_constants_1.REDIS)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        ioredis_1.default])
], JwtAuthGuard);
//# sourceMappingURL=jwt-auth.guard.js.map