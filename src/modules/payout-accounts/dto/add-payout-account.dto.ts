import { Matches } from "class-validator";

export class AddPayoutAccountDto {
  @Matches(/^\d{3,8}$/, { message: "Invalid bank code" })
  bankCode!: string;

  @Matches(/^\d{10}$/, { message: "Account number must be 10 digits" })
  accountNumber!: string;
}
