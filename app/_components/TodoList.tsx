"use client";

import { useTodos } from "@/hooks/useTodos";
import { TodoItem } from "@/app/_components/TodoItem";

export function TodoList() {
  const { data: todos, isLoading, error } = useTodos();

  if (isLoading) {
    return <div>로딩 중입니다</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ul>
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
