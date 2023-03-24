<script lang="ts">
  import { formData } from "$lib/stores/form-data.store";
  import PeriodPicker from "./pickers/period/PeriodPicker.svelte";
  import WagePicker from "./pickers/wage/WagePicker.svelte";
</script>

<section class="p-3">
  <PeriodPicker />
  <WagePicker />
  <pre>
    {JSON.stringify($formData)}
  </pre>
</section>
