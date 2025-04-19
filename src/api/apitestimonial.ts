// apitestimonial.ts

import axios from "axios";
import { TestimonialData } from "../types";

const BASE_URL = ""; // For local development, you can leave it empty

// Testimonial service
export const testimonialService = {
  async getTestimonials(): Promise<TestimonialData[]> {
    try {
      const response = await axios.get(`${BASE_URL}/db.json`);
      return response.data.testimonials;
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return [];
    }
  },
};
