import { Module } from "@nestjs/common";
import { DatabaseModue } from "../../infra/database/database.modules";
import { PaymentsModule } from "../payments/payments.module";
import { BullModule } from "@nestjs/bullmq";
import { WEBHOOK_QUEUE } from "./webhooks.constants";
import { WebhooksController } from "./webhook.controller";
import { WebhooksService } from "./webhooks.service";
import { WebhooksProcessor } from "./webhooks.processer";
import { PayoutsService } from "../payouts/payout.service";
import { PayoutsModule } from "../payouts/payouts.module";

@Module({
  imports: [
    DatabaseModue,
    PaymentsModule,
    BullModule.registerQueue({ name: WEBHOOK_QUEUE }),
    PayoutsModule,
  ],
  controllers: [WebhooksController],
  providers: [WebhooksService, WebhooksProcessor],
})
export class WebhooksModule {}
