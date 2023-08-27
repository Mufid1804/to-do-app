let todos: Todo[] = [
    {
      created_at: Date.now(),
      text: 'Learn how forms work',
      done: false
    }
  ]
  
  export function getTodos() {
    return todos
  }
  
  export function addTodo(text: string) {
    const todo: Todo = {
      created_at: Date.now(),
      text,
      done: false
    }
    todos.push(todo)
  }