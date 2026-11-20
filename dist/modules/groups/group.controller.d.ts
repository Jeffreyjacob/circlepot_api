import { GroupService } from "./group.service";
import { CreateGroupDto } from "./dto/create-group.dto";
import { ListGroupsQueryDto } from "./dto/list-group.query.dto";
import { InviteMemberDto } from "./dto/invite-member.dto";
import { InviteService } from "./invite.service";
import { SetOrderDto } from "./dto/set-order.dto";
import { GroupLifeCycleService } from "./group-lifecycle.service";
export declare class GroupController {
    private readonly groupService;
    private readonly inviteService;
    private readonly lifeCycleService;
    constructor(groupService: GroupService, inviteService: InviteService, lifeCycleService: GroupLifeCycleService);
    create(user: {
        id: string;
    }, dto: CreateGroupDto): Promise<{
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
        status: import("../../generated/prisma/enums").GroupStatus;
        _count: {
            members: number;
        };
    }>;
    listMine(user: {
        id: string;
    }, query: ListGroupsQueryDto): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
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
        status: import("../../generated/prisma/enums").GroupStatus;
        _count: {
            members: number;
        };
    }[]>;
    getForMember(user: {
        id: string;
    }, id: string): Promise<{
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
        status: import("../../generated/prisma/enums").GroupStatus;
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
    createInvite(user: {
        id: string;
    }, id: string, dto: InviteMemberDto): Promise<{
        id: string;
        email: string;
        expiresAt: Date;
    }>;
    listForHost(user: {
        id: string;
    }, id: string): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        expiresAt: Date;
        acceptedAt: Date | null;
        declinedAt: Date | null;
    }[]>;
    setOrder(user: {
        id: string;
    }, id: string, dto: SetOrderDto): Promise<{
        lockedPositions: number;
        order: string[];
    } | undefined>;
    start(user: {
        id: string;
    }, id: string): Promise<{
        status: "ACTIVE";
        cycle: number;
        installments: number;
    }>;
    cancel(user: {
        id: string;
    }, id: string): Promise<{
        status: "CANCELLED";
    }>;
}
