import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { InviteService } from "./invite.service";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { AcceptInviteDto } from "./dto/accept-invite.dto";

@Controller("invites")
@UseGuards(JwtAuthGuard)
export class InviteController {
  constructor(private readonly inviteService: InviteService) {}

  @Get()
  listForMine(@CurrentUser() user: { id: string }) {
    return this.inviteService.listMine(user.id);
  }

  @Post(":id/accept")
  @HttpCode(200)
  accept(
    @CurrentUser() user: { id: string },
    @Param("id", ParseUUIDPipe) id: string,
    @Body() _dto: AcceptInviteDto
  ) {
    return this.inviteService.accept(user.id, id);
  }

  @Post(":id/decline")
  @HttpCode(200)
  decline(
    @CurrentUser() user: { id: string },
    @Param("id", ParseUUIDPipe) id: string
  ) {
    return this.inviteService.decline(user.id, id);
  }
}
