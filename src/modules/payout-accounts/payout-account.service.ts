import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
  UnprocessableEntityException,
} from "@nestjs/common";
import {
  PaystackApiError,
  PaystackUnavailableError,
} from "../../infra/paystack/paystack.error";
import { PrismaService } from "../../infra/database/database.service";
import { Paystackclient } from "../../infra/paystack/paystack.client";
import { BankService } from "./banks.service";
import { AddPayoutAccountDto } from "./dto/add-payout-account.dto";
import { namesMatch } from "./domain/name-match";
import {
  GroupStatus,
  MemberStatus,
  Prisma,
} from "../../generated/prisma/client";

const MAX_ACCOUNT = 3;

const mask = (accountNumber: string) => `******${accountNumber.slice(-4)}`;

const view = (a: {
  id: string;
  bankName: string;
  bankCode: string;
  accountNumber: string;
  accountName: string;
  isDefault: boolean;
}) => ({
  id: a.id,
  bankName: a.bankName,
  bankCode: a.bankCode,
  accountNumber: mask(a.accountNumber),
  accountName: a.accountName,
  isDefault: a.isDefault,
});

function translate(error: unknown, userMessage: string): never {
  if (error instanceof PaystackUnavailableError) {
    throw new ServiceUnavailableException(
      "Our payment provider is unavailable."
    );
  }
  if (
    error instanceof PaystackApiError &&
    error.httpStatus >= 400 &&
    error.httpStatus < 500
  ) {
    throw new UnprocessableEntityException(userMessage);
  }
  throw new ServiceUnavailableException(
    "Our payment provider had a problem. Try again shortly."
  );
}

@Injectable()
export class PayoutAccountsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly paystack: Paystackclient,
    private readonly banks: BankService
  ) {}

  async add(userId: string, dto: AddPayoutAccountDto) {
    let bank;
    try {
      bank = await this.banks.find(dto.bankCode);
    } catch (e: any) {
      translate(e, "Could not load tha bank list");
    }

    if (!bank) throw new BadRequestException("Unknown bank");

    const existing = await this.prisma.payoutAccount.count({
      where: { userId },
    });
    if (existing >= MAX_ACCOUNT) {
      throw new ConflictException(
        `You can save up to  ${MAX_ACCOUNT} payout accounts`
      );
    }

    let resolved;
    try {
      resolved = await this.paystack.resolveAccount(
        dto.accountNumber,
        dto.bankCode
      );
    } catch (e: any) {
      translate(
        e,
        "We could not verify this account.Check the bank and account number."
      );
    }

    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: { name: true },
    });

    if (!namesMatch(user.name, resolved.account_name)) {
      throw new UnprocessableEntityException(
        "The account name does not match the name on your CirclePot profile"
      );
    }

    let recipient;

    try {
      recipient = await this.paystack.createTransferRecipient({
        name: resolved.account_name,
        accountNumber: dto.accountNumber,
        bankCode: dto.bankCode,
      });
    } catch (e: any) {
      translate(e, "We could not register this account for payout");
    }

    try {
      const created = await this.prisma.payoutAccount.create({
        data: {
          userId,
          bankCode: dto.bankCode,
          bankName: bank.name,
          accountName: resolved.account_name,
          accountNumber: dto.accountNumber,
          recipientCode: recipient.recipient_code,
          isDefault: existing === 0,
        },
      });
      return view(created);
    } catch (error: any) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        throw new ConflictException("You have already added this account");
      }
      throw error;
    }
  }

  async listMine(userId: string) {
    const accounts = await this.prisma.payoutAccount.findMany({
      where: { userId },
      orderBy: { createdAt: "asc" },
    });
    return accounts.map(view);
  }

  async setDefault(userId: string, id: string) {
    await this.prisma.$transaction(async (tx) => {
      await tx.payoutAccount.updateMany({
        where: { userId },
        data: { isDefault: false },
      });
      const result = await tx.payoutAccount.updateMany({
        where: { id, userId },
        data: { isDefault: true },
      });
      if (result.count !== 1) throw new NotFoundException("Account not found");
    });
    return this.listMine(userId);
  }

  async remove(userId: string, id: string) {
    const account = await this.prisma.payoutAccount.findFirst({
      where: { id, userId },
    });
    if (!account) throw new NotFoundException("Account not found");

    if (account.isDefault) {
      const running = await this.prisma.membership.count({
        where: {
          userId,
          status: MemberStatus.ACCEPTED,
          group: { status: GroupStatus.ACTIVE },
        },
      });

      if (running > 0) {
        throw new ConflictException(
          "Choose another default account first: you are in a running group"
        );
      }
    }

    try {
    } catch (error: any) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2003"
      ) {
        throw new ConflictException(
          "This account has payout history and cannot be deleted"
        );
        throw error;
      }
    }
  }
}
