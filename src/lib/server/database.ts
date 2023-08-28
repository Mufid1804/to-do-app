const database = new Map();

export function getTodos() {
	return [...database].map(([id, todo]) => ({ id, ...todo }));
}

export function addTodo(text: string) {
	const id = crypto.randomUUID();

	database.set(id, {
		text,
		done: false
	});
}

export function deleteTodo(id: any) {
	database.delete(id);
}

export function saveTodo(id: any, text: string) {
	database.set(id, {
		text,
		done: false
	});
}

export function doneTodo(id: any, done: boolean) {
	const existingTodo = database.get(id);
	database.set(id, {
		...existingTodo,
		done: done
	});
}
