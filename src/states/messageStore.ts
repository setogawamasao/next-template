// HINT:https://plainenglish.io/blog/using-zustand-and-typescript-to-make-a-to-do-list-in-react
import { create } from "zustand";

type messageStore = {
  message?: String;
  isOpen: boolean;
  setMessage: (message: string) => void;
  open: () => void;
  close: () => void;
};

export const useMessage = create<messageStore>((set) => ({
  message: undefined,
  isOpen: false,
  setMessage: (message: string) => set(() => ({ message })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
