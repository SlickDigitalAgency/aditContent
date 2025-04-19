import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "font-medium rounded-lg focus:outline-none relative overflow-hidden inline-flex items-center justify-center transition-all duration-300";

    const variantClasses = {
      primary: "bg-adit-aqua text-adit-dark-blue hover:shadow-glow-md",
      secondary:
        "bg-adit-blue text-adit-white hover:bg-adit-light-blue border border-adit-aqua/30",
      outline:
        "bg-transparent border border-adit-aqua text-adit-aqua hover:bg-adit-aqua/10",
      ghost: "bg-transparent text-adit-aqua hover:bg-adit-aqua/10",
    };

    const sizeClasses = {
      sm: "text-xs px-3 py-1.5",
      md: "text-sm px-4 py-2",
      lg: "text-base px-6 py-3",
    };

    const disabledClasses = disabled
      ? "opacity-70 cursor-not-allowed"
      : "cursor-pointer";

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          disabledClasses,
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center bg-inherit">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        )}
        <span
          className={`flex items-center gap-2 ${isLoading ? "opacity-0" : ""}`}
        >
          {leftIcon && <span>{leftIcon}</span>}
          {children}
          {rightIcon && <span>{rightIcon}</span>}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
