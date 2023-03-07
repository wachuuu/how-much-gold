<script lang="ts">
  export let wage: number | undefined;
  export let period: string | undefined;
</script>

<section class="dark:bg-black p-5">
  <form>
    <input type="text" placeholder="Period of time (HH:mm)" bind:value={period}>
    <input type="number" placeholder="Your wage" bind:value={wage}>
  </form>
</section>
