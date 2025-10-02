<script lang="ts">
	import HeaderDate from "./lib/HeaderDate.svelte";
	import { happyIconSVG, neutralIconSVG, tasksFromDB } from "./resources";

	type Task = {
		id: number;
		text: string;
		completed: boolean;
	};

	let tasks = $state<Task[]>(tasksFromDB);
	let newTaskText = $state("");

	function toggleCompleted(task: Task) {
		task.completed = !task.completed;
	}
	function onSubmitTask(event: Event) {
		event.preventDefault();
		if (newTaskText.trim() === "") return;

		const newTask: Task = {
			id: Date.now(),
			text: newTaskText,
			completed: false,
		};

		tasks.push(newTask);

		newTaskText = "";
	}
</script>

<main class="bg-white sm:w-[380px] sm:max-w-[90%] p-8 px-4 pb-0 shadow-lg rounded-sm">
	<HeaderDate />

	<ul class="space-y-4">
		{#each tasks as task (task.id)}
			<li
				class="group flex justify-between items-center py-3 border-b border-gray-100"
			>
				<button
					class="cursor-pointer md:opacity-0 ml-0 mr-2 group-hover:opacity-100 duration-500 transition-opacity text-gray-400"
					onclick={(e) => {
						e.stopPropagation();
						tasks = tasks.filter((t) => t.id !== task.id);
					}}>x</button
				>
				<span
					class="grow"
					class:line-through={task.completed}
					class:text-gray-400={task.completed}
				>
					{task.text}
				</span>
				<button
					onclick={() => toggleCompleted(task)}
					class="cursor-pointer text-{task.completed
						? 'primary-green'
						: 'gray-300'} hover:text-primary-green transition-colors"
				>
					{#if task.completed}
						{@html happyIconSVG}
					{:else}
						{@html neutralIconSVG}
					{/if}
				</button>
			</li>
		{/each}
	</ul>

	<form class="mt-6 text-center" onsubmit={onSubmitTask}>
		<input
			bind:value={newTaskText}
			type="text"
			placeholder="Add Task"
			class="w-full border border-[#9396C5] text-[#9396C5] p-3 text-primary-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
		/>
		<button
			type="submit"
			class="bg-[#6bd597] cursor-pointer relative text-white font-medium px-6 py-2 rounded-full hover:bg-[#00b386] transition-all shadow-lg hover:-translate-y-0.5 mt-4 top-4"
		>
			Add
		</button>
	</form>
</main>
