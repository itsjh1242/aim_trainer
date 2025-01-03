import { cn } from "@/lib/utils";

interface LayoutFullPX40Props {
  className?: string;
  children?: React.ReactNode;
}
const LayoutFullPX40: React.FC<LayoutFullPX40Props> = ({
  className,
  children,
}) => {
  return (
    <section className={cn(`h-screen w-screen px-[40px]`, className)}>
      {children}
    </section>
  );
};

export { LayoutFullPX40 };
