<script>
	import TableDropdown from '$lib/Dropdowns/TableDropdown.svelte';

	const STATUS_MAP = {
		pending: {
			percentage: 60,
			color: 'orange'
		},
		delayed: {
			percentage: 73,
			color: 'red'
		},
		completed: {
			percentage: 100,
			color: 'emerald'
		},
		'on schedule': {
			percentage: 93,
			color: 'emerald'
		}
	};

	$: color = STATUS_MAP[status]?.color ?? 'orange';
	$: percentage = STATUS_MAP[status]?.percentage ?? 60;

	export let image, name, budget, dark, status;
</script>

<tr>
	<th
		class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
	>
		<img src={image} class="h-12 w-12 bg-white rounded-full border" alt="..." />
		<span class="ml-3 font-bold {dark ? 'text-white' : 'btext-blueGray-600'}">
			{name}
		</span>
	</th>
	<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
		${budget} USD
	</td>
	<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
		<i class="fas fa-circle text-{color}-500 mr-2" />
		{status}
	</td>
	<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
		<div class="flex">
			<img
				src="../assets/img/team-1-800x800.jpg"
				alt="..."
				class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
			/>
			<img
				src="../assets/img/team-2-800x800.jpg"
				alt="..."
				class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
			/>
			<img
				src="../assets/img/team-3-800x800.jpg"
				alt="..."
				class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
			/>
			<img
				src="../assets/img/team-4-470x470.png"
				alt="..."
				class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
			/>
		</div>
	</td>
	<td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
		<div class="flex items-center">
			<span class="mr-2">{percentage}%</span>
			<div class="relative w-full">
				<div class="overflow-hidden h-2 text-xs flex rounded bg-{color}-200">
					<div
						style="width: {percentage}%;"
						class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-{color}-500"
					/>
				</div>
			</div>
		</div>
	</td>
	<td
		class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
	>
		<TableDropdown {dark} />
	</td>
</tr>
