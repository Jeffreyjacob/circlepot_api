import { Matches } from "class-validator";

export class ReferenceParams {
  @Matches(/^[A-Za-z0-9._=-]{1,100}$/)
  reference!: string;
}
