import { Frequency } from "../../../generated/prisma/enums";
export declare class CreateGroupDto {
    name: string;
    potKobo: number;
    seats: number;
    frequency: Frequency;
    startDate: string;
    endDate: string;
    heldPercent: number;
    lateFeeKobo: number;
    acceptRules: boolean;
}
