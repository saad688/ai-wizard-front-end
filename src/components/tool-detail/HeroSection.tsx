
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
    <section className="pt-32 pb-16 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-white -z-10"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 -z-10"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="h-20 w-20 bg-primary shadow-soft rounded-lg flex items-center justify-center flex-shrink-0 animate-float">
            {getIconByName(tool.iconName, "h-10 w-10 text-white")}
          </div>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <Badge className="bg-secondary/10 hover:bg-secondary/20 text-secondary border-none font-medium px-3 py-1 rounded-md">
                {tool.category}
              </Badge>
              <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-none font-medium px-3 py-1 rounded-md">
                Popular
              </Badge>
            </div>
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight font-heading",
              "text-primary"
            )}>
              {tool.name}
            </h1>
            <p className="text-xl text-text-light mb-8 leading-relaxed">
              {tool.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="button-primary px-8 py-6 text-lg font-medium">
                Try For Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="button-secondary px-8 py-6 text-lg font-medium flex items-center gap-2">
                <Play className="h-5 w-5 text-primary" />
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
