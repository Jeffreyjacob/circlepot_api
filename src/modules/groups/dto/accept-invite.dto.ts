import { Equals, IsBoolean } from "class-validator";

export class AcceptInviteDto {
  @IsBoolean()
  @Equals(true, { message: "You must accept thr grouo rules" })
  acceptRules!: boolean;
}
