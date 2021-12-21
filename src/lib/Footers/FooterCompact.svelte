<script>
	import FooterLink from './FooterLink.svelte';
	const date = new Date().getFullYear();
	export let absolute = false;
	export let dark = false;
</script>

<footer class="pb-6 {absolute ? 'absolute w-full bottom-0 bg-blueGray-800' : 'relative'}">
	<div class="container mx-auto px-4">
		<hr class="mb-6 border-b-1 border-blueGray-600" />
		<div class="flex flex-wrap items-center md:justify-between justify-center">
			<div class="w-full md:w-4/12 px-4">
				<div class="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
					Copyright © {date}
					<a
						href="https://www.creative-tim.com?ref=ns-footer-small"
						class="{dark
							? 'text-white hover:text-blueGray-300'
							: 'text-blueGray-500 hover:text-blueGray-700'} text-sm font-semibold py-1 px-1"
					>
						Creative Tim
					</a>
				</div>
			</div>
			<div class="w-full md:w-8/12 px-4">
				<ul class="flex flex-wrap list-none md:justify-end justify-center">
					<li>
						<FooterLink {dark} href="https://www.creative-tim.com?ref=ns-footer-small" class="px-3"
							>Creative Tim</FooterLink
						>
					</li>
					<li>
						<FooterLink
							{dark}
							href="https://www.creative-tim.com/presentation?ref=ns-footer-small"
							class="px-3">About Us</FooterLink
						>
					</li>
					<li>
						<FooterLink {dark} href="http://blog.creative-tim.com?ref=ns-footer-small" class="px-3"
							>Blog</FooterLink
						>
					</li>
					<li>
						<FooterLink
							{dark}
							href="https://github.com/creativetimofficial/notus-svelte/blob/main/LICENSE.md?ref=ns-footer-small"
							class="px-3">MIT License</FooterLink
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>
