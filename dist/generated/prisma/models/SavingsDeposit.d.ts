import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SavingsDepositModel = runtime.Types.Result.DefaultSelection<Prisma.$SavingsDepositPayload>;
export type AggregateSavingsDeposit = {
    _count: SavingsDepositCountAggregateOutputType | null;
    _avg: SavingsDepositAvgAggregateOutputType | null;
    _sum: SavingsDepositSumAggregateOutputType | null;
    _min: SavingsDepositMinAggregateOutputType | null;
    _max: SavingsDepositMaxAggregateOutputType | null;
};
export type SavingsDepositAvgAggregateOutputType = {
    sequence: number | null;
    amountKobo: number | null;
};
export type SavingsDepositSumAggregateOutputType = {
    sequence: number | null;
    amountKobo: number | null;
};
export type SavingsDepositMinAggregateOutputType = {
    id: string | null;
    goalId: string | null;
    sequence: number | null;
    amountKobo: number | null;
    dueAt: Date | null;
    status: $Enums.InstallmentStatus | null;
    paidAt: Date | null;
    createdAt: Date | null;
};
export type SavingsDepositMaxAggregateOutputType = {
    id: string | null;
    goalId: string | null;
    sequence: number | null;
    amountKobo: number | null;
    dueAt: Date | null;
    status: $Enums.InstallmentStatus | null;
    paidAt: Date | null;
    createdAt: Date | null;
};
export type SavingsDepositCountAggregateOutputType = {
    id: number;
    goalId: number;
    sequence: number;
    amountKobo: number;
    dueAt: number;
    status: number;
    paidAt: number;
    createdAt: number;
    _all: number;
};
export type SavingsDepositAvgAggregateInputType = {
    sequence?: true;
    amountKobo?: true;
};
export type SavingsDepositSumAggregateInputType = {
    sequence?: true;
    amountKobo?: true;
};
export type SavingsDepositMinAggregateInputType = {
    id?: true;
    goalId?: true;
    sequence?: true;
    amountKobo?: true;
    dueAt?: true;
    status?: true;
    paidAt?: true;
    createdAt?: true;
};
export type SavingsDepositMaxAggregateInputType = {
    id?: true;
    goalId?: true;
    sequence?: true;
    amountKobo?: true;
    dueAt?: true;
    status?: true;
    paidAt?: true;
    createdAt?: true;
};
export type SavingsDepositCountAggregateInputType = {
    id?: true;
    goalId?: true;
    sequence?: true;
    amountKobo?: true;
    dueAt?: true;
    status?: true;
    paidAt?: true;
    createdAt?: true;
    _all?: true;
};
export type SavingsDepositAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavingsDepositWhereInput;
    orderBy?: Prisma.SavingsDepositOrderByWithRelationInput | Prisma.SavingsDepositOrderByWithRelationInput[];
    cursor?: Prisma.SavingsDepositWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SavingsDepositCountAggregateInputType;
    _avg?: SavingsDepositAvgAggregateInputType;
    _sum?: SavingsDepositSumAggregateInputType;
    _min?: SavingsDepositMinAggregateInputType;
    _max?: SavingsDepositMaxAggregateInputType;
};
export type GetSavingsDepositAggregateType<T extends SavingsDepositAggregateArgs> = {
    [P in keyof T & keyof AggregateSavingsDeposit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSavingsDeposit[P]> : Prisma.GetScalarType<T[P], AggregateSavingsDeposit[P]>;
};
export type SavingsDepositGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavingsDepositWhereInput;
    orderBy?: Prisma.SavingsDepositOrderByWithAggregationInput | Prisma.SavingsDepositOrderByWithAggregationInput[];
    by: Prisma.SavingsDepositScalarFieldEnum[] | Prisma.SavingsDepositScalarFieldEnum;
    having?: Prisma.SavingsDepositScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SavingsDepositCountAggregateInputType | true;
    _avg?: SavingsDepositAvgAggregateInputType;
    _sum?: SavingsDepositSumAggregateInputType;
    _min?: SavingsDepositMinAggregateInputType;
    _max?: SavingsDepositMaxAggregateInputType;
};
export type SavingsDepositGroupByOutputType = {
    id: string;
    goalId: string;
    sequence: number;
    amountKobo: number;
    dueAt: Date;
    status: $Enums.InstallmentStatus;
    paidAt: Date | null;
    createdAt: Date;
    _count: SavingsDepositCountAggregateOutputType | null;
    _avg: SavingsDepositAvgAggregateOutputType | null;
    _sum: SavingsDepositSumAggregateOutputType | null;
    _min: SavingsDepositMinAggregateOutputType | null;
    _max: SavingsDepositMaxAggregateOutputType | null;
};
export type GetSavingsDepositGroupByPayload<T extends SavingsDepositGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SavingsDepositGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SavingsDepositGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SavingsDepositGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SavingsDepositGroupByOutputType[P]>;
}>>;
export type SavingsDepositWhereInput = {
    AND?: Prisma.SavingsDepositWhereInput | Prisma.SavingsDepositWhereInput[];
    OR?: Prisma.SavingsDepositWhereInput[];
    NOT?: Prisma.SavingsDepositWhereInput | Prisma.SavingsDepositWhereInput[];
    id?: Prisma.StringFilter<"SavingsDeposit"> | string;
    goalId?: Prisma.StringFilter<"SavingsDeposit"> | string;
    sequence?: Prisma.IntFilter<"SavingsDeposit"> | number;
    amountKobo?: Prisma.IntFilter<"SavingsDeposit"> | number;
    dueAt?: Prisma.DateTimeFilter<"SavingsDeposit"> | Date | string;
    status?: Prisma.EnumInstallmentStatusFilter<"SavingsDeposit"> | $Enums.InstallmentStatus;
    paidAt?: Prisma.DateTimeNullableFilter<"SavingsDeposit"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SavingsDeposit"> | Date | string;
    goal?: Prisma.XOR<Prisma.SavingsGoalScalarRelationFilter, Prisma.SavingsGoalWhereInput>;
    payments?: Prisma.PaymentListRelationFilter;
};
export type SavingsDepositOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    goalId?: Prisma.SortOrder;
    sequence?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    goal?: Prisma.SavingsGoalOrderByWithRelationInput;
    payments?: Prisma.PaymentOrderByRelationAggregateInput;
};
export type SavingsDepositWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    goalId_sequence?: Prisma.SavingsDepositGoalIdSequenceCompoundUniqueInput;
    AND?: Prisma.SavingsDepositWhereInput | Prisma.SavingsDepositWhereInput[];
    OR?: Prisma.SavingsDepositWhereInput[];
    NOT?: Prisma.SavingsDepositWhereInput | Prisma.SavingsDepositWhereInput[];
    goalId?: Prisma.StringFilter<"SavingsDeposit"> | string;
    sequence?: Prisma.IntFilter<"SavingsDeposit"> | number;
    amountKobo?: Prisma.IntFilter<"SavingsDeposit"> | number;
    dueAt?: Prisma.DateTimeFilter<"SavingsDeposit"> | Date | string;
    status?: Prisma.EnumInstallmentStatusFilter<"SavingsDeposit"> | $Enums.InstallmentStatus;
    paidAt?: Prisma.DateTimeNullableFilter<"SavingsDeposit"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SavingsDeposit"> | Date | string;
    goal?: Prisma.XOR<Prisma.SavingsGoalScalarRelationFilter, Prisma.SavingsGoalWhereInput>;
    payments?: Prisma.PaymentListRelationFilter;
}, "id" | "goalId_sequence">;
export type SavingsDepositOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    goalId?: Prisma.SortOrder;
    sequence?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SavingsDepositCountOrderByAggregateInput;
    _avg?: Prisma.SavingsDepositAvgOrderByAggregateInput;
    _max?: Prisma.SavingsDepositMaxOrderByAggregateInput;
    _min?: Prisma.SavingsDepositMinOrderByAggregateInput;
    _sum?: Prisma.SavingsDepositSumOrderByAggregateInput;
};
export type SavingsDepositScalarWhereWithAggregatesInput = {
    AND?: Prisma.SavingsDepositScalarWhereWithAggregatesInput | Prisma.SavingsDepositScalarWhereWithAggregatesInput[];
    OR?: Prisma.SavingsDepositScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SavingsDepositScalarWhereWithAggregatesInput | Prisma.SavingsDepositScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SavingsDeposit"> | string;
    goalId?: Prisma.StringWithAggregatesFilter<"SavingsDeposit"> | string;
    sequence?: Prisma.IntWithAggregatesFilter<"SavingsDeposit"> | number;
    amountKobo?: Prisma.IntWithAggregatesFilter<"SavingsDeposit"> | number;
    dueAt?: Prisma.DateTimeWithAggregatesFilter<"SavingsDeposit"> | Date | string;
    status?: Prisma.EnumInstallmentStatusWithAggregatesFilter<"SavingsDeposit"> | $Enums.InstallmentStatus;
    paidAt?: Prisma.DateTimeNullableWithAggregatesFilter<"SavingsDeposit"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SavingsDeposit"> | Date | string;
};
export type SavingsDepositCreateInput = {
    id?: string;
    sequence: number;
    amountKobo: number;
    dueAt: Date | string;
    status?: $Enums.InstallmentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    goal: Prisma.SavingsGoalCreateNestedOneWithoutDepositInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutSavingsDepositInput;
};
export type SavingsDepositUncheckedCreateInput = {
    id?: string;
    goalId: string;
    sequence: number;
    amountKobo: number;
    dueAt: Date | string;
    status?: $Enums.InstallmentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutSavingsDepositInput;
};
export type SavingsDepositUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    goal?: Prisma.SavingsGoalUpdateOneRequiredWithoutDepositNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutSavingsDepositNestedInput;
};
export type SavingsDepositUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    goalId?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutSavingsDepositNestedInput;
};
export type SavingsDepositCreateManyInput = {
    id?: string;
    goalId: string;
    sequence: number;
    amountKobo: number;
    dueAt: Date | string;
    status?: $Enums.InstallmentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
};
export type SavingsDepositUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavingsDepositUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    goalId?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavingsDepositNullableScalarRelationFilter = {
    is?: Prisma.SavingsDepositWhereInput | null;
    isNot?: Prisma.SavingsDepositWhereInput | null;
};
export type SavingsDepositListRelationFilter = {
    every?: Prisma.SavingsDepositWhereInput;
    some?: Prisma.SavingsDepositWhereInput;
    none?: Prisma.SavingsDepositWhereInput;
};
export type SavingsDepositOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SavingsDepositGoalIdSequenceCompoundUniqueInput = {
    goalId: string;
    sequence: number;
};
export type SavingsDepositCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    goalId?: Prisma.SortOrder;
    sequence?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SavingsDepositAvgOrderByAggregateInput = {
    sequence?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
};
export type SavingsDepositMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    goalId?: Prisma.SortOrder;
    sequence?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SavingsDepositMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    goalId?: Prisma.SortOrder;
    sequence?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SavingsDepositSumOrderByAggregateInput = {
    sequence?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
};
export type SavingsDepositCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.SavingsDepositCreateWithoutPaymentsInput, Prisma.SavingsDepositUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.SavingsDepositCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.SavingsDepositWhereUniqueInput;
};
export type SavingsDepositUpdateOneWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.SavingsDepositCreateWithoutPaymentsInput, Prisma.SavingsDepositUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.SavingsDepositCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.SavingsDepositUpsertWithoutPaymentsInput;
    disconnect?: Prisma.SavingsDepositWhereInput | boolean;
    delete?: Prisma.SavingsDepositWhereInput | boolean;
    connect?: Prisma.SavingsDepositWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SavingsDepositUpdateToOneWithWhereWithoutPaymentsInput, Prisma.SavingsDepositUpdateWithoutPaymentsInput>, Prisma.SavingsDepositUncheckedUpdateWithoutPaymentsInput>;
};
export type SavingsDepositCreateNestedManyWithoutGoalInput = {
    create?: Prisma.XOR<Prisma.SavingsDepositCreateWithoutGoalInput, Prisma.SavingsDepositUncheckedCreateWithoutGoalInput> | Prisma.SavingsDepositCreateWithoutGoalInput[] | Prisma.SavingsDepositUncheckedCreateWithoutGoalInput[];
    connectOrCreate?: Prisma.SavingsDepositCreateOrConnectWithoutGoalInput | Prisma.SavingsDepositCreateOrConnectWithoutGoalInput[];
    createMany?: Prisma.SavingsDepositCreateManyGoalInputEnvelope;
    connect?: Prisma.SavingsDepositWhereUniqueInput | Prisma.SavingsDepositWhereUniqueInput[];
};
export type SavingsDepositUncheckedCreateNestedManyWithoutGoalInput = {
    create?: Prisma.XOR<Prisma.SavingsDepositCreateWithoutGoalInput, Prisma.SavingsDepositUncheckedCreateWithoutGoalInput> | Prisma.SavingsDepositCreateWithoutGoalInput[] | Prisma.SavingsDepositUncheckedCreateWithoutGoalInput[];
    connectOrCreate?: Prisma.SavingsDepositCreateOrConnectWithoutGoalInput | Prisma.SavingsDepositCreateOrConnectWithoutGoalInput[];
    createMany?: Prisma.SavingsDepositCreateManyGoalInputEnvelope;
    connect?: Prisma.SavingsDepositWhereUniqueInput | Prisma.SavingsDepositWhereUniqueInput[];
};
export type SavingsDepositUpdateManyWithoutGoalNestedInput = {
    create?: Prisma.XOR<Prisma.SavingsDepositCreateWithoutGoalInput, Prisma.SavingsDepositUncheckedCreateWithoutGoalInput> | Prisma.SavingsDepositCreateWithoutGoalInput[] | Prisma.SavingsDepositUncheckedCreateWithoutGoalInput[];
    connectOrCreate?: Prisma.SavingsDepositCreateOrConnectWithoutGoalInput | Prisma.SavingsDepositCreateOrConnectWithoutGoalInput[];
    upsert?: Prisma.SavingsDepositUpsertWithWhereUniqueWithoutGoalInput | Prisma.SavingsDepositUpsertWithWhereUniqueWithoutGoalInput[];
    createMany?: Prisma.SavingsDepositCreateManyGoalInputEnvelope;
    set?: Prisma.SavingsDepositWhereUniqueInput | Prisma.SavingsDepositWhereUniqueInput[];
    disconnect?: Prisma.SavingsDepositWhereUniqueInput | Prisma.SavingsDepositWhereUniqueInput[];
    delete?: Prisma.SavingsDepositWhereUniqueInput | Prisma.SavingsDepositWhereUniqueInput[];
    connect?: Prisma.SavingsDepositWhereUniqueInput | Prisma.SavingsDepositWhereUniqueInput[];
    update?: Prisma.SavingsDepositUpdateWithWhereUniqueWithoutGoalInput | Prisma.SavingsDepositUpdateWithWhereUniqueWithoutGoalInput[];
    updateMany?: Prisma.SavingsDepositUpdateManyWithWhereWithoutGoalInput | Prisma.SavingsDepositUpdateManyWithWhereWithoutGoalInput[];
    deleteMany?: Prisma.SavingsDepositScalarWhereInput | Prisma.SavingsDepositScalarWhereInput[];
};
export type SavingsDepositUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: Prisma.XOR<Prisma.SavingsDepositCreateWithoutGoalInput, Prisma.SavingsDepositUncheckedCreateWithoutGoalInput> | Prisma.SavingsDepositCreateWithoutGoalInput[] | Prisma.SavingsDepositUncheckedCreateWithoutGoalInput[];
    connectOrCreate?: Prisma.SavingsDepositCreateOrConnectWithoutGoalInput | Prisma.SavingsDepositCreateOrConnectWithoutGoalInput[];
    upsert?: Prisma.SavingsDepositUpsertWithWhereUniqueWithoutGoalInput | Prisma.SavingsDepositUpsertWithWhereUniqueWithoutGoalInput[];
    createMany?: Prisma.SavingsDepositCreateManyGoalInputEnvelope;
    set?: Prisma.SavingsDepositWhereUniqueInput | Prisma.SavingsDepositWhereUniqueInput[];
    disconnect?: Prisma.SavingsDepositWhereUniqueInput | Prisma.SavingsDepositWhereUniqueInput[];
    delete?: Prisma.SavingsDepositWhereUniqueInput | Prisma.SavingsDepositWhereUniqueInput[];
    connect?: Prisma.SavingsDepositWhereUniqueInput | Prisma.SavingsDepositWhereUniqueInput[];
    update?: Prisma.SavingsDepositUpdateWithWhereUniqueWithoutGoalInput | Prisma.SavingsDepositUpdateWithWhereUniqueWithoutGoalInput[];
    updateMany?: Prisma.SavingsDepositUpdateManyWithWhereWithoutGoalInput | Prisma.SavingsDepositUpdateManyWithWhereWithoutGoalInput[];
    deleteMany?: Prisma.SavingsDepositScalarWhereInput | Prisma.SavingsDepositScalarWhereInput[];
};
export type SavingsDepositCreateWithoutPaymentsInput = {
    id?: string;
    sequence: number;
    amountKobo: number;
    dueAt: Date | string;
    status?: $Enums.InstallmentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    goal: Prisma.SavingsGoalCreateNestedOneWithoutDepositInput;
};
export type SavingsDepositUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    goalId: string;
    sequence: number;
    amountKobo: number;
    dueAt: Date | string;
    status?: $Enums.InstallmentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
};
export type SavingsDepositCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.SavingsDepositWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavingsDepositCreateWithoutPaymentsInput, Prisma.SavingsDepositUncheckedCreateWithoutPaymentsInput>;
};
export type SavingsDepositUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.SavingsDepositUpdateWithoutPaymentsInput, Prisma.SavingsDepositUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.SavingsDepositCreateWithoutPaymentsInput, Prisma.SavingsDepositUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.SavingsDepositWhereInput;
};
export type SavingsDepositUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.SavingsDepositWhereInput;
    data: Prisma.XOR<Prisma.SavingsDepositUpdateWithoutPaymentsInput, Prisma.SavingsDepositUncheckedUpdateWithoutPaymentsInput>;
};
export type SavingsDepositUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    goal?: Prisma.SavingsGoalUpdateOneRequiredWithoutDepositNestedInput;
};
export type SavingsDepositUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    goalId?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavingsDepositCreateWithoutGoalInput = {
    id?: string;
    sequence: number;
    amountKobo: number;
    dueAt: Date | string;
    status?: $Enums.InstallmentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    payments?: Prisma.PaymentCreateNestedManyWithoutSavingsDepositInput;
};
export type SavingsDepositUncheckedCreateWithoutGoalInput = {
    id?: string;
    sequence: number;
    amountKobo: number;
    dueAt: Date | string;
    status?: $Enums.InstallmentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutSavingsDepositInput;
};
export type SavingsDepositCreateOrConnectWithoutGoalInput = {
    where: Prisma.SavingsDepositWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavingsDepositCreateWithoutGoalInput, Prisma.SavingsDepositUncheckedCreateWithoutGoalInput>;
};
export type SavingsDepositCreateManyGoalInputEnvelope = {
    data: Prisma.SavingsDepositCreateManyGoalInput | Prisma.SavingsDepositCreateManyGoalInput[];
    skipDuplicates?: boolean;
};
export type SavingsDepositUpsertWithWhereUniqueWithoutGoalInput = {
    where: Prisma.SavingsDepositWhereUniqueInput;
    update: Prisma.XOR<Prisma.SavingsDepositUpdateWithoutGoalInput, Prisma.SavingsDepositUncheckedUpdateWithoutGoalInput>;
    create: Prisma.XOR<Prisma.SavingsDepositCreateWithoutGoalInput, Prisma.SavingsDepositUncheckedCreateWithoutGoalInput>;
};
export type SavingsDepositUpdateWithWhereUniqueWithoutGoalInput = {
    where: Prisma.SavingsDepositWhereUniqueInput;
    data: Prisma.XOR<Prisma.SavingsDepositUpdateWithoutGoalInput, Prisma.SavingsDepositUncheckedUpdateWithoutGoalInput>;
};
export type SavingsDepositUpdateManyWithWhereWithoutGoalInput = {
    where: Prisma.SavingsDepositScalarWhereInput;
    data: Prisma.XOR<Prisma.SavingsDepositUpdateManyMutationInput, Prisma.SavingsDepositUncheckedUpdateManyWithoutGoalInput>;
};
export type SavingsDepositScalarWhereInput = {
    AND?: Prisma.SavingsDepositScalarWhereInput | Prisma.SavingsDepositScalarWhereInput[];
    OR?: Prisma.SavingsDepositScalarWhereInput[];
    NOT?: Prisma.SavingsDepositScalarWhereInput | Prisma.SavingsDepositScalarWhereInput[];
    id?: Prisma.StringFilter<"SavingsDeposit"> | string;
    goalId?: Prisma.StringFilter<"SavingsDeposit"> | string;
    sequence?: Prisma.IntFilter<"SavingsDeposit"> | number;
    amountKobo?: Prisma.IntFilter<"SavingsDeposit"> | number;
    dueAt?: Prisma.DateTimeFilter<"SavingsDeposit"> | Date | string;
    status?: Prisma.EnumInstallmentStatusFilter<"SavingsDeposit"> | $Enums.InstallmentStatus;
    paidAt?: Prisma.DateTimeNullableFilter<"SavingsDeposit"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SavingsDeposit"> | Date | string;
};
export type SavingsDepositCreateManyGoalInput = {
    id?: string;
    sequence: number;
    amountKobo: number;
    dueAt: Date | string;
    status?: $Enums.InstallmentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
};
export type SavingsDepositUpdateWithoutGoalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.PaymentUpdateManyWithoutSavingsDepositNestedInput;
};
export type SavingsDepositUncheckedUpdateWithoutGoalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutSavingsDepositNestedInput;
};
export type SavingsDepositUncheckedUpdateManyWithoutGoalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavingsDepositCountOutputType = {
    payments: number;
};
export type SavingsDepositCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payments?: boolean | SavingsDepositCountOutputTypeCountPaymentsArgs;
};
export type SavingsDepositCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsDepositCountOutputTypeSelect<ExtArgs> | null;
};
export type SavingsDepositCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
};
export type SavingsDepositSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    goalId?: boolean;
    sequence?: boolean;
    amountKobo?: boolean;
    dueAt?: boolean;
    status?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    goal?: boolean | Prisma.SavingsGoalDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.SavingsDeposit$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.SavingsDepositCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savingsDeposit"]>;
