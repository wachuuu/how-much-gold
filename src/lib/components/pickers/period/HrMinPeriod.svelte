<script lang="ts">
  export let units: number;
  
  const HOURS_TO_UNITS_MULTIPLIER = 60;
  const MINUTES_TO_UNITS_MULTIPLIER = 1;

  let hours: number;
  let minutes: number;
  
  $: units = (hours ?? 0) * HOURS_TO_UNITS_MULTIPLIER 
           + (minutes ?? 0) * MINUTES_TO_UNITS_MULTIPLIER;
</script>

<div>
  <input class="box-content	w-[7ch]" type="number" placeholder="Hours" bind:value={hours}>
  :
  <input class="box-content	w-[7ch]" type="number" placeholder="Minutes" bind:value={minutes}>
</div>
