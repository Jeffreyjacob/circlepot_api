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
export interface VerifiedTransaction {
    id: number;
    status: string;
    reference: string;
    amount: number;
    currency: string;
    paid_at: string | null;
    channel: string | null;
    authorization: Record<string, unknown> | null;
}
export interface InitializedTransaction {
    authorization_url: string;
    access_code: string;
    reference: string;
}
export declare class Paystackclient {
    private readonly baseUrl;
    private readonly secretKey;
    private readonly logger;
    constructor(config: ConfigService);
    private request;
    listNigerianBank(): Promise<PaystackBank[]>;
    resolveAccount(accountNumber: string, bankCode: string): Promise<ResolvedAccount>;
    createTransferRecipient(input: {
        name: string;
        accountNumber: string;
        bankCode: string;
    }): Promise<TransferRecipient>;
    verifyTransaction(reference: string): Promise<VerifiedTransaction>;
    initializeTransaction(input: {
        email: string;
        amountKobo: number;
        reference: string;
        callbackUrl: string;
        metadata?: Record<string, unknown>;
    }): Promise<InitializedTransaction>;
}
