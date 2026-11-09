import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InstallmentModel = runtime.Types.Result.DefaultSelection<Prisma.$InstallmentPayload>;
export type AggregateInstallment = {
    _count: InstallmentCountAggregateOutputType | null;
    _avg: InstallmentAvgAggregateOutputType | null;
    _sum: InstallmentSumAggregateOutputType | null;
    _min: InstallmentMinAggregateOutputType | null;
    _max: InstallmentMaxAggregateOutputType | null;
};
export type InstallmentAvgAggregateOutputType = {
    sequence: number | null;
    amountKobo: number | null;
    lateFeeKobo: number | null;
};
export type InstallmentSumAggregateOutputType = {
    sequence: number | null;
    amountKobo: number | null;
    lateFeeKobo: number | null;
};
export type InstallmentMinAggregateOutputType = {
    id: string | null;
    cycleId: string | null;
    membershipId: string | null;
    sequence: number | null;
    amountKobo: number | null;
    lateFeeKobo: number | null;
    dueAt: Date | null;
    status: $Enums.InstallmentStatus | null;
    paidAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type InstallmentMaxAggregateOutputType = {
    id: string | null;
    cycleId: string | null;
    membershipId: string | null;
    sequence: number | null;
    amountKobo: number | null;
    lateFeeKobo: number | null;
    dueAt: Date | null;
    status: $Enums.InstallmentStatus | null;
    paidAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type InstallmentCountAggregateOutputType = {
    id: number;
    cycleId: number;
    membershipId: number;
    sequence: number;
    amountKobo: number;
    lateFeeKobo: number;
    dueAt: number;
    status: number;
    paidAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type InstallmentAvgAggregateInputType = {
    sequence?: true;
    amountKobo?: true;
    lateFeeKobo?: true;
};
export type InstallmentSumAggregateInputType = {
    sequence?: true;
    amountKobo?: true;
    lateFeeKobo?: true;
};
export type InstallmentMinAggregateInputType = {
    id?: true;
    cycleId?: true;
    membershipId?: true;
    sequence?: true;
    amountKobo?: true;
    lateFeeKobo?: true;
    dueAt?: true;
    status?: true;
    paidAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type InstallmentMaxAggregateInputType = {
    id?: true;
    cycleId?: true;
    membershipId?: true;
    sequence?: true;
    amountKobo?: true;
    lateFeeKobo?: true;
    dueAt?: true;
    status?: true;
    paidAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type InstallmentCountAggregateInputType = {
    id?: true;
    cycleId?: true;
    membershipId?: true;
    sequence?: true;
    amountKobo?: true;
    lateFeeKobo?: true;
    dueAt?: true;
    status?: true;
    paidAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type InstallmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InstallmentWhereInput;
    orderBy?: Prisma.InstallmentOrderByWithRelationInput | Prisma.InstallmentOrderByWithRelationInput[];
    cursor?: Prisma.InstallmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InstallmentCountAggregateInputType;
    _avg?: InstallmentAvgAggregateInputType;
    _sum?: InstallmentSumAggregateInputType;
    _min?: InstallmentMinAggregateInputType;
    _max?: InstallmentMaxAggregateInputType;
};
export type GetInstallmentAggregateType<T extends InstallmentAggregateArgs> = {
    [P in keyof T & keyof AggregateInstallment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInstallment[P]> : Prisma.GetScalarType<T[P], AggregateInstallment[P]>;
};
export type InstallmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InstallmentWhereInput;
    orderBy?: Prisma.InstallmentOrderByWithAggregationInput | Prisma.InstallmentOrderByWithAggregationInput[];
    by: Prisma.InstallmentScalarFieldEnum[] | Prisma.InstallmentScalarFieldEnum;
    having?: Prisma.InstallmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InstallmentCountAggregateInputType | true;
    _avg?: InstallmentAvgAggregateInputType;
    _sum?: InstallmentSumAggregateInputType;
    _min?: InstallmentMinAggregateInputType;
    _max?: InstallmentMaxAggregateInputType;
};
export type InstallmentGroupByOutputType = {
    id: string;
    cycleId: string;
    membershipId: string;
    sequence: number;
    amountKobo: number;
    lateFeeKobo: number;
    dueAt: Date;
    status: $Enums.InstallmentStatus;
    paidAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: InstallmentCountAggregateOutputType | null;
    _avg: InstallmentAvgAggregateOutputType | null;
    _sum: InstallmentSumAggregateOutputType | null;
    _min: InstallmentMinAggregateOutputType | null;
    _max: InstallmentMaxAggregateOutputType | null;
};
export type GetInstallmentGroupByPayload<T extends InstallmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InstallmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InstallmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InstallmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InstallmentGroupByOutputType[P]>;
}>>;
export type InstallmentWhereInput = {
    AND?: Prisma.InstallmentWhereInput | Prisma.InstallmentWhereInput[];
    OR?: Prisma.InstallmentWhereInput[];
    NOT?: Prisma.InstallmentWhereInput | Prisma.InstallmentWhereInput[];
    id?: Prisma.StringFilter<"Installment"> | string;
    cycleId?: Prisma.StringFilter<"Installment"> | string;
    membershipId?: Prisma.StringFilter<"Installment"> | string;
    sequence?: Prisma.IntFilter<"Installment"> | number;
    amountKobo?: Prisma.IntFilter<"Installment"> | number;
    lateFeeKobo?: Prisma.IntFilter<"Installment"> | number;
    dueAt?: Prisma.DateTimeFilter<"Installment"> | Date | string;
    status?: Prisma.EnumInstallmentStatusFilter<"Installment"> | $Enums.InstallmentStatus;
    paidAt?: Prisma.DateTimeNullableFilter<"Installment"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Installment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Installment"> | Date | string;
    cycle?: Prisma.XOR<Prisma.CycleScalarRelationFilter, Prisma.CycleWhereInput>;
    membership?: Prisma.XOR<Prisma.MembershipScalarRelationFilter, Prisma.MembershipWhereInput>;
    payments?: Prisma.PaymentListRelationFilter;
};
export type InstallmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    membershipId?: Prisma.SortOrder;
    sequence?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    lateFeeKobo?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    cycle?: Prisma.CycleOrderByWithRelationInput;
    membership?: Prisma.MembershipOrderByWithRelationInput;
    payments?: Prisma.PaymentOrderByRelationAggregateInput;
};
export type InstallmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    cycleId_membershipId_sequence?: Prisma.InstallmentCycleIdMembershipIdSequenceCompoundUniqueInput;
    AND?: Prisma.InstallmentWhereInput | Prisma.InstallmentWhereInput[];
    OR?: Prisma.InstallmentWhereInput[];
    NOT?: Prisma.InstallmentWhereInput | Prisma.InstallmentWhereInput[];
    cycleId?: Prisma.StringFilter<"Installment"> | string;
    membershipId?: Prisma.StringFilter<"Installment"> | string;
    sequence?: Prisma.IntFilter<"Installment"> | number;
    amountKobo?: Prisma.IntFilter<"Installment"> | number;
    lateFeeKobo?: Prisma.IntFilter<"Installment"> | number;
    dueAt?: Prisma.DateTimeFilter<"Installment"> | Date | string;
    status?: Prisma.EnumInstallmentStatusFilter<"Installment"> | $Enums.InstallmentStatus;
    paidAt?: Prisma.DateTimeNullableFilter<"Installment"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Installment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Installment"> | Date | string;
    cycle?: Prisma.XOR<Prisma.CycleScalarRelationFilter, Prisma.CycleWhereInput>;
    membership?: Prisma.XOR<Prisma.MembershipScalarRelationFilter, Prisma.MembershipWhereInput>;
    payments?: Prisma.PaymentListRelationFilter;
}, "id" | "cycleId_membershipId_sequence">;
export type InstallmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    membershipId?: Prisma.SortOrder;
    sequence?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    lateFeeKobo?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.InstallmentCountOrderByAggregateInput;
    _avg?: Prisma.InstallmentAvgOrderByAggregateInput;
    _max?: Prisma.InstallmentMaxOrderByAggregateInput;
    _min?: Prisma.InstallmentMinOrderByAggregateInput;
    _sum?: Prisma.InstallmentSumOrderByAggregateInput;
};
export type InstallmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.InstallmentScalarWhereWithAggregatesInput | Prisma.InstallmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.InstallmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InstallmentScalarWhereWithAggregatesInput | Prisma.InstallmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Installment"> | string;
    cycleId?: Prisma.StringWithAggregatesFilter<"Installment"> | string;
    membershipId?: Prisma.StringWithAggregatesFilter<"Installment"> | string;
    sequence?: Prisma.IntWithAggregatesFilter<"Installment"> | number;
    amountKobo?: Prisma.IntWithAggregatesFilter<"Installment"> | number;
    lateFeeKobo?: Prisma.IntWithAggregatesFilter<"Installment"> | number;
    dueAt?: Prisma.DateTimeWithAggregatesFilter<"Installment"> | Date | string;
    status?: Prisma.EnumInstallmentStatusWithAggregatesFilter<"Installment"> | $Enums.InstallmentStatus;
    paidAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Installment"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Installment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Installment"> | Date | string;
};
export type InstallmentCreateInput = {
    id?: string;
    sequence: number;
    amountKobo: number;
    lateFeeKobo?: number;
    dueAt: Date | string;
    status?: $Enums.InstallmentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycle: Prisma.CycleCreateNestedOneWithoutInstallmentsInput;
    membership: Prisma.MembershipCreateNestedOneWithoutInstallmentsInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutInstallmentInput;
};
export type InstallmentUncheckedCreateInput = {
    id?: string;
    cycleId: string;
    membershipId: string;
    sequence: number;
    amountKobo: number;
    lateFeeKobo?: number;
    dueAt: Date | string;
    status?: $Enums.InstallmentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutInstallmentInput;
};
export type InstallmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    lateFeeKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycle?: Prisma.CycleUpdateOneRequiredWithoutInstallmentsNestedInput;
    membership?: Prisma.MembershipUpdateOneRequiredWithoutInstallmentsNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutInstallmentNestedInput;
};
export type InstallmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    membershipId?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    lateFeeKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutInstallmentNestedInput;
};
export type InstallmentCreateManyInput = {
    id?: string;
    cycleId: string;
    membershipId: string;
    sequence: number;
    amountKobo: number;
    lateFeeKobo?: number;
    dueAt: Date | string;
    status?: $Enums.InstallmentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InstallmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    lateFeeKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InstallmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    membershipId?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    lateFeeKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InstallmentListRelationFilter = {
    every?: Prisma.InstallmentWhereInput;
    some?: Prisma.InstallmentWhereInput;
    none?: Prisma.InstallmentWhereInput;
};
export type InstallmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InstallmentCycleIdMembershipIdSequenceCompoundUniqueInput = {
    cycleId: string;
    membershipId: string;
    sequence: number;
};
export type InstallmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    membershipId?: Prisma.SortOrder;
    sequence?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    lateFeeKobo?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InstallmentAvgOrderByAggregateInput = {
    sequence?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    lateFeeKobo?: Prisma.SortOrder;
};
export type InstallmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    membershipId?: Prisma.SortOrder;
    sequence?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    lateFeeKobo?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InstallmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    membershipId?: Prisma.SortOrder;
    sequence?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    lateFeeKobo?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InstallmentSumOrderByAggregateInput = {
    sequence?: Prisma.SortOrder;
    amountKobo?: Prisma.SortOrder;
    lateFeeKobo?: Prisma.SortOrder;
};
export type InstallmentNullableScalarRelationFilter = {
    is?: Prisma.InstallmentWhereInput | null;
    isNot?: Prisma.InstallmentWhereInput | null;
};
export type InstallmentCreateNestedManyWithoutMembershipInput = {
    create?: Prisma.XOR<Prisma.InstallmentCreateWithoutMembershipInput, Prisma.InstallmentUncheckedCreateWithoutMembershipInput> | Prisma.InstallmentCreateWithoutMembershipInput[] | Prisma.InstallmentUncheckedCreateWithoutMembershipInput[];
    connectOrCreate?: Prisma.InstallmentCreateOrConnectWithoutMembershipInput | Prisma.InstallmentCreateOrConnectWithoutMembershipInput[];
    createMany?: Prisma.InstallmentCreateManyMembershipInputEnvelope;
    connect?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
};
export type InstallmentUncheckedCreateNestedManyWithoutMembershipInput = {
    create?: Prisma.XOR<Prisma.InstallmentCreateWithoutMembershipInput, Prisma.InstallmentUncheckedCreateWithoutMembershipInput> | Prisma.InstallmentCreateWithoutMembershipInput[] | Prisma.InstallmentUncheckedCreateWithoutMembershipInput[];
    connectOrCreate?: Prisma.InstallmentCreateOrConnectWithoutMembershipInput | Prisma.InstallmentCreateOrConnectWithoutMembershipInput[];
    createMany?: Prisma.InstallmentCreateManyMembershipInputEnvelope;
    connect?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
};
export type InstallmentUpdateManyWithoutMembershipNestedInput = {
    create?: Prisma.XOR<Prisma.InstallmentCreateWithoutMembershipInput, Prisma.InstallmentUncheckedCreateWithoutMembershipInput> | Prisma.InstallmentCreateWithoutMembershipInput[] | Prisma.InstallmentUncheckedCreateWithoutMembershipInput[];
    connectOrCreate?: Prisma.InstallmentCreateOrConnectWithoutMembershipInput | Prisma.InstallmentCreateOrConnectWithoutMembershipInput[];
    upsert?: Prisma.InstallmentUpsertWithWhereUniqueWithoutMembershipInput | Prisma.InstallmentUpsertWithWhereUniqueWithoutMembershipInput[];
    createMany?: Prisma.InstallmentCreateManyMembershipInputEnvelope;
    set?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
    disconnect?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
    delete?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
    connect?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
    update?: Prisma.InstallmentUpdateWithWhereUniqueWithoutMembershipInput | Prisma.InstallmentUpdateWithWhereUniqueWithoutMembershipInput[];
    updateMany?: Prisma.InstallmentUpdateManyWithWhereWithoutMembershipInput | Prisma.InstallmentUpdateManyWithWhereWithoutMembershipInput[];
    deleteMany?: Prisma.InstallmentScalarWhereInput | Prisma.InstallmentScalarWhereInput[];
};
export type InstallmentUncheckedUpdateManyWithoutMembershipNestedInput = {
    create?: Prisma.XOR<Prisma.InstallmentCreateWithoutMembershipInput, Prisma.InstallmentUncheckedCreateWithoutMembershipInput> | Prisma.InstallmentCreateWithoutMembershipInput[] | Prisma.InstallmentUncheckedCreateWithoutMembershipInput[];
    connectOrCreate?: Prisma.InstallmentCreateOrConnectWithoutMembershipInput | Prisma.InstallmentCreateOrConnectWithoutMembershipInput[];
    upsert?: Prisma.InstallmentUpsertWithWhereUniqueWithoutMembershipInput | Prisma.InstallmentUpsertWithWhereUniqueWithoutMembershipInput[];
    createMany?: Prisma.InstallmentCreateManyMembershipInputEnvelope;
    set?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
    disconnect?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
    delete?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
    connect?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
    update?: Prisma.InstallmentUpdateWithWhereUniqueWithoutMembershipInput | Prisma.InstallmentUpdateWithWhereUniqueWithoutMembershipInput[];
    updateMany?: Prisma.InstallmentUpdateManyWithWhereWithoutMembershipInput | Prisma.InstallmentUpdateManyWithWhereWithoutMembershipInput[];
    deleteMany?: Prisma.InstallmentScalarWhereInput | Prisma.InstallmentScalarWhereInput[];
};
export type InstallmentCreateNestedManyWithoutCycleInput = {
    create?: Prisma.XOR<Prisma.InstallmentCreateWithoutCycleInput, Prisma.InstallmentUncheckedCreateWithoutCycleInput> | Prisma.InstallmentCreateWithoutCycleInput[] | Prisma.InstallmentUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.InstallmentCreateOrConnectWithoutCycleInput | Prisma.InstallmentCreateOrConnectWithoutCycleInput[];
    createMany?: Prisma.InstallmentCreateManyCycleInputEnvelope;
    connect?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
};
export type InstallmentUncheckedCreateNestedManyWithoutCycleInput = {
    create?: Prisma.XOR<Prisma.InstallmentCreateWithoutCycleInput, Prisma.InstallmentUncheckedCreateWithoutCycleInput> | Prisma.InstallmentCreateWithoutCycleInput[] | Prisma.InstallmentUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.InstallmentCreateOrConnectWithoutCycleInput | Prisma.InstallmentCreateOrConnectWithoutCycleInput[];
    createMany?: Prisma.InstallmentCreateManyCycleInputEnvelope;
    connect?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
};
export type InstallmentUpdateManyWithoutCycleNestedInput = {
    create?: Prisma.XOR<Prisma.InstallmentCreateWithoutCycleInput, Prisma.InstallmentUncheckedCreateWithoutCycleInput> | Prisma.InstallmentCreateWithoutCycleInput[] | Prisma.InstallmentUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.InstallmentCreateOrConnectWithoutCycleInput | Prisma.InstallmentCreateOrConnectWithoutCycleInput[];
    upsert?: Prisma.InstallmentUpsertWithWhereUniqueWithoutCycleInput | Prisma.InstallmentUpsertWithWhereUniqueWithoutCycleInput[];
    createMany?: Prisma.InstallmentCreateManyCycleInputEnvelope;
    set?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
    disconnect?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
    delete?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
    connect?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
    update?: Prisma.InstallmentUpdateWithWhereUniqueWithoutCycleInput | Prisma.InstallmentUpdateWithWhereUniqueWithoutCycleInput[];
    updateMany?: Prisma.InstallmentUpdateManyWithWhereWithoutCycleInput | Prisma.InstallmentUpdateManyWithWhereWithoutCycleInput[];
    deleteMany?: Prisma.InstallmentScalarWhereInput | Prisma.InstallmentScalarWhereInput[];
};
export type InstallmentUncheckedUpdateManyWithoutCycleNestedInput = {
    create?: Prisma.XOR<Prisma.InstallmentCreateWithoutCycleInput, Prisma.InstallmentUncheckedCreateWithoutCycleInput> | Prisma.InstallmentCreateWithoutCycleInput[] | Prisma.InstallmentUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.InstallmentCreateOrConnectWithoutCycleInput | Prisma.InstallmentCreateOrConnectWithoutCycleInput[];
    upsert?: Prisma.InstallmentUpsertWithWhereUniqueWithoutCycleInput | Prisma.InstallmentUpsertWithWhereUniqueWithoutCycleInput[];
    createMany?: Prisma.InstallmentCreateManyCycleInputEnvelope;
    set?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
    disconnect?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
    delete?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
    connect?: Prisma.InstallmentWhereUniqueInput | Prisma.InstallmentWhereUniqueInput[];
    update?: Prisma.InstallmentUpdateWithWhereUniqueWithoutCycleInput | Prisma.InstallmentUpdateWithWhereUniqueWithoutCycleInput[];
    updateMany?: Prisma.InstallmentUpdateManyWithWhereWithoutCycleInput | Prisma.InstallmentUpdateManyWithWhereWithoutCycleInput[];
    deleteMany?: Prisma.InstallmentScalarWhereInput | Prisma.InstallmentScalarWhereInput[];
};
export type EnumInstallmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.InstallmentStatus;
};
export type InstallmentCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.InstallmentCreateWithoutPaymentsInput, Prisma.InstallmentUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.InstallmentCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.InstallmentWhereUniqueInput;
};
export type InstallmentUpdateOneWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.InstallmentCreateWithoutPaymentsInput, Prisma.InstallmentUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.InstallmentCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.InstallmentUpsertWithoutPaymentsInput;
    disconnect?: Prisma.InstallmentWhereInput | boolean;
    delete?: Prisma.InstallmentWhereInput | boolean;
    connect?: Prisma.InstallmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InstallmentUpdateToOneWithWhereWithoutPaymentsInput, Prisma.InstallmentUpdateWithoutPaymentsInput>, Prisma.InstallmentUncheckedUpdateWithoutPaymentsInput>;
};
export type InstallmentCreateWithoutMembershipInput = {
    id?: string;
    sequence: number;
    amountKobo: number;
    lateFeeKobo?: number;
    dueAt: Date | string;
    status?: $Enums.InstallmentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycle: Prisma.CycleCreateNestedOneWithoutInstallmentsInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutInstallmentInput;
};
export type InstallmentUncheckedCreateWithoutMembershipInput = {
    id?: string;
    cycleId: string;
    sequence: number;
    amountKobo: number;
    lateFeeKobo?: number;
    dueAt: Date | string;
    status?: $Enums.InstallmentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutInstallmentInput;
};
export type InstallmentCreateOrConnectWithoutMembershipInput = {
    where: Prisma.InstallmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.InstallmentCreateWithoutMembershipInput, Prisma.InstallmentUncheckedCreateWithoutMembershipInput>;
};
export type InstallmentCreateManyMembershipInputEnvelope = {
    data: Prisma.InstallmentCreateManyMembershipInput | Prisma.InstallmentCreateManyMembershipInput[];
    skipDuplicates?: boolean;
};
export type InstallmentUpsertWithWhereUniqueWithoutMembershipInput = {
    where: Prisma.InstallmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.InstallmentUpdateWithoutMembershipInput, Prisma.InstallmentUncheckedUpdateWithoutMembershipInput>;
    create: Prisma.XOR<Prisma.InstallmentCreateWithoutMembershipInput, Prisma.InstallmentUncheckedCreateWithoutMembershipInput>;
};
export type InstallmentUpdateWithWhereUniqueWithoutMembershipInput = {
    where: Prisma.InstallmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.InstallmentUpdateWithoutMembershipInput, Prisma.InstallmentUncheckedUpdateWithoutMembershipInput>;
};
export type InstallmentUpdateManyWithWhereWithoutMembershipInput = {
    where: Prisma.InstallmentScalarWhereInput;
    data: Prisma.XOR<Prisma.InstallmentUpdateManyMutationInput, Prisma.InstallmentUncheckedUpdateManyWithoutMembershipInput>;
};
export type InstallmentScalarWhereInput = {
    AND?: Prisma.InstallmentScalarWhereInput | Prisma.InstallmentScalarWhereInput[];
    OR?: Prisma.InstallmentScalarWhereInput[];
    NOT?: Prisma.InstallmentScalarWhereInput | Prisma.InstallmentScalarWhereInput[];
    id?: Prisma.StringFilter<"Installment"> | string;
    cycleId?: Prisma.StringFilter<"Installment"> | string;
    membershipId?: Prisma.StringFilter<"Installment"> | string;
    sequence?: Prisma.IntFilter<"Installment"> | number;
    amountKobo?: Prisma.IntFilter<"Installment"> | number;
    lateFeeKobo?: Prisma.IntFilter<"Installment"> | number;
    dueAt?: Prisma.DateTimeFilter<"Installment"> | Date | string;
    status?: Prisma.EnumInstallmentStatusFilter<"Installment"> | $Enums.InstallmentStatus;
    paidAt?: Prisma.DateTimeNullableFilter<"Installment"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Installment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Installment"> | Date | string;
};
export type InstallmentCreateWithoutCycleInput = {
    id?: string;
    sequence: number;
    amountKobo: number;
    lateFeeKobo?: number;
    dueAt: Date | string;
    status?: $Enums.InstallmentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membership: Prisma.MembershipCreateNestedOneWithoutInstallmentsInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutInstallmentInput;
};
export type InstallmentUncheckedCreateWithoutCycleInput = {
    id?: string;
    membershipId: string;
    sequence: number;
    amountKobo: number;
    lateFeeKobo?: number;
    dueAt: Date | string;
    status?: $Enums.InstallmentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutInstallmentInput;
};
export type InstallmentCreateOrConnectWithoutCycleInput = {
    where: Prisma.InstallmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.InstallmentCreateWithoutCycleInput, Prisma.InstallmentUncheckedCreateWithoutCycleInput>;
};
export type InstallmentCreateManyCycleInputEnvelope = {
    data: Prisma.InstallmentCreateManyCycleInput | Prisma.InstallmentCreateManyCycleInput[];
    skipDuplicates?: boolean;
};
export type InstallmentUpsertWithWhereUniqueWithoutCycleInput = {
    where: Prisma.InstallmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.InstallmentUpdateWithoutCycleInput, Prisma.InstallmentUncheckedUpdateWithoutCycleInput>;
    create: Prisma.XOR<Prisma.InstallmentCreateWithoutCycleInput, Prisma.InstallmentUncheckedCreateWithoutCycleInput>;
};
export type InstallmentUpdateWithWhereUniqueWithoutCycleInput = {
    where: Prisma.InstallmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.InstallmentUpdateWithoutCycleInput, Prisma.InstallmentUncheckedUpdateWithoutCycleInput>;
};
export type InstallmentUpdateManyWithWhereWithoutCycleInput = {
    where: Prisma.InstallmentScalarWhereInput;
    data: Prisma.XOR<Prisma.InstallmentUpdateManyMutationInput, Prisma.InstallmentUncheckedUpdateManyWithoutCycleInput>;
};
export type InstallmentCreateWithoutPaymentsInput = {
    id?: string;
    sequence: number;
    amountKobo: number;
    lateFeeKobo?: number;
    dueAt: Date | string;
    status?: $Enums.InstallmentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycle: Prisma.CycleCreateNestedOneWithoutInstallmentsInput;
    membership: Prisma.MembershipCreateNestedOneWithoutInstallmentsInput;
};
export type InstallmentUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    cycleId: string;
    membershipId: string;
    sequence: number;
    amountKobo: number;
    lateFeeKobo?: number;
    dueAt: Date | string;
    status?: $Enums.InstallmentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InstallmentCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.InstallmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.InstallmentCreateWithoutPaymentsInput, Prisma.InstallmentUncheckedCreateWithoutPaymentsInput>;
};
export type InstallmentUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.InstallmentUpdateWithoutPaymentsInput, Prisma.InstallmentUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.InstallmentCreateWithoutPaymentsInput, Prisma.InstallmentUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.InstallmentWhereInput;
};
export type InstallmentUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.InstallmentWhereInput;
    data: Prisma.XOR<Prisma.InstallmentUpdateWithoutPaymentsInput, Prisma.InstallmentUncheckedUpdateWithoutPaymentsInput>;
};
export type InstallmentUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    lateFeeKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycle?: Prisma.CycleUpdateOneRequiredWithoutInstallmentsNestedInput;
    membership?: Prisma.MembershipUpdateOneRequiredWithoutInstallmentsNestedInput;
};
export type InstallmentUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    membershipId?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    lateFeeKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InstallmentCreateManyMembershipInput = {
    id?: string;
    cycleId: string;
    sequence: number;
    amountKobo: number;
    lateFeeKobo?: number;
    dueAt: Date | string;
    status?: $Enums.InstallmentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InstallmentUpdateWithoutMembershipInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    lateFeeKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycle?: Prisma.CycleUpdateOneRequiredWithoutInstallmentsNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutInstallmentNestedInput;
};
export type InstallmentUncheckedUpdateWithoutMembershipInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    lateFeeKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutInstallmentNestedInput;
};
export type InstallmentUncheckedUpdateManyWithoutMembershipInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    lateFeeKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InstallmentCreateManyCycleInput = {
    id?: string;
    membershipId: string;
    sequence: number;
    amountKobo: number;
    lateFeeKobo?: number;
    dueAt: Date | string;
    status?: $Enums.InstallmentStatus;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InstallmentUpdateWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    lateFeeKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUpdateOneRequiredWithoutInstallmentsNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutInstallmentNestedInput;
};
export type InstallmentUncheckedUpdateWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    membershipId?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    lateFeeKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutInstallmentNestedInput;
};
export type InstallmentUncheckedUpdateManyWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    membershipId?: Prisma.StringFieldUpdateOperationsInput | string;
    sequence?: Prisma.IntFieldUpdateOperationsInput | number;
    amountKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    lateFeeKobo?: Prisma.IntFieldUpdateOperationsInput | number;
    dueAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumInstallmentStatusFieldUpdateOperationsInput | $Enums.InstallmentStatus;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InstallmentCountOutputType = {
    payments: number;
};
export type InstallmentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payments?: boolean | InstallmentCountOutputTypeCountPaymentsArgs;
};
export type InstallmentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstallmentCountOutputTypeSelect<ExtArgs> | null;
};
export type InstallmentCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
};
export type InstallmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cycleId?: boolean;
    membershipId?: boolean;
    sequence?: boolean;
    amountKobo?: boolean;
    lateFeeKobo?: boolean;
    dueAt?: boolean;
    status?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cycle?: boolean | Prisma.CycleDefaultArgs<ExtArgs>;
    membership?: boolean | Prisma.MembershipDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.Installment$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.InstallmentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["installment"]>;
