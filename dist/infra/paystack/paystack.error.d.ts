export declare class PaystackApiError extends Error {
    readonly httpStatus: number;
    constructor(httpStatus: number, message: string);
}
export declare class PaystackUnavailableError extends Error {
}
