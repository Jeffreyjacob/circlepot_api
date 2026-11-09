import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type EnumFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | Prisma.EnumFrequencyFieldRefInput<$PrismaModel>;
    in?: $Enums.Frequency[] | Prisma.ListEnumFrequencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Frequency[] | Prisma.ListEnumFrequencyFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFrequencyFilter<$PrismaModel> | $Enums.Frequency;
};
export type EnumGroupStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupStatus | Prisma.EnumGroupStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.GroupStatus[] | Prisma.ListEnumGroupStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GroupStatus[] | Prisma.ListEnumGroupStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGroupStatusFilter<$PrismaModel> | $Enums.GroupStatus;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type EnumFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | Prisma.EnumFrequencyFieldRefInput<$PrismaModel>;
    in?: $Enums.Frequency[] | Prisma.ListEnumFrequencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Frequency[] | Prisma.ListEnumFrequencyFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.Frequency;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFrequencyFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFrequencyFilter<$PrismaModel>;
};
export type EnumGroupStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupStatus | Prisma.EnumGroupStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.GroupStatus[] | Prisma.ListEnumGroupStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GroupStatus[] | Prisma.ListEnumGroupStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGroupStatusWithAggregatesFilter<$PrismaModel> | $Enums.GroupStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGroupStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGroupStatusFilter<$PrismaModel>;
};
export type EnumMemberStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | Prisma.EnumMemberStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MemberStatus[] | Prisma.ListEnumMemberStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemberStatus[] | Prisma.ListEnumMemberStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemberStatusFilter<$PrismaModel> | $Enums.MemberStatus;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type EnumMemberStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | Prisma.EnumMemberStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MemberStatus[] | Prisma.ListEnumMemberStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemberStatus[] | Prisma.ListEnumMemberStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemberStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMemberStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMemberStatusFilter<$PrismaModel>;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type EnumCycleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CycleStatus | Prisma.EnumCycleStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CycleStatus[] | Prisma.ListEnumCycleStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CycleStatus[] | Prisma.ListEnumCycleStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCycleStatusFilter<$PrismaModel> | $Enums.CycleStatus;
};
export type EnumCycleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CycleStatus | Prisma.EnumCycleStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CycleStatus[] | Prisma.ListEnumCycleStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CycleStatus[] | Prisma.ListEnumCycleStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCycleStatusWithAggregatesFilter<$PrismaModel> | $Enums.CycleStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCycleStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCycleStatusFilter<$PrismaModel>;
};
export type EnumInstallmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InstallmentStatus | Prisma.EnumInstallmentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InstallmentStatus[] | Prisma.ListEnumInstallmentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InstallmentStatus[] | Prisma.ListEnumInstallmentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInstallmentStatusFilter<$PrismaModel> | $Enums.InstallmentStatus;
};
export type EnumInstallmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InstallmentStatus | Prisma.EnumInstallmentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InstallmentStatus[] | Prisma.ListEnumInstallmentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InstallmentStatus[] | Prisma.ListEnumInstallmentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInstallmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.InstallmentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInstallmentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInstallmentStatusFilter<$PrismaModel>;
};
export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
};
export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
};
export type JsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>, Required<JsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;
export type JsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type EnumWebhookStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookStatus | Prisma.EnumWebhookStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.WebhookStatus[] | Prisma.ListEnumWebhookStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WebhookStatus[] | Prisma.ListEnumWebhookStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWebhookStatusFilter<$PrismaModel> | $Enums.WebhookStatus;
};
export type JsonWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonFilter<$PrismaModel>;
};
export type EnumWebhookStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookStatus | Prisma.EnumWebhookStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.WebhookStatus[] | Prisma.ListEnumWebhookStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WebhookStatus[] | Prisma.ListEnumWebhookStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWebhookStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebhookStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumWebhookStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumWebhookStatusFilter<$PrismaModel>;
};
export type EnumPayoutTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutType | Prisma.EnumPayoutTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutType[] | Prisma.ListEnumPayoutTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutType[] | Prisma.ListEnumPayoutTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutTypeFilter<$PrismaModel> | $Enums.PayoutType;
};
export type EnumPayoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel> | $Enums.PayoutStatus;
};
export type EnumPayoutTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutType | Prisma.EnumPayoutTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutType[] | Prisma.ListEnumPayoutTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutType[] | Prisma.ListEnumPayoutTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutTypeWithAggregatesFilter<$PrismaModel> | $Enums.PayoutType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPayoutTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPayoutTypeFilter<$PrismaModel>;
};
export type EnumPayoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayoutStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel>;
};
export type EnumLedgerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | Prisma.EnumLedgerTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerType[] | Prisma.ListEnumLedgerTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerType[] | Prisma.ListEnumLedgerTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerTypeFilter<$PrismaModel> | $Enums.LedgerType;
};
export type EnumLedgerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | Prisma.EnumLedgerTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerType[] | Prisma.ListEnumLedgerTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerType[] | Prisma.ListEnumLedgerTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLedgerTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLedgerTypeFilter<$PrismaModel>;
};
export type EnumUnlockRuleFilter<$PrismaModel = never> = {
    equals?: $Enums.UnlockRule | Prisma.EnumUnlockRuleFieldRefInput<$PrismaModel>;
    in?: $Enums.UnlockRule[] | Prisma.ListEnumUnlockRuleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UnlockRule[] | Prisma.ListEnumUnlockRuleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUnlockRuleFilter<$PrismaModel> | $Enums.UnlockRule;
};
export type EnumSavingsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SavingsStatus | Prisma.EnumSavingsStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SavingsStatus[] | Prisma.ListEnumSavingsStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SavingsStatus[] | Prisma.ListEnumSavingsStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSavingsStatusFilter<$PrismaModel> | $Enums.SavingsStatus;
};
export type EnumUnlockRuleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnlockRule | Prisma.EnumUnlockRuleFieldRefInput<$PrismaModel>;
    in?: $Enums.UnlockRule[] | Prisma.ListEnumUnlockRuleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UnlockRule[] | Prisma.ListEnumUnlockRuleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUnlockRuleWithAggregatesFilter<$PrismaModel> | $Enums.UnlockRule;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUnlockRuleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUnlockRuleFilter<$PrismaModel>;
};
export type EnumSavingsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SavingsStatus | Prisma.EnumSavingsStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SavingsStatus[] | Prisma.ListEnumSavingsStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SavingsStatus[] | Prisma.ListEnumSavingsStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSavingsStatusWithAggregatesFilter<$PrismaModel> | $Enums.SavingsStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSavingsStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSavingsStatusFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedEnumFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | Prisma.EnumFrequencyFieldRefInput<$PrismaModel>;
    in?: $Enums.Frequency[] | Prisma.ListEnumFrequencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Frequency[] | Prisma.ListEnumFrequencyFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFrequencyFilter<$PrismaModel> | $Enums.Frequency;
};
export type NestedEnumGroupStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupStatus | Prisma.EnumGroupStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.GroupStatus[] | Prisma.ListEnumGroupStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GroupStatus[] | Prisma.ListEnumGroupStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGroupStatusFilter<$PrismaModel> | $Enums.GroupStatus;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedEnumFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | Prisma.EnumFrequencyFieldRefInput<$PrismaModel>;
    in?: $Enums.Frequency[] | Prisma.ListEnumFrequencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Frequency[] | Prisma.ListEnumFrequencyFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.Frequency;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFrequencyFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFrequencyFilter<$PrismaModel>;
};
export type NestedEnumGroupStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupStatus | Prisma.EnumGroupStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.GroupStatus[] | Prisma.ListEnumGroupStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GroupStatus[] | Prisma.ListEnumGroupStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGroupStatusWithAggregatesFilter<$PrismaModel> | $Enums.GroupStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGroupStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGroupStatusFilter<$PrismaModel>;
};
export type NestedEnumMemberStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | Prisma.EnumMemberStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MemberStatus[] | Prisma.ListEnumMemberStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemberStatus[] | Prisma.ListEnumMemberStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemberStatusFilter<$PrismaModel> | $Enums.MemberStatus;
};
export type NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | Prisma.EnumMemberStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MemberStatus[] | Prisma.ListEnumMemberStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemberStatus[] | Prisma.ListEnumMemberStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemberStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMemberStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMemberStatusFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumCycleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CycleStatus | Prisma.EnumCycleStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CycleStatus[] | Prisma.ListEnumCycleStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CycleStatus[] | Prisma.ListEnumCycleStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCycleStatusFilter<$PrismaModel> | $Enums.CycleStatus;
};
export type NestedEnumCycleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CycleStatus | Prisma.EnumCycleStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CycleStatus[] | Prisma.ListEnumCycleStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CycleStatus[] | Prisma.ListEnumCycleStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCycleStatusWithAggregatesFilter<$PrismaModel> | $Enums.CycleStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCycleStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCycleStatusFilter<$PrismaModel>;
};
export type NestedEnumInstallmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InstallmentStatus | Prisma.EnumInstallmentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InstallmentStatus[] | Prisma.ListEnumInstallmentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InstallmentStatus[] | Prisma.ListEnumInstallmentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInstallmentStatusFilter<$PrismaModel> | $Enums.InstallmentStatus;
};
export type NestedEnumInstallmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InstallmentStatus | Prisma.EnumInstallmentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InstallmentStatus[] | Prisma.ListEnumInstallmentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InstallmentStatus[] | Prisma.ListEnumInstallmentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInstallmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.InstallmentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInstallmentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInstallmentStatusFilter<$PrismaModel>;
};
export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
};
export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
};
export type NestedEnumWebhookStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookStatus | Prisma.EnumWebhookStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.WebhookStatus[] | Prisma.ListEnumWebhookStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WebhookStatus[] | Prisma.ListEnumWebhookStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWebhookStatusFilter<$PrismaModel> | $Enums.WebhookStatus;
};
export type NestedJsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumWebhookStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebhookStatus | Prisma.EnumWebhookStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.WebhookStatus[] | Prisma.ListEnumWebhookStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WebhookStatus[] | Prisma.ListEnumWebhookStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWebhookStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebhookStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumWebhookStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumWebhookStatusFilter<$PrismaModel>;
};
export type NestedEnumPayoutTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutType | Prisma.EnumPayoutTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutType[] | Prisma.ListEnumPayoutTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutType[] | Prisma.ListEnumPayoutTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutTypeFilter<$PrismaModel> | $Enums.PayoutType;
};
export type NestedEnumPayoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel> | $Enums.PayoutStatus;
};
export type NestedEnumPayoutTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutType | Prisma.EnumPayoutTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutType[] | Prisma.ListEnumPayoutTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutType[] | Prisma.ListEnumPayoutTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutTypeWithAggregatesFilter<$PrismaModel> | $Enums.PayoutType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPayoutTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPayoutTypeFilter<$PrismaModel>;
};
export type NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayoutStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel>;
};
export type NestedEnumLedgerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | Prisma.EnumLedgerTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerType[] | Prisma.ListEnumLedgerTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerType[] | Prisma.ListEnumLedgerTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerTypeFilter<$PrismaModel> | $Enums.LedgerType;
};
export type NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | Prisma.EnumLedgerTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LedgerType[] | Prisma.ListEnumLedgerTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LedgerType[] | Prisma.ListEnumLedgerTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLedgerTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLedgerTypeFilter<$PrismaModel>;
};
export type NestedEnumUnlockRuleFilter<$PrismaModel = never> = {
    equals?: $Enums.UnlockRule | Prisma.EnumUnlockRuleFieldRefInput<$PrismaModel>;
    in?: $Enums.UnlockRule[] | Prisma.ListEnumUnlockRuleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UnlockRule[] | Prisma.ListEnumUnlockRuleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUnlockRuleFilter<$PrismaModel> | $Enums.UnlockRule;
};
export type NestedEnumSavingsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SavingsStatus | Prisma.EnumSavingsStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SavingsStatus[] | Prisma.ListEnumSavingsStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SavingsStatus[] | Prisma.ListEnumSavingsStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSavingsStatusFilter<$PrismaModel> | $Enums.SavingsStatus;
};
export type NestedEnumUnlockRuleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnlockRule | Prisma.EnumUnlockRuleFieldRefInput<$PrismaModel>;
    in?: $Enums.UnlockRule[] | Prisma.ListEnumUnlockRuleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UnlockRule[] | Prisma.ListEnumUnlockRuleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUnlockRuleWithAggregatesFilter<$PrismaModel> | $Enums.UnlockRule;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUnlockRuleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUnlockRuleFilter<$PrismaModel>;
};
export type NestedEnumSavingsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SavingsStatus | Prisma.EnumSavingsStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SavingsStatus[] | Prisma.ListEnumSavingsStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SavingsStatus[] | Prisma.ListEnumSavingsStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSavingsStatusWithAggregatesFilter<$PrismaModel> | $Enums.SavingsStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSavingsStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSavingsStatusFilter<$PrismaModel>;
};
