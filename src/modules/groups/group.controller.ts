import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { GroupService } from "./group.service";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { CreateGroupDto } from "./dto/create-group.dto";
import { ListGroupsQueryDto } from "./dto/list-group.query.dto";

@Controller("groups")
@UseGuards(JwtAuthGuard)
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post("create")
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
}
