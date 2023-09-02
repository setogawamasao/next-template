"use client";
import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker, { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
import {
  faPlus,
  faMagnifyingGlass,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { TodoItem, fetchTodo } from "@/services/todoService";
import { convertDate } from "@/util/dateUtil";
import {
  Panel,
  PanelHeader,
  PanelHeaderButton,
  PanelBlock,
} from "@/component/panel";
import { Column, ColumnLabel, Columns, TwoColumn } from "@/component/column";
import { TableContainer, TableHeader } from "@/component/table";

export default function SearchPage() {
  // const rows: TodoItem[] = [];
  // for (let i = 1; i <= 50; i++) {
  //   const row: TodoItem = {
  //     id: i,
  //     title: "xxxxxxxxxxxxxxxx",
  //     description: "あああああああああああああああああああああああああああ",
  //     dueDate: new Date(),
  //     isDone: false,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   };
  //   rows.push(row);
  // }

  const [selectedDate, setSelectedDate] = useState<Date>();
  const [todoList, setTodoList] = useState<TodoItem[] | undefined>(undefined);
  // const [todoList, setTodoList] = useState<TodoItem[] | undefined>(rows);

  registerLocale("ja", ja);

  const search = async (): Promise<void> => {
    const todoList = await fetchTodo();
    setTodoList(todoList);
  };

  return (
    <div className="container">
      <Panel>
        <PanelHeader>
          検索条件
          <PanelHeaderButton onClick={search}>
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
                />
              </Column>
              <Column>
                <ColumnLabel>完了済</ColumnLabel>
              </Column>
              <Column>
                <div className="select is-small" style={{ width: "100%" }}>
                  <select style={{ width: "100%" }}>
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
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  locale="ja"
                  selected={selectedDate}
                  onChange={(date: Date) => setSelectedDate(date!)}
                  className="input form is-small"
                />
                <span className="mx-2">-</span>
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  locale="ja"
                  selected={selectedDate}
                  onChange={(date: Date) => setSelectedDate(date!)}
                  className="input form is-small"
                />
              </TwoColumn>
              <Column>
                <ColumnLabel>登録日</ColumnLabel>
              </Column>
              <TwoColumn>
                {/* <Datepicker
                v-model="createdAtFrom"
                :language="ja"
                :format="$formatDate.fromJs"
                placeholder="from"
                style="width: 100%"
                input-className="input form is-small"
              /> */}
                <span className="mx-2">-</span>
                {/* <Datepicker
                v-model="createdAtTo"
                :language="ja"
                :format="$formatDate.fromJs"
                placeholder="to"
                style="width: 100%"
                input-className="input form is-small"
              /> */}
              </TwoColumn>
            </Columns>
          </div>
        </PanelBlock>
      </Panel>
      <Panel>
        <PanelHeader>
          検索結果
          <PanelHeaderButton>
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
                  <TableHeader style={{ minWidth: "75px" }}>完了</TableHeader>
                  <TableHeader style={{ width: "20%" }}>タイトル</TableHeader>
                  <TableHeader style={{ width: "auto" }}>内容</TableHeader>
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
                        <a>#{todo.id}</a>
                      </td>
                      <td align="center" style={{ width: "110px" }}>
                        <label className="checkbox">
                          <input type="checkbox" checked={todo.isDone} />
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
                        {convertDate(todo.dueDate)}
                      </td>
                      <td style={{ width: "110px" }}>
                        {convertDate(todo.createdAt)}
                      </td>
                      <td style={{ width: "60px" }}>
                        <button className="button is-small head-button">
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
