import { QueryClient } from "@tanstack/react-query";
import { getTodos } from "@/apis/todos";

export async function prefetchTodos() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
  return queryClient;
}
