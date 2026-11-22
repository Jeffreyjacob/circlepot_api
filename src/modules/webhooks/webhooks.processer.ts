import { Processor, WorkerHost } from "@nestjs/bullmq";
import { WEBHOOK_QUEUE } from "./webhooks.constants";
import { Logger } from "@nestjs/common";
import { PrismaService } from "../../infra/database/database.service";
import { PaymentConfirmationService } from "../payments/payment-confirmation.service";
import { Job } from "bullmq";
import { WebhookStatus } from "../../generated/prisma/enums";

interface StoredPayload {
  data?: { reference?: unknown };
}

@Processor(WEBHOOK_QUEUE)
export class WebhooksProcessor extends WorkerHost {
  private readonly logger = new Logger(WebhooksProcessor.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly confirmation: PaymentConfirmationService
  ) {
    super();
  }

  async process(job: Job<{ webhookEventId: string }>): Promise<void> {
    const event = await this.prisma.webhookEvent.findUnique({
      where: { id: job.data.webhookEventId },
    });

    if (!event || event.status === WebhookStatus.PROCESSED) return;

    await this.prisma.webhookEvent.update({
      where: { id: event.id },
      data: { attempts: { increment: 1 } },
    });

    try {
      await this.handle(
        event.eventType,
        event.payload as unknown as StoredPayload
      );
      await this.prisma.webhookEvent.update({
        where: { id: event.id },
        data: { status: WebhookStatus.PROCESSED, processedAt: new Date() },
      });
    } catch (error) {
      await this.prisma.webhookEvent.update({
        where: { id: event.id },
        data: {
          status: WebhookStatus.FAILED,
          error: error instanceof Error ? error.message : String(error),
        },
      });
      throw error;
    }
  }

  private async handle(eventType: string, payload: StoredPayload) {
    switch (eventType) {
      case "charge.success": {
        const reference = payload.data?.reference;
        if (typeof reference !== "string") return;
        const outcome = await this.confirmation.confirmReference(reference);
        this.logger.log(`charge.success handled: ${outcome}`);
        if (outcome === "not_paid_yet") {
          throw new Error(
            "Paystack does not show this payment as succcessful yet"
          );
        }
        return;
      }
      default:
        return; // events we don't use yet (transfer. * arrives with payouts)
    }
  }
}
