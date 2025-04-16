
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface CategoryFiltersProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryFilters = ({ categories, selectedCategory, setSelectedCategory }: CategoryFiltersProps) => {
  return (
    <div className="mb-12 overflow-x-auto scrollbar-thin">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex space-x-2 pb-2"
      >
        {categories.map((category, index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap transition-all duration-300 ${
                selectedCategory === category 
                  ? "bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md" 
                  : "text-gray-700 hover:bg-gray-100 border-gray-200"
              }`}
            >
              {category}
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CategoryFilters;
