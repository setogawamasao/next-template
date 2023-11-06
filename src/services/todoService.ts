import { client } from "./apiClient";
import { TodoItem } from "@/types/todoItem";
import { SearchConditions } from "@/types/searchCondition";
import { convertDateToString, isDateType } from "@/utils/dateUtil";

export const fetchTodo = async (
  searchConditions: SearchConditions,
): Promise<TodoItem[]> => {
  // クエリストリングの構築
  let queryString = "?";
  for (const key in searchConditions) {
    let searchCondition = searchConditions[key as keyof SearchConditions];

    if (searchCondition) {
      if (isDateType(searchCondition)) {
        searchCondition = convertDateToString(searchCondition as Date);
      }

      queryString = `${queryString}${key}=${searchCondition}&`;
    }
  }

  // 行末の&または？を切り取る
  const lastCharacter = queryString.slice(-1);
  if (["&", "?"].includes(lastCharacter)) {
    queryString = queryString.slice(0, -1);
  }

  const response = await client.get<TodoItem[]>(`/todo/search${queryString}`);
  return response.data;
};

export const postTodo = async (todo: TodoItem): Promise<TodoItem[]> => {
  const response = await client.post(`/todo`, todo);
  return response.data as TodoItem[];
};

export const patchTodo = async (todo: TodoItem): Promise<TodoItem[]> => {
  const response = await client.patch(`/todo`, todo);
  return response.data as TodoItem[];
};

export const deleteTodo = async (id: number): Promise<TodoItem[]> => {
  const response = await client.delete(`/todo/${id}`);
  return response.data as TodoItem[];
};
