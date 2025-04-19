import axios from "axios";
import { Feature } from "../types";

const API_URL = "http://localhost:3001";
// Features API
export const getFeatures = async (): Promise<Feature[]> => {
  const response = await axios.get(`${API_URL}/features`);
  return response.data;
};
