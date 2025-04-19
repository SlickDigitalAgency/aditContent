import React from "react";
import { Users, Timer, Film, Repeat } from "lucide-react";
import { Feature } from "../../../types";
import Card from "../../ui/Card";

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const getIcon = () => {
    switch (feature.icon) {
      case "Users":
        return <Users className="w-6 h-6 text-adit-aqua" />;
      case "Timer":
        return <Timer className="w-6 h-6 text-adit-aqua" />;
      case "Film":
        return <Film className="w-6 h-6 text-adit-aqua" />;
      case "Repeat":
        return <Repeat className="w-6 h-6 text-adit-aqua" />;
      default:
        return <Users className="w-6 h-6 text-adit-aqua" />;
    }
  };

  return (
    <Card glowEffect className="h-full">
      <div className="p-3 inline-flex items-center justify-center rounded-full bg-adit-aqua/10 mb-4 shadow-glow-sm">
        {getIcon()}
      </div>
      <h3 className="text-xl font-bold text-adit-white mb-2">
        {feature.title}
      </h3>
      <p className="text-adit-white/70">{feature.description}</p>
    </Card>
  );
};

export default FeatureCard;
