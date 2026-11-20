"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaystackUnavailableError = exports.PaystackApiError = void 0;
class PaystackApiError extends Error {
    httpStatus;
    constructor(httpStatus, message) {
        super(message);
        this.httpStatus = httpStatus;
    }
}
exports.PaystackApiError = PaystackApiError;
class PaystackUnavailableError extends Error {
}
exports.PaystackUnavailableError = PaystackUnavailableError;
//# sourceMappingURL=paystack.error.js.map