import { ConfigService } from "@nestjs/config";
export declare class MailService {
    private readonly logger;
    private readonly transporter;
    private readonly from;
    constructor(config: ConfigService);
    send(to: string, subject: string, html: string, text: string): Promise<void>;
}
