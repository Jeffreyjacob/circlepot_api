import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { CYCLE_QUEUE } from "./cycles.constants";
import { Queue } from "bullmq";
import { InjectQueue } from "@nestjs/bullmq";

@Injectable()
export class CycleSchedulerService implements OnApplicationBootstrap {
  constructor(@InjectQueue(CYCLE_QUEUE) private readonly queue: Queue) {}

  async onApplicationBootstrap() {
    await this.queue.upsertJobScheduler(
      "cycle-tick",
      { every: 60_000 },
      {
        name: "tick",
        opts: { removeOnComplete: true, removeOnFail: { count: 50 } },
      }
    );
  }
}
