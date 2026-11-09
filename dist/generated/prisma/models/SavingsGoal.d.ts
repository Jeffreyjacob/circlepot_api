import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SavingsGoalModel = runtime.Types.Result.DefaultSelection<Prisma.$SavingsGoalPayload>;
export type AggregateSavingsGoal = {
    _count: SavingsGoalCountAggregateOutputType | null;
    _avg: SavingsGoalAvgAggregateOutputType | null;
    _sum: SavingsGoalSumAggregateOutputType | null;
    _min: SavingsGoalMinAggregateOutputType | null;
    _max: SavingsGoalMaxAggregateOutputType | null;
};
export type SavingsGoalAvgAggregateOutputType = {
    depositKobo: number | null;
};
export type SavingsGoalSumAggregateOutputType = {
    depositKobo: number | null;
};
export type SavingsGoalMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    targetKobo: string | null;
    depositKobo: number | null;
    frequency: $Enums.Frequency | null;
    startDate: Date | null;
    endDate: Date | null;
    unlockRule: $Enums.UnlockRule | null;
    status: $Enums.SavingsStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SavingsGoalMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    targetKobo: string | null;
    depositKobo: number | null;
    frequency: $Enums.Frequency | null;
    startDate: Date | null;
    endDate: Date | null;
    unlockRule: $Enums.UnlockRule | null;
    status: $Enums.SavingsStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SavingsGoalCountAggregateOutputType = {
    id: number;
    userId: number;
    name: number;
    targetKobo: number;
    depositKobo: number;
    frequency: number;
    startDate: number;
    endDate: number;
    unlockRule: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SavingsGoalAvgAggregateInputType = {
    depositKobo?: true;
};
export type SavingsGoalSumAggregateInputType = {
    depositKobo?: true;
};
export type SavingsGoalMinAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    targetKobo?: true;
    depositKobo?: true;
    frequency?: true;
    startDate?: true;
    endDate?: true;
    unlockRule?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SavingsGoalMaxAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    targetKobo?: true;
    depositKobo?: true;
    frequency?: true;
    startDate?: true;
    endDate?: true;
    unlockRule?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SavingsGoalCountAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    targetKobo?: true;
    depositKobo?: true;
    frequency?: true;
    startDate?: true;
    endDate?: true;
    unlockRule?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SavingsGoalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavingsGoalWhereInput;
    orderBy?: Prisma.SavingsGoalOrderByWithRelationInput | Prisma.SavingsGoalOrderByWithRelationInput[];
    cursor?: Prisma.SavingsGoalWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SavingsGoalCountAggregateInputType;
    _avg?: SavingsGoalAvgAggregateInputType;
    _sum?: SavingsGoalSumAggregateInputType;
    _min?: SavingsGoalMinAggregateInputType;
    _max?: SavingsGoalMaxAggregateInputType;
};
export type GetSavingsGoalAggregateType<T extends SavingsGoalAggregateArgs> = {
    [P in keyof T & keyof AggregateSavingsGoal]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSavingsGoal[P]> : Prisma.GetScalarType<T[P], AggregateSavingsGoal[P]>;
};
export type SavingsGoalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavingsGoalWhereInput;
    orderBy?: Prisma.SavingsGoalOrderByWithAggregationInput | Prisma.SavingsGoalOrderByWithAggregationInput[];
    by: Prisma.SavingsGoalScalarFieldEnum[] | Prisma.SavingsGoalScalarFieldEnum;
    having?: Prisma.SavingsGoalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SavingsGoalCountAggregateInputType | true;
    _avg?: SavingsGoalAvgAggregateInputType;
    _sum?: SavingsGoalSumAggregateInputType;
    _min?: SavingsGoalMinAggregateInputType;
    _max?: SavingsGoalMaxAggregateInputType;
};
export type SavingsGoalGroupByOutputType = {
    id: string;
    userId: string;
    name: string;
    targetKobo: string;
    depositKobo: number;
    frequency: $Enums.Frequency;
    startDate: Date;
    endDate: Date;
    unlockRule: $Enums.UnlockRule;
    status: $Enums.SavingsStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: SavingsGoalCountAggregateOutputType | null;
    _avg: SavingsGoalAvgAggregateOutputType | null;
    _sum: SavingsGoalSumAggregateOutputType | null;
    _min: SavingsGoalMinAggregateOutputType | null;
    _max: SavingsGoalMaxAggregateOutputType | null;
};
export type GetSavingsGoalGroupByPayload<T extends SavingsGoalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SavingsGoalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SavingsGoalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SavingsGoalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SavingsGoalGroupByOutputType[P]>;
}>>;
export type SavingsGoalWhereInput = {
    AND?: Prisma.SavingsGoalWhereInput | Prisma.SavingsGoalWhereInput[];
    OR?: Prisma.SavingsGoalWhereInput[];
    NOT?: Prisma.SavingsGoalWhereInput | Prisma.SavingsGoalWhereInput[];
    id?: Prisma.StringFilter<"SavingsGoal"> | string;
    userId?: Prisma.StringFilter<"SavingsGoal"> | string;
    name?: Prisma.StringFilter<"SavingsGoal"> | string;
    targetKobo?: Prisma.StringFilter<"SavingsGoal"> | string;
    depositKobo?: Prisma.IntFilter<"SavingsGoal"> | number;
    frequency?: Prisma.EnumFrequencyFilter<"SavingsGoal"> | $Enums.Frequency;
    startDate?: Prisma.DateTimeFilter<"SavingsGoal"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"SavingsGoal"> | Date | string;
    unlockRule?: Prisma.EnumUnlockRuleFilter<"SavingsGoal"> | $Enums.UnlockRule;
    status?: Prisma.EnumSavingsStatusFilter<"SavingsGoal"> | $Enums.SavingsStatus;
    createdAt?: Prisma.DateTimeFilter<"SavingsGoal"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SavingsGoal"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    deposit?: Prisma.SavingsDepositListRelationFilter;
    payouts?: Prisma.PayoutListRelationFilter;
    ledgerEntries?: Prisma.LedgerEntryListRelationFilter;
};
export type SavingsGoalOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    targetKobo?: Prisma.SortOrder;
    depositKobo?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    unlockRule?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    deposit?: Prisma.SavingsDepositOrderByRelationAggregateInput;
    payouts?: Prisma.PayoutOrderByRelationAggregateInput;
    ledgerEntries?: Prisma.LedgerEntryOrderByRelationAggregateInput;
};
export type SavingsGoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SavingsGoalWhereInput | Prisma.SavingsGoalWhereInput[];
    OR?: Prisma.SavingsGoalWhereInput[];
    NOT?: Prisma.SavingsGoalWhereInput | Prisma.SavingsGoalWhereInput[];
    userId?: Prisma.StringFilter<"SavingsGoal"> | string;
    name?: Prisma.StringFilter<"SavingsGoal"> | string;
    targetKobo?: Prisma.StringFilter<"SavingsGoal"> | string;
    depositKobo?: Prisma.IntFilter<"SavingsGoal"> | number;
    frequency?: Prisma.EnumFrequencyFilter<"SavingsGoal"> | $Enums.Frequency;
    startDate?: Prisma.DateTimeFilter<"SavingsGoal"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"SavingsGoal"> | Date | string;
    unlockRule?: Prisma.EnumUnlockRuleFilter<"SavingsGoal"> | $Enums.UnlockRule;
    status?: Prisma.EnumSavingsStatusFilter<"SavingsGoal"> | $Enums.SavingsStatus;
    createdAt?: Prisma.DateTimeFilter<"SavingsGoal"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SavingsGoal"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    deposit?: Prisma.SavingsDepositListRelationFilter;
    payouts?: Prisma.PayoutListRelationFilter;
    ledgerEntries?: Prisma.LedgerEntryListRelationFilter;
}, "id">;
export type SavingsGoalOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    targetKobo?: Prisma.SortOrder;
    depositKobo?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    unlockRule?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SavingsGoalCountOrderByAggregateInput;
    _avg?: Prisma.SavingsGoalAvgOrderByAggregateInput;
    _max?: Prisma.SavingsGoalMaxOrderByAggregateInput;
    _min?: Prisma.SavingsGoalMinOrderByAggregateInput;
    _sum?: Prisma.SavingsGoalSumOrderByAggregateInput;
};
export type SavingsGoalScalarWhereWithAggregatesInput = {
    AND?: Prisma.SavingsGoalScalarWhereWithAggregatesInput | Prisma.SavingsGoalScalarWhereWithAggregatesInput[];
    OR?: Prisma.SavingsGoalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SavingsGoalScalarWhereWithAggregatesInput | Prisma.SavingsGoalScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SavingsGoal"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"SavingsGoal"> | string;
    name?: Prisma.StringWithAggregatesFilter<"SavingsGoal"> | string;
    targetKobo?: Prisma.StringWithAggregatesFilter<"SavingsGoal"> | string;
    depositKobo?: Prisma.IntWithAggregatesFilter<"SavingsGoal"> | number;
    frequency?: Prisma.EnumFrequencyWithAggregatesFilter<"SavingsGoal"> | $Enums.Frequency;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"SavingsGoal"> | Date | string;
    endDate?: Prisma.DateTimeWithAggregatesFilter<"SavingsGoal"> | Date | string;
    unlockRule?: Prisma.EnumUnlockRuleWithAggregatesFilter<"SavingsGoal"> | $Enums.UnlockRule;
    status?: Prisma.EnumSavingsStatusWithAggregatesFilter<"SavingsGoal"> | $Enums.SavingsStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SavingsGoal"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SavingsGoal"> | Date | string;
};
export type SavingsGoalCreateInput = {
    id?: string;
    name: string;
    targetKobo: string;
    depositKobo: number;
    frequency: $Enums.Frequency;
    startDate: Date | string;
    endDate: Date | string;
    unlockRule: $Enums.UnlockRule;
    status?: $Enums.SavingsStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSavingsGoalsInput;
    deposit?: Prisma.SavingsDepositCreateNestedManyWithoutGoalInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutSavingsGoalInput;
    ledgerEntries?: Prisma.LedgerEntryCreateNestedManyWithoutSavingGoalInput;
};
export type SavingsGoalUncheckedCreateInput = {
    id?: string;
    userId: string;
    name: string;
    targetKobo: string;
    depositKobo: number;
    frequency: $Enums.Frequency;
    startDate: Date | string;
    endDate: Date | string;
    unlockRule: $Enums.UnlockRule;
    status?: $Enums.SavingsStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deposit?: Prisma.SavingsDepositUncheckedCreateNestedManyWithoutGoalInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutSavingsGoalInput;
    ledgerEntries?: Prisma.LedgerEntryUncheckedCreateNestedManyWithoutSavingGoalInput;
};
export type SavingsGoalUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    targetKobo?: Prisma.StringFieldUpdateOperationsInput | string;
    depositKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency?: Prisma.EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unlockRule?: Prisma.EnumUnlockRuleFieldUpdateOperationsInput | $Enums.UnlockRule;
    status?: Prisma.EnumSavingsStatusFieldUpdateOperationsInput | $Enums.SavingsStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSavingsGoalsNestedInput;
    deposit?: Prisma.SavingsDepositUpdateManyWithoutGoalNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutSavingsGoalNestedInput;
    ledgerEntries?: Prisma.LedgerEntryUpdateManyWithoutSavingGoalNestedInput;
};
export type SavingsGoalUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    targetKobo?: Prisma.StringFieldUpdateOperationsInput | string;
    depositKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency?: Prisma.EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unlockRule?: Prisma.EnumUnlockRuleFieldUpdateOperationsInput | $Enums.UnlockRule;
    status?: Prisma.EnumSavingsStatusFieldUpdateOperationsInput | $Enums.SavingsStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deposit?: Prisma.SavingsDepositUncheckedUpdateManyWithoutGoalNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutSavingsGoalNestedInput;
    ledgerEntries?: Prisma.LedgerEntryUncheckedUpdateManyWithoutSavingGoalNestedInput;
};
export type SavingsGoalCreateManyInput = {
    id?: string;
    userId: string;
    name: string;
    targetKobo: string;
    depositKobo: number;
    frequency: $Enums.Frequency;
    startDate: Date | string;
    endDate: Date | string;
    unlockRule: $Enums.UnlockRule;
    status?: $Enums.SavingsStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SavingsGoalUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    targetKobo?: Prisma.StringFieldUpdateOperationsInput | string;
    depositKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency?: Prisma.EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unlockRule?: Prisma.EnumUnlockRuleFieldUpdateOperationsInput | $Enums.UnlockRule;
    status?: Prisma.EnumSavingsStatusFieldUpdateOperationsInput | $Enums.SavingsStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavingsGoalUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    targetKobo?: Prisma.StringFieldUpdateOperationsInput | string;
    depositKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency?: Prisma.EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unlockRule?: Prisma.EnumUnlockRuleFieldUpdateOperationsInput | $Enums.UnlockRule;
    status?: Prisma.EnumSavingsStatusFieldUpdateOperationsInput | $Enums.SavingsStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavingsGoalListRelationFilter = {
    every?: Prisma.SavingsGoalWhereInput;
    some?: Prisma.SavingsGoalWhereInput;
    none?: Prisma.SavingsGoalWhereInput;
};
export type SavingsGoalOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SavingsGoalNullableScalarRelationFilter = {
    is?: Prisma.SavingsGoalWhereInput | null;
    isNot?: Prisma.SavingsGoalWhereInput | null;
};
export type SavingsGoalCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    targetKobo?: Prisma.SortOrder;
    depositKobo?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    unlockRule?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SavingsGoalAvgOrderByAggregateInput = {
    depositKobo?: Prisma.SortOrder;
};
export type SavingsGoalMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    targetKobo?: Prisma.SortOrder;
    depositKobo?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    unlockRule?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SavingsGoalMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    targetKobo?: Prisma.SortOrder;
    depositKobo?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    unlockRule?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SavingsGoalSumOrderByAggregateInput = {
    depositKobo?: Prisma.SortOrder;
};
export type SavingsGoalScalarRelationFilter = {
    is?: Prisma.SavingsGoalWhereInput;
    isNot?: Prisma.SavingsGoalWhereInput;
};
export type SavingsGoalCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SavingsGoalCreateWithoutUserInput, Prisma.SavingsGoalUncheckedCreateWithoutUserInput> | Prisma.SavingsGoalCreateWithoutUserInput[] | Prisma.SavingsGoalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavingsGoalCreateOrConnectWithoutUserInput | Prisma.SavingsGoalCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SavingsGoalCreateManyUserInputEnvelope;
    connect?: Prisma.SavingsGoalWhereUniqueInput | Prisma.SavingsGoalWhereUniqueInput[];
};
export type SavingsGoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SavingsGoalCreateWithoutUserInput, Prisma.SavingsGoalUncheckedCreateWithoutUserInput> | Prisma.SavingsGoalCreateWithoutUserInput[] | Prisma.SavingsGoalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavingsGoalCreateOrConnectWithoutUserInput | Prisma.SavingsGoalCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SavingsGoalCreateManyUserInputEnvelope;
    connect?: Prisma.SavingsGoalWhereUniqueInput | Prisma.SavingsGoalWhereUniqueInput[];
};
export type SavingsGoalUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SavingsGoalCreateWithoutUserInput, Prisma.SavingsGoalUncheckedCreateWithoutUserInput> | Prisma.SavingsGoalCreateWithoutUserInput[] | Prisma.SavingsGoalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavingsGoalCreateOrConnectWithoutUserInput | Prisma.SavingsGoalCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SavingsGoalUpsertWithWhereUniqueWithoutUserInput | Prisma.SavingsGoalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SavingsGoalCreateManyUserInputEnvelope;
    set?: Prisma.SavingsGoalWhereUniqueInput | Prisma.SavingsGoalWhereUniqueInput[];
    disconnect?: Prisma.SavingsGoalWhereUniqueInput | Prisma.SavingsGoalWhereUniqueInput[];
    delete?: Prisma.SavingsGoalWhereUniqueInput | Prisma.SavingsGoalWhereUniqueInput[];
    connect?: Prisma.SavingsGoalWhereUniqueInput | Prisma.SavingsGoalWhereUniqueInput[];
    update?: Prisma.SavingsGoalUpdateWithWhereUniqueWithoutUserInput | Prisma.SavingsGoalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SavingsGoalUpdateManyWithWhereWithoutUserInput | Prisma.SavingsGoalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SavingsGoalScalarWhereInput | Prisma.SavingsGoalScalarWhereInput[];
};
export type SavingsGoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SavingsGoalCreateWithoutUserInput, Prisma.SavingsGoalUncheckedCreateWithoutUserInput> | Prisma.SavingsGoalCreateWithoutUserInput[] | Prisma.SavingsGoalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavingsGoalCreateOrConnectWithoutUserInput | Prisma.SavingsGoalCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SavingsGoalUpsertWithWhereUniqueWithoutUserInput | Prisma.SavingsGoalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SavingsGoalCreateManyUserInputEnvelope;
    set?: Prisma.SavingsGoalWhereUniqueInput | Prisma.SavingsGoalWhereUniqueInput[];
    disconnect?: Prisma.SavingsGoalWhereUniqueInput | Prisma.SavingsGoalWhereUniqueInput[];
    delete?: Prisma.SavingsGoalWhereUniqueInput | Prisma.SavingsGoalWhereUniqueInput[];
    connect?: Prisma.SavingsGoalWhereUniqueInput | Prisma.SavingsGoalWhereUniqueInput[];
    update?: Prisma.SavingsGoalUpdateWithWhereUniqueWithoutUserInput | Prisma.SavingsGoalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SavingsGoalUpdateManyWithWhereWithoutUserInput | Prisma.SavingsGoalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SavingsGoalScalarWhereInput | Prisma.SavingsGoalScalarWhereInput[];
};
export type SavingsGoalCreateNestedOneWithoutPayoutsInput = {
    create?: Prisma.XOR<Prisma.SavingsGoalCreateWithoutPayoutsInput, Prisma.SavingsGoalUncheckedCreateWithoutPayoutsInput>;
    connectOrCreate?: Prisma.SavingsGoalCreateOrConnectWithoutPayoutsInput;
    connect?: Prisma.SavingsGoalWhereUniqueInput;
};
export type SavingsGoalUpdateOneWithoutPayoutsNestedInput = {
    create?: Prisma.XOR<Prisma.SavingsGoalCreateWithoutPayoutsInput, Prisma.SavingsGoalUncheckedCreateWithoutPayoutsInput>;
    connectOrCreate?: Prisma.SavingsGoalCreateOrConnectWithoutPayoutsInput;
    upsert?: Prisma.SavingsGoalUpsertWithoutPayoutsInput;
    disconnect?: Prisma.SavingsGoalWhereInput | boolean;
    delete?: Prisma.SavingsGoalWhereInput | boolean;
    connect?: Prisma.SavingsGoalWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SavingsGoalUpdateToOneWithWhereWithoutPayoutsInput, Prisma.SavingsGoalUpdateWithoutPayoutsInput>, Prisma.SavingsGoalUncheckedUpdateWithoutPayoutsInput>;
};
export type SavingsGoalCreateNestedOneWithoutLedgerEntriesInput = {
    create?: Prisma.XOR<Prisma.SavingsGoalCreateWithoutLedgerEntriesInput, Prisma.SavingsGoalUncheckedCreateWithoutLedgerEntriesInput>;
    connectOrCreate?: Prisma.SavingsGoalCreateOrConnectWithoutLedgerEntriesInput;
    connect?: Prisma.SavingsGoalWhereUniqueInput;
};
export type SavingsGoalUpdateOneWithoutLedgerEntriesNestedInput = {
    create?: Prisma.XOR<Prisma.SavingsGoalCreateWithoutLedgerEntriesInput, Prisma.SavingsGoalUncheckedCreateWithoutLedgerEntriesInput>;
    connectOrCreate?: Prisma.SavingsGoalCreateOrConnectWithoutLedgerEntriesInput;
    upsert?: Prisma.SavingsGoalUpsertWithoutLedgerEntriesInput;
    disconnect?: Prisma.SavingsGoalWhereInput | boolean;
    delete?: Prisma.SavingsGoalWhereInput | boolean;
    connect?: Prisma.SavingsGoalWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SavingsGoalUpdateToOneWithWhereWithoutLedgerEntriesInput, Prisma.SavingsGoalUpdateWithoutLedgerEntriesInput>, Prisma.SavingsGoalUncheckedUpdateWithoutLedgerEntriesInput>;
};
export type EnumUnlockRuleFieldUpdateOperationsInput = {
    set?: $Enums.UnlockRule;
};
export type EnumSavingsStatusFieldUpdateOperationsInput = {
    set?: $Enums.SavingsStatus;
};
export type SavingsGoalCreateNestedOneWithoutDepositInput = {
    create?: Prisma.XOR<Prisma.SavingsGoalCreateWithoutDepositInput, Prisma.SavingsGoalUncheckedCreateWithoutDepositInput>;
    connectOrCreate?: Prisma.SavingsGoalCreateOrConnectWithoutDepositInput;
    connect?: Prisma.SavingsGoalWhereUniqueInput;
};
export type SavingsGoalUpdateOneRequiredWithoutDepositNestedInput = {
    create?: Prisma.XOR<Prisma.SavingsGoalCreateWithoutDepositInput, Prisma.SavingsGoalUncheckedCreateWithoutDepositInput>;
    connectOrCreate?: Prisma.SavingsGoalCreateOrConnectWithoutDepositInput;
    upsert?: Prisma.SavingsGoalUpsertWithoutDepositInput;
    connect?: Prisma.SavingsGoalWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SavingsGoalUpdateToOneWithWhereWithoutDepositInput, Prisma.SavingsGoalUpdateWithoutDepositInput>, Prisma.SavingsGoalUncheckedUpdateWithoutDepositInput>;
};
export type SavingsGoalCreateWithoutUserInput = {
    id?: string;
    name: string;
    targetKobo: string;
    depositKobo: number;
    frequency: $Enums.Frequency;
    startDate: Date | string;
    endDate: Date | string;
    unlockRule: $Enums.UnlockRule;
    status?: $Enums.SavingsStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deposit?: Prisma.SavingsDepositCreateNestedManyWithoutGoalInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutSavingsGoalInput;
    ledgerEntries?: Prisma.LedgerEntryCreateNestedManyWithoutSavingGoalInput;
};
export type SavingsGoalUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    targetKobo: string;
    depositKobo: number;
    frequency: $Enums.Frequency;
    startDate: Date | string;
    endDate: Date | string;
    unlockRule: $Enums.UnlockRule;
    status?: $Enums.SavingsStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deposit?: Prisma.SavingsDepositUncheckedCreateNestedManyWithoutGoalInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutSavingsGoalInput;
    ledgerEntries?: Prisma.LedgerEntryUncheckedCreateNestedManyWithoutSavingGoalInput;
};
export type SavingsGoalCreateOrConnectWithoutUserInput = {
    where: Prisma.SavingsGoalWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavingsGoalCreateWithoutUserInput, Prisma.SavingsGoalUncheckedCreateWithoutUserInput>;
};
export type SavingsGoalCreateManyUserInputEnvelope = {
    data: Prisma.SavingsGoalCreateManyUserInput | Prisma.SavingsGoalCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SavingsGoalUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SavingsGoalWhereUniqueInput;
    update: Prisma.XOR<Prisma.SavingsGoalUpdateWithoutUserInput, Prisma.SavingsGoalUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SavingsGoalCreateWithoutUserInput, Prisma.SavingsGoalUncheckedCreateWithoutUserInput>;
};
export type SavingsGoalUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SavingsGoalWhereUniqueInput;
    data: Prisma.XOR<Prisma.SavingsGoalUpdateWithoutUserInput, Prisma.SavingsGoalUncheckedUpdateWithoutUserInput>;
};
export type SavingsGoalUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SavingsGoalScalarWhereInput;
    data: Prisma.XOR<Prisma.SavingsGoalUpdateManyMutationInput, Prisma.SavingsGoalUncheckedUpdateManyWithoutUserInput>;
};
export type SavingsGoalScalarWhereInput = {
    AND?: Prisma.SavingsGoalScalarWhereInput | Prisma.SavingsGoalScalarWhereInput[];
    OR?: Prisma.SavingsGoalScalarWhereInput[];
    NOT?: Prisma.SavingsGoalScalarWhereInput | Prisma.SavingsGoalScalarWhereInput[];
    id?: Prisma.StringFilter<"SavingsGoal"> | string;
    userId?: Prisma.StringFilter<"SavingsGoal"> | string;
    name?: Prisma.StringFilter<"SavingsGoal"> | string;
    targetKobo?: Prisma.StringFilter<"SavingsGoal"> | string;
    depositKobo?: Prisma.IntFilter<"SavingsGoal"> | number;
    frequency?: Prisma.EnumFrequencyFilter<"SavingsGoal"> | $Enums.Frequency;
    startDate?: Prisma.DateTimeFilter<"SavingsGoal"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"SavingsGoal"> | Date | string;
    unlockRule?: Prisma.EnumUnlockRuleFilter<"SavingsGoal"> | $Enums.UnlockRule;
    status?: Prisma.EnumSavingsStatusFilter<"SavingsGoal"> | $Enums.SavingsStatus;
    createdAt?: Prisma.DateTimeFilter<"SavingsGoal"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SavingsGoal"> | Date | string;
};
export type SavingsGoalCreateWithoutPayoutsInput = {
    id?: string;
    name: string;
    targetKobo: string;
    depositKobo: number;
    frequency: $Enums.Frequency;
    startDate: Date | string;
    endDate: Date | string;
    unlockRule: $Enums.UnlockRule;
    status?: $Enums.SavingsStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSavingsGoalsInput;
    deposit?: Prisma.SavingsDepositCreateNestedManyWithoutGoalInput;
    ledgerEntries?: Prisma.LedgerEntryCreateNestedManyWithoutSavingGoalInput;
};
export type SavingsGoalUncheckedCreateWithoutPayoutsInput = {
    id?: string;
    userId: string;
    name: string;
    targetKobo: string;
    depositKobo: number;
    frequency: $Enums.Frequency;
    startDate: Date | string;
    endDate: Date | string;
    unlockRule: $Enums.UnlockRule;
    status?: $Enums.SavingsStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deposit?: Prisma.SavingsDepositUncheckedCreateNestedManyWithoutGoalInput;
    ledgerEntries?: Prisma.LedgerEntryUncheckedCreateNestedManyWithoutSavingGoalInput;
};
export type SavingsGoalCreateOrConnectWithoutPayoutsInput = {
    where: Prisma.SavingsGoalWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavingsGoalCreateWithoutPayoutsInput, Prisma.SavingsGoalUncheckedCreateWithoutPayoutsInput>;
};
export type SavingsGoalUpsertWithoutPayoutsInput = {
    update: Prisma.XOR<Prisma.SavingsGoalUpdateWithoutPayoutsInput, Prisma.SavingsGoalUncheckedUpdateWithoutPayoutsInput>;
    create: Prisma.XOR<Prisma.SavingsGoalCreateWithoutPayoutsInput, Prisma.SavingsGoalUncheckedCreateWithoutPayoutsInput>;
    where?: Prisma.SavingsGoalWhereInput;
};
export type SavingsGoalUpdateToOneWithWhereWithoutPayoutsInput = {
    where?: Prisma.SavingsGoalWhereInput;
    data: Prisma.XOR<Prisma.SavingsGoalUpdateWithoutPayoutsInput, Prisma.SavingsGoalUncheckedUpdateWithoutPayoutsInput>;
};
export type SavingsGoalUpdateWithoutPayoutsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    targetKobo?: Prisma.StringFieldUpdateOperationsInput | string;
    depositKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency?: Prisma.EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unlockRule?: Prisma.EnumUnlockRuleFieldUpdateOperationsInput | $Enums.UnlockRule;
    status?: Prisma.EnumSavingsStatusFieldUpdateOperationsInput | $Enums.SavingsStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSavingsGoalsNestedInput;
    deposit?: Prisma.SavingsDepositUpdateManyWithoutGoalNestedInput;
    ledgerEntries?: Prisma.LedgerEntryUpdateManyWithoutSavingGoalNestedInput;
};
export type SavingsGoalUncheckedUpdateWithoutPayoutsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    targetKobo?: Prisma.StringFieldUpdateOperationsInput | string;
    depositKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency?: Prisma.EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unlockRule?: Prisma.EnumUnlockRuleFieldUpdateOperationsInput | $Enums.UnlockRule;
    status?: Prisma.EnumSavingsStatusFieldUpdateOperationsInput | $Enums.SavingsStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deposit?: Prisma.SavingsDepositUncheckedUpdateManyWithoutGoalNestedInput;
    ledgerEntries?: Prisma.LedgerEntryUncheckedUpdateManyWithoutSavingGoalNestedInput;
};
export type SavingsGoalCreateWithoutLedgerEntriesInput = {
    id?: string;
    name: string;
    targetKobo: string;
    depositKobo: number;
    frequency: $Enums.Frequency;
    startDate: Date | string;
    endDate: Date | string;
    unlockRule: $Enums.UnlockRule;
    status?: $Enums.SavingsStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSavingsGoalsInput;
    deposit?: Prisma.SavingsDepositCreateNestedManyWithoutGoalInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutSavingsGoalInput;
};
export type SavingsGoalUncheckedCreateWithoutLedgerEntriesInput = {
    id?: string;
    userId: string;
    name: string;
    targetKobo: string;
    depositKobo: number;
    frequency: $Enums.Frequency;
    startDate: Date | string;
    endDate: Date | string;
    unlockRule: $Enums.UnlockRule;
    status?: $Enums.SavingsStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deposit?: Prisma.SavingsDepositUncheckedCreateNestedManyWithoutGoalInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutSavingsGoalInput;
};
export type SavingsGoalCreateOrConnectWithoutLedgerEntriesInput = {
    where: Prisma.SavingsGoalWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavingsGoalCreateWithoutLedgerEntriesInput, Prisma.SavingsGoalUncheckedCreateWithoutLedgerEntriesInput>;
};
export type SavingsGoalUpsertWithoutLedgerEntriesInput = {
    update: Prisma.XOR<Prisma.SavingsGoalUpdateWithoutLedgerEntriesInput, Prisma.SavingsGoalUncheckedUpdateWithoutLedgerEntriesInput>;
    create: Prisma.XOR<Prisma.SavingsGoalCreateWithoutLedgerEntriesInput, Prisma.SavingsGoalUncheckedCreateWithoutLedgerEntriesInput>;
    where?: Prisma.SavingsGoalWhereInput;
};
export type SavingsGoalUpdateToOneWithWhereWithoutLedgerEntriesInput = {
    where?: Prisma.SavingsGoalWhereInput;
    data: Prisma.XOR<Prisma.SavingsGoalUpdateWithoutLedgerEntriesInput, Prisma.SavingsGoalUncheckedUpdateWithoutLedgerEntriesInput>;
};
export type SavingsGoalUpdateWithoutLedgerEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    targetKobo?: Prisma.StringFieldUpdateOperationsInput | string;
    depositKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency?: Prisma.EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unlockRule?: Prisma.EnumUnlockRuleFieldUpdateOperationsInput | $Enums.UnlockRule;
    status?: Prisma.EnumSavingsStatusFieldUpdateOperationsInput | $Enums.SavingsStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSavingsGoalsNestedInput;
    deposit?: Prisma.SavingsDepositUpdateManyWithoutGoalNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutSavingsGoalNestedInput;
};
export type SavingsGoalUncheckedUpdateWithoutLedgerEntriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    targetKobo?: Prisma.StringFieldUpdateOperationsInput | string;
    depositKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency?: Prisma.EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unlockRule?: Prisma.EnumUnlockRuleFieldUpdateOperationsInput | $Enums.UnlockRule;
    status?: Prisma.EnumSavingsStatusFieldUpdateOperationsInput | $Enums.SavingsStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deposit?: Prisma.SavingsDepositUncheckedUpdateManyWithoutGoalNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutSavingsGoalNestedInput;
};
export type SavingsGoalCreateWithoutDepositInput = {
    id?: string;
    name: string;
    targetKobo: string;
    depositKobo: number;
    frequency: $Enums.Frequency;
    startDate: Date | string;
    endDate: Date | string;
    unlockRule: $Enums.UnlockRule;
    status?: $Enums.SavingsStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSavingsGoalsInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutSavingsGoalInput;
    ledgerEntries?: Prisma.LedgerEntryCreateNestedManyWithoutSavingGoalInput;
};
export type SavingsGoalUncheckedCreateWithoutDepositInput = {
    id?: string;
    userId: string;
    name: string;
    targetKobo: string;
    depositKobo: number;
    frequency: $Enums.Frequency;
    startDate: Date | string;
    endDate: Date | string;
    unlockRule: $Enums.UnlockRule;
    status?: $Enums.SavingsStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutSavingsGoalInput;
    ledgerEntries?: Prisma.LedgerEntryUncheckedCreateNestedManyWithoutSavingGoalInput;
};
export type SavingsGoalCreateOrConnectWithoutDepositInput = {
    where: Prisma.SavingsGoalWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavingsGoalCreateWithoutDepositInput, Prisma.SavingsGoalUncheckedCreateWithoutDepositInput>;
};
export type SavingsGoalUpsertWithoutDepositInput = {
    update: Prisma.XOR<Prisma.SavingsGoalUpdateWithoutDepositInput, Prisma.SavingsGoalUncheckedUpdateWithoutDepositInput>;
    create: Prisma.XOR<Prisma.SavingsGoalCreateWithoutDepositInput, Prisma.SavingsGoalUncheckedCreateWithoutDepositInput>;
    where?: Prisma.SavingsGoalWhereInput;
};
export type SavingsGoalUpdateToOneWithWhereWithoutDepositInput = {
    where?: Prisma.SavingsGoalWhereInput;
    data: Prisma.XOR<Prisma.SavingsGoalUpdateWithoutDepositInput, Prisma.SavingsGoalUncheckedUpdateWithoutDepositInput>;
};
export type SavingsGoalUpdateWithoutDepositInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    targetKobo?: Prisma.StringFieldUpdateOperationsInput | string;
    depositKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency?: Prisma.EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unlockRule?: Prisma.EnumUnlockRuleFieldUpdateOperationsInput | $Enums.UnlockRule;
    status?: Prisma.EnumSavingsStatusFieldUpdateOperationsInput | $Enums.SavingsStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSavingsGoalsNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutSavingsGoalNestedInput;
    ledgerEntries?: Prisma.LedgerEntryUpdateManyWithoutSavingGoalNestedInput;
};
export type SavingsGoalUncheckedUpdateWithoutDepositInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    targetKobo?: Prisma.StringFieldUpdateOperationsInput | string;
    depositKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency?: Prisma.EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unlockRule?: Prisma.EnumUnlockRuleFieldUpdateOperationsInput | $Enums.UnlockRule;
    status?: Prisma.EnumSavingsStatusFieldUpdateOperationsInput | $Enums.SavingsStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutSavingsGoalNestedInput;
    ledgerEntries?: Prisma.LedgerEntryUncheckedUpdateManyWithoutSavingGoalNestedInput;
};
export type SavingsGoalCreateManyUserInput = {
    id?: string;
    name: string;
    targetKobo: string;
    depositKobo: number;
    frequency: $Enums.Frequency;
    startDate: Date | string;
    endDate: Date | string;
    unlockRule: $Enums.UnlockRule;
    status?: $Enums.SavingsStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SavingsGoalUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    targetKobo?: Prisma.StringFieldUpdateOperationsInput | string;
    depositKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency?: Prisma.EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unlockRule?: Prisma.EnumUnlockRuleFieldUpdateOperationsInput | $Enums.UnlockRule;
    status?: Prisma.EnumSavingsStatusFieldUpdateOperationsInput | $Enums.SavingsStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deposit?: Prisma.SavingsDepositUpdateManyWithoutGoalNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutSavingsGoalNestedInput;
    ledgerEntries?: Prisma.LedgerEntryUpdateManyWithoutSavingGoalNestedInput;
};
export type SavingsGoalUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    targetKobo?: Prisma.StringFieldUpdateOperationsInput | string;
    depositKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency?: Prisma.EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unlockRule?: Prisma.EnumUnlockRuleFieldUpdateOperationsInput | $Enums.UnlockRule;
    status?: Prisma.EnumSavingsStatusFieldUpdateOperationsInput | $Enums.SavingsStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deposit?: Prisma.SavingsDepositUncheckedUpdateManyWithoutGoalNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutSavingsGoalNestedInput;
    ledgerEntries?: Prisma.LedgerEntryUncheckedUpdateManyWithoutSavingGoalNestedInput;
};
export type SavingsGoalUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    targetKobo?: Prisma.StringFieldUpdateOperationsInput | string;
    depositKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency?: Prisma.EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unlockRule?: Prisma.EnumUnlockRuleFieldUpdateOperationsInput | $Enums.UnlockRule;
    status?: Prisma.EnumSavingsStatusFieldUpdateOperationsInput | $Enums.SavingsStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavingsGoalCountOutputType = {
    deposit: number;
    payouts: number;
    ledgerEntries: number;
};
export type SavingsGoalCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    deposit?: boolean | SavingsGoalCountOutputTypeCountDepositArgs;
    payouts?: boolean | SavingsGoalCountOutputTypeCountPayoutsArgs;
    ledgerEntries?: boolean | SavingsGoalCountOutputTypeCountLedgerEntriesArgs;
};
export type SavingsGoalCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsGoalCountOutputTypeSelect<ExtArgs> | null;
};
export type SavingsGoalCountOutputTypeCountDepositArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavingsDepositWhereInput;
};
export type SavingsGoalCountOutputTypeCountPayoutsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutWhereInput;
};
export type SavingsGoalCountOutputTypeCountLedgerEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LedgerEntryWhereInput;
};
export type SavingsGoalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    targetKobo?: boolean;
    depositKobo?: boolean;
    frequency?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    unlockRule?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    deposit?: boolean | Prisma.SavingsGoal$depositArgs<ExtArgs>;
    payouts?: boolean | Prisma.SavingsGoal$payoutsArgs<ExtArgs>;
    ledgerEntries?: boolean | Prisma.SavingsGoal$ledgerEntriesArgs<ExtArgs>;
    _count?: boolean | Prisma.SavingsGoalCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savingsGoal"]>;
