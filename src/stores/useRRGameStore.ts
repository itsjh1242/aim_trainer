import { create } from "zustand";

type PlayingStatusType = "ready" | "in-process" | "finish";

interface RRGameStore {
  // waiting time to start rr game
  wait_time: number;

  // score
  start_time: number | null;
  set_start_time: (time: number | null) => void;
  taken_time: number | null;
  set_taken_time: (taken_time: number) => void;

  // playing status
  playing: PlayingStatusType | null;
  setPlaying: (status: PlayingStatusType) => void;
}

export const useRRGameStore = create<RRGameStore>((set) => ({
  // set random value to wait time
  wait_time: Math.floor(Math.random() * (10 - 2 + 1) + 2),

  // score
  start_time: null,
  set_start_time(time) {
    set({ start_time: time });
  },
  taken_time: null,
  set_taken_time(taken_time) {
    set({ taken_time });
  },

  // playing status
  playing: "ready",
  setPlaying: (status) => {
    set({ playing: status });
  },
}));
