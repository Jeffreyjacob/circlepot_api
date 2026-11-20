import { InviteService } from "./invite.service";
import { AcceptInviteDto } from "./dto/accept-invite.dto";
export declare class InviteController {
    private readonly inviteService;
    constructor(inviteService: InviteService);
    listForMine(user: {
        id: string;
    }): Promise<{
        id: string;
        expiresAt: Date;
        group: {
            id: string;
            potKobo: number;
            seats: number;
            frequency: import("../../generated/prisma/enums").Frequency;
            startDate: Date;
            endDate: Date;
            heldPercent: number;
            lateFreeKobo: number;
            host: {
                name: string;
            };
        };
    }[]>;
    accept(user: {
        id: string;
    }, id: string, _dto: AcceptInviteDto): Promise<{
        groupId: string;
        seatsTaken: number;
        seats: number;
    }>;
    decline(user: {
        id: string;
    }, id: string): Promise<{
        message: string;
    }>;
}
