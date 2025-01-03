import { create } from "zustand";

interface AimTrainGameStore {
  // is game playing
  playing: boolean;
  setPlaying: (playing: boolean) => void;

  // game variable
  // score
  score: number;
  increase_score: () => void;
  decrease_score: () => void;
  // game time
  time: number;
  decrease_time: () => void;
}

export const useAimTrainGameStore = create<AimTrainGameStore>((set) => ({
  // is game playing
  playing: false,
  setPlaying: (playing) => set({ playing }),

  // game variable
  // score
  score: 0,
  increase_score: () => set((state) => ({ score: state.score + 1 })),
  decrease_score: () => set((state) => ({ score: state.score - 1 })),
  // time
  time: 30,
  decrease_time: () => set((state) => ({ time: state.time - 1 })),
}));
