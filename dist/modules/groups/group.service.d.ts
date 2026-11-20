import { GroupStatus, Prisma } from "../../generated/prisma/client";
import { PrismaService } from "../../infra/database/database.service";
import { CreateGroupDto } from "./dto/create-group.dto";
export declare class GroupService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(userId: string, dto: CreateGroupDto): Promise<{
        cycleAmountKobo: number;
        installmentsPerCycle: number;
        id: string;
        name: string;
        createdAt: Date;
        hostId: string;
        potKobo: number;
        seats: number;
        frequency: import("../../generated/prisma/enums").Frequency;
        startDate: Date;
        endDate: Date;
        heldPercent: number;
        lateFreeKobo: number;
        status: GroupStatus;
        _count: {
            members: number;
        };
    }>;
    listMine(userId: string, scope: "current" | "ended"): Prisma.PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        hostId: string;
        potKobo: number;
        seats: number;
        frequency: import("../../generated/prisma/enums").Frequency;
        startDate: Date;
        endDate: Date;
        heldPercent: number;
        lateFreeKobo: number;
        status: GroupStatus;
        _count: {
            members: number;
        };
    }[]>;
    getForMember(userId: string, groupId: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        hostId: string;
        potKobo: number;
        seats: number;
        frequency: import("../../generated/prisma/enums").Frequency;
        startDate: Date;
        endDate: Date;
        heldPercent: number;
        lateFreeKobo: number;
        status: GroupStatus;
        _count: {
            members: number;
        };
        members: {
            id: string;
            payoutOrder: number | null;
            user: {
                id: string;
                name: string;
            };
        }[];
    }>;
}
