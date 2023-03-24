<script lang="ts">
  import { CURRENCIES } from "$lib/constants/currencies.const";
  import { EVALUATION_TIMES } from "$lib/constants/evaluation-times.const";
  import { formData } from "$lib/stores/form-data.store";
  import ParamSelect from "./ParamSelect.svelte";
</script>

<form class="max-w-xl">
  <div class="my-3">
    <h3 class="my-1">Wage</h3>
    <div class="flex items-baseline">
      <input id="days" class="box-content	w-[7ch]" type="number" placeholder="Wage" bind:value={$formData.wage.value}>
      <div class="ml-auto">
        <ParamSelect bind:current={$formData.wage.currency} options={CURRENCIES} />
        /
        <ParamSelect bind:current={$formData.wage.evaluationTime} options={EVALUATION_TIMES} />
      </div>
    </div>
  </div>
</form>
