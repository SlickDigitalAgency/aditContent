import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Film } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { HamburgerButton } from "./HamburgerButton";
import { MobileMenuOverlay } from "./MobileMenuOverlay";
import { cn } from "../../../utils/cn";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "py-4 bg-adit-black/80 backdrop-blur-xl border-b border-white/10"
            : "py-6 bg-transparent"
        )}
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
              onClick={() => setIsOpen(false)}
            >
              <Film className="w-8 h-8 text-adit-aqua transition-transform duration-300 group-hover:scale-110" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-adit-aqua">
                Adit Content
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "relative text-lg transition-colors duration-300",
                    location.pathname === item.href
                      ? "text-adit-aqua"
                      : "text-white hover:text-adit-aqua"
                  )}
                >
                  {item.label}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-adit-aqua"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <MobileMenuOverlay
            navItems={navItems}
            onClose={() => setIsOpen(false)}
            currentPath={location.pathname}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;