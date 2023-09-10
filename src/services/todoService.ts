import { DateTime } from "luxon";
// import { UserItem } from "./userService";
import { client } from "./apiClient";
// import { parseApiError } from "./parseApiError";

export type TodoItem = {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  isDone: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export const fetchTodo = async (): Promise<TodoItem[]> => {
  const response = await client.get<TodoItem[]>(`/todo/search`);
  return response.data;
};

export const postTodo = async (todo: TodoItem): Promise<TodoItem[]> => {
  console.log("todo", todo);

  const todo1 = {
    title: todo.title,
    description: todo.description,
    dueDate: todo.dueDate,
    isDone: todo.isDone,
  };

  const response = await client.post(`/todo`, todo1);
  return response.data;
};
