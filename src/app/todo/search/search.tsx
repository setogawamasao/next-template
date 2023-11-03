"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMagnifyingGlass,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { deleteTodo, fetchTodo } from "@/services/todoService";
import { TodoItem } from "@/types/todoItem";
import { convertDateToString } from "@/utils/dateUtil";
import {
  Panel,
  PanelHeader,
  PanelHeaderButton,
  PanelBlock,
} from "@/components/panel";
import { Column, ColumnLabel, Columns, TwoColumn } from "@/components/column";
import { TableContainer, TableHeader } from "@/components/table";
import { PageTitle } from "@/components/pageTitle";
import { useTodoStore } from "@/states/todoStore";
import { useLoading } from "@/states/loadingStore";
import { useMessage } from "@/states/messageStore";
import { SearchConditions } from "@/types/searchCondition";
import { useForm } from "react-hook-form";
import { Calender } from "@/components/calender";

export default function SearchPage() {
  const rows: TodoItem[] = [];
  for (let i = 1; i <= 50; i++) {
    const row: TodoItem = {
      id: i,
      title: "xxxxxxxxxxxxxxxx",
      description: "あああああああああああああああああああああああああああ",
      dueDate: new Date(),
      isDone: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    rows.push(row);
  }

  const { register, control, getValues } = useForm<SearchConditions>({
    mode: "onChange",
  });

  const [todoList, setTodoList] = useState<TodoItem[] | undefined>(undefined);
  //const [todoList, setTodoList] = useState<TodoItem[] | undefined>(rows);
  const { setTodo, resetTodo } = useTodoStore();
  const { showWhile } = useLoading();
  const { handleError } = useMessage();
  const router = useRouter();

  const search = async (): Promise<void> => {
    const searchCondition: SearchConditions = {
      title: getValues("title"),
      description: getValues("description"),
      isDone: getValues("isDone"),
      dueDateFrom: getValues("dueDateFrom"),
      dueDateTo: getValues("dueDateTo"),
      createdAtFrom: getValues("createdAtFrom"),
      createdAtTo: getValues("createdAtTo"),
    };
    const todoList = await fetchTodo(searchCondition);
    console.log(todoList);
    setTodoList(todoList);
  };

  const handleSearch = async (): Promise<void> => {
    showWhile(search).catch(handleError);
  };

  const rejectTodo = async (id: number): Promise<void> => {
    await deleteTodo(id);
    await search();
  };

  const goToItemPage = (todo?: TodoItem) => {
    if (todo) {
      setTodo(todo);
      router.push(`/todo/items/${todo.id}`);
    } else {
      resetTodo();
      router.push("/todo/items/new");
    }
  };

  // useEffect(() => {
  //   search();
  // }, []);

  return (
    <div className="container">
      <PageTitle>TODO検索</PageTitle>
      <Panel>
        <PanelHeader>
          検索条件
          <PanelHeaderButton onClick={handleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-1" />
            検索
          </PanelHeaderButton>
        </PanelHeader>
        <PanelBlock>
          <div className="control p-2">
            <Columns>
              <Column>
                <ColumnLabel>タイトル</ColumnLabel>
              </Column>
              <Column>
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Text input"
                  {...register("title")}
                />
              </Column>
              <Column>
                <ColumnLabel>説明</ColumnLabel>
              </Column>
              <Column>
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Text input"
                  {...register("description")}
                />
              </Column>
              <Column>
                <ColumnLabel>ステータス</ColumnLabel>
              </Column>
              <Column>
                <div className="select is-small" style={{ width: "100%" }}>
                  <select style={{ width: "100%" }} {...register("isDone")}>
                    <option value="">すべて</option>
                    <option value="false">未完了</option>
                    <option value="true">完了</option>
                  </select>
                </div>
              </Column>
            </Columns>
            <Columns>
              <Column>
                <ColumnLabel>期限</ColumnLabel>
              </Column>
              <TwoColumn>
                <Calender name="dueDateFrom" control={control} />
                <span className="mx-2">-</span>
                <Calender name="dueDateTo" control={control} />
              </TwoColumn>
              <Column>
                <ColumnLabel>登録日</ColumnLabel>
              </Column>
              <TwoColumn>
                <Calender name="createdAtFrom" control={control} />
                <span className="mx-2">-</span>
                <Calender name="createdAtTo" control={control} />
              </TwoColumn>
            </Columns>
          </div>
        </PanelBlock>
      </Panel>
      <Panel>
        <PanelHeader>
          検索結果
          <PanelHeaderButton onClick={() => goToItemPage()}>
            <FontAwesomeIcon icon={faPlus} className="mr-1" />
            追加
          </PanelHeaderButton>
        </PanelHeader>
        <PanelBlock>
          <TableContainer>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <TableHeader style={{ width: "10px" }}>No</TableHeader>
                  <TableHeader style={{ minWidth: "75px" }}>
                    ステータス
                  </TableHeader>
                  <TableHeader style={{ width: "20%" }}>タイトル</TableHeader>
                  <TableHeader style={{ width: "auto" }}>説明</TableHeader>
                  <TableHeader style={{ width: "110px" }}>期限</TableHeader>
                  <TableHeader style={{ width: "110px" }}>登録日</TableHeader>
                  <TableHeader style={{ width: "60px" }}>削除</TableHeader>
                </tr>
              </thead>
              {todoList && (
                <tbody>
                  {todoList.map((todo, index) => (
                    <tr key={index}>
                      <td style={{ width: "10px" }}>
                        <a onClick={() => goToItemPage(todo)}>#{todo.id}</a>
                      </td>
                      <td align="center" style={{ width: "110px" }}>
                        <label className="checkbox">
                          <input
                            type="checkbox"
                            checked={todo.isDone}
                            readOnly
                          />
                        </label>
                      </td>
                      <td style={{ width: "20%" }}>{todo.title}</td>
                      <td
                        style={{
                          width: "auto",
                          maxWidth: "400px",
                          overflow: "hidden",
                        }}
                      >
                        <p
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {todo.description}
                        </p>
                      </td>
                      <td style={{ width: "110px" }}>
                        {convertDateToString(todo.dueDate)}
                      </td>
                      <td style={{ width: "110px" }}>
                        {convertDateToString(todo.createdAt)}
                      </td>
                      <td style={{ width: "60px" }}>
                        <button
                          className="button is-small head-button"
                          onClick={() => rejectTodo(todo.id)}
                        >
                          <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </TableContainer>
        </PanelBlock>
      </Panel>
    </div>
  );
}
