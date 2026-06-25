export type Todo = {
  id: string;
  title: string;
  done: boolean;
};

export type AddTodoInput = {
  title: string;
};

export type TodoItemProps = {
  todo: Todo;
};
