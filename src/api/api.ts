import { TestimonialData, ServiceData } from "../types";
import * as Icons from "lucide-react";

const BASE_URL = ""; // For local development, you can leave it empty

export const testimonialService = {
  async getTestimonials(): Promise<TestimonialData[]> {
    try {
      const response = await fetch(`${BASE_URL}/db.json`);
      if (!response.ok) {
        throw new Error("Failed to fetch testimonials");
      }
      const data = await response.json();
      return data.testimonials;
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return [];
    }
  },
};

export const servicesService = {
  async getServices(): Promise<ServiceData[]> {
    try {
      const response = await fetch(`${BASE_URL}/db.json`);
      if (!response.ok) {
        throw new Error("Failed to fetch services");
      }
      const data = await response.json();

      return data.services.map((service: ServiceData & { icon: keyof typeof Icons }) => {
        const IconComponent = Icons[service.icon]; // Access the icon component from Lucide

        if (!IconComponent) {
          console.warn(`Icon '${service.icon}' not found, using default icon.`);
          return { ...service, icon: Icons.HelpCircle }; // Fallback to a default icon
        }

        return { ...service, icon: IconComponent };
      });
    } catch (error) {
      console.error("Error fetching services:", error);
      return [];
    }
  },
};