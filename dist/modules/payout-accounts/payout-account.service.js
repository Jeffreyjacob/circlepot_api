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
exports.PayoutAccountsService = void 0;
const common_1 = require("@nestjs/common");
const paystack_error_1 = require("../../infra/paystack/paystack.error");
const database_service_1 = require("../../infra/database/database.service");
const paystack_client_1 = require("../../infra/paystack/paystack.client");
const banks_service_1 = require("./banks.service");
const client_1 = require("../../generated/prisma/client");
const MAX_ACCOUNT = 3;
const mask = (accountNumber) => `******${accountNumber.slice(-4)}`;
const view = (a) => ({
    id: a.id,
    bankName: a.bankName,
    bankCode: a.bankCode,
    accountNumber: mask(a.accountNumber),
    accountName: a.accountName,
    isDefault: a.isDefault,
});
function translate(error, userMessage) {
    if (error instanceof paystack_error_1.PaystackUnavailableError) {
        throw new common_1.ServiceUnavailableException("Our payment provider is unavailable.");
    }
    if (error instanceof paystack_error_1.PaystackApiError &&
        error.httpStatus >= 400 &&
        error.httpStatus < 500) {
        throw new common_1.UnprocessableEntityException(userMessage);
    }
    throw new common_1.ServiceUnavailableException("Our payment provider had a problem. Try again shortly.");
}
let PayoutAccountsService = class PayoutAccountsService {
    prisma;
    paystack;
    banks;
    constructor(prisma, paystack, banks) {
        this.prisma = prisma;
        this.paystack = paystack;
        this.banks = banks;
    }
    async add(userId, dto) {
        let bank;
        try {
            bank = await this.banks.find(dto.bankCode);
        }
        catch (e) {
            translate(e, "Could not load tha bank list");
        }
        if (!bank)
            throw new common_1.BadRequestException("Unknown bank");
        const existing = await this.prisma.payoutAccount.count({
            where: { userId },
        });
        if (existing >= MAX_ACCOUNT) {
            throw new common_1.ConflictException(`You can save up to  ${MAX_ACCOUNT} payout accounts`);
        }
        let resolved;
        try {
            resolved = await this.paystack.resolveAccount(dto.accountNumber, dto.bankCode);
            console.log(resolved, "resolved");
        }
        catch (e) {
            console.log(e, "error");
            translate(e, "We could not verify this account.Check the bank and account number.");
        }
        const user = await this.prisma.user.findUniqueOrThrow({
            where: { id: userId },
            select: { name: true },
        });
        let recipient;
        try {
            recipient = await this.paystack.createTransferRecipient({
                name: resolved.account_name,
                accountNumber: dto.accountNumber,
                bankCode: dto.bankCode,
            });
        }
        catch (e) {
            translate(e, "We could not register this account for payout");
        }
        try {
            const created = await this.prisma.payoutAccount.create({
                data: {
                    userId,
                    bankCode: dto.bankCode,
                    bankName: bank.name,
                    accountName: resolved.account_name,
                    accountNumber: dto.accountNumber,
                    recipientCode: recipient.recipient_code,
                    isDefault: existing === 0,
                },
            });
            return view(created);
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                error.code === "P2002") {
                throw new common_1.ConflictException("You have already added this account");
            }
            throw error;
        }
    }
    async listMine(userId) {
        const accounts = await this.prisma.payoutAccount.findMany({
            where: { userId },
            orderBy: { createdAt: "asc" },
        });
        return accounts.map(view);
    }
    async setDefault(userId, id) {
        await this.prisma.$transaction(async (tx) => {
            await tx.payoutAccount.updateMany({
                where: { userId },
                data: { isDefault: false },
            });
            const result = await tx.payoutAccount.updateMany({
                where: { id, userId },
                data: { isDefault: true },
            });
            if (result.count !== 1)
                throw new common_1.NotFoundException("Account not found");
        });
        return this.listMine(userId);
    }
    async remove(userId, id) {
        const account = await this.prisma.payoutAccount.findFirst({
            where: { id, userId },
        });
        if (!account)
            throw new common_1.NotFoundException("Account not found");
        if (account.isDefault) {
            const running = await this.prisma.membership.count({
                where: {
                    userId,
                    status: client_1.MemberStatus.ACCEPTED,
                    group: { status: client_1.GroupStatus.ACTIVE },
                },
            });
            if (running > 0) {
                throw new common_1.ConflictException("Choose another default account first: you are in a running group");
            }
        }
        try {
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                error.code === "P2003") {
                throw new common_1.ConflictException("This account has payout history and cannot be deleted");
                throw error;
            }
        }
    }
};
exports.PayoutAccountsService = PayoutAccountsService;
exports.PayoutAccountsService = PayoutAccountsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.PrismaService,
        paystack_client_1.Paystackclient,
        banks_service_1.BankService])
], PayoutAccountsService);
//# sourceMappingURL=payout-account.service.js.map