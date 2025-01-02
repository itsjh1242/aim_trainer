// component
import { BlinkingCircle } from "@/components/element";
// store
import { useGameStore } from "@/stores";

const GamePageHeader: React.FC = () => {
  const { playing } = useGameStore();
  return (
    <div className="flex h-[10%] w-full items-center justify-between">
      {/* left */}
      <div></div>
      {/* center */}
      <BlinkingCircle
        className={`h-4 w-4 ${playing ? "bg-green-700" : "bg-red-700"}`}
      />
      {/* right */}
      <div></div>
    </div>
  );
};

export default GamePageHeader;
