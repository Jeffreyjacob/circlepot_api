import { Injectable } from "@nestjs/common";
import { MAIL_QUEUE } from "./mail.constant";
import { InjectQueue } from "@nestjs/bullmq";
import { MailJob } from "./mail.type";
import { Queue } from "bullmq";

@Injectable()
export class MailQueueService {
  constructor(
    @InjectQueue(MAIL_QUEUE) private readonly queue: Queue<MailJob>
  ) {}

  async enqueue(job: MailJob) {
    await this.queue.add(job.template, job, {
      attempts: 5,
      backoff: { type: "exponential", delay: 5000 },
      removeOnComplete: true,
      removeOnFail: { age: 24 * 36000 },
    });
  }
}
