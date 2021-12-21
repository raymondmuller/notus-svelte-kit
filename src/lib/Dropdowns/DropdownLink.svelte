<script>
	export let href;
</script>

<a
	{href}
	on:click
	class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
>
	<slot />
</a>
