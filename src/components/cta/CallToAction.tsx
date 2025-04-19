import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../common/buttons/Button";
import { CTAContentProps } from "../../types";

gsap.registerPlugin(ScrollTrigger);

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

export const CallToAction = ({
  headline,
  subtext,
  buttons,
}: CTAContentProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      containerRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-adit-black to-adit-blue-dark flex items-center justify-center">
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative container mx-auto px-4 max-w-4xl"
      >
        <div className="backdrop-blur-xl bg-adit-glass border border-white/10 rounded-3xl p-12 shadow-2xl">
          <motion.h2
            variants={containerVariants}
            className="text-5xl md:text-6xl font-bold text-white text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-adit-aqua"
          >
            {headline}
          </motion.h2>

          <motion.p
            variants={containerVariants}
            className="text-xl text-white/80 text-center mb-12"
          >
            {subtext}
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            {buttons.map((button, index) => (
              <Button
                key={index}
                {...button}
                className={index === 0 ? "md:col-span-2" : ""}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
