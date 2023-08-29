import { prisma } from '$src/lib/server/prisma';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		todos: await prisma.todos.findMany()
	};
};

export const actions: Actions = {
	createTodo: async ({ request }) => {
		const { text } = Object.fromEntries(await request.formData()) as {
			text: string;
		};

		if (!text) {
			return fail(400, { message: 'Invalid request' });
		}

		try {
			await prisma.todos.create({
				data: {
					text
				}
			});
		} catch (err) {
			console.log(err);
			return fail(500, { message: 'Could not create todo' });
		}

		return {
			status: 201
		};
	},

	deleteTodo: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Invalid request' });
		}

		try {
			await prisma.todos.delete({
				where: {
					id: id
				}
			});
		} catch (err) {
			return fail(500, { message: 'Something went wrong when deleting todo' });
		}

		return {
			status: 200
		};
	},

	updateTodo: async ({ url, request }) => {
		
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Invalid request' });
		}

		const { text } = Object.fromEntries(await request.formData()) as { text: string };

		if (!text) {
			return fail(400, { message: 'Invalid request' });
		}

		try {
			await prisma.todos.update({
				where: {
					id: id
				},
				data: {
					text
				}
			});
		} catch (err) {
			console.log(err);
			return fail(500, { message: 'Could not update todo' });
		}

		return {
			status: 200
		};
	},

	doneTodo: async ({ url, request }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Invalid request' });
		}

		const { done } = Object.fromEntries(await request.formData()) as { done: string };

		try {
			await prisma.todos.update({
				where: {
					id: id
				},
				data: {
					done: Boolean(done)
				}
			});
		} catch (err) {
			console.log(err);
			return fail(500, { message: 'Could not check todo' });
		}

		return {
			status: 200
		};
	}
};
