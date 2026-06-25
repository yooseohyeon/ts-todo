import type { Todo, AddTodoInput } from "@/types";

export const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch("http://localhost:4000/todos");
  if (!response.ok) {
    throw new Error("투두리스트를 불러오는 데 실패했습니다.");
  }
  return response.json();
};

export const addTodo = async (newTodo: AddTodoInput): Promise<Todo> => {
  const response = await fetch("http://localhost:4000/todos", {
    method: "POST",
    body: JSON.stringify({ ...newTodo, done: false }),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("투두리스트를 추가하는 데 실패했습니다.");
  }
  return response.json();
};

export const deleteTodo = async (id: string) => {
  const response = await fetch(`http://localhost:4000/todos/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("투두리스트를 삭제하는 데 실패했습니다.");
  }
};

export const toggleTodo = async (todo: Todo): Promise<Todo> => {
  const response = await fetch(`http://localhost:4000/todos/${todo.id}`, {
    method: "PATCH",
    body: JSON.stringify({ done: !todo.done }),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("투두리스트의 완료 여부를 수정하는 데 실패했습니다.");
  }
  return response.json();
};
