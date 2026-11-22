import { Module } from "@nestjs/common";
import { DatabaseModue } from "../../infra/database/database.modules";
import { PaymentsModule } from "../payments/payments.module";
import { BullModule } from "@nestjs/bullmq";
import { WEBHOOK_QUEUE } from "./webhooks.constants";
import { WebhooksController } from "./webhook.controller";
import { WebhooksService } from "./webhooks.service";
import { WebhooksProcessor } from "./webhooks.processer";

@Module({
  imports: [
    DatabaseModue,
    PaymentsModule,
    BullModule.registerQueue({ name: WEBHOOK_QUEUE }),
  ],
  controllers: [WebhooksController],
  providers: [WebhooksService, WebhooksProcessor],
})
export class WebhooksModule {}
