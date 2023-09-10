"use client";
import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
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
import { useForm, SubmitHandler, Controller } from "react-hook-form";

export default function AddForm() {
  registerLocale("ja", ja);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm<TodoItem>({ mode: "onChange" });

  const onSubmit: SubmitHandler<TodoItem> = (data: TodoItem) => {
    console.log("data", data);
  };

  return (
    <div className="container" style={{ maxWidth: "500px", padding: "20px" }}>
      <div>
        <PageTitle>TODO新規登録</PageTitle>
        <div className="field">
          <label className="label">タイトル</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              {...register("title", {
                required: { value: true, message: "必須項目です" },
                maxLength: {
                  value: 30,
                  message: "30文字以上入力できません",
                },
              })}
            />
            <div className="help is-danger">
              {errors.title && errors.title.message}
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">説明</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Textarea"
              {...register("description", {
                maxLength: {
                  value: 300,
                  message: "300文字以上入力できません",
                },
              })}
            />
          </div>
          <div className="help is-danger">
            {errors.description && errors.description.message}
          </div>
        </div>
        <div className="field">
          <label className="label">期限</label>
          <div className="control">
            <Controller
              control={control}
              name="dueDate"
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  onChange={onChange}
                  selected={value as Date}
                  className="input"
                />
              )}
            />
          </div>
          <div className="help is-danger">
            {errors.dueDate && errors.dueDate.message}
          </div>
        </div>
        <div className="field">
          <label className="label">ステータス</label>
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                {...register("isDone")}
                defaultChecked={true}
                value={"false"}
              />
              未完了
            </label>
            <label className="radio">
              <input type="radio" {...register("isDone")} value={"true"} />
              完了
            </label>
          </div>
        </div>
        <div
          className="field is-grouped is-grouped-centered"
          style={{ marginTop: "40px" }}
        >
          <div className="control">
            <SubButton onClick={() => router.push("/todo/search")}>
              戻る
            </SubButton>
          </div>
          <div className="control">
            <MainButton onClick={handleSubmit(onSubmit)}>登録</MainButton>
          </div>
        </div>
      </div>
    </div>
  );
}