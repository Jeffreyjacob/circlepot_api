import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "../../infra/database/database.service";
import { Paystackclient } from "../../infra/paystack/paystack.client";

export type ConfirmOutCome =
  | "confirmed"
  | "already_confirmed"
  | "duplicate"
  | "failed"
  | "amount_mismatch"
  | "mot_paid_yet"
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
    } catch (error: any) {}
  }
}
