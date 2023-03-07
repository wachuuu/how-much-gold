<script>
	import "../app.css";
	import Header from './Header.svelte';
</script>

<div>
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Visit our <a href="https://github.com/wachuuu/how-much-gold">Github</a> and leave a star!</p>
	</footer>
</div>
