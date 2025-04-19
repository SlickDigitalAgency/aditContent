import React from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion-variants";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = "left",
  className,
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={cn("max-w-2xl mb-12", alignmentClasses[align], className)}
    >
      <motion.h2
        variants={textVariant(0.1)}
        className="text-3xl md:text-4xl font-display font-bold text-adit-white"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={textVariant(0.2)}
          className="mt-3 text-lg text-adit-white/70"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        variants={textVariant(0.3)}
        className="h-1 w-16 bg-adit-aqua mt-4"
      />
    </motion.div>
  );
};

export default SectionTitle;
