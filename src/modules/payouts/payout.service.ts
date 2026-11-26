import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "../../infra/database/database.service";
import { Paystackclient } from "../../infra/paystack/paystack.client";
import {
  MAX_PAYOUT_ATTEMPTS,
  PAYOUT_QUEUE,
  RETRY_STEP_MS,
  STALE_PROCESSING_MS,
} from "./payouts.constants";
import { Queue, tryCatch } from "bullmq";
import { InjectQueue } from "@nestjs/bullmq";
import {
  CycleStatus,
  GroupStatus,
  LedgerType,
  MemberStatus,
  PaymentStatus,
  PayoutStatus,
  PayoutType,
} from "../../generated/prisma/enums";
import { Prisma } from "../../generated/prisma/client";
import { randomUUID } from "crypto";
import { PaystackApiError } from "../../infra/paystack/paystack.error";

export type TransferOutCome = "success" | "failed" | "reversed";
export type ApplyResult =
  "applied" | "already_applied" | "unknown_reference" | "pending";

@Injectable()
export class PayoutsService {
  private readonly logger = new Logger(PayoutsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly paystack: Paystackclient,
    @InjectQueue(PAYOUT_QUEUE)
    private readonly queue: Queue<{ payoutId: string }>
  ) {}

  async dispatchDue(now: Date = new Date()): Promise<number> {
    const staleBefore = new Date(now.getTime() - STALE_PROCESSING_MS);
    const due = await this.prisma.payout.findMany({
      where: {
        OR: [
          { status: PayoutStatus.PENDING },
          { status: PayoutStatus.PROCESSING, updatedAt: { lt: staleBefore } },
        ],
      },
      orderBy: { createdAt: "asc" },
      take: 50,
      select: { id: true, attempts: true },
    });

    for (const payout of due) {
      await this.queue.add(
        "send",
        { payoutId: payout.id },
        {
          jobId: `${payout.id}-${payout.attempts}`,
          attempts: 5,
          backoff: { type: "exponential", delay: 30_000 },
          removeOnComplete: true,
          removeOnFail: { age: 7 * 24 * 3600 },
        }
      );
    }
    return due.length;
  }

  async retryFailed(now: Date = new Date()): Promise<number> {
    const failed = await this.prisma.payout.findMany({
      where: {
        status: PayoutStatus.FAILED,
        attempts: { lt: MAX_PAYOUT_ATTEMPTS },
      },
      take: 50,
      select: { id: true, reference: true, attempts: true, updatedAt: true },
    });

    let retried = 0;
    for (const payout of failed) {
      const waitMs = payout.attempts * RETRY_STEP_MS;
      if (now.getTime() - payout.updatedAt.getTime() < waitMs) continue;

      const base = payout.reference.replace(/-r\d+$/, "");
      const result = await this.prisma.payout.updateMany({
        where: {
          id: payout.id,
          status: PayoutStatus.FAILED,
          attempts: payout.attempts,
        },
        data: {
          status: PayoutStatus.PENDING,
          reference: `${base}-r${payout.attempts + 1}`,
        },
      });

      retried += result.count;
    }
    return retried;
  }

  async send(payoutId: string): Promise<void> {
    const staleBefore = new Date(Date.now() - STALE_PROCESSING_MS);

    const claimed = await this.prisma.payout.updateMany({
      where: {
        id: payoutId,
        OR: [
          { status: PayoutStatus.PENDING },
          { status: PayoutStatus.PROCESSING, updatedAt: { lt: staleBefore } },
        ],
      },
      data: { status: PayoutStatus.PROCESSING, attempts: { increment: 1 } },
    });

    if (claimed.count !== 1) return;

    const payout = await this.prisma.payout.findUniqueOrThrow({
      where: { id: payoutId },
      include: { payoutAccount: { select: { recipientCode: true } } },
    });

    const recipientCode = payout.payoutAccount.recipientCode;
    if (!recipientCode) {
      await this.markFailed(
        payout.id,
        "the recipient has no Paystack recipient code"
      );
      return;
    }

    try {
      const existing = await this.paystack.verifyTransfer(payout.reference);
      if (existing) {
        await this.applyKnownStatus(
          payout.id,
          payout.reference,
          existing.status,
          existing.tranfer_code
        );
        return;
      }

      const sent = await this.paystack.initiateTransfer({
        amountKobo: payout.amountKobo,
        recipientCode,
        reference: payout.reference,
        reason: "Circlepot payout",
      });
      await this.applyKnownStatus(
        payout.id,
        payout.reference,
        sent.status,
        sent.tranfer_code
      );
    } catch (error: any) {
      const definite =
        error instanceof PaystackApiError &&
        error.httpStatus >= 400 &&
        error.httpStatus < 500 &&
        error.httpStatus !== 429;

      if (definite) {
        await this.markFailed(payout.id, (error as Error).message);
        return;
      }

      await this.prisma.payout.updateMany({
        where: { id: payout.id, status: PayoutStatus.PROCESSING },
        data: { status: PayoutStatus.PENDING },
      });
      throw error;
    }
  }

