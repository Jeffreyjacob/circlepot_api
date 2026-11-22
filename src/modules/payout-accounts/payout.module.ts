import { Module } from "@nestjs/common";
import { DatabaseModue } from "../../infra/database/database.modules";
import { Paystackclient } from "../../infra/paystack/paystack.client";
import { BankService } from "./banks.service";
import { PayoutAccountsService, translate } from "./payout-account.service";
import { PayoutAccoutController } from "./payout-account.controller";

@Module({
  imports: [DatabaseModue],
  providers: [BankService, PayoutAccountsService, Paystackclient],
  controllers: [PayoutAccoutController],
})
export class PayoutAccountModule {}
