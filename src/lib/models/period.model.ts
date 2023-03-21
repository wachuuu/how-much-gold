export type PeriodFormat = 'hours:min' | 'hours' | 'days';

export interface Period {
  format: PeriodFormat,
  units: number,
}
