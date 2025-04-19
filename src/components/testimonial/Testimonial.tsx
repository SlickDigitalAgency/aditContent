import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TestimonialCard } from "../common/cards/TestimonialCard";
import { TestimonialSectionProps } from "../../types";

gsap.registerPlugin(ScrollTrigger);

export const Testimonial = ({ testimonials }: TestimonialSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !carouselRef.current) return;

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
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Only proceed with auto-scroll animation if carousel and testimonials exist
    if (
      carouselRef.current?.children &&
      carouselRef.current.children.length > 0 &&
      testimonials.length > 0
    ) {
      const cards = carouselRef.current.children;
      const cardWidth = cards[0].getBoundingClientRect().width + 24; // Including gap
      const totalWidth = cardWidth * cards.length;

      gsap.to(carouselRef.current, {
        x: -totalWidth,
        duration: testimonials.length * 5,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });
    }

    return () => {
      tl.kill();
    };
  }, [testimonials.length]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[600px] py-20 overflow-hidden bg-adit-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-adit-blue-dark via-adit-black to-adit-blue-light opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.1)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-adit-aqua"
        >
          What Our Clients Say
        </motion.h2>

        <div className="overflow-hidden">
          <AnimatePresence>
            <motion.div ref={carouselRef} className="flex gap-6">
              {/* Double the testimonials for seamless loop */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-${index}`}
                  data={testimonial}
                  className="w-[400px] flex-shrink-0"
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
