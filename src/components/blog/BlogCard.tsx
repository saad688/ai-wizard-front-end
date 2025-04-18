
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl overflow-hidden shadow-soft border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
    >
      <Link to={`/blog/${post.id}`} className="block">
        <div className="p-6">
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>
          
          <div className="relative h-48 mb-6 bg-gradient-to-br from-indigo-100 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 rounded-lg overflow-hidden group-hover:shadow-inner transition-all duration-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 p-6 text-center group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h3>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.publishedAt}</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>{post.commentCount}</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                <span>{post.viewCount}</span>
              </div>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
