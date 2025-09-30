<script lang="ts">
</script>

<div class="grid grid-cols-[60%_40%] min-h-screen md:grid-cols-1">
	<div class="left-column">
		<header class="flex justify-between items-center w-[90vw] text-sm font-medium">
			<button class="flex items-center gap-2 cursor-pointer bg-none border-none text-background">
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
				<a href="#" class="transition-opacity duration-300 opacity-100">ENG</a>
				<a href="#" class="transition-opacity duration-300 opacity-50 hover:opacity-100">FR</a>
			</div>
		</header>

		<div class="flex justify-between items-center text-white">
			<div class="font-sans text-xs uppercase">
				<p>Summer</p>
				<p>Collection</p>
				<p>2026</p>
			</div>
			<div class="flex items-center gap-4 text-xs uppercase">
				<a href="#">Next</a>
				<div class="flex-grow border-b-2 border-white/70"></div>
				<a href="#">Previous</a>
			</div>
		</div>
		<div class="main-content">
			<h1 class="font-serif text-[clamp(4rem,10vw,12rem)] leading-[0.9] text-white relative top-12 text-center">
				<span class="block">Summer</span>
				<span class="block">2026</span>
			</h1>
		</div>

		<footer class="main-footer">
			<a href="#">FB</a>
			<a href="#">PIN</a>
			<a href="#">IG</a>
		</footer>

		<div class="background-image">
			<img
				src="https://images.pexels.com/photos/33692732/pexels-photo-33692732.jpeg?_gl=1*89z8bu*_ga*MTY0ODMwNzU1OC4xNzU5MjM1MTMx*_ga_8JE65Q40S6*czE3NTkyMzUxMzEkbzEkZzEkdDE3NTkyMzY0MjkkajIzJGwwJGgw"
				alt="Modelo con un vestido blanco de cuello desbocado"
			/>
		</div>
	</div>

	<div class="grid grid-cols-[auto_1fr_auto] grid-rows-[auto_auto_1fr_50px] gap-4 p-4">
		<img
			src="https://images.pexels.com/photos/33692298/pexels-photo-33692298.jpeg?_gl=1*rnu8o4*_ga*MTY0ODMwNzU1OC4xNzU5MjM1MTMx*_ga_8JE65Q40S6*czE3NTkyMzU1MzEkbzEkZzEkdDE3NTkyMzY1NzAkajU5JGwwJGgw"
			alt="Vista detallada del vestido blanco"
			class="col-start-3 row-start-2 -ml-[45%] translate-y-[30%] max-w-[200px] shadow-lg shadow-black/10"
		/>
		<img
			src="https://images.pexels.com/photos/33692267/pexels-photo-33692267.jpeg?_gl=1*jyukcp*_ga*MTY0ODMwNzU1OC4xNzU5MjM1MTMx*_ga_8JE65Q40S6*czE3NTkyMzUxMzEkbzEkZzEkdDE3NTkyMzY2MjYkajMkbDAkaHD."
			alt="Vista completa del vestido blanco"
			class="col-start-1 row-start-3 max-w-[160px] mt-4 shadow-lg shadow-black/10"
		/>
		<div class="col-start-3 row-start-3 flex items-end gap-4 [writing-mode:vertical-lr] text-xs text-accent tracking-wide relative -top-10">
			<span>Ref. 0002/7787</span>
			<div class="w-px h-16 bg-accent"></div>
			<span>White loose dress</span>
		</div>

		<a href="#" class="col-start-3 row-start-3 border border-primary px-8 py-2 text-xs font-medium tracking-wide hover:bg-primary hover:text-background transition-all duration-300">SHOP NOW</a>
	</div>
</div>
