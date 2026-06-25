import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleTodo } from "@/apis/todos";

export function useToggleTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
}
