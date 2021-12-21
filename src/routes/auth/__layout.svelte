<script>
	import AuthNavbar from '$lib/Navbars/AuthNavbar.svelte';
	import FooterCompact from '$lib/Footers/FooterCompact.svelte';
</script>

<div>
	<AuthNavbar />
	<main>
		<section class="relative w-full h-full py-40 min-h-screen">
			<div
				class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
				style="background-image: url('../assets/img/register_bg_2.png');"
			/>
			<slot />
			<FooterCompact dark absolute="true" />
		</section>
	</main>
</div>
