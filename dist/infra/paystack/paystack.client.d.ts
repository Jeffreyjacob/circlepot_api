import { ConfigService } from "@nestjs/config";
export interface PaystackBank {
    name: string;
    code: string;
    active: boolean;
}
export interface ResolvedAccount {
    account_number: string;
    account_name: string;
}
export interface TransferRecipient {
    recipient_code: string;
}
export declare class Paystackclient {
    private readonly baseUrl;
    private readonly secretKey;
    constructor(config: ConfigService);
    private request;
    listNigerianBank(): Promise<PaystackBank[]>;
    resolveAccount(accountNumber: string, bankCode: string): Promise<ResolvedAccount>;
    createTransferRecipient(input: {
        name: string;
        accountNumber: string;
        bankCode: string;
    }): Promise<TransferRecipient>;
}
