import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "../../infra/database/database.service";
import { Paystackclient } from "../../infra/paystack/paystack.client";
import { PaystackApiError } from "../../infra/paystack/paystack.error";
import {
  InstallmentStatus,
  LedgerType,
  PaymentStatus,
} from "../../generated/prisma/enums";

export type ConfirmOutCome =
  | "confirmed"
  | "already_confirmed"
  | "duplicate"
  | "failed"
  | "amount_mismatch"
  | "not_paid_yet"
  | "unknown_reference";

@Injectable()
export class PaymentConfirmationService {
  private readonly logger = new Logger(PaymentConfirmationService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly paystack: Paystackclient
  ) {}

  async confirmReference(reference: string): Promise<ConfirmOutCome> {
    let verified;
    try {
      verified = await this.paystack.verifyTransaction(reference);
    } catch (error: any) {
      if (error instanceof PaystackApiError && error.httpStatus === 404)
        return "unknown_reference";
      throw error;
    }

    return this.prisma.$transaction(
      async (tx): Promise<ConfirmOutCome> => {
        const locked = await tx.$queryRaw<
          { id: string }[]
        >` SELECT id FROM "Payment" WHERE reference = ${reference} FOR UPDATE`;

        if (locked.length === 0) return "unknown_reference";

        const payment = await tx.payment.findFirstOrThrow({
          where: { id: locked[0].id },
        });

        if (
          payment.status === PaymentStatus.SUCCESS ||
          payment.status === PaymentStatus.DUPLICATE
        ) {
          return "already_confirmed";
        }

        if (verified.status !== "success") {
          if (verified.status === "failed") {
            await tx.payment.update({
              where: { id: payment.id },
              data: { status: PaymentStatus.FAILED },
            });
            return "failed";
          }
          return "not_paid_yet";
        }

        if (
          verified.amount !== payment.amountKobo ||
          verified.currency !== "NGN"
        ) {
          await tx.payment.update({
            where: { id: payment.id },
            data: { status: PaymentStatus.FAILED },
          });
          this.logger.error(
            `Amount mismatch on ${reference}: expected ${payment.amountKobo}, Paystack say ${verified.amount} ${verified.currency}`
          );
          return "amount_mismatch";
        }

        if (!payment.installmentId) return "unknown_reference"; // solo saving deposit come later

        await tx.$queryRaw`SELECT id FROM "Installment" WHERE id = ${payment.installmentId} FOR UPDATE`;

        const installment = await tx.installment.findUniqueOrThrow({
          where: { id: payment.installmentId },
          include: {
            cycle: { select: { groupId: true } },
            membership: { select: { userId: true } },
          },
        });

        const now = new Date();

        if (installment.status === InstallmentStatus.PAID) {
          await tx.payment.update({
            where: { id: payment.id },
            data: {
              status: PaymentStatus.DUPLICATE,
              providerTransactionId: String(verified.id),
              paidAt: now,
            },
          });

          this.logger.warn(
            `Duplicate payment ${reference} for installment ${installment.id}: needs a refund`
          );
          return "duplicate";
        }

        await tx.payment.update({
          where: { id: payment.id },
          data: {
            status: PaymentStatus.SUCCESS,
            providerTransactionId: String(verified.id),
          },
        });

        await tx.installment.update({
          where: { id: installment.id },
          data: { status: InstallmentStatus.PAID, paidAt: now },
        });

        await tx.ledgerEntry.create({
          data: {
            idempotencyKey: `payment:${payment.id}:contribution`,
            groupId: installment.cycle.groupId,
            userId: installment.membership.userId,
            type: LedgerType.CONTRIBUTION,
            amountKobo: installment.amountKobo,
            paymentId: payment.id,
          },
        });

        const lateFreePaid = payment.amountKobo - installment.amountKobo;
        if (lateFreePaid > 0) {
          await tx.ledgerEntry.create({
            data: {
              idempotencyKey: `paymernt: ${payment.id}:late-fee`,
              groupId: installment.cycle.groupId,
              userId: installment.membership.userId,
              type: LedgerType.LATE_FEE,
              amountKobo: lateFreePaid,
              paymentId: payment.id,
            },
          });
        }
        return "confirmed";
      },
      { timeout: 15_000 }
    );
  }
}
