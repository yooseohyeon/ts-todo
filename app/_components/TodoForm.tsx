"use client";

import { useState } from "react";
import { useAddTodo } from "@/hooks/useAddTodo";

export function TodoForm() {
  const [inputValue, setInputValue] = useState("");

  const { mutate: addTodoMutate, isPending: isPendingAdd } = useAddTodo(() => {
    setInputValue("");
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    addTodoMutate({ title: inputValue });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="투두를 입력해주세요"
      />
      <button type="submit" disabled={isPendingAdd}>
        {isPendingAdd ? "추가 중..." : "추가"}
      </button>
    </form>
  );
}
