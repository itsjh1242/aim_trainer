// react
import { useEffect } from "react";
// store
import { useRRGameStore } from "@/stores";

const HookWait = () => {
  const { wait_time, setPlaying, set_start_time } = useRRGameStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlaying("in-process");
      set_start_time(performance.now());
    }, wait_time * 1000);

    return () => clearTimeout(timer);
  }, [wait_time, setPlaying, set_start_time]);

  return null;
};

export default HookWait;
