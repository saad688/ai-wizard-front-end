
import { Link } from 'react-router-dom';
import { Calendar, Eye, MessageSquare, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
    >
      <Link to={`/blog/${post.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-70"></div>
          <div className="absolute bottom-4 left-4 z-10">
            <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
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
          
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
            {post.title}
          </h3>
          
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
