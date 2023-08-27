<script>
    import TodoItem from "$lib/todo-item.svelte";

    const title = "To-dos";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<!-- Input form -->
<form action="" method="">
    <input type="text" name="text" aria-label="Add a to-dos" placeholder="+ type to add a to-do">
</form>

<!-- To-do lists -->
<TodoItem />
<TodoItem />
<TodoItem />


