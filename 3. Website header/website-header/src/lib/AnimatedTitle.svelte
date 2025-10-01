<script lang="ts">
	import gsap from "gsap";

	let text: string = "Summer";
	let stagger = 0.05;
	let delay = 0;
	let fromY = 20;
	let duration = 0.6;
	let ease = "power2.out";

	let lines = $state<string[][]>([[]]);

	$effect(() => {
		lines = text
			.split("\n")
			.map((line) =>
				line.split("").map((l) => (l === " " ? "\u00A0" : l))
			);
		const letters =
			document.querySelectorAll<HTMLElement>(".animated-letter");

		gsap.fromTo(
			letters,
			{ opacity: 0, y: fromY },
			{
				opacity: 1,
				y: 0,
				duration,
				ease,
				delay,
				stagger,
			}
		);
	});
</script>

<h1
	class="font-serif text-[clamp(4rem,10vw,12rem)] leading-[0.9] text-white text-center relative"
>
	{#each lines as line}
		<span class="block">
			{#each line as letter}
				<span class="animated-letter inline-block">{letter}</span>
			{/each}
		</span>
	{/each}
</h1>
