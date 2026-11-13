import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import {
  GroupStatus,
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
}
