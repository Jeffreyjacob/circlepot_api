import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "../../infra/database/database.service";
import {
  CycleStatus,
  GroupStatus,
  InstallmentStatus,
  LedgerType,
  MemberStatus,
  PaymentStatus,
  PayoutType,
  WebhookStatus,
} from "../../generated/prisma/enums";
import { LATE_AFTER_HOURS } from "./cycles.constants";
import { Prisma } from "../../generated/prisma/client";
import { InjectQueue } from "@nestjs/bullmq";
import { WEBHOOK_QUEUE } from "../webhooks/webhooks.constants";
import { Queue } from "bullmq";

const HOUR_MS = 60 * 60 * 1000;
const MINUTES_MS = 60 * 1000;

@Injectable()
export class CycleEngineService {
  private readonly logger = new Logger(CycleEngineService.name);

  constructor(
    private readonly prisma: PrismaService,
    @InjectQueue(WEBHOOK_QUEUE) private readonly webhookQueue: Queue
  ) {}

  async tick(now: Date = new Date()) {
    const started = await this.startDueCycles(now);
    const overdue = await this.markOverdue(now);
    if (started > 0 || overdue > 0) {
      this.logger.log(
        `tick: ${started} cycle(s) started, ${overdue} installment(s) overdue`
      );
    }
  }

  private async safely(
    name: string,
    fn: () => Promise<number>
  ): Promise<number> {
    try {
      return await fn();
    } catch (error: any) {
      this.logger.error(
        `${name}:${error instanceof Error ? error.message : String(error)}`
      );
      return 0;
    }
  }

  private async startDueCycles(now: Date): Promise<number> {
    const result = await this.prisma.cycle.updateMany({
      where: {
        status: CycleStatus.UPCOMING,
        startsAt: { lt: now },
        group: { status: GroupStatus.ACTIVE },
      },
      data: {
        status: CycleStatus.COLLECTING,
      },
    });
    return result.count;
  }

  private async markOverdue(now: Date): Promise<number> {
    const cutOff = new Date(now.getTime() - LATE_AFTER_HOURS * HOUR_MS);

    const groups = await this.prisma.group.findMany({
      where: { status: GroupStatus.ACTIVE },
      select: { id: true, lateFreeKobo: true },
    });

    let total = 0;
    for (const group of groups) {
      const result = await this.prisma.installment.updateMany({
        where: {
          status: InstallmentStatus.PENDING,
          dueAt: { lte: cutOff },
          cycle: { groupId: group.id },
        },
        data: {
          status: InstallmentStatus.OVERDUE,
          lateFeeKobo: group.lateFreeKobo,
        },
      });
      total += result.count;
    }

    return total;
  }

  private async fundCycles(now: Date): Promise<number> {
    const cycles = await this.prisma.cycle.findMany({
      where: {
        status: CycleStatus.COLLECTING,
        group: { status: GroupStatus.ACTIVE },
      },
      orderBy: [{ groupId: "asc" }, { number: "asc" }],
      select: { id: true },
    });

    let funded = 0;
    for (const { id } of cycles) {
      try {
        if ((await this.processCycle(id, now)) === "funded") funded++;
      } catch (error: any) {
        this.logger.error(
          `cycle ${id} failed: ${error instanceof Error ? error.message : String(error)}`
        );
      }
    }
    return funded;
  }

  private async processCycle(
    cycleId: string,
    now: Date
  ): Promise<"funded" | "waiting" | "skipped"> {
    return this.prisma.$transaction(
      async (tx) => {
        const found = await tx.cycle.findUnique({
          where: { id: cycleId },
          select: { groupId: true },
        });

        await tx.$queryRaw`SELECT id FROM "Group" WHERE id = ${found?.groupId} FOR UPDATE`;

        const cycle = await tx.cycle.findFirstOrThrow({
          where: { id: cycleId },
          include: { group: true },
        });

        if (
          cycle.status !== CycleStatus.COLLECTING ||
          cycle.group.status !== GroupStatus.ACTIVE
        ) {
          return "skipped";
        }

        const earlierOpen = await tx.cycle.count({
          where: {
            groupId: cycle.groupId,
            number: { lt: cycle.number },
            status: { in: [CycleStatus.UPCOMING, CycleStatus.COLLECTING] },
          },
        });

        if (earlierOpen > 0) return "waiting";

        if (cycle.endsAt <= now) await this.coverShortFails(tx, cycle, now);
        const unpaid = await tx.installment.count({
          where: { cycleId, status: { not: InstallmentStatus.PAID } },
        });

        if (unpaid > 0) return "waiting";

        const recipient = await tx.membership.findFirst({
          where: {
            groupId: cycle.groupId,
            status: MemberStatus.ACCEPTED,
            payoutOrder: cycle.number,
          },
          select: { id: true, userId: true },
        });

        if (!recipient) {
          this.logger.warn(
            `cycle ${cycleId}: no member hold payout position ${cycle.number}`
          );
          return "waiting";
        }

        const account = await tx.payoutAccount.findFirst({
          where: {
            userId: recipient.userId,
            isDefault: true,
            recipientCode: { not: null },
          },
          select: { id: true },
        });

        if (!account) {
          this.logger.warn(
            `cycle ${cycleId}: the recipient has no default payout`
          );
          return "waiting";
        }

        const payments = await tx.payment.findMany({
          where: { status: PaymentStatus.SUCCESS, installment: { cycleId } },
          select: {
            amountKobo: true,
            installment: { select: { amountKobo: true } },
          },
        });

        const lateFees = payments.reduce(
          (sum, p) =>
            sum +
            Math.max(
              0,
              p.amountKobo - (p.installment?.amountKobo ?? p.amountKobo)
            ),
          0
        );

        const isLast = cycle.number === cycle.group.seats;
        const heldKobo = isLast
          ? 0
          : Math.floor((cycle.group.potKobo * cycle.group.heldPercent) / 100);

        const amountKobo = cycle.group.potKobo - heldKobo + lateFees;

        await tx.payout.create({
          data: {
            type: PayoutType.CYCLE_PAYOUT,
            cycleId,
            membershipId: recipient.id,
            payoutAccountId: account.id,
            amountKobo,
            heldKobo,
            status: PaymentStatus.PENDING,
            reference: `po-${cycleId}`,
          },
        });

        await tx.cycle.update({
          where: { id: cycleId },
          data: { status: CycleStatus.FUNDED, fundedAt: now },
        });

        return "funded";
      },
      {
        timeout: 30_000,
      }
    );
  }

