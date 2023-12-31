// HINT:https://plainenglish.io/blog/using-zustand-and-typescript-to-make-a-to-do-list-in-react
import { create } from "zustand";
import { AxiosError } from "axios";

type messageStore = {
  message?: string;
  isOpen: boolean;
  setMessage: (message: string) => void;
  open: () => void;
  close: () => void;
  handleError: (error: Error) => void;
};

export const useMessage = create<messageStore>((set) => ({
  message: undefined,
  isOpen: false,
  setMessage: (message: string) => set(() => ({ message })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  handleError: (error: Error) => {
    const { status, axiosError } = parseApiError(error);
    if (axiosError?.code === "ECONNABORTED") {
      set({
        message: "タイムアウトが発生しました。\n通信環境を確認してください。",
      });
    } else if (axiosError?.code === "ERR_NETWORK") {
      set({
        message:
          "ネットワークエラーが発生しました。\n通信環境を確認してください。",
      });
    } else if (status === 403) {
      set({
        message:
          "権限エラーが発生しました。\nサインアウトして、再度サインインを行ってください。",
      });
    } else {
      set({
        message: `予期せぬエラーが発生しました。\nお問い合わせ窓口までご連絡ください。`,
      });
    }
    set({ isOpen: true });
  },
}));

type Result = {
  status?: number;
  axiosError?: AxiosError;
};

export const parseApiError = (error: unknown): Result => {
  if (!isAxiosError(error)) {
    return {};
  }

  const { response } = error;
  if (!response) {
    return { axiosError: error };
  }

  const { status } = response;

  return { status, axiosError: error };
};

const isAxiosError = (error: unknown): error is AxiosError => {
  if (!error) {
    return false;
  }

  return (error as AxiosError).isAxiosError;
};
