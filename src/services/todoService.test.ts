import { SearchConditions } from "@/types/searchCondition";
import { fetchTodo } from "./todoService";

describe("検索条件のテスト", () => {
  test("配列の検証", async () => {
    const searchCondition: SearchConditions = {
      title: "test",
      description: "test",
      isDone: true,
      dueDateFrom: new Date(),
      dueDateTo: new Date(),
      createdAtFrom: new Date(),
      createdAtTo: new Date(),
    };
    await fetchTodo(searchCondition);
  });
});
