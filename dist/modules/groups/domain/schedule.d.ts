import { Frequency } from "../../../generated/prisma/enums";
export interface ScheduleInput {
    potKobo: number;
    seats: number;
    frequency: Frequency;
    startDate: Date;
    endDate: Date;
}
export interface ScheduleInstallment {
    sequence: number;
    amountKobo: number;
    dueAt: Date;
}
export interface ScheduleCycle {
    number: number;
    startsAt: Date;
    endsAt: Date;
    installments: ScheduleInstallment[];
}
export interface Schedule {
    cycleAmountKobo: number;
    cycles: ScheduleCycle[];
}
export declare class ScheduleError extends Error {
}
export declare function buildSchedule(input: ScheduleInput): Schedule;
