import { plainToInstance, Transform } from "class-transformer";
import {
  IsBoolean,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  Max,
  Min,
  MinLength,
  validateSync,
} from "class-validator";

export class EnvironmentVariables {
  @IsIn(["development", "test", "production"])
  NODE_ENV!: string;

  @IsInt()
  @Min(1)
  @Max(65535)
  PORT!: number;

  @IsUrl({ require_tld: false })
  FRONTEND_URL!: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^postgres(ql)?:\/\//, {
    message: "DATABASE_URL must start with postgresql://",
  })
  DATABASE_URL!: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^rediss?:\/\//, {
    message: "REDIS_URL must start with redis:// or rediss://",
  })
  REDIS_URL!: string;

  @IsString()
  @IsNotEmpty()
  SMTP_HOST!: string;

  @IsString()
  @IsNotEmpty()
  MAIL_FROM!: string;

  @IsInt()
  SMTP_PORT!: number;

  @IsString()
  @IsOptional()
  SMTP_USER: string;

  @IsString()
  @IsOptional()
  SMTP_PASSWORD: string;

  @Transform(({ obj, key }) => obj[key] === "true")
  @IsBoolean()
  SMTP_SECURE!: boolean;

  @IsString()
  @MinLength(32)
  JWT_ACCESS_SECRET!: string;

  @IsInt()
  @Min(1)
  JWT_ACCESS_TTL_SECONDS!: number;

  @IsInt()
  @Min(1)
  REFRESH_TTL_DAYS!: number;
}

export function validateEnv(confifg: Record<string, unknown>) {
  const validated = plainToInstance(EnvironmentVariables, confifg, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validated);
  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validated;
}
