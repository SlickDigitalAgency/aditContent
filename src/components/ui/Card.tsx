import React from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { glowingCard } from "../../utils/motion-variants";

interface CardProps {
  className?: string;
  glowEffect?: boolean;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  className,
  glowEffect = false,
  children,
}) => {
  return glowEffect ? (
    <motion.div
      className={cn(
        "bg-adit-dark-blue/60 backdrop-blur-sm border border-adit-aqua/20 rounded-lg p-6",
        "transition-all duration-300",
        className
      )}
      initial="rest"
      whileHover="hover"
      variants={glowingCard}
    >
      {children}
    </motion.div>
  ) : (
    <div
      className={cn(
        "bg-adit-dark-blue/60 backdrop-blur-sm border border-adit-aqua/20 rounded-lg p-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
