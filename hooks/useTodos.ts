import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/apis/todos";
import type { Todo } from "@/types";

export function useTodos() {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
}
