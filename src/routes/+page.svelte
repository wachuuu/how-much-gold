<script lang="ts">
	import Calculator from '$lib/components/Calculator.svelte';
	import Form from '$lib/components/Form.svelte';

	let wage: number | undefined;
  let period: string | undefined;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="text-5xl mt-5 flex justify-center font-bold">
		How much gold
	</h1>

	<Form bind:wage bind:period/>
	<Calculator {wage} {period} />
</section>
