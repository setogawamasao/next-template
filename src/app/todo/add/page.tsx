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

import { MainButton, SubButton } from "@/component/button";

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
        <div className="field">
          <label className="label">説明</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>
        <div className="field">
          <label className="label">期限</label>
          <div className="control">
            <DatePicker
              dateFormat="yyyy/MM/dd"
              locale="ja"
              selected={selectedDate}
              onChange={(date: Date) => setSelectedDate(date!)}
              className="input"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">ステータス</label>
          <div className="control">
            <label className="radio">
              <input type="radio" name="question" />
              未着手
            </label>
            <label className="radio">
              <input type="radio" name="question" />
              着手中
            </label>
            <label className="radio">
              <input type="radio" name="question" />
              完了
            </label>
          </div>
        </div>
        <div
          className="field is-grouped is-grouped-centered"
          style={{ marginTop: "40px" }}
        >
          <div className="control">
            <SubButton>戻る</SubButton>
          </div>
          <div className="control">
            <MainButton>登録</MainButton>
          </div>
        </div>
      </div>
    </div>
  );
}
