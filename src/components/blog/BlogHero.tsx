
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import BackgroundParticles from '@/components/tools/noise-remover/BackgroundParticles';
import ToolIcon from '@/components/icons/ToolIcons';

interface BlogHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const BlogHero = ({ searchQuery, setSearchQuery }: BlogHeroProps) => {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <BackgroundParticles />
      <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none">
        <img src="/images/ai-pattern-1.svg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 -left-16 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto text-center relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 inline-block pb-2 px-4">
          Our Blog
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-600">
          Insights, tutorials, and updates about AI technology and our tools
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 mb-10"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-2xl mx-auto relative"
        >
          <Input
            type="text"
            placeholder="Search for articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-6 px-4 rounded-md text-gray-800 pr-12 shadow-lg border-0 focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
            <ToolIcon type="text-analyzer" className="h-5 w-5" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BlogHero;
