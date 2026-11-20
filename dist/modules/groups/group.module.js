"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupModule = void 0;
const common_1 = require("@nestjs/common");
const database_modules_1 = require("../../infra/database/database.modules");
const group_controller_1 = require("./group.controller");
const group_service_1 = require("./group.service");
const invite_service_1 = require("./invite.service");
const invite_controller_1 = require("./invite.controller");
const mail_module_1 = require("../mail/mail.module");
const group_lifecycle_service_1 = require("./group-lifecycle.service");
let GroupModule = class GroupModule {
};
exports.GroupModule = GroupModule;
exports.GroupModule = GroupModule = __decorate([
    (0, common_1.Module)({
        imports: [database_modules_1.DatabaseModue, mail_module_1.MailModule],
        controllers: [group_controller_1.GroupController, invite_controller_1.InviteController],
        providers: [group_service_1.GroupService, invite_service_1.InviteService, group_lifecycle_service_1.GroupLifeCycleService],
    })
], GroupModule);
//# sourceMappingURL=group.module.js.map