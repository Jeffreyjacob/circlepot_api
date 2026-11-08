import { Module } from "@nestjs/common";
import { DatabaseModue } from "../../infra/database/database.modules";
import { MailModule } from "../mail/mail.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
  imports: [DatabaseModue, MailModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModules {}
