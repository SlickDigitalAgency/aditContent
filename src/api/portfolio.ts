import axios from "axios";
import { Project, Category } from "../types";

// Fetch projects using axios
export const getProjects = async (): Promise<Project[]> => {
  try {
    const response = await axios.get("/db.json");
    return response.data.projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

// Fetch categories using axios
export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get("/db.json");
    return response.data.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
