import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IconPlayerPlay } from "@tabler/icons-react";
import { Project } from "../../../types";
import { cn } from "../../../utils/cn";

interface ProjectCardProps {
  project: Project;
  layout?: "bento" | "masonry"; // dynamic layout
  size?: "small" | "medium" | "large"; // only used for bento layout
  className?: string;
}

export const ProjectCard = ({
  project,
  layout = "bento",
  size = "medium",
  className,
}: ProjectCardProps) => {
  const aspectClass =
    size === "large"
      ? "aspect-[4/3]"
      : size === "small"
      ? "aspect-[3/4]"
      : "aspect-square";

  return (
    <Link to={`/portfolio/${project.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "group relative overflow-hidden rounded-3xl h-full",
          layout === "bento" ? aspectClass : "w-full",
          "transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-adit-aqua/20",
          className
        )}
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="relative h-full p-6 sm:p-8 flex flex-col justify-end z-10">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-block px-3 py-1 text-sm text-adit-aqua bg-adit-aqua/10 backdrop-blur-sm rounded-full mb-4">
              {project.type}
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-adit-aqua transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-white/80 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {project.description}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-adit-aqua text-black shadow-lg shadow-adit-aqua/30">
              <IconPlayerPlay className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
          </motion.div>

          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-adit-aqua/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-adit-aqua/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </motion.div>
    </Link>
  );
};
