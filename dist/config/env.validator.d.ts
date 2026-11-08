export declare class EnvironmentVariables {
    NODE_ENV: string;
    PORT: number;
    FRONTEND_URL: string;
}
export declare function validateEnv(confifg: Record<string, unknown>): EnvironmentVariables;
