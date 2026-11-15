import { Module } from "@nestjs/common";
import { DatabaseModue } from "../../infra/database/database.modules";
import { GroupController } from "./group.controller";
import { GroupService } from "./group.service";
import { InviteService } from "./invite.service";
import { InviteController } from "./invite.controller";
import { MailModule } from "../mail/mail.module";
import { GroupLifeCycleService } from "./group-lifecycle.service";

@Module({
  imports: [DatabaseModue, MailModule],
  controllers: [GroupController, InviteController],
  providers: [GroupService, InviteService, GroupLifeCycleService],
})
export class GroupModule {}
