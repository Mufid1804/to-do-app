import * as database from '$lib/server/database';

export function load() {
	return {
		todos: database.getTodos()
	};
}

export const actions = {
	addTodo: async ({ request }) => {
		const formData = await request.formData();
		const todo = String(formData.get('text'));

		database.addTodo(todo);
	},

	deleteTodo: async ({ request }) => {
		const data = await request.formData();

		database.deleteTodo(data.get('id'));
	},

	saveTodo: async ({ url, request }) => {
		const id = url.searchParams.get('id');
		const formData = await request.formData();
		const text = String(formData.get('text'));

		database.saveTodo(id, text);
	},

	doneTodo: async ({ url, request }) => {
		const id = url.searchParams.get('id');
		const formData = await request.formData();
		const done = Boolean(formData.get('done'));

		database.doneTodo(id, done);
	}
};
