<script lang="ts">
  import { PERIOD_PICKERS } from "$lib/constants/periods.const";
  import type { PeriodFormat } from "$lib/models/period.model";
  import { formData } from "$lib/stores/form-data.store";
  import type { SvelteComponent } from "svelte";
  import PeriodSelect from "./PeriodSelect.svelte";

  const avialableFormats: PeriodFormat[] = PERIOD_PICKERS.map(item => item.format);

  const getComponentByFormat = (format: PeriodFormat): typeof SvelteComponent | undefined => {
    return PERIOD_PICKERS.find((item) => item.format === format)?.component;
  };

  $: component = getComponentByFormat($formData.period.format);
</script>

<form class="max-w-xl">
  <div class="my-3">
    <h3 class="my-1">Time</h3>
    <div class="flex align-baseline">
      <svelte:component this={component} bind:units={$formData.period.units} />
      <PeriodSelect bind:format={$formData.period.format} options={avialableFormats} />
    </div>
  </div>
</form>
