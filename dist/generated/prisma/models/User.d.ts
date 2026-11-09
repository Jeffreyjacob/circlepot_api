import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    name: string | null;
    emailVerifiedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    name: string | null;
    emailVerifiedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    passwordHash: number;
    name: number;
    emailVerifiedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    name?: true;
    emailVerifiedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    name?: true;
    emailVerifiedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    name?: true;
    emailVerifiedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    emailVerifiedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    emailTokens?: Prisma.EmailVerificationTokenListRelationFilter;
    passwordResetToken?: Prisma.PasswordResetTokenListRelationFilter;
    refreshToken?: Prisma.RefreshTokenListRelationFilter;
    payoutAccounts?: Prisma.PayoutAccountListRelationFilter;
    hostedGroups?: Prisma.GroupListRelationFilter;
    memberships?: Prisma.MembershipListRelationFilter;
    ledgerEntry?: Prisma.LedgerEntryListRelationFilter;
    savingsGoals?: Prisma.SavingsGoalListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    emailTokens?: Prisma.EmailVerificationTokenOrderByRelationAggregateInput;
    passwordResetToken?: Prisma.PasswordResetTokenOrderByRelationAggregateInput;
    refreshToken?: Prisma.RefreshTokenOrderByRelationAggregateInput;
    payoutAccounts?: Prisma.PayoutAccountOrderByRelationAggregateInput;
    hostedGroups?: Prisma.GroupOrderByRelationAggregateInput;
    memberships?: Prisma.MembershipOrderByRelationAggregateInput;
    ledgerEntry?: Prisma.LedgerEntryOrderByRelationAggregateInput;
    savingsGoals?: Prisma.SavingsGoalOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    passwordHash?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    emailVerifiedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    emailTokens?: Prisma.EmailVerificationTokenListRelationFilter;
    passwordResetToken?: Prisma.PasswordResetTokenListRelationFilter;
    refreshToken?: Prisma.RefreshTokenListRelationFilter;
    payoutAccounts?: Prisma.PayoutAccountListRelationFilter;
    hostedGroups?: Prisma.GroupListRelationFilter;
    memberships?: Prisma.MembershipListRelationFilter;
    ledgerEntry?: Prisma.LedgerEntryListRelationFilter;
    savingsGoals?: Prisma.SavingsGoalListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    passwordHash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    emailVerifiedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emailTokens?: Prisma.EmailVerificationTokenCreateNestedManyWithoutUserInput;
    passwordResetToken?: Prisma.PasswordResetTokenCreateNestedManyWithoutUserInput;
    refreshToken?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    payoutAccounts?: Prisma.PayoutAccountCreateNestedManyWithoutUserInput;
    hostedGroups?: Prisma.GroupCreateNestedManyWithoutHostInput;
    memberships?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    ledgerEntry?: Prisma.LedgerEntryCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput;
    passwordResetToken?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput;
    refreshToken?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    payoutAccounts?: Prisma.PayoutAccountUncheckedCreateNestedManyWithoutUserInput;
    hostedGroups?: Prisma.GroupUncheckedCreateNestedManyWithoutHostInput;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntry?: Prisma.LedgerEntryUncheckedCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUpdateManyWithoutUserNestedInput;
    passwordResetToken?: Prisma.PasswordResetTokenUpdateManyWithoutUserNestedInput;
    refreshToken?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    payoutAccounts?: Prisma.PayoutAccountUpdateManyWithoutUserNestedInput;
    hostedGroups?: Prisma.GroupUpdateManyWithoutHostNestedInput;
    memberships?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    ledgerEntry?: Prisma.LedgerEntryUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput;
    passwordResetToken?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput;
    refreshToken?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    payoutAccounts?: Prisma.PayoutAccountUncheckedUpdateManyWithoutUserNestedInput;
    hostedGroups?: Prisma.GroupUncheckedUpdateManyWithoutHostNestedInput;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntry?: Prisma.LedgerEntryUncheckedUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutEmailTokensInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEmailTokensInput, Prisma.UserUncheckedCreateWithoutEmailTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEmailTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutEmailTokensNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEmailTokensInput, Prisma.UserUncheckedCreateWithoutEmailTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEmailTokensInput;
    upsert?: Prisma.UserUpsertWithoutEmailTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutEmailTokensInput, Prisma.UserUpdateWithoutEmailTokensInput>, Prisma.UserUncheckedUpdateWithoutEmailTokensInput>;
};
export type UserCreateNestedOneWithoutPasswordResetTokenInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPasswordResetTokenInput, Prisma.UserUncheckedCreateWithoutPasswordResetTokenInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPasswordResetTokenInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPasswordResetTokenNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPasswordResetTokenInput, Prisma.UserUncheckedCreateWithoutPasswordResetTokenInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPasswordResetTokenInput;
    upsert?: Prisma.UserUpsertWithoutPasswordResetTokenInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPasswordResetTokenInput, Prisma.UserUpdateWithoutPasswordResetTokenInput>, Prisma.UserUncheckedUpdateWithoutPasswordResetTokenInput>;
};
export type UserCreateNestedOneWithoutRefreshTokenInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokenInput, Prisma.UserUncheckedCreateWithoutRefreshTokenInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRefreshTokenInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutRefreshTokenNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokenInput, Prisma.UserUncheckedCreateWithoutRefreshTokenInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRefreshTokenInput;
    upsert?: Prisma.UserUpsertWithoutRefreshTokenInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRefreshTokenInput, Prisma.UserUpdateWithoutRefreshTokenInput>, Prisma.UserUncheckedUpdateWithoutRefreshTokenInput>;
};
export type UserCreateNestedOneWithoutPayoutAccountsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPayoutAccountsInput, Prisma.UserUncheckedCreateWithoutPayoutAccountsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPayoutAccountsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPayoutAccountsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPayoutAccountsInput, Prisma.UserUncheckedCreateWithoutPayoutAccountsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPayoutAccountsInput;
    upsert?: Prisma.UserUpsertWithoutPayoutAccountsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPayoutAccountsInput, Prisma.UserUpdateWithoutPayoutAccountsInput>, Prisma.UserUncheckedUpdateWithoutPayoutAccountsInput>;
};
export type UserCreateNestedOneWithoutHostedGroupsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutHostedGroupsInput, Prisma.UserUncheckedCreateWithoutHostedGroupsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutHostedGroupsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutHostedGroupsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutHostedGroupsInput, Prisma.UserUncheckedCreateWithoutHostedGroupsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutHostedGroupsInput;
    upsert?: Prisma.UserUpsertWithoutHostedGroupsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutHostedGroupsInput, Prisma.UserUpdateWithoutHostedGroupsInput>, Prisma.UserUncheckedUpdateWithoutHostedGroupsInput>;
};
export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMembershipsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMembershipsInput;
    upsert?: Prisma.UserUpsertWithoutMembershipsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMembershipsInput, Prisma.UserUpdateWithoutMembershipsInput>, Prisma.UserUncheckedUpdateWithoutMembershipsInput>;
};
export type UserCreateNestedOneWithoutLedgerEntryInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLedgerEntryInput, Prisma.UserUncheckedCreateWithoutLedgerEntryInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLedgerEntryInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutLedgerEntryNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLedgerEntryInput, Prisma.UserUncheckedCreateWithoutLedgerEntryInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLedgerEntryInput;
    upsert?: Prisma.UserUpsertWithoutLedgerEntryInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLedgerEntryInput, Prisma.UserUpdateWithoutLedgerEntryInput>, Prisma.UserUncheckedUpdateWithoutLedgerEntryInput>;
};
export type UserCreateNestedOneWithoutSavingsGoalsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSavingsGoalsInput, Prisma.UserUncheckedCreateWithoutSavingsGoalsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSavingsGoalsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSavingsGoalsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSavingsGoalsInput, Prisma.UserUncheckedCreateWithoutSavingsGoalsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSavingsGoalsInput;
    upsert?: Prisma.UserUpsertWithoutSavingsGoalsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSavingsGoalsInput, Prisma.UserUpdateWithoutSavingsGoalsInput>, Prisma.UserUncheckedUpdateWithoutSavingsGoalsInput>;
};
export type UserCreateWithoutEmailTokensInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    passwordResetToken?: Prisma.PasswordResetTokenCreateNestedManyWithoutUserInput;
    refreshToken?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    payoutAccounts?: Prisma.PayoutAccountCreateNestedManyWithoutUserInput;
    hostedGroups?: Prisma.GroupCreateNestedManyWithoutHostInput;
    memberships?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    ledgerEntry?: Prisma.LedgerEntryCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutEmailTokensInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    passwordResetToken?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput;
    refreshToken?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    payoutAccounts?: Prisma.PayoutAccountUncheckedCreateNestedManyWithoutUserInput;
    hostedGroups?: Prisma.GroupUncheckedCreateNestedManyWithoutHostInput;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntry?: Prisma.LedgerEntryUncheckedCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutEmailTokensInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutEmailTokensInput, Prisma.UserUncheckedCreateWithoutEmailTokensInput>;
};
export type UserUpsertWithoutEmailTokensInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutEmailTokensInput, Prisma.UserUncheckedUpdateWithoutEmailTokensInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutEmailTokensInput, Prisma.UserUncheckedCreateWithoutEmailTokensInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutEmailTokensInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutEmailTokensInput, Prisma.UserUncheckedUpdateWithoutEmailTokensInput>;
};
export type UserUpdateWithoutEmailTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.PasswordResetTokenUpdateManyWithoutUserNestedInput;
    refreshToken?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    payoutAccounts?: Prisma.PayoutAccountUpdateManyWithoutUserNestedInput;
    hostedGroups?: Prisma.GroupUpdateManyWithoutHostNestedInput;
    memberships?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    ledgerEntry?: Prisma.LedgerEntryUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutEmailTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetToken?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput;
    refreshToken?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    payoutAccounts?: Prisma.PayoutAccountUncheckedUpdateManyWithoutUserNestedInput;
    hostedGroups?: Prisma.GroupUncheckedUpdateManyWithoutHostNestedInput;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntry?: Prisma.LedgerEntryUncheckedUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutPasswordResetTokenInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emailTokens?: Prisma.EmailVerificationTokenCreateNestedManyWithoutUserInput;
    refreshToken?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    payoutAccounts?: Prisma.PayoutAccountCreateNestedManyWithoutUserInput;
    hostedGroups?: Prisma.GroupCreateNestedManyWithoutHostInput;
    memberships?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    ledgerEntry?: Prisma.LedgerEntryCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutPasswordResetTokenInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput;
    refreshToken?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    payoutAccounts?: Prisma.PayoutAccountUncheckedCreateNestedManyWithoutUserInput;
    hostedGroups?: Prisma.GroupUncheckedCreateNestedManyWithoutHostInput;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntry?: Prisma.LedgerEntryUncheckedCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutPasswordResetTokenInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPasswordResetTokenInput, Prisma.UserUncheckedCreateWithoutPasswordResetTokenInput>;
};
export type UserUpsertWithoutPasswordResetTokenInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPasswordResetTokenInput, Prisma.UserUncheckedUpdateWithoutPasswordResetTokenInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPasswordResetTokenInput, Prisma.UserUncheckedCreateWithoutPasswordResetTokenInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPasswordResetTokenInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPasswordResetTokenInput, Prisma.UserUncheckedUpdateWithoutPasswordResetTokenInput>;
};
export type UserUpdateWithoutPasswordResetTokenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUpdateManyWithoutUserNestedInput;
    refreshToken?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    payoutAccounts?: Prisma.PayoutAccountUpdateManyWithoutUserNestedInput;
    hostedGroups?: Prisma.GroupUpdateManyWithoutHostNestedInput;
    memberships?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    ledgerEntry?: Prisma.LedgerEntryUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutPasswordResetTokenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput;
    refreshToken?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    payoutAccounts?: Prisma.PayoutAccountUncheckedUpdateManyWithoutUserNestedInput;
    hostedGroups?: Prisma.GroupUncheckedUpdateManyWithoutHostNestedInput;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntry?: Prisma.LedgerEntryUncheckedUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutRefreshTokenInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emailTokens?: Prisma.EmailVerificationTokenCreateNestedManyWithoutUserInput;
    passwordResetToken?: Prisma.PasswordResetTokenCreateNestedManyWithoutUserInput;
    payoutAccounts?: Prisma.PayoutAccountCreateNestedManyWithoutUserInput;
    hostedGroups?: Prisma.GroupCreateNestedManyWithoutHostInput;
    memberships?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    ledgerEntry?: Prisma.LedgerEntryCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutRefreshTokenInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput;
    passwordResetToken?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput;
    payoutAccounts?: Prisma.PayoutAccountUncheckedCreateNestedManyWithoutUserInput;
    hostedGroups?: Prisma.GroupUncheckedCreateNestedManyWithoutHostInput;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntry?: Prisma.LedgerEntryUncheckedCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutRefreshTokenInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokenInput, Prisma.UserUncheckedCreateWithoutRefreshTokenInput>;
};
export type UserUpsertWithoutRefreshTokenInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutRefreshTokenInput, Prisma.UserUncheckedUpdateWithoutRefreshTokenInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokenInput, Prisma.UserUncheckedCreateWithoutRefreshTokenInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutRefreshTokenInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRefreshTokenInput, Prisma.UserUncheckedUpdateWithoutRefreshTokenInput>;
};
export type UserUpdateWithoutRefreshTokenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUpdateManyWithoutUserNestedInput;
    passwordResetToken?: Prisma.PasswordResetTokenUpdateManyWithoutUserNestedInput;
    payoutAccounts?: Prisma.PayoutAccountUpdateManyWithoutUserNestedInput;
    hostedGroups?: Prisma.GroupUpdateManyWithoutHostNestedInput;
    memberships?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    ledgerEntry?: Prisma.LedgerEntryUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutRefreshTokenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput;
    passwordResetToken?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput;
    payoutAccounts?: Prisma.PayoutAccountUncheckedUpdateManyWithoutUserNestedInput;
    hostedGroups?: Prisma.GroupUncheckedUpdateManyWithoutHostNestedInput;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntry?: Prisma.LedgerEntryUncheckedUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutPayoutAccountsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emailTokens?: Prisma.EmailVerificationTokenCreateNestedManyWithoutUserInput;
    passwordResetToken?: Prisma.PasswordResetTokenCreateNestedManyWithoutUserInput;
    refreshToken?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    hostedGroups?: Prisma.GroupCreateNestedManyWithoutHostInput;
    memberships?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    ledgerEntry?: Prisma.LedgerEntryCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutPayoutAccountsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput;
    passwordResetToken?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput;
    refreshToken?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    hostedGroups?: Prisma.GroupUncheckedCreateNestedManyWithoutHostInput;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntry?: Prisma.LedgerEntryUncheckedCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutPayoutAccountsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPayoutAccountsInput, Prisma.UserUncheckedCreateWithoutPayoutAccountsInput>;
};
export type UserUpsertWithoutPayoutAccountsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPayoutAccountsInput, Prisma.UserUncheckedUpdateWithoutPayoutAccountsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPayoutAccountsInput, Prisma.UserUncheckedCreateWithoutPayoutAccountsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPayoutAccountsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPayoutAccountsInput, Prisma.UserUncheckedUpdateWithoutPayoutAccountsInput>;
};
export type UserUpdateWithoutPayoutAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUpdateManyWithoutUserNestedInput;
    passwordResetToken?: Prisma.PasswordResetTokenUpdateManyWithoutUserNestedInput;
    refreshToken?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    hostedGroups?: Prisma.GroupUpdateManyWithoutHostNestedInput;
    memberships?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    ledgerEntry?: Prisma.LedgerEntryUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutPayoutAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput;
    passwordResetToken?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput;
    refreshToken?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    hostedGroups?: Prisma.GroupUncheckedUpdateManyWithoutHostNestedInput;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntry?: Prisma.LedgerEntryUncheckedUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutHostedGroupsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emailTokens?: Prisma.EmailVerificationTokenCreateNestedManyWithoutUserInput;
    passwordResetToken?: Prisma.PasswordResetTokenCreateNestedManyWithoutUserInput;
    refreshToken?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    payoutAccounts?: Prisma.PayoutAccountCreateNestedManyWithoutUserInput;
    memberships?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    ledgerEntry?: Prisma.LedgerEntryCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutHostedGroupsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput;
    passwordResetToken?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput;
    refreshToken?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    payoutAccounts?: Prisma.PayoutAccountUncheckedCreateNestedManyWithoutUserInput;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntry?: Prisma.LedgerEntryUncheckedCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutHostedGroupsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutHostedGroupsInput, Prisma.UserUncheckedCreateWithoutHostedGroupsInput>;
};
export type UserUpsertWithoutHostedGroupsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutHostedGroupsInput, Prisma.UserUncheckedUpdateWithoutHostedGroupsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutHostedGroupsInput, Prisma.UserUncheckedCreateWithoutHostedGroupsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutHostedGroupsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutHostedGroupsInput, Prisma.UserUncheckedUpdateWithoutHostedGroupsInput>;
};
export type UserUpdateWithoutHostedGroupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUpdateManyWithoutUserNestedInput;
    passwordResetToken?: Prisma.PasswordResetTokenUpdateManyWithoutUserNestedInput;
    refreshToken?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    payoutAccounts?: Prisma.PayoutAccountUpdateManyWithoutUserNestedInput;
    memberships?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    ledgerEntry?: Prisma.LedgerEntryUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutHostedGroupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput;
    passwordResetToken?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput;
    refreshToken?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    payoutAccounts?: Prisma.PayoutAccountUncheckedUpdateManyWithoutUserNestedInput;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntry?: Prisma.LedgerEntryUncheckedUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutMembershipsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emailTokens?: Prisma.EmailVerificationTokenCreateNestedManyWithoutUserInput;
    passwordResetToken?: Prisma.PasswordResetTokenCreateNestedManyWithoutUserInput;
    refreshToken?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    payoutAccounts?: Prisma.PayoutAccountCreateNestedManyWithoutUserInput;
    hostedGroups?: Prisma.GroupCreateNestedManyWithoutHostInput;
    ledgerEntry?: Prisma.LedgerEntryCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput;
    passwordResetToken?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput;
    refreshToken?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    payoutAccounts?: Prisma.PayoutAccountUncheckedCreateNestedManyWithoutUserInput;
    hostedGroups?: Prisma.GroupUncheckedCreateNestedManyWithoutHostInput;
    ledgerEntry?: Prisma.LedgerEntryUncheckedCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutMembershipsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
};
export type UserUpsertWithoutMembershipsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMembershipsInput, Prisma.UserUncheckedUpdateWithoutMembershipsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMembershipsInput, Prisma.UserUncheckedUpdateWithoutMembershipsInput>;
};
export type UserUpdateWithoutMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUpdateManyWithoutUserNestedInput;
    passwordResetToken?: Prisma.PasswordResetTokenUpdateManyWithoutUserNestedInput;
    refreshToken?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    payoutAccounts?: Prisma.PayoutAccountUpdateManyWithoutUserNestedInput;
    hostedGroups?: Prisma.GroupUpdateManyWithoutHostNestedInput;
    ledgerEntry?: Prisma.LedgerEntryUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput;
    passwordResetToken?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput;
    refreshToken?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    payoutAccounts?: Prisma.PayoutAccountUncheckedUpdateManyWithoutUserNestedInput;
    hostedGroups?: Prisma.GroupUncheckedUpdateManyWithoutHostNestedInput;
    ledgerEntry?: Prisma.LedgerEntryUncheckedUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutLedgerEntryInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emailTokens?: Prisma.EmailVerificationTokenCreateNestedManyWithoutUserInput;
    passwordResetToken?: Prisma.PasswordResetTokenCreateNestedManyWithoutUserInput;
    refreshToken?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    payoutAccounts?: Prisma.PayoutAccountCreateNestedManyWithoutUserInput;
    hostedGroups?: Prisma.GroupCreateNestedManyWithoutHostInput;
    memberships?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutLedgerEntryInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput;
    passwordResetToken?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput;
    refreshToken?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    payoutAccounts?: Prisma.PayoutAccountUncheckedCreateNestedManyWithoutUserInput;
    hostedGroups?: Prisma.GroupUncheckedCreateNestedManyWithoutHostInput;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutLedgerEntryInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLedgerEntryInput, Prisma.UserUncheckedCreateWithoutLedgerEntryInput>;
};
export type UserUpsertWithoutLedgerEntryInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLedgerEntryInput, Prisma.UserUncheckedUpdateWithoutLedgerEntryInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLedgerEntryInput, Prisma.UserUncheckedCreateWithoutLedgerEntryInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLedgerEntryInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLedgerEntryInput, Prisma.UserUncheckedUpdateWithoutLedgerEntryInput>;
};
export type UserUpdateWithoutLedgerEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUpdateManyWithoutUserNestedInput;
    passwordResetToken?: Prisma.PasswordResetTokenUpdateManyWithoutUserNestedInput;
    refreshToken?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    payoutAccounts?: Prisma.PayoutAccountUpdateManyWithoutUserNestedInput;
    hostedGroups?: Prisma.GroupUpdateManyWithoutHostNestedInput;
    memberships?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutLedgerEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput;
    passwordResetToken?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput;
    refreshToken?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    payoutAccounts?: Prisma.PayoutAccountUncheckedUpdateManyWithoutUserNestedInput;
    hostedGroups?: Prisma.GroupUncheckedUpdateManyWithoutHostNestedInput;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    savingsGoals?: Prisma.SavingsGoalUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSavingsGoalsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emailTokens?: Prisma.EmailVerificationTokenCreateNestedManyWithoutUserInput;
    passwordResetToken?: Prisma.PasswordResetTokenCreateNestedManyWithoutUserInput;
    refreshToken?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    payoutAccounts?: Prisma.PayoutAccountCreateNestedManyWithoutUserInput;
    hostedGroups?: Prisma.GroupCreateNestedManyWithoutHostInput;
    memberships?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    ledgerEntry?: Prisma.LedgerEntryCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSavingsGoalsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    name: string;
    emailVerifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput;
    passwordResetToken?: Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput;
    refreshToken?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    payoutAccounts?: Prisma.PayoutAccountUncheckedCreateNestedManyWithoutUserInput;
    hostedGroups?: Prisma.GroupUncheckedCreateNestedManyWithoutHostInput;
    memberships?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    ledgerEntry?: Prisma.LedgerEntryUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSavingsGoalsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSavingsGoalsInput, Prisma.UserUncheckedCreateWithoutSavingsGoalsInput>;
};
export type UserUpsertWithoutSavingsGoalsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSavingsGoalsInput, Prisma.UserUncheckedUpdateWithoutSavingsGoalsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSavingsGoalsInput, Prisma.UserUncheckedCreateWithoutSavingsGoalsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSavingsGoalsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSavingsGoalsInput, Prisma.UserUncheckedUpdateWithoutSavingsGoalsInput>;
};
export type UserUpdateWithoutSavingsGoalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUpdateManyWithoutUserNestedInput;
    passwordResetToken?: Prisma.PasswordResetTokenUpdateManyWithoutUserNestedInput;
    refreshToken?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    payoutAccounts?: Prisma.PayoutAccountUpdateManyWithoutUserNestedInput;
    hostedGroups?: Prisma.GroupUpdateManyWithoutHostNestedInput;
    memberships?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    ledgerEntry?: Prisma.LedgerEntryUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSavingsGoalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emailTokens?: Prisma.EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput;
    passwordResetToken?: Prisma.PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput;
    refreshToken?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    payoutAccounts?: Prisma.PayoutAccountUncheckedUpdateManyWithoutUserNestedInput;
    hostedGroups?: Prisma.GroupUncheckedUpdateManyWithoutHostNestedInput;
    memberships?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    ledgerEntry?: Prisma.LedgerEntryUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    emailTokens: number;
    passwordResetToken: number;
    refreshToken: number;
    payoutAccounts: number;
    hostedGroups: number;
    memberships: number;
    ledgerEntry: number;
    savingsGoals: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    emailTokens?: boolean | UserCountOutputTypeCountEmailTokensArgs;
    passwordResetToken?: boolean | UserCountOutputTypeCountPasswordResetTokenArgs;
    refreshToken?: boolean | UserCountOutputTypeCountRefreshTokenArgs;
    payoutAccounts?: boolean | UserCountOutputTypeCountPayoutAccountsArgs;
    hostedGroups?: boolean | UserCountOutputTypeCountHostedGroupsArgs;
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs;
    ledgerEntry?: boolean | UserCountOutputTypeCountLedgerEntryArgs;
    savingsGoals?: boolean | UserCountOutputTypeCountSavingsGoalsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountEmailTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmailVerificationTokenWhereInput;
};
export type UserCountOutputTypeCountPasswordResetTokenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PasswordResetTokenWhereInput;
};
export type UserCountOutputTypeCountRefreshTokenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefreshTokenWhereInput;
};
export type UserCountOutputTypeCountPayoutAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutAccountWhereInput;
};
export type UserCountOutputTypeCountHostedGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupWhereInput;
};
export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipWhereInput;
};
export type UserCountOutputTypeCountLedgerEntryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LedgerEntryWhereInput;
};
export type UserCountOutputTypeCountSavingsGoalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavingsGoalWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    name?: boolean;
    emailVerifiedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    emailTokens?: boolean | Prisma.User$emailTokensArgs<ExtArgs>;
    passwordResetToken?: boolean | Prisma.User$passwordResetTokenArgs<ExtArgs>;
    refreshToken?: boolean | Prisma.User$refreshTokenArgs<ExtArgs>;
    payoutAccounts?: boolean | Prisma.User$payoutAccountsArgs<ExtArgs>;
    hostedGroups?: boolean | Prisma.User$hostedGroupsArgs<ExtArgs>;
    memberships?: boolean | Prisma.User$membershipsArgs<ExtArgs>;
    ledgerEntry?: boolean | Prisma.User$ledgerEntryArgs<ExtArgs>;
    savingsGoals?: boolean | Prisma.User$savingsGoalsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    name?: boolean;
    emailVerifiedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    name?: boolean;
    emailVerifiedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    name?: boolean;
    emailVerifiedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "emailVerifiedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    emailTokens?: boolean | Prisma.User$emailTokensArgs<ExtArgs>;
    passwordResetToken?: boolean | Prisma.User$passwordResetTokenArgs<ExtArgs>;
    refreshToken?: boolean | Prisma.User$refreshTokenArgs<ExtArgs>;
    payoutAccounts?: boolean | Prisma.User$payoutAccountsArgs<ExtArgs>;
    hostedGroups?: boolean | Prisma.User$hostedGroupsArgs<ExtArgs>;
    memberships?: boolean | Prisma.User$membershipsArgs<ExtArgs>;
    ledgerEntry?: boolean | Prisma.User$ledgerEntryArgs<ExtArgs>;
    savingsGoals?: boolean | Prisma.User$savingsGoalsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        emailTokens: Prisma.$EmailVerificationTokenPayload<ExtArgs>[];
        passwordResetToken: Prisma.$PasswordResetTokenPayload<ExtArgs>[];
        refreshToken: Prisma.$RefreshTokenPayload<ExtArgs>[];
        payoutAccounts: Prisma.$PayoutAccountPayload<ExtArgs>[];
        hostedGroups: Prisma.$GroupPayload<ExtArgs>[];
        memberships: Prisma.$MembershipPayload<ExtArgs>[];
        ledgerEntry: Prisma.$LedgerEntryPayload<ExtArgs>[];
        savingsGoals: Prisma.$SavingsGoalPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        passwordHash: string;
        name: string;
        emailVerifiedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    emailTokens<T extends Prisma.User$emailTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$emailTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    passwordResetToken<T extends Prisma.User$passwordResetTokenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$passwordResetTokenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    refreshToken<T extends Prisma.User$refreshTokenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$refreshTokenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    payoutAccounts<T extends Prisma.User$payoutAccountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$payoutAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    hostedGroups<T extends Prisma.User$hostedGroupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$hostedGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    memberships<T extends Prisma.User$membershipsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ledgerEntry<T extends Prisma.User$ledgerEntryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ledgerEntryArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    savingsGoals<T extends Prisma.User$savingsGoalsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$savingsGoalsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly emailVerifiedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$emailTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailVerificationTokenSelect<ExtArgs> | null;
    omit?: Prisma.EmailVerificationTokenOmit<ExtArgs> | null;
    include?: Prisma.EmailVerificationTokenInclude<ExtArgs> | null;
    where?: Prisma.EmailVerificationTokenWhereInput;
    orderBy?: Prisma.EmailVerificationTokenOrderByWithRelationInput | Prisma.EmailVerificationTokenOrderByWithRelationInput[];
    cursor?: Prisma.EmailVerificationTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmailVerificationTokenScalarFieldEnum | Prisma.EmailVerificationTokenScalarFieldEnum[];
};
export type User$passwordResetTokenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PasswordResetTokenSelect<ExtArgs> | null;
    omit?: Prisma.PasswordResetTokenOmit<ExtArgs> | null;
    include?: Prisma.PasswordResetTokenInclude<ExtArgs> | null;
    where?: Prisma.PasswordResetTokenWhereInput;
    orderBy?: Prisma.PasswordResetTokenOrderByWithRelationInput | Prisma.PasswordResetTokenOrderByWithRelationInput[];
    cursor?: Prisma.PasswordResetTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PasswordResetTokenScalarFieldEnum | Prisma.PasswordResetTokenScalarFieldEnum[];
};
export type User$refreshTokenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.RefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.RefreshTokenInclude<ExtArgs> | null;
    where?: Prisma.RefreshTokenWhereInput;
    orderBy?: Prisma.RefreshTokenOrderByWithRelationInput | Prisma.RefreshTokenOrderByWithRelationInput[];
    cursor?: Prisma.RefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefreshTokenScalarFieldEnum | Prisma.RefreshTokenScalarFieldEnum[];
};
export type User$payoutAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutAccountSelect<ExtArgs> | null;
    omit?: Prisma.PayoutAccountOmit<ExtArgs> | null;
    include?: Prisma.PayoutAccountInclude<ExtArgs> | null;
    where?: Prisma.PayoutAccountWhereInput;
    orderBy?: Prisma.PayoutAccountOrderByWithRelationInput | Prisma.PayoutAccountOrderByWithRelationInput[];
    cursor?: Prisma.PayoutAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayoutAccountScalarFieldEnum | Prisma.PayoutAccountScalarFieldEnum[];
};
export type User$hostedGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where?: Prisma.GroupWhereInput;
    orderBy?: Prisma.GroupOrderByWithRelationInput | Prisma.GroupOrderByWithRelationInput[];
    cursor?: Prisma.GroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GroupScalarFieldEnum | Prisma.GroupScalarFieldEnum[];
};
export type User$membershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where?: Prisma.MembershipWhereInput;
    orderBy?: Prisma.MembershipOrderByWithRelationInput | Prisma.MembershipOrderByWithRelationInput[];
    cursor?: Prisma.MembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MembershipScalarFieldEnum | Prisma.MembershipScalarFieldEnum[];
};
export type User$ledgerEntryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntryInclude<ExtArgs> | null;
    where?: Prisma.LedgerEntryWhereInput;
    orderBy?: Prisma.LedgerEntryOrderByWithRelationInput | Prisma.LedgerEntryOrderByWithRelationInput[];
    cursor?: Prisma.LedgerEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LedgerEntryScalarFieldEnum | Prisma.LedgerEntryScalarFieldEnum[];
};
export type User$savingsGoalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsGoalSelect<ExtArgs> | null;
    omit?: Prisma.SavingsGoalOmit<ExtArgs> | null;
    include?: Prisma.SavingsGoalInclude<ExtArgs> | null;
    where?: Prisma.SavingsGoalWhereInput;
    orderBy?: Prisma.SavingsGoalOrderByWithRelationInput | Prisma.SavingsGoalOrderByWithRelationInput[];
    cursor?: Prisma.SavingsGoalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SavingsGoalScalarFieldEnum | Prisma.SavingsGoalScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
