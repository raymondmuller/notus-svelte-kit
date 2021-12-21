<script>
	export let dark;
</script>

<th
	class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {dark
		? 'bg-red-700 text-red-200 border-red-600'
		: 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'}"
>
	<slot />
</th>
