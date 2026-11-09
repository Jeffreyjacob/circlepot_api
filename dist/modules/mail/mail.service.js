"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nodemailer_1 = require("nodemailer");
let MailService = MailService_1 = class MailService {
    logger = new common_1.Logger(MailService_1.name);
    transporter;
    from;
    constructor(config) {
        const user = config.get("SMTP_USER");
        const pass = config.get("SMTP_PASSWORD");
        this.transporter = (0, nodemailer_1.createTransport)({
            host: config.getOrThrow("SMTP_HOST"),
            port: config.getOrThrow("SMTP_PORT"),
            secure: config.getOrThrow("SMTP_SECURE"),
            auth: user && pass ? { user, pass } : undefined,
        });
        this.from = config.getOrThrow("MAIL_FROM");
    }
    async send(to, subject, html, text) {
        await this.transporter.sendMail({
            from: this.from,
            to,
            subject,
            html,
            text,
        });
        this.logger.log(`Email sent: ${subject}`);
    }
};
exports.MailService = MailService;
exports.MailService = MailService = MailService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], MailService);
//# sourceMappingURL=mail.service.js.map