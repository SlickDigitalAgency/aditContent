import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import FeatureCard from "../common/cards/FeatureCard";
import { Feature } from "../../types";
import { getFeatures } from "../../api/apifeatures";
import { staggerContainer, fadeIn } from "../../utils/motion-variants";

const WhyChooseUs: React.FC = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const data = await getFeatures();
        setFeatures(data);
      } catch (error) {
        console.error("Error fetching features:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <Loader className="w-8 h-8 text-adit-aqua animate-spin" />
      </div>
    );
  }

  return (
    <section className="py-20 bg-adit-black relative">
      <div className="absolute inset-0 bg-gradient-radial from-adit-dark-blue/20 via-transparent to-transparent opacity-50" />

      <Container>
        <SectionTitle
          title="Why Choose Us"
          subtitle="Experience the difference of working with a boutique video editing studio that prioritizes quality and client satisfaction."
          align="center"
        />

        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.id} variants={fadeIn("up", index * 0.1)}>
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