export type SavingsGoalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    targetKobo?: boolean;
    depositKobo?: boolean;
    frequency?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    unlockRule?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savingsGoal"]>;
export type SavingsGoalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    targetKobo?: boolean;
    depositKobo?: boolean;
    frequency?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    unlockRule?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savingsGoal"]>;
export type SavingsGoalSelectScalar = {
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    targetKobo?: boolean;
    depositKobo?: boolean;
    frequency?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    unlockRule?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SavingsGoalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "name" | "targetKobo" | "depositKobo" | "frequency" | "startDate" | "endDate" | "unlockRule" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["savingsGoal"]>;
export type SavingsGoalInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    deposit?: boolean | Prisma.SavingsGoal$depositArgs<ExtArgs>;
    payouts?: boolean | Prisma.SavingsGoal$payoutsArgs<ExtArgs>;
    ledgerEntries?: boolean | Prisma.SavingsGoal$ledgerEntriesArgs<ExtArgs>;
    _count?: boolean | Prisma.SavingsGoalCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SavingsGoalIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SavingsGoalIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $SavingsGoalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SavingsGoal";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        deposit: Prisma.$SavingsDepositPayload<ExtArgs>[];
        payouts: Prisma.$PayoutPayload<ExtArgs>[];
        ledgerEntries: Prisma.$LedgerEntryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        name: string;
        targetKobo: string;
        depositKobo: number;
        frequency: $Enums.Frequency;
        startDate: Date;
        endDate: Date;
        unlockRule: $Enums.UnlockRule;
        status: $Enums.SavingsStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["savingsGoal"]>;
    composites: {};
};
export type SavingsGoalGetPayload<S extends boolean | null | undefined | SavingsGoalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SavingsGoalPayload, S>;
export type SavingsGoalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SavingsGoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SavingsGoalCountAggregateInputType | true;
};
export interface SavingsGoalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SavingsGoal'];
        meta: {
            name: 'SavingsGoal';
        };
    };
    findUnique<T extends SavingsGoalFindUniqueArgs>(args: Prisma.SelectSubset<T, SavingsGoalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SavingsGoalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SavingsGoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SavingsGoalFindFirstArgs>(args?: Prisma.SelectSubset<T, SavingsGoalFindFirstArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SavingsGoalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SavingsGoalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SavingsGoalFindManyArgs>(args?: Prisma.SelectSubset<T, SavingsGoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SavingsGoalCreateArgs>(args: Prisma.SelectSubset<T, SavingsGoalCreateArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SavingsGoalCreateManyArgs>(args?: Prisma.SelectSubset<T, SavingsGoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SavingsGoalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SavingsGoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SavingsGoalDeleteArgs>(args: Prisma.SelectSubset<T, SavingsGoalDeleteArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SavingsGoalUpdateArgs>(args: Prisma.SelectSubset<T, SavingsGoalUpdateArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SavingsGoalDeleteManyArgs>(args?: Prisma.SelectSubset<T, SavingsGoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SavingsGoalUpdateManyArgs>(args: Prisma.SelectSubset<T, SavingsGoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SavingsGoalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SavingsGoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SavingsGoalUpsertArgs>(args: Prisma.SelectSubset<T, SavingsGoalUpsertArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SavingsGoalCountArgs>(args?: Prisma.Subset<T, SavingsGoalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SavingsGoalCountAggregateOutputType> : number>;
    aggregate<T extends SavingsGoalAggregateArgs>(args: Prisma.Subset<T, SavingsGoalAggregateArgs>): Prisma.PrismaPromise<GetSavingsGoalAggregateType<T>>;
    groupBy<T extends SavingsGoalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SavingsGoalGroupByArgs['orderBy'];
    } : {
        orderBy?: SavingsGoalGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SavingsGoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavingsGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SavingsGoalFieldRefs;
}
export interface Prisma__SavingsGoalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    deposit<T extends Prisma.SavingsGoal$depositArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SavingsGoal$depositArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavingsDepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    payouts<T extends Prisma.SavingsGoal$payoutsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SavingsGoal$payoutsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ledgerEntries<T extends Prisma.SavingsGoal$ledgerEntriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SavingsGoal$ledgerEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SavingsGoalFieldRefs {
    readonly id: Prisma.FieldRef<"SavingsGoal", 'String'>;
    readonly userId: Prisma.FieldRef<"SavingsGoal", 'String'>;
    readonly name: Prisma.FieldRef<"SavingsGoal", 'String'>;
    readonly targetKobo: Prisma.FieldRef<"SavingsGoal", 'String'>;
    readonly depositKobo: Prisma.FieldRef<"SavingsGoal", 'Int'>;
    readonly frequency: Prisma.FieldRef<"SavingsGoal", 'Frequency'>;
    readonly startDate: Prisma.FieldRef<"SavingsGoal", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"SavingsGoal", 'DateTime'>;
    readonly unlockRule: Prisma.FieldRef<"SavingsGoal", 'UnlockRule'>;
    readonly status: Prisma.FieldRef<"SavingsGoal", 'SavingsStatus'>;
    readonly createdAt: Prisma.FieldRef<"SavingsGoal", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SavingsGoal", 'DateTime'>;
}
export type SavingsGoalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsGoalSelect<ExtArgs> | null;
    omit?: Prisma.SavingsGoalOmit<ExtArgs> | null;
    include?: Prisma.SavingsGoalInclude<ExtArgs> | null;
    where: Prisma.SavingsGoalWhereUniqueInput;
};
export type SavingsGoalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsGoalSelect<ExtArgs> | null;
    omit?: Prisma.SavingsGoalOmit<ExtArgs> | null;
    include?: Prisma.SavingsGoalInclude<ExtArgs> | null;
    where: Prisma.SavingsGoalWhereUniqueInput;
};
export type SavingsGoalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SavingsGoalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SavingsGoalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SavingsGoalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsGoalSelect<ExtArgs> | null;
    omit?: Prisma.SavingsGoalOmit<ExtArgs> | null;
    include?: Prisma.SavingsGoalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SavingsGoalCreateInput, Prisma.SavingsGoalUncheckedCreateInput>;
};
export type SavingsGoalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SavingsGoalCreateManyInput | Prisma.SavingsGoalCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SavingsGoalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsGoalSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SavingsGoalOmit<ExtArgs> | null;
    data: Prisma.SavingsGoalCreateManyInput | Prisma.SavingsGoalCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SavingsGoalIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SavingsGoalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsGoalSelect<ExtArgs> | null;
    omit?: Prisma.SavingsGoalOmit<ExtArgs> | null;
    include?: Prisma.SavingsGoalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SavingsGoalUpdateInput, Prisma.SavingsGoalUncheckedUpdateInput>;
    where: Prisma.SavingsGoalWhereUniqueInput;
};
export type SavingsGoalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SavingsGoalUpdateManyMutationInput, Prisma.SavingsGoalUncheckedUpdateManyInput>;
    where?: Prisma.SavingsGoalWhereInput;
    limit?: number;
};
export type SavingsGoalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsGoalSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SavingsGoalOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SavingsGoalUpdateManyMutationInput, Prisma.SavingsGoalUncheckedUpdateManyInput>;
    where?: Prisma.SavingsGoalWhereInput;
    limit?: number;
    include?: Prisma.SavingsGoalIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SavingsGoalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsGoalSelect<ExtArgs> | null;
    omit?: Prisma.SavingsGoalOmit<ExtArgs> | null;
    include?: Prisma.SavingsGoalInclude<ExtArgs> | null;
    where: Prisma.SavingsGoalWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavingsGoalCreateInput, Prisma.SavingsGoalUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SavingsGoalUpdateInput, Prisma.SavingsGoalUncheckedUpdateInput>;
};
export type SavingsGoalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsGoalSelect<ExtArgs> | null;
    omit?: Prisma.SavingsGoalOmit<ExtArgs> | null;
    include?: Prisma.SavingsGoalInclude<ExtArgs> | null;
    where: Prisma.SavingsGoalWhereUniqueInput;
};
export type SavingsGoalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavingsGoalWhereInput;
    limit?: number;
};
export type SavingsGoal$depositArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsDepositSelect<ExtArgs> | null;
    omit?: Prisma.SavingsDepositOmit<ExtArgs> | null;
    include?: Prisma.SavingsDepositInclude<ExtArgs> | null;
    where?: Prisma.SavingsDepositWhereInput;
    orderBy?: Prisma.SavingsDepositOrderByWithRelationInput | Prisma.SavingsDepositOrderByWithRelationInput[];
    cursor?: Prisma.SavingsDepositWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SavingsDepositScalarFieldEnum | Prisma.SavingsDepositScalarFieldEnum[];
};
export type SavingsGoal$payoutsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SavingsGoal$ledgerEntriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SavingsGoalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsGoalSelect<ExtArgs> | null;
    omit?: Prisma.SavingsGoalOmit<ExtArgs> | null;
    include?: Prisma.SavingsGoalInclude<ExtArgs> | null;
};
