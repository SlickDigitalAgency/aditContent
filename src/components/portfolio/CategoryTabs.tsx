import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getCategories } from "../../api/portfolio";
import { Category } from "../../types";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryTabs = ({
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-full mb-12 px-4 sm:px-0">
      <div className="flex flex-wrap justify-center gap-2 py-4">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange(category.name)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.name
                ? "bg-adit-aqua text-adit-black"
                : "glassmorphism hover:bg-white/20"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
