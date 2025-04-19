import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../../../utils/cn";

interface MobileMenuOverlayProps {
  navItems: Array<{ label: string; href: string }>;
  onClose: () => void;
  currentPath: string;
}

export const MobileMenuOverlay = ({
  navItems,
  onClose,
  currentPath,
}: MobileMenuOverlayProps) => {
  const overlayVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      variants={overlayVariants}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-40 bg-adit-black/95 backdrop-blur-xl"
    >
      <div className="h-full flex flex-col justify-center items-center p-8">
        {navItems.map((item, i) => (
          <motion.div
            key={item.href}
            custom={i}
            variants={menuItemVariants}
            className="mb-8 last:mb-0"
          >
            <Link
              to={item.href}
              onClick={onClose}
              className={cn(
                "text-3xl font-bold transition-colors duration-300",
                currentPath === item.href
                  ? "text-adit-aqua"
                  : "text-white hover:text-adit-aqua"
              )}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-adit-aqua/30 rounded-tl-3xl" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-adit-aqua/30 rounded-br-3xl" />
    </motion.div>
  );
};