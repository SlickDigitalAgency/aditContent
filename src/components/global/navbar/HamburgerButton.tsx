import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative z-50 w-10 h-10 focus:outline-none",
        "rounded-full hover:bg-white/10 transition-colors duration-300"
      )}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-5">
        <motion.span
          animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
          className="absolute top-0 left-0 w-full h-[2px] bg-white"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[2px] bg-white"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
          className="absolute bottom-0 left-0 w-full h-[2px] bg-white"
        />
      </div>
    </button>
  );
};