<script lang="ts">
  export let wage: number | undefined;
  export let period: string | undefined;

  let output: number | undefined;

  $: if(wage && period) {
    output = Math.round(gib$(period, wage) * 100) / 100
  }

  const gib$ = (period: string, wagePerHour: number): number => {
    const wagePerMinute = wagePerHour / 60;
    const [hours, minutes] = period.split(':').map(x => Number(x));
    return (hours * 60 + minutes) * wagePerMinute;
  }
</script>

<div>
  {#if output}
    <span>
      { output }
    </span>
  {/if}
</div>
