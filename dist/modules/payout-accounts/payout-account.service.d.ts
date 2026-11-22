import { PrismaService } from "../../infra/database/database.service";
import { Paystackclient } from "../../infra/paystack/paystack.client";
import { BankService } from "./banks.service";
import { AddPayoutAccountDto } from "./dto/add-payout-account.dto";
export declare function translate(error: unknown, userMessage: string): never;
export declare class PayoutAccountsService {
    private readonly prisma;
    private readonly paystack;
    private readonly banks;
    constructor(prisma: PrismaService, paystack: Paystackclient, banks: BankService);
    add(userId: string, dto: AddPayoutAccountDto): Promise<{
        id: string;
        bankName: string;
        bankCode: string;
        accountNumber: string;
        accountName: string;
        isDefault: boolean;
    }>;
    listMine(userId: string): Promise<{
        id: string;
        bankName: string;
        bankCode: string;
        accountNumber: string;
        accountName: string;
        isDefault: boolean;
    }[]>;
    setDefault(userId: string, id: string): Promise<{
        id: string;
        bankName: string;
        bankCode: string;
        accountNumber: string;
        accountName: string;
        isDefault: boolean;
    }[]>;
    remove(userId: string, id: string): Promise<void>;
}
