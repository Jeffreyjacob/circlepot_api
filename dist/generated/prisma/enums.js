"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnlockRule = exports.SavingsStatus = exports.LedgerType = exports.PayoutStatus = exports.PayoutType = exports.WebhookStatus = exports.PaymentStatus = exports.InstallmentStatus = exports.CycleStatus = exports.MemberStatus = exports.Frequency = exports.GroupStatus = void 0;
exports.GroupStatus = {
    DRAFT: 'DRAFT',
    OPEN: 'OPEN',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED',
    CANCELLED: 'CANCELLED'
};
exports.Frequency = {
    DAILY: 'DAILY',
    WEEKLY: 'WEEKLY',
    MONTHLY: 'MONTHLY'
};
exports.MemberStatus = {
    INVITED: 'INVITED',
    ACCEPTED: 'ACCEPTED',
    DECLINED: 'DECLINED',
    REMOVED: 'REMOVED'
};
exports.CycleStatus = {
    UPCOMING: 'UPCOMING',
    COLLECTING: 'COLLECTING',
    FUNDED: 'FUNDED',
    PAID_OUT: 'PAID_OUT'
};
exports.InstallmentStatus = {
    PENDING: 'PENDING',
    PAID: 'PAID',
    OVERDUE: 'OVERDUE'
};
exports.PaymentStatus = {
    INITIATED: 'INITIATED',
    SUCCESS: 'SUCCESS',
    FAILED: 'FAILED',
    DUPLICATE: 'DUPLICATE'
};
exports.WebhookStatus = {
    RECIEVED: 'RECIEVED',
    PROCESSED: 'PROCESSED',
    FAILED: 'FAILED'
};
exports.PayoutType = {
    CYCLE_PAYOUT: 'CYCLE_PAYOUT',
    HELD_RELEASE: 'HELD_RELEASE',
    SAVING_WITHDRAWAL: 'SAVING_WITHDRAWAL'
};
exports.PayoutStatus = {
    PENDING: 'PENDING',
    PROCESSING: 'PROCESSING',
    SUCCESS: 'SUCCESS',
    FAILED: 'FAILED'
};
exports.LedgerType = {
    CONTRIBUTION: 'CONTRIBUTION',
    LATE_FEE: 'LATE_FEE',
    PAYOUT: 'PAYOUT',
    HELD_RELEASE: 'HELD_RELEASE',
    HELD_APPIED: 'HELD_APPIED',
    SAVINGS_DEPOSIT: 'SAVINGS_DEPOSIT',
    SAVINGS_WITHDRAWAL: 'SAVINGS_WITHDRAWAL'
};
exports.SavingsStatus = {
    ACTIVE: 'ACTIVE',
    MATURED: 'MATURED',
    WIDTHDRAWN: 'WIDTHDRAWN'
};
exports.UnlockRule = {
    AT_END_DATE: 'AT_END_DATE',
    AT_TARGET: 'AT_TARGET'
};
//# sourceMappingURL=enums.js.map