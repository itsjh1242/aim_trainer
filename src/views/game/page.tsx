// react
import { useEffect } from "react";
// store
import { useGameStore } from "@/stores";
// component
import GamePageHeader from "./header";
import GamePagePreGame from "./pre-game";

export const GamePage: React.FC = () => {
  const { playing, setPlaying } = useGameStore();

  useEffect(() => {
    const handleKeyPress = () => {
      if (!playing) {
        setPlaying(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <>
      {/* 게임 시작 전 안내 문구 */}
      {!playing && <GamePagePreGame />}
      <section className="h-screen w-screen px-[40px]">
        {/* header */}
        <GamePageHeader />
        {/* game view */}
        <div className="relative h-[90%] w-full"></div>
      </section>
    </>
  );
};
