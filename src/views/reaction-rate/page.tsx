// component
import { LayoutFullPX40 } from "@/components/layout/section";
import HookWait from "./hook-wait";
// store
import { Circle } from "@/components/element";
import { Button } from "@/components/ui/button";
import { useRRGameStore } from "@/stores";

const BackgroundClickWrapper: React.FC<{ onClick: () => void }> = ({
  onClick,
  children,
}) => {
  return (
    <div
      className="absolute inset-0 z-0"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      {children}
    </div>
  );
};

export const RRGamePage: React.FC = () => {
  HookWait();

  const {
    playing,
    start_time,
    taken_time,
    set_taken_time,
    setPlaying,
    resetGame,
  } = useRRGameStore();

  const handleClick = () => {
    if (playing === "ready") {
      setPlaying("error");
      return;
    }

    if (playing === "in-process" && start_time) {
      const now = performance.now();
      const reaction_time = Math.round(now - start_time);

      set_taken_time(reaction_time);
      setPlaying("finish");
    }
  };

  // 반응 시간에 따라 색상과 메시지 설정
  const resultStyles = [
    { max: 100, color: "text-green-500", message: "대단히 빠름!" },
    { max: 200, color: "text-blue-500", message: "빠름" },
    { max: 300, color: "text-yellow-500", message: "보통" },
    { max: Infinity, color: "text-red-500", message: "느림" },
  ];

  const getResultStyle = (time: number | null) =>
    resultStyles.find((style) => time !== null && time <= style.max) ?? {
      color: "gray",
      message: "결과를 기다리는 중입니다.",
    };

  const resultStyle = getResultStyle(taken_time);

  // 결과 기준 데이터
  const criteria = [
    { range: "100ms 이하", color: "bg-green-500" },
    { range: "101ms ~ 200ms", color: "bg-blue-500" },
    { range: "201ms ~ 300ms", color: "bg-yellow-500" },
    { range: "301ms 이상", color: "bg-red-500" },
  ];

  return (
    <LayoutFullPX40 className="relative flex flex-col items-center justify-center gap-6">
      <BackgroundClickWrapper onClick={handleClick}>
        {playing === "in-process" && (
          <div className="flex h-[300px] w-[300px] flex-col items-center justify-center gap-2 rounded-full bg-red-500 text-center text-2xl font-bold text-white shadow-lg">
            <p>클릭하세요!</p>
            <p>Click Me!</p>
          </div>
        )}
        {playing === "finish" && (
          <div className="text-center">
            <p className={`text-4xl font-bold ${resultStyle.color}`}>
              {taken_time}ms
            </p>
            <div className="mt-6 flex gap-4">
              {criteria.map((criterion, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Circle className={`h-4 w-4 ${criterion.color}`} />
                  <p className="text-sm text-gray-700">{criterion.range}</p>
                </div>
              ))}
            </div>
            <Button className="mt-[24px]" onClick={resetGame}>
              다시하기
            </Button>
          </div>
        )}
        {playing === "error" && (
          <div className="text-center">
            <p className="text-4xl font-bold text-red-500">너무 급했어요...</p>
            <Button className="mt-[24px]" onClick={resetGame}>
              다시하기
            </Button>
          </div>
        )}
      </BackgroundClickWrapper>
    </LayoutFullPX40>
  );
};
