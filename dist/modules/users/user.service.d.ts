import { PrismaService } from "../../infra/database/database.service";
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getProfile(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        emailVerifiedAt: Date | null;
        createdAt: Date;
    }>;
}
