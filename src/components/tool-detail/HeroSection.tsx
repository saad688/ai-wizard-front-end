
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowRight } from 'lucide-react';
import { getIconByName } from './IconHelper';
import { cn } from '@/lib/utils';
import VisualEffects from './VisualEffects';
import { useEffect, useRef } from 'react';

interface HeroSectionProps {
  tool: any;
}

const HeroSection = ({ tool }: HeroSectionProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add animations when component mounts
    const elements = [
      { ref: iconRef, delay: 0 },
      { ref: titleRef, delay: 200 },
      { ref: descRef, delay: 400 },
      { ref: buttonRef, delay: 600 }
    ];
    
    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add('animate-fade-in');
          ref.current?.classList.remove('opacity-0');
          ref.current?.classList.remove('translate-y-4');
        }, delay);
      }
    });
  }, []);
  
  return (
    <section className="pt-20 pb-16 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-950 dark:to-blue-900 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
      
      {/* Add animated particles effect based on tool icon */}
      <div className="absolute inset-0 -z-5">
        <VisualEffects iconName={tool.iconName} />
      </div>
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div 
            ref={iconRef} 
            className="h-24 w-24 bg-white/90 dark:bg-white/10 backdrop-blur-md rounded-2xl 
                      flex items-center justify-center flex-shrink-0 shadow-glow 
                      opacity-0 translate-y-4 transition-all duration-700"
          >
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
            <h1 
              ref={titleRef}
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight",
                "text-gray-900 dark:text-white opacity-0 translate-y-4 transition-all duration-700"
              )}
            >
              {tool.name}
            </h1>
            <p 
              ref={descRef}
              className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed
                        opacity-0 translate-y-4 transition-all duration-700"
            >
              {tool.description}
            </p>
            <div 
              ref={buttonRef}
              className="flex flex-wrap gap-4 opacity-0 translate-y-4 transition-all duration-700"
            >
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl 
                          shadow-soft text-lg font-medium relative overflow-hidden group"
              >
                <span className="relative z-10">Try For Free</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 
                                transform scale-x-0 group-hover:scale-x-100 transition-transform 
                                duration-300 origin-left"></span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white 
                          hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-6 rounded-xl text-lg 
                          font-medium flex items-center gap-2 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Watch Demo
                </span>
                <span className="absolute inset-0 bg-white/10 transform scale-x-0 
                                group-hover:scale-x-100 transition-transform duration-300 
                                origin-left"></span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
