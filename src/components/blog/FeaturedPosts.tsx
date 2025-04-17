
import { motion } from 'framer-motion';
import { BlogPost } from './BlogCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedPostsProps {
  posts: BlogPost[];
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  // Take the first 3 posts as featured
  const featuredPosts = posts.slice(0, 3);
  
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-50/50 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-50/50 rounded-full blur-3xl -z-5"></div>
      
      {/* Animated floating elements */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-10 w-8 h-8 bg-indigo-400/10 rounded-full"
      ></motion.div>
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-2/3 left-10 w-12 h-12 bg-blue-400/10 rounded-full"
      ></motion.div>
      
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular content and stay up-to-date with the latest developments in AI technology
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mt-6"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="text-sm text-indigo-600 font-medium mb-2">{post.category}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  <Link to={`/blog/${post.id}`} className="focus:outline-none">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-8 h-8 rounded-full border border-gray-200" 
                    />
                    <span className="text-gray-700 text-sm">{post.author.name}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {post.publishedAt}
                  </div>
                </div>
              </div>
              
              <Link 
                to={`/blog/${post.id}`}
                className="absolute bottom-0 right-0 m-4 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center text-white transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              >
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
