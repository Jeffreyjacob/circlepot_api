import { PayoutAccountsService } from "./payout-account.service";
import { AddPayoutAccountDto } from "./dto/add-payout-account.dto";
import { BankService } from "./banks.service";
export declare class PayoutAccoutController {
    private readonly payoutAccoutService;
    private readonly bankService;
    constructor(payoutAccoutService: PayoutAccountsService, bankService: BankService);
    listMine(user: {
        id: string;
    }): Promise<{
        id: string;
        bankName: string;
        bankCode: string;
        accountNumber: string;
        accountName: string;
        isDefault: boolean;
    }[]>;
    add(user: {
        id: string;
    }, dto: AddPayoutAccountDto): Promise<{
        id: string;
        bankName: string;
        bankCode: string;
        accountNumber: string;
        accountName: string;
        isDefault: boolean;
    }>;
    getBanks(): Promise<import("./banks.service").BankOption[]>;
    getBankByCode(code: string): Promise<import("./banks.service").BankOption | undefined>;
    setDefault(user: {
        id: string;
    }, id: string): Promise<{
        id: string;
        bankName: string;
        bankCode: string;
        accountNumber: string;
        accountName: string;
        isDefault: boolean;
    }[]>;
    remove(user: {
        id: string;
    }, id: string): Promise<void>;
}
