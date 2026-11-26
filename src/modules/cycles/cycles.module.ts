import { Module } from "@nestjs/common";
import { DatabaseModue } from "../../infra/database/database.modules";
import { BullModule } from "@nestjs/bullmq";
import { CYCLE_QUEUE } from "./cycles.constants";
import { CycleEngineService } from "./cycle-engine.service";
import { CycleSchedulerService } from "./cycle-scheduler.service";
import { CycleProcesser } from "./cycle.processor";
import { WEBHOOK_QUEUE } from "../webhooks/webhooks.constants";
import { PayoutsModule } from "../payouts/payouts.module";

@Module({
  imports: [
    DatabaseModue,
    BullModule.registerQueue({ name: CYCLE_QUEUE }, { name: WEBHOOK_QUEUE }),
    PayoutsModule,
  ],
  providers: [CycleEngineService, CycleSchedulerService, CycleProcesser],
  exports: [CycleEngineService],
})
export class CyclesModule {}
