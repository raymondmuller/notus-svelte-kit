<script>
	let className;
	export let dark;
	export let href;
	export { className as class };
</script>

<a
	{href}
	class="{dark
		? 'text-white hover:text-blueGray-300'
		: 'text-blueGray-500 hover:text-blueGray-700'} text-sm font-semibold block py-1 {className}"
>
	<slot />
</a>
