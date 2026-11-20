"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutAccountModule = void 0;
const common_1 = require("@nestjs/common");
const database_modules_1 = require("../../infra/database/database.modules");
const paystack_client_1 = require("../../infra/paystack/paystack.client");
const banks_service_1 = require("./banks.service");
const payout_account_service_1 = require("./payout-account.service");
const payout_account_controller_1 = require("./payout-account.controller");
let PayoutAccountModule = class PayoutAccountModule {
};
exports.PayoutAccountModule = PayoutAccountModule;
exports.PayoutAccountModule = PayoutAccountModule = __decorate([
    (0, common_1.Module)({
        imports: [database_modules_1.DatabaseModue],
        providers: [banks_service_1.BankService, payout_account_service_1.PayoutAccountsService, paystack_client_1.Paystackclient],
        controllers: [payout_account_controller_1.PayoutAccoutController],
    })
], PayoutAccountModule);
//# sourceMappingURL=payout.module.js.map