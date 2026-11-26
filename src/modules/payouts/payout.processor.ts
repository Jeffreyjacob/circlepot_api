import { Processor, WorkerHost } from "@nestjs/bullmq";
import { PAYOUT_QUEUE } from "./payouts.constants";
import { PayoutsService } from "./payout.service";
import { Job } from "bullmq";

@Processor(PAYOUT_QUEUE)
export class PayoutProcessor extends WorkerHost {
  constructor(private readonly payouts: PayoutsService) {
    super();
  }

  async process(job: Job<{ payoutId: string }>): Promise<void> {
    await this.payouts.send(job.data.payoutId);
  }
}