export type InstallmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cycleId?: boolean;
    membershipId?: boolean;
    sequence?: boolean;
    amountKobo?: boolean;
    lateFeeKobo?: boolean;
    dueAt?: boolean;
    status?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cycle?: boolean | Prisma.CycleDefaultArgs<ExtArgs>;
    membership?: boolean | Prisma.MembershipDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["installment"]>;
export type InstallmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cycleId?: boolean;
    membershipId?: boolean;
    sequence?: boolean;
    amountKobo?: boolean;
    lateFeeKobo?: boolean;
    dueAt?: boolean;
    status?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cycle?: boolean | Prisma.CycleDefaultArgs<ExtArgs>;
    membership?: boolean | Prisma.MembershipDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["installment"]>;
export type InstallmentSelectScalar = {
    id?: boolean;
    cycleId?: boolean;
    membershipId?: boolean;
    sequence?: boolean;
    amountKobo?: boolean;
    lateFeeKobo?: boolean;
    dueAt?: boolean;
    status?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type InstallmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cycleId" | "membershipId" | "sequence" | "amountKobo" | "lateFeeKobo" | "dueAt" | "status" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["installment"]>;
export type InstallmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cycle?: boolean | Prisma.CycleDefaultArgs<ExtArgs>;
    membership?: boolean | Prisma.MembershipDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.Installment$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.InstallmentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type InstallmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cycle?: boolean | Prisma.CycleDefaultArgs<ExtArgs>;
    membership?: boolean | Prisma.MembershipDefaultArgs<ExtArgs>;
};
export type InstallmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cycle?: boolean | Prisma.CycleDefaultArgs<ExtArgs>;
    membership?: boolean | Prisma.MembershipDefaultArgs<ExtArgs>;
};
export type $InstallmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Installment";
    objects: {
        cycle: Prisma.$CyclePayload<ExtArgs>;
        membership: Prisma.$MembershipPayload<ExtArgs>;
        payments: Prisma.$PaymentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        cycleId: string;
        membershipId: string;
        sequence: number;
        amountKobo: number;
        lateFeeKobo: number;
        dueAt: Date;
        status: $Enums.InstallmentStatus;
        paidAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["installment"]>;
    composites: {};
};
export type InstallmentGetPayload<S extends boolean | null | undefined | InstallmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InstallmentPayload, S>;
export type InstallmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InstallmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InstallmentCountAggregateInputType | true;
};
export interface InstallmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Installment'];
        meta: {
            name: 'Installment';
        };
    };
    findUnique<T extends InstallmentFindUniqueArgs>(args: Prisma.SelectSubset<T, InstallmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InstallmentClient<runtime.Types.Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InstallmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InstallmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InstallmentClient<runtime.Types.Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InstallmentFindFirstArgs>(args?: Prisma.SelectSubset<T, InstallmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__InstallmentClient<runtime.Types.Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InstallmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InstallmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InstallmentClient<runtime.Types.Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InstallmentFindManyArgs>(args?: Prisma.SelectSubset<T, InstallmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InstallmentCreateArgs>(args: Prisma.SelectSubset<T, InstallmentCreateArgs<ExtArgs>>): Prisma.Prisma__InstallmentClient<runtime.Types.Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InstallmentCreateManyArgs>(args?: Prisma.SelectSubset<T, InstallmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InstallmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InstallmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InstallmentDeleteArgs>(args: Prisma.SelectSubset<T, InstallmentDeleteArgs<ExtArgs>>): Prisma.Prisma__InstallmentClient<runtime.Types.Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InstallmentUpdateArgs>(args: Prisma.SelectSubset<T, InstallmentUpdateArgs<ExtArgs>>): Prisma.Prisma__InstallmentClient<runtime.Types.Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InstallmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, InstallmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InstallmentUpdateManyArgs>(args: Prisma.SelectSubset<T, InstallmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InstallmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InstallmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InstallmentUpsertArgs>(args: Prisma.SelectSubset<T, InstallmentUpsertArgs<ExtArgs>>): Prisma.Prisma__InstallmentClient<runtime.Types.Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InstallmentCountArgs>(args?: Prisma.Subset<T, InstallmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InstallmentCountAggregateOutputType> : number>;
    aggregate<T extends InstallmentAggregateArgs>(args: Prisma.Subset<T, InstallmentAggregateArgs>): Prisma.PrismaPromise<GetInstallmentAggregateType<T>>;
    groupBy<T extends InstallmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InstallmentGroupByArgs['orderBy'];
    } : {
        orderBy?: InstallmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InstallmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstallmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InstallmentFieldRefs;
}
export interface Prisma__InstallmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cycle<T extends Prisma.CycleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CycleDefaultArgs<ExtArgs>>): Prisma.Prisma__CycleClient<runtime.Types.Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    membership<T extends Prisma.MembershipDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MembershipDefaultArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    payments<T extends Prisma.Installment$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Installment$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InstallmentFieldRefs {
    readonly id: Prisma.FieldRef<"Installment", 'String'>;
    readonly cycleId: Prisma.FieldRef<"Installment", 'String'>;
    readonly membershipId: Prisma.FieldRef<"Installment", 'String'>;
    readonly sequence: Prisma.FieldRef<"Installment", 'Int'>;
    readonly amountKobo: Prisma.FieldRef<"Installment", 'Int'>;
    readonly lateFeeKobo: Prisma.FieldRef<"Installment", 'Int'>;
    readonly dueAt: Prisma.FieldRef<"Installment", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Installment", 'InstallmentStatus'>;
    readonly paidAt: Prisma.FieldRef<"Installment", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Installment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Installment", 'DateTime'>;
}
export type InstallmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstallmentSelect<ExtArgs> | null;
    omit?: Prisma.InstallmentOmit<ExtArgs> | null;
    include?: Prisma.InstallmentInclude<ExtArgs> | null;
    where: Prisma.InstallmentWhereUniqueInput;
};
export type InstallmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstallmentSelect<ExtArgs> | null;
    omit?: Prisma.InstallmentOmit<ExtArgs> | null;
    include?: Prisma.InstallmentInclude<ExtArgs> | null;
    where: Prisma.InstallmentWhereUniqueInput;
};
export type InstallmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstallmentSelect<ExtArgs> | null;
    omit?: Prisma.InstallmentOmit<ExtArgs> | null;
    include?: Prisma.InstallmentInclude<ExtArgs> | null;
    where?: Prisma.InstallmentWhereInput;
    orderBy?: Prisma.InstallmentOrderByWithRelationInput | Prisma.InstallmentOrderByWithRelationInput[];
    cursor?: Prisma.InstallmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InstallmentScalarFieldEnum | Prisma.InstallmentScalarFieldEnum[];
};
export type InstallmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstallmentSelect<ExtArgs> | null;
    omit?: Prisma.InstallmentOmit<ExtArgs> | null;
    include?: Prisma.InstallmentInclude<ExtArgs> | null;
    where?: Prisma.InstallmentWhereInput;
    orderBy?: Prisma.InstallmentOrderByWithRelationInput | Prisma.InstallmentOrderByWithRelationInput[];
    cursor?: Prisma.InstallmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InstallmentScalarFieldEnum | Prisma.InstallmentScalarFieldEnum[];
};
export type InstallmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstallmentSelect<ExtArgs> | null;
    omit?: Prisma.InstallmentOmit<ExtArgs> | null;
    include?: Prisma.InstallmentInclude<ExtArgs> | null;
    where?: Prisma.InstallmentWhereInput;
    orderBy?: Prisma.InstallmentOrderByWithRelationInput | Prisma.InstallmentOrderByWithRelationInput[];
    cursor?: Prisma.InstallmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InstallmentScalarFieldEnum | Prisma.InstallmentScalarFieldEnum[];
};
export type InstallmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstallmentSelect<ExtArgs> | null;
    omit?: Prisma.InstallmentOmit<ExtArgs> | null;
    include?: Prisma.InstallmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InstallmentCreateInput, Prisma.InstallmentUncheckedCreateInput>;
};
export type InstallmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InstallmentCreateManyInput | Prisma.InstallmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InstallmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstallmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InstallmentOmit<ExtArgs> | null;
    data: Prisma.InstallmentCreateManyInput | Prisma.InstallmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InstallmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InstallmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstallmentSelect<ExtArgs> | null;
    omit?: Prisma.InstallmentOmit<ExtArgs> | null;
    include?: Prisma.InstallmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InstallmentUpdateInput, Prisma.InstallmentUncheckedUpdateInput>;
    where: Prisma.InstallmentWhereUniqueInput;
};
export type InstallmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InstallmentUpdateManyMutationInput, Prisma.InstallmentUncheckedUpdateManyInput>;
    where?: Prisma.InstallmentWhereInput;
    limit?: number;
};
export type InstallmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstallmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InstallmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InstallmentUpdateManyMutationInput, Prisma.InstallmentUncheckedUpdateManyInput>;
    where?: Prisma.InstallmentWhereInput;
    limit?: number;
    include?: Prisma.InstallmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InstallmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstallmentSelect<ExtArgs> | null;
    omit?: Prisma.InstallmentOmit<ExtArgs> | null;
    include?: Prisma.InstallmentInclude<ExtArgs> | null;
    where: Prisma.InstallmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.InstallmentCreateInput, Prisma.InstallmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InstallmentUpdateInput, Prisma.InstallmentUncheckedUpdateInput>;
};
export type InstallmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstallmentSelect<ExtArgs> | null;
    omit?: Prisma.InstallmentOmit<ExtArgs> | null;
    include?: Prisma.InstallmentInclude<ExtArgs> | null;
    where: Prisma.InstallmentWhereUniqueInput;
};
export type InstallmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InstallmentWhereInput;
    limit?: number;
};
export type Installment$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InstallmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstallmentSelect<ExtArgs> | null;
    omit?: Prisma.InstallmentOmit<ExtArgs> | null;
    include?: Prisma.InstallmentInclude<ExtArgs> | null;
};
