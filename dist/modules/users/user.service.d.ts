import { PrismaService } from "../../infra/database/database.service";
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getProfile(id: string): Promise<{
        name: string;
        id: string;
        email: string;
        createdAt: Date;
        emailVerifiedAt: Date | null;
    }>;
}
