import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const handleGetStart = () => {
    navigate("/game");
    return;
  };
  return (
    <>
      {/* Background */}
      <img
        src="bg-grid.jpg"
        alt="grid-background"
        className="absolute left-0 top-0 z-0 h-screen w-screen object-cover opacity-50"
      />
      {/* Content */}
      <section className="relative z-10 m-auto h-screen w-screen place-content-center place-items-center">
        <p className="text-4xl font-bold text-blue-700">
          당신의 에임은 정확합니까?
        </p>
        <p className="text-2xl text-gray-900">Challenge your limits!</p>
        <Button className="mt-[36px]" onClick={() => handleGetStart()}>
          시작하기
        </Button>
      </section>
    </>
  );
};
