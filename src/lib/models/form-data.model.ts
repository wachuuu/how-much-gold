import type { PeriodData } from "./period.model";
import type { Wage } from "./wage.model";

// TODO: add more props
export interface FormData {
  period: PeriodData,
  wage: Wage,
  // month: string,
}
