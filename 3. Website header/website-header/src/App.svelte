<script lang="ts">
	import { fade, scale } from "svelte/transition";
	import gsap from "gsap";

	let staticImages = [
		"/model-optimized.webp",
		"/model-hero.webp",
		"/mode-hero-1.webp",
	];
	let index = $state(0);

	$effect(() => {
		preloadImages(staticImages);

		const images =
			document.querySelectorAll<HTMLImageElement>(".swipeimage");

		images.forEach((img) => {
			let setX: (x: number) => void, setY: (y: number) => void;

			const parent = img;

			const align = (e: MouseEvent) => {
				const rect = parent.getBoundingClientRect();
				const offsetX = e.clientX - (rect.left + rect.width / 2);
				const offsetY = e.clientY - (rect.top + rect.height / 2);

				setX(offsetX / 10);
				setY(offsetY / 10);
			};

			const fade = gsap.to(img, {
				autoAlpha: 0.8,
				ease: "power1.out",
				paused: true,
			});

			const onMouseEnter = (e: MouseEvent) => {
				fade.play();
				const duration = 0.8;
				setX = gsap.quickTo(img, "x", {
					duration,
					ease: "power3.out",
				});
				setY = gsap.quickTo(img, "y", {
					duration,
					ease: "power3.out",
				});
				align(e);
				parent.addEventListener("mousemove", align);
			};

			const onMouseLeave = () => {
				fade.reverse();
				parent.removeEventListener("mousemove", align);
				gsap.to(img, { x: 0, y: 0, duration: 1, ease: "power3.out" });
			};

			parent.addEventListener("mouseenter", onMouseEnter);
			parent.addEventListener("mouseleave", onMouseLeave);
		});
	});
	function preloadImages(imgs: string[]) {
		imgs.forEach((src) => {
			const img = new Image();
			img.src = src;
		});
	}
	function nextImage() {
		index = (index + 1) % staticImages.length;
	}
	function prevImage() {
		index = (index - 1 + staticImages.length) % staticImages.length;
	}
	// parallax effect
	let x = 0;
	let y = 0;
	let maxMove = 20;

	function reset() {
		x = 0;
		y = 0;
	}
</script>

<div
	id="main-container"
	class="grid grid-cols-[100%] sm:grid-cols-[60%_40%] min-h-screen"
>
	<div
		id="left-col"
		class="relative flex flex-col justify-between p-10 box-border"
	>
		<header
			class="flex justify-between items-center w-[90vw] text-sm font-medium text-white"
		>
			<button
				class="flex items-center gap-2 cursor-pointer bg-none border-none text-background"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3 12H21M3 6H21M3 18H21"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<span>Menu</span>
			</button>
			<div class="flex ml-4 space-x-4">
				<a href="/" class="transition-opacity duration-300 opacity-100"
					>ENG</a
				>
				<a
					href="/"
					class="transition-opacity duration-300 opacity-50 hover:opacity-100"
					>FR</a
				>
			</div>
		</header>

		<div class="flex justify-between items-center text-white">
			<div class="font-sans text-xs uppercase">
				<p>Summer</p>
				<p>Collection</p>
				<p>2026</p>
			</div>
			<div class="flex items-center gap-4 text-xs uppercase">
				<button
					onclick={nextImage}
					class="cursor-pointer text-white/60 hover:text-white"
					>Next</button
				>
				<div class="flex-grow border-b-2 border-white/70 w-20"></div>
				<button
					onclick={prevImage}
					class="cursor-pointer text-white/60 hover:text-white"
					>Previous</button
				>
			</div>
		</div>

		<div class="main-content flex">
			<h1
				class="font-serif text-[clamp(4rem,10vw,12rem)] leading-[0.9] text-white relative top-12 text-center"
			>
				<span class="block">Summer</span>
				<span class="block">2026</span>
			</h1>
		</div>

		<footer class="flex gap-6 text-sm font-medium text-white">
			<a href="/">FB</a>
			<a href="/">PIN</a>
			<a href="/">IG</a>
		</footer>

		<div class="absolute inset-0 -z-10 w-full h-full">
			{#each staticImages as img, i (i)}
				{#if i === index}
					<img
						in:scale={{ duration: 500, start: 0.8, opacity: 0.5 }}
						out:fade={{ duration: 50 }}
						src={img}
						alt="Detailed view of the white dress"
						class="w-full h-full object-cover object-[30%_20%]"
					/>
				{/if}
			{/each}
		</div>
	</div>

	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_mouse_events_have_key_events -->
	<div
		id="right-col"
		class="grid grid-cols-[auto_1fr_auto] bg-white-rev grid-rows-[auto_auto_1fr_50px] gap-4 p-4"
	>
		<picture
			class="swipeimage col-start-3 row-start-2 -ml-[45%] mt-[30%] translat e-y-[30%] max-w-[200px] shadow-lg shadow-black/10"
		>
			<source srcset="model-1.avif" type="image/avif" />
			<source srcset="model-1.webp" type="image/webp" />
			<img
				class=""
				src="model-1.webp"
				alt="Detailed view of the white dress"
			/>
		</picture>
		<img
			src="/model-2.avif"
			alt="Full view of the white dress"
			class="swipeimage col-start-1 self-end row-start-3 max-w-[160px] mt-4 shadow-lg shadow-black/10"
		/>

		<div
			id="vertial-info"
			class="col-start-3 col-end-4 row-3 flex items-end gap-4 [writing-mode:vertical-lr] text-xs text-accent tracking-[0.1em] relative -top-40"
		>
			<span>Ref. 0002/7787</span>
			<div class="w-px h-16 bg-gray-900 relative right-2"></div>
			<span>White loose dress</span>
		</div>

		<div
			class="col-start-3 row-start-3 text-center self-end border border-primary px-10 py-3 text-xs font-medium tracking-[0.1em] hover:bg-primary hover:text-background transition-all duration-300"
		>
			SHOP NOW
		</div>
	</div>
</div>
