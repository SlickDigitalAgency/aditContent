import { useEffect, useState } from "react";
import { HeroSection } from "../../components/hero/HeroSection";
import { Testimonial } from "../../components/testimonial/Testimonial";
import { CallToAction } from "../../components/cta/CallToAction";
import { OurServices } from "../../components/services/OurServices";
import { AboutTeamSection } from "../../components/about/AboutTeamSection";
import { ctaContent } from "../../data/Data";
import { TestimonialData, ServiceData, Project } from "../../types";
import { testimonialService, servicesService } from "../../api/api";
import { getProjects } from "../../api/portfolio"; // Correct import
import ProjectGrid from "../../components/common/grid/ProjectGrid";

export const Home = () => {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [services, setServices] = useState<ServiceData[]>([]);
  const [projects, setProjects] = useState<Project[]>([]); // Use Project[] here
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchedTestimonials, fetchedServices, fetchedProjects] =
          await Promise.all([
            testimonialService.getTestimonials(),
            servicesService.getServices(),
            getProjects(), // Correctly call getProjects
          ]);
        setTestimonials(fetchedTestimonials);
        setServices(fetchedServices);

        // Convert ProjectData[] to Project[] here
        setProjects(
          fetchedProjects
            .filter((project: Project) => project.video) // Ensure video is present
            .map((project: Project) => ({
              ...project,
              video: project.video || "", // Provide default video if missing
            }))
        );
      } catch (error) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-adit-black flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-adit-black flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <main className="bg-adit-black">
      <HeroSection />
      <OurServices services={services} />
      <AboutTeamSection />
      <ProjectGrid projects={projects} layout="bento" />
      <Testimonial testimonials={testimonials} />
      <CallToAction {...ctaContent} />
    </main>
  );
};
