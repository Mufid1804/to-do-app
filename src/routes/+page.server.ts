import { fail } from '@sveltejs/kit'

// TODO: persist in database
import { addTodo, getTodos } from '$lib/server/data';

export async function load() {
  const todos = getTodos()
  return { todos }
}


export const actions = {
    addTodo: async ({ request }) => {
      const formData = await request.formData();
      const todo = String(formData.get("text"))

      if (!todo) {
        return fail(400, { todo, missing: true })
      }

      addTodo(todo)
      
      return {success: true};
  }
};

