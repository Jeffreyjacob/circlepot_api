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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailProcessor = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const mail_constant_1 = require("./mail.constant");
const mail_service_1 = require("./mail.service");
const verify_email_template_1 = require("./templates/verify-email.template");
const password_changed_template_1 = require("./templates/password-changed.template");
const reset_password_1 = require("./templates/reset-password");
let MailProcessor = class MailProcessor extends bullmq_1.WorkerHost {
    mail;
    constructor(mail) {
        super();
        this.mail = mail;
    }
    async process(job) {
        const data = job.data;
        const { subject, html, text } = this.render(data);
        await this.mail.send(data.to, subject, html, text);
    }
    render(data) {
        switch (data.template) {
            case "verify-email":
                return (0, verify_email_template_1.verifyEmailTemplate)({ name: data.name, url: data.url });
            case "password-changed":
                return (0, password_changed_template_1.passwordChangedTemplate)({ name: data.name });
            case "reset-password":
                return (0, reset_password_1.resetPasswordTemplate)({ name: data.name, url: data.url });
        }
    }
};
exports.MailProcessor = MailProcessor;
exports.MailProcessor = MailProcessor = __decorate([
    (0, bullmq_1.Processor)(mail_constant_1.MAIL_QUEUE),
    __metadata("design:paramtypes", [mail_service_1.MailService])
], MailProcessor);
//# sourceMappingURL=mail.processor.js.map