import { Module } from "@nestjs/common";
import { DatabaseModue } from "../../infra/database/database.modules";
import { PaystackModule } from "../../infra/paystack/paystack.module";
import { InstallmentsController } from "./installment.controller";
import { PaymentsController } from "./payment.controller";
import { PaymentService } from "./payments.service";
import { PaymentConfirmationService } from "./payment-confirmation.service";

@Module({
  imports: [DatabaseModue, PaystackModule],
  controllers: [InstallmentsController, PaymentsController],
  providers: [PaymentService, PaymentConfirmationService],
  exports: [PaymentConfirmationService],
})
export class PaymentsModule {}
