// apiservices.ts

import axios from "axios";
import { ServiceData } from "../types";
import * as Icons from "lucide-react"; // Import all icons from lucide-react

const BASE_URL = ""; // For local development, you can leave it empty

// Helper type for Icon keys
type IconName = keyof typeof Icons;

// Service service (with dynamic icon mapping)
export const servicesService = {
  async getServices(): Promise<ServiceData[]> {
    try {
      const response = await axios.get(`${BASE_URL}/db.json`);
      const data = response.data;

      // Map the services with their icons
      return data.services.map((service: ServiceData & { icon: string }) => {
        // Safely access the icon from the Icons object
        const IconComponent = Icons[service.icon as IconName];

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
