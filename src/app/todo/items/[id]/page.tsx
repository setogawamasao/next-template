"use client";

import { useRouter } from "next/navigation";

import DatePicker, { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";

import { useTodoStore } from "@/states/todoStore";
import { postTodo, patchTodo } from "@/services/todoService";
import { TodoItem } from "@/types/todoItem";
import { PageTitle } from "@/components/pageTitle";
import { MainButton, SubButton } from "@/components/button";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useLoading } from "@/states/loadingStore";
import { useMessage } from "@/states/messageStore";

type Mode = "update" | "register";

export default function AddForm() {
  registerLocale("ja", ja);
  const router = useRouter();
  const { showWhile } = useLoading();
  const { handleError } = useMessage();
  const { todo } = useTodoStore();
  const mode: Mode = todo ? "update" : "register";
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<TodoItem>({ mode: "onChange", defaultValues: todo });

  const post = async () => {
    await postTodo(getValues());
  };

  const patch = async () => {
    await patchTodo(getValues());
  };

  const submitTodo: SubmitHandler<TodoItem> = async () => {
    try {
      if (mode === "register") {
        await showWhile(post);
      } else {
        await showWhile(patch);
      }
    } catch (error) {
      handleError(error as Error);
      return;
    }
    router.push("/todo/search");
  };

  return (
    <div className="container" style={{ maxWidth: "500px", padding: "20px" }}>
      <div>
        <PageTitle>{`TODO${
          mode === "register" ? "新規登録" : "更新"
        }`}</PageTitle>
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
                  placeholderText="YYYY/MM/DD"
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
            <Controller
              defaultValue={false}
              control={control}
              name={"isDone"}
              render={({ field: { onChange, value } }) => (
                <>
                  <label className="radio">
                    未完了
                    <input
                      type="radio"
                      onChange={() => onChange(false)}
                      checked={value === false || mode === "register"}
                      disabled={mode === "register"}
                    />
                  </label>
                  <label className="radio">
                    完了
                    <input
                      type="radio"
                      onChange={() => onChange(true)}
                      checked={value === true}
                      disabled={mode === "register"}
                    />
                  </label>
                </>
              )}
            />
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
            <MainButton onClick={handleSubmit(submitTodo)}>
              {mode === "register" ? "登録" : "更新"}
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
}
