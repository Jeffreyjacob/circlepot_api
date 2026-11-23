import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import {
  GroupStatus,
  InstallmentStatus,
  MemberStatus,
  Prisma,
} from "../../generated/prisma/client";
import { PrismaService } from "../../infra/database/database.service";
import { CreateGroupDto } from "./dto/create-group.dto";
import { buildSchedule, ScheduleError } from "./domain/schedule";
import { CURRENT_RULES_VERSION } from "./group.constants";

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
  _count: { select: { members: { where: { status: MemberStatus.ACCEPTED } } } },
} satisfies Prisma.GroupSelect;

function parseDateOnly(value: string): Date {
  const date = new Date(`${value}T00:00:00.000Z`);
  if (
    Number.isNaN(date.getTime()) ||
    date.toISOString().slice(0, 10) !== value
  ) {
    throw new BadRequestException(`${value} is not a real calender date`);
  }

  return date;
}

function startOfTodayUTC(): Date {
  const now = new Date();
  return new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );
}

@Injectable()
export class GroupService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, dto: CreateGroupDto) {
    const startDate = parseDateOnly(dto.startDate);
    const endDate = parseDateOnly(dto.endDate);

    if (startDate < startOfTodayUTC()) {
      throw new BadRequestException("Start date cannot be in the past");
    }

    let schedule;

    try {
      schedule = buildSchedule({
        potKobo: dto.potKobo,
        seats: dto.seats,
        frequency: dto.frequency,
        startDate,
        endDate,
      });
    } catch (error: any) {
      if (error instanceof ScheduleError)
        throw new BadRequestException(error.message);

      throw error;
    }

    if (dto.lateFeeKobo > schedule.cycleAmountKobo) {
      throw new BadRequestException(
        "late free cannot be larger than on cycle payment"
      );
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
        rulesVersion: CURRENT_RULES_VERSION,
        status: GroupStatus.OPEN,
        members: {
          create: {
            userId,
            status: MemberStatus.ACCEPTED,
            acceptedAt: new Date(),
            rulesVersionAccepted: CURRENT_RULES_VERSION,
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

  listMine(userId: string, scope: "current" | "ended") {
    const statuses =
      scope === "ended"
        ? [GroupStatus.COMPLETED, GroupStatus.CANCELLED]
        : [GroupStatus.OPEN, GroupStatus.ACTIVE];

    return this.prisma.group.findMany({
      where: {
        status: { in: statuses },
        members: { some: { userId, status: MemberStatus.ACCEPTED } },
      },
      select: groupSummarySelect,
      orderBy: { createdAt: "desc" },
      take: 50,
    });
  }

  async getForMember(userId: string, groupId: string) {
    const group = await this.prisma.group.findFirst({
      where: {
        id: groupId,
        members: { some: { userId, status: MemberStatus.ACCEPTED } },
      },
      select: {
        ...groupSummarySelect,
        members: {
          where: { status: MemberStatus.ACCEPTED },
          orderBy: { createdAt: "asc" },
          select: {
            id: true,
            payoutOrder: true,
            user: { select: { id: true, name: true } },
          },
        },
      },
    });

    if (!group) throw new NotFoundException("Group not found");
    return group;
  }

  async getMyInstallments(userId: string, groupId: string) {
    const membership = await this.prisma.membership.findFirst({
      where: { groupId, userId, status: MemberStatus.ACCEPTED },
      select: { id: true, group: { select: { status: true } } },
    });

    if (!membership) throw new NotFoundException("Group not found");

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
    const groupActive = membership.group.status === GroupStatus.ACTIVE;

    return rows.map((r) => ({
      id: r.id,
      cycleNumber: r.cycle.number,
      sequence: r.sequence,
      dueAt: r.dueAt,
      status: r.status,
      paidAt: r.paidAt,
      amountKobo: r.amountKobo,
      lateFeeKobo: r.lateFeeKobo,
      amountDueKobo:
        r.status === InstallmentStatus.PAID ? 0 : r.amountKobo + r.lateFeeKobo,
      payable:
        groupActive &&
        r.status !== InstallmentStatus.PAID &&
        r.cycle.startsAt <= now,
      latestPayment: r.payments[0] ?? null,
    }));
  }

  async getBoard(userId: string, groupId: string) {
    const me = await this.prisma.membership.findFirst({
      where: { groupId, userId, status: MemberStatus.ACCEPTED },
      select: { id: true },
    });
    if (!me) throw new NotFoundException("Group not found");
    const [group, members, cycles] = await Promise.all([
      this.prisma.group.findUniqueOrThrow({
        where: { id: groupId },
        select: { potKobo: true, seats: true },
      }),
      this.prisma.membership.findMany({
        where: { groupId, status: MemberStatus.ACCEPTED },
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
        const stats = new Map<
          string,
          {
            paid: number;
            total: number;
            paidKobo: number;
            owedKobo: number;
            overdue: boolean;
          }
        >();

        for (const i of c.installments) {
          if (i.status === InstallmentStatus.PAID) {
            const s = stats.get(i.membershipId) ?? {
              paid: 0,
              total: 0,
              paidKobo: 0,
              owedKobo: 0,
              overdue: false,
            };

            s.total += 1;
            if (i.status === InstallmentStatus.PAID) {
              s.paid += 1;
              s.paidKobo += i.amountKobo;
            } else {
              s.owedKobo += i.amountKobo;
              if (i.status === InstallmentStatus.OVERDUE) s.overdue = true;
            }
            stats.set(i.membershipId, s);
          }
        }

        const collectedKobo = [...stats.values()].reduce(
          (sum, s) => sum + s.paidKobo,
          0
        );
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
            const state =
              s.total > 0 && s.paid === s.total
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
}
