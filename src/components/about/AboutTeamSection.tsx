import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../utils/cn";

gsap.registerPlugin(ScrollTrigger);

export const AboutTeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      contentRef.current.children,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] py-20 bg-gradient-to-b from-adit-blue-dark to-adit-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />

      <div className="container mx-auto px-4">
        <div
          ref={contentRef}
          className={cn(
            "max-w-4xl mx-auto relative",
            "backdrop-blur-xl bg-adit-glass border border-white/10 rounded-3xl p-8 md:p-12",
            "shadow-[0_0_30px_rgba(0,245,255,0.1)]"
          )}
        >
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-adit-aqua/10 text-adit-aqua rounded-full">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-adit-aqua">
              Who We Are
            </h2>
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Adit Content is a collective of passionate, perfectionist editors,
              each bringing their own unique expertise to the table. We obsess over
              every detail so our clients don't have to.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-adit-aqua">
                  Our Mission
                </h3>
                <p className="text-white/80 leading-relaxed">
                  To transform raw footage into compelling narratives that captivate
                  audiences and exceed client expectations, one frame at a time.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-adit-aqua">
                  Our Vision
                </h3>
                <p className="text-white/80 leading-relaxed">
                  To be the go-to partner for creators and brands seeking
                  exceptional post-production quality and creative excellence.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Precision",
                  description:
                    "Every cut, transition, and effect is crafted with purpose.",
                },
                {
                  title: "Innovation",
                  description:
                    "Pushing creative boundaries while maintaining quality.",
                },
                {
                  title: "Partnership",
                  description:
                    "Building lasting relationships through collaboration.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-adit-aqua/50 transition-colors duration-300"
                >
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-white/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-adit-aqua/30 rounded-tl-3xl" />
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-adit-aqua/30 rounded-br-3xl" />
        </div>
      </div>
    </section>
  );
};