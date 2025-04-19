import { ElementType } from "react";

// Service Types
export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
}

export interface ServicesProps {
  services: ServiceData[];
}

// Testimonial Types
export interface TestimonialData {
  id: string;
  name: string;
  designation?: string;
  company?: string;
  testimonial: string;
  image?: string;
}

export interface TestimonialCardProps {
  data: TestimonialData;
  className?: string;
}

export interface TestimonialSectionProps {
  testimonials: TestimonialData[];
}

// Project Types
export interface ProjectBase {
  id: number;
  title: string;
  description: string;
  type: string;
  thumbnail: string;
  slug: string;
  clientLogo?: string;
}

export interface ProjectData extends ProjectBase {
  video?: string; // Optional video property
}

export interface Project extends ProjectBase {
  video: string; // `video` is required in this type
}

export interface ProjectCardProps {
  project: ProjectData;
  size?: "small" | "medium" | "large"; // Standardized the sizes
  className?: string;
}

export interface ProjectsGridProps {
  projects: ProjectData[];
  layout?: string; // Add the layout property as optional
}

// Category Type
export interface Category {
  id: string;
  name: string;
}

// Features/ Why Choose us Types
export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}
