import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Building2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Project } from "../../types";
import { getProjects } from "../../api/portfolio";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [videoError, setVideoError] = useState(false); // State to handle video error

  useEffect(() => {
    const fetchProject = async () => {
      const projects = await getProjects();
      const foundProject = projects.find((p) => p.slug === slug);
      setProject(foundProject || null);
      setLoading(false);
    };
    fetchProject();
  }, [slug]);

  // Handle video error event
  const handleVideoError = () => {
    setVideoError(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-adit-aqua"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link
          to="/portfolio"
          className="flex items-center text-adit-aqua hover:text-adit-aqua/80 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-adit-black pt-20" // Added top padding here
    >
      {/* Back Button */}
      <div className="fixed top-8 left-4 z-50 pt-16">
        <Link
          to="/portfolio"
          className="flex items-center glassmorphism px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Portfolio
        </Link>
      </div>

      {/* Video Hero Section */}
      <div className="relative h-screen">
        {project.video && !videoError ? (
          <video
            className="w-full h-full object-cover"
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onError={handleVideoError} // Handle error if video fails to load
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            className="w-full h-full object-cover"
            src={project.thumbnail || "/default-thumbnail.jpg"} // Fallback to a default thumbnail if no thumbnail is available
            alt="Project Thumbnail"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-adit-black" />
      </div>

      {/* Project Details */}
      <motion.div
        className="max-w-4xl mx-auto px-4 py-16"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>

        <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-400">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>2:35 mins</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>March 2024</span>
          </div>
          <div className="flex items-center">
            <Building2 className="w-4 h-4 mr-2" />
            <span>{project.type}</span>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">{project.description}</p>

          <h2 className="text-2xl font-semibold mb-4">Tools Used</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"].map(
              (tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-full bg-white/10 text-sm"
                >
                  {tool}
                </span>
              )
            )}
          </div>

          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-gray-300">
            This project showcases our expertise in creating compelling visual
            narratives that captivate audiences and deliver powerful messages.
            Through careful attention to pacing, color grading, and sound
            design, we've crafted a piece that effectively communicates the
            client's vision while maintaining the highest production standards.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