  private async coverShortFails(
    tx: Prisma.TransactionClient,
    cycle: { id: string; groupId: string },
    now: Date
  ) {
    const unpaid = await tx.installment.findMany({
      where: { cycleId: cycle.id, status: { not: InstallmentStatus.PAID } },
      orderBy: [{ membershipId: "asc" }, { sequence: "asc" }],
      select: {
        id: true,
        amountKobo: true,
        membershipId: true,
        membership: { select: { userId: true } },
      },
    });

    const byMember = new Map<
      string,
      { userId: string; items: { id: string; amountKobo: number }[] }
    >();

    for (const i of unpaid) {
      const entry = byMember.get(i.membershipId) ?? {
        userId: i.membership.userId,
        items: [],
      };
      entry.items.push({ id: i.id, amountKobo: i.amountKobo });
      byMember.set(i.membershipId, entry);
    }

    for (const [membershipId, entry] of byMember) {
      const owned = entry.items.reduce((sum, i) => sum + i.amountKobo, 0);
      const held = await this.heldBalance(
        tx,
        cycle.groupId,
        membershipId,
        entry.userId
      );

      if (held < owned) continue;

      for (const item of entry.items) {
        const claimed = await tx.installment.updateMany({
          where: { id: item.id, status: { not: InstallmentStatus.PAID } },
          data: { status: InstallmentStatus.PAID, paidAt: now },
        });

        if (claimed.count !== 1) continue;

        await tx.ledgerEntry.create({
          data: {
            idempotencyKey: `cover:${item.id}`,
            groupId: cycle.groupId,
            userId: entry.userId,
            type: LedgerType.HELD_APPIED,
            amountKobo: item.amountKobo,
          },
        });
        this.logger.warn(`installment ${item.id} covered from held money`);
      }
    }
  }

  private async heldBalance(
    tx: Prisma.TransactionClient,
    groupId: string,
    membershipId: string,
    userId: string
  ): Promise<number> {
    const held = await tx.payout.aggregate({
      _sum: { heldKobo: true },
      where: { membershipId, type: PayoutType.CYCLE_PAYOUT },
    });
    const applied = await tx.ledgerEntry.aggregate({
      _sum: { amountKobo: true },
      where: { groupId, userId, type: LedgerType.HELD_APPIED },
    });

    return (held._sum.heldKobo ?? 0) - (applied._sum.amountKobo ?? 0);
  }

  private async requestStuckWebhooks(now: Date): Promise<number> {
    const stuck = await this.prisma.webhookEvent.findMany({
      where: {
        status: { in: [WebhookStatus.RECIEVED, WebhookStatus.FAILED] },
        recievedAt: { lt: new Date(now.getTime() - 5 * MINUTES_MS) },
        attempts: { lt: 20 },
      },
      orderBy: { recievedAt: "asc" },
      take: 50,
      select: { id: true },
    });

    const bucket = Math.floor(now.getTime() / (10 * MINUTES_MS));
    for (const event of stuck) {
      await this.webhookQueue.add(
        "process",
        {
          webhookEventId: event.id,
        },
        {
          jobId: `${event.id}:sweep:${bucket}`,
          attempts: 8,
          backoff: { type: "exponential", delay: 10_000 },
          removeOnComplete: true,
          removeOnFail: { age: 7 * 24 * 3600 },
        }
      );
    }
    return stuck.length;
  }
}
