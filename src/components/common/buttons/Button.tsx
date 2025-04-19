import { motion } from "framer-motion";
import { ButtonProps } from "../../../types";
import { cn } from "../../../utils/cn";

const buttonVariants = {
  primary:
    "bg-gradient-to-r from-adit-aqua to-adit-blue-light text-black font-semibold",
  outline: "border border-adit-aqua text-adit-aqua hover:bg-adit-aqua/10",
  ghost: "text-white hover:bg-white/10",
  glass:
    "bg-adit-glass backdrop-blur-sm border border-white/10 text-white hover:bg-white/20",
};

export const Button = ({
  label,
  variant = "primary",
  href,
  icon: Icon,
  onClick,
  className,
  type = "internal",
  align = "center", // 👈 Default to center
}: ButtonProps) => {
  const alignmentClasses =
    align === "left" ? "justify-start text-left" : "justify-center text-center";

  const baseClasses = `px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${alignmentClasses}`;
  const variantClasses = buttonVariants[variant];

  const buttonContent = (
    <>
      {Icon && <Icon className="w-5 h-5" />}
      <span>{label}</span>
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.2 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={type === "external" ? "_blank" : undefined}
        rel={type === "external" ? "noopener noreferrer" : undefined}
        className={cn(baseClasses, variantClasses, className)}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={cn(baseClasses, variantClasses, className)}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  );
};
