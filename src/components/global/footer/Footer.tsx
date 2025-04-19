import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Film } from "lucide-react";
import { footerData } from "../../../data/Data";
import { cn } from "../../../utils/cn";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      footerRef.current.children,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-b from-adit-black to-adit-blue-dark py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Logo and Brand Section */}
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <Film className="w-8 h-8 text-adit-aqua" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-adit-aqua">
              Adit Content
            </span>
          </motion.div>
          <a
            href={`mailto:${footerData.email}`}
            className="text-white/80 hover:text-adit-aqua transition-colors duration-300"
          >
            {footerData.email}
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {footerData.socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "p-3 rounded-full transition-all duration-300",
                "hover:bg-adit-aqua/10 hover:text-adit-aqua",
                "focus:outline-none focus:ring-2 focus:ring-adit-aqua/50"
              )}
            >
              {link.icon && <link.icon className="w-5 h-5" />}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-white/60 text-sm">
          {footerData.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;