<script>
	import { createPopper } from '@popperjs/core';
	import DropdownDivider from './DropdownDivider.svelte';
	import DropdownHeading from './DropdownHeading.svelte';
	import DropdownLink from './DropdownLink.svelte';

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

	const closeDropdown = () => {
		dropdownPopoverShow = false;
	};
</script>

<div>
	<a
		class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
		href="#1"
		bind:this={btnDropdownRef}
		on:click|preventDefault={toggleDropdown}
	>
		Demo Pages
	</a>
	<div
		bind:this={popoverDropdownRef}
		class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow
			? 'block'
			: 'hidden'}"
	>
		<DropdownHeading>Admin Layout</DropdownHeading>
		<DropdownLink href="/admin/dashboard" on:click={closeDropdown}>Dashboard</DropdownLink>
		<DropdownLink href="/admin/settings" on:click={closeDropdown}>Settings</DropdownLink>
		<DropdownLink href="/admin/tables" on:click={closeDropdown}>Tables</DropdownLink>
		<DropdownLink href="/admin/maps" on:click={closeDropdown}>Maps</DropdownLink>
		<DropdownDivider />
		<DropdownHeading>Auth Layout</DropdownHeading>
		<DropdownLink href="/auth/login" on:click={closeDropdown}>Login</DropdownLink>
		<DropdownLink href="/auth/register" on:click={closeDropdown}>Register</DropdownLink>
		<DropdownDivider />
		<DropdownHeading>No Layout</DropdownHeading>
		<DropdownLink href="/" on:click={closeDropdown}>Landing</DropdownLink>
		<DropdownLink href="/profile" on:click={closeDropdown}>Profile</DropdownLink>
	</div>
</div>
