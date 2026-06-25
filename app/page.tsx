import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { prefetchTodos } from "@/lib/prefetch";
import { TodoForm } from "@/app/_components/TodoForm";
import { TodoList } from "@/app/_components/TodoList";

export default async function Home() {
  const queryClient = await prefetchTodos();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <TodoForm />
        <TodoList />
      </main>
    </HydrationBoundary>
  );
}
