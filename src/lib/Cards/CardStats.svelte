<script>
	export let subtitle = 'Traffic';
	export let title = '350,897';
	// The value must match one of these strings
	// "up" or "down"
	export let arrow = 'up';
	export let percent = '3.48';
	// can be any of the text color utilities
	// from tailwindcss
	export let percentColor = 'text-emerald-500';
	export let description = 'Since last month';
	export let iconName = 'far fa-chart-bar';
	// can be any of the background color utilities
	// from tailwindcss
	export let iconColor = 'bg-red-500';
</script>

<div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
	<div class="flex-auto p-4">
		<div class="flex flex-wrap">
			<div class="relative w-full pr-4 max-w-full flex-grow flex-1">
				<h5 class="text-blueGray-400 uppercase font-bold text-xs">
					{subtitle}
				</h5>
				<span class="font-semibold text-xl text-blueGray-700">
					{title}
				</span>
			</div>
			<div class="relative w-auto pl-4 flex-initial">
				<div
					class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full {iconColor}"
				>
					<i class={iconName} />
				</div>
			</div>
		</div>
		<p class="text-sm text-blueGray-400 mt-4">
			<span class="mr-2 {percentColor}">
				<i class={arrow === 'up' ? 'fas fa-arrow-up' : 'fas fa-arrow-down'} />
				{percent}%
			</span>
			<span class="whitespace-nowrap">{description}</span>
		</p>
	</div>
</div>
