import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import Redis from "ioredis";
export declare class JwtAuthGuard implements CanActivate {
    private readonly jwt;
    private readonly redis;
    constructor(jwt: JwtService, redis: Redis);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
