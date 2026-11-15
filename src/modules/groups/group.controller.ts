import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from "@nestjs/common";
import { GroupService } from "./group.service";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { CreateGroupDto } from "./dto/create-group.dto";
import { ListGroupsQueryDto } from "./dto/list-group.query.dto";
import { InviteMemberDto } from "./dto/invite-member.dto";
import { InviteService } from "./invite.service";
import { Throttle } from "@nestjs/throttler";
import { SetOrderDto } from "./dto/set-order.dto";
import { GroupLifeCycleService } from "./group-lifecycle.service";

@Controller("groups")
@UseGuards(JwtAuthGuard)
export class GroupController {
  constructor(
    private readonly groupService: GroupService,
    private readonly inviteService: InviteService,
    private readonly lifeCycleService: GroupLifeCycleService
  ) {}

  @Post()
  create(@CurrentUser() user: { id: string }, @Body() dto: CreateGroupDto) {
    return this.groupService.create(user.id, dto);
  }

  @Get()
  listMine(
    @CurrentUser() user: { id: string },
    @Query() query: ListGroupsQueryDto
  ) {
    return this.groupService.listMine(user.id, query.scope);
  }

  @Get(":id")
  getForMember(
    @CurrentUser() user: { id: string },
    @Param("id", ParseUUIDPipe) id: string
  ) {
    return this.groupService.getForMember(user.id, id);
  }

  @Post(":id/invite")
  @Throttle({ default: { limit: 20, ttl: 60 * 60_000 } })
  createInvite(
    @CurrentUser() user: { id: string },
    @Param("id", ParseUUIDPipe) id: string,
    @Body() dto: InviteMemberDto
  ) {
    return this.inviteService.invite(user.id, id, dto.email);
  }
  @Get(":id/invite")
  listForHost(
    @CurrentUser() user: { id: string },
    @Param("id", ParseUUIDPipe) id: string
  ) {
    return this.inviteService.listForHost(user.id, id);
  }

  @Put(":id/order")
  @HttpCode(200)
  setOrder(
    @CurrentUser() user: { id: string },
    @Param("id", ParseUUIDPipe) id: string,
    @Body() dto: SetOrderDto
  ) {
    return this.lifeCycleService.setOrder(user.id, id, dto.membershipIds);
  }

  @Post(":id/start")
  @HttpCode(200)
  start(
    @CurrentUser() user: { id: string },
    @Param("id", ParseUUIDPipe) id: string
  ) {
    return this.lifeCycleService.start(user.id, id);
  }

  @Post(":id/cancel")
  @HttpCode(200)
  cancel(
    @CurrentUser() user: { id: string },
    @Param("id", ParseUUIDPipe) id: string
  ) {
    return this.lifeCycleService.cancel(user.id, id);
  }
}
