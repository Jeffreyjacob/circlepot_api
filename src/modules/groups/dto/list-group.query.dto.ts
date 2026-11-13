import { IsIn, IsOptional } from "class-validator";

export class ListGroupsQueryDto {
  @IsOptional()
  @IsIn(["current", "ended"])
  scope: "current" | "ended" = "current";
}
