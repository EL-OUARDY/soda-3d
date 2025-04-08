import { create } from "zustand";

interface IState {
  ready: boolean;
  setIsReady: (value: boolean) => void;
}

const useStore = create<IState>((set) => ({
  ready: false,
  setIsReady: (value) => set({ ready: value }),
}));

export default useStore;
