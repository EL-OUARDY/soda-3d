import { create } from "zustand";

interface IState {
  ready: boolean;
  setIsReady: (value: boolean) => void;
  background: string;
  setBackground: (color: string) => void;
}

const useStore = create<IState>((set) => ({
  ready: false,
  setIsReady: (value) => set({ ready: value }),
  background: "transparent",
  setBackground: (color) => set({ background: color }),
}));

export default useStore;
