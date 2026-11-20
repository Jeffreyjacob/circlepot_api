import { PrismaService } from "../../infra/database/database.service";
import { ConfigService } from "@nestjs/config";
import { MailQueueService } from "../mail/mail.queue.service";
export declare class InviteService {
    private readonly prisma;
    private readonly config;
    private readonly mailQueue;
    constructor(prisma: PrismaService, config: ConfigService, mailQueue: MailQueueService);
    invite(hostId: string, groupId: string, email: string): Promise<{
        id: string;
        email: string;
        expiresAt: Date;
    }>;
    listForHost(hostId: string, groupId: string): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        expiresAt: Date;
        acceptedAt: Date | null;
        declinedAt: Date | null;
    }[]>;
    private emailOf;
    listMine(userId: string): Promise<{
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
    accept(userId: string, inviteId: string): Promise<{
        groupId: string;
        seatsTaken: number;
        seats: number;
    }>;
    decline(userId: string, inviteId: string): Promise<{
        message: string;
    }>;
}
