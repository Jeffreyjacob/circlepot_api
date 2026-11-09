import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { createTransport, Transporter } from "nodemailer";

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private readonly transporter: Transporter;
  private readonly from: string;

  constructor(config: ConfigService) {
    const user = config.get<string>("SMTP_USER");
    const pass = config.get<string>("SMTP_PASSWORD");

    this.transporter = createTransport({
      host: config.getOrThrow<string>("SMTP_HOST"),
      port: config.getOrThrow<number>("SMTP_PORT"),
      secure: config.getOrThrow<boolean>("SMTP_SECURE"),
      auth: user && pass ? { user, pass } : undefined,
    });

    this.from = config.getOrThrow<string>("MAIL_FROM");
  }

  async send(to: string, subject: string, html: string, text: string) {
    await this.transporter.sendMail({
      from: this.from,
      to,
      subject,
      html,
      text,
    });
    this.logger.log(`Email sent: ${subject}`);
  }
}
