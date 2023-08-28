<script lang="ts">
	import TodoItem from '$lib/todo-item.svelte';
	import type { PageData } from './$types';
	
	export let data: PageData

	$: ({ todos } = data)

	const title = 'To-dos';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<div class="todos">
	<!-- Input form -->
	<form method="post" action="?/createTodo" class="new">
		<input type="text" name="text" aria-label="Add a to-dos" placeholder="+ type to add a to-do" />
	</form>

	<!-- To-do lists -->
	{#each todos as todo}
		<TodoItem {todo}/>
	{/each}
</div>

<style>
	.todos {
		width: 100%;
		max-width: 42rem;
		margin: 2.5rem auto 0 auto;
	}

	.new {
		margin: 0 0 0.5rem 0;
	}

	.new input {
		font-size: 1.5rem;
		width: 100%;
		padding: 0.5em 1em 0.3em 1em;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 8px;
		text-align: center;
	}

	.todos :global(input) {
		border: 1px solid transparent;
	}

	.todos :global(input:focus-visible) {
		box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
		border: 1px solid #ff3e00 !important;
		outline: none;
	}
</style>
