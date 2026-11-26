import { Module } from "@nestjs/common";
import { DatabaseModue } from "../../infra/database/database.modules";
import { PaystackModule } from "../../infra/paystack/paystack.module";
import { BullModule } from "@nestjs/bullmq";
import { PAYOUT_QUEUE } from "./payouts.constants";
import { PayoutsService } from "./payout.service";
import { PayoutProcessor } from "./payout.processor";

@Module({
  imports: [
    DatabaseModue,
    PaystackModule,
    BullModule.registerQueue({ name: PAYOUT_QUEUE }),
  ],
  providers: [PayoutsService, PayoutProcessor],
  exports: [PayoutsService],
})
export class PayoutsModule {}
