
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ToolIcon from '@/components/icons/ToolIcons';

const tools = [
  {
    id: "noise-remover",
    name: "Noise Remover",
    description: "Remove unwanted noise from your audio with AI. Clean up recordings and enhance audio quality instantly.",
    icon: "noise-remover",
    color: "bg-cyan-50"
  },
  {
    id: "image-enhancer",
    name: "Image Enhancer",
    description: "Upscale and enhance images with AI. Remove noise and increase resolution for crystal-clear results.",
    icon: "image-enhancer",
    color: "bg-blue-50"
  },
  {
    id: "text-analyzer",
    name: "Text Analyzer",
    description: "Analyze text for sentiment, keywords, and insights. Understand the emotional tone of any content.",
    icon: "text-analyzer",
    color: "bg-indigo-50"
  },
  {
    id: "data-visualizer",
    name: "Data Visualizer",
    description: "Transform raw data into beautiful interactive visualizations. Uncover patterns and insights instantly.",
    icon: "data-visualizer",
    color: "bg-purple-50"
  },
  {
    id: "code-assistant",
    name: "Code Assistant",
    description: "Generate, debug, and optimize code across multiple programming languages. Boost your productivity.",
    icon: "code-assistant",
    color: "bg-teal-50"
  },
  {
    id: "ai-assistant",
    name: "AI Assistant",
    description: "Your personal AI helper for everyday tasks. Schedule meetings, draft emails, and answer questions.",
    icon: "ai-assistant",
    color: "bg-amber-50"
  }
];

const ToolsShowcase = () => {
  const toolsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When section is visible, animate all cards with delay
            const cards = entry.target.querySelectorAll('.tool-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-up');
                card.classList.remove('opacity-0');
                card.classList.remove('translate-y-8');
              }, index * 100); // Stagger the animations
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (toolsRef.current) {
      observer.observe(toolsRef.current);
    }
    
    return () => {
      if (toolsRef.current) {
        observer.unobserve(toolsRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none">
        <img src="/images/ai-pattern-1.svg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-light mb-4">
            Our <span className="font-medium">AI Toolbox</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful solutions designed to solve real-world problems with artificial intelligence
          </p>
        </div>
        
        <div ref={toolsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Card 
              key={tool.id}
              className={`tool-card opacity-0 translate-y-8 transition-all duration-500 shadow-md hover:shadow-xl ${tool.color} border-none overflow-hidden group`}
            >
              <CardContent className="p-8">
                <div className="mb-6 flex justify-between items-start">
                  <ToolIcon 
                    type={tool.icon as any} 
                    className="w-16 h-16 transition-transform duration-700 group-hover:rotate-12"
                  />
                  <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-gray-700" />
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-3 text-gray-900">{tool.name}</h3>
                <p className="text-gray-700 mb-6">{tool.description}</p>
                <Link to={`/tools/${tool.id}`}>
                  <Button className="mt-4 bg-white text-gray-900 hover:bg-gray-100 border border-gray-200 relative overflow-hidden group">
                    <span className="relative z-10">Explore Tool</span>
                    <span className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    <span className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left group-hover:text-white"></span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link to="/tools">
            <Button className="button-primary text-lg group">
              View All Tools
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToolsShowcase;
