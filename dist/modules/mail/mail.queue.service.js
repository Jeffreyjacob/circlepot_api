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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailQueueService = void 0;
const common_1 = require("@nestjs/common");
const mail_constant_1 = require("./mail.constant");
const bullmq_1 = require("@nestjs/bullmq");
const bullmq_2 = require("bullmq");
let MailQueueService = class MailQueueService {
    queue;
    constructor(queue) {
        this.queue = queue;
    }
    async enqueue(job) {
        await this.queue.add(job.template, job, {
            attempts: 5,
            backoff: { type: "exponential", delay: 5000 },
            removeOnComplete: true,
            removeOnFail: { age: 24 * 36000 },
        });
    }
};
exports.MailQueueService = MailQueueService;
exports.MailQueueService = MailQueueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, bullmq_1.InjectQueue)(mail_constant_1.MAIL_QUEUE)),
    __metadata("design:paramtypes", [bullmq_2.Queue])
], MailQueueService);
//# sourceMappingURL=mail.queue.service.js.map