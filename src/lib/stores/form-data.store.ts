import type { FormData } from "$lib/models/form-data.model";
import { writable } from "svelte/store";

export const formData = writable<FormData>({
  period: {
    format: 'hours:min',
    units: 0,
  }
})
