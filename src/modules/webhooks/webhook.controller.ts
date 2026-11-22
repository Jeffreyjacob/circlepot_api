import { Controller, HttpCode, Post, Req, Headers } from "@nestjs/common";
import type { RawBodyRequest } from "@nestjs/common";
import { SkipThrottle } from "@nestjs/throttler";
import { WebhooksService } from "./webhooks.service";
import type { Request } from "express";

@Controller("webhooks")
@SkipThrottle()
export class WebhooksController {
  constructor(private readonly webhooks: WebhooksService) {}

  @Post("paystack")
  @HttpCode(200)
  paystack(
    @Req() req: RawBodyRequest<Request>,
    @Headers("x-paystack-signature") signature?: string
  ) {
    return this.webhooks.recievePaystack(req.rawBody, signature);
  }
}
