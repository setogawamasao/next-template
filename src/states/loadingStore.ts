// HINT:https://plainenglish.io/blog/using-zustand-and-typescript-to-make-a-to-do-list-in-react
import { create } from "zustand";

type loadingStore = {
  isShow: boolean;
  show: () => void;
  hide: () => void;
};

export const useLoading = create<loadingStore>((set) => ({
  isShow: false,
  show: () => set({ isShow: true }),
  hide: () => set({ isShow: false }),
}));
