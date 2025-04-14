
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-40 pb-20 md:pt-52 md:pb-32 relative overflow-hidden bg-white">
      {/* Minimal background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gray-900 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gray-900 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-center">
            <h1 className="text-5xl md:text-7xl font-heading font-light tracking-tight text-gray-900 leading-none">
              Advanced <span className="font-medium">AI Tools</span> for Every Need
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Solve complex problems with cutting-edge AI technology designed for simplicity and performance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
              <Button className="button-primary text-lg group">
                Explore Tools
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-50 rounded-none py-3 px-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Minimal Stats */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200 pt-12">
            <div className="text-center">
              <div className="text-4xl font-light mb-2 text-gray-900">10,000+</div>
              <div className="text-gray-600">Problems Solved Daily</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light mb-2 text-gray-900">98%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light mb-2 text-gray-900">24/7</div>
              <div className="text-gray-600">Global Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
