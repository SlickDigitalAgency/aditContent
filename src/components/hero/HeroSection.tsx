import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../common/buttons/Button";
import { cn } from "../../utils/cn";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.to(sectionRef.current, {
      backgroundPosition: "50% 100%",
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative min-h-screen flex items-center justify-center",
        "bg-gradient-to-b from-adit-black via-adit-blue-dark to-adit-black",
        "overflow-hidden"
      )}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-30"
          poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-adit-black/80 via-transparent to-adit-black" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 text-center"
      >
        {/* Tagline */}
        <motion.h1
          variants={itemVariants}
          className={cn(
            "text-4xl sm:text-5xl md:text-7xl font-bold mb-6",
            "bg-clip-text text-transparent",
            "bg-gradient-to-r from-white via-adit-aqua to-white"
          )}
        >
          Crafting Stories That Cut Deep
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
        >
          We're Adit Content — A tight-knit team of creative editors shaping
          cinematic experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            label="Explore Our Work"
            variant="primary"
            href="/projects"
            className="w-full sm:w-auto"
          />
          <Button
            label="Let's Collaborate"
            variant="glass"
            href="/contact"
            className="w-full sm:w-auto"
          />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
    </section>
  );
};