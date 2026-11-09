import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CycleModel = runtime.Types.Result.DefaultSelection<Prisma.$CyclePayload>;
export type AggregateCycle = {
    _count: CycleCountAggregateOutputType | null;
    _avg: CycleAvgAggregateOutputType | null;
    _sum: CycleSumAggregateOutputType | null;
    _min: CycleMinAggregateOutputType | null;
    _max: CycleMaxAggregateOutputType | null;
};
export type CycleAvgAggregateOutputType = {
    number: number | null;
};
export type CycleSumAggregateOutputType = {
    number: number | null;
};
export type CycleMinAggregateOutputType = {
    id: string | null;
    groupId: string | null;
    number: number | null;
    startsAt: Date | null;
    endsAt: Date | null;
    status: $Enums.CycleStatus | null;
    fundedAt: Date | null;
    createdAt: Date | null;
};
export type CycleMaxAggregateOutputType = {
    id: string | null;
    groupId: string | null;
    number: number | null;
    startsAt: Date | null;
    endsAt: Date | null;
    status: $Enums.CycleStatus | null;
    fundedAt: Date | null;
    createdAt: Date | null;
};
export type CycleCountAggregateOutputType = {
    id: number;
    groupId: number;
    number: number;
    startsAt: number;
    endsAt: number;
    status: number;
    fundedAt: number;
    createdAt: number;
    _all: number;
};
export type CycleAvgAggregateInputType = {
    number?: true;
};
export type CycleSumAggregateInputType = {
    number?: true;
};
export type CycleMinAggregateInputType = {
    id?: true;
    groupId?: true;
    number?: true;
    startsAt?: true;
    endsAt?: true;
    status?: true;
    fundedAt?: true;
    createdAt?: true;
};
export type CycleMaxAggregateInputType = {
    id?: true;
    groupId?: true;
    number?: true;
    startsAt?: true;
    endsAt?: true;
    status?: true;
    fundedAt?: true;
    createdAt?: true;
};
export type CycleCountAggregateInputType = {
    id?: true;
    groupId?: true;
    number?: true;
    startsAt?: true;
    endsAt?: true;
    status?: true;
    fundedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type CycleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CycleWhereInput;
    orderBy?: Prisma.CycleOrderByWithRelationInput | Prisma.CycleOrderByWithRelationInput[];
    cursor?: Prisma.CycleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CycleCountAggregateInputType;
    _avg?: CycleAvgAggregateInputType;
    _sum?: CycleSumAggregateInputType;
    _min?: CycleMinAggregateInputType;
    _max?: CycleMaxAggregateInputType;
};
export type GetCycleAggregateType<T extends CycleAggregateArgs> = {
    [P in keyof T & keyof AggregateCycle]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCycle[P]> : Prisma.GetScalarType<T[P], AggregateCycle[P]>;
};
export type CycleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CycleWhereInput;
    orderBy?: Prisma.CycleOrderByWithAggregationInput | Prisma.CycleOrderByWithAggregationInput[];
    by: Prisma.CycleScalarFieldEnum[] | Prisma.CycleScalarFieldEnum;
    having?: Prisma.CycleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CycleCountAggregateInputType | true;
    _avg?: CycleAvgAggregateInputType;
    _sum?: CycleSumAggregateInputType;
    _min?: CycleMinAggregateInputType;
    _max?: CycleMaxAggregateInputType;
};
export type CycleGroupByOutputType = {
    id: string;
    groupId: string;
    number: number;
    startsAt: Date;
    endsAt: Date;
    status: $Enums.CycleStatus;
    fundedAt: Date | null;
    createdAt: Date;
    _count: CycleCountAggregateOutputType | null;
    _avg: CycleAvgAggregateOutputType | null;
    _sum: CycleSumAggregateOutputType | null;
    _min: CycleMinAggregateOutputType | null;
    _max: CycleMaxAggregateOutputType | null;
};
export type GetCycleGroupByPayload<T extends CycleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CycleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CycleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CycleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CycleGroupByOutputType[P]>;
}>>;
export type CycleWhereInput = {
    AND?: Prisma.CycleWhereInput | Prisma.CycleWhereInput[];
    OR?: Prisma.CycleWhereInput[];
    NOT?: Prisma.CycleWhereInput | Prisma.CycleWhereInput[];
    id?: Prisma.StringFilter<"Cycle"> | string;
    groupId?: Prisma.StringFilter<"Cycle"> | string;
    number?: Prisma.IntFilter<"Cycle"> | number;
    startsAt?: Prisma.DateTimeFilter<"Cycle"> | Date | string;
    endsAt?: Prisma.DateTimeFilter<"Cycle"> | Date | string;
    status?: Prisma.EnumCycleStatusFilter<"Cycle"> | $Enums.CycleStatus;
    fundedAt?: Prisma.DateTimeNullableFilter<"Cycle"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Cycle"> | Date | string;
    group?: Prisma.XOR<Prisma.GroupScalarRelationFilter, Prisma.GroupWhereInput>;
    installments?: Prisma.InstallmentListRelationFilter;
    payouts?: Prisma.PayoutListRelationFilter;
};
export type CycleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fundedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    group?: Prisma.GroupOrderByWithRelationInput;
    installments?: Prisma.InstallmentOrderByRelationAggregateInput;
    payouts?: Prisma.PayoutOrderByRelationAggregateInput;
};
export type CycleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    groupId_number?: Prisma.CycleGroupIdNumberCompoundUniqueInput;
    AND?: Prisma.CycleWhereInput | Prisma.CycleWhereInput[];
    OR?: Prisma.CycleWhereInput[];
    NOT?: Prisma.CycleWhereInput | Prisma.CycleWhereInput[];
    groupId?: Prisma.StringFilter<"Cycle"> | string;
    number?: Prisma.IntFilter<"Cycle"> | number;
    startsAt?: Prisma.DateTimeFilter<"Cycle"> | Date | string;
    endsAt?: Prisma.DateTimeFilter<"Cycle"> | Date | string;
    status?: Prisma.EnumCycleStatusFilter<"Cycle"> | $Enums.CycleStatus;
    fundedAt?: Prisma.DateTimeNullableFilter<"Cycle"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Cycle"> | Date | string;
    group?: Prisma.XOR<Prisma.GroupScalarRelationFilter, Prisma.GroupWhereInput>;
    installments?: Prisma.InstallmentListRelationFilter;
    payouts?: Prisma.PayoutListRelationFilter;
}, "id" | "groupId_number">;
export type CycleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fundedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CycleCountOrderByAggregateInput;
    _avg?: Prisma.CycleAvgOrderByAggregateInput;
    _max?: Prisma.CycleMaxOrderByAggregateInput;
    _min?: Prisma.CycleMinOrderByAggregateInput;
    _sum?: Prisma.CycleSumOrderByAggregateInput;
};
export type CycleScalarWhereWithAggregatesInput = {
    AND?: Prisma.CycleScalarWhereWithAggregatesInput | Prisma.CycleScalarWhereWithAggregatesInput[];
    OR?: Prisma.CycleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CycleScalarWhereWithAggregatesInput | Prisma.CycleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Cycle"> | string;
    groupId?: Prisma.StringWithAggregatesFilter<"Cycle"> | string;
    number?: Prisma.IntWithAggregatesFilter<"Cycle"> | number;
    startsAt?: Prisma.DateTimeWithAggregatesFilter<"Cycle"> | Date | string;
    endsAt?: Prisma.DateTimeWithAggregatesFilter<"Cycle"> | Date | string;
    status?: Prisma.EnumCycleStatusWithAggregatesFilter<"Cycle"> | $Enums.CycleStatus;
    fundedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Cycle"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Cycle"> | Date | string;
};
export type CycleCreateInput = {
    id?: string;
    number: number;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.CycleStatus;
    fundedAt?: Date | string | null;
    createdAt?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutCyclesInput;
    installments?: Prisma.InstallmentCreateNestedManyWithoutCycleInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutCycleInput;
};
export type CycleUncheckedCreateInput = {
    id?: string;
    groupId: string;
    number: number;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.CycleStatus;
    fundedAt?: Date | string | null;
    createdAt?: Date | string;
    installments?: Prisma.InstallmentUncheckedCreateNestedManyWithoutCycleInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutCycleInput;
};
export type CycleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    fundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutCyclesNestedInput;
    installments?: Prisma.InstallmentUpdateManyWithoutCycleNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutCycleNestedInput;
};
export type CycleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    fundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    installments?: Prisma.InstallmentUncheckedUpdateManyWithoutCycleNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutCycleNestedInput;
};
export type CycleCreateManyInput = {
    id?: string;
    groupId: string;
    number: number;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.CycleStatus;
    fundedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CycleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    fundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CycleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    fundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CycleListRelationFilter = {
    every?: Prisma.CycleWhereInput;
    some?: Prisma.CycleWhereInput;
    none?: Prisma.CycleWhereInput;
};
export type CycleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CycleGroupIdNumberCompoundUniqueInput = {
    groupId: string;
    number: number;
};
export type CycleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fundedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CycleAvgOrderByAggregateInput = {
    number?: Prisma.SortOrder;
};
export type CycleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fundedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CycleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fundedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CycleSumOrderByAggregateInput = {
    number?: Prisma.SortOrder;
};
export type CycleScalarRelationFilter = {
    is?: Prisma.CycleWhereInput;
    isNot?: Prisma.CycleWhereInput;
};
export type CycleNullableScalarRelationFilter = {
    is?: Prisma.CycleWhereInput | null;
    isNot?: Prisma.CycleWhereInput | null;
};
export type CycleCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.CycleCreateWithoutGroupInput, Prisma.CycleUncheckedCreateWithoutGroupInput> | Prisma.CycleCreateWithoutGroupInput[] | Prisma.CycleUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.CycleCreateOrConnectWithoutGroupInput | Prisma.CycleCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.CycleCreateManyGroupInputEnvelope;
    connect?: Prisma.CycleWhereUniqueInput | Prisma.CycleWhereUniqueInput[];
};
export type CycleUncheckedCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.CycleCreateWithoutGroupInput, Prisma.CycleUncheckedCreateWithoutGroupInput> | Prisma.CycleCreateWithoutGroupInput[] | Prisma.CycleUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.CycleCreateOrConnectWithoutGroupInput | Prisma.CycleCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.CycleCreateManyGroupInputEnvelope;
    connect?: Prisma.CycleWhereUniqueInput | Prisma.CycleWhereUniqueInput[];
};
export type CycleUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.CycleCreateWithoutGroupInput, Prisma.CycleUncheckedCreateWithoutGroupInput> | Prisma.CycleCreateWithoutGroupInput[] | Prisma.CycleUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.CycleCreateOrConnectWithoutGroupInput | Prisma.CycleCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.CycleUpsertWithWhereUniqueWithoutGroupInput | Prisma.CycleUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.CycleCreateManyGroupInputEnvelope;
    set?: Prisma.CycleWhereUniqueInput | Prisma.CycleWhereUniqueInput[];
    disconnect?: Prisma.CycleWhereUniqueInput | Prisma.CycleWhereUniqueInput[];
    delete?: Prisma.CycleWhereUniqueInput | Prisma.CycleWhereUniqueInput[];
    connect?: Prisma.CycleWhereUniqueInput | Prisma.CycleWhereUniqueInput[];
    update?: Prisma.CycleUpdateWithWhereUniqueWithoutGroupInput | Prisma.CycleUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.CycleUpdateManyWithWhereWithoutGroupInput | Prisma.CycleUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.CycleScalarWhereInput | Prisma.CycleScalarWhereInput[];
};
export type CycleUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.CycleCreateWithoutGroupInput, Prisma.CycleUncheckedCreateWithoutGroupInput> | Prisma.CycleCreateWithoutGroupInput[] | Prisma.CycleUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.CycleCreateOrConnectWithoutGroupInput | Prisma.CycleCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.CycleUpsertWithWhereUniqueWithoutGroupInput | Prisma.CycleUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.CycleCreateManyGroupInputEnvelope;
    set?: Prisma.CycleWhereUniqueInput | Prisma.CycleWhereUniqueInput[];
    disconnect?: Prisma.CycleWhereUniqueInput | Prisma.CycleWhereUniqueInput[];
    delete?: Prisma.CycleWhereUniqueInput | Prisma.CycleWhereUniqueInput[];
    connect?: Prisma.CycleWhereUniqueInput | Prisma.CycleWhereUniqueInput[];
    update?: Prisma.CycleUpdateWithWhereUniqueWithoutGroupInput | Prisma.CycleUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.CycleUpdateManyWithWhereWithoutGroupInput | Prisma.CycleUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.CycleScalarWhereInput | Prisma.CycleScalarWhereInput[];
};
export type EnumCycleStatusFieldUpdateOperationsInput = {
    set?: $Enums.CycleStatus;
};
export type CycleCreateNestedOneWithoutInstallmentsInput = {
    create?: Prisma.XOR<Prisma.CycleCreateWithoutInstallmentsInput, Prisma.CycleUncheckedCreateWithoutInstallmentsInput>;
    connectOrCreate?: Prisma.CycleCreateOrConnectWithoutInstallmentsInput;
    connect?: Prisma.CycleWhereUniqueInput;
};
export type CycleUpdateOneRequiredWithoutInstallmentsNestedInput = {
    create?: Prisma.XOR<Prisma.CycleCreateWithoutInstallmentsInput, Prisma.CycleUncheckedCreateWithoutInstallmentsInput>;
    connectOrCreate?: Prisma.CycleCreateOrConnectWithoutInstallmentsInput;
    upsert?: Prisma.CycleUpsertWithoutInstallmentsInput;
    connect?: Prisma.CycleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CycleUpdateToOneWithWhereWithoutInstallmentsInput, Prisma.CycleUpdateWithoutInstallmentsInput>, Prisma.CycleUncheckedUpdateWithoutInstallmentsInput>;
};
export type CycleCreateNestedOneWithoutPayoutsInput = {
    create?: Prisma.XOR<Prisma.CycleCreateWithoutPayoutsInput, Prisma.CycleUncheckedCreateWithoutPayoutsInput>;
    connectOrCreate?: Prisma.CycleCreateOrConnectWithoutPayoutsInput;
    connect?: Prisma.CycleWhereUniqueInput;
};
export type CycleUpdateOneWithoutPayoutsNestedInput = {
    create?: Prisma.XOR<Prisma.CycleCreateWithoutPayoutsInput, Prisma.CycleUncheckedCreateWithoutPayoutsInput>;
    connectOrCreate?: Prisma.CycleCreateOrConnectWithoutPayoutsInput;
    upsert?: Prisma.CycleUpsertWithoutPayoutsInput;
    disconnect?: Prisma.CycleWhereInput | boolean;
    delete?: Prisma.CycleWhereInput | boolean;
    connect?: Prisma.CycleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CycleUpdateToOneWithWhereWithoutPayoutsInput, Prisma.CycleUpdateWithoutPayoutsInput>, Prisma.CycleUncheckedUpdateWithoutPayoutsInput>;
};
export type CycleCreateWithoutGroupInput = {
    id?: string;
    number: number;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.CycleStatus;
    fundedAt?: Date | string | null;
    createdAt?: Date | string;
    installments?: Prisma.InstallmentCreateNestedManyWithoutCycleInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutCycleInput;
};
export type CycleUncheckedCreateWithoutGroupInput = {
    id?: string;
    number: number;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.CycleStatus;
    fundedAt?: Date | string | null;
    createdAt?: Date | string;
    installments?: Prisma.InstallmentUncheckedCreateNestedManyWithoutCycleInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutCycleInput;
};
export type CycleCreateOrConnectWithoutGroupInput = {
    where: Prisma.CycleWhereUniqueInput;
    create: Prisma.XOR<Prisma.CycleCreateWithoutGroupInput, Prisma.CycleUncheckedCreateWithoutGroupInput>;
};
export type CycleCreateManyGroupInputEnvelope = {
    data: Prisma.CycleCreateManyGroupInput | Prisma.CycleCreateManyGroupInput[];
    skipDuplicates?: boolean;
};
export type CycleUpsertWithWhereUniqueWithoutGroupInput = {
    where: Prisma.CycleWhereUniqueInput;
    update: Prisma.XOR<Prisma.CycleUpdateWithoutGroupInput, Prisma.CycleUncheckedUpdateWithoutGroupInput>;
    create: Prisma.XOR<Prisma.CycleCreateWithoutGroupInput, Prisma.CycleUncheckedCreateWithoutGroupInput>;
};
export type CycleUpdateWithWhereUniqueWithoutGroupInput = {
    where: Prisma.CycleWhereUniqueInput;
    data: Prisma.XOR<Prisma.CycleUpdateWithoutGroupInput, Prisma.CycleUncheckedUpdateWithoutGroupInput>;
};
export type CycleUpdateManyWithWhereWithoutGroupInput = {
    where: Prisma.CycleScalarWhereInput;
    data: Prisma.XOR<Prisma.CycleUpdateManyMutationInput, Prisma.CycleUncheckedUpdateManyWithoutGroupInput>;
};
export type CycleScalarWhereInput = {
    AND?: Prisma.CycleScalarWhereInput | Prisma.CycleScalarWhereInput[];
    OR?: Prisma.CycleScalarWhereInput[];
    NOT?: Prisma.CycleScalarWhereInput | Prisma.CycleScalarWhereInput[];
    id?: Prisma.StringFilter<"Cycle"> | string;
    groupId?: Prisma.StringFilter<"Cycle"> | string;
    number?: Prisma.IntFilter<"Cycle"> | number;
    startsAt?: Prisma.DateTimeFilter<"Cycle"> | Date | string;
    endsAt?: Prisma.DateTimeFilter<"Cycle"> | Date | string;
    status?: Prisma.EnumCycleStatusFilter<"Cycle"> | $Enums.CycleStatus;
    fundedAt?: Prisma.DateTimeNullableFilter<"Cycle"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Cycle"> | Date | string;
};
export type CycleCreateWithoutInstallmentsInput = {
    id?: string;
    number: number;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.CycleStatus;
    fundedAt?: Date | string | null;
    createdAt?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutCyclesInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutCycleInput;
};
export type CycleUncheckedCreateWithoutInstallmentsInput = {
    id?: string;
    groupId: string;
    number: number;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.CycleStatus;
    fundedAt?: Date | string | null;
    createdAt?: Date | string;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutCycleInput;
};
export type CycleCreateOrConnectWithoutInstallmentsInput = {
    where: Prisma.CycleWhereUniqueInput;
    create: Prisma.XOR<Prisma.CycleCreateWithoutInstallmentsInput, Prisma.CycleUncheckedCreateWithoutInstallmentsInput>;
};
export type CycleUpsertWithoutInstallmentsInput = {
    update: Prisma.XOR<Prisma.CycleUpdateWithoutInstallmentsInput, Prisma.CycleUncheckedUpdateWithoutInstallmentsInput>;
    create: Prisma.XOR<Prisma.CycleCreateWithoutInstallmentsInput, Prisma.CycleUncheckedCreateWithoutInstallmentsInput>;
    where?: Prisma.CycleWhereInput;
};
export type CycleUpdateToOneWithWhereWithoutInstallmentsInput = {
    where?: Prisma.CycleWhereInput;
    data: Prisma.XOR<Prisma.CycleUpdateWithoutInstallmentsInput, Prisma.CycleUncheckedUpdateWithoutInstallmentsInput>;
};
export type CycleUpdateWithoutInstallmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    fundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutCyclesNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutCycleNestedInput;
};
export type CycleUncheckedUpdateWithoutInstallmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    fundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutCycleNestedInput;
};
export type CycleCreateWithoutPayoutsInput = {
    id?: string;
    number: number;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.CycleStatus;
    fundedAt?: Date | string | null;
    createdAt?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutCyclesInput;
    installments?: Prisma.InstallmentCreateNestedManyWithoutCycleInput;
};
export type CycleUncheckedCreateWithoutPayoutsInput = {
    id?: string;
    groupId: string;
    number: number;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.CycleStatus;
    fundedAt?: Date | string | null;
    createdAt?: Date | string;
    installments?: Prisma.InstallmentUncheckedCreateNestedManyWithoutCycleInput;
};
export type CycleCreateOrConnectWithoutPayoutsInput = {
    where: Prisma.CycleWhereUniqueInput;
    create: Prisma.XOR<Prisma.CycleCreateWithoutPayoutsInput, Prisma.CycleUncheckedCreateWithoutPayoutsInput>;
};
export type CycleUpsertWithoutPayoutsInput = {
    update: Prisma.XOR<Prisma.CycleUpdateWithoutPayoutsInput, Prisma.CycleUncheckedUpdateWithoutPayoutsInput>;
    create: Prisma.XOR<Prisma.CycleCreateWithoutPayoutsInput, Prisma.CycleUncheckedCreateWithoutPayoutsInput>;
    where?: Prisma.CycleWhereInput;
};
export type CycleUpdateToOneWithWhereWithoutPayoutsInput = {
    where?: Prisma.CycleWhereInput;
    data: Prisma.XOR<Prisma.CycleUpdateWithoutPayoutsInput, Prisma.CycleUncheckedUpdateWithoutPayoutsInput>;
};
export type CycleUpdateWithoutPayoutsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    fundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutCyclesNestedInput;
    installments?: Prisma.InstallmentUpdateManyWithoutCycleNestedInput;
};
export type CycleUncheckedUpdateWithoutPayoutsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    fundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    installments?: Prisma.InstallmentUncheckedUpdateManyWithoutCycleNestedInput;
};
export type CycleCreateManyGroupInput = {
    id?: string;
    number: number;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.CycleStatus;
    fundedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CycleUpdateWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    fundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    installments?: Prisma.InstallmentUpdateManyWithoutCycleNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutCycleNestedInput;
};
export type CycleUncheckedUpdateWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    fundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    installments?: Prisma.InstallmentUncheckedUpdateManyWithoutCycleNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutCycleNestedInput;
};
export type CycleUncheckedUpdateManyWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    fundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CycleCountOutputType = {
    installments: number;
    payouts: number;
};
export type CycleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    installments?: boolean | CycleCountOutputTypeCountInstallmentsArgs;
    payouts?: boolean | CycleCountOutputTypeCountPayoutsArgs;
};
export type CycleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleCountOutputTypeSelect<ExtArgs> | null;
};
export type CycleCountOutputTypeCountInstallmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InstallmentWhereInput;
};
export type CycleCountOutputTypeCountPayoutsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutWhereInput;
};
export type CycleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    groupId?: boolean;
    number?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    status?: boolean;
    fundedAt?: boolean;
    createdAt?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    installments?: boolean | Prisma.Cycle$installmentsArgs<ExtArgs>;
    payouts?: boolean | Prisma.Cycle$payoutsArgs<ExtArgs>;
    _count?: boolean | Prisma.CycleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cycle"]>;
