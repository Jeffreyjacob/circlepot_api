import { Inject, Injectable } from "@nestjs/common";
import { Paystackclient } from "../../infra/paystack/paystack.client";
import { REDIS } from "../../infra/redis/redis.constants";
import Redis from "ioredis";

const CACHE_KEY = "paystack:banks:ng";
const CACHE_SECOND = 24 * 60 * 60;

export interface BankOption {
  name: string;
  code: string;
}

@Injectable()
export class BankService {
  constructor(
    private readonly paystack: Paystackclient,
    @Inject(REDIS) private readonly redis: Redis
  ) {}

  async list(): Promise<BankOption[]> {
    const cached = await this.redis.get(CACHE_KEY);
    if (cached) return JSON.parse(cached) as BankOption[];

    const banks = (await this.paystack.listNigerianBank())
      .map(({ name, code }) => ({ name, code }))
      .sort((a, b) => a.name.localeCompare(b.name));

    await this.redis.set(CACHE_KEY, JSON.stringify(banks), "EX", CACHE_SECOND);
    return banks;
  }

  async find(code: string): Promise<BankOption | undefined> {
    return (await this.list()).find((b) => b.code === code);
  }
}
