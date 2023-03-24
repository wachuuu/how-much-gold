<script lang="ts">
  import { formData } from "$lib/stores/form-data.store";
  import PeriodPicker from "./pickers/period/PeriodPicker.svelte";
</script>

<section class="p-3">
  <PeriodPicker />
  <pre>
    {JSON.stringify($formData)}
  </pre>
</section>
