import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "@/apis/todos";

export function useAddTodo(onSuccess?: () => void) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      onSuccess?.();
    },
  });
}
