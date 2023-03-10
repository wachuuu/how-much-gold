<script lang="ts">
  export let wage: number | undefined;
  export let period: string | undefined;
</script>

<section>
  <form>
    <input type="number" placeholder="Your wage" bind:value={wage}>
    <input type="text" placeholder="Period of time (HH:mm)" bind:value={period}>
  </form>
</section>
