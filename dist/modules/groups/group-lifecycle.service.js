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
exports.GroupLifeCycleService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../infra/database/database.service");
const client_1 = require("../../generated/prisma/client");
const schedule_1 = require("./domain/schedule");
const ORDER_LOCK_HOUR = 12;
const HOUR_MS = 60 * 60 * 1000;
function startOfTodayUTC() {
    const now = new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}
let GroupLifeCycleService = class GroupLifeCycleService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async lockGroup(tx, groupId, hostId) {
        const locked = await tx.$queryRaw `SELECT id FROM "Group" WHERE id = ${groupId} AND "hostId" = ${hostId} FOR UPDATE`;
        if (locked.length === 0)
            throw new common_1.NotFoundException("Group not found");
        return tx.group.findUniqueOrThrow({ where: { id: groupId } });
    }
    async setOrder(hostId, groupId, membershipIds) {
        return this.prisma.$transaction(async (tx) => {
            const group = await this.lockGroup(tx, groupId, hostId);
            if (group.status !== client_1.GroupStatus.OPEN &&
                group.status !== client_1.GroupStatus.ACTIVE) {
                throw new common_1.ConflictException("The order of this group can no longer be changed");
            }
            const members = await tx.membership.findMany({
                where: { groupId, status: client_1.MemberStatus.ACCEPTED },
                select: { id: true, payoutOrder: true },
            });
            const known = new Set(members.map((m) => m.id));
            if (membershipIds.length !== members.length ||
                !membershipIds.every((id) => known.has(id))) {
                throw new common_1.BadRequestException("This list must contain every accepted member exactly once");
            }
            let lockedCount = 0;
            if (group.status === client_1.GroupStatus.ACTIVE) {
                const horizon = new Date(Date.now() + ORDER_LOCK_HOUR * HOUR_MS);
                const frozen = await tx.cycle.findMany({
                    where: {
                        groupId,
                        OR: [
                            { status: { in: [client_1.CycleStatus.FUNDED, client_1.CycleStatus.PAID_OUT] } },
                            { endsAt: { lte: horizon } },
                        ],
                    },
                    select: { number: true },
                });
                lockedCount = frozen.reduce((max, c) => Math.max(max, c.number), 0);
            }
            const current = new Map(members.map((m) => [m.id, m.payoutOrder]));
            for (let position = 1; position <= lockedCount; position++) {
                if (current.get(membershipIds[position - 1]) !== position) {
                    throw new common_1.ConflictException(`Position 1 to ${lockedCount} are locked: a payout is done, due, or within ${ORDER_LOCK_HOUR} hours`);
                }
            }
            const changes = membershipIds.map((id, index) => ({
                id,
                position: index + 1,
            }));
            if (changes.length > 0) {
                await tx.membership.updateMany({
                    where: { id: { in: changes.map((c) => c.id) } },
                    data: { payoutOrder: null },
                });
                for (const c of changes) {
                    await tx.membership.update({
                        where: { id: c.id },
                        data: { payoutOrder: c.position },
                    });
                }
                return { lockedPositions: lockedCount, order: membershipIds };
            }
        });
    }
    async start(hostId, groupId) {
        return this.prisma.$transaction(async (tx) => {
            const group = await this.lockGroup(tx, groupId, hostId);
            if (group.status !== client_1.GroupStatus.OPEN) {
                throw new common_1.ConflictException("this group has already started or was a closed");
            }
            const memebers = await tx.membership.findMany({
                where: { groupId, status: client_1.MemberStatus.ACCEPTED },
                orderBy: { payoutOrder: "asc" },
                select: { id: true, payoutOrder: true },
            });
            if (memebers.length !== group.seats) {
                throw new common_1.ConflictException(`All ${group.seats} seats must be filled (${memebers.length} so far)`);
            }
            if (memebers.some((m, i) => m.payoutOrder !== i + 1)) {
                throw new common_1.ConflictException("Set the payout order for every member first");
            }
            if (group.startDate < startOfTodayUTC()) {
                throw new common_1.ConflictException("The start date has passed. Cancel this group and create a new one");
            }
            let schedule;
            try {
                schedule = (0, schedule_1.buildSchedule)({
                    potKobo: group.potKobo,
                    seats: group.seats,
                    frequency: group.frequency,
                    startDate: group.startDate,
                    endDate: group.endDate,
                });
            }
            catch (error) {
                if (error instanceof schedule_1.ScheduleError)
                    throw new common_1.ConflictException(error.message);
                throw error;
            }
            for (const cycle of schedule.cycles) {
                await tx.cycle.create({
                    data: {
                        groupId,
                        number: cycle.number,
                        startsAt: cycle.startsAt,
                        endsAt: cycle.endsAt,
                        status: client_1.CycleStatus.UPCOMING,
                        installments: {
                            createMany: {
                                data: memebers.flatMap((m) => cycle.installments.map((i) => ({
                                    membershipId: m.id,
                                    sequence: i.sequence,
                                    amountKobo: i.amountKobo,
                                    dueAt: i.dueAt,
                                }))),
                            },
                        },
                    },
                });
            }
            await tx.group.update({
                where: { id: groupId },
                data: { status: client_1.GroupStatus.ACTIVE },
            });
            const perCycle = schedule.cycles[0].installments.length;
            return {
                status: client_1.GroupStatus.ACTIVE,
                cycle: schedule.cycles.length,
                installments: schedule.cycles.length * memebers.length * perCycle,
            };
        });
    }
    async cancel(hostId, groupId) {
        return this.prisma.$transaction(async (tx) => {
            const group = await this.lockGroup(tx, groupId, hostId);
            if (group.status !== client_1.GroupStatus.OPEN) {
                throw new common_1.ConflictException("Only group that have not started can be cancelled");
            }
            await tx.group.update({
                where: { id: groupId },
                data: { status: client_1.GroupStatus.CANCELLED },
            });
            await tx.invite.updateMany({
                where: { groupId, acceptedAt: null, declinedAt: null },
                data: { expiresAt: new Date() },
            });
            return { status: client_1.GroupStatus.CANCELLED };
        });
    }
};
exports.GroupLifeCycleService = GroupLifeCycleService;
exports.GroupLifeCycleService = GroupLifeCycleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.PrismaService])
], GroupLifeCycleService);
//# sourceMappingURL=group-lifecycle.service.js.map