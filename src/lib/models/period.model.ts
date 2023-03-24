export type PeriodFormat = 'hours:min' | 'hours' | 'days';

export interface PeriodData {
  format: PeriodFormat,
  units: number,
}
