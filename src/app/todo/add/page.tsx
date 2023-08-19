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

export default function AddForm() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [todoList, setTodoList] = useState<TodoItem[] | undefined>(undefined);
  registerLocale("ja", ja);

  const search = async (): Promise<void> => {
    const todoList = await fetchTodo();
    setTodoList(todoList);
  };

  return <div className="container"></div>;
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
