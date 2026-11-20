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
exports.BankService = void 0;
const common_1 = require("@nestjs/common");
const paystack_client_1 = require("../../infra/paystack/paystack.client");
const redis_constants_1 = require("../../infra/redis/redis.constants");
const ioredis_1 = __importDefault(require("ioredis"));
const CACHE_KEY = "paystack:banks:ng";
const CACHE_SECOND = 24 * 60 * 60;
let BankService = class BankService {
    paystack;
    redis;
    constructor(paystack, redis) {
        this.paystack = paystack;
        this.redis = redis;
    }
    async list() {
        const cached = await this.redis.get(CACHE_KEY);
        if (cached)
            return JSON.parse(cached);
        const banks = (await this.paystack.listNigerianBank())
            .map(({ name, code }) => ({ name, code }))
            .sort((a, b) => a.name.localeCompare(b.name));
        await this.redis.set(CACHE_KEY, JSON.stringify(banks), "EX", CACHE_SECOND);
        return banks;
    }
    async find(code) {
        return (await this.list()).find((b) => b.code === code);
    }
};
exports.BankService = BankService;
exports.BankService = BankService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(redis_constants_1.REDIS)),
    __metadata("design:paramtypes", [paystack_client_1.Paystackclient,
        ioredis_1.default])
], BankService);
//# sourceMappingURL=banks.service.js.map