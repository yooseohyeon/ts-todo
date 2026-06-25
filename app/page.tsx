"use client";

import { TodoForm } from "@/app/_components/TodoForm";
import { TodoList } from "@/app/_components/TodoList";

export default function Home() {
  return (
    <main>
      <TodoForm />
      <TodoList />
    </main>
  );
}
