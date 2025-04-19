import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import FloatingShapes from "../ui/FloatingShapes";
import { gsap } from "gsap";
import { fadeIn, staggerContainer } from "../../utils/motion-variants";

const ServiceHero: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;

      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const moveX = (clientX / windowWidth - 0.5) * 20;
      const moveY = (clientY / windowHeight - 0.5) * 20;

      gsap.to(backgroundRef.current, {
        x: moveX,
        y: moveY,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-adit-black"
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/hero-bg.png)", // Set the background image
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-adit-black/60 to-adit-black" />

      <FloatingShapes />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeIn("up", 0.1)}
            className="inline-block px-3 py-1 mb-6 bg-adit-dark-blue/60 border border-adit-aqua/30 text-adit-aqua rounded-full text-sm"
          >
            AditContent Video Editing Agency
          </motion.span>

          <motion.h1
            variants={fadeIn("up", 0.2)}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-adit-white mb-6"
          >
            Cut <span className="text-adit-aqua">Above</span> The Rest
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-lg md:text-xl text-adit-white/80 mb-8 max-w-2xl"
          >
            A team of passionate editors transforming raw footage into
            compelling visual stories that captivate audiences and elevate
            brands.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.4)}
            className="flex flex-wrap gap-4 text-black"
          >
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight size={18} />}
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Our Services
            </Button>

            <Button variant="outline" size="lg" leftIcon={<Play size={18} />}>
              Our Showreel
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center text-adit-white/80"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-pulse"
          >
            <path
              d="M12 5V19M12 19L19 12M12 19L5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
