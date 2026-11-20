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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paystackclient = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const paystack_error_1 = require("./paystack.error");
let Paystackclient = class Paystackclient {
    baseUrl = "https/api.paystack.co";
    secretKey;
    constructor(config) {
        this.secretKey = config.getOrThrow("PAYSTACK_SECRET_KEY");
    }
    async request(path, init) {
        let response;
        try {
            response = await fetch(`${this.baseUrl}${path}`, {
                method: init?.method ?? "GET",
                headers: {
                    Authorization: `Bearer ${this.secretKey}`,
                    "Content-Type": "application/json",
                },
                body: init?.body ? JSON.stringify(init.body) : undefined,
                signal: AbortSignal.timeout(15000),
            });
        }
        catch (error) {
            throw new paystack_error_1.PaystackUnavailableError("Could not reach Paystack");
        }
        const json = (await response
            .json()
            .catch(() => null));
        if (!response.ok || !json?.status) {
            throw new paystack_error_1.PaystackApiError(response.status, json?.message ?? "Paystack request failed");
        }
        return json;
    }
    async listNigerianBank() {
        const banks = [];
        let next;
        for (let page = 0; page < 10; page++) {
            const query = new URLSearchParams({
                country: "nigeria",
                currency: "NGN",
                use_cursor: "true",
                perPage: "100",
            });
            if (next)
                query.set("next", next);
            const res = await this.request(`/bank?${query}`);
            banks.push(...res.data);
            next = res.meta?.next;
            if (!next)
                break;
        }
        return banks.filter((b) => b.active);
    }
    async resolveAccount(accountNumber, bankCode) {
        const query = new URLSearchParams({
            account_number: accountNumber,
            bank_code: bankCode,
        });
        return (await this.request(`/bank/resolve?${query}`)).data;
    }
    async createTransferRecipient(input) {
        const res = await this.request("/transferrecipient", {
            method: "POST",
            body: {
                type: "nuban",
                name: input.name,
                account_number: input.accountNumber,
                bank_code: input.bankCode,
                currency: "NGN",
            },
        });
        return res.data;
    }
};
exports.Paystackclient = Paystackclient;
exports.Paystackclient = Paystackclient = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], Paystackclient);
//# sourceMappingURL=paystack.client.js.map