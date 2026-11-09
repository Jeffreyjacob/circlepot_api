import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LedgerEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$LedgerEntryPayload>;
export type AggregateLedgerEntry = {
    _count: LedgerEntryCountAggregateOutputType | null;
    _avg: LedgerEntryAvgAggregateOutputType | null;
    _sum: LedgerEntrySumAggregateOutputType | null;
    _min: LedgerEntryMinAggregateOutputType | null;
    _max: LedgerEntryMaxAggregateOutputType | null;
};
export type LedgerEntryAvgAggregateOutputType = {
    amountKobo: number | null;
};
export type LedgerEntrySumAggregateOutputType = {
    amountKobo: number | null;
};
export type LedgerEntryMinAggregateOutputType = {
    id: string | null;
    idempotencyKey: string | null;
    groupId: string | null;
    savingsGoalId: string | null;
    userId: string | null;
    type: $Enums.LedgerType | null;
    amountKobo: number | null;
    paymentId: string | null;
    payoutId: string | null;
    createdAt: Date | null;
};
export type LedgerEntryMaxAggregateOutputType = {
    id: string | null;
    idempotencyKey: string | null;
    groupId: string | null;
    savingsGoalId: string | null;
    userId: string | null;
    type: $Enums.LedgerType | null;
    amountKobo: number | null;
    paymentId: string | null;
    payoutId: string | null;
    createdAt: Date | null;
};
export type LedgerEntryCountAggregateOutputType = {
    id: number;
    idempotencyKey: number;
    groupId: number;
    savingsGoalId: number;
    userId: number;
    type: number;
    amountKobo: number;
    paymentId: number;
    payoutId: number;
    createdAt: number;
    _all: number;
};
export type LedgerEntryAvgAggregateInputType = {
    amountKobo?: true;
};
export type LedgerEntrySumAggregateInputType = {
    amountKobo?: true;
};
export type LedgerEntryMinAggregateInputType = {
    id?: true;
    idempotencyKey?: true;
    groupId?: true;
    savingsGoalId?: true;
    userId?: true;
    type?: true;
    amountKobo?: true;
    paymentId?: true;
    payoutId?: true;
    createdAt?: true;
};
export type LedgerEntryMaxAggregateInputType = {
    id?: true;
    idempotencyKey?: true;
    groupId?: true;
    savingsGoalId?: true;
    userId?: true;
    type?: true;
    amountKobo?: true;
    paymentId?: true;
    payoutId?: true;
    createdAt?: true;
};
export type LedgerEntryCountAggregateInputType = {
    id?: true;
    idempotencyKey?: true;
    groupId?: true;
    savingsGoalId?: true;
    userId?: true;
    type?: true;
    amountKobo?: true;
    paymentId?: true;
    payoutId?: true;
    createdAt?: true;
    _all?: true;
};
export type LedgerEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LedgerEntryWhereInput;
    orderBy?: Prisma.LedgerEntryOrderByWithRelationInput | Prisma.LedgerEntryOrderByWithRelationInput[];
    cursor?: Prisma.LedgerEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LedgerEntryCountAggregateInputType;
    _avg?: LedgerEntryAvgAggregateInputType;
    _sum?: LedgerEntrySumAggregateInputType;
    _min?: LedgerEntryMinAggregateInputType;
    _max?: LedgerEntryMaxAggregateInputType;
};
export type GetLedgerEntryAggregateType<T extends LedgerEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateLedgerEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLedgerEntry[P]> : Prisma.GetScalarType<T[P], AggregateLedgerEntry[P]>;
};
export type LedgerEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LedgerEntryWhereInput;
    orderBy?: Prisma.LedgerEntryOrderByWithAggregationInput | Prisma.LedgerEntryOrderByWithAggregationInput[];
    by: Prisma.LedgerEntryScalarFieldEnum[] | Prisma.LedgerEntryScalarFieldEnum;
    having?: Prisma.LedgerEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LedgerEntryCountAggregateInputType | true;
    _avg?: LedgerEntryAvgAggregateInputType;
    _sum?: LedgerEntrySumAggregateInputType;
    _min?: LedgerEntryMinAggregateInputType;
    _max?: LedgerEntryMaxAggregateInputType;
};
export type LedgerEntryGroupByOutputType = {
    id: string;
    idempotencyKey: string;
    groupId: string | null;
    savingsGoalId: string | null;
    userId: string;
    type: $Enums.LedgerType;
    amountKobo: number;
    paymentId: string | null;
    payoutId: string | null;
    createdAt: Date;
    _count: LedgerEntryCountAggregateOutputType | null;
    _avg: LedgerEntryAvgAggregateOutputType | null;
    _sum: LedgerEntrySumAggregateOutputType | null;
    _min: LedgerEntryMinAggregateOutputType | null;
    _max: LedgerEntryMaxAggregateOutputType | null;
};
export type GetLedgerEntryGroupByPayload<T extends LedgerEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LedgerEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LedgerEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LedgerEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LedgerEntryGroupByOutputType[P]>;
}>>;
export type LedgerEntryWhereInput = {
    AND?: Prisma.LedgerEntryWhereInput | Prisma.LedgerEntryWhereInput[];
    OR?: Prisma.LedgerEntryWhereInput[];
    NOT?: Prisma.LedgerEntryWhereInput | Prisma.LedgerEntryWhereInput[];
    id?: Prisma.StringFilter<"LedgerEntry"> | string;
    idempotencyKey?: Prisma.StringFilter<"LedgerEntry"> | string;
    groupId?: Prisma.StringNullableFilter<"LedgerEntry"> | string | null;
    savingsGoalId?: Prisma.StringNullableFilter<"LedgerEntry"> | string | null;
    userId?: Prisma.StringFilter<"LedgerEntry"> | string;
    type?: Prisma.EnumLedgerTypeFilter<"LedgerEntry"> | $Enums.LedgerType;
    amountKobo?: Prisma.IntFilter<"LedgerEntry"> | number;
    paymentId?: Prisma.StringNullableFilter<"LedgerEntry"> | string | null;
    payoutId?: Prisma.StringNullableFilter<"LedgerEntry"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LedgerEntry"> | Date | string;
    group?: Prisma.XOR<Prisma.GroupNullableScalarRelationFilter, Prisma.GroupWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    savingGoal?: Prisma.XOR<Prisma.SavingsGoalNullableScalarRelationFilter, Prisma.SavingsGoalWhereInput> | null;
};
export type LedgerEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    groupId?: Prisma.SortOrderInput | Prisma.SortOrder;
    savingsGoalId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    payoutId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    group?: Prisma.GroupOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    savingGoal?: Prisma.SavingsGoalOrderByWithRelationInput;
};
export type LedgerEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    idempotencyKey?: string;
    AND?: Prisma.LedgerEntryWhereInput | Prisma.LedgerEntryWhereInput[];
    OR?: Prisma.LedgerEntryWhereInput[];
    NOT?: Prisma.LedgerEntryWhereInput | Prisma.LedgerEntryWhereInput[];
    groupId?: Prisma.StringNullableFilter<"LedgerEntry"> | string | null;
    savingsGoalId?: Prisma.StringNullableFilter<"LedgerEntry"> | string | null;
    userId?: Prisma.StringFilter<"LedgerEntry"> | string;
    type?: Prisma.EnumLedgerTypeFilter<"LedgerEntry"> | $Enums.LedgerType;
    amountKobo?: Prisma.IntFilter<"LedgerEntry"> | number;
    paymentId?: Prisma.StringNullableFilter<"LedgerEntry"> | string | null;
    payoutId?: Prisma.StringNullableFilter<"LedgerEntry"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LedgerEntry"> | Date | string;
    group?: Prisma.XOR<Prisma.GroupNullableScalarRelationFilter, Prisma.GroupWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    savingGoal?: Prisma.XOR<Prisma.SavingsGoalNullableScalarRelationFilter, Prisma.SavingsGoalWhereInput> | null;
}, "id" | "idempotencyKey">;
export type LedgerEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    groupId?: Prisma.SortOrderInput | Prisma.SortOrder;
    savingsGoalId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    payoutId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LedgerEntryCountOrderByAggregateInput;
    _avg?: Prisma.LedgerEntryAvgOrderByAggregateInput;
    _max?: Prisma.LedgerEntryMaxOrderByAggregateInput;
    _min?: Prisma.LedgerEntryMinOrderByAggregateInput;
    _sum?: Prisma.LedgerEntrySumOrderByAggregateInput;
};
export type LedgerEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.LedgerEntryScalarWhereWithAggregatesInput | Prisma.LedgerEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.LedgerEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LedgerEntryScalarWhereWithAggregatesInput | Prisma.LedgerEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LedgerEntry"> | string;
    idempotencyKey?: Prisma.StringWithAggregatesFilter<"LedgerEntry"> | string;
    groupId?: Prisma.StringNullableWithAggregatesFilter<"LedgerEntry"> | string | null;
    savingsGoalId?: Prisma.StringNullableWithAggregatesFilter<"LedgerEntry"> | string | null;
    userId?: Prisma.StringWithAggregatesFilter<"LedgerEntry"> | string;
    type?: Prisma.EnumLedgerTypeWithAggregatesFilter<"LedgerEntry"> | $Enums.LedgerType;
    amountKobo?: Prisma.IntWithAggregatesFilter<"LedgerEntry"> | number;
    paymentId?: Prisma.StringNullableWithAggregatesFilter<"LedgerEntry"> | string | null;
    payoutId?: Prisma.StringNullableWithAggregatesFilter<"LedgerEntry"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LedgerEntry"> | Date | string;
};
export type LedgerEntryCreateInput = {
    id?: string;
    idempotencyKey: string;
    type: $Enums.LedgerType;
    amountKobo: number;
    paymentId?: string | null;
    payoutId?: string | null;
    createdAt?: Date | string;
    group?: Prisma.GroupCreateNestedOneWithoutLedgerEntryInput;
    user: Prisma.UserCreateNestedOneWithoutLedgerEntryInput;
    savingGoal?: Prisma.SavingsGoalCreateNestedOneWithoutLedgerEntriesInput;
};
export type LedgerEntryUncheckedCreateInput = {
    id?: string;
    idempotencyKey: string;
    groupId?: string | null;
    savingsGoalId?: string | null;
    userId: string;
    type: $Enums.LedgerType;
    amountKobo: number;
    paymentId?: string | null;
    payoutId?: string | null;
    createdAt?: Date | string;
};
export type LedgerEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneWithoutLedgerEntryNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutLedgerEntryNestedInput;
    savingGoal?: Prisma.SavingsGoalUpdateOneWithoutLedgerEntriesNestedInput;
};
export type LedgerEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    savingsGoalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerEntryCreateManyInput = {
    id?: string;
    idempotencyKey: string;
    groupId?: string | null;
    savingsGoalId?: string | null;
    userId: string;
    type: $Enums.LedgerType;
    amountKobo: number;
    paymentId?: string | null;
    payoutId?: string | null;
    createdAt?: Date | string;
};
export type LedgerEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    savingsGoalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerEntryListRelationFilter = {
    every?: Prisma.LedgerEntryWhereInput;
    some?: Prisma.LedgerEntryWhereInput;
    none?: Prisma.LedgerEntryWhereInput;
};
export type LedgerEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LedgerEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    savingsGoalId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    payoutId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LedgerEntryAvgOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type LedgerEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    savingsGoalId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    payoutId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LedgerEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    savingsGoalId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    payoutId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LedgerEntrySumOrderByAggregateInput = {
    amountKobo?: Prisma.SortOrder;
};
export type LedgerEntryCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LedgerEntryCreateWithoutUserInput, Prisma.LedgerEntryUncheckedCreateWithoutUserInput> | Prisma.LedgerEntryCreateWithoutUserInput[] | Prisma.LedgerEntryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LedgerEntryCreateOrConnectWithoutUserInput | Prisma.LedgerEntryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LedgerEntryCreateManyUserInputEnvelope;
    connect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
};
export type LedgerEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LedgerEntryCreateWithoutUserInput, Prisma.LedgerEntryUncheckedCreateWithoutUserInput> | Prisma.LedgerEntryCreateWithoutUserInput[] | Prisma.LedgerEntryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LedgerEntryCreateOrConnectWithoutUserInput | Prisma.LedgerEntryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LedgerEntryCreateManyUserInputEnvelope;
    connect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
};
export type LedgerEntryUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LedgerEntryCreateWithoutUserInput, Prisma.LedgerEntryUncheckedCreateWithoutUserInput> | Prisma.LedgerEntryCreateWithoutUserInput[] | Prisma.LedgerEntryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LedgerEntryCreateOrConnectWithoutUserInput | Prisma.LedgerEntryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LedgerEntryUpsertWithWhereUniqueWithoutUserInput | Prisma.LedgerEntryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LedgerEntryCreateManyUserInputEnvelope;
    set?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    disconnect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    delete?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    connect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    update?: Prisma.LedgerEntryUpdateWithWhereUniqueWithoutUserInput | Prisma.LedgerEntryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LedgerEntryUpdateManyWithWhereWithoutUserInput | Prisma.LedgerEntryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LedgerEntryScalarWhereInput | Prisma.LedgerEntryScalarWhereInput[];
};
export type LedgerEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LedgerEntryCreateWithoutUserInput, Prisma.LedgerEntryUncheckedCreateWithoutUserInput> | Prisma.LedgerEntryCreateWithoutUserInput[] | Prisma.LedgerEntryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LedgerEntryCreateOrConnectWithoutUserInput | Prisma.LedgerEntryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LedgerEntryUpsertWithWhereUniqueWithoutUserInput | Prisma.LedgerEntryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LedgerEntryCreateManyUserInputEnvelope;
    set?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    disconnect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    delete?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    connect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    update?: Prisma.LedgerEntryUpdateWithWhereUniqueWithoutUserInput | Prisma.LedgerEntryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LedgerEntryUpdateManyWithWhereWithoutUserInput | Prisma.LedgerEntryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LedgerEntryScalarWhereInput | Prisma.LedgerEntryScalarWhereInput[];
};
export type LedgerEntryCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.LedgerEntryCreateWithoutGroupInput, Prisma.LedgerEntryUncheckedCreateWithoutGroupInput> | Prisma.LedgerEntryCreateWithoutGroupInput[] | Prisma.LedgerEntryUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.LedgerEntryCreateOrConnectWithoutGroupInput | Prisma.LedgerEntryCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.LedgerEntryCreateManyGroupInputEnvelope;
    connect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
};
export type LedgerEntryUncheckedCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.LedgerEntryCreateWithoutGroupInput, Prisma.LedgerEntryUncheckedCreateWithoutGroupInput> | Prisma.LedgerEntryCreateWithoutGroupInput[] | Prisma.LedgerEntryUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.LedgerEntryCreateOrConnectWithoutGroupInput | Prisma.LedgerEntryCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.LedgerEntryCreateManyGroupInputEnvelope;
    connect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
};
export type LedgerEntryUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.LedgerEntryCreateWithoutGroupInput, Prisma.LedgerEntryUncheckedCreateWithoutGroupInput> | Prisma.LedgerEntryCreateWithoutGroupInput[] | Prisma.LedgerEntryUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.LedgerEntryCreateOrConnectWithoutGroupInput | Prisma.LedgerEntryCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.LedgerEntryUpsertWithWhereUniqueWithoutGroupInput | Prisma.LedgerEntryUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.LedgerEntryCreateManyGroupInputEnvelope;
    set?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    disconnect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    delete?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    connect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    update?: Prisma.LedgerEntryUpdateWithWhereUniqueWithoutGroupInput | Prisma.LedgerEntryUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.LedgerEntryUpdateManyWithWhereWithoutGroupInput | Prisma.LedgerEntryUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.LedgerEntryScalarWhereInput | Prisma.LedgerEntryScalarWhereInput[];
};
export type LedgerEntryUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.LedgerEntryCreateWithoutGroupInput, Prisma.LedgerEntryUncheckedCreateWithoutGroupInput> | Prisma.LedgerEntryCreateWithoutGroupInput[] | Prisma.LedgerEntryUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.LedgerEntryCreateOrConnectWithoutGroupInput | Prisma.LedgerEntryCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.LedgerEntryUpsertWithWhereUniqueWithoutGroupInput | Prisma.LedgerEntryUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.LedgerEntryCreateManyGroupInputEnvelope;
    set?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    disconnect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    delete?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    connect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    update?: Prisma.LedgerEntryUpdateWithWhereUniqueWithoutGroupInput | Prisma.LedgerEntryUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.LedgerEntryUpdateManyWithWhereWithoutGroupInput | Prisma.LedgerEntryUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.LedgerEntryScalarWhereInput | Prisma.LedgerEntryScalarWhereInput[];
};
export type EnumLedgerTypeFieldUpdateOperationsInput = {
    set?: $Enums.LedgerType;
};
export type LedgerEntryCreateNestedManyWithoutSavingGoalInput = {
    create?: Prisma.XOR<Prisma.LedgerEntryCreateWithoutSavingGoalInput, Prisma.LedgerEntryUncheckedCreateWithoutSavingGoalInput> | Prisma.LedgerEntryCreateWithoutSavingGoalInput[] | Prisma.LedgerEntryUncheckedCreateWithoutSavingGoalInput[];
    connectOrCreate?: Prisma.LedgerEntryCreateOrConnectWithoutSavingGoalInput | Prisma.LedgerEntryCreateOrConnectWithoutSavingGoalInput[];
    createMany?: Prisma.LedgerEntryCreateManySavingGoalInputEnvelope;
    connect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
};
export type LedgerEntryUncheckedCreateNestedManyWithoutSavingGoalInput = {
    create?: Prisma.XOR<Prisma.LedgerEntryCreateWithoutSavingGoalInput, Prisma.LedgerEntryUncheckedCreateWithoutSavingGoalInput> | Prisma.LedgerEntryCreateWithoutSavingGoalInput[] | Prisma.LedgerEntryUncheckedCreateWithoutSavingGoalInput[];
    connectOrCreate?: Prisma.LedgerEntryCreateOrConnectWithoutSavingGoalInput | Prisma.LedgerEntryCreateOrConnectWithoutSavingGoalInput[];
    createMany?: Prisma.LedgerEntryCreateManySavingGoalInputEnvelope;
    connect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
};
export type LedgerEntryUpdateManyWithoutSavingGoalNestedInput = {
    create?: Prisma.XOR<Prisma.LedgerEntryCreateWithoutSavingGoalInput, Prisma.LedgerEntryUncheckedCreateWithoutSavingGoalInput> | Prisma.LedgerEntryCreateWithoutSavingGoalInput[] | Prisma.LedgerEntryUncheckedCreateWithoutSavingGoalInput[];
    connectOrCreate?: Prisma.LedgerEntryCreateOrConnectWithoutSavingGoalInput | Prisma.LedgerEntryCreateOrConnectWithoutSavingGoalInput[];
    upsert?: Prisma.LedgerEntryUpsertWithWhereUniqueWithoutSavingGoalInput | Prisma.LedgerEntryUpsertWithWhereUniqueWithoutSavingGoalInput[];
    createMany?: Prisma.LedgerEntryCreateManySavingGoalInputEnvelope;
    set?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    disconnect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    delete?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    connect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    update?: Prisma.LedgerEntryUpdateWithWhereUniqueWithoutSavingGoalInput | Prisma.LedgerEntryUpdateWithWhereUniqueWithoutSavingGoalInput[];
    updateMany?: Prisma.LedgerEntryUpdateManyWithWhereWithoutSavingGoalInput | Prisma.LedgerEntryUpdateManyWithWhereWithoutSavingGoalInput[];
    deleteMany?: Prisma.LedgerEntryScalarWhereInput | Prisma.LedgerEntryScalarWhereInput[];
};
export type LedgerEntryUncheckedUpdateManyWithoutSavingGoalNestedInput = {
    create?: Prisma.XOR<Prisma.LedgerEntryCreateWithoutSavingGoalInput, Prisma.LedgerEntryUncheckedCreateWithoutSavingGoalInput> | Prisma.LedgerEntryCreateWithoutSavingGoalInput[] | Prisma.LedgerEntryUncheckedCreateWithoutSavingGoalInput[];
    connectOrCreate?: Prisma.LedgerEntryCreateOrConnectWithoutSavingGoalInput | Prisma.LedgerEntryCreateOrConnectWithoutSavingGoalInput[];
    upsert?: Prisma.LedgerEntryUpsertWithWhereUniqueWithoutSavingGoalInput | Prisma.LedgerEntryUpsertWithWhereUniqueWithoutSavingGoalInput[];
    createMany?: Prisma.LedgerEntryCreateManySavingGoalInputEnvelope;
    set?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    disconnect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    delete?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    connect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    update?: Prisma.LedgerEntryUpdateWithWhereUniqueWithoutSavingGoalInput | Prisma.LedgerEntryUpdateWithWhereUniqueWithoutSavingGoalInput[];
    updateMany?: Prisma.LedgerEntryUpdateManyWithWhereWithoutSavingGoalInput | Prisma.LedgerEntryUpdateManyWithWhereWithoutSavingGoalInput[];
    deleteMany?: Prisma.LedgerEntryScalarWhereInput | Prisma.LedgerEntryScalarWhereInput[];
};
export type LedgerEntryCreateWithoutUserInput = {
    id?: string;
    idempotencyKey: string;
    type: $Enums.LedgerType;
    amountKobo: number;
    paymentId?: string | null;
    payoutId?: string | null;
    createdAt?: Date | string;
    group?: Prisma.GroupCreateNestedOneWithoutLedgerEntryInput;
    savingGoal?: Prisma.SavingsGoalCreateNestedOneWithoutLedgerEntriesInput;
};
export type LedgerEntryUncheckedCreateWithoutUserInput = {
    id?: string;
    idempotencyKey: string;
    groupId?: string | null;
    savingsGoalId?: string | null;
    type: $Enums.LedgerType;
    amountKobo: number;
    paymentId?: string | null;
    payoutId?: string | null;
    createdAt?: Date | string;
};
export type LedgerEntryCreateOrConnectWithoutUserInput = {
    where: Prisma.LedgerEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.LedgerEntryCreateWithoutUserInput, Prisma.LedgerEntryUncheckedCreateWithoutUserInput>;
};
export type LedgerEntryCreateManyUserInputEnvelope = {
    data: Prisma.LedgerEntryCreateManyUserInput | Prisma.LedgerEntryCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type LedgerEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.LedgerEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.LedgerEntryUpdateWithoutUserInput, Prisma.LedgerEntryUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.LedgerEntryCreateWithoutUserInput, Prisma.LedgerEntryUncheckedCreateWithoutUserInput>;
};
export type LedgerEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.LedgerEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.LedgerEntryUpdateWithoutUserInput, Prisma.LedgerEntryUncheckedUpdateWithoutUserInput>;
};
export type LedgerEntryUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.LedgerEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.LedgerEntryUpdateManyMutationInput, Prisma.LedgerEntryUncheckedUpdateManyWithoutUserInput>;
};
export type LedgerEntryScalarWhereInput = {
    AND?: Prisma.LedgerEntryScalarWhereInput | Prisma.LedgerEntryScalarWhereInput[];
    OR?: Prisma.LedgerEntryScalarWhereInput[];
    NOT?: Prisma.LedgerEntryScalarWhereInput | Prisma.LedgerEntryScalarWhereInput[];
    id?: Prisma.StringFilter<"LedgerEntry"> | string;
    idempotencyKey?: Prisma.StringFilter<"LedgerEntry"> | string;
    groupId?: Prisma.StringNullableFilter<"LedgerEntry"> | string | null;
    savingsGoalId?: Prisma.StringNullableFilter<"LedgerEntry"> | string | null;
    userId?: Prisma.StringFilter<"LedgerEntry"> | string;
    type?: Prisma.EnumLedgerTypeFilter<"LedgerEntry"> | $Enums.LedgerType;
    amountKobo?: Prisma.IntFilter<"LedgerEntry"> | number;
    paymentId?: Prisma.StringNullableFilter<"LedgerEntry"> | string | null;
    payoutId?: Prisma.StringNullableFilter<"LedgerEntry"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LedgerEntry"> | Date | string;
};
export type LedgerEntryCreateWithoutGroupInput = {
    id?: string;
    idempotencyKey: string;
    type: $Enums.LedgerType;
    amountKobo: number;
    paymentId?: string | null;
    payoutId?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutLedgerEntryInput;
    savingGoal?: Prisma.SavingsGoalCreateNestedOneWithoutLedgerEntriesInput;
};
export type LedgerEntryUncheckedCreateWithoutGroupInput = {
    id?: string;
    idempotencyKey: string;
    savingsGoalId?: string | null;
    userId: string;
    type: $Enums.LedgerType;
    amountKobo: number;
    paymentId?: string | null;
    payoutId?: string | null;
    createdAt?: Date | string;
};
export type LedgerEntryCreateOrConnectWithoutGroupInput = {
    where: Prisma.LedgerEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.LedgerEntryCreateWithoutGroupInput, Prisma.LedgerEntryUncheckedCreateWithoutGroupInput>;
};
export type LedgerEntryCreateManyGroupInputEnvelope = {
    data: Prisma.LedgerEntryCreateManyGroupInput | Prisma.LedgerEntryCreateManyGroupInput[];
    skipDuplicates?: boolean;
};
export type LedgerEntryUpsertWithWhereUniqueWithoutGroupInput = {
    where: Prisma.LedgerEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.LedgerEntryUpdateWithoutGroupInput, Prisma.LedgerEntryUncheckedUpdateWithoutGroupInput>;
    create: Prisma.XOR<Prisma.LedgerEntryCreateWithoutGroupInput, Prisma.LedgerEntryUncheckedCreateWithoutGroupInput>;
};
export type LedgerEntryUpdateWithWhereUniqueWithoutGroupInput = {
    where: Prisma.LedgerEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.LedgerEntryUpdateWithoutGroupInput, Prisma.LedgerEntryUncheckedUpdateWithoutGroupInput>;
};
export type LedgerEntryUpdateManyWithWhereWithoutGroupInput = {
    where: Prisma.LedgerEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.LedgerEntryUpdateManyMutationInput, Prisma.LedgerEntryUncheckedUpdateManyWithoutGroupInput>;
};
export type LedgerEntryCreateWithoutSavingGoalInput = {
    id?: string;
    idempotencyKey: string;
    type: $Enums.LedgerType;
    amountKobo: number;
    paymentId?: string | null;
    payoutId?: string | null;
    createdAt?: Date | string;
    group?: Prisma.GroupCreateNestedOneWithoutLedgerEntryInput;
    user: Prisma.UserCreateNestedOneWithoutLedgerEntryInput;
};
export type LedgerEntryUncheckedCreateWithoutSavingGoalInput = {
    id?: string;
    idempotencyKey: string;
    groupId?: string | null;
    userId: string;
    type: $Enums.LedgerType;
    amountKobo: number;
    paymentId?: string | null;
    payoutId?: string | null;
    createdAt?: Date | string;
};
export type LedgerEntryCreateOrConnectWithoutSavingGoalInput = {
    where: Prisma.LedgerEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.LedgerEntryCreateWithoutSavingGoalInput, Prisma.LedgerEntryUncheckedCreateWithoutSavingGoalInput>;
};
export type LedgerEntryCreateManySavingGoalInputEnvelope = {
    data: Prisma.LedgerEntryCreateManySavingGoalInput | Prisma.LedgerEntryCreateManySavingGoalInput[];
    skipDuplicates?: boolean;
};
export type LedgerEntryUpsertWithWhereUniqueWithoutSavingGoalInput = {
    where: Prisma.LedgerEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.LedgerEntryUpdateWithoutSavingGoalInput, Prisma.LedgerEntryUncheckedUpdateWithoutSavingGoalInput>;
    create: Prisma.XOR<Prisma.LedgerEntryCreateWithoutSavingGoalInput, Prisma.LedgerEntryUncheckedCreateWithoutSavingGoalInput>;
};
export type LedgerEntryUpdateWithWhereUniqueWithoutSavingGoalInput = {
    where: Prisma.LedgerEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.LedgerEntryUpdateWithoutSavingGoalInput, Prisma.LedgerEntryUncheckedUpdateWithoutSavingGoalInput>;
};
export type LedgerEntryUpdateManyWithWhereWithoutSavingGoalInput = {
    where: Prisma.LedgerEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.LedgerEntryUpdateManyMutationInput, Prisma.LedgerEntryUncheckedUpdateManyWithoutSavingGoalInput>;
};
export type LedgerEntryCreateManyUserInput = {
    id?: string;
    idempotencyKey: string;
    groupId?: string | null;
    savingsGoalId?: string | null;
    type: $Enums.LedgerType;
    amountKobo: number;
    paymentId?: string | null;
    payoutId?: string | null;
    createdAt?: Date | string;
};
export type LedgerEntryUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneWithoutLedgerEntryNestedInput;
    savingGoal?: Prisma.SavingsGoalUpdateOneWithoutLedgerEntriesNestedInput;
};
export type LedgerEntryUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    savingsGoalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerEntryUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    savingsGoalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerEntryCreateManyGroupInput = {
    id?: string;
    idempotencyKey: string;
    savingsGoalId?: string | null;
    userId: string;
    type: $Enums.LedgerType;
    amountKobo: number;
    paymentId?: string | null;
    payoutId?: string | null;
    createdAt?: Date | string;
};
export type LedgerEntryUpdateWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutLedgerEntryNestedInput;
    savingGoal?: Prisma.SavingsGoalUpdateOneWithoutLedgerEntriesNestedInput;
};
export type LedgerEntryUncheckedUpdateWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    savingsGoalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerEntryUncheckedUpdateManyWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    savingsGoalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerEntryCreateManySavingGoalInput = {
    id?: string;
    idempotencyKey: string;
    groupId?: string | null;
    userId: string;
    type: $Enums.LedgerType;
    amountKobo: number;
    paymentId?: string | null;
    payoutId?: string | null;
    createdAt?: Date | string;
};
export type LedgerEntryUpdateWithoutSavingGoalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneWithoutLedgerEntryNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutLedgerEntryNestedInput;
};
export type LedgerEntryUncheckedUpdateWithoutSavingGoalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerEntryUncheckedUpdateManyWithoutSavingGoalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    idempotencyKey?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    paymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payoutId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    idempotencyKey?: boolean;
    groupId?: boolean;
    savingsGoalId?: boolean;
    userId?: boolean;
    type?: boolean;
    amountKobo?: boolean;
    paymentId?: boolean;
    payoutId?: boolean;
    createdAt?: boolean;
    group?: boolean | Prisma.LedgerEntry$groupArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    savingGoal?: boolean | Prisma.LedgerEntry$savingGoalArgs<ExtArgs>;
}, ExtArgs["result"]["ledgerEntry"]>;
export type LedgerEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    idempotencyKey?: boolean;
    groupId?: boolean;
    savingsGoalId?: boolean;
    userId?: boolean;
    type?: boolean;
    amountKobo?: boolean;
    paymentId?: boolean;
    payoutId?: boolean;
    createdAt?: boolean;
    group?: boolean | Prisma.LedgerEntry$groupArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    savingGoal?: boolean | Prisma.LedgerEntry$savingGoalArgs<ExtArgs>;
}, ExtArgs["result"]["ledgerEntry"]>;
export type LedgerEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    idempotencyKey?: boolean;
    groupId?: boolean;
    savingsGoalId?: boolean;
    userId?: boolean;
    type?: boolean;
    amountKobo?: boolean;
    paymentId?: boolean;
    payoutId?: boolean;
    createdAt?: boolean;
    group?: boolean | Prisma.LedgerEntry$groupArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    savingGoal?: boolean | Prisma.LedgerEntry$savingGoalArgs<ExtArgs>;
}, ExtArgs["result"]["ledgerEntry"]>;
export type LedgerEntrySelectScalar = {
    id?: boolean;
    idempotencyKey?: boolean;
    groupId?: boolean;
    savingsGoalId?: boolean;
    userId?: boolean;
    type?: boolean;
    amountKobo?: boolean;
    paymentId?: boolean;
    payoutId?: boolean;
    createdAt?: boolean;
};
export type LedgerEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "idempotencyKey" | "groupId" | "savingsGoalId" | "userId" | "type" | "amountKobo" | "paymentId" | "payoutId" | "createdAt", ExtArgs["result"]["ledgerEntry"]>;
export type LedgerEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.LedgerEntry$groupArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    savingGoal?: boolean | Prisma.LedgerEntry$savingGoalArgs<ExtArgs>;
};
export type LedgerEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.LedgerEntry$groupArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    savingGoal?: boolean | Prisma.LedgerEntry$savingGoalArgs<ExtArgs>;
};
export type LedgerEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.LedgerEntry$groupArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    savingGoal?: boolean | Prisma.LedgerEntry$savingGoalArgs<ExtArgs>;
};
export type $LedgerEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LedgerEntry";
    objects: {
        group: Prisma.$GroupPayload<ExtArgs> | null;
        user: Prisma.$UserPayload<ExtArgs>;
        savingGoal: Prisma.$SavingsGoalPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        idempotencyKey: string;
        groupId: string | null;
        savingsGoalId: string | null;
        userId: string;
        type: $Enums.LedgerType;
        amountKobo: number;
        paymentId: string | null;
        payoutId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["ledgerEntry"]>;
    composites: {};
};
export type LedgerEntryGetPayload<S extends boolean | null | undefined | LedgerEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload, S>;
export type LedgerEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LedgerEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LedgerEntryCountAggregateInputType | true;
};
export interface LedgerEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LedgerEntry'];
        meta: {
            name: 'LedgerEntry';
        };
    };
    findUnique<T extends LedgerEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, LedgerEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LedgerEntryClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LedgerEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LedgerEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LedgerEntryClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LedgerEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, LedgerEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__LedgerEntryClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LedgerEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LedgerEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LedgerEntryClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LedgerEntryFindManyArgs>(args?: Prisma.SelectSubset<T, LedgerEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LedgerEntryCreateArgs>(args: Prisma.SelectSubset<T, LedgerEntryCreateArgs<ExtArgs>>): Prisma.Prisma__LedgerEntryClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LedgerEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, LedgerEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LedgerEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LedgerEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LedgerEntryDeleteArgs>(args: Prisma.SelectSubset<T, LedgerEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__LedgerEntryClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LedgerEntryUpdateArgs>(args: Prisma.SelectSubset<T, LedgerEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__LedgerEntryClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LedgerEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, LedgerEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LedgerEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, LedgerEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LedgerEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LedgerEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LedgerEntryUpsertArgs>(args: Prisma.SelectSubset<T, LedgerEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__LedgerEntryClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LedgerEntryCountArgs>(args?: Prisma.Subset<T, LedgerEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LedgerEntryCountAggregateOutputType> : number>;
    aggregate<T extends LedgerEntryAggregateArgs>(args: Prisma.Subset<T, LedgerEntryAggregateArgs>): Prisma.PrismaPromise<GetLedgerEntryAggregateType<T>>;
    groupBy<T extends LedgerEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LedgerEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: LedgerEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LedgerEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLedgerEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LedgerEntryFieldRefs;
}
export interface Prisma__LedgerEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    group<T extends Prisma.LedgerEntry$groupArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntry$groupArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    savingGoal<T extends Prisma.LedgerEntry$savingGoalArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LedgerEntry$savingGoalArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LedgerEntryFieldRefs {
    readonly id: Prisma.FieldRef<"LedgerEntry", 'String'>;
    readonly idempotencyKey: Prisma.FieldRef<"LedgerEntry", 'String'>;
    readonly groupId: Prisma.FieldRef<"LedgerEntry", 'String'>;
    readonly savingsGoalId: Prisma.FieldRef<"LedgerEntry", 'String'>;
    readonly userId: Prisma.FieldRef<"LedgerEntry", 'String'>;
    readonly type: Prisma.FieldRef<"LedgerEntry", 'LedgerType'>;
    readonly amountKobo: Prisma.FieldRef<"LedgerEntry", 'Int'>;
    readonly paymentId: Prisma.FieldRef<"LedgerEntry", 'String'>;
    readonly payoutId: Prisma.FieldRef<"LedgerEntry", 'String'>;
    readonly createdAt: Prisma.FieldRef<"LedgerEntry", 'DateTime'>;
}
export type LedgerEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntryInclude<ExtArgs> | null;
    where: Prisma.LedgerEntryWhereUniqueInput;
};
export type LedgerEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntryInclude<ExtArgs> | null;
    where: Prisma.LedgerEntryWhereUniqueInput;
};
export type LedgerEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LedgerEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LedgerEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LedgerEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LedgerEntryCreateInput, Prisma.LedgerEntryUncheckedCreateInput>;
};
export type LedgerEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LedgerEntryCreateManyInput | Prisma.LedgerEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LedgerEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    data: Prisma.LedgerEntryCreateManyInput | Prisma.LedgerEntryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LedgerEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LedgerEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LedgerEntryUpdateInput, Prisma.LedgerEntryUncheckedUpdateInput>;
    where: Prisma.LedgerEntryWhereUniqueInput;
};
export type LedgerEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LedgerEntryUpdateManyMutationInput, Prisma.LedgerEntryUncheckedUpdateManyInput>;
    where?: Prisma.LedgerEntryWhereInput;
    limit?: number;
};
export type LedgerEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LedgerEntryUpdateManyMutationInput, Prisma.LedgerEntryUncheckedUpdateManyInput>;
    where?: Prisma.LedgerEntryWhereInput;
    limit?: number;
    include?: Prisma.LedgerEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LedgerEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntryInclude<ExtArgs> | null;
    where: Prisma.LedgerEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.LedgerEntryCreateInput, Prisma.LedgerEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LedgerEntryUpdateInput, Prisma.LedgerEntryUncheckedUpdateInput>;
};
export type LedgerEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntryInclude<ExtArgs> | null;
    where: Prisma.LedgerEntryWhereUniqueInput;
};
export type LedgerEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LedgerEntryWhereInput;
    limit?: number;
};
export type LedgerEntry$groupArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where?: Prisma.GroupWhereInput;
};
export type LedgerEntry$savingGoalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsGoalSelect<ExtArgs> | null;
    omit?: Prisma.SavingsGoalOmit<ExtArgs> | null;
    include?: Prisma.SavingsGoalInclude<ExtArgs> | null;
    where?: Prisma.SavingsGoalWhereInput;
};
export type LedgerEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntryInclude<ExtArgs> | null;
};
