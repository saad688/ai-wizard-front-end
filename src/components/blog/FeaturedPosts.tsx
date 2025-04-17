
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogCard, { BlogPost } from './BlogCard';

interface FeaturedPostsProps {
  posts: BlogPost[];
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  // Only display the first 3 posts
  const featuredPosts = posts.slice(0, 3);

  return (
    <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-16 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-light mb-6 text-gray-900">
            Latest <span className="font-medium">Articles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tutorials, and updates from our team
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-8"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button asChild className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-6 rounded-md shadow-md hover:shadow-lg transition-all group relative overflow-hidden">
            <Link to="/blog">
              <span className="relative z-10 flex items-center">
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
