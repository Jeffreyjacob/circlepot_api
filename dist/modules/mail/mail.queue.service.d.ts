import { MailJob } from "./mail.type";
import { Queue } from "bullmq";
export declare class MailQueueService {
    private readonly queue;
    constructor(queue: Queue<MailJob>);
    enqueue(job: MailJob): Promise<void>;
}
