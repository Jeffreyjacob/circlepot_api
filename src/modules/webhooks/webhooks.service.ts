import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { PrismaService } from "../../infra/database/database.service";
import { ConfigService } from "@nestjs/config";
import { InjectQueue } from "@nestjs/bullmq";
import { WEBHOOK_QUEUE } from "./webhooks.constants";
import { Queue } from "bullmq";
import { createHash, createHmac, timingSafeEqual } from "crypto";
import { Prisma, WebhookStatus } from "../../generated/prisma/client";

interface PaystackWebhook {
  event: string;
  data?: { id?: number | string; reference?: string; transfer_code?: string };
}

@Injectable()
export class WebhooksService {
  private readonly secret: string;
  constructor(
    private readonly prisma: PrismaService,
    config: ConfigService,
    @InjectQueue(WEBHOOK_QUEUE)
    private readonly queue: Queue<{ webhookEventId: string }>
  ) {
    this.secret = config.getOrThrow<string>("PAYSTACK_SECRET_KEY");
  }

  async recievePaystack(
    rawBody: Buffer | undefined,
    signature: string | undefined
  ) {
    if (!rawBody || !this.signatureIsValid(rawBody, signature)) {
      throw new UnauthorizedException();
    }

    let parsed: PaystackWebhook;
    try {
      parsed = JSON.parse(rawBody.toString("utf8")) as PaystackWebhook;
    } catch {
      throw new BadRequestException("Invalid JSON");
    }

    if (typeof parsed.event !== "string")
      throw new BadRequestException("Missing event");

    const eventkey = this.eventKey(parsed, rawBody);

    try {
      const event = await this.prisma.webhookEvent.create({
        data: {
          provider: "paystack",
          eventkey,
          eventType: parsed.event,
          payload: parsed as unknown as Prisma.InputJsonValue,
        },
      });
      await this.enqueue(event.id);
      return { recieved: true };
    } catch (error: any) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        const existing = await this.prisma.webhookEvent.findUnique({
          where: { eventkey },
        });
        // if it was never finished (for example, Redis was down last time), put it in the tray again
        if (existing && existing.status !== WebhookStatus.PROCESSED) {
          await this.enqueue(existing.id);
        }
        return { received: true, duplicate: true };
      }
      throw error;
    }
  }

  private signatureIsValid(
    rawBody: Buffer,
    signature: string | undefined
  ): boolean {
    if (!signature) return false;
    const expected = Buffer.from(
      createHmac("sha512", this.secret).update(rawBody).digest("hex")
    );
    const given = Buffer.from(signature);
    return expected.length === given.length && timingSafeEqual(expected, given);
  }

  private enqueue(webhookEventId: string) {
    return this.queue.add(
      "process",
      { webhookEventId },
      {
        jobId: webhookEventId,
        attempts: 8,
        backoff: { type: "exponential", delay: 10_000 },
        removeOnComplete: true,
        removeOnFail: { age: 7 * 24 * 3600 },
      }
    );
  }

  private eventKey(parsed: PaystackWebhook, rawBody: Buffer): string {
    const id =
      parsed.data?.id ?? parsed.data?.reference ?? parsed.data?.transfer_code;
    return id !== undefined
      ? `${parsed.event}:${id}`
      : `${parsed.event}:sha256:${createHash("sha256").update(rawBody).digest("hex")}`;
  }
}
