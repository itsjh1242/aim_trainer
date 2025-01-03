// react
import { useCallback, useEffect } from "react";
// store
import { useRRGameStore } from "@/stores";

const HookWait = () => {
  const { wait_time, setPlaying, set_start_time } = useRRGameStore();

  const start = useCallback(() => {
    const timer = setTimeout(() => {
      setPlaying("in-process");
      set_start_time(performance.now());
    }, wait_time * 1000);

    return timer;
  }, [wait_time, setPlaying, set_start_time]);

  useEffect(() => {
    const timer = start();

    return () => clearTimeout(timer);
  }, [start]);

  return null;
};

export default HookWait;
