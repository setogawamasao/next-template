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
import { PageTitle } from "@/component/pageTItle";

export default function AddForm() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [todoList, setTodoList] = useState<TodoItem[] | undefined>(undefined);
  registerLocale("ja", ja);

  const search = async (): Promise<void> => {
    const todoList = await fetchTodo();
    setTodoList(todoList);
  };

  return (
    <div className="container" style={{ maxWidth: "500px", padding: "20px" }}>
      <div>
        <PageTitle>TODO新規登録</PageTitle>
        <div className="field">
          <label className="label">タイトル</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>
      </div>
    </div>
  );
}
