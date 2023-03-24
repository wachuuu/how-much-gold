<script lang="ts">
  import { formData } from "$lib/stores/form-data.store";
</script>

<form class="max-w-xl">
  <div class="my-3">
    <h3 class="my-1">Month</h3>
    <input type="month" bind:value={$formData.month}>
  </div>
</form>
