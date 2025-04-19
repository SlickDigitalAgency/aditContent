import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServicesProps } from "../../types";
import { cn } from "../../utils/cn"; // Utility function for classnames

gsap.registerPlugin(ScrollTrigger);

export const OurServices = ({ services }: ServicesProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headlineRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      headlineRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    return () => {
      tl.kill();
    };
  }, []); // Only run once on mount

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-20 bg-gradient-to-b from-adit-black to-adit-blue-dark overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Centered Headline */}
        <div className="text-center mb-16">
          <h2
            ref={headlineRef}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-adit-aqua"
          >
            What We Do Best
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Elevating your content with precision editing, stunning visuals, and
            cinematic excellence.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={cn(
                "group relative p-8 rounded-2xl backdrop-blur-xl",
                "bg-white/5 border border-white/10",
                "hover:border-adit-aqua/50 transition-all duration-300",
                "hover:shadow-[0_0_30px_rgba(0,245,255,0.15)]"
              )}
            >
              {/* Service Icon */}
              <div
                className={cn(
                  "inline-flex p-4 rounded-2xl mb-6",
                  "bg-gradient-to-br from-adit-aqua/20 to-transparent",
                  "group-hover:from-adit-aqua/30 group-hover:to-adit-aqua/5",
                  "transition-all duration-300"
                )}
              >
                <service.icon className="w-8 h-8 text-adit-aqua" />
              </div>

              {/* Service Content */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-adit-aqua transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-20 h-20 rounded-tl-2xl border-t-2 border-l-2 border-adit-aqua/30" />
                <div className="absolute bottom-0 right-0 w-20 h-20 rounded-br-2xl border-b-2 border-r-2 border-adit-aqua/30" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
