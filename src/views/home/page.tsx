// component
import HomePageMoreGame from "./more-game";

export const HomePage: React.FC = () => {
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
          한계에 도전해보세요~!
        </p>
        <p className="text-2xl text-gray-900">Challenge your limits!</p>

        {/* More */}
        <HomePageMoreGame />
      </section>
    </>
  );
};
