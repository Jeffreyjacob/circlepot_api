import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import type { Request } from "express";
import { REDIS } from "../../infra/redis/redis.constants";
import Redis from "ioredis";
import { revokedSessionKey } from "../utils/redis-key";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly jwt: JwtService,
    @Inject(REDIS) private readonly redis: Redis
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context
      .switchToHttp()
      .getRequest<Request & { user?: { id: string } }>();

    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    if (type !== "Bearer" || !token) throw new UnauthorizedException();
    let payload: { sub: string; sid?: string };
    try {
      payload = await this.jwt.verifyAsync<{ sub: string; sid?: string }>(
        token
      );
    } catch {
      throw new UnauthorizedException();
    }

    if (!payload.sid) throw new UnauthorizedException();
    if ((await this.redis.exists(revokedSessionKey(payload.sid))) === 1) {
      throw new UnauthorizedException();
    }
    request.user = { id: payload.sub };
    return true;
  }
}
