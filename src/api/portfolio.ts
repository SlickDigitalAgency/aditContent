import { Project, Category } from "../types";

export const getProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch("/db.json");
    const data = await response.json();
    return data.projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch("/db.json");
    const data = await response.json();
    return data.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
