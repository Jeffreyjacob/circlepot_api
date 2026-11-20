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
exports.GroupController = void 0;
const common_1 = require("@nestjs/common");
const group_service_1 = require("./group.service");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const create_group_dto_1 = require("./dto/create-group.dto");
const list_group_query_dto_1 = require("./dto/list-group.query.dto");
const invite_member_dto_1 = require("./dto/invite-member.dto");
const invite_service_1 = require("./invite.service");
const throttler_1 = require("@nestjs/throttler");
const set_order_dto_1 = require("./dto/set-order.dto");
const group_lifecycle_service_1 = require("./group-lifecycle.service");
let GroupController = class GroupController {
    groupService;
    inviteService;
    lifeCycleService;
    constructor(groupService, inviteService, lifeCycleService) {
        this.groupService = groupService;
        this.inviteService = inviteService;
        this.lifeCycleService = lifeCycleService;
    }
    create(user, dto) {
        return this.groupService.create(user.id, dto);
    }
    listMine(user, query) {
        return this.groupService.listMine(user.id, query.scope);
    }
    getForMember(user, id) {
        return this.groupService.getForMember(user.id, id);
    }
    createInvite(user, id, dto) {
        return this.inviteService.invite(user.id, id, dto.email);
    }
    listForHost(user, id) {
        return this.inviteService.listForHost(user.id, id);
    }
    setOrder(user, id, dto) {
        return this.lifeCycleService.setOrder(user.id, id, dto.membershipIds);
    }
    start(user, id) {
        return this.lifeCycleService.start(user.id, id);
    }
    cancel(user, id) {
        return this.lifeCycleService.cancel(user.id, id);
    }
};
exports.GroupController = GroupController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_group_dto_1.CreateGroupDto]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, list_group_query_dto_1.ListGroupsQueryDto]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "listMine", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "getForMember", null);
__decorate([
    (0, common_1.Post)(":id/invite"),
    (0, throttler_1.Throttle)({ default: { limit: 20, ttl: 60 * 60_000 } }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, invite_member_dto_1.InviteMemberDto]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "createInvite", null);
__decorate([
    (0, common_1.Get)(":id/invite"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "listForHost", null);
__decorate([
    (0, common_1.Put)(":id/order"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, set_order_dto_1.SetOrderDto]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "setOrder", null);
__decorate([
    (0, common_1.Post)(":id/start"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "start", null);
__decorate([
    (0, common_1.Post)(":id/cancel"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "cancel", null);
exports.GroupController = GroupController = __decorate([
    (0, common_1.Controller)("groups"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [group_service_1.GroupService,
        invite_service_1.InviteService,
        group_lifecycle_service_1.GroupLifeCycleService])
], GroupController);
//# sourceMappingURL=group.controller.js.map