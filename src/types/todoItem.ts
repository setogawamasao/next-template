// HINT:https://zenn.dev/luvmini511/articles/6c6f69481c2d17#3-2-type%E6%B4%BE
export type TodoItem = {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  isDone: boolean;
  createdAt: Date;
  updatedAt: Date;
};
