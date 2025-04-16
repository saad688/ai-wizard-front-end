
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const EmptyState = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mx-auto h-16 w-16 rounded-full bg-gradient-to-r from-indigo-600/20 to-blue-500/20 flex items-center justify-center mb-6"
      >
        <Search className="h-8 w-8 text-indigo-500" />
      </motion.div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">No tools found</h3>
      <p className="text-gray-600">
        Try adjusting your search or filter to find what you're looking for.
      </p>
    </motion.div>
  );
};

export default EmptyState;
