<script lang="ts">
  import { formData } from "$lib/stores/form-data.store";
  import TimePicker from "./pickers/period/PeriodPicker.svelte";
</script>

<section class="p-3">
  <TimePicker />
  <pre>
    {JSON.stringify($formData)}
  </pre>
</section>
