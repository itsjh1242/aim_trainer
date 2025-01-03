import { motion } from "framer-motion";

const AimGamePagePreGame: React.FC = () => {
  return (
    <motion.div
      className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center bg-gray-900/50 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.p
        className="mb-4 text-lg text-white"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        시작하려면 아무키나 누르세요
      </motion.p>
      <motion.p
        className="text-sm text-gray-300"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        press any key to start
      </motion.p>
    </motion.div>
  );
};

export default AimGamePagePreGame;
