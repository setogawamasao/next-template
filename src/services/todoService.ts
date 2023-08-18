// import { UserItem } from "./userService";
import { client } from "./apiClient";
// import { parseApiError } from "./parseApiError";

export type TodoItem = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  isDone: boolean;
  createdAt: string;
  updatedAt: string;
};

export const fetchTodo = async (): Promise<TodoItem[]> => {
  const response = await client.get<TodoItem[]>(`/todo/search`);
  return response.data;
};
