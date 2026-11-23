"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const database_service_1 = require("../../infra/database/database.service");
const schedule_1 = require("./domain/schedule");
const group_constants_1 = require("./group.constants");
const groupSummarySelect = {
    id: true,
    name: true,
    potKobo: true,
    seats: true,
    frequency: true,
    startDate: true,
    endDate: true,
    heldPercent: true,
    lateFreeKobo: true,
    status: true,
    hostId: true,
    createdAt: true,
    _count: { select: { members: { where: { status: client_1.MemberStatus.ACCEPTED } } } },
};
function parseDateOnly(value) {
    const date = new Date(`${value}T00:00:00.000Z`);
    if (Number.isNaN(date.getTime()) ||
        date.toISOString().slice(0, 10) !== value) {
        throw new common_1.BadRequestException(`${value} is not a real calender date`);
    }
    return date;
}
function startOfTodayUTC() {
    const now = new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}
let GroupService = class GroupService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, dto) {
        const startDate = parseDateOnly(dto.startDate);
        const endDate = parseDateOnly(dto.endDate);
        if (startDate < startOfTodayUTC()) {
            throw new common_1.BadRequestException("Start date cannot be in the past");
        }
        let schedule;
        try {
            schedule = (0, schedule_1.buildSchedule)({
                potKobo: dto.potKobo,
                seats: dto.seats,
                frequency: dto.frequency,
                startDate,
                endDate,
            });
        }
        catch (error) {
            if (error instanceof schedule_1.ScheduleError)
                throw new common_1.BadRequestException(error.message);
            throw error;
        }
        if (dto.lateFeeKobo > schedule.cycleAmountKobo) {
            throw new common_1.BadRequestException("late free cannot be larger than on cycle payment");
        }
        const group = await this.prisma.group.create({
            data: {
                hostId: userId,
                name: dto.name,
                potKobo: dto.potKobo,
                seats: dto.seats,
                frequency: dto.frequency,
                startDate,
                endDate,
                heldPercent: dto.heldPercent,
                lateFreeKobo: dto.lateFeeKobo,
                rulesVersion: group_constants_1.CURRENT_RULES_VERSION,
                status: client_1.GroupStatus.OPEN,
                members: {
                    create: {
                        userId,
                        status: client_1.MemberStatus.ACCEPTED,
                        acceptedAt: new Date(),
                        rulesVersionAccepted: group_constants_1.CURRENT_RULES_VERSION,
                    },
                },
            },
            select: groupSummarySelect,
        });
        return {
            ...group,
            cycleAmountKobo: schedule.cycleAmountKobo,
            installmentsPerCycle: schedule.cycles[0].installments.length,
        };
    }
    listMine(userId, scope) {
        const statuses = scope === "ended"
            ? [client_1.GroupStatus.COMPLETED, client_1.GroupStatus.CANCELLED]
            : [client_1.GroupStatus.OPEN, client_1.GroupStatus.ACTIVE];
        return this.prisma.group.findMany({
            where: {
                status: { in: statuses },
                members: { some: { userId, status: client_1.MemberStatus.ACCEPTED } },
            },
            select: groupSummarySelect,
            orderBy: { createdAt: "desc" },
            take: 50,
        });
    }
    async getForMember(userId, groupId) {
        const group = await this.prisma.group.findFirst({
            where: {
                id: groupId,
                members: { some: { userId, status: client_1.MemberStatus.ACCEPTED } },
            },
            select: {
                ...groupSummarySelect,
                members: {
                    where: { status: client_1.MemberStatus.ACCEPTED },
                    orderBy: { createdAt: "asc" },
                    select: {
                        id: true,
                        payoutOrder: true,
                        user: { select: { id: true, name: true } },
                    },
                },
            },
        });
        if (!group)
            throw new common_1.NotFoundException("Group not found");
        return group;
    }
    async getMyInstallments(userId, groupId) {
        const membership = await this.prisma.membership.findFirst({
            where: { groupId, userId, status: client_1.MemberStatus.ACCEPTED },
            select: { id: true, group: { select: { status: true } } },
        });
        if (!membership)
            throw new common_1.NotFoundException("Group not found");
        const rows = await this.prisma.installment.findMany({
            where: { membershipId: membership.id },
            orderBy: [{ cycle: { number: "asc" } }, { sequence: "asc" }],
            select: {
                id: true,
                sequence: true,
                amountKobo: true,
                lateFeeKobo: true,
                dueAt: true,
                status: true,
                paidAt: true,
                cycle: { select: { number: true, startsAt: true } },
                payments: {
                    orderBy: { createdAt: "desc" },
                    take: 1,
                    select: { reference: true, status: true, createdAt: true },
                },
            },
        });
        const now = new Date();
        const groupActive = membership.group.status === client_1.GroupStatus.ACTIVE;
        return rows.map((r) => ({
            id: r.id,
            cycleNumber: r.cycle.number,
            sequence: r.sequence,
            dueAt: r.dueAt,
            status: r.status,
            paidAt: r.paidAt,
            amountKobo: r.amountKobo,
            lateFeeKobo: r.lateFeeKobo,
            amountDueKobo: r.status === client_1.InstallmentStatus.PAID ? 0 : r.amountKobo + r.lateFeeKobo,
            payable: groupActive &&
                r.status !== client_1.InstallmentStatus.PAID &&
                r.cycle.startsAt <= now,
            latestPayment: r.payments[0] ?? null,
        }));
    }
    async getBoard(userId, groupId) {
        const me = await this.prisma.membership.findFirst({
            where: { groupId, userId, status: client_1.MemberStatus.ACCEPTED },
            select: { id: true },
        });
        if (!me)
            throw new common_1.NotFoundException("Group not found");
        const [group, members, cycles] = await Promise.all([
            this.prisma.group.findUniqueOrThrow({
                where: { id: groupId },
                select: { potKobo: true, seats: true },
            }),
            this.prisma.membership.findMany({
                where: { groupId, status: client_1.MemberStatus.ACCEPTED },
                orderBy: { payoutOrder: "asc" },
                select: {
                    id: true,
                    payoutOrder: true,
                    user: { select: { name: true } },
                },
            }),
            this.prisma.cycle.findMany({
                where: { groupId },
                orderBy: { number: "asc" },
                select: {
                    number: true,
                    startsAt: true,
                    endsAt: true,
                    status: true,
                    installments: {
                        select: { membershipId: true, amountKobo: true, status: true },
                    },
                },
            }),
        ]);
        return {
            potKobo: group.potKobo,
            seats: group.seats,
            cycles: cycles.map((c) => {
                const stats = new Map();
                for (const i of c.installments) {
                    if (i.status === client_1.InstallmentStatus.PAID) {
                        const s = stats.get(i.membershipId) ?? {
                            paid: 0,
                            total: 0,
                            paidKobo: 0,
                            owedKobo: 0,
                            overdue: false,
                        };
                        s.total += 1;
                        if (i.status === client_1.InstallmentStatus.PAID) {
                            s.paid += 1;
                            s.paidKobo += i.amountKobo;
                        }
                        else {
                            s.owedKobo += i.amountKobo;
                            if (i.status === client_1.InstallmentStatus.OVERDUE)
                                s.overdue = true;
                        }
                        stats.set(i.membershipId, s);
                    }
                }
                const collectedKobo = [...stats.values()].reduce((sum, s) => sum + s.paidKobo, 0);
                const recipient = members.find((m) => m.payoutOrder === c.number);
                return {
                    number: c.number,
                    startsAt: c.startsAt,
                    endsAt: c.endsAt,
                    status: c.status,
                    recipient: recipient
                        ? { membershipId: recipient.id, name: recipient.user.name }
                        : null,
                    targetKobo: group.potKobo,
                    collectedKobo,
                    remainingKobo: group.potKobo - collectedKobo,
                    members: members.map((m) => {
                        const s = stats.get(m.id) ?? {
                            paid: 0,
                            total: 0,
                            paidKobo: 0,
                            owedKobo: 0,
                            overdue: false,
                        };
                        const state = s.total > 0 && s.paid === s.total
                            ? "paid"
                            : s.overdue
                                ? "overdue"
                                : s.paid > 0
                                    ? "partial"
                                    : "pending";
                        return {
                            membershipId: m.id,
                            name: m.user.name,
                            installmentsPaid: s.paid,
                            installmentsTotal: s.total,
                            paidKobo: s.paidKobo,
                            owedKobo: s.owedKobo,
                            state,
                        };
                    }),
                };
            }),
        };
    }
};
exports.GroupService = GroupService;
exports.GroupService = GroupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.PrismaService])
], GroupService);
//# sourceMappingURL=group.service.js.map