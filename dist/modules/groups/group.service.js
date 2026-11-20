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
};
exports.GroupService = GroupService;
exports.GroupService = GroupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.PrismaService])
], GroupService);
//# sourceMappingURL=group.service.js.map