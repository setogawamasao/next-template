"use client";
import { useState } from "react";
import styled from "styled-components";
import { DateTime } from "luxon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker, { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
import {
  faPlus,
  faMagnifyingGlass,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { TodoItem, fetchTodo } from "@/services/todoService";

export default function Search() {
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

  const convertDate = (stringDate: string): string => {
    return DateTime.fromISO(stringDate)
      .setZone("Asia/Tokyo")
      .toFormat("yyyy/MM/dd");
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
                <Caption>タイトル</Caption>
              </Column>
              <Column>
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Text input"
                />
              </Column>
              <Column>
                <Caption>説明</Caption>
              </Column>
              <Column>
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Text input"
                />
              </Column>
              <Column>
                <Caption>完了済</Caption>
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
                <Caption>期限</Caption>
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
                <Caption>登録日</Caption>
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

const TableContainer = styled.div.attrs({
  className: "control",
})`
  overflow-y: scroll;
  height: 350px;
`;

const TableHeader = styled.th.attrs({
  style: { borderWidth: "0" },
})`
  border: none;
  border-width: none;
  position: sticky;
  z-index: 1;
  top: 0;
  background: white;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid #dbdbdb;
  }
`;

const Panel = styled.div.attrs({
  className: "panel",
})`
  margin: 0.75rem 0 0 0;
`;

const PanelHeader = styled.div.attrs({
  className: "panel-heading is-size-6 p-2",
})`
  display: flex;
  align-items: center;
`;

const PanelHeaderButton = styled.button.attrs({
  className: "button is-small head-button",
})`
  margin-left: auto;
`;

const PanelBlock = styled.div.attrs({
  className: "panel-block",
})``;

const Columns = styled.div.attrs({
  className: "columns is-vcentered",
})``;

const Column = styled.div.attrs({
  className: "column is-2",
})`
  padding: 0.25rem;
`;

const TwoColumn = styled.div.attrs({
  className: "column is-4 flexbox",
})`
  padding: 0.25rem;
  display: flex;
  flex-direction: row;
`;

const Caption = styled.div`
  background-color: hsl(0, 0%, 93%);
  color: black;
  font-size: 0.75rem;
  padding: 0.35rem;
  text-align: center;
  border-radius: 2px;
`;
