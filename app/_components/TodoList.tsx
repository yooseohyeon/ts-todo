"use client";

import { useTodos } from "@/hooks/useTodos";
import { useDeleteTodo } from "@/hooks/useDeleteTodo";
import { useToggleTodo } from "@/hooks/useToggleTodo";

export function TodoList() {
  const { data: todos, isLoading, error } = useTodos();

  const {
    mutate: deleteTodoMutate,
    isPending: isPendingDelete,
    variables,
  } = useDeleteTodo();

  const { mutate: toggleTodoMutate } = useToggleTodo();

  if (isLoading) {
    return <div>로딩 중입니다</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>
          <p>{todo.title}</p>
          <button
            onClick={() => deleteTodoMutate(todo.id)}
            disabled={isPendingDelete && variables === todo.id}
          >
            {isPendingDelete && variables === todo.id ? "삭제 중..." : "삭제"}
          </button>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodoMutate(todo)}
          />
        </li>
      ))}
    </ul>
  );
}
