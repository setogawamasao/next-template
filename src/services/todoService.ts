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

export const registerTodo = async (): Promise<TodoItem[]> => {
  const response = await client.post<TodoItem[]>(`/todo`);
  return response.data;
};
