<script>
	import { createPopper } from '@popperjs/core';
	import DropdownLink from './DropdownLink.svelte';
	import clickOutside from '../../actions/useClickOutside';

	let dropdownPopoverShow = false;

	let btnDropdownRef;
	let popoverDropdownRef;

	const toggleDropdown = () => {
		if (dropdownPopoverShow) {
			dropdownPopoverShow = false;
		} else {
			dropdownPopoverShow = true;
			createPopper(btnDropdownRef, popoverDropdownRef, {
				placement: 'bottom-start'
			});
		}
	};

	const closeDropdown = (e) => {
		e?.preventDefault();
		dropdownPopoverShow = false;
	};

	export let dark;
</script>

<div>
	<a
		class="text-blueGray-500 py-1 px-3"
		href="#1"
		bind:this={btnDropdownRef}
		use:clickOutside={closeDropdown}
		on:click|preventDefault={toggleDropdown}
	>
		<i class="fas fa-ellipsis-v" class:text-white={dark} />
	</a>
	<div
		bind:this={popoverDropdownRef}
		class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow
			? 'block'
			: 'hidden'}"
	>
		<DropdownLink href="#2" on:click={closeDropdown}>Action</DropdownLink>
		<DropdownLink href="#3" on:click={closeDropdown}>Another Action</DropdownLink>
		<DropdownLink href="#4" on:click={closeDropdown}>Something else here</DropdownLink>
	</div>
</div>
