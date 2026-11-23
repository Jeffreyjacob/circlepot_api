import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { PaymentService } from "./payments.service";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { ReferenceParams } from "./dto/reference.params";
import { Throttle } from "@nestjs/throttler";

@Controller("payments")
@UseGuards(JwtAuthGuard)
export class PaymentsController {
  constructor(private readonly payments: PaymentService) {}

  @Get()
  listMine(@CurrentUser() user: { id: string }) {
    return this.payments.listMine(user.id);
  }

  @Get(":reference")
  status(
    @CurrentUser() user: { id: string },
    @Param() params: ReferenceParams
  ) {
    return this.payments.getStatus(user.id, params.reference);
  }

  @Post(":reference/verify")
  @HttpCode(200)
  @Throttle({ default: {} })
  verify(
    @CurrentUser() user: { id: string },
    @Param() params: ReferenceParams
  ) {
    return this.payments.verify(user.id, params.reference);
  }
}
