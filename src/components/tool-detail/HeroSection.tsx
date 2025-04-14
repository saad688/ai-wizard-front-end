
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowRight } from 'lucide-react';
import { getIconByName } from './IconHelper';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  tool: any;
}

const HeroSection = ({ tool }: HeroSectionProps) => {
  return (
    <section className="pt-20 pb-16 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-950 dark:to-blue-900 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="h-24 w-24 bg-white/90 dark:bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow animate-float">
            {getIconByName(tool.iconName, "h-12 w-12 text-blue-600 dark:text-blue-400")}
          </div>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <Badge className="bg-blue-100 hover:bg-blue-200 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-none font-medium px-3 py-1.5 rounded-lg">
                {tool.category}
              </Badge>
              <Badge className="bg-green-100 hover:bg-green-200 text-green-700 dark:bg-green-900 dark:text-green-300 border-none font-medium px-3 py-1.5 rounded-lg">
                Popular
              </Badge>
            </div>
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight",
              "text-gray-900 dark:text-white"
            )}>
              {tool.name}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {tool.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl shadow-soft text-lg font-medium">
                Try For Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-6 rounded-xl text-lg font-medium flex items-center gap-2">
                <Play className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