  private async applyKnownStatus(
    payoutId: string,
    reference: string,
    status: string,
    transferCode?: string
  ): Promise<ApplyResult> {
    if (status === "success")
      return this.applyTransferResult(reference, "success", transferCode);
    if (status === "failed" || status === "reversed") {
      return this.applyTransferResult(reference, status, transferCode);
    }

    if (status === "otp") {
      this.logger.error(
        `payout ${payoutId}: Paystack is waiting for an OTP. Turn off the transfer OTP requirement for automated payouts.`
      );
    }

    if (transferCode) {
      await this.prisma.payout.updateMany({
        where: { id: payoutId, status: PayoutStatus.PROCESSING },
        data: { providerTransferCode: transferCode },
      });
    }

    return "pending";
  }

  private async markFailed(id: string, reason: string) {
    await this.prisma.payout.updateMany({
      where: { id, status: PayoutStatus.PROCESSING },
      data: {
        status: PayoutStatus.FAILED,
        failureReason: reason.slice(0, 300),
      },
    });
    this.logger.error(`payout ${id} failed: ${reason}`);
  }

  async applyTransferResult(
    reference: string,
    outcome: TransferOutCome,
    transferCode?: string
  ): Promise<ApplyResult> {
    return this.prisma.$transaction(
      async (tx) => {
        const locked = await tx.$queryRaw<
          { id: string }[]
        >`SELECT id FROM "Payout" WHERE reference = ${reference} FOR UPDATE`;

        if (locked.length === 0) return `unknown_reference`;

        const payout = await tx.payout.findUniqueOrThrow({
          where: { id: locked[0].id },
          include: {
            cycle: { include: { group: true } },
            membership: { select: { userId: true } },
          },
        });

        if (!payout.cycle || !payout.membership) return "unknown_reference";

        const groupId = payout.cycle.group.id;
        const userId = payout.membership.userId;
        const isRelease = payout.type === PayoutType.HELD_RELEASE;

        if (outcome === "success") {
          if (payout.status === PayoutStatus.SUCCESS) return "already_applied";

          await tx.payout.update({
            where: { id: payout.id },
            data: {
              status: PayoutStatus.SUCCESS,
              providerTransferCode: transferCode ?? payout.providerTransferCode,
              failureReason: null,
            },
          });

          await tx.ledgerEntry.create({
            data: {
              idempotencyKey: `payout:${payout.id}:${isRelease ? "release" : "paid"}`,
              groupId,
              userId,
              type: isRelease ? LedgerType.HELD_RELEASE : LedgerType.PAYOUT,
              amountKobo: payout.amountKobo,
              paymentId: payout.id,
            },
          });

          if (payout.type === PayoutType.CYCLE_PAYOUT) {
            await tx.cycle.update({
              where: { id: payout.cycleId! },
              data: { status: CycleStatus.PAID_OUT },
            });
            await this.completeGroupIfDone(tx, groupId);
          }
          return "applied";
        }

        const wasPaid = payout.status === PaymentStatus.SUCCESS;
        if (payout.status === PayoutStatus.FAILED && !wasPaid)
          return "already_applied";

        await tx.payout.update({
          where: { id: payout.id },
          data: { status: PayoutStatus.FAILED, failureReason: outcome },
        });

        if (wasPaid) {
          await tx.ledgerEntry.create({
            data: {
              idempotencyKey: `payout:${payout.id}:reversed`,
              groupId,
              userId,
              type: LedgerType.PAYOUT_REVERSED,
              amountKobo: payout.amountKobo,
              paymentId: payout.id,
            },
          });

          if (payout.type === PayoutType.CYCLE_PAYOUT) {
            await tx.cycle.update({
              where: { id: payout.cycleId! },
              data: { status: CycleStatus.FUNDED },
            });
          }

          this.logger.error(
            `payout ${payout.id} was reversed after success: needs manuel review`
          );
        }
        return "applied";
      },
      {
        timeout: 20_000,
      }
    );
  }

  private async completeGroupIfDone(
    tx: Prisma.TransactionClient,
    groupId: string
  ) {
    const group = await tx.group.findUniqueOrThrow({
      where: { id: groupId },
    });
    if (group.status !== GroupStatus.ACTIVE) return;

    const notPaidOut = await tx.cycle.count({
      where: { groupId, status: { not: CycleStatus.PAID_OUT } },
    });
    if (notPaidOut > 0) return;

    const lastCycle = await tx.cycle.findFirstOrThrow({
      where: { groupId },
      orderBy: { number: "desc" },
      select: { id: true },
    });

    const members = await tx.membership.findMany({
      where: { groupId, status: MemberStatus.ACCEPTED },
      select: { id: true, userId: true },
    });

    const release: Prisma.PayoutCreateManyInput[] = [];
    for (const member of members) {
      const held = await this.heldBalance(
        tx,
        groupId,
        member.id,
        member.userId
      );
      if (held <= 0) continue;

      const account = await tx.payoutAccount.findFirst({
        where: {
          userId: member.userId,
          isDefault: true,
          recipientCode: { not: null },
        },
        select: { id: true },
      });

      if (!account) {
        this.logger.error(
          `membership ${member.id} is owed ${held} kobo but has no payout account`
        );
        continue;
      }

      const id = randomUUID();
      release.push({
        id,
        type: PayoutType.HELD_RELEASE,
        cycleId: lastCycle.id,
        membershipId: member.id,
        payoutAccountId: account.id,
        amountKobo: held,
        heldKobo: 0,
        status: PayoutStatus.PENDING,
        reference: `hr-${id}`,
      });
    }

    if (release.length > 0) {
      await tx.payout.createMany({ data: release, skipDuplicates: true });
    }
    await tx.group.update({
      where: { id: groupId },
      data: { status: GroupStatus.COMPLETED },
    });
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
}
