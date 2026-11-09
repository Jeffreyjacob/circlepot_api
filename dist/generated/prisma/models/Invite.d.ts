import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InviteModel = runtime.Types.Result.DefaultSelection<Prisma.$InvitePayload>;
export type AggregateInvite = {
    _count: InviteCountAggregateOutputType | null;
    _min: InviteMinAggregateOutputType | null;
    _max: InviteMaxAggregateOutputType | null;
};
export type InviteMinAggregateOutputType = {
    id: string | null;
    groupId: string | null;
    email: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    acceptedAt: Date | null;
    createdAt: Date | null;
};
export type InviteMaxAggregateOutputType = {
    id: string | null;
    groupId: string | null;
    email: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    acceptedAt: Date | null;
    createdAt: Date | null;
};
export type InviteCountAggregateOutputType = {
    id: number;
    groupId: number;
    email: number;
    tokenHash: number;
    expiresAt: number;
    acceptedAt: number;
    createdAt: number;
    _all: number;
};
export type InviteMinAggregateInputType = {
    id?: true;
    groupId?: true;
    email?: true;
    tokenHash?: true;
    expiresAt?: true;
    acceptedAt?: true;
    createdAt?: true;
};
export type InviteMaxAggregateInputType = {
    id?: true;
    groupId?: true;
    email?: true;
    tokenHash?: true;
    expiresAt?: true;
    acceptedAt?: true;
    createdAt?: true;
};
export type InviteCountAggregateInputType = {
    id?: true;
    groupId?: true;
    email?: true;
    tokenHash?: true;
    expiresAt?: true;
    acceptedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type InviteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InviteWhereInput;
    orderBy?: Prisma.InviteOrderByWithRelationInput | Prisma.InviteOrderByWithRelationInput[];
    cursor?: Prisma.InviteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InviteCountAggregateInputType;
    _min?: InviteMinAggregateInputType;
    _max?: InviteMaxAggregateInputType;
};
export type GetInviteAggregateType<T extends InviteAggregateArgs> = {
    [P in keyof T & keyof AggregateInvite]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvite[P]> : Prisma.GetScalarType<T[P], AggregateInvite[P]>;
};
export type InviteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InviteWhereInput;
    orderBy?: Prisma.InviteOrderByWithAggregationInput | Prisma.InviteOrderByWithAggregationInput[];
    by: Prisma.InviteScalarFieldEnum[] | Prisma.InviteScalarFieldEnum;
    having?: Prisma.InviteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InviteCountAggregateInputType | true;
    _min?: InviteMinAggregateInputType;
    _max?: InviteMaxAggregateInputType;
};
export type InviteGroupByOutputType = {
    id: string;
    groupId: string;
    email: string;
    tokenHash: string;
    expiresAt: Date;
    acceptedAt: Date | null;
    createdAt: Date;
    _count: InviteCountAggregateOutputType | null;
    _min: InviteMinAggregateOutputType | null;
    _max: InviteMaxAggregateOutputType | null;
};
export type GetInviteGroupByPayload<T extends InviteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InviteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InviteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InviteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InviteGroupByOutputType[P]>;
}>>;
export type InviteWhereInput = {
    AND?: Prisma.InviteWhereInput | Prisma.InviteWhereInput[];
    OR?: Prisma.InviteWhereInput[];
    NOT?: Prisma.InviteWhereInput | Prisma.InviteWhereInput[];
    id?: Prisma.StringFilter<"Invite"> | string;
    groupId?: Prisma.StringFilter<"Invite"> | string;
    email?: Prisma.StringFilter<"Invite"> | string;
    tokenHash?: Prisma.StringFilter<"Invite"> | string;
    expiresAt?: Prisma.DateTimeFilter<"Invite"> | Date | string;
    acceptedAt?: Prisma.DateTimeNullableFilter<"Invite"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Invite"> | Date | string;
    group?: Prisma.XOR<Prisma.GroupScalarRelationFilter, Prisma.GroupWhereInput>;
};
export type InviteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    group?: Prisma.GroupOrderByWithRelationInput;
};
export type InviteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tokenHash?: string;
    groupId_email?: Prisma.InviteGroupIdEmailCompoundUniqueInput;
    AND?: Prisma.InviteWhereInput | Prisma.InviteWhereInput[];
    OR?: Prisma.InviteWhereInput[];
    NOT?: Prisma.InviteWhereInput | Prisma.InviteWhereInput[];
    groupId?: Prisma.StringFilter<"Invite"> | string;
    email?: Prisma.StringFilter<"Invite"> | string;
    expiresAt?: Prisma.DateTimeFilter<"Invite"> | Date | string;
    acceptedAt?: Prisma.DateTimeNullableFilter<"Invite"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Invite"> | Date | string;
    group?: Prisma.XOR<Prisma.GroupScalarRelationFilter, Prisma.GroupWhereInput>;
}, "id" | "tokenHash" | "groupId_email">;
export type InviteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.InviteCountOrderByAggregateInput;
    _max?: Prisma.InviteMaxOrderByAggregateInput;
    _min?: Prisma.InviteMinOrderByAggregateInput;
};
export type InviteScalarWhereWithAggregatesInput = {
    AND?: Prisma.InviteScalarWhereWithAggregatesInput | Prisma.InviteScalarWhereWithAggregatesInput[];
    OR?: Prisma.InviteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InviteScalarWhereWithAggregatesInput | Prisma.InviteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Invite"> | string;
    groupId?: Prisma.StringWithAggregatesFilter<"Invite"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Invite"> | string;
    tokenHash?: Prisma.StringWithAggregatesFilter<"Invite"> | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"Invite"> | Date | string;
    acceptedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Invite"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Invite"> | Date | string;
};
export type InviteCreateInput = {
    id?: string;
    email: string;
    tokenHash: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    createdAt?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutInvitesInput;
};
export type InviteUncheckedCreateInput = {
    id?: string;
    groupId: string;
    email: string;
    tokenHash: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type InviteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutInvitesNestedInput;
};
export type InviteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InviteCreateManyInput = {
    id?: string;
    groupId: string;
    email: string;
    tokenHash: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type InviteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InviteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InviteListRelationFilter = {
    every?: Prisma.InviteWhereInput;
    some?: Prisma.InviteWhereInput;
    none?: Prisma.InviteWhereInput;
};
export type InviteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InviteGroupIdEmailCompoundUniqueInput = {
    groupId: string;
    email: string;
};
export type InviteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InviteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InviteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InviteCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.InviteCreateWithoutGroupInput, Prisma.InviteUncheckedCreateWithoutGroupInput> | Prisma.InviteCreateWithoutGroupInput[] | Prisma.InviteUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.InviteCreateOrConnectWithoutGroupInput | Prisma.InviteCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.InviteCreateManyGroupInputEnvelope;
    connect?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
};
export type InviteUncheckedCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.InviteCreateWithoutGroupInput, Prisma.InviteUncheckedCreateWithoutGroupInput> | Prisma.InviteCreateWithoutGroupInput[] | Prisma.InviteUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.InviteCreateOrConnectWithoutGroupInput | Prisma.InviteCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.InviteCreateManyGroupInputEnvelope;
    connect?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
};
export type InviteUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.InviteCreateWithoutGroupInput, Prisma.InviteUncheckedCreateWithoutGroupInput> | Prisma.InviteCreateWithoutGroupInput[] | Prisma.InviteUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.InviteCreateOrConnectWithoutGroupInput | Prisma.InviteCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.InviteUpsertWithWhereUniqueWithoutGroupInput | Prisma.InviteUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.InviteCreateManyGroupInputEnvelope;
    set?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    disconnect?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    delete?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    connect?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    update?: Prisma.InviteUpdateWithWhereUniqueWithoutGroupInput | Prisma.InviteUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.InviteUpdateManyWithWhereWithoutGroupInput | Prisma.InviteUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.InviteScalarWhereInput | Prisma.InviteScalarWhereInput[];
};
export type InviteUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.InviteCreateWithoutGroupInput, Prisma.InviteUncheckedCreateWithoutGroupInput> | Prisma.InviteCreateWithoutGroupInput[] | Prisma.InviteUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.InviteCreateOrConnectWithoutGroupInput | Prisma.InviteCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.InviteUpsertWithWhereUniqueWithoutGroupInput | Prisma.InviteUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.InviteCreateManyGroupInputEnvelope;
    set?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    disconnect?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    delete?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    connect?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    update?: Prisma.InviteUpdateWithWhereUniqueWithoutGroupInput | Prisma.InviteUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.InviteUpdateManyWithWhereWithoutGroupInput | Prisma.InviteUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.InviteScalarWhereInput | Prisma.InviteScalarWhereInput[];
};
export type InviteCreateWithoutGroupInput = {
    id?: string;
    email: string;
    tokenHash: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type InviteUncheckedCreateWithoutGroupInput = {
    id?: string;
    email: string;
    tokenHash: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type InviteCreateOrConnectWithoutGroupInput = {
    where: Prisma.InviteWhereUniqueInput;
    create: Prisma.XOR<Prisma.InviteCreateWithoutGroupInput, Prisma.InviteUncheckedCreateWithoutGroupInput>;
};
export type InviteCreateManyGroupInputEnvelope = {
    data: Prisma.InviteCreateManyGroupInput | Prisma.InviteCreateManyGroupInput[];
    skipDuplicates?: boolean;
};
export type InviteUpsertWithWhereUniqueWithoutGroupInput = {
    where: Prisma.InviteWhereUniqueInput;
    update: Prisma.XOR<Prisma.InviteUpdateWithoutGroupInput, Prisma.InviteUncheckedUpdateWithoutGroupInput>;
    create: Prisma.XOR<Prisma.InviteCreateWithoutGroupInput, Prisma.InviteUncheckedCreateWithoutGroupInput>;
};
export type InviteUpdateWithWhereUniqueWithoutGroupInput = {
    where: Prisma.InviteWhereUniqueInput;
    data: Prisma.XOR<Prisma.InviteUpdateWithoutGroupInput, Prisma.InviteUncheckedUpdateWithoutGroupInput>;
};
export type InviteUpdateManyWithWhereWithoutGroupInput = {
    where: Prisma.InviteScalarWhereInput;
    data: Prisma.XOR<Prisma.InviteUpdateManyMutationInput, Prisma.InviteUncheckedUpdateManyWithoutGroupInput>;
};
export type InviteScalarWhereInput = {
    AND?: Prisma.InviteScalarWhereInput | Prisma.InviteScalarWhereInput[];
    OR?: Prisma.InviteScalarWhereInput[];
    NOT?: Prisma.InviteScalarWhereInput | Prisma.InviteScalarWhereInput[];
    id?: Prisma.StringFilter<"Invite"> | string;
    groupId?: Prisma.StringFilter<"Invite"> | string;
    email?: Prisma.StringFilter<"Invite"> | string;
    tokenHash?: Prisma.StringFilter<"Invite"> | string;
    expiresAt?: Prisma.DateTimeFilter<"Invite"> | Date | string;
    acceptedAt?: Prisma.DateTimeNullableFilter<"Invite"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Invite"> | Date | string;
};
export type InviteCreateManyGroupInput = {
    id?: string;
    email: string;
    tokenHash: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type InviteUpdateWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InviteUncheckedUpdateWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InviteUncheckedUpdateManyWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InviteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    groupId?: boolean;
    email?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    acceptedAt?: boolean;
    createdAt?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invite"]>;
export type InviteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    groupId?: boolean;
    email?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    acceptedAt?: boolean;
    createdAt?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invite"]>;
export type InviteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    groupId?: boolean;
    email?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    acceptedAt?: boolean;
    createdAt?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invite"]>;
export type InviteSelectScalar = {
    id?: boolean;
    groupId?: boolean;
    email?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    acceptedAt?: boolean;
    createdAt?: boolean;
};
export type InviteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "groupId" | "email" | "tokenHash" | "expiresAt" | "acceptedAt" | "createdAt", ExtArgs["result"]["invite"]>;
export type InviteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
};
export type InviteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
};
export type InviteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
};
export type $InvitePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Invite";
    objects: {
        group: Prisma.$GroupPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        groupId: string;
        email: string;
        tokenHash: string;
        expiresAt: Date;
        acceptedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["invite"]>;
    composites: {};
};
export type InviteGetPayload<S extends boolean | null | undefined | InviteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvitePayload, S>;
export type InviteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InviteCountAggregateInputType | true;
};
export interface InviteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Invite'];
        meta: {
            name: 'Invite';
        };
    };
    findUnique<T extends InviteFindUniqueArgs>(args: Prisma.SelectSubset<T, InviteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InviteClient<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InviteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InviteClient<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InviteFindFirstArgs>(args?: Prisma.SelectSubset<T, InviteFindFirstArgs<ExtArgs>>): Prisma.Prisma__InviteClient<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InviteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InviteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InviteClient<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InviteFindManyArgs>(args?: Prisma.SelectSubset<T, InviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InviteCreateArgs>(args: Prisma.SelectSubset<T, InviteCreateArgs<ExtArgs>>): Prisma.Prisma__InviteClient<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InviteCreateManyArgs>(args?: Prisma.SelectSubset<T, InviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InviteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InviteDeleteArgs>(args: Prisma.SelectSubset<T, InviteDeleteArgs<ExtArgs>>): Prisma.Prisma__InviteClient<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InviteUpdateArgs>(args: Prisma.SelectSubset<T, InviteUpdateArgs<ExtArgs>>): Prisma.Prisma__InviteClient<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InviteDeleteManyArgs>(args?: Prisma.SelectSubset<T, InviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InviteUpdateManyArgs>(args: Prisma.SelectSubset<T, InviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InviteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InviteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InviteUpsertArgs>(args: Prisma.SelectSubset<T, InviteUpsertArgs<ExtArgs>>): Prisma.Prisma__InviteClient<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InviteCountArgs>(args?: Prisma.Subset<T, InviteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InviteCountAggregateOutputType> : number>;
    aggregate<T extends InviteAggregateArgs>(args: Prisma.Subset<T, InviteAggregateArgs>): Prisma.PrismaPromise<GetInviteAggregateType<T>>;
    groupBy<T extends InviteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InviteGroupByArgs['orderBy'];
    } : {
        orderBy?: InviteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InviteFieldRefs;
}
export interface Prisma__InviteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    group<T extends Prisma.GroupDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GroupDefaultArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InviteFieldRefs {
    readonly id: Prisma.FieldRef<"Invite", 'String'>;
    readonly groupId: Prisma.FieldRef<"Invite", 'String'>;
    readonly email: Prisma.FieldRef<"Invite", 'String'>;
    readonly tokenHash: Prisma.FieldRef<"Invite", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"Invite", 'DateTime'>;
    readonly acceptedAt: Prisma.FieldRef<"Invite", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Invite", 'DateTime'>;
}
export type InviteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InviteSelect<ExtArgs> | null;
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    include?: Prisma.InviteInclude<ExtArgs> | null;
    where: Prisma.InviteWhereUniqueInput;
};
export type InviteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InviteSelect<ExtArgs> | null;
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    include?: Prisma.InviteInclude<ExtArgs> | null;
    where: Prisma.InviteWhereUniqueInput;
};
export type InviteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InviteSelect<ExtArgs> | null;
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    include?: Prisma.InviteInclude<ExtArgs> | null;
    where?: Prisma.InviteWhereInput;
    orderBy?: Prisma.InviteOrderByWithRelationInput | Prisma.InviteOrderByWithRelationInput[];
    cursor?: Prisma.InviteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InviteScalarFieldEnum | Prisma.InviteScalarFieldEnum[];
};
export type InviteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InviteSelect<ExtArgs> | null;
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    include?: Prisma.InviteInclude<ExtArgs> | null;
    where?: Prisma.InviteWhereInput;
    orderBy?: Prisma.InviteOrderByWithRelationInput | Prisma.InviteOrderByWithRelationInput[];
    cursor?: Prisma.InviteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InviteScalarFieldEnum | Prisma.InviteScalarFieldEnum[];
};
export type InviteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InviteSelect<ExtArgs> | null;
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    include?: Prisma.InviteInclude<ExtArgs> | null;
    where?: Prisma.InviteWhereInput;
    orderBy?: Prisma.InviteOrderByWithRelationInput | Prisma.InviteOrderByWithRelationInput[];
    cursor?: Prisma.InviteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InviteScalarFieldEnum | Prisma.InviteScalarFieldEnum[];
};
export type InviteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InviteSelect<ExtArgs> | null;
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    include?: Prisma.InviteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InviteCreateInput, Prisma.InviteUncheckedCreateInput>;
};
export type InviteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InviteCreateManyInput | Prisma.InviteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InviteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InviteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    data: Prisma.InviteCreateManyInput | Prisma.InviteCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InviteIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InviteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InviteSelect<ExtArgs> | null;
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    include?: Prisma.InviteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InviteUpdateInput, Prisma.InviteUncheckedUpdateInput>;
    where: Prisma.InviteWhereUniqueInput;
};
export type InviteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InviteUpdateManyMutationInput, Prisma.InviteUncheckedUpdateManyInput>;
    where?: Prisma.InviteWhereInput;
    limit?: number;
};
export type InviteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InviteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InviteUpdateManyMutationInput, Prisma.InviteUncheckedUpdateManyInput>;
    where?: Prisma.InviteWhereInput;
    limit?: number;
    include?: Prisma.InviteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InviteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InviteSelect<ExtArgs> | null;
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    include?: Prisma.InviteInclude<ExtArgs> | null;
    where: Prisma.InviteWhereUniqueInput;
    create: Prisma.XOR<Prisma.InviteCreateInput, Prisma.InviteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InviteUpdateInput, Prisma.InviteUncheckedUpdateInput>;
};
export type InviteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InviteSelect<ExtArgs> | null;
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    include?: Prisma.InviteInclude<ExtArgs> | null;
    where: Prisma.InviteWhereUniqueInput;
};
export type InviteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InviteWhereInput;
    limit?: number;
};
export type InviteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InviteSelect<ExtArgs> | null;
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    include?: Prisma.InviteInclude<ExtArgs> | null;
};
