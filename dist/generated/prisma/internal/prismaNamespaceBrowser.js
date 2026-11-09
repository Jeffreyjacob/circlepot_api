"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.JsonNullValueInput = exports.SortOrder = exports.SavingsDepositScalarFieldEnum = exports.SavingsGoalScalarFieldEnum = exports.LedgerEntryScalarFieldEnum = exports.PayoutScalarFieldEnum = exports.WebhookEventScalarFieldEnum = exports.PaymentScalarFieldEnum = exports.InstallmentScalarFieldEnum = exports.CycleScalarFieldEnum = exports.InviteScalarFieldEnum = exports.MembershipScalarFieldEnum = exports.GroupScalarFieldEnum = exports.PayoutAccountScalarFieldEnum = exports.RefreshTokenScalarFieldEnum = exports.PasswordResetTokenScalarFieldEnum = exports.EmailVerificationTokenScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    EmailVerificationToken: 'EmailVerificationToken',
    PasswordResetToken: 'PasswordResetToken',
    RefreshToken: 'RefreshToken',
    PayoutAccount: 'PayoutAccount',
    Group: 'Group',
    Membership: 'Membership',
    Invite: 'Invite',
    Cycle: 'Cycle',
    Installment: 'Installment',
    Payment: 'Payment',
    WebhookEvent: 'WebhookEvent',
    Payout: 'Payout',
    LedgerEntry: 'LedgerEntry',
    SavingsGoal: 'SavingsGoal',
    SavingsDeposit: 'SavingsDeposit'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    emailVerifiedAt: 'emailVerifiedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.EmailVerificationTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
};
exports.PasswordResetTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
};
exports.RefreshTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    familyId: 'familyId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt'
};
exports.PayoutAccountScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    bankCode: 'bankCode',
    accountNumber: 'accountNumber',
    accountName: 'accountName',
    recipientCode: 'recipientCode',
    isDefault: 'isDefault',
    createdAt: 'createdAt'
};
exports.GroupScalarFieldEnum = {
    id: 'id',
    hostId: 'hostId',
    name: 'name',
    potKobo: 'potKobo',
    seats: 'seats',
    frequency: 'frequency',
    startDate: 'startDate',
    endDate: 'endDate',
    heldPercent: 'heldPercent',
    lateFreeKobo: 'lateFreeKobo',
    rulesVersion: 'rulesVersion',
    status: 'status',
    sourceGroupId: 'sourceGroupId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.MembershipScalarFieldEnum = {
    id: 'id',
    groupId: 'groupId',
    userId: 'userId',
    status: 'status',
    payoutOrder: 'payoutOrder',
    acceptedAt: 'acceptedAt',
    rulesVersionAccepted: 'rulesVersionAccepted',
    createdAt: 'createdAt'
};
exports.InviteScalarFieldEnum = {
    id: 'id',
    groupId: 'groupId',
    email: 'email',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    acceptedAt: 'acceptedAt',
    createdAt: 'createdAt'
};
exports.CycleScalarFieldEnum = {
    id: 'id',
    groupId: 'groupId',
    number: 'number',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    status: 'status',
    fundedAt: 'fundedAt',
    createdAt: 'createdAt'
};
exports.InstallmentScalarFieldEnum = {
    id: 'id',
    cycleId: 'cycleId',
    membershipId: 'membershipId',
    sequence: 'sequence',
    amountKobo: 'amountKobo',
    lateFeeKobo: 'lateFeeKobo',
    dueAt: 'dueAt',
    status: 'status',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PaymentScalarFieldEnum = {
    id: 'id',
    installmentId: 'installmentId',
    reference: 'reference',
    amountKobo: 'amountKobo',
    status: 'status',
    savingsDepositId: 'savingsDepositId',
    providerTransactionId: 'providerTransactionId',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.WebhookEventScalarFieldEnum = {
    id: 'id',
    provider: 'provider',
    eventkey: 'eventkey',
    eventType: 'eventType',
    payload: 'payload',
    status: 'status',
    attempts: 'attempts',
    error: 'error',
    recievedAt: 'recievedAt',
    processedAt: 'processedAt'
};
exports.PayoutScalarFieldEnum = {
    id: 'id',
    type: 'type',
    cycleId: 'cycleId',
    membershipId: 'membershipId',
    payoutAccountId: 'payoutAccountId',
    amountKobo: 'amountKobo',
    heldKobo: 'heldKobo',
    status: 'status',
    reference: 'reference',
    providerTransferCode: 'providerTransferCode',
    savingsGoalId: 'savingsGoalId',
    attempts: 'attempts',
    failureReason: 'failureReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.LedgerEntryScalarFieldEnum = {
    id: 'id',
    idempotencyKey: 'idempotencyKey',
    groupId: 'groupId',
    savingsGoalId: 'savingsGoalId',
    userId: 'userId',
    type: 'type',
    amountKobo: 'amountKobo',
    paymentId: 'paymentId',
    payoutId: 'payoutId',
    createdAt: 'createdAt'
};
exports.SavingsGoalScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    name: 'name',
    targetKobo: 'targetKobo',
    depositKobo: 'depositKobo',
    frequency: 'frequency',
    startDate: 'startDate',
    endDate: 'endDate',
    unlockRule: 'unlockRule',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SavingsDepositScalarFieldEnum = {
    id: 'id',
    goalId: 'goalId',
    sequence: 'sequence',
    amountKobo: 'amountKobo',
    dueAt: 'dueAt',
    status: 'status',
    paidAt: 'paidAt',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map