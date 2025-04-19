import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../../components/portfolio/Hero";
import CategoryTabs from "../../components/portfolio/CategoryTabs";
import ProjectGrid from "../../components/common/grid/ProjectGrid";
import { getProjects } from "../../api/portfolio";
import { Project } from "../../types";

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
      setFilteredProjects(data);
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const filtered =
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.type === activeCategory);
    setFilteredProjects(filtered);
  }, [activeCategory, projects]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <div className="py-20 bg-adit-black min-h-screen">
        <CategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <ProjectGrid projects={filteredProjects} layout="masonry" />
      </div>
    </motion.div>
  );
};

export default Portfolio;
