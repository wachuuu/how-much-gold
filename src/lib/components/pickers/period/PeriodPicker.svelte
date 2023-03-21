<script lang="ts">
  import type { PeriodFormat } from "$lib/models/period.model";
  import { formData } from "$lib/stores/form-data.store";
  import type { SvelteComponent } from "svelte";
  import DaysPeriod from "./DaysPeriod.svelte";
  import HourPeriod from "./HourPeriod.svelte";
  import HrMinPeriod from "./HrMinPeriod.svelte";
  import PeriodSelect from "./PeriodSelect.svelte";

  interface PeriodComponent {
    format: PeriodFormat;
    component: typeof SvelteComponent;
  }

  const periodComponents: PeriodComponent[] = [
    { format: 'hours:min', component: HrMinPeriod },
    { format: 'hours', component: HourPeriod },
    { format: 'days', component: DaysPeriod },
  ];

  const avialableFormats: PeriodFormat[] = periodComponents.map(item => item.format);

  const getComponentByFormat = (format: PeriodFormat): typeof SvelteComponent | undefined => {
    return periodComponents.find((item) => item.format === format)?.component;
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
