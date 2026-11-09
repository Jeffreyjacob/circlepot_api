import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PayoutModel = runtime.Types.Result.DefaultSelection<Prisma.$PayoutPayload>;
export type AggregatePayout = {
    _count: PayoutCountAggregateOutputType | null;
    _avg: PayoutAvgAggregateOutputType | null;
    _sum: PayoutSumAggregateOutputType | null;
    _min: PayoutMinAggregateOutputType | null;
    _max: PayoutMaxAggregateOutputType | null;
};
export type PayoutAvgAggregateOutputType = {
    amountKobo: number | null;
    heldKobo: number | null;
    attempts: number | null;
};
export type PayoutSumAggregateOutputType = {
    amountKobo: number | null;
    heldKobo: number | null;
    attempts: number | null;
};
export type PayoutMinAggregateOutputType = {
    id: string | null;
    type: $Enums.PayoutType | null;
    cycleId: string | null;
    membershipId: string | null;
    payoutAccountId: string | null;
    amountKobo: number | null;
    heldKobo: number | null;
    status: $Enums.PayoutStatus | null;
    reference: string | null;
    providerTransferCode: string | null;
    savingsGoalId: string | null;
    attempts: number | null;
    failureReason: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PayoutMaxAggregateOutputType = {
    id: string | null;
    type: $Enums.PayoutType | null;
    cycleId: string | null;
    membershipId: string | null;
    payoutAccountId: string | null;
    amountKobo: number | null;
    heldKobo: number | null;
    status: $Enums.PayoutStatus | null;
    reference: string | null;
    providerTransferCode: string | null;
    savingsGoalId: string | null;
    attempts: number | null;
    failureReason: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PayoutCountAggregateOutputType = {
    id: number;
    type: number;
    cycleId: number;
    membershipId: number;
    payoutAccountId: number;
    amountKobo: number;
    heldKobo: number;
    status: number;
    reference: number;
    providerTransferCode: number;
    savingsGoalId: number;
    attempts: number;
    failureReason: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PayoutAvgAggregateInputType = {
    amountKobo?: true;
    heldKobo?: true;
    attempts?: true;
};
export type PayoutSumAggregateInputType = {
    amountKobo?: true;
    heldKobo?: true;
    attempts?: true;
};
export type PayoutMinAggregateInputType = {
    id?: true;
    type?: true;
    cycleId?: true;
    membershipId?: true;
    payoutAccountId?: true;
    amountKobo?: true;
    heldKobo?: true;
    status?: true;
    reference?: true;
    providerTransferCode?: true;
    savingsGoalId?: true;
    attempts?: true;
    failureReason?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PayoutMaxAggregateInputType = {
    id?: true;
    type?: true;
    cycleId?: true;
    membershipId?: true;
    payoutAccountId?: true;
    amountKobo?: true;
    heldKobo?: true;
    status?: true;
    reference?: true;
    providerTransferCode?: true;
    savingsGoalId?: true;
    attempts?: true;
    failureReason?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PayoutCountAggregateInputType = {
    id?: true;
    type?: true;
    cycleId?: true;
    membershipId?: true;
    payoutAccountId?: true;
    amountKobo?: true;
    heldKobo?: true;
    status?: true;
    reference?: true;
    providerTransferCode?: true;
    savingsGoalId?: true;
    attempts?: true;
    failureReason?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PayoutAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutWhereInput;
    orderBy?: Prisma.PayoutOrderByWithRelationInput | Prisma.PayoutOrderByWithRelationInput[];
    cursor?: Prisma.PayoutWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PayoutCountAggregateInputType;
    _avg?: PayoutAvgAggregateInputType;
    _sum?: PayoutSumAggregateInputType;
    _min?: PayoutMinAggregateInputType;
    _max?: PayoutMaxAggregateInputType;
};
export type GetPayoutAggregateType<T extends PayoutAggregateArgs> = {
    [P in keyof T & keyof AggregatePayout]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayout[P]> : Prisma.GetScalarType<T[P], AggregatePayout[P]>;
};
export type PayoutGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutWhereInput;
    orderBy?: Prisma.PayoutOrderByWithAggregationInput | Prisma.PayoutOrderByWithAggregationInput[];
    by: Prisma.PayoutScalarFieldEnum[] | Prisma.PayoutScalarFieldEnum;
    having?: Prisma.PayoutScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PayoutCountAggregateInputType | true;
    _avg?: PayoutAvgAggregateInputType;
    _sum?: PayoutSumAggregateInputType;
    _min?: PayoutMinAggregateInputType;
    _max?: PayoutMaxAggregateInputType;
};
export type PayoutGroupByOutputType = {
    id: string;
    type: $Enums.PayoutType;
    cycleId: string | null;
    membershipId: string | null;
    payoutAccountId: string;
    amountKobo: number;
    heldKobo: number;
    status: $Enums.PayoutStatus;
    reference: string;
    providerTransferCode: string | null;
    savingsGoalId: string | null;
    attempts: number;
    failureReason: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PayoutCountAggregateOutputType | null;
    _avg: PayoutAvgAggregateOutputType | null;
    _sum: PayoutSumAggregateOutputType | null;
    _min: PayoutMinAggregateOutputType | null;
    _max: PayoutMaxAggregateOutputType | null;
};
export type GetPayoutGroupByPayload<T extends PayoutGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PayoutGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PayoutGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PayoutGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PayoutGroupByOutputType[P]>;
}>>;
export type PayoutWhereInput = {
    AND?: Prisma.PayoutWhereInput | Prisma.PayoutWhereInput[];
    OR?: Prisma.PayoutWhereInput[];
    NOT?: Prisma.PayoutWhereInput | Prisma.PayoutWhereInput[];
    id?: Prisma.StringFilter<"Payout"> | string;
    type?: Prisma.EnumPayoutTypeFilter<"Payout"> | $Enums.PayoutType;
    cycleId?: Prisma.StringNullableFilter<"Payout"> | string | null;
    membershipId?: Prisma.StringNullableFilter<"Payout"> | string | null;
    payoutAccountId?: Prisma.StringFilter<"Payout"> | string;
    amountKobo?: Prisma.IntFilter<"Payout"> | number;
    heldKobo?: Prisma.IntFilter<"Payout"> | number;
    status?: Prisma.EnumPayoutStatusFilter<"Payout"> | $Enums.PayoutStatus;
    reference?: Prisma.StringFilter<"Payout"> | string;
    providerTransferCode?: Prisma.StringNullableFilter<"Payout"> | string | null;
    savingsGoalId?: Prisma.StringNullableFilter<"Payout"> | string | null;
    attempts?: Prisma.IntFilter<"Payout"> | number;
    failureReason?: Prisma.StringNullableFilter<"Payout"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payout"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Payout"> | Date | string;
    cycle?: Prisma.XOR<Prisma.CycleNullableScalarRelationFilter, Prisma.CycleWhereInput> | null;
    membership?: Prisma.XOR<Prisma.MembershipNullableScalarRelationFilter, Prisma.MembershipWhereInput> | null;
    payoutAccount?: Prisma.XOR<Prisma.PayoutAccountScalarRelationFilter, Prisma.PayoutAccountWhereInput>;
    savingsGoal?: Prisma.XOR<Prisma.SavingsGoalNullableScalarRelationFilter, Prisma.SavingsGoalWhereInput> | null;
};
export type PayoutOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    membershipId?: Prisma.SortOrderInput | Prisma.SortOrder;
    payoutAccountId?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    heldKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    providerTransferCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    savingsGoalId?: Prisma.SortOrderInput | Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    failureReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    cycle?: Prisma.CycleOrderByWithRelationInput;
    membership?: Prisma.MembershipOrderByWithRelationInput;
    payoutAccount?: Prisma.PayoutAccountOrderByWithRelationInput;
    savingsGoal?: Prisma.SavingsGoalOrderByWithRelationInput;
};
export type PayoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    reference?: string;
    cycleId_membershipId_type?: Prisma.PayoutCycleIdMembershipIdTypeCompoundUniqueInput;
    savingsGoalId_type?: Prisma.PayoutSavingsGoalIdTypeCompoundUniqueInput;
    AND?: Prisma.PayoutWhereInput | Prisma.PayoutWhereInput[];
    OR?: Prisma.PayoutWhereInput[];
    NOT?: Prisma.PayoutWhereInput | Prisma.PayoutWhereInput[];
    type?: Prisma.EnumPayoutTypeFilter<"Payout"> | $Enums.PayoutType;
    cycleId?: Prisma.StringNullableFilter<"Payout"> | string | null;
    membershipId?: Prisma.StringNullableFilter<"Payout"> | string | null;
    payoutAccountId?: Prisma.StringFilter<"Payout"> | string;
    amountKobo?: Prisma.IntFilter<"Payout"> | number;
    heldKobo?: Prisma.IntFilter<"Payout"> | number;
    status?: Prisma.EnumPayoutStatusFilter<"Payout"> | $Enums.PayoutStatus;
    providerTransferCode?: Prisma.StringNullableFilter<"Payout"> | string | null;
    savingsGoalId?: Prisma.StringNullableFilter<"Payout"> | string | null;
    attempts?: Prisma.IntFilter<"Payout"> | number;
    failureReason?: Prisma.StringNullableFilter<"Payout"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payout"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Payout"> | Date | string;
    cycle?: Prisma.XOR<Prisma.CycleNullableScalarRelationFilter, Prisma.CycleWhereInput> | null;
    membership?: Prisma.XOR<Prisma.MembershipNullableScalarRelationFilter, Prisma.MembershipWhereInput> | null;
    payoutAccount?: Prisma.XOR<Prisma.PayoutAccountScalarRelationFilter, Prisma.PayoutAccountWhereInput>;
    savingsGoal?: Prisma.XOR<Prisma.SavingsGoalNullableScalarRelationFilter, Prisma.SavingsGoalWhereInput> | null;
}, "id" | "reference" | "cycleId_membershipId_type" | "savingsGoalId_type">;
export type PayoutOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    membershipId?: Prisma.SortOrderInput | Prisma.SortOrder;
    payoutAccountId?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    heldKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    providerTransferCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    savingsGoalId?: Prisma.SortOrderInput | Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    failureReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PayoutCountOrderByAggregateInput;
    _avg?: Prisma.PayoutAvgOrderByAggregateInput;
    _max?: Prisma.PayoutMaxOrderByAggregateInput;
    _min?: Prisma.PayoutMinOrderByAggregateInput;
    _sum?: Prisma.PayoutSumOrderByAggregateInput;
};
export type PayoutScalarWhereWithAggregatesInput = {
    AND?: Prisma.PayoutScalarWhereWithAggregatesInput | Prisma.PayoutScalarWhereWithAggregatesInput[];
    OR?: Prisma.PayoutScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PayoutScalarWhereWithAggregatesInput | Prisma.PayoutScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Payout"> | string;
    type?: Prisma.EnumPayoutTypeWithAggregatesFilter<"Payout"> | $Enums.PayoutType;
    cycleId?: Prisma.StringNullableWithAggregatesFilter<"Payout"> | string | null;
    membershipId?: Prisma.StringNullableWithAggregatesFilter<"Payout"> | string | null;
    payoutAccountId?: Prisma.StringWithAggregatesFilter<"Payout"> | string;
    amountKobo?: Prisma.IntWithAggregatesFilter<"Payout"> | number;
    heldKobo?: Prisma.IntWithAggregatesFilter<"Payout"> | number;
    status?: Prisma.EnumPayoutStatusWithAggregatesFilter<"Payout"> | $Enums.PayoutStatus;
    reference?: Prisma.StringWithAggregatesFilter<"Payout"> | string;
    providerTransferCode?: Prisma.StringNullableWithAggregatesFilter<"Payout"> | string | null;
    savingsGoalId?: Prisma.StringNullableWithAggregatesFilter<"Payout"> | string | null;
    attempts?: Prisma.IntWithAggregatesFilter<"Payout"> | number;
    failureReason?: Prisma.StringNullableWithAggregatesFilter<"Payout"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Payout"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Payout"> | Date | string;
};
export type PayoutCreateInput = {
    id?: string;
    type: $Enums.PayoutType;
    amountKobo: number;
    heldKobo: number;
    status?: $Enums.PayoutStatus;
    reference: string;
    providerTransferCode?: string | null;
    attempts?: number;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycle?: Prisma.CycleCreateNestedOneWithoutPayoutsInput;
    membership?: Prisma.MembershipCreateNestedOneWithoutPayoutsInput;
    payoutAccount: Prisma.PayoutAccountCreateNestedOneWithoutPayOutsInput;
    savingsGoal?: Prisma.SavingsGoalCreateNestedOneWithoutPayoutsInput;
};
export type PayoutUncheckedCreateInput = {
    id?: string;
    type: $Enums.PayoutType;
    cycleId?: string | null;
    membershipId?: string | null;
    payoutAccountId: string;
    amountKobo: number;
    heldKobo: number;
    status?: $Enums.PayoutStatus;
    reference: string;
    providerTransferCode?: string | null;
    savingsGoalId?: string | null;
    attempts?: number;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PayoutUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPayoutTypeFieldUpdateOperationsInput | $Enums.PayoutType;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    heldKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    providerTransferCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycle?: Prisma.CycleUpdateOneWithoutPayoutsNestedInput;
    membership?: Prisma.MembershipUpdateOneWithoutPayoutsNestedInput;
    payoutAccount?: Prisma.PayoutAccountUpdateOneRequiredWithoutPayOutsNestedInput;
    savingsGoal?: Prisma.SavingsGoalUpdateOneWithoutPayoutsNestedInput;
};
export type PayoutUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPayoutTypeFieldUpdateOperationsInput | $Enums.PayoutType;
    cycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    membershipId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    heldKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    providerTransferCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    savingsGoalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutCreateManyInput = {
    id?: string;
    type: $Enums.PayoutType;
    cycleId?: string | null;
    membershipId?: string | null;
    payoutAccountId: string;
    amountKobo: number;
    heldKobo: number;
    status?: $Enums.PayoutStatus;
    reference: string;
    providerTransferCode?: string | null;
    savingsGoalId?: string | null;
    attempts?: number;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PayoutUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPayoutTypeFieldUpdateOperationsInput | $Enums.PayoutType;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    heldKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    providerTransferCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPayoutTypeFieldUpdateOperationsInput | $Enums.PayoutType;
    cycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    membershipId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    heldKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    providerTransferCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    savingsGoalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutListRelationFilter = {
    every?: Prisma.PayoutWhereInput;
    some?: Prisma.PayoutWhereInput;
    none?: Prisma.PayoutWhereInput;
};
export type PayoutOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PayoutCycleIdMembershipIdTypeCompoundUniqueInput = {
    cycleId: string;
    membershipId: string;
    type: $Enums.PayoutType;
};
export type PayoutSavingsGoalIdTypeCompoundUniqueInput = {
    savingsGoalId: string;
    type: $Enums.PayoutType;
};
export type PayoutCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    membershipId?: Prisma.SortOrder;
    payoutAccountId?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    heldKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    providerTransferCode?: Prisma.SortOrder;
    savingsGoalId?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    failureReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PayoutAvgOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
    heldKobo?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
};
export type PayoutMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    membershipId?: Prisma.SortOrder;
    payoutAccountId?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    heldKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    providerTransferCode?: Prisma.SortOrder;
    savingsGoalId?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    failureReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PayoutMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    membershipId?: Prisma.SortOrder;
    payoutAccountId?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    heldKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    providerTransferCode?: Prisma.SortOrder;
    savingsGoalId?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
    failureReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PayoutSumOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
    heldKobo?: Prisma.SortOrder;
    attempts?: Prisma.SortOrder;
};
export type PayoutCreateNestedManyWithoutPayoutAccountInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutPayoutAccountInput, Prisma.PayoutUncheckedCreateWithoutPayoutAccountInput> | Prisma.PayoutCreateWithoutPayoutAccountInput[] | Prisma.PayoutUncheckedCreateWithoutPayoutAccountInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutPayoutAccountInput | Prisma.PayoutCreateOrConnectWithoutPayoutAccountInput[];
    createMany?: Prisma.PayoutCreateManyPayoutAccountInputEnvelope;
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
};
export type PayoutUncheckedCreateNestedManyWithoutPayoutAccountInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutPayoutAccountInput, Prisma.PayoutUncheckedCreateWithoutPayoutAccountInput> | Prisma.PayoutCreateWithoutPayoutAccountInput[] | Prisma.PayoutUncheckedCreateWithoutPayoutAccountInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutPayoutAccountInput | Prisma.PayoutCreateOrConnectWithoutPayoutAccountInput[];
    createMany?: Prisma.PayoutCreateManyPayoutAccountInputEnvelope;
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
};
export type PayoutUpdateManyWithoutPayoutAccountNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutPayoutAccountInput, Prisma.PayoutUncheckedCreateWithoutPayoutAccountInput> | Prisma.PayoutCreateWithoutPayoutAccountInput[] | Prisma.PayoutUncheckedCreateWithoutPayoutAccountInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutPayoutAccountInput | Prisma.PayoutCreateOrConnectWithoutPayoutAccountInput[];
    upsert?: Prisma.PayoutUpsertWithWhereUniqueWithoutPayoutAccountInput | Prisma.PayoutUpsertWithWhereUniqueWithoutPayoutAccountInput[];
    createMany?: Prisma.PayoutCreateManyPayoutAccountInputEnvelope;
    set?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    disconnect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    delete?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    update?: Prisma.PayoutUpdateWithWhereUniqueWithoutPayoutAccountInput | Prisma.PayoutUpdateWithWhereUniqueWithoutPayoutAccountInput[];
    updateMany?: Prisma.PayoutUpdateManyWithWhereWithoutPayoutAccountInput | Prisma.PayoutUpdateManyWithWhereWithoutPayoutAccountInput[];
    deleteMany?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
};
export type PayoutUncheckedUpdateManyWithoutPayoutAccountNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutPayoutAccountInput, Prisma.PayoutUncheckedCreateWithoutPayoutAccountInput> | Prisma.PayoutCreateWithoutPayoutAccountInput[] | Prisma.PayoutUncheckedCreateWithoutPayoutAccountInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutPayoutAccountInput | Prisma.PayoutCreateOrConnectWithoutPayoutAccountInput[];
    upsert?: Prisma.PayoutUpsertWithWhereUniqueWithoutPayoutAccountInput | Prisma.PayoutUpsertWithWhereUniqueWithoutPayoutAccountInput[];
    createMany?: Prisma.PayoutCreateManyPayoutAccountInputEnvelope;
    set?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    disconnect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    delete?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    update?: Prisma.PayoutUpdateWithWhereUniqueWithoutPayoutAccountInput | Prisma.PayoutUpdateWithWhereUniqueWithoutPayoutAccountInput[];
    updateMany?: Prisma.PayoutUpdateManyWithWhereWithoutPayoutAccountInput | Prisma.PayoutUpdateManyWithWhereWithoutPayoutAccountInput[];
    deleteMany?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
};
export type PayoutCreateNestedManyWithoutMembershipInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutMembershipInput, Prisma.PayoutUncheckedCreateWithoutMembershipInput> | Prisma.PayoutCreateWithoutMembershipInput[] | Prisma.PayoutUncheckedCreateWithoutMembershipInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutMembershipInput | Prisma.PayoutCreateOrConnectWithoutMembershipInput[];
    createMany?: Prisma.PayoutCreateManyMembershipInputEnvelope;
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
};
export type PayoutUncheckedCreateNestedManyWithoutMembershipInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutMembershipInput, Prisma.PayoutUncheckedCreateWithoutMembershipInput> | Prisma.PayoutCreateWithoutMembershipInput[] | Prisma.PayoutUncheckedCreateWithoutMembershipInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutMembershipInput | Prisma.PayoutCreateOrConnectWithoutMembershipInput[];
    createMany?: Prisma.PayoutCreateManyMembershipInputEnvelope;
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
};
export type PayoutUpdateManyWithoutMembershipNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutMembershipInput, Prisma.PayoutUncheckedCreateWithoutMembershipInput> | Prisma.PayoutCreateWithoutMembershipInput[] | Prisma.PayoutUncheckedCreateWithoutMembershipInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutMembershipInput | Prisma.PayoutCreateOrConnectWithoutMembershipInput[];
    upsert?: Prisma.PayoutUpsertWithWhereUniqueWithoutMembershipInput | Prisma.PayoutUpsertWithWhereUniqueWithoutMembershipInput[];
    createMany?: Prisma.PayoutCreateManyMembershipInputEnvelope;
    set?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    disconnect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    delete?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    update?: Prisma.PayoutUpdateWithWhereUniqueWithoutMembershipInput | Prisma.PayoutUpdateWithWhereUniqueWithoutMembershipInput[];
    updateMany?: Prisma.PayoutUpdateManyWithWhereWithoutMembershipInput | Prisma.PayoutUpdateManyWithWhereWithoutMembershipInput[];
    deleteMany?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
};
export type PayoutUncheckedUpdateManyWithoutMembershipNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutMembershipInput, Prisma.PayoutUncheckedCreateWithoutMembershipInput> | Prisma.PayoutCreateWithoutMembershipInput[] | Prisma.PayoutUncheckedCreateWithoutMembershipInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutMembershipInput | Prisma.PayoutCreateOrConnectWithoutMembershipInput[];
    upsert?: Prisma.PayoutUpsertWithWhereUniqueWithoutMembershipInput | Prisma.PayoutUpsertWithWhereUniqueWithoutMembershipInput[];
    createMany?: Prisma.PayoutCreateManyMembershipInputEnvelope;
    set?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    disconnect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    delete?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    update?: Prisma.PayoutUpdateWithWhereUniqueWithoutMembershipInput | Prisma.PayoutUpdateWithWhereUniqueWithoutMembershipInput[];
    updateMany?: Prisma.PayoutUpdateManyWithWhereWithoutMembershipInput | Prisma.PayoutUpdateManyWithWhereWithoutMembershipInput[];
    deleteMany?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
};
export type PayoutCreateNestedManyWithoutCycleInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutCycleInput, Prisma.PayoutUncheckedCreateWithoutCycleInput> | Prisma.PayoutCreateWithoutCycleInput[] | Prisma.PayoutUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutCycleInput | Prisma.PayoutCreateOrConnectWithoutCycleInput[];
    createMany?: Prisma.PayoutCreateManyCycleInputEnvelope;
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
};
export type PayoutUncheckedCreateNestedManyWithoutCycleInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutCycleInput, Prisma.PayoutUncheckedCreateWithoutCycleInput> | Prisma.PayoutCreateWithoutCycleInput[] | Prisma.PayoutUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutCycleInput | Prisma.PayoutCreateOrConnectWithoutCycleInput[];
    createMany?: Prisma.PayoutCreateManyCycleInputEnvelope;
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
};
export type PayoutUpdateManyWithoutCycleNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutCycleInput, Prisma.PayoutUncheckedCreateWithoutCycleInput> | Prisma.PayoutCreateWithoutCycleInput[] | Prisma.PayoutUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutCycleInput | Prisma.PayoutCreateOrConnectWithoutCycleInput[];
    upsert?: Prisma.PayoutUpsertWithWhereUniqueWithoutCycleInput | Prisma.PayoutUpsertWithWhereUniqueWithoutCycleInput[];
    createMany?: Prisma.PayoutCreateManyCycleInputEnvelope;
    set?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    disconnect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    delete?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    update?: Prisma.PayoutUpdateWithWhereUniqueWithoutCycleInput | Prisma.PayoutUpdateWithWhereUniqueWithoutCycleInput[];
    updateMany?: Prisma.PayoutUpdateManyWithWhereWithoutCycleInput | Prisma.PayoutUpdateManyWithWhereWithoutCycleInput[];
    deleteMany?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
};
export type PayoutUncheckedUpdateManyWithoutCycleNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutCycleInput, Prisma.PayoutUncheckedCreateWithoutCycleInput> | Prisma.PayoutCreateWithoutCycleInput[] | Prisma.PayoutUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutCycleInput | Prisma.PayoutCreateOrConnectWithoutCycleInput[];
    upsert?: Prisma.PayoutUpsertWithWhereUniqueWithoutCycleInput | Prisma.PayoutUpsertWithWhereUniqueWithoutCycleInput[];
    createMany?: Prisma.PayoutCreateManyCycleInputEnvelope;
    set?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    disconnect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    delete?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    update?: Prisma.PayoutUpdateWithWhereUniqueWithoutCycleInput | Prisma.PayoutUpdateWithWhereUniqueWithoutCycleInput[];
    updateMany?: Prisma.PayoutUpdateManyWithWhereWithoutCycleInput | Prisma.PayoutUpdateManyWithWhereWithoutCycleInput[];
    deleteMany?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
};
export type EnumPayoutTypeFieldUpdateOperationsInput = {
    set?: $Enums.PayoutType;
};
export type EnumPayoutStatusFieldUpdateOperationsInput = {
    set?: $Enums.PayoutStatus;
};
export type PayoutCreateNestedManyWithoutSavingsGoalInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutSavingsGoalInput, Prisma.PayoutUncheckedCreateWithoutSavingsGoalInput> | Prisma.PayoutCreateWithoutSavingsGoalInput[] | Prisma.PayoutUncheckedCreateWithoutSavingsGoalInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutSavingsGoalInput | Prisma.PayoutCreateOrConnectWithoutSavingsGoalInput[];
    createMany?: Prisma.PayoutCreateManySavingsGoalInputEnvelope;
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
};
export type PayoutUncheckedCreateNestedManyWithoutSavingsGoalInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutSavingsGoalInput, Prisma.PayoutUncheckedCreateWithoutSavingsGoalInput> | Prisma.PayoutCreateWithoutSavingsGoalInput[] | Prisma.PayoutUncheckedCreateWithoutSavingsGoalInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutSavingsGoalInput | Prisma.PayoutCreateOrConnectWithoutSavingsGoalInput[];
    createMany?: Prisma.PayoutCreateManySavingsGoalInputEnvelope;
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
};
export type PayoutUpdateManyWithoutSavingsGoalNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutSavingsGoalInput, Prisma.PayoutUncheckedCreateWithoutSavingsGoalInput> | Prisma.PayoutCreateWithoutSavingsGoalInput[] | Prisma.PayoutUncheckedCreateWithoutSavingsGoalInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutSavingsGoalInput | Prisma.PayoutCreateOrConnectWithoutSavingsGoalInput[];
    upsert?: Prisma.PayoutUpsertWithWhereUniqueWithoutSavingsGoalInput | Prisma.PayoutUpsertWithWhereUniqueWithoutSavingsGoalInput[];
    createMany?: Prisma.PayoutCreateManySavingsGoalInputEnvelope;
    set?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    disconnect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    delete?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    update?: Prisma.PayoutUpdateWithWhereUniqueWithoutSavingsGoalInput | Prisma.PayoutUpdateWithWhereUniqueWithoutSavingsGoalInput[];
    updateMany?: Prisma.PayoutUpdateManyWithWhereWithoutSavingsGoalInput | Prisma.PayoutUpdateManyWithWhereWithoutSavingsGoalInput[];
    deleteMany?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
};
export type PayoutUncheckedUpdateManyWithoutSavingsGoalNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutSavingsGoalInput, Prisma.PayoutUncheckedCreateWithoutSavingsGoalInput> | Prisma.PayoutCreateWithoutSavingsGoalInput[] | Prisma.PayoutUncheckedCreateWithoutSavingsGoalInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutSavingsGoalInput | Prisma.PayoutCreateOrConnectWithoutSavingsGoalInput[];
    upsert?: Prisma.PayoutUpsertWithWhereUniqueWithoutSavingsGoalInput | Prisma.PayoutUpsertWithWhereUniqueWithoutSavingsGoalInput[];
    createMany?: Prisma.PayoutCreateManySavingsGoalInputEnvelope;
    set?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    disconnect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    delete?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    update?: Prisma.PayoutUpdateWithWhereUniqueWithoutSavingsGoalInput | Prisma.PayoutUpdateWithWhereUniqueWithoutSavingsGoalInput[];
    updateMany?: Prisma.PayoutUpdateManyWithWhereWithoutSavingsGoalInput | Prisma.PayoutUpdateManyWithWhereWithoutSavingsGoalInput[];
    deleteMany?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
};
export type PayoutCreateWithoutPayoutAccountInput = {
    id?: string;
    type: $Enums.PayoutType;
    amountKobo: number;
    heldKobo: number;
    status?: $Enums.PayoutStatus;
    reference: string;
    providerTransferCode?: string | null;
    attempts?: number;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycle?: Prisma.CycleCreateNestedOneWithoutPayoutsInput;
    membership?: Prisma.MembershipCreateNestedOneWithoutPayoutsInput;
    savingsGoal?: Prisma.SavingsGoalCreateNestedOneWithoutPayoutsInput;
};
export type PayoutUncheckedCreateWithoutPayoutAccountInput = {
    id?: string;
    type: $Enums.PayoutType;
    cycleId?: string | null;
    membershipId?: string | null;
    amountKobo: number;
    heldKobo: number;
    status?: $Enums.PayoutStatus;
    reference: string;
    providerTransferCode?: string | null;
    savingsGoalId?: string | null;
    attempts?: number;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PayoutCreateOrConnectWithoutPayoutAccountInput = {
    where: Prisma.PayoutWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutPayoutAccountInput, Prisma.PayoutUncheckedCreateWithoutPayoutAccountInput>;
};
export type PayoutCreateManyPayoutAccountInputEnvelope = {
    data: Prisma.PayoutCreateManyPayoutAccountInput | Prisma.PayoutCreateManyPayoutAccountInput[];
    skipDuplicates?: boolean;
};
export type PayoutUpsertWithWhereUniqueWithoutPayoutAccountInput = {
    where: Prisma.PayoutWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayoutUpdateWithoutPayoutAccountInput, Prisma.PayoutUncheckedUpdateWithoutPayoutAccountInput>;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutPayoutAccountInput, Prisma.PayoutUncheckedCreateWithoutPayoutAccountInput>;
};
export type PayoutUpdateWithWhereUniqueWithoutPayoutAccountInput = {
    where: Prisma.PayoutWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayoutUpdateWithoutPayoutAccountInput, Prisma.PayoutUncheckedUpdateWithoutPayoutAccountInput>;
};
export type PayoutUpdateManyWithWhereWithoutPayoutAccountInput = {
    where: Prisma.PayoutScalarWhereInput;
    data: Prisma.XOR<Prisma.PayoutUpdateManyMutationInput, Prisma.PayoutUncheckedUpdateManyWithoutPayoutAccountInput>;
};
export type PayoutScalarWhereInput = {
    AND?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
    OR?: Prisma.PayoutScalarWhereInput[];
    NOT?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
    id?: Prisma.StringFilter<"Payout"> | string;
    type?: Prisma.EnumPayoutTypeFilter<"Payout"> | $Enums.PayoutType;
    cycleId?: Prisma.StringNullableFilter<"Payout"> | string | null;
    membershipId?: Prisma.StringNullableFilter<"Payout"> | string | null;
    payoutAccountId?: Prisma.StringFilter<"Payout"> | string;
    amountKobo?: Prisma.IntFilter<"Payout"> | number;
    heldKobo?: Prisma.IntFilter<"Payout"> | number;
    status?: Prisma.EnumPayoutStatusFilter<"Payout"> | $Enums.PayoutStatus;
    reference?: Prisma.StringFilter<"Payout"> | string;
    providerTransferCode?: Prisma.StringNullableFilter<"Payout"> | string | null;
    savingsGoalId?: Prisma.StringNullableFilter<"Payout"> | string | null;
    attempts?: Prisma.IntFilter<"Payout"> | number;
    failureReason?: Prisma.StringNullableFilter<"Payout"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payout"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Payout"> | Date | string;
};
export type PayoutCreateWithoutMembershipInput = {
    id?: string;
    type: $Enums.PayoutType;
    amountKobo: number;
    heldKobo: number;
    status?: $Enums.PayoutStatus;
    reference: string;
    providerTransferCode?: string | null;
    attempts?: number;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycle?: Prisma.CycleCreateNestedOneWithoutPayoutsInput;
    payoutAccount: Prisma.PayoutAccountCreateNestedOneWithoutPayOutsInput;
    savingsGoal?: Prisma.SavingsGoalCreateNestedOneWithoutPayoutsInput;
};
export type PayoutUncheckedCreateWithoutMembershipInput = {
    id?: string;
    type: $Enums.PayoutType;
    cycleId?: string | null;
    payoutAccountId: string;
    amountKobo: number;
    heldKobo: number;
    status?: $Enums.PayoutStatus;
    reference: string;
    providerTransferCode?: string | null;
    savingsGoalId?: string | null;
    attempts?: number;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PayoutCreateOrConnectWithoutMembershipInput = {
    where: Prisma.PayoutWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutMembershipInput, Prisma.PayoutUncheckedCreateWithoutMembershipInput>;
};
export type PayoutCreateManyMembershipInputEnvelope = {
    data: Prisma.PayoutCreateManyMembershipInput | Prisma.PayoutCreateManyMembershipInput[];
    skipDuplicates?: boolean;
};
export type PayoutUpsertWithWhereUniqueWithoutMembershipInput = {
    where: Prisma.PayoutWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayoutUpdateWithoutMembershipInput, Prisma.PayoutUncheckedUpdateWithoutMembershipInput>;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutMembershipInput, Prisma.PayoutUncheckedCreateWithoutMembershipInput>;
};
export type PayoutUpdateWithWhereUniqueWithoutMembershipInput = {
    where: Prisma.PayoutWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayoutUpdateWithoutMembershipInput, Prisma.PayoutUncheckedUpdateWithoutMembershipInput>;
};
export type PayoutUpdateManyWithWhereWithoutMembershipInput = {
    where: Prisma.PayoutScalarWhereInput;
    data: Prisma.XOR<Prisma.PayoutUpdateManyMutationInput, Prisma.PayoutUncheckedUpdateManyWithoutMembershipInput>;
};
export type PayoutCreateWithoutCycleInput = {
    id?: string;
    type: $Enums.PayoutType;
    amountKobo: number;
    heldKobo: number;
    status?: $Enums.PayoutStatus;
    reference: string;
    providerTransferCode?: string | null;
    attempts?: number;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membership?: Prisma.MembershipCreateNestedOneWithoutPayoutsInput;
    payoutAccount: Prisma.PayoutAccountCreateNestedOneWithoutPayOutsInput;
    savingsGoal?: Prisma.SavingsGoalCreateNestedOneWithoutPayoutsInput;
};
export type PayoutUncheckedCreateWithoutCycleInput = {
    id?: string;
    type: $Enums.PayoutType;
    membershipId?: string | null;
    payoutAccountId: string;
    amountKobo: number;
    heldKobo: number;
    status?: $Enums.PayoutStatus;
    reference: string;
    providerTransferCode?: string | null;
    savingsGoalId?: string | null;
    attempts?: number;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PayoutCreateOrConnectWithoutCycleInput = {
    where: Prisma.PayoutWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutCycleInput, Prisma.PayoutUncheckedCreateWithoutCycleInput>;
};
export type PayoutCreateManyCycleInputEnvelope = {
    data: Prisma.PayoutCreateManyCycleInput | Prisma.PayoutCreateManyCycleInput[];
    skipDuplicates?: boolean;
};
export type PayoutUpsertWithWhereUniqueWithoutCycleInput = {
    where: Prisma.PayoutWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayoutUpdateWithoutCycleInput, Prisma.PayoutUncheckedUpdateWithoutCycleInput>;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutCycleInput, Prisma.PayoutUncheckedCreateWithoutCycleInput>;
};
export type PayoutUpdateWithWhereUniqueWithoutCycleInput = {
    where: Prisma.PayoutWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayoutUpdateWithoutCycleInput, Prisma.PayoutUncheckedUpdateWithoutCycleInput>;
};
export type PayoutUpdateManyWithWhereWithoutCycleInput = {
    where: Prisma.PayoutScalarWhereInput;
    data: Prisma.XOR<Prisma.PayoutUpdateManyMutationInput, Prisma.PayoutUncheckedUpdateManyWithoutCycleInput>;
};
export type PayoutCreateWithoutSavingsGoalInput = {
    id?: string;
    type: $Enums.PayoutType;
    amountKobo: number;
    heldKobo: number;
    status?: $Enums.PayoutStatus;
    reference: string;
    providerTransferCode?: string | null;
    attempts?: number;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycle?: Prisma.CycleCreateNestedOneWithoutPayoutsInput;
    membership?: Prisma.MembershipCreateNestedOneWithoutPayoutsInput;
    payoutAccount: Prisma.PayoutAccountCreateNestedOneWithoutPayOutsInput;
};
export type PayoutUncheckedCreateWithoutSavingsGoalInput = {
    id?: string;
    type: $Enums.PayoutType;
    cycleId?: string | null;
    membershipId?: string | null;
    payoutAccountId: string;
    amountKobo: number;
    heldKobo: number;
    status?: $Enums.PayoutStatus;
    reference: string;
    providerTransferCode?: string | null;
    attempts?: number;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PayoutCreateOrConnectWithoutSavingsGoalInput = {
    where: Prisma.PayoutWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutSavingsGoalInput, Prisma.PayoutUncheckedCreateWithoutSavingsGoalInput>;
};
export type PayoutCreateManySavingsGoalInputEnvelope = {
    data: Prisma.PayoutCreateManySavingsGoalInput | Prisma.PayoutCreateManySavingsGoalInput[];
    skipDuplicates?: boolean;
};
export type PayoutUpsertWithWhereUniqueWithoutSavingsGoalInput = {
    where: Prisma.PayoutWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayoutUpdateWithoutSavingsGoalInput, Prisma.PayoutUncheckedUpdateWithoutSavingsGoalInput>;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutSavingsGoalInput, Prisma.PayoutUncheckedCreateWithoutSavingsGoalInput>;
};
export type PayoutUpdateWithWhereUniqueWithoutSavingsGoalInput = {
    where: Prisma.PayoutWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayoutUpdateWithoutSavingsGoalInput, Prisma.PayoutUncheckedUpdateWithoutSavingsGoalInput>;
};
export type PayoutUpdateManyWithWhereWithoutSavingsGoalInput = {
    where: Prisma.PayoutScalarWhereInput;
    data: Prisma.XOR<Prisma.PayoutUpdateManyMutationInput, Prisma.PayoutUncheckedUpdateManyWithoutSavingsGoalInput>;
};
export type PayoutCreateManyPayoutAccountInput = {
    id?: string;
    type: $Enums.PayoutType;
    cycleId?: string | null;
    membershipId?: string | null;
    amountKobo: number;
    heldKobo: number;
    status?: $Enums.PayoutStatus;
    reference: string;
    providerTransferCode?: string | null;
    savingsGoalId?: string | null;
    attempts?: number;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PayoutUpdateWithoutPayoutAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPayoutTypeFieldUpdateOperationsInput | $Enums.PayoutType;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    heldKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    providerTransferCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycle?: Prisma.CycleUpdateOneWithoutPayoutsNestedInput;
    membership?: Prisma.MembershipUpdateOneWithoutPayoutsNestedInput;
    savingsGoal?: Prisma.SavingsGoalUpdateOneWithoutPayoutsNestedInput;
};
export type PayoutUncheckedUpdateWithoutPayoutAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPayoutTypeFieldUpdateOperationsInput | $Enums.PayoutType;
    cycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    membershipId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    heldKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    providerTransferCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    savingsGoalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutUncheckedUpdateManyWithoutPayoutAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPayoutTypeFieldUpdateOperationsInput | $Enums.PayoutType;
    cycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    membershipId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    heldKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    providerTransferCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    savingsGoalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutCreateManyMembershipInput = {
    id?: string;
    type: $Enums.PayoutType;
    cycleId?: string | null;
    payoutAccountId: string;
    amountKobo: number;
    heldKobo: number;
    status?: $Enums.PayoutStatus;
    reference: string;
    providerTransferCode?: string | null;
    savingsGoalId?: string | null;
    attempts?: number;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PayoutUpdateWithoutMembershipInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPayoutTypeFieldUpdateOperationsInput | $Enums.PayoutType;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    heldKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    providerTransferCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycle?: Prisma.CycleUpdateOneWithoutPayoutsNestedInput;
    payoutAccount?: Prisma.PayoutAccountUpdateOneRequiredWithoutPayOutsNestedInput;
    savingsGoal?: Prisma.SavingsGoalUpdateOneWithoutPayoutsNestedInput;
};
export type PayoutUncheckedUpdateWithoutMembershipInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPayoutTypeFieldUpdateOperationsInput | $Enums.PayoutType;
    cycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    heldKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    providerTransferCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    savingsGoalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutUncheckedUpdateManyWithoutMembershipInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPayoutTypeFieldUpdateOperationsInput | $Enums.PayoutType;
    cycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    heldKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    providerTransferCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    savingsGoalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutCreateManyCycleInput = {
    id?: string;
    type: $Enums.PayoutType;
    membershipId?: string | null;
    payoutAccountId: string;
    amountKobo: number;
    heldKobo: number;
    status?: $Enums.PayoutStatus;
    reference: string;
    providerTransferCode?: string | null;
    savingsGoalId?: string | null;
    attempts?: number;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PayoutUpdateWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPayoutTypeFieldUpdateOperationsInput | $Enums.PayoutType;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    heldKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    providerTransferCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUpdateOneWithoutPayoutsNestedInput;
    payoutAccount?: Prisma.PayoutAccountUpdateOneRequiredWithoutPayOutsNestedInput;
    savingsGoal?: Prisma.SavingsGoalUpdateOneWithoutPayoutsNestedInput;
};
export type PayoutUncheckedUpdateWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPayoutTypeFieldUpdateOperationsInput | $Enums.PayoutType;
    membershipId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    heldKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    providerTransferCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    savingsGoalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutUncheckedUpdateManyWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPayoutTypeFieldUpdateOperationsInput | $Enums.PayoutType;
    membershipId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    heldKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    providerTransferCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    savingsGoalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutCreateManySavingsGoalInput = {
    id?: string;
    type: $Enums.PayoutType;
    cycleId?: string | null;
    membershipId?: string | null;
    payoutAccountId: string;
    amountKobo: number;
    heldKobo: number;
    status?: $Enums.PayoutStatus;
    reference: string;
    providerTransferCode?: string | null;
    attempts?: number;
    failureReason?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PayoutUpdateWithoutSavingsGoalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPayoutTypeFieldUpdateOperationsInput | $Enums.PayoutType;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    heldKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    providerTransferCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycle?: Prisma.CycleUpdateOneWithoutPayoutsNestedInput;
    membership?: Prisma.MembershipUpdateOneWithoutPayoutsNestedInput;
    payoutAccount?: Prisma.PayoutAccountUpdateOneRequiredWithoutPayOutsNestedInput;
};
export type PayoutUncheckedUpdateWithoutSavingsGoalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPayoutTypeFieldUpdateOperationsInput | $Enums.PayoutType;
    cycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    membershipId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    heldKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    providerTransferCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutUncheckedUpdateManyWithoutSavingsGoalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPayoutTypeFieldUpdateOperationsInput | $Enums.PayoutType;
    cycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    membershipId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    heldKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    providerTransferCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attempts?: Prisma.IntFieldUpdateOperationsInput | number;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    cycleId?: boolean;
    membershipId?: boolean;
    payoutAccountId?: boolean;
    amountKobo?: boolean;
    heldKobo?: boolean;
    status?: boolean;
    reference?: boolean;
    providerTransferCode?: boolean;
    savingsGoalId?: boolean;
    attempts?: boolean;
    failureReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cycle?: boolean | Prisma.Payout$cycleArgs<ExtArgs>;
    membership?: boolean | Prisma.Payout$membershipArgs<ExtArgs>;
    payoutAccount?: boolean | Prisma.PayoutAccountDefaultArgs<ExtArgs>;
    savingsGoal?: boolean | Prisma.Payout$savingsGoalArgs<ExtArgs>;
}, ExtArgs["result"]["payout"]>;
export type PayoutSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    cycleId?: boolean;
    membershipId?: boolean;
    payoutAccountId?: boolean;
    amountKobo?: boolean;
    heldKobo?: boolean;
    status?: boolean;
    reference?: boolean;
    providerTransferCode?: boolean;
    savingsGoalId?: boolean;
    attempts?: boolean;
    failureReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cycle?: boolean | Prisma.Payout$cycleArgs<ExtArgs>;
    membership?: boolean | Prisma.Payout$membershipArgs<ExtArgs>;
    payoutAccount?: boolean | Prisma.PayoutAccountDefaultArgs<ExtArgs>;
    savingsGoal?: boolean | Prisma.Payout$savingsGoalArgs<ExtArgs>;
}, ExtArgs["result"]["payout"]>;
export type PayoutSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    cycleId?: boolean;
    membershipId?: boolean;
    payoutAccountId?: boolean;
    amountKobo?: boolean;
    heldKobo?: boolean;
    status?: boolean;
    reference?: boolean;
    providerTransferCode?: boolean;
    savingsGoalId?: boolean;
    attempts?: boolean;
    failureReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cycle?: boolean | Prisma.Payout$cycleArgs<ExtArgs>;
    membership?: boolean | Prisma.Payout$membershipArgs<ExtArgs>;
    payoutAccount?: boolean | Prisma.PayoutAccountDefaultArgs<ExtArgs>;
    savingsGoal?: boolean | Prisma.Payout$savingsGoalArgs<ExtArgs>;
}, ExtArgs["result"]["payout"]>;
export type PayoutSelectScalar = {
    id?: boolean;
    type?: boolean;
    cycleId?: boolean;
    membershipId?: boolean;
    payoutAccountId?: boolean;
    amountKobo?: boolean;
    heldKobo?: boolean;
    status?: boolean;
    reference?: boolean;
    providerTransferCode?: boolean;
    savingsGoalId?: boolean;
    attempts?: boolean;
    failureReason?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PayoutOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "type" | "cycleId" | "membershipId" | "payoutAccountId" | "amountKobo" | "heldKobo" | "status" | "reference" | "providerTransferCode" | "savingsGoalId" | "attempts" | "failureReason" | "createdAt" | "updatedAt", ExtArgs["result"]["payout"]>;
export type PayoutInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cycle?: boolean | Prisma.Payout$cycleArgs<ExtArgs>;
    membership?: boolean | Prisma.Payout$membershipArgs<ExtArgs>;
    payoutAccount?: boolean | Prisma.PayoutAccountDefaultArgs<ExtArgs>;
    savingsGoal?: boolean | Prisma.Payout$savingsGoalArgs<ExtArgs>;
};
export type PayoutIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cycle?: boolean | Prisma.Payout$cycleArgs<ExtArgs>;
    membership?: boolean | Prisma.Payout$membershipArgs<ExtArgs>;
    payoutAccount?: boolean | Prisma.PayoutAccountDefaultArgs<ExtArgs>;
    savingsGoal?: boolean | Prisma.Payout$savingsGoalArgs<ExtArgs>;
};
export type PayoutIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cycle?: boolean | Prisma.Payout$cycleArgs<ExtArgs>;
    membership?: boolean | Prisma.Payout$membershipArgs<ExtArgs>;
    payoutAccount?: boolean | Prisma.PayoutAccountDefaultArgs<ExtArgs>;
    savingsGoal?: boolean | Prisma.Payout$savingsGoalArgs<ExtArgs>;
};
export type $PayoutPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Payout";
    objects: {
        cycle: Prisma.$CyclePayload<ExtArgs> | null;
        membership: Prisma.$MembershipPayload<ExtArgs> | null;
        payoutAccount: Prisma.$PayoutAccountPayload<ExtArgs>;
        savingsGoal: Prisma.$SavingsGoalPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        type: $Enums.PayoutType;
        cycleId: string | null;
        membershipId: string | null;
        payoutAccountId: string;
        amountKobo: number;
        heldKobo: number;
        status: $Enums.PayoutStatus;
        reference: string;
        providerTransferCode: string | null;
        savingsGoalId: string | null;
        attempts: number;
        failureReason: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["payout"]>;
    composites: {};
};
export type PayoutGetPayload<S extends boolean | null | undefined | PayoutDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PayoutPayload, S>;
export type PayoutCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PayoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PayoutCountAggregateInputType | true;
};
export interface PayoutDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Payout'];
        meta: {
            name: 'Payout';
        };
    };
    findUnique<T extends PayoutFindUniqueArgs>(args: Prisma.SelectSubset<T, PayoutFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PayoutFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PayoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PayoutFindFirstArgs>(args?: Prisma.SelectSubset<T, PayoutFindFirstArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PayoutFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PayoutFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PayoutFindManyArgs>(args?: Prisma.SelectSubset<T, PayoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PayoutCreateArgs>(args: Prisma.SelectSubset<T, PayoutCreateArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PayoutCreateManyArgs>(args?: Prisma.SelectSubset<T, PayoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PayoutCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PayoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PayoutDeleteArgs>(args: Prisma.SelectSubset<T, PayoutDeleteArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PayoutUpdateArgs>(args: Prisma.SelectSubset<T, PayoutUpdateArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PayoutDeleteManyArgs>(args?: Prisma.SelectSubset<T, PayoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PayoutUpdateManyArgs>(args: Prisma.SelectSubset<T, PayoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PayoutUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PayoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PayoutUpsertArgs>(args: Prisma.SelectSubset<T, PayoutUpsertArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PayoutCountArgs>(args?: Prisma.Subset<T, PayoutCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PayoutCountAggregateOutputType> : number>;
    aggregate<T extends PayoutAggregateArgs>(args: Prisma.Subset<T, PayoutAggregateArgs>): Prisma.PrismaPromise<GetPayoutAggregateType<T>>;
    groupBy<T extends PayoutGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PayoutGroupByArgs['orderBy'];
    } : {
        orderBy?: PayoutGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PayoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PayoutFieldRefs;
}
export interface Prisma__PayoutClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cycle<T extends Prisma.Payout$cycleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Payout$cycleArgs<ExtArgs>>): Prisma.Prisma__CycleClient<runtime.Types.Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    membership<T extends Prisma.Payout$membershipArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Payout$membershipArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    payoutAccount<T extends Prisma.PayoutAccountDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PayoutAccountDefaultArgs<ExtArgs>>): Prisma.Prisma__PayoutAccountClient<runtime.Types.Result.GetResult<Prisma.$PayoutAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    savingsGoal<T extends Prisma.Payout$savingsGoalArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Payout$savingsGoalArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PayoutFieldRefs {
    readonly id: Prisma.FieldRef<"Payout", 'String'>;
    readonly type: Prisma.FieldRef<"Payout", 'PayoutType'>;
    readonly cycleId: Prisma.FieldRef<"Payout", 'String'>;
    readonly membershipId: Prisma.FieldRef<"Payout", 'String'>;
    readonly payoutAccountId: Prisma.FieldRef<"Payout", 'String'>;
    readonly amountKobo: Prisma.FieldRef<"Payout", 'Int'>;
    readonly heldKobo: Prisma.FieldRef<"Payout", 'Int'>;
    readonly status: Prisma.FieldRef<"Payout", 'PayoutStatus'>;
    readonly reference: Prisma.FieldRef<"Payout", 'String'>;
    readonly providerTransferCode: Prisma.FieldRef<"Payout", 'String'>;
    readonly savingsGoalId: Prisma.FieldRef<"Payout", 'String'>;
    readonly attempts: Prisma.FieldRef<"Payout", 'Int'>;
    readonly failureReason: Prisma.FieldRef<"Payout", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Payout", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Payout", 'DateTime'>;
}
export type PayoutFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    where: Prisma.PayoutWhereUniqueInput;
};
export type PayoutFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    where: Prisma.PayoutWhereUniqueInput;
};
export type PayoutFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    where?: Prisma.PayoutWhereInput;
    orderBy?: Prisma.PayoutOrderByWithRelationInput | Prisma.PayoutOrderByWithRelationInput[];
    cursor?: Prisma.PayoutWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayoutScalarFieldEnum | Prisma.PayoutScalarFieldEnum[];
};
export type PayoutFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    where?: Prisma.PayoutWhereInput;
    orderBy?: Prisma.PayoutOrderByWithRelationInput | Prisma.PayoutOrderByWithRelationInput[];
    cursor?: Prisma.PayoutWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayoutScalarFieldEnum | Prisma.PayoutScalarFieldEnum[];
};
export type PayoutFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    where?: Prisma.PayoutWhereInput;
    orderBy?: Prisma.PayoutOrderByWithRelationInput | Prisma.PayoutOrderByWithRelationInput[];
    cursor?: Prisma.PayoutWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayoutScalarFieldEnum | Prisma.PayoutScalarFieldEnum[];
};
export type PayoutCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayoutCreateInput, Prisma.PayoutUncheckedCreateInput>;
};
export type PayoutCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PayoutCreateManyInput | Prisma.PayoutCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PayoutCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    data: Prisma.PayoutCreateManyInput | Prisma.PayoutCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PayoutIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PayoutUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayoutUpdateInput, Prisma.PayoutUncheckedUpdateInput>;
    where: Prisma.PayoutWhereUniqueInput;
};
export type PayoutUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PayoutUpdateManyMutationInput, Prisma.PayoutUncheckedUpdateManyInput>;
    where?: Prisma.PayoutWhereInput;
    limit?: number;
};
export type PayoutUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayoutUpdateManyMutationInput, Prisma.PayoutUncheckedUpdateManyInput>;
    where?: Prisma.PayoutWhereInput;
    limit?: number;
    include?: Prisma.PayoutIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PayoutUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    where: Prisma.PayoutWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCreateInput, Prisma.PayoutUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PayoutUpdateInput, Prisma.PayoutUncheckedUpdateInput>;
};
export type PayoutDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    where: Prisma.PayoutWhereUniqueInput;
};
export type PayoutDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutWhereInput;
    limit?: number;
};
export type Payout$cycleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSelect<ExtArgs> | null;
    omit?: Prisma.CycleOmit<ExtArgs> | null;
    include?: Prisma.CycleInclude<ExtArgs> | null;
    where?: Prisma.CycleWhereInput;
};
export type Payout$membershipArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where?: Prisma.MembershipWhereInput;
};
export type Payout$savingsGoalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsGoalSelect<ExtArgs> | null;
    omit?: Prisma.SavingsGoalOmit<ExtArgs> | null;
    include?: Prisma.SavingsGoalInclude<ExtArgs> | null;
    where?: Prisma.SavingsGoalWhereInput;
};
export type PayoutDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    include?: Prisma.PayoutInclude<ExtArgs> | null;
};
