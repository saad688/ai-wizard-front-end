
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight, MessageSquare, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      className="group"
    >
      <Card className="overflow-hidden h-full border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
        <div className="overflow-hidden h-48 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10"></div>
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <Badge className="absolute top-3 left-3 z-20 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 border-none">
            {post.category}
          </Badge>
        </div>
        
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-indigo-500" />
              <span>{post.publishedAt}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-indigo-500" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
            <Link to={`/blog/${post.id}`} className="focus:outline-none">
              {post.title}
            </Link>
          </CardTitle>
          <CardDescription className="text-gray-600">
            {post.excerpt}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="py-2">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, idx) => (
              <Badge key={idx} variant="outline" className="bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between items-center pt-2 text-sm border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-gray-500">
              <Eye className="h-4 w-4" />
              <span>{post.viewCount}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <MessageSquare className="h-4 w-4" />
              <span>{post.commentCount}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-6 h-6 rounded-full border border-gray-200" 
            />
            <span className="text-gray-700">{post.author.name}</span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
