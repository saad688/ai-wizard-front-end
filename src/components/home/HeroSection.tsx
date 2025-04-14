
import { Button } from '@/components/ui/button';
import { ArrowRight, BrainCircuit } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-40 pb-20 md:pt-48 md:pb-32 relative overflow-hidden bg-white">
      {/* Abstract AI-themed background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
        <div className="absolute w-96 h-96 border-2 border-primary transform rotate-45 -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 border-2 border-secondary transform rotate-12 bottom-1/4 right-1/3"></div>
        <div className="absolute w-24 h-24 bg-primary/5 rounded-full top-1/4 left-1/4"></div>
        <div className="absolute w-48 h-48 bg-secondary/5 rounded-full bottom-1/4 right-1/4"></div>
        {/* Neural network pattern */}
        <div className="absolute inset-0 bg-[url('/neural-pattern.svg')] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-primary rounded-xl p-5 inline-flex">
              <BrainCircuit className="h-20 w-20 text-white" />
            </div>
          </div>
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-heading font-bold tracking-tight text-primary leading-tight">
              Advanced <span className="text-secondary">AI Tools</span> for Every Challenge
            </h1>
            <p className="text-xl md:text-2xl text-text-light leading-relaxed">
              Empower your projects with cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <Button className="button-primary text-lg group px-8 py-6">
                Explore Tools
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="button-secondary text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200 pt-12">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold mb-2 text-primary">10,000+</div>
              <div className="text-text-light">Problems Solved Daily</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold mb-2 text-primary">98%</div>
              <div className="text-text-light">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold mb-2 text-primary">24/7</div>
              <div className="text-text-light">Global Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
