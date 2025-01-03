import { motion } from "framer-motion";

type GameType = {
  name: string;
  description: string;
  link: string;
};

const GAMES: GameType[] = [
  {
    name: "에임 연습",
    description: "당신의 에임은 정확하고 빠른가요?",
    link: "/game/aim",
  },
  {
    name: "반응속도 테스트",
    description: "반응속도를 테스트해보세요!",
    link: "/game/reaction-rate",
  },
];

const HomePageMoreGame: React.FC = () => {
  return (
    <div className="mt-12 flex w-full max-w-4xl flex-wrap justify-center gap-6 px-4">
      {GAMES.map((item, idx) => (
        <motion.div
          key={`${item.name}-${idx}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="flex w-[300px] flex-col justify-between rounded-lg border border-gray-300 bg-gradient-to-br from-blue-500 to-blue-600 p-6 shadow-lg hover:shadow-2xl"
        >
          <p className="text-sm font-medium text-gray-100">{`#${idx + 1}`}</p>
          <div className="mt-3 flex flex-col gap-2 text-white">
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-sm text-gray-200">{item.description}</p>
          </div>
          <motion.a
            href={item.link}
            className="mt-6 inline-block rounded bg-white px-4 py-2 text-center text-sm font-semibold text-blue-600 shadow-md hover:bg-gray-100"
            whileHover={{ scale: 1.1 }}
          >
            바로가기 →
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
};

export default HomePageMoreGame;
