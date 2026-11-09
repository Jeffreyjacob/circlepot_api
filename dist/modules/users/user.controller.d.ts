import { UserService } from "./user.service";
export declare class UsersController {
    private readonly users;
    constructor(users: UserService);
    me(user: {
        id: string;
    }): Promise<{
        id: string;
        email: string;
        name: string;
        emailVerifiedAt: Date | null;
        createdAt: Date;
    }>;
}
