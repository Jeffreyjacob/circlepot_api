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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutAccoutController = void 0;
const common_1 = require("@nestjs/common");
const payout_account_service_1 = require("./payout-account.service");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const add_payout_account_dto_1 = require("./dto/add-payout-account.dto");
const banks_service_1 = require("./banks.service");
let PayoutAccoutController = class PayoutAccoutController {
    payoutAccoutService;
    bankService;
    constructor(payoutAccoutService, bankService) {
        this.payoutAccoutService = payoutAccoutService;
        this.bankService = bankService;
    }
    listMine(user) {
        return this.payoutAccoutService.listMine(user.id);
    }
    add(user, dto) {
        return this.payoutAccoutService.add(user.id, dto);
    }
    getBanks() {
        return this.bankService.list();
    }
    getBankByCode(code) {
        return this.bankService.find(code);
    }
    setDefault(user, id) {
        return this.payoutAccoutService.setDefault(user.id, id);
    }
    remove(user, id) {
        return this.payoutAccoutService.remove(user.id, id);
    }
};
exports.PayoutAccoutController = PayoutAccoutController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PayoutAccoutController.prototype, "listMine", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, add_payout_account_dto_1.AddPayoutAccountDto]),
    __metadata("design:returntype", void 0)
], PayoutAccoutController.prototype, "add", null);
__decorate([
    (0, common_1.Get)("bank"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PayoutAccoutController.prototype, "getBanks", null);
__decorate([
    (0, common_1.Get)("bank/:code"),
    __param(0, (0, common_1.Param)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PayoutAccoutController.prototype, "getBankByCode", null);
__decorate([
    (0, common_1.Patch)(":id/default"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id", common_1.ParseArrayPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PayoutAccoutController.prototype, "setDefault", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id", common_1.ParseArrayPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PayoutAccoutController.prototype, "remove", null);
exports.PayoutAccoutController = PayoutAccoutController = __decorate([
    (0, common_1.Controller)("payout-accounts"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [payout_account_service_1.PayoutAccountsService,
        banks_service_1.BankService])
], PayoutAccoutController);
//# sourceMappingURL=payout-account.controller.js.map