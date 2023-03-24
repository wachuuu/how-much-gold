import type { PeriodFormat } from "$lib/models/period.model";
import type { SvelteComponent } from "svelte";
import DaysPeriod from "../components/pickers/period/DaysPeriod.svelte";
import HourPeriod from "../components/pickers/period/HourPeriod.svelte";
import HrMinPeriod from "../components/pickers/period/HrMinPeriod.svelte";

export interface PeriodPicker {
  format: PeriodFormat;
  component: typeof SvelteComponent;
}

export const PERIOD_PICKERS: PeriodPicker[] = [
  { format: 'hours:min', component: HrMinPeriod },
  { format: 'hours', component: HourPeriod },
  { format: 'days', component: DaysPeriod },
];
