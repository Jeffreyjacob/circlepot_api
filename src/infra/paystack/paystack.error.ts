export class PaystackApiError extends Error {
  constructor(
    readonly httpStatus: number,
    message: string
  ) {
    super(message);
  }
}

export class PaystackUnavailableError extends Error {}
