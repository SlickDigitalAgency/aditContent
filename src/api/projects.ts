import { ProjectData } from "../types";

const BASE_URL = ""; // For local development, you can leave it empty

export const projectsService = {
  async getProjects(): Promise<ProjectData[]> {
    try {
      const response = await fetch(`${BASE_URL}/db.json`);
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      const data = await response.json();
      return data.projects;
    } catch (error) {
      console.error("Error fetching projects:", error);
      return [];
    }
  },
};