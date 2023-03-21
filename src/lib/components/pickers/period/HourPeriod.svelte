<script lang="ts">
  export let units: number;

  const HOURS_TO_UNITS_MULTIPLIER = 60;
  let hours: number;

  $: units = (hours ?? 0) * HOURS_TO_UNITS_MULTIPLIER 
</script>

<input class="box-content	w-[7ch]" type="number" placeholder="Hours" bind:value={hours}>
