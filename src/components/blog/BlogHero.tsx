
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import BackgroundParticles from '@/components/tools/noise-remover/BackgroundParticles';

interface BlogHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const BlogHero = ({ searchQuery, setSearchQuery }: BlogHeroProps) => {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <BackgroundParticles />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-indigo-300/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
      
      {/* Animated floating elements */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-12 h-12 bg-blue-400/10 rounded-full"
      ></motion.div>
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-1/5 w-16 h-16 bg-indigo-400/10 rounded-full"
      ></motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto text-center relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
          Our Blog
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-600">
          Explore the latest insights, tutorials, and news from our team of AI experts
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
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-6 px-4 rounded-md text-gray-800 pr-12 shadow-lg border-0 focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BlogHero;
