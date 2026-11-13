import { Module } from "@nestjs/common";
import { DatabaseModue } from "../../infra/database/database.modules";
import { GroupController } from "./group.controller";
import { GroupService } from "./group.service";

@Module({
  imports: [DatabaseModue],
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}