export type SavingsDepositSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    goalId?: boolean;
    sequence?: boolean;
    amountKobo?: boolean;
    dueAt?: boolean;
    status?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    goal?: boolean | Prisma.SavingsGoalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savingsDeposit"]>;
export type SavingsDepositSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    goalId?: boolean;
    sequence?: boolean;
    amountKobo?: boolean;
    dueAt?: boolean;
    status?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    goal?: boolean | Prisma.SavingsGoalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savingsDeposit"]>;
export type SavingsDepositSelectScalar = {
    id?: boolean;
    goalId?: boolean;
    sequence?: boolean;
    amountKobo?: boolean;
    dueAt?: boolean;
    status?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
};
export type SavingsDepositOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "goalId" | "sequence" | "amountKobo" | "dueAt" | "status" | "paidAt" | "createdAt", ExtArgs["result"]["savingsDeposit"]>;
export type SavingsDepositInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    goal?: boolean | Prisma.SavingsGoalDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.SavingsDeposit$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.SavingsDepositCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SavingsDepositIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    goal?: boolean | Prisma.SavingsGoalDefaultArgs<ExtArgs>;
};
export type SavingsDepositIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    goal?: boolean | Prisma.SavingsGoalDefaultArgs<ExtArgs>;
};
export type $SavingsDepositPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SavingsDeposit";
    objects: {
        goal: Prisma.$SavingsGoalPayload<ExtArgs>;
        payments: Prisma.$PaymentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        goalId: string;
        sequence: number;
        amountKobo: number;
        dueAt: Date;
        status: $Enums.InstallmentStatus;
        paidAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["savingsDeposit"]>;
    composites: {};
};
export type SavingsDepositGetPayload<S extends boolean | null | undefined | SavingsDepositDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SavingsDepositPayload, S>;
export type SavingsDepositCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SavingsDepositFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SavingsDepositCountAggregateInputType | true;
};
export interface SavingsDepositDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SavingsDeposit'];
        meta: {
            name: 'SavingsDeposit';
        };
    };
    findUnique<T extends SavingsDepositFindUniqueArgs>(args: Prisma.SelectSubset<T, SavingsDepositFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SavingsDepositClient<runtime.Types.Result.GetResult<Prisma.$SavingsDepositPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SavingsDepositFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SavingsDepositFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SavingsDepositClient<runtime.Types.Result.GetResult<Prisma.$SavingsDepositPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SavingsDepositFindFirstArgs>(args?: Prisma.SelectSubset<T, SavingsDepositFindFirstArgs<ExtArgs>>): Prisma.Prisma__SavingsDepositClient<runtime.Types.Result.GetResult<Prisma.$SavingsDepositPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SavingsDepositFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SavingsDepositFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SavingsDepositClient<runtime.Types.Result.GetResult<Prisma.$SavingsDepositPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SavingsDepositFindManyArgs>(args?: Prisma.SelectSubset<T, SavingsDepositFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavingsDepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SavingsDepositCreateArgs>(args: Prisma.SelectSubset<T, SavingsDepositCreateArgs<ExtArgs>>): Prisma.Prisma__SavingsDepositClient<runtime.Types.Result.GetResult<Prisma.$SavingsDepositPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SavingsDepositCreateManyArgs>(args?: Prisma.SelectSubset<T, SavingsDepositCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SavingsDepositCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SavingsDepositCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavingsDepositPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SavingsDepositDeleteArgs>(args: Prisma.SelectSubset<T, SavingsDepositDeleteArgs<ExtArgs>>): Prisma.Prisma__SavingsDepositClient<runtime.Types.Result.GetResult<Prisma.$SavingsDepositPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SavingsDepositUpdateArgs>(args: Prisma.SelectSubset<T, SavingsDepositUpdateArgs<ExtArgs>>): Prisma.Prisma__SavingsDepositClient<runtime.Types.Result.GetResult<Prisma.$SavingsDepositPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SavingsDepositDeleteManyArgs>(args?: Prisma.SelectSubset<T, SavingsDepositDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SavingsDepositUpdateManyArgs>(args: Prisma.SelectSubset<T, SavingsDepositUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SavingsDepositUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SavingsDepositUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavingsDepositPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SavingsDepositUpsertArgs>(args: Prisma.SelectSubset<T, SavingsDepositUpsertArgs<ExtArgs>>): Prisma.Prisma__SavingsDepositClient<runtime.Types.Result.GetResult<Prisma.$SavingsDepositPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SavingsDepositCountArgs>(args?: Prisma.Subset<T, SavingsDepositCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SavingsDepositCountAggregateOutputType> : number>;
    aggregate<T extends SavingsDepositAggregateArgs>(args: Prisma.Subset<T, SavingsDepositAggregateArgs>): Prisma.PrismaPromise<GetSavingsDepositAggregateType<T>>;
    groupBy<T extends SavingsDepositGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SavingsDepositGroupByArgs['orderBy'];
    } : {
        orderBy?: SavingsDepositGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SavingsDepositGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavingsDepositGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SavingsDepositFieldRefs;
}
export interface Prisma__SavingsDepositClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    goal<T extends Prisma.SavingsGoalDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SavingsGoalDefaultArgs<ExtArgs>>): Prisma.Prisma__SavingsGoalClient<runtime.Types.Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    payments<T extends Prisma.SavingsDeposit$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SavingsDeposit$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SavingsDepositFieldRefs {
    readonly id: Prisma.FieldRef<"SavingsDeposit", 'String'>;
    readonly goalId: Prisma.FieldRef<"SavingsDeposit", 'String'>;
    readonly sequence: Prisma.FieldRef<"SavingsDeposit", 'Int'>;
    readonly amountKobo: Prisma.FieldRef<"SavingsDeposit", 'Int'>;
    readonly dueAt: Prisma.FieldRef<"SavingsDeposit", 'DateTime'>;
    readonly status: Prisma.FieldRef<"SavingsDeposit", 'InstallmentStatus'>;
    readonly paidAt: Prisma.FieldRef<"SavingsDeposit", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"SavingsDeposit", 'DateTime'>;
}
export type SavingsDepositFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsDepositSelect<ExtArgs> | null;
    omit?: Prisma.SavingsDepositOmit<ExtArgs> | null;
    include?: Prisma.SavingsDepositInclude<ExtArgs> | null;
    where: Prisma.SavingsDepositWhereUniqueInput;
};
export type SavingsDepositFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsDepositSelect<ExtArgs> | null;
    omit?: Prisma.SavingsDepositOmit<ExtArgs> | null;
    include?: Prisma.SavingsDepositInclude<ExtArgs> | null;
    where: Prisma.SavingsDepositWhereUniqueInput;
};
export type SavingsDepositFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SavingsDepositFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SavingsDepositFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SavingsDepositCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsDepositSelect<ExtArgs> | null;
    omit?: Prisma.SavingsDepositOmit<ExtArgs> | null;
    include?: Prisma.SavingsDepositInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SavingsDepositCreateInput, Prisma.SavingsDepositUncheckedCreateInput>;
};
export type SavingsDepositCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SavingsDepositCreateManyInput | Prisma.SavingsDepositCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SavingsDepositCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsDepositSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SavingsDepositOmit<ExtArgs> | null;
    data: Prisma.SavingsDepositCreateManyInput | Prisma.SavingsDepositCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SavingsDepositIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SavingsDepositUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsDepositSelect<ExtArgs> | null;
    omit?: Prisma.SavingsDepositOmit<ExtArgs> | null;
    include?: Prisma.SavingsDepositInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SavingsDepositUpdateInput, Prisma.SavingsDepositUncheckedUpdateInput>;
    where: Prisma.SavingsDepositWhereUniqueInput;
};
export type SavingsDepositUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SavingsDepositUpdateManyMutationInput, Prisma.SavingsDepositUncheckedUpdateManyInput>;
    where?: Prisma.SavingsDepositWhereInput;
    limit?: number;
};
export type SavingsDepositUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsDepositSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SavingsDepositOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SavingsDepositUpdateManyMutationInput, Prisma.SavingsDepositUncheckedUpdateManyInput>;
    where?: Prisma.SavingsDepositWhereInput;
    limit?: number;
    include?: Prisma.SavingsDepositIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SavingsDepositUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsDepositSelect<ExtArgs> | null;
    omit?: Prisma.SavingsDepositOmit<ExtArgs> | null;
    include?: Prisma.SavingsDepositInclude<ExtArgs> | null;
    where: Prisma.SavingsDepositWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavingsDepositCreateInput, Prisma.SavingsDepositUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SavingsDepositUpdateInput, Prisma.SavingsDepositUncheckedUpdateInput>;
};
export type SavingsDepositDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsDepositSelect<ExtArgs> | null;
    omit?: Prisma.SavingsDepositOmit<ExtArgs> | null;
    include?: Prisma.SavingsDepositInclude<ExtArgs> | null;
    where: Prisma.SavingsDepositWhereUniqueInput;
};
export type SavingsDepositDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavingsDepositWhereInput;
    limit?: number;
};
export type SavingsDeposit$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
export type SavingsDepositDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavingsDepositSelect<ExtArgs> | null;
    omit?: Prisma.SavingsDepositOmit<ExtArgs> | null;
    include?: Prisma.SavingsDepositInclude<ExtArgs> | null;
};
