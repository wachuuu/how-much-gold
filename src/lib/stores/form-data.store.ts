import { CURRENCIES } from "$lib/constants/currencies.const";
import { EVALUATION_TIMES } from "$lib/constants/evaluation-times.const";
import { PERIOD_PICKERS } from "$lib/constants/periods.const";
import type { FormData } from "$lib/models/form-data.model";
import { writable } from "svelte/store";


const getCurrentMonthString = (): string => {
  const today = new Date()
  return `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}`;
}

export const formData = writable<FormData>({
  period: {
    format: PERIOD_PICKERS[0].format,
    units: 0, // one unit equals one minute of work
  },
  wage: {
    currency: CURRENCIES[0],
    evaluationTime: EVALUATION_TIMES[0],
    value: 0,
  },
  month: getCurrentMonthString(),
})
