import { DateTime } from "luxon";
import { client } from "./apiClient";
import { TodoItem } from "@/types/todoItem";
// import { parseApiError } from "./parseApiError";

export const fetchTodo = async (): Promise<TodoItem[]> => {
  const response = await client.get<TodoItem[]>(`/todo/search`);
  return response.data;
};

export const postTodo = async (todo: TodoItem): Promise<TodoItem[]> => {
  const response = await client.post(`/todo`, todo);
  return response.data;
};

export const deleteTodo = async (id: number): Promise<TodoItem[]> => {
  const response = await client.delete(`/todo/${id}`);
  return response.data;
};
