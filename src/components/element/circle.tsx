import { cn } from "@/lib/utils";

interface CircleProps {
  className?: string;
}
export const Circle: React.FC<CircleProps> = ({ className }) => {
  return <div className={cn(`h-12 w-12 rounded-full`, className)}></div>;
};
