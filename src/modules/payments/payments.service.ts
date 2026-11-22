import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../../infra/database/database.service";
import { Paystackclient } from "../../infra/paystack/paystack.client";
import { ConfigService } from "@nestjs/config";
import { PaymentConfirmationService } from "./payment-confirmation.service";
import {
  GroupStatus,
  InstallmentStatus,
  PaymentStatus,
} from "../../generated/prisma/enums";
import { randomUUID } from "crypto";
import { translate } from "../payout-accounts/payout-account.service";

const REUSE_WINDOW_MS = 25 * 60 * 1000;

type Reserved =
  | {
      kind: "reuse";
      reference: string;
      authorizationUrl: string;
      amountKobo: number;
    }
  | {
      kind: "new";
      paymentId: string;
      amountKobo: number;
      email: string;
      reference: string;
      installmentId: string;
    };

@Injectable()
export class PaymentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly paystack: Paystackclient,
    private readonly config: ConfigService,
    private readonly confirmation: PaymentConfirmationService
  ) {}

  async initiate(userId: string, installmentId: string) {
    const reserved = await this.reserve(userId, installmentId);
    if (reserved.kind === "reuse") {
      return {
        reference: reserved.reference,
        authorizationUrl: reserved.authorizationUrl,
        amountKobo: reserved.amountKobo,
      };
    }

    try {
      const init = await this.paystack.initializeTransaction({
        email: reserved.email,
        amountKobo: reserved.amountKobo,
        reference: reserved.reference,
        callbackUrl: `${this.config.getOrThrow<string>("FRONTENDURL")}/payments/callback`,
        metadata: {
          paymentId: reserved.paymentId,
          installmentId: reserved.installmentId,
        },
      });

      await this.prisma.payment.update({
        where: { id: reserved.paymentId },
        data: { authorizationUrl: init.authorization_url },
      });

      return {
        reference: reserved.reference,
        authorizationUrl: init.authorization_url,
        amountKobo: reserved.amountKobo,
      };
    } catch (error: any) {
      await this.prisma.payment.update({
        where: { id: reserved.paymentId },
        data: { status: PaymentStatus.FAILED },
      });
      translate(error, "We could not start this payment");
    }
  }

  private async reserve(
    userId: string,
    installmentId: string
  ): Promise<Reserved> {
    return this.prisma.$transaction(async (tx) => {
      const locked = await tx.$queryRaw<{ id: string }[]>`
       SELECT i.id FROM "Installment" i
        JOIN "Membership" m ON m.id = i."membershipId"
        WHERE i.id = ${installmentId} AND m."userId" = ${userId}
        FOR UPDATE OF i
      `;
      if (locked.length === 0)
        throw new NotFoundException("Installment not found");

      const installment = await tx.installment.findUniqueOrThrow({
        where: { id: installmentId },
        include: {
          cycle: {
            select: {
              startsAt: true,
              group: {
                select: {
                  status: true,
                },
              },
            },
          },
          membership: { select: { user: { select: { email: true } } } },
        },
      });

      if (installment.cycle.group.status !== GroupStatus.ACTIVE) {
        throw new ConflictException("This group is not running");
      }

      if (installment.status === InstallmentStatus.PAID) {
        throw new ConflictException("Thi installment is already paid");
      }

      if (installment.cycle.startsAt > new Date()) {
        throw new ConflictException("This cycle has not started yet");
      }

      const amountKobo = (installment.amountKobo = installment.lateFeeKobo);
      const recent = await tx.payment.findFirst({
        where: {
          installmentId,
          status: PaymentStatus.INITIATED,
          amountKobo,
          createdAt: { gt: new Date(Date.now() - REUSE_WINDOW_MS) },
        },
        orderBy: { createdAt: "desc" },
      });

      if (recent) {
        if (recent.authorizationUrl) {
          return {
            kind: "reuse",
            reference: recent.reference,
            authorizationUrl: recent.authorizationUrl,
            amountKobo,
          };
        }

        throw new ConflictException("A payment is being prepated. Try again");
      }

      const reference = `cp-${randomUUID()}`;
      const payment = await tx.payment.create({
        data: {
          installmentId,
          reference,
          amountKobo,
          status: PaymentStatus.INITIATED,
        },
      });

      return {
        kind: "new",
        paymentId: payment.id,
        amountKobo,
        reference,
        email: installment.membership.user.email,
        installmentId,
      };
    });
  }

  async getStatus(userId: string, reference: string) {
    const payment = await this.prisma.payment.findFirst({
      where: { reference, installment: { membership: { userId } } },
      select: {
        reference: true,
        status: true,
        amountKobo: true,
        paidAt: true,
        installmentId: true,
      },
    });
    if (!payment) throw new NotFoundException("payment not found");
    return payment;
  }

  async verify(userId: string, reference: string) {
    await this.getStatus(userId, reference);
    try {
      const outcome = await this.confirmation.confirmReference(reference);
      return { outcome, payment: await this.getStatus(userId, reference) };
    } catch (error: any) {
      translate(error, "We could not check this payment");
    }
  }
}
