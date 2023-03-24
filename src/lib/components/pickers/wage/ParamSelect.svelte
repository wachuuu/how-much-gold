<script lang="ts">
  export let current: string;
  export let options: string[];
</script>

<select bind:value={current}>
  {#each options as option}
    <option value={option}>{ option }</option>
  {/each}    
</select>
