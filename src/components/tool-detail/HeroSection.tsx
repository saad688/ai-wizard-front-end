
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getIconByName } from './IconHelper';

interface HeroSectionProps {
  tool: any;
}

const HeroSection = ({ tool }: HeroSectionProps) => {
  return (
    <section className={`py-20 px-4 md:px-6 gradient-bg text-white`}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="h-24 w-24 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0">
            {getIconByName(tool.iconName, "h-10 w-10")}
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-blue-400/20 text-white border-none px-3 py-1">{tool.category}</Badge>
              <Badge className="bg-green-400/20 text-white border-none px-3 py-1">Popular</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tool.name}</h1>
            <p className="text-xl mb-6 max-w-3xl">{tool.description}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-primary-blue hover:bg-white/90">
                Try For Free
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
