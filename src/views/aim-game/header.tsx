// component
import { BlinkingCircle } from "@/components/element";
// store
import { useAimTrainGameStore } from "@/stores";

const AimGamePageHeader: React.FC = () => {
  const { playing } = useAimTrainGameStore();
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

export default AimGamePageHeader;
