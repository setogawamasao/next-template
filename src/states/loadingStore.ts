// HINT:https://plainenglish.io/blog/using-zustand-and-typescript-to-make-a-to-do-list-in-react
import { create } from "zustand";

type loadingStore = {
  isShow: boolean;
  show: () => void;
  showWhile: (callback: () => Promise<void>) => Promise<void>;
  hide: () => void;
};

export const useLoading = create<loadingStore>((set) => ({
  isShow: false,
  show: () => set({ isShow: true }),
  showWhile: async (callback: () => Promise<void>): Promise<void> => {
    try {
      set({ isShow: true });
      await callback();
      set({ isShow: false });
    } catch (error) {
      set({ isShow: false });
      throw error;
    }
  },
  hide: () => set({ isShow: false }),
}));
