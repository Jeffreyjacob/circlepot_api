import { PrismaService } from "../../infra/database/database.service";
export declare class GroupLifeCycleService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private lockGroup;
    setOrder(hostId: string, groupId: string, membershipIds: string[]): Promise<{
        lockedPositions: number;
        order: string[];
    } | undefined>;
    start(hostId: string, groupId: string): Promise<{
        status: "ACTIVE";
        cycle: number;
        installments: number;
    }>;
    cancel(hostId: string, groupId: string): Promise<{
        status: "CANCELLED";
    }>;
}
