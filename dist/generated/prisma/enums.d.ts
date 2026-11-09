export declare const GroupStatus: {
    readonly DRAFT: "DRAFT";
    readonly OPEN: "OPEN";
    readonly ACTIVE: "ACTIVE";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type GroupStatus = (typeof GroupStatus)[keyof typeof GroupStatus];
export declare const Frequency: {
    readonly DAILY: "DAILY";
    readonly WEEKLY: "WEEKLY";
    readonly MONTHLY: "MONTHLY";
};
export type Frequency = (typeof Frequency)[keyof typeof Frequency];
export declare const MemberStatus: {
    readonly INVITED: "INVITED";
    readonly ACCEPTED: "ACCEPTED";
    readonly DECLINED: "DECLINED";
    readonly REMOVED: "REMOVED";
};
export type MemberStatus = (typeof MemberStatus)[keyof typeof MemberStatus];
export declare const CycleStatus: {
    readonly UPCOMING: "UPCOMING";
    readonly COLLECTING: "COLLECTING";
    readonly FUNDED: "FUNDED";
    readonly PAID_OUT: "PAID_OUT";
};
export type CycleStatus = (typeof CycleStatus)[keyof typeof CycleStatus];
export declare const InstallmentStatus: {
    readonly PENDING: "PENDING";
    readonly PAID: "PAID";
    readonly OVERDUE: "OVERDUE";
};
export type InstallmentStatus = (typeof InstallmentStatus)[keyof typeof InstallmentStatus];
export declare const PaymentStatus: {
    readonly INITIATED: "INITIATED";
    readonly SUCCESS: "SUCCESS";
    readonly FAILED: "FAILED";
    readonly DUPLICATE: "DUPLICATE";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const WebhookStatus: {
    readonly RECIEVED: "RECIEVED";
    readonly PROCESSED: "PROCESSED";
    readonly FAILED: "FAILED";
};
export type WebhookStatus = (typeof WebhookStatus)[keyof typeof WebhookStatus];
export declare const PayoutType: {
    readonly CYCLE_PAYOUT: "CYCLE_PAYOUT";
    readonly HELD_RELEASE: "HELD_RELEASE";
    readonly SAVING_WITHDRAWAL: "SAVING_WITHDRAWAL";
};
export type PayoutType = (typeof PayoutType)[keyof typeof PayoutType];
export declare const PayoutStatus: {
    readonly PENDING: "PENDING";
    readonly PROCESSING: "PROCESSING";
    readonly SUCCESS: "SUCCESS";
    readonly FAILED: "FAILED";
};
export type PayoutStatus = (typeof PayoutStatus)[keyof typeof PayoutStatus];
export declare const LedgerType: {
    readonly CONTRIBUTION: "CONTRIBUTION";
    readonly LATE_FEE: "LATE_FEE";
    readonly PAYOUT: "PAYOUT";
    readonly HELD_RELEASE: "HELD_RELEASE";
    readonly HELD_APPIED: "HELD_APPIED";
    readonly SAVINGS_DEPOSIT: "SAVINGS_DEPOSIT";
    readonly SAVINGS_WITHDRAWAL: "SAVINGS_WITHDRAWAL";
};
export type LedgerType = (typeof LedgerType)[keyof typeof LedgerType];
export declare const SavingsStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly MATURED: "MATURED";
    readonly WIDTHDRAWN: "WIDTHDRAWN";
};
export type SavingsStatus = (typeof SavingsStatus)[keyof typeof SavingsStatus];
export declare const UnlockRule: {
    readonly AT_END_DATE: "AT_END_DATE";
    readonly AT_TARGET: "AT_TARGET";
};
export type UnlockRule = (typeof UnlockRule)[keyof typeof UnlockRule];
