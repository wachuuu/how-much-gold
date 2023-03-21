<script lang="ts">
  import type { PeriodFormat } from "$lib/models/period.model";

  export let format: PeriodFormat;
  export let options: PeriodFormat[];
</script>

<select class="ml-auto" bind:value={format}>
  {#each options as option}
    <option value={option}>{ option }</option>
  {/each}    
</select>
