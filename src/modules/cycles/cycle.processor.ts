import { Processor, WorkerHost } from "@nestjs/bullmq";
import { CYCLE_QUEUE } from "./cycles.constants";
import { CycleEngineService } from "./cycle-engine.service";
import { Job } from "bullmq";

@Processor(CYCLE_QUEUE)
export class CycleProcesser extends WorkerHost {
  constructor(private readonly engine: CycleEngineService) {
    super();
  }

  async process(): Promise<void> {
    await this.engine.tick();
  }
}
