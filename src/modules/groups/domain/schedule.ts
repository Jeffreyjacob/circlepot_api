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

const FrequencyInDays: Record<Frequency, number> = {
  [Frequency.DAILY]: 1,
  [Frequency.MONTHLY]: 30,
  [Frequency.WEEKLY]: 7,
};

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const MAX_SEATS = 20;

const addDays = (date: Date, days: number) =>
  new Date(date.getTime() + days * MS_PER_DAY);

function splitEvenly(total: number, parts: number) {
  const base = Math.floor(total / parts);
  const remainder = total % parts;

  return Array.from(
    { length: parts },
    (_, i) => base + (i < remainder ? 1 : 0)
  );
}

export class ScheduleError extends Error {}
export function buildSchedule(input: ScheduleInput): Schedule {
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

  const totalDays = Math.floor(
    (endDate.getTime() - startDate.getTime()) / MS_PER_DAY
  );
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

  const cycles: ScheduleCycle[] = [];

  for (let c = 0; c < seats; c++) {
    const startsAt = addDays(startDate, c * cycleDays);
    const endsAt = c === seats - 1 ? endDate : addDays(startsAt, cycleDays);

    const installments: ScheduleInstallment[] = [];
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
