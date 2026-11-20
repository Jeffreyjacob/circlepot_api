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
exports.InviteService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../infra/database/database.service");
const config_1 = require("@nestjs/config");
const mail_queue_service_1 = require("../mail/mail.queue.service");
const enums_1 = require("../../generated/prisma/enums");
const INVITE_TTL_MS = 7 * 24 * 60 * 60 * 1000;
let InviteService = class InviteService {
    prisma;
    config;
    mailQueue;
    constructor(prisma, config, mailQueue) {
        this.prisma = prisma;
        this.config = config;
        this.mailQueue = mailQueue;
    }
    async invite(hostId, groupId, email) {
        const group = await this.prisma.group.findFirst({
            where: { id: groupId, hostId },
            select: {
                id: true,
                name: true,
                potKobo: true,
                seats: true,
                frequency: true,
                status: true,
                host: { select: { name: true, email: true } },
            },
        });
        if (!group)
            throw new common_1.NotFoundException("Group not found");
        if (group.status !== enums_1.GroupStatus.OPEN) {
            throw new common_1.ConflictException("This group is no longer open for invites");
        }
        if (email === group.host.email)
            throw new common_1.BadRequestException("You are already in this group");
        const now = new Date();
        const existingUser = await this.prisma.user.findUnique({
            where: { email },
            select: { id: true },
        });
        if (existingUser) {
            const member = await this.prisma.membership.findUnique({
                where: { groupId_userId: { groupId, userId: existingUser.id } },
                select: { status: true },
            });
            if (member?.status === enums_1.MemberStatus.ACCEPTED) {
                throw new common_1.ConflictException("This person is already in the group");
            }
        }
        const [accepted, pending] = await Promise.all([
            this.prisma.membership.count({
                where: { groupId, status: enums_1.MemberStatus.ACCEPTED },
            }),
            this.prisma.invite.count({
                where: {
                    groupId,
                    acceptedAt: null,
                    declinedAt: null,
                    expiresAt: { gt: now },
                    NOT: { email },
                },
            }),
        ]);
        if (accepted + pending >= group.seats) {
            throw new common_1.ConflictException("Every seat is taken or has a pending invite");
        }
        const expiresAt = new Date(now.getTime() + INVITE_TTL_MS);
        const invite = await this.prisma.invite.upsert({
            where: { groupId_email: { groupId, email } },
            create: { groupId, email, expiresAt },
            update: { expiresAt, declinedAt: null, acceptedAt: null },
            select: { id: true, email: true, expiresAt: true },
        });
        await this.mailQueue.enqueue({
            template: "group-invite",
            to: email,
            inviterName: group.host.name,
            groupName: group.name,
            potKobo: group.potKobo,
            seats: group.seats,
            frequency: group.frequency,
            url: `${this.config.getOrThrow("FRONTEND_URL")}/invites`,
        });
        return invite;
    }
    async listForHost(hostId, groupId) {
        const group = await this.prisma.group.findFirst({
            where: { id: groupId, hostId },
        });
        if (!group)
            throw new common_1.NotFoundException("Group not found");
        return this.prisma.invite.findMany({
            where: { groupId },
            orderBy: { createdAt: "desc" },
            select: {
                id: true,
                email: true,
                expiresAt: true,
                acceptedAt: true,
                declinedAt: true,
                createdAt: true,
            },
        });
    }
    async emailOf(userId) {
        const user = await this.prisma.user.findUniqueOrThrow({
            where: { id: userId },
            select: { email: true },
        });
        return user.email;
    }
    async listMine(userId) {
        const email = await this.emailOf(userId);
        return this.prisma.invite.findMany({
            where: {
                email,
                acceptedAt: null,
                declinedAt: null,
                expiresAt: { gt: new Date() },
            },
            orderBy: { createdAt: "desc" },
            select: {
                id: true,
                expiresAt: true,
                group: {
                    select: {
                        id: true,
                        potKobo: true,
                        seats: true,
                        frequency: true,
                        startDate: true,
                        endDate: true,
                        heldPercent: true,
                        lateFreeKobo: true,
                        host: { select: { name: true } },
                    },
                },
            },
        });
    }
    async accept(userId, inviteId) {
        const email = await this.emailOf(userId);
        return this.prisma.$transaction(async (tx) => {
            const invite = await tx.invite.findUnique({ where: { id: inviteId } });
            if (!invite || invite.email !== email)
                throw new common_1.NotFoundException("Invite not found");
            if (invite.acceptedAt || invite.declinedAt)
                throw new common_1.ConflictException("This invite has already been answered");
            if (invite.expiresAt <= new Date())
                throw new common_1.BadRequestException("This invite has expired");
            await tx.$queryRaw `SELECT id FROM "Group" WHERE id = ${invite.groupId} FOR UPDATE`;
            const group = await tx.group.findUniqueOrThrow({
                where: { id: invite.groupId },
            });
            if (group.status !== enums_1.GroupStatus.OPEN)
                throw new common_1.ConflictException("This group is no longer open");
            const taken = await tx.membership.count({
                where: { groupId: group.id, status: enums_1.MemberStatus.ACCEPTED },
            });
            if (taken >= group.seats)
                throw new common_1.ConflictException("This group is already full");
            const now = new Date();
            await tx.membership.upsert({
                where: { groupId_userId: { groupId: group.id, userId } },
                create: {
                    groupId: group.id,
                    userId,
                    status: enums_1.MemberStatus.ACCEPTED,
                    acceptedAt: now,
                    rulesVersionAccepted: group.rulesVersion,
                },
                update: {
                    status: enums_1.MemberStatus.ACCEPTED,
                    acceptedAt: now,
                    rulesVersionAccepted: group.rulesVersion,
                },
            });
            await tx.invite.update({
                where: { id: invite.id },
                data: { acceptedAt: now },
            });
            return { groupId: group.id, seatsTaken: taken + 1, seats: group.seats };
        });
    }
    async decline(userId, inviteId) {
        const email = await this.emailOf(userId);
        const result = await this.prisma.invite.updateMany({
            where: { id: inviteId, email, acceptedAt: null, declinedAt: null },
            data: { declinedAt: new Date() },
        });
        if (result.count !== 1)
            throw new common_1.NotFoundException("Invite not found");
        return { message: "Invite declined" };
    }
};
exports.InviteService = InviteService;
exports.InviteService = InviteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.PrismaService,
        config_1.ConfigService,
        mail_queue_service_1.MailQueueService])
], InviteService);
//# sourceMappingURL=invite.service.js.map