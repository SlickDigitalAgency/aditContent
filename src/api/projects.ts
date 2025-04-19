import axios from "axios";
import { ProjectData } from "../types";

const BASE_URL = ""; // For local development, you can leave it empty

export const projectsService = {
  async getProjects(): Promise<ProjectData[]> {
    try {
      // Use axios to fetch data from the given URL
      const response = await axios.get(`${BASE_URL}/db.json`);

      // Check if the response contains the expected data
      if (!response.data || !response.data.projects) {
        throw new Error(
          "Failed to fetch projects: Data is missing or malformed."
        );
      }

      // Return the projects from the response data
      return response.data.projects;
    } catch (error) {
      console.error("Error fetching projects:", error);
      return [];
    }
  },
};
