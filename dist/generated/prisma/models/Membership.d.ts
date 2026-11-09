import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MembershipModel = runtime.Types.Result.DefaultSelection<Prisma.$MembershipPayload>;
export type AggregateMembership = {
    _count: MembershipCountAggregateOutputType | null;
    _avg: MembershipAvgAggregateOutputType | null;
    _sum: MembershipSumAggregateOutputType | null;
    _min: MembershipMinAggregateOutputType | null;
    _max: MembershipMaxAggregateOutputType | null;
};
export type MembershipAvgAggregateOutputType = {
    payoutOrder: number | null;
    rulesVersionAccepted: number | null;
};
export type MembershipSumAggregateOutputType = {
    payoutOrder: number | null;
    rulesVersionAccepted: number | null;
};
export type MembershipMinAggregateOutputType = {
    id: string | null;
    groupId: string | null;
    userId: string | null;
    status: $Enums.MemberStatus | null;
    payoutOrder: number | null;
    acceptedAt: Date | null;
    rulesVersionAccepted: number | null;
    createdAt: Date | null;
};
export type MembershipMaxAggregateOutputType = {
    id: string | null;
    groupId: string | null;
    userId: string | null;
    status: $Enums.MemberStatus | null;
    payoutOrder: number | null;
    acceptedAt: Date | null;
    rulesVersionAccepted: number | null;
    createdAt: Date | null;
};
export type MembershipCountAggregateOutputType = {
    id: number;
    groupId: number;
    userId: number;
    status: number;
    payoutOrder: number;
    acceptedAt: number;
    rulesVersionAccepted: number;
    createdAt: number;
    _all: number;
};
export type MembershipAvgAggregateInputType = {
    payoutOrder?: true;
    rulesVersionAccepted?: true;
};
export type MembershipSumAggregateInputType = {
    payoutOrder?: true;
    rulesVersionAccepted?: true;
};
export type MembershipMinAggregateInputType = {
    id?: true;
    groupId?: true;
    userId?: true;
    status?: true;
    payoutOrder?: true;
    acceptedAt?: true;
    rulesVersionAccepted?: true;
    createdAt?: true;
};
export type MembershipMaxAggregateInputType = {
    id?: true;
    groupId?: true;
    userId?: true;
    status?: true;
    payoutOrder?: true;
    acceptedAt?: true;
    rulesVersionAccepted?: true;
    createdAt?: true;
};
export type MembershipCountAggregateInputType = {
    id?: true;
    groupId?: true;
    userId?: true;
    status?: true;
    payoutOrder?: true;
    acceptedAt?: true;
    rulesVersionAccepted?: true;
    createdAt?: true;
    _all?: true;
};
export type MembershipAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipWhereInput;
    orderBy?: Prisma.MembershipOrderByWithRelationInput | Prisma.MembershipOrderByWithRelationInput[];
    cursor?: Prisma.MembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MembershipCountAggregateInputType;
    _avg?: MembershipAvgAggregateInputType;
    _sum?: MembershipSumAggregateInputType;
    _min?: MembershipMinAggregateInputType;
    _max?: MembershipMaxAggregateInputType;
};
export type GetMembershipAggregateType<T extends MembershipAggregateArgs> = {
    [P in keyof T & keyof AggregateMembership]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMembership[P]> : Prisma.GetScalarType<T[P], AggregateMembership[P]>;
};
export type MembershipGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipWhereInput;
    orderBy?: Prisma.MembershipOrderByWithAggregationInput | Prisma.MembershipOrderByWithAggregationInput[];
    by: Prisma.MembershipScalarFieldEnum[] | Prisma.MembershipScalarFieldEnum;
    having?: Prisma.MembershipScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MembershipCountAggregateInputType | true;
    _avg?: MembershipAvgAggregateInputType;
    _sum?: MembershipSumAggregateInputType;
    _min?: MembershipMinAggregateInputType;
    _max?: MembershipMaxAggregateInputType;
};
export type MembershipGroupByOutputType = {
    id: string;
    groupId: string;
    userId: string;
    status: $Enums.MemberStatus;
    payoutOrder: number | null;
    acceptedAt: Date | null;
    rulesVersionAccepted: number | null;
    createdAt: Date;
    _count: MembershipCountAggregateOutputType | null;
    _avg: MembershipAvgAggregateOutputType | null;
    _sum: MembershipSumAggregateOutputType | null;
    _min: MembershipMinAggregateOutputType | null;
    _max: MembershipMaxAggregateOutputType | null;
};
export type GetMembershipGroupByPayload<T extends MembershipGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MembershipGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MembershipGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MembershipGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MembershipGroupByOutputType[P]>;
}>>;
export type MembershipWhereInput = {
    AND?: Prisma.MembershipWhereInput | Prisma.MembershipWhereInput[];
    OR?: Prisma.MembershipWhereInput[];
    NOT?: Prisma.MembershipWhereInput | Prisma.MembershipWhereInput[];
    id?: Prisma.StringFilter<"Membership"> | string;
    groupId?: Prisma.StringFilter<"Membership"> | string;
    userId?: Prisma.StringFilter<"Membership"> | string;
    status?: Prisma.EnumMemberStatusFilter<"Membership"> | $Enums.MemberStatus;
    payoutOrder?: Prisma.IntNullableFilter<"Membership"> | number | null;
    acceptedAt?: Prisma.DateTimeNullableFilter<"Membership"> | Date | string | null;
    rulesVersionAccepted?: Prisma.IntNullableFilter<"Membership"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Membership"> | Date | string;
    group?: Prisma.XOR<Prisma.GroupScalarRelationFilter, Prisma.GroupWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    installments?: Prisma.InstallmentListRelationFilter;
    payouts?: Prisma.PayoutListRelationFilter;
};
export type MembershipOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    payoutOrder?: Prisma.SortOrderInput | Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    rulesVersionAccepted?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    group?: Prisma.GroupOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    installments?: Prisma.InstallmentOrderByRelationAggregateInput;
    payouts?: Prisma.PayoutOrderByRelationAggregateInput;
};
export type MembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    groupId_userId?: Prisma.MembershipGroupIdUserIdCompoundUniqueInput;
    groupId_payoutOrder?: Prisma.MembershipGroupIdPayoutOrderCompoundUniqueInput;
    AND?: Prisma.MembershipWhereInput | Prisma.MembershipWhereInput[];
    OR?: Prisma.MembershipWhereInput[];
    NOT?: Prisma.MembershipWhereInput | Prisma.MembershipWhereInput[];
    groupId?: Prisma.StringFilter<"Membership"> | string;
    userId?: Prisma.StringFilter<"Membership"> | string;
    status?: Prisma.EnumMemberStatusFilter<"Membership"> | $Enums.MemberStatus;
    payoutOrder?: Prisma.IntNullableFilter<"Membership"> | number | null;
    acceptedAt?: Prisma.DateTimeNullableFilter<"Membership"> | Date | string | null;
    rulesVersionAccepted?: Prisma.IntNullableFilter<"Membership"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Membership"> | Date | string;
    group?: Prisma.XOR<Prisma.GroupScalarRelationFilter, Prisma.GroupWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    installments?: Prisma.InstallmentListRelationFilter;
    payouts?: Prisma.PayoutListRelationFilter;
}, "id" | "groupId_userId" | "groupId_payoutOrder">;
export type MembershipOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    payoutOrder?: Prisma.SortOrderInput | Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    rulesVersionAccepted?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MembershipCountOrderByAggregateInput;
    _avg?: Prisma.MembershipAvgOrderByAggregateInput;
    _max?: Prisma.MembershipMaxOrderByAggregateInput;
    _min?: Prisma.MembershipMinOrderByAggregateInput;
    _sum?: Prisma.MembershipSumOrderByAggregateInput;
};
export type MembershipScalarWhereWithAggregatesInput = {
    AND?: Prisma.MembershipScalarWhereWithAggregatesInput | Prisma.MembershipScalarWhereWithAggregatesInput[];
    OR?: Prisma.MembershipScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MembershipScalarWhereWithAggregatesInput | Prisma.MembershipScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Membership"> | string;
    groupId?: Prisma.StringWithAggregatesFilter<"Membership"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Membership"> | string;
    status?: Prisma.EnumMemberStatusWithAggregatesFilter<"Membership"> | $Enums.MemberStatus;
    payoutOrder?: Prisma.IntNullableWithAggregatesFilter<"Membership"> | number | null;
    acceptedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Membership"> | Date | string | null;
    rulesVersionAccepted?: Prisma.IntNullableWithAggregatesFilter<"Membership"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Membership"> | Date | string;
};
export type MembershipCreateInput = {
    id?: string;
    status?: $Enums.MemberStatus;
    payoutOrder?: number | null;
    acceptedAt?: Date | string | null;
    rulesVersionAccepted?: number | null;
    createdAt?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutMembersInput;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
    installments?: Prisma.InstallmentCreateNestedManyWithoutMembershipInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutMembershipInput;
};
export type MembershipUncheckedCreateInput = {
    id?: string;
    groupId: string;
    userId: string;
    status?: $Enums.MemberStatus;
    payoutOrder?: number | null;
    acceptedAt?: Date | string | null;
    rulesVersionAccepted?: number | null;
    createdAt?: Date | string;
    installments?: Prisma.InstallmentUncheckedCreateNestedManyWithoutMembershipInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutMembershipInput;
};
export type MembershipUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    payoutOrder?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rulesVersionAccepted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutMembersNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
    installments?: Prisma.InstallmentUpdateManyWithoutMembershipNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutMembershipNestedInput;
};
export type MembershipUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    payoutOrder?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rulesVersionAccepted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    installments?: Prisma.InstallmentUncheckedUpdateManyWithoutMembershipNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutMembershipNestedInput;
};
export type MembershipCreateManyInput = {
    id?: string;
    groupId: string;
    userId: string;
    status?: $Enums.MemberStatus;
    payoutOrder?: number | null;
    acceptedAt?: Date | string | null;
    rulesVersionAccepted?: number | null;
    createdAt?: Date | string;
};
export type MembershipUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    payoutOrder?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rulesVersionAccepted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    payoutOrder?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rulesVersionAccepted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipListRelationFilter = {
    every?: Prisma.MembershipWhereInput;
    some?: Prisma.MembershipWhereInput;
    none?: Prisma.MembershipWhereInput;
};
export type MembershipOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MembershipGroupIdUserIdCompoundUniqueInput = {
    groupId: string;
    userId: string;
};
export type MembershipGroupIdPayoutOrderCompoundUniqueInput = {
    groupId: string;
    payoutOrder: number;
};
export type MembershipCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    payoutOrder?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    rulesVersionAccepted?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MembershipAvgOrderByAggregateInput = {
    payoutOrder?: Prisma.SortOrder;
    rulesVersionAccepted?: Prisma.SortOrder;
};
export type MembershipMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    payoutOrder?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    rulesVersionAccepted?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MembershipMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    payoutOrder?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    rulesVersionAccepted?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MembershipSumOrderByAggregateInput = {
    payoutOrder?: Prisma.SortOrder;
    rulesVersionAccepted?: Prisma.SortOrder;
};
export type MembershipScalarRelationFilter = {
    is?: Prisma.MembershipWhereInput;
    isNot?: Prisma.MembershipWhereInput;
};
export type MembershipNullableScalarRelationFilter = {
    is?: Prisma.MembershipWhereInput | null;
    isNot?: Prisma.MembershipWhereInput | null;
};
export type MembershipCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutUserInput, Prisma.MembershipUncheckedCreateWithoutUserInput> | Prisma.MembershipCreateWithoutUserInput[] | Prisma.MembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutUserInput | Prisma.MembershipCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MembershipCreateManyUserInputEnvelope;
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
};
export type MembershipUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutUserInput, Prisma.MembershipUncheckedCreateWithoutUserInput> | Prisma.MembershipCreateWithoutUserInput[] | Prisma.MembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutUserInput | Prisma.MembershipCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MembershipCreateManyUserInputEnvelope;
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
};
export type MembershipUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutUserInput, Prisma.MembershipUncheckedCreateWithoutUserInput> | Prisma.MembershipCreateWithoutUserInput[] | Prisma.MembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutUserInput | Prisma.MembershipCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MembershipUpsertWithWhereUniqueWithoutUserInput | Prisma.MembershipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MembershipCreateManyUserInputEnvelope;
    set?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    disconnect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    delete?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    update?: Prisma.MembershipUpdateWithWhereUniqueWithoutUserInput | Prisma.MembershipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MembershipUpdateManyWithWhereWithoutUserInput | Prisma.MembershipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
};
export type MembershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutUserInput, Prisma.MembershipUncheckedCreateWithoutUserInput> | Prisma.MembershipCreateWithoutUserInput[] | Prisma.MembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutUserInput | Prisma.MembershipCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MembershipUpsertWithWhereUniqueWithoutUserInput | Prisma.MembershipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MembershipCreateManyUserInputEnvelope;
    set?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    disconnect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    delete?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    update?: Prisma.MembershipUpdateWithWhereUniqueWithoutUserInput | Prisma.MembershipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MembershipUpdateManyWithWhereWithoutUserInput | Prisma.MembershipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
};
export type MembershipCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutGroupInput, Prisma.MembershipUncheckedCreateWithoutGroupInput> | Prisma.MembershipCreateWithoutGroupInput[] | Prisma.MembershipUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutGroupInput | Prisma.MembershipCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.MembershipCreateManyGroupInputEnvelope;
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
};
export type MembershipUncheckedCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutGroupInput, Prisma.MembershipUncheckedCreateWithoutGroupInput> | Prisma.MembershipCreateWithoutGroupInput[] | Prisma.MembershipUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutGroupInput | Prisma.MembershipCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.MembershipCreateManyGroupInputEnvelope;
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
};
export type MembershipUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutGroupInput, Prisma.MembershipUncheckedCreateWithoutGroupInput> | Prisma.MembershipCreateWithoutGroupInput[] | Prisma.MembershipUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutGroupInput | Prisma.MembershipCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.MembershipUpsertWithWhereUniqueWithoutGroupInput | Prisma.MembershipUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.MembershipCreateManyGroupInputEnvelope;
    set?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    disconnect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    delete?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    update?: Prisma.MembershipUpdateWithWhereUniqueWithoutGroupInput | Prisma.MembershipUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.MembershipUpdateManyWithWhereWithoutGroupInput | Prisma.MembershipUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
};
export type MembershipUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutGroupInput, Prisma.MembershipUncheckedCreateWithoutGroupInput> | Prisma.MembershipCreateWithoutGroupInput[] | Prisma.MembershipUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutGroupInput | Prisma.MembershipCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.MembershipUpsertWithWhereUniqueWithoutGroupInput | Prisma.MembershipUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.MembershipCreateManyGroupInputEnvelope;
    set?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    disconnect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    delete?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    update?: Prisma.MembershipUpdateWithWhereUniqueWithoutGroupInput | Prisma.MembershipUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.MembershipUpdateManyWithWhereWithoutGroupInput | Prisma.MembershipUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
};
export type EnumMemberStatusFieldUpdateOperationsInput = {
    set?: $Enums.MemberStatus;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type MembershipCreateNestedOneWithoutInstallmentsInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutInstallmentsInput, Prisma.MembershipUncheckedCreateWithoutInstallmentsInput>;
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutInstallmentsInput;
    connect?: Prisma.MembershipWhereUniqueInput;
};
export type MembershipUpdateOneRequiredWithoutInstallmentsNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutInstallmentsInput, Prisma.MembershipUncheckedCreateWithoutInstallmentsInput>;
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutInstallmentsInput;
    upsert?: Prisma.MembershipUpsertWithoutInstallmentsInput;
    connect?: Prisma.MembershipWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MembershipUpdateToOneWithWhereWithoutInstallmentsInput, Prisma.MembershipUpdateWithoutInstallmentsInput>, Prisma.MembershipUncheckedUpdateWithoutInstallmentsInput>;
};
export type MembershipCreateNestedOneWithoutPayoutsInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutPayoutsInput, Prisma.MembershipUncheckedCreateWithoutPayoutsInput>;
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutPayoutsInput;
    connect?: Prisma.MembershipWhereUniqueInput;
};
export type MembershipUpdateOneWithoutPayoutsNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutPayoutsInput, Prisma.MembershipUncheckedCreateWithoutPayoutsInput>;
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutPayoutsInput;
    upsert?: Prisma.MembershipUpsertWithoutPayoutsInput;
    disconnect?: Prisma.MembershipWhereInput | boolean;
    delete?: Prisma.MembershipWhereInput | boolean;
    connect?: Prisma.MembershipWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MembershipUpdateToOneWithWhereWithoutPayoutsInput, Prisma.MembershipUpdateWithoutPayoutsInput>, Prisma.MembershipUncheckedUpdateWithoutPayoutsInput>;
};
export type MembershipCreateWithoutUserInput = {
    id?: string;
    status?: $Enums.MemberStatus;
    payoutOrder?: number | null;
    acceptedAt?: Date | string | null;
    rulesVersionAccepted?: number | null;
    createdAt?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutMembersInput;
    installments?: Prisma.InstallmentCreateNestedManyWithoutMembershipInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutMembershipInput;
};
export type MembershipUncheckedCreateWithoutUserInput = {
    id?: string;
    groupId: string;
    status?: $Enums.MemberStatus;
    payoutOrder?: number | null;
    acceptedAt?: Date | string | null;
    rulesVersionAccepted?: number | null;
    createdAt?: Date | string;
    installments?: Prisma.InstallmentUncheckedCreateNestedManyWithoutMembershipInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutMembershipInput;
};
export type MembershipCreateOrConnectWithoutUserInput = {
    where: Prisma.MembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutUserInput, Prisma.MembershipUncheckedCreateWithoutUserInput>;
};
export type MembershipCreateManyUserInputEnvelope = {
    data: Prisma.MembershipCreateManyUserInput | Prisma.MembershipCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MembershipUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MembershipWhereUniqueInput;
    update: Prisma.XOR<Prisma.MembershipUpdateWithoutUserInput, Prisma.MembershipUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutUserInput, Prisma.MembershipUncheckedCreateWithoutUserInput>;
};
export type MembershipUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MembershipWhereUniqueInput;
    data: Prisma.XOR<Prisma.MembershipUpdateWithoutUserInput, Prisma.MembershipUncheckedUpdateWithoutUserInput>;
};
export type MembershipUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MembershipScalarWhereInput;
    data: Prisma.XOR<Prisma.MembershipUpdateManyMutationInput, Prisma.MembershipUncheckedUpdateManyWithoutUserInput>;
};
export type MembershipScalarWhereInput = {
    AND?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
    OR?: Prisma.MembershipScalarWhereInput[];
    NOT?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
    id?: Prisma.StringFilter<"Membership"> | string;
    groupId?: Prisma.StringFilter<"Membership"> | string;
    userId?: Prisma.StringFilter<"Membership"> | string;
    status?: Prisma.EnumMemberStatusFilter<"Membership"> | $Enums.MemberStatus;
    payoutOrder?: Prisma.IntNullableFilter<"Membership"> | number | null;
    acceptedAt?: Prisma.DateTimeNullableFilter<"Membership"> | Date | string | null;
    rulesVersionAccepted?: Prisma.IntNullableFilter<"Membership"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Membership"> | Date | string;
};
export type MembershipCreateWithoutGroupInput = {
    id?: string;
    status?: $Enums.MemberStatus;
    payoutOrder?: number | null;
    acceptedAt?: Date | string | null;
    rulesVersionAccepted?: number | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
    installments?: Prisma.InstallmentCreateNestedManyWithoutMembershipInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutMembershipInput;
};
export type MembershipUncheckedCreateWithoutGroupInput = {
    id?: string;
    userId: string;
    status?: $Enums.MemberStatus;
    payoutOrder?: number | null;
    acceptedAt?: Date | string | null;
    rulesVersionAccepted?: number | null;
    createdAt?: Date | string;
    installments?: Prisma.InstallmentUncheckedCreateNestedManyWithoutMembershipInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutMembershipInput;
};
export type MembershipCreateOrConnectWithoutGroupInput = {
    where: Prisma.MembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutGroupInput, Prisma.MembershipUncheckedCreateWithoutGroupInput>;
};
export type MembershipCreateManyGroupInputEnvelope = {
    data: Prisma.MembershipCreateManyGroupInput | Prisma.MembershipCreateManyGroupInput[];
    skipDuplicates?: boolean;
};
export type MembershipUpsertWithWhereUniqueWithoutGroupInput = {
    where: Prisma.MembershipWhereUniqueInput;
    update: Prisma.XOR<Prisma.MembershipUpdateWithoutGroupInput, Prisma.MembershipUncheckedUpdateWithoutGroupInput>;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutGroupInput, Prisma.MembershipUncheckedCreateWithoutGroupInput>;
};
export type MembershipUpdateWithWhereUniqueWithoutGroupInput = {
    where: Prisma.MembershipWhereUniqueInput;
    data: Prisma.XOR<Prisma.MembershipUpdateWithoutGroupInput, Prisma.MembershipUncheckedUpdateWithoutGroupInput>;
};
export type MembershipUpdateManyWithWhereWithoutGroupInput = {
    where: Prisma.MembershipScalarWhereInput;
    data: Prisma.XOR<Prisma.MembershipUpdateManyMutationInput, Prisma.MembershipUncheckedUpdateManyWithoutGroupInput>;
};
export type MembershipCreateWithoutInstallmentsInput = {
    id?: string;
    status?: $Enums.MemberStatus;
    payoutOrder?: number | null;
    acceptedAt?: Date | string | null;
    rulesVersionAccepted?: number | null;
    createdAt?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutMembersInput;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutMembershipInput;
};
export type MembershipUncheckedCreateWithoutInstallmentsInput = {
    id?: string;
    groupId: string;
    userId: string;
    status?: $Enums.MemberStatus;
    payoutOrder?: number | null;
    acceptedAt?: Date | string | null;
    rulesVersionAccepted?: number | null;
    createdAt?: Date | string;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutMembershipInput;
};
export type MembershipCreateOrConnectWithoutInstallmentsInput = {
    where: Prisma.MembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutInstallmentsInput, Prisma.MembershipUncheckedCreateWithoutInstallmentsInput>;
};
export type MembershipUpsertWithoutInstallmentsInput = {
    update: Prisma.XOR<Prisma.MembershipUpdateWithoutInstallmentsInput, Prisma.MembershipUncheckedUpdateWithoutInstallmentsInput>;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutInstallmentsInput, Prisma.MembershipUncheckedCreateWithoutInstallmentsInput>;
    where?: Prisma.MembershipWhereInput;
};
export type MembershipUpdateToOneWithWhereWithoutInstallmentsInput = {
    where?: Prisma.MembershipWhereInput;
    data: Prisma.XOR<Prisma.MembershipUpdateWithoutInstallmentsInput, Prisma.MembershipUncheckedUpdateWithoutInstallmentsInput>;
};
export type MembershipUpdateWithoutInstallmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    payoutOrder?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rulesVersionAccepted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutMembersNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutMembershipNestedInput;
};
export type MembershipUncheckedUpdateWithoutInstallmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    payoutOrder?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rulesVersionAccepted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutMembershipNestedInput;
};
export type MembershipCreateWithoutPayoutsInput = {
    id?: string;
    status?: $Enums.MemberStatus;
    payoutOrder?: number | null;
    acceptedAt?: Date | string | null;
    rulesVersionAccepted?: number | null;
    createdAt?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutMembersInput;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
    installments?: Prisma.InstallmentCreateNestedManyWithoutMembershipInput;
};
export type MembershipUncheckedCreateWithoutPayoutsInput = {
    id?: string;
    groupId: string;
    userId: string;
    status?: $Enums.MemberStatus;
    payoutOrder?: number | null;
    acceptedAt?: Date | string | null;
    rulesVersionAccepted?: number | null;
    createdAt?: Date | string;
    installments?: Prisma.InstallmentUncheckedCreateNestedManyWithoutMembershipInput;
};
export type MembershipCreateOrConnectWithoutPayoutsInput = {
    where: Prisma.MembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutPayoutsInput, Prisma.MembershipUncheckedCreateWithoutPayoutsInput>;
};
export type MembershipUpsertWithoutPayoutsInput = {
    update: Prisma.XOR<Prisma.MembershipUpdateWithoutPayoutsInput, Prisma.MembershipUncheckedUpdateWithoutPayoutsInput>;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutPayoutsInput, Prisma.MembershipUncheckedCreateWithoutPayoutsInput>;
    where?: Prisma.MembershipWhereInput;
};
export type MembershipUpdateToOneWithWhereWithoutPayoutsInput = {
    where?: Prisma.MembershipWhereInput;
    data: Prisma.XOR<Prisma.MembershipUpdateWithoutPayoutsInput, Prisma.MembershipUncheckedUpdateWithoutPayoutsInput>;
};
export type MembershipUpdateWithoutPayoutsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    payoutOrder?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rulesVersionAccepted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutMembersNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
    installments?: Prisma.InstallmentUpdateManyWithoutMembershipNestedInput;
};
export type MembershipUncheckedUpdateWithoutPayoutsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    payoutOrder?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rulesVersionAccepted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    installments?: Prisma.InstallmentUncheckedUpdateManyWithoutMembershipNestedInput;
};
export type MembershipCreateManyUserInput = {
    id?: string;
    groupId: string;
    status?: $Enums.MemberStatus;
    payoutOrder?: number | null;
    acceptedAt?: Date | string | null;
    rulesVersionAccepted?: number | null;
    createdAt?: Date | string;
};
export type MembershipUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    payoutOrder?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rulesVersionAccepted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutMembersNestedInput;
    installments?: Prisma.InstallmentUpdateManyWithoutMembershipNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutMembershipNestedInput;
};
export type MembershipUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    payoutOrder?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rulesVersionAccepted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    installments?: Prisma.InstallmentUncheckedUpdateManyWithoutMembershipNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutMembershipNestedInput;
};
export type MembershipUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    payoutOrder?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rulesVersionAccepted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipCreateManyGroupInput = {
    id?: string;
    userId: string;
    status?: $Enums.MemberStatus;
    payoutOrder?: number | null;
    acceptedAt?: Date | string | null;
    rulesVersionAccepted?: number | null;
    createdAt?: Date | string;
};
export type MembershipUpdateWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    payoutOrder?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rulesVersionAccepted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
    installments?: Prisma.InstallmentUpdateManyWithoutMembershipNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutMembershipNestedInput;
};
export type MembershipUncheckedUpdateWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    payoutOrder?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rulesVersionAccepted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    installments?: Prisma.InstallmentUncheckedUpdateManyWithoutMembershipNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutMembershipNestedInput;
};
export type MembershipUncheckedUpdateManyWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus;
    payoutOrder?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rulesVersionAccepted?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipCountOutputType = {
    installments: number;
    payouts: number;
};
export type MembershipCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    installments?: boolean | MembershipCountOutputTypeCountInstallmentsArgs;
    payouts?: boolean | MembershipCountOutputTypeCountPayoutsArgs;
};
export type MembershipCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipCountOutputTypeSelect<ExtArgs> | null;
};
export type MembershipCountOutputTypeCountInstallmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InstallmentWhereInput;
};
export type MembershipCountOutputTypeCountPayoutsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutWhereInput;
};
export type MembershipSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    groupId?: boolean;
    userId?: boolean;
    status?: boolean;
    payoutOrder?: boolean;
    acceptedAt?: boolean;
    rulesVersionAccepted?: boolean;
    createdAt?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    installments?: boolean | Prisma.Membership$installmentsArgs<ExtArgs>;
    payouts?: boolean | Prisma.Membership$payoutsArgs<ExtArgs>;
    _count?: boolean | Prisma.MembershipCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["membership"]>;
