<script>
	import TableHeader from '$lib/Tables/TableHeader.svelte';
	import TableRow from '$lib/Tables/TableRow.svelte';

	export let dark;
</script>

<div
	class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded {dark
		? 'bg-red-800 text-white'
		: 'bg-white'}"
>
	<div class="rounded-t mb-0 px-4 py-3 border-0">
		<div class="flex flex-wrap items-center">
			<div class="relative w-full px-4 max-w-full flex-grow flex-1">
				<h3 class="font-semibold text-lg {dark ? 'text-white' : 'text-blueGray-700'}">
					Card Tables
				</h3>
			</div>
		</div>
	</div>
	<div class="block w-full overflow-x-auto">
		<!-- Projects table -->
		<table class="items-center w-full bg-transparent border-collapse">
			<thead>
				<tr>
					<TableHeader {dark}>Project</TableHeader>
					<TableHeader {dark}>Budget</TableHeader>
					<TableHeader {dark}>Status</TableHeader>
					<TableHeader {dark}>Users</TableHeader>
					<TableHeader {dark}>Completion</TableHeader>
					<TableHeader {dark} />
				</tr>
			</thead>
			<tbody>
				<TableRow
					name="Notus Svelte"
					image="../assets/img/svelte-logo.svg"
					budget="100,000"
					status="completed"
				/>
				<TableRow
					name="Argon Design System"
					image="../assets/img/bootstrap.jpg"
					budget="20,000"
					status="pending"
				/>
				<TableRow
					name="Angular Now UI Kit PRO"
					image="../assets/img/angular.jpg"
					budget="1,800"
					status="completed"
				/>
				<TableRow
					name="Black Dashboard Sketch"
					image="../assets/img/sketch.jpg"
					budget="3,200"
					status="delayed"
				/>
				<TableRow
					name="React Material Dashboard"
					image="../assets/img/react.jpg"
					budget="4,400"
					status="on schedule"
				/>
				<TableRow
					name="Vue Material Dashboard"
					image="../assets/img/vue.jpg"
					budget="2,400"
					status="completed"
				/>
			</tbody>
		</table>
	</div>
</div>
