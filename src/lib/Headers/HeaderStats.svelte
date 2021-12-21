<script>
	import CardStats from '$lib/Cards/CardStats.svelte';
</script>

<!-- Header -->
<div class="relative bg-red-500 md:pt-32 pb-32 pt-12">
	<div class="px-4 md:px-10 mx-auto w-full">
		<div>
			<!-- Cards -->
			<div class="flex flex-wrap">
				<div class="w-full lg:w-6/12 xl:w-3/12 px-4">
					<CardStats
						arrow="up"
						description="Since last month"
						iconColor="bg-red-500"
						iconName="far fa-chart-bar"
						percent="3.48"
						percentColor="text-emerald-500"
						subtitle="TRAFFIC"
						title="350,897"
					/>
				</div>
				<div class="w-full lg:w-6/12 xl:w-3/12 px-4">
					<CardStats
						arrow="down"
						description="Since last week"
						iconColor="bg-orange-500"
						iconName="fas fa-chart-pie"
						percent="3.48"
						percentColor="text-red-500"
						subtitle="NEW USERS"
						title="2,356"
					/>
				</div>
				<div class="w-full lg:w-6/12 xl:w-3/12 px-4">
					<CardStats
						arrow="down"
						description="Since yesterday"
						iconColor="bg-pink-500"
						iconName="fas fa-users"
						percent="1.10"
						percentColor="text-orange-500"
						subtitle="SALES"
						title="924"
					/>
				</div>
				<div class="w-full lg:w-6/12 xl:w-3/12 px-4">
					<CardStats
						arrow="up"
						description="Since last month"
						iconColor="bg-emerald-500"
						iconName="fas fa-percent"
						percent="12"
						percentColor="text-emerald-500"
						subtitle="PERFORMANCE"
						title="49,65%"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
