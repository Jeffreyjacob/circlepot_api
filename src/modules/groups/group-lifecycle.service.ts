import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../../infra/database/database.service";
import {
  CycleStatus,
  GroupStatus,
  MemberStatus,
  Prisma,
} from "../../generated/prisma/client";
import { buildSchedule, ScheduleError } from "./domain/schedule";

const ORDER_LOCK_HOUR = 12;
const HOUR_MS = 60 * 60 * 1000;

function startOfTodayUTC(): Date {
  const now = new Date();
  return new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );
}

@Injectable()
export class GroupLifeCycleService {
  constructor(private readonly prisma: PrismaService) {}

  private async lockGroup(
    tx: Prisma.TransactionClient,
    groupId: string,
    hostId: string
  ) {
    const locked = await tx.$queryRaw<
      { id: string }[]
    >`SELECT id FROM "Group" WHERE id = ${groupId} AND "hostId" = ${hostId} FOR UPDATE`;
    if (locked.length === 0) throw new NotFoundException("Group not found");
    return tx.group.findUniqueOrThrow({ where: { id: groupId } });
  }

  async setOrder(hostId: string, groupId: string, membershipIds: string[]) {
    return this.prisma.$transaction(async (tx) => {
      const group = await this.lockGroup(tx, groupId, hostId);
      if (
        group.status !== GroupStatus.OPEN &&
        group.status !== GroupStatus.ACTIVE
      ) {
        throw new ConflictException(
          "The order of this group can no longer be changed"
        );
      }

      const members = await tx.membership.findMany({
        where: { groupId, status: MemberStatus.ACCEPTED },
        select: { id: true, payoutOrder: true },
      });

      const known = new Set(members.map((m) => m.id));
      if (
        membershipIds.length !== members.length ||
        !membershipIds.every((id) => known.has(id))
      ) {
        throw new BadRequestException(
          "This list must contain every accepted member exactly once"
        );
      }

      let lockedCount = 0;
      if (group.status === GroupStatus.ACTIVE) {
        const horizon = new Date(Date.now() + ORDER_LOCK_HOUR * HOUR_MS);
        const frozen = await tx.cycle.findMany({
          where: {
            groupId,
            OR: [
              { status: { in: [CycleStatus.FUNDED, CycleStatus.PAID_OUT] } },
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
          throw new ConflictException(
            `Position 1 to ${lockedCount} are locked: a payout is done, due, or within ${ORDER_LOCK_HOUR} hours`
          );
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

  async start(hostId: string, groupId: string) {
    return this.prisma.$transaction(async (tx) => {
      const group = await this.lockGroup(tx, groupId, hostId);
      if (group.status !== GroupStatus.OPEN) {
        throw new ConflictException(
          "this group has already started or was a closed"
        );
      }

      const memebers = await tx.membership.findMany({
        where: { groupId, status: MemberStatus.ACCEPTED },
        orderBy: { payoutOrder: "asc" },
        select: { id: true, payoutOrder: true },
      });

      if (memebers.length !== group.seats) {
        throw new ConflictException(
          `All ${group.seats} seats must be filled (${memebers.length} so far)`
        );
      }

      if (memebers.some((m, i) => m.payoutOrder !== i + 1)) {
        throw new ConflictException(
          "Set the payout order for every member first"
        );
      }

      if (group.startDate < startOfTodayUTC()) {
        throw new ConflictException(
          "The start date has passed. Cancel this group and create a new one"
        );
      }

      // TODO (Paystack chunk): every member must have a verified paypout account

      let schedule;
      try {
        schedule = buildSchedule({
          potKobo: group.potKobo,
          seats: group.seats,
          frequency: group.frequency,
          startDate: group.startDate,
          endDate: group.endDate,
        });
      } catch (error: any) {
        if (error instanceof ScheduleError)
          throw new ConflictException(error.message);
        throw error;
      }

      for (const cycle of schedule.cycles) {
        await tx.cycle.create({
          data: {
            groupId,
            number: cycle.number,
            startsAt: cycle.startsAt,
            endsAt: cycle.endsAt,
            status: CycleStatus.UPCOMING,
            installments: {
              createMany: {
                data: memebers.flatMap((m) =>
                  cycle.installments.map((i) => ({
                    membershipId: m.id,
                    sequence: i.sequence,
                    amountKobo: i.amountKobo,
                    dueAt: i.dueAt,
                  }))
                ),
              },
            },
          },
        });
      }

      await tx.group.update({
        where: { id: groupId },
        data: { status: GroupStatus.ACTIVE },
      });

      const perCycle = schedule.cycles[0].installments.length;
      return {
        status: GroupStatus.ACTIVE,
        cycle: schedule.cycles.length,
        installments: schedule.cycles.length * memebers.length * perCycle,
      };
    });
  }

  async cancel(hostId: string, groupId: string) {
    return this.prisma.$transaction(async (tx) => {
      const group = await this.lockGroup(tx, groupId, hostId);
      if (group.status !== GroupStatus.OPEN) {
        throw new ConflictException(
          "Only group that have not started can be cancelled"
        );
      }
      await tx.group.update({
        where: { id: groupId },
        data: { status: GroupStatus.CANCELLED },
      });
      await tx.invite.updateMany({
        where: { groupId, acceptedAt: null, declinedAt: null },
        data: { expiresAt: new Date() },
      });

      return { status: GroupStatus.CANCELLED };
    });
  }
}
