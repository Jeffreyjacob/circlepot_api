import { Module } from "@nestjs/common";
import { DatabaseModue } from "../../infra/database/database.modules";
import { Paystackclient } from "../../infra/paystack/paystack.client";
import { BankService } from "./banks.service";
import { PayoutAccountsService } from "./payout-account.service";

@Module({
  imports: [DatabaseModue, Paystackclient],
  providers: [BankService, PayoutAccountsService],
  controllers: [],
})
export class PayoutAccountModule {}
