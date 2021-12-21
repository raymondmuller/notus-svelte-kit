<script>
	import AdminNavbar from '$lib/Navbars/AdminNavbar.svelte';
	import FooterCompact from '$lib/Footers/FooterCompact.svelte';
	import HeaderStats from '$lib/Headers/HeaderStats.svelte';
	import Sidebar from '$lib/Sidebar/Sidebar.svelte';
</script>

<div>
	<Sidebar />
	<div class="relative md:ml-64 bg-blueGray-100">
		<AdminNavbar />
		<HeaderStats />
		<div class="px-4 md:px-10 mx-auto w-full -m-24">
			<slot />
			<FooterCompact />
		</div>
	</div>
</div>
