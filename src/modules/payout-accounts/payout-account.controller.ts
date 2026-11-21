import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { PayoutAccountsService } from "./payout-account.service";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { AddPayoutAccountDto } from "./dto/add-payout-account.dto";
import { BankService } from "./banks.service";
import { Throttle } from "@nestjs/throttler";

@Controller("payout-accounts")
@UseGuards(JwtAuthGuard)
export class PayoutAccoutController {
  constructor(
    private readonly payoutAccoutService: PayoutAccountsService,
    private readonly bankService: BankService
  ) {}

  @Get("bank")
  getBanks() {
    return this.bankService.list();
  }

  @Get()
  listMine(@CurrentUser() user: { id: string }) {
    return this.payoutAccoutService.listMine(user.id);
  }

  @Post()
  @Throttle({ default: { limit: 40, ttl: 60 * 60_000 } })
  add(@CurrentUser() user: { id: string }, @Body() dto: AddPayoutAccountDto) {
    return this.payoutAccoutService.add(user.id, dto);
  }

  @Patch(":id/default")
  @HttpCode(200)
  setDefault(
    @CurrentUser() user: { id: string },
    @Param("id", ParseUUIDPipe) id: string
  ) {
    return this.payoutAccoutService.setDefault(user.id, id);
  }

  @Delete(":id")
  @HttpCode(204)
  remove(
    @CurrentUser() user: { id: string },
    @Param("id", ParseUUIDPipe) id: string
  ) {
    return this.payoutAccoutService.remove(user.id, id);
  }
}
