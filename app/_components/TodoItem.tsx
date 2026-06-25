"use client";

import { TodoItemProps } from "@/types";
import { useDeleteTodo } from "@/hooks/useDeleteTodo";
import { useToggleTodo } from "@/hooks/useToggleTodo";

export function TodoItem({ todo }: TodoItemProps) {
  const { mutate: deleteTodoMutate, isPending } = useDeleteTodo();
  const { mutate: toggleTodoMutate } = useToggleTodo();

  return (
    <li>
      <p>{todo.title}</p>
      <button onClick={() => deleteTodoMutate(todo.id)} disabled={isPending}>
        {isPending ? "삭제 중..." : "삭제"}
      </button>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodoMutate(todo)}
      />
    </li>
  );
}
