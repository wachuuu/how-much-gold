<script>
	import Header from "$lib/components/Header.svelte";
	import "../app.css";
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
</div>
