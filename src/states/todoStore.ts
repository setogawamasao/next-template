import { create } from "zustand";
import { TodoItem } from "@/types/todoItem";

type TodoStore = {
  todo?: TodoItem;
  setTodo: (todo: TodoItem) => void;
  resetTodo: () => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todo: undefined,
  setTodo: (todo: TodoItem) => set(() => ({ todo })),
  resetTodo: () => set({ todo: undefined }),
}));