export type MembershipSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    groupId?: boolean;
    userId?: boolean;
    status?: boolean;
    payoutOrder?: boolean;
    acceptedAt?: boolean;
    rulesVersionAccepted?: boolean;
    createdAt?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["membership"]>;
export type MembershipSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    groupId?: boolean;
    userId?: boolean;
    status?: boolean;
    payoutOrder?: boolean;
    acceptedAt?: boolean;
    rulesVersionAccepted?: boolean;
    createdAt?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["membership"]>;
export type MembershipSelectScalar = {
    id?: boolean;
    groupId?: boolean;
    userId?: boolean;
    status?: boolean;
    payoutOrder?: boolean;
    acceptedAt?: boolean;
    rulesVersionAccepted?: boolean;
    createdAt?: boolean;
};
export type MembershipOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "groupId" | "userId" | "status" | "payoutOrder" | "acceptedAt" | "rulesVersionAccepted" | "createdAt", ExtArgs["result"]["membership"]>;
export type MembershipInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    installments?: boolean | Prisma.Membership$installmentsArgs<ExtArgs>;
    payouts?: boolean | Prisma.Membership$payoutsArgs<ExtArgs>;
    _count?: boolean | Prisma.MembershipCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MembershipIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MembershipIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $MembershipPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Membership";
    objects: {
        group: Prisma.$GroupPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
        installments: Prisma.$InstallmentPayload<ExtArgs>[];
        payouts: Prisma.$PayoutPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        groupId: string;
        userId: string;
        status: $Enums.MemberStatus;
        payoutOrder: number | null;
        acceptedAt: Date | null;
        rulesVersionAccepted: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["membership"]>;
    composites: {};
};
export type MembershipGetPayload<S extends boolean | null | undefined | MembershipDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MembershipPayload, S>;
export type MembershipCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MembershipCountAggregateInputType | true;
};
export interface MembershipDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Membership'];
        meta: {
            name: 'Membership';
        };
    };
    findUnique<T extends MembershipFindUniqueArgs>(args: Prisma.SelectSubset<T, MembershipFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MembershipFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MembershipFindFirstArgs>(args?: Prisma.SelectSubset<T, MembershipFindFirstArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MembershipFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MembershipFindManyArgs>(args?: Prisma.SelectSubset<T, MembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MembershipCreateArgs>(args: Prisma.SelectSubset<T, MembershipCreateArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MembershipCreateManyArgs>(args?: Prisma.SelectSubset<T, MembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MembershipCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MembershipDeleteArgs>(args: Prisma.SelectSubset<T, MembershipDeleteArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MembershipUpdateArgs>(args: Prisma.SelectSubset<T, MembershipUpdateArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MembershipDeleteManyArgs>(args?: Prisma.SelectSubset<T, MembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MembershipUpdateManyArgs>(args: Prisma.SelectSubset<T, MembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MembershipUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MembershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MembershipUpsertArgs>(args: Prisma.SelectSubset<T, MembershipUpsertArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MembershipCountArgs>(args?: Prisma.Subset<T, MembershipCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MembershipCountAggregateOutputType> : number>;
    aggregate<T extends MembershipAggregateArgs>(args: Prisma.Subset<T, MembershipAggregateArgs>): Prisma.PrismaPromise<GetMembershipAggregateType<T>>;
    groupBy<T extends MembershipGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MembershipGroupByArgs['orderBy'];
    } : {
        orderBy?: MembershipGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MembershipFieldRefs;
}
export interface Prisma__MembershipClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    group<T extends Prisma.GroupDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GroupDefaultArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    installments<T extends Prisma.Membership$installmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Membership$installmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InstallmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    payouts<T extends Prisma.Membership$payoutsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Membership$payoutsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MembershipFieldRefs {
    readonly id: Prisma.FieldRef<"Membership", 'String'>;
    readonly groupId: Prisma.FieldRef<"Membership", 'String'>;
    readonly userId: Prisma.FieldRef<"Membership", 'String'>;
    readonly status: Prisma.FieldRef<"Membership", 'MemberStatus'>;
    readonly payoutOrder: Prisma.FieldRef<"Membership", 'Int'>;
    readonly acceptedAt: Prisma.FieldRef<"Membership", 'DateTime'>;
    readonly rulesVersionAccepted: Prisma.FieldRef<"Membership", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Membership", 'DateTime'>;
}
export type MembershipFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where: Prisma.MembershipWhereUniqueInput;
};
export type MembershipFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where: Prisma.MembershipWhereUniqueInput;
};
export type MembershipFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MembershipFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MembershipFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MembershipCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MembershipCreateInput, Prisma.MembershipUncheckedCreateInput>;
};
export type MembershipCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MembershipCreateManyInput | Prisma.MembershipCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MembershipCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    data: Prisma.MembershipCreateManyInput | Prisma.MembershipCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MembershipIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MembershipUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MembershipUpdateInput, Prisma.MembershipUncheckedUpdateInput>;
    where: Prisma.MembershipWhereUniqueInput;
};
export type MembershipUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MembershipUpdateManyMutationInput, Prisma.MembershipUncheckedUpdateManyInput>;
    where?: Prisma.MembershipWhereInput;
    limit?: number;
};
export type MembershipUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MembershipUpdateManyMutationInput, Prisma.MembershipUncheckedUpdateManyInput>;
    where?: Prisma.MembershipWhereInput;
    limit?: number;
    include?: Prisma.MembershipIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MembershipUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where: Prisma.MembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembershipCreateInput, Prisma.MembershipUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MembershipUpdateInput, Prisma.MembershipUncheckedUpdateInput>;
};
export type MembershipDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where: Prisma.MembershipWhereUniqueInput;
};
export type MembershipDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipWhereInput;
    limit?: number;
};
export type Membership$installmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Membership$payoutsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MembershipDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
};
