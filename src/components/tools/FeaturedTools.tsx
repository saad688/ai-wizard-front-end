
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  popular: boolean;
}

interface FeaturedToolsProps {
  tools: Tool[];
}

const FeaturedTools = ({ tools }: FeaturedToolsProps) => {
  const featuredTools = tools.filter(tool => tool.popular).slice(0, 2);
  
  return (
    <section className="py-16 px-4 md:px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 font-heading">Featured Tools</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Check out our most popular tools that users love
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredTools.map((tool, index) => (
            <Link 
              to={`/tools/${tool.id}`} 
              key={tool.id}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-start mb-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-indigo-600/20 to-blue-500/20 flex items-center justify-center mr-4 group-hover:from-indigo-600/30 group-hover:to-blue-500/30 transition-colors duration-300">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{tool.name}</h3>
                    <p className="text-gray-500 text-sm">{tool.category}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white transition-all duration-300 group">
                  <span>Try Now</span>
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
