
import { Link } from 'react-router-dom';
import { Calendar, Eye, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  commentCount: number;
  viewCount: number;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  // Generate a gradient based on the post ID for variety
  const gradientIndex = parseInt(post.id) % 5;
  const gradients = [
    'from-indigo-500 to-blue-500',
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-indigo-500',
    'from-cyan-500 to-blue-500',
    'from-blue-600 to-indigo-600'
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
    >
      <Link to={`/blog/${post.id}`} className="block">
        <div className="h-48 overflow-hidden relative">
          {/* Designed thumbnail instead of an image */}
          <div className={`w-full h-full bg-gradient-to-br ${gradients[gradientIndex]} flex items-center justify-center p-6`}>
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id={`pattern-${post.id}`} width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#pattern-${post.id})`} />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center leading-tight z-10">
              {post.title}
            </h3>
          </div>
          <div className="absolute bottom-4 left-4 z-10">
            <span className="px-3 py-1 bg-white text-indigo-600 text-sm font-medium rounded-full shadow-sm">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-3 text-sm text-gray-500">
            <div className="flex items-center mr-4">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.publishedAt}</span>
            </div>
            <div className="flex items-center mr-4">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>{post.commentCount}</span>
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              <span>{post.viewCount}</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-8 h-8 rounded-full object-cover mr-2"
              />
              <span className="text-sm text-gray-700">{post.author.name}</span>
            </div>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
