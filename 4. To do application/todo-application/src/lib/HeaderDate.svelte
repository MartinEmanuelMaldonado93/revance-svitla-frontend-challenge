<script lang="ts">
	import { dayNames, monthNames } from "../resources";

	const currentDate = new Date();
	const month = monthNames[currentDate.getMonth()];
	const dayOfMonth = currentDate.getDate();
	const dayOfWeek = dayNames[currentDate.getDay()];

	const formattedDate = `${dayOfWeek}, ${month} ${dayOfMonth}`;
</script>

<header id="app-header" class="text-center pb-5 mb-5 text-[#9396C5] relative">
	<h1 class="text-2xl font-semibold text-gray-800">{month}</h1>
	<p class="">{formattedDate}</p>
	<div
		class="relative w-[calc(100%+4rem)] -left-8 bottom-0 inset-x-0 border-t-2 border-gray-200/60"
	></div>
</header>