export type CycleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    groupId?: boolean;
    number?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    status?: boolean;
    fundedAt?: boolean;
    createdAt?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cycle"]>;
export type CycleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    groupId?: boolean;
    number?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    status?: boolean;
    fundedAt?: boolean;
    createdAt?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cycle"]>;
export type CycleSelectScalar = {
    id?: boolean;
    groupId?: boolean;
    number?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    status?: boolean;
    fundedAt?: boolean;
    createdAt?: boolean;
};
export type CycleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "groupId" | "number" | "startsAt" | "endsAt" | "status" | "fundedAt" | "createdAt", ExtArgs["result"]["cycle"]>;
export type CycleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    installments?: boolean | Prisma.Cycle$installmentsArgs<ExtArgs>;
    payouts?: boolean | Prisma.Cycle$payoutsArgs<ExtArgs>;
    _count?: boolean | Prisma.CycleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CycleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
};
export type CycleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
};
export type $CyclePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Cycle";
    objects: {
        group: Prisma.$GroupPayload<ExtArgs>;
        installments: Prisma.$InstallmentPayload<ExtArgs>[];
        payouts: Prisma.$PayoutPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        groupId: string;
        number: number;
        startsAt: Date;
        endsAt: Date;
        status: $Enums.CycleStatus;
        fundedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["cycle"]>;
    composites: {};
};
export type CycleGetPayload<S extends boolean | null | undefined | CycleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CyclePayload, S>;
export type CycleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CycleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CycleCountAggregateInputType | true;
};
export interface CycleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Cycle'];
        meta: {
            name: 'Cycle';
        };
    };
    findUnique<T extends CycleFindUniqueArgs>(args: Prisma.SelectSubset<T, CycleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CycleClient<runtime.Types.Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CycleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CycleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CycleClient<runtime.Types.Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CycleFindFirstArgs>(args?: Prisma.SelectSubset<T, CycleFindFirstArgs<ExtArgs>>): Prisma.Prisma__CycleClient<runtime.Types.Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CycleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CycleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CycleClient<runtime.Types.Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CycleFindManyArgs>(args?: Prisma.SelectSubset<T, CycleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CycleCreateArgs>(args: Prisma.SelectSubset<T, CycleCreateArgs<ExtArgs>>): Prisma.Prisma__CycleClient<runtime.Types.Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CycleCreateManyArgs>(args?: Prisma.SelectSubset<T, CycleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CycleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CycleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CycleDeleteArgs>(args: Prisma.SelectSubset<T, CycleDeleteArgs<ExtArgs>>): Prisma.Prisma__CycleClient<runtime.Types.Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CycleUpdateArgs>(args: Prisma.SelectSubset<T, CycleUpdateArgs<ExtArgs>>): Prisma.Prisma__CycleClient<runtime.Types.Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CycleDeleteManyArgs>(args?: Prisma.SelectSubset<T, CycleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CycleUpdateManyArgs>(args: Prisma.SelectSubset<T, CycleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CycleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CycleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CycleUpsertArgs>(args: Prisma.SelectSubset<T, CycleUpsertArgs<ExtArgs>>): Prisma.Prisma__CycleClient<runtime.Types.Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CycleCountArgs>(args?: Prisma.Subset<T, CycleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CycleCountAggregateOutputType> : number>;
    aggregate<T extends CycleAggregateArgs>(args: Prisma.Subset<T, CycleAggregateArgs>): Prisma.PrismaPromise<GetCycleAggregateType<T>>;
    groupBy<T extends CycleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CycleGroupByArgs['orderBy'];
    } : {
        orderBy?: CycleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CycleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCycleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CycleFieldRefs;
}
export interface Prisma__CycleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    group<T extends Prisma.GroupDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GroupDefaultArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    installments<T extends Prisma.Cycle$installmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cycle$installmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    payouts<T extends Prisma.Cycle$payoutsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cycle$payoutsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CycleFieldRefs {
    readonly id: Prisma.FieldRef<"Cycle", 'String'>;
    readonly groupId: Prisma.FieldRef<"Cycle", 'String'>;
    readonly number: Prisma.FieldRef<"Cycle", 'Int'>;
    readonly startsAt: Prisma.FieldRef<"Cycle", 'DateTime'>;
    readonly endsAt: Prisma.FieldRef<"Cycle", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Cycle", 'CycleStatus'>;
    readonly fundedAt: Prisma.FieldRef<"Cycle", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Cycle", 'DateTime'>;
}
export type CycleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSelect<ExtArgs> | null;
    omit?: Prisma.CycleOmit<ExtArgs> | null;
    include?: Prisma.CycleInclude<ExtArgs> | null;
    where: Prisma.CycleWhereUniqueInput;
};
export type CycleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSelect<ExtArgs> | null;
    omit?: Prisma.CycleOmit<ExtArgs> | null;
    include?: Prisma.CycleInclude<ExtArgs> | null;
    where: Prisma.CycleWhereUniqueInput;
};
export type CycleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSelect<ExtArgs> | null;
    omit?: Prisma.CycleOmit<ExtArgs> | null;
    include?: Prisma.CycleInclude<ExtArgs> | null;
    where?: Prisma.CycleWhereInput;
    orderBy?: Prisma.CycleOrderByWithRelationInput | Prisma.CycleOrderByWithRelationInput[];
    cursor?: Prisma.CycleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CycleScalarFieldEnum | Prisma.CycleScalarFieldEnum[];
};
export type CycleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSelect<ExtArgs> | null;
    omit?: Prisma.CycleOmit<ExtArgs> | null;
    include?: Prisma.CycleInclude<ExtArgs> | null;
    where?: Prisma.CycleWhereInput;
    orderBy?: Prisma.CycleOrderByWithRelationInput | Prisma.CycleOrderByWithRelationInput[];
    cursor?: Prisma.CycleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CycleScalarFieldEnum | Prisma.CycleScalarFieldEnum[];
};
export type CycleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSelect<ExtArgs> | null;
    omit?: Prisma.CycleOmit<ExtArgs> | null;
    include?: Prisma.CycleInclude<ExtArgs> | null;
    where?: Prisma.CycleWhereInput;
    orderBy?: Prisma.CycleOrderByWithRelationInput | Prisma.CycleOrderByWithRelationInput[];
    cursor?: Prisma.CycleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CycleScalarFieldEnum | Prisma.CycleScalarFieldEnum[];
};
export type CycleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSelect<ExtArgs> | null;
    omit?: Prisma.CycleOmit<ExtArgs> | null;
    include?: Prisma.CycleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CycleCreateInput, Prisma.CycleUncheckedCreateInput>;
};
export type CycleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CycleCreateManyInput | Prisma.CycleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CycleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CycleOmit<ExtArgs> | null;
    data: Prisma.CycleCreateManyInput | Prisma.CycleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CycleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CycleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSelect<ExtArgs> | null;
    omit?: Prisma.CycleOmit<ExtArgs> | null;
    include?: Prisma.CycleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CycleUpdateInput, Prisma.CycleUncheckedUpdateInput>;
    where: Prisma.CycleWhereUniqueInput;
};
export type CycleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CycleUpdateManyMutationInput, Prisma.CycleUncheckedUpdateManyInput>;
    where?: Prisma.CycleWhereInput;
    limit?: number;
};
export type CycleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CycleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CycleUpdateManyMutationInput, Prisma.CycleUncheckedUpdateManyInput>;
    where?: Prisma.CycleWhereInput;
    limit?: number;
    include?: Prisma.CycleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CycleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSelect<ExtArgs> | null;
    omit?: Prisma.CycleOmit<ExtArgs> | null;
    include?: Prisma.CycleInclude<ExtArgs> | null;
    where: Prisma.CycleWhereUniqueInput;
    create: Prisma.XOR<Prisma.CycleCreateInput, Prisma.CycleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CycleUpdateInput, Prisma.CycleUncheckedUpdateInput>;
};
export type CycleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSelect<ExtArgs> | null;
    omit?: Prisma.CycleOmit<ExtArgs> | null;
    include?: Prisma.CycleInclude<ExtArgs> | null;
    where: Prisma.CycleWhereUniqueInput;
};
export type CycleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CycleWhereInput;
    limit?: number;
};
export type Cycle$installmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Cycle$payoutsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CycleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleSelect<ExtArgs> | null;
    omit?: Prisma.CycleOmit<ExtArgs> | null;
    include?: Prisma.CycleInclude<ExtArgs> | null;
};
