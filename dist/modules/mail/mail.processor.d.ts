import { WorkerHost } from "@nestjs/bullmq";
import { MailService } from "./mail.service";
import { Job } from "bullmq";
import { MailJob } from "./mail.type";
export declare class MailProcessor extends WorkerHost {
    private readonly mail;
    constructor(mail: MailService);
    process(job: Job<MailJob>): Promise<void>;
    private render;
}
