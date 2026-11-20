import { Paystackclient } from "../../infra/paystack/paystack.client";
import Redis from "ioredis";
export interface BankOption {
    name: string;
    code: string;
}
export declare class BankService {
    private readonly paystack;
    private readonly redis;
    constructor(paystack: Paystackclient, redis: Redis);
    list(): Promise<BankOption[]>;
    find(code: string): Promise<BankOption | undefined>;
}
