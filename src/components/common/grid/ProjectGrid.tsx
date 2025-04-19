import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { Project } from "../../../types";
import { ProjectCard } from "../cards/ProjectCard";

interface ProjectsGridProps {
  projects: Project[];
  layout?: "masonry" | "bento";
}

const breakpointColumnsObj = {
  default: 3,
  1600: 3,
  1280: 3,
  1024: 2,
  768: 1,
};

const ProjectsGrid = ({ projects, layout = "bento" }: ProjectsGridProps) => {
  if (layout === "masonry") {
    return (
      <div className="container mx-auto px-4 py-12">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4 break-inside-avoid"
            >
              <ProjectCard project={project} layout="masonry" />
            </motion.div>
          ))}
        </Masonry>
      </div>
    );
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-adit-black to-adit-blue-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-adit-aqua/10 text-adit-aqua rounded-full">
            Our Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-adit-aqua">
            Featured Projects
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our latest work — where creativity meets precision in video
            editing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
          {projects.slice(0, 6).map((project, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`w-full ${
                  isLarge
                    ? "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2"
                    : ""
                }`}
              >
                <ProjectCard
                  project={project}
                  layout="bento"
                  size={isLarge ? "large" : "medium"}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
