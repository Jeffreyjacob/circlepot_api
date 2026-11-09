export declare class EnvironmentVariables {
    NODE_ENV: string;
    PORT: number;
    FRONTEND_URL: string;
    DATABASE_URL: string;
    REDIS_URL: string;
    SMTP_HOST: string;
    MAIL_FROM: string;
    SMTP_PORT: number;
    SMTP_USER: string;
    SMTP_PASSWORD: string;
    SMTP_SECURE: boolean;
    JWT_ACCESS_SECRET: string;
    JWT_ACCESS_TTL_SECONDS: number;
    REFRESH_TTL_DAYS: number;
}
export declare function validateEnv(confifg: Record<string, unknown>): EnvironmentVariables;
