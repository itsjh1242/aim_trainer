import { create } from "zustand";

interface GameStore {
  // is game playing
  playing: boolean;
  setPlaying: (playing: boolean) => void;

  // game variable
  score: number;
  increase_score: () => void;
  decrease_score: () => void;
}

export const useGameStore = create<GameStore>((set) => ({
  // is game playing
  playing: false,
  setPlaying: (playing) => set({ playing }),

  // game variable
  score: 0,
  increase_score: () => set((state) => ({ score: state.score + 1 })),
  decrease_score: () => set((state) => ({ score: state.score - 1 })),
}));
