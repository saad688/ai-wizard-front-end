
import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ToolIcon from '@/components/icons/ToolIcons';

interface ToolCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: ReactNode;
  popular?: boolean;
  animationDelay?: number;
}

const ToolCard = ({ id, name, description, category, icon, popular = false, animationDelay = 0 }: ToolCardProps) => {
  return (
    <Link 
      to={`/tools/${id}`} 
      className="transition-all duration-300 group"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: animationDelay }}
        whileHover={{ 
          y: -8,
          transition: { duration: 0.2 }
        }}
      >
        <Card className="h-full shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <CardHeader className="pb-2">
            <div className="mb-4 h-12 w-12 rounded-lg bg-gradient-to-r from-indigo-600/20 to-blue-500/20 flex items-center justify-center group-hover:from-indigo-600/30 group-hover:to-blue-500/30 transition-colors duration-300">
              <ToolIcon type={id as any} className="w-8 h-8" />
            </div>
            <CardTitle className="text-2xl font-heading">{name}</CardTitle>
            <CardDescription className="text-gray-600">{category}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{description}</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div>
              {popular && (
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-600/10 to-blue-500/10 text-indigo-600 text-xs rounded-full">
                  Popular
                </span>
              )}
            </div>
            <Button className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white transition-all duration-300 group">
              <span>Try Now</span>
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ToolCard;
