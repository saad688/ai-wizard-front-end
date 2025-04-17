
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simple animation for stats on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);
  
  return (
    <section className="pt-40 pb-20 md:pt-52 md:pb-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* 3D Animated Background */}
      <AnimatedBackground />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-blue-200 mix-blend-multiply blur-xl animate-float opacity-30"></div>
      <div className="absolute bottom-1/3 left-1/5 w-40 h-40 rounded-full bg-indigo-200 mix-blend-multiply blur-xl animate-float opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-center">
            <h1 className="text-5xl md:text-7xl font-heading font-light tracking-tight text-gray-900 leading-none animate-fade-up">
              Advanced <span className="font-medium">AI Tools</span> for Every Need
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto animate-fade-up-slow">
              Solve complex problems with cutting-edge AI technology designed for simplicity and performance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6 animate-fade-up-slower">
              <Button className="button-primary text-lg group relative overflow-hidden">
                <span className="relative z-10">Explore Tools</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
              </Button>
              <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-50 rounded-none py-3 px-6 text-lg relative overflow-hidden group">
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Button>
            </div>
          </div>
          
          {/* Stats with animation - updated for startup phase */}
          <div ref={statsRef} className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200 pt-12 opacity-0">
            <div className="text-center relative animate-float">
              <div className="text-4xl font-light mb-2 text-gray-900 relative">
                <span className="relative z-10">3+</span>
                <span className="absolute -right-4 -top-4 w-12 h-12 bg-blue-100 rounded-full opacity-30"></span>
              </div>
              <div className="text-gray-600">AI Tools & Growing</div>
            </div>
            <div className="text-center relative animate-float">
              <div className="text-4xl font-light mb-2 text-gray-900">100%</div>
              <div className="text-gray-600">Free During Beta</div>
            </div>
            <div className="text-center relative animate-float">
              <div className="text-4xl font-light mb-2 text-gray-900">24/7</div>
              <div className="text-gray-600">Development Ongoing</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path 
            fill="#f9fafb" 
            fillOpacity="1" 
            d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,42.7C960,53,1056,75,1152,74.7C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="animate-pulse-subtle"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
