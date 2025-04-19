import { useEffect, useState } from "react";
import { Testimonial } from "../../components/testimonial/Testimonial";
import { ServiceData, TestimonialData } from "../../types";
import { servicesService } from "../../api/apiservices";
import { testimonialService } from "../../api/apitestimonial";
import ServiceHero from "../../components/services/ServiceHero";
import { CallToAction } from "../../components/cta/CallToAction";
import { ctaContent } from "../../data/Data";
import { OurServices } from "../../components/services/OurServices";
import WhyChooseUs from "../../components/chooseUs/WhyChooseUs";
const Services = () => {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [services, setServices] = useState<ServiceData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchedTestimonials, fetchedServices] = await Promise.all([
          testimonialService.getTestimonials(),
          servicesService.getServices(),
        ]);
        setTestimonials(fetchedTestimonials);
        setServices(fetchedServices);
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
    <div>
      <ServiceHero />
      <OurServices services={services} />
      <WhyChooseUs />
      <Testimonial testimonials={testimonials} />
      <CallToAction {...ctaContent} />
    </div>
  );
};

export default Services;
