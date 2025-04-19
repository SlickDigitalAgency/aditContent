import { motion } from "framer-motion"; // Import motion for animations
import { Project } from "../../../types"; // Import the Project type
import { ProjectCard } from "../cards/ProjectCard"; // Import ProjectCard component

interface ProjectsGridProps {
  projects: Project[]; // Change to Project[] if you are passing Project type to the component
  layout?: "masonry" | "bento"; // Optional layout prop
}

const ProjectsGrid = ({ projects, layout = "bento" }: ProjectsGridProps) => {
  if (layout === "masonry") {
    return (
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 px-4 max-w-7xl mx-auto space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="break-inside-avoid mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} layout="masonry" />
          </motion.div>
        ))}
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
