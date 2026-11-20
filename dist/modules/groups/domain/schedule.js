"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleError = void 0;
exports.buildSchedule = buildSchedule;
const enums_1 = require("../../../generated/prisma/enums");
const FrequencyInDays = {
    [enums_1.Frequency.DAILY]: 1,
    [enums_1.Frequency.MONTHLY]: 30,
    [enums_1.Frequency.WEEKLY]: 7,
};
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const MAX_SEATS = 20;
const addDays = (date, days) => new Date(date.getTime() + days * MS_PER_DAY);
function splitEvenly(total, parts) {
    const base = Math.floor(total / parts);
    const remainder = total % parts;
    return Array.from({ length: parts }, (_, i) => base + (i < remainder ? 1 : 0));
}
class ScheduleError extends Error {
}
exports.ScheduleError = ScheduleError;
function buildSchedule(input) {
    const { potKobo, seats, frequency, startDate, endDate } = input;
    if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
        throw new ScheduleError("start and end dates must be valid dates");
    }
    if (!Number.isInteger(potKobo) || potKobo <= 0) {
        throw new ScheduleError("pout must be a postive whole number of kobo");
    }
    if (!Number.isInteger(seats) || seats < 2 || seats > MAX_SEATS) {
        throw new ScheduleError("seat must be a positive integer");
    }
    if (potKobo % seats !== 0) {
        throw new ScheduleError("pot must divide evenly by the number of seats");
    }
    if (startDate.getTime() >= endDate.getTime()) {
        throw new ScheduleError("end date must be after start date");
    }
    const totalDays = Math.floor((endDate.getTime() - startDate.getTime()) / MS_PER_DAY);
    const cycleDays = Math.floor(totalDays / seats);
    const frequencyDays = FrequencyInDays[frequency];
    if (cycleDays < 1) {
        throw new ScheduleError("each cycle must be at least 1 days");
    }
    if (frequencyDays > cycleDays) {
        throw new ScheduleError("frequency can't be longer than a cycle");
    }
    const cycleAmountKobo = potKobo / seats;
    const installmentsPerCycle = Math.floor(cycleDays / frequencyDays);
    const amount = splitEvenly(cycleAmountKobo, installmentsPerCycle);
    const cycles = [];
    for (let c = 0; c < seats; c++) {
        const startsAt = addDays(startDate, c * cycleDays);
        const endsAt = c === seats - 1 ? endDate : addDays(startsAt, cycleDays);
        const installments = [];
        for (let n = 0; n < installmentsPerCycle; n++) {
            installments.push({
                sequence: n + 1,
                amountKobo: amount[n],
                dueAt: addDays(startsAt, (n + 1) * frequencyDays),
            });
        }
        cycles.push({ number: c + 1, startsAt, endsAt, installments });
    }
    return { cycleAmountKobo, cycles };
}
//# sourceMappingURL=schedule.js.map