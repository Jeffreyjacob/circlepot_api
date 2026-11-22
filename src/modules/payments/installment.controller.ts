import {
  Controller,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { PaymentService } from "./payments.service";
import { Throttle } from "@nestjs/throttler";
import { CurrentUser } from "../../common/decorators/current-user.decorator";

@Controller("installments")
@UseGuards(JwtAuthGuard)
export class InstallmentsController {
  constructor(private readonly payments: PaymentService) {}

  @Post(":id/pay")
  @HttpCode(200)
  @Throttle({ default: { limit: 10, ttl: 60_00 } })
  pay(
    @CurrentUser() user: { id: string },
    @Param("id", ParseUUIDPipe) id: string
  ) {
    return this.payments.initiate(user.id, id);
  }
}
