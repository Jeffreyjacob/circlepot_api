import { Module } from "@nestjs/common";
import { Paystackclient } from "./paystack.client";

@Module({
  exports: [Paystackclient],
  providers: [Paystackclient],
})
export class PaystackModule {}
