import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BlinkingCircleProps {
  className?: string;
}
export const BlinkingCircle: React.FC<BlinkingCircleProps> = ({
  className,
}) => {
  return (
    <motion.div
      className={cn(
        `h-12 w-12 rounded-full bg-red-500 shadow-[0_0_10px_rgba(255,0,0,0.8)]`,
        className,
      )}
      initial={{ opacity: 1 }}
      animate={{
        opacity: [1, 0.5, 1], // 깜박이는 효과
      }}
      transition={{
        duration: 1, // 깜박이는 주기
        repeat: Infinity, // 무한 반복
      }}
    />
  );
};
