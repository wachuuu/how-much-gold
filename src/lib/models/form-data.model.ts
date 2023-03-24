import type { PeriodData } from "./period.model";
import type { Wage } from "./wage.model";

export interface FormData {
  period: PeriodData,
  wage: Wage,
  month: string,
}
