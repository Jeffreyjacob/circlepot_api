import { Processor, WorkerHost } from "@nestjs/bullmq";
import { MAIL_QUEUE } from "./mail.constant";
import { MailService } from "./mail.service";
import { Job } from "bullmq";
import { MailJob } from "./mail.type";
import { verifyEmailTemplate } from "./templates/verify-email.template";

@Processor(MAIL_QUEUE)
export class MailProcessor extends WorkerHost {
  constructor(private readonly mail: MailService) {
    super();
  }

  async process(job: Job<MailJob>): Promise<void> {
    const data = job.data;
    const { subject, html, text } = this.render(data);
    await this.mail.send(data.to, subject, html, text);
  }

  private render(data: MailJob) {
    switch (data.template) {
      case "verify-email":
        return verifyEmailTemplate({ name: data.name, url: data.url });
      default:
        throw new Error(`Unknown mail template: ${data.template}`);
    }
  }
}
