import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PaystackApiError, PaystackUnavailableError } from "./paystack.error";

interface Envelope<T> {
  status: boolean;
  message: string;
  data: T;
  meta?: { next?: string | null };
}

export interface PaystackBank {
  name: string;
  code: string;
  active: boolean;
}
export interface ResolvedAccount {
  account_number: string;
  account_name: string;
}
export interface TransferRecipient {
  recipient_code: string;
}

export interface VerifiedTransaction {
  id: number;
  status: string;
  reference: string;
  amount: number;
  currency: string;
  paid_at: string | null;
  channel: string | null;
  authorization: Record<string, unknown> | null;
}

export interface InitializedTransaction {
  authorization_url: string;
  access_code: string;
  reference: string;
}

@Injectable()
export class Paystackclient {
  private readonly baseUrl = "https://api.paystack.co";
  private readonly secretKey: string;
  private readonly logger = new Logger(Paystackclient.name);

  constructor(config: ConfigService) {
    this.secretKey = config.getOrThrow<string>("PAYSTACK_SECRET_KEY");
  }

  private async request<T>(
    path: string,
    init?: { method?: "GET" | "POST"; body: unknown }
  ): Promise<Envelope<T>> {
    let response: Response;

    try {
      response = await fetch(`${this.baseUrl}${path}`, {
        method: init?.method ?? "GET",
        headers: {
          Authorization: `Bearer ${this.secretKey}`,
          "Content-Type": "application/json",
        },
        body: init?.body ? JSON.stringify(init.body) : undefined,
        signal: AbortSignal.timeout(15000),
      });
    } catch (error: any) {
      const reason =
        error instanceof Error
          ? `${error.name}: ${error.message} (${String((error.cause as { code?: string } | undefined)?.code ?? "no code")})`
          : "unknown";
      this.logger.warn(
        `${init?.method ?? "GET"} ${path.split("?")[0]} failed: ${reason}`
      );
      throw new PaystackUnavailableError("Could not reach Paystack");
    }

    const json = (await response
      .json()
      .catch(() => null)) as Envelope<T> | null;
    if (!response.ok || !json?.status) {
      throw new PaystackApiError(
        response.status,
        json?.message ?? "Paystack request failed"
      );
    }
    return json;
  }

  async listNigerianBank(): Promise<PaystackBank[]> {
    const banks: PaystackBank[] = [];
    let next: string | null | undefined;

    for (let page = 0; page < 10; page++) {
      const query = new URLSearchParams({
        country: "nigeria",
        currency: "NGN",
        use_cursor: "true",
        perPage: "100",
      });
      if (next) query.set("next", next);

      const res = await this.request<PaystackBank[]>(`/bank?${query}`);
      banks.push(...res.data);
      next = res.meta?.next;
      if (!next) break;
    }

    return banks.filter((b) => b.active);
  }

  async resolveAccount(
    accountNumber: string,
    bankCode: string
  ): Promise<ResolvedAccount> {
    const query = new URLSearchParams({
      account_number: accountNumber,
      bank_code: bankCode,
    });
    return (await this.request<ResolvedAccount>(`/bank/resolve?${query}`)).data;
  }

  async createTransferRecipient(input: {
    name: string;
    accountNumber: string;
    bankCode: string;
  }): Promise<TransferRecipient> {
    const res = await this.request<TransferRecipient>("/transferrecipient", {
      method: "POST",
      body: {
        type: "nuban",
        name: input.name,
        account_number: input.accountNumber,
        bank_code: input.bankCode,
        currency: "NGN",
      },
    });

    return res.data;
  }

  async verifyTransaction(reference: string): Promise<VerifiedTransaction> {
    if (typeof reference !== "string" || reference.trim() === "") {
      throw new PaystackApiError(401, "A transaction reference is required");
    }

    const res = await this.request<VerifiedTransaction>(
      `/transaction/verify/${encodeURIComponent(reference.trim())}`
    );

    return {
      id: res.data.id,
      status: res.data.status,
      reference: res.data.reference,
      amount: res.data.amount,
      currency: res.data.currency,
      paid_at: res.data.paid_at,
      channel: res.data.channel,
      authorization: res.data.authorization,
    };
  }

  async initializeTransaction(input: {
    email: string;
    amountKobo: number;
    reference: string;
    callbackUrl: string;
    metadata?: Record<string, unknown>;
  }): Promise<InitializedTransaction> {
    const res = await this.request<InitializedTransaction>(
      "/transaction/initialize",
      {
        method: "POST",
        body: {
          email: input.email,
          amount: input.amountKobo,
          reference: input.reference,
          callback_url: input.callbackUrl,
          currency: "NGN",
          metadata: input.metadata,
        },
      }
    );

    return res.data;
  }
}
