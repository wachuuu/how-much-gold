<script>
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import "../app.css";
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main>
		<slot />
	</main>

	<div class="mt-auto">
		<Footer />
	</div>
</div>
