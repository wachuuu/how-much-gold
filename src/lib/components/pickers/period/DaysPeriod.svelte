<script lang="ts">
  export let units: number;

  const DAYS_TO_UNITS_MULTIPLIER = 60 * 8;
  let days: number;

  $: units = (days ?? 0) * DAYS_TO_UNITS_MULTIPLIER 
</script>

<input id="days" class="box-content	w-[7ch]" type="number" placeholder="Days" bind:value={days}>
