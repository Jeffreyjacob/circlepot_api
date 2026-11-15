import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayUnique,
  IsArray,
  IsUUID,
} from "class-validator";

export class SetOrderDto {
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(20)
  @ArrayUnique()
  @IsUUID("all", { each: true })
  membershipIds!: string[];
}
