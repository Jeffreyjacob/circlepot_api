import {
  Controller,
  Delete,
  Get,
  Param,
  ParseArrayPipe,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { PayoutAccountsService } from "./payout-account.service";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { AddPayoutAccountDto } from "./dto/add-payout-account.dto";
import { BankService } from "./banks.service";

@Controller("payout-accounts")
@UseGuards(JwtAuthGuard)
export class PayoutAccoutController {
  constructor(
    private readonly payoutAccoutService: PayoutAccountsService,
    private readonly bankService: BankService
  ) {}

  @Get()
  listMine(@CurrentUser() user: { id: string }) {
    return this.payoutAccoutService.listMine(user.id);
  }

  @Post()
  add(@CurrentUser() user: { id: string }, dto: AddPayoutAccountDto) {
    return this.payoutAccoutService.add(user.id, dto);
  }

  @Get("bank")
  getBanks() {
    return this.bankService.list();
  }

  @Get("bank/:code")
  getBankByCode(@Param("code") code: string) {
    return this.bankService.find(code);
  }

  @Patch(":id/default")
  setDefault(
    @CurrentUser() user: { id: string },
    @Param("id", ParseArrayPipe) id: string
  ) {
    return this.payoutAccoutService.setDefault(user.id, id);
  }

  @Delete(":id")
  remove(
    @CurrentUser() user: { id: string },
    @Param("id", ParseArrayPipe) id: string
  ) {
    return this.payoutAccoutService.remove(user.id, id);
  }
}
