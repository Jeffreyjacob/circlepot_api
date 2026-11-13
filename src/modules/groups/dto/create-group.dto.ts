import { Transform } from "class-transformer";
import {
  IsEnum,
  IsInt,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";
import { Frequency } from "../../../generated/prisma/enums";

const DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/;

export class CreateGroupDto {
  @Transform(({ value }) => (typeof value === "string" ? value.trim() : value))
  @IsString()
  @MinLength(3)
  @MaxLength(60)
  name!: string;

  @IsInt()
  @Min(100_000)
  @Max(1_000_000_000)
  potKobo!: number;

  @IsInt()
  @Min(2)
  @Max(20)
  seats!: number;

  @IsEnum(Frequency)
  frequency!: Frequency;

  @Matches(DATE_ONLY, { message: "startDate must look like 2027-01-31" })
  startDate!: string;

  @Matches(DATE_ONLY, { message: "endDate must look like 2027-06-30" })
  endDate!: string;

  @IsInt()
  @Min(35)
  @Max(50)
  heldPercent!: number;
}
