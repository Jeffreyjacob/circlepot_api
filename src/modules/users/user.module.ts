import { Module } from "@nestjs/common";
import { DatabaseModue } from "../../infra/database/database.modules";
import { UsersController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [DatabaseModue],
  controllers: [UsersController],
  providers: [UserService],
})
export class UserModule {}
