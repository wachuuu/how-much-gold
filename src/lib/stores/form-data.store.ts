import { PERIOD_PICKERS } from "$lib/constants/periods.const";
import type { FormData } from "$lib/models/form-data.model";
import { writable } from "svelte/store";

export const formData = writable<FormData>({
  period: {
    format: PERIOD_PICKERS[0].format,
    units: 0,
  }
})
