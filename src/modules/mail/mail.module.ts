import { BullModule } from "@nestjs/bullmq";
import { Module } from "@nestjs/common";
import { MAIL_QUEUE } from "./mail.constant";
import { MailService } from "./mail.service";
import { MailQueueService } from "./mail.queue.service";
import { MailProcessor } from "./mail.processor";

@Module({
  imports: [BullModule.registerQueue({ name: MAIL_QUEUE })],
  providers: [MailService, MailQueueService, MailProcessor],
  exports: [MailQueueService],
})
export class MailModule {}
