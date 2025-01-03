// react
import { useEffect } from "react";
// store
import { useAimTrainGameStore } from "@/stores";
// component
import AimGamePageHeader from "./header";
import AimGamePageInGame from "./in-game";
import AimGamePagePreGame from "./pre-game";
// component/layout
import { LayoutFullPX40 } from "@/components/layout/section";

export const AimGamePage: React.FC = () => {
  const { playing, setPlaying } = useAimTrainGameStore();

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
      {!playing && <AimGamePagePreGame />}
      <LayoutFullPX40>
        {/* header */}
        <AimGamePageHeader />
        {/* game view */}
        <div className="relative h-[90%] w-full">
          <AimGamePageInGame />
        </div>
      </LayoutFullPX40>
    </>
  );
};
