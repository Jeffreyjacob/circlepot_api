export declare function redisConnectionFromUrl(url: string): {
    host: string;
    port: number;
    username: string | undefined;
    password: string | undefined;
    tls: {} | undefined;
};
