
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    title: 'Choose Your Tool',
    description: 'Browse our extensive collection of AI tools and select the one that fits your needs.'
  },
  {
    number: '02',
    title: 'Input Your Data',
    description: 'Upload files, paste text, or connect to your data source depending on the tool.'
  },
  {
    number: '03',
    title: 'Process & Analyze',
    description: 'Our AI engine processes your input data with advanced algorithms for optimal results.'
  },
  {
    number: '04',
    title: 'Get Results',
    description: 'Review, download, or integrate the output directly into your existing workflow.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F3F4F6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F9FAFB" stopOpacity="0.3" />
              </linearGradient>
              <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(99, 102, 241, 0.05)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-gradient)" />
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-light mb-6 text-gray-900">
            How It <span className="font-medium">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with our AI tools is simple and straightforward
          </p>
          
          {/* Animated Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-8"></div>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-blue-200 to-indigo-200 hidden lg:block">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                {/* Step number with glowing effect - darker text */}
                <div className="mb-8">
                  <div className="relative">
                    <span className="text-8xl font-bold text-gray-300">{step.number}</span>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-500 bg-opacity-10 rounded-full animate-pulse-subtle"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-indigo-500 bg-opacity-10 rounded-full animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
                
                {/* Step content */}
                <div className="relative bg-white p-6 rounded-lg shadow-soft border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  {/* Decorative element */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-t-lg"></div>
                </div>
                
                {/* Node on the line */}
                <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-2 border-indigo-500 hidden lg:block">
                  <div className="absolute inset-1 bg-indigo-500 rounded-full animate-pulse-subtle"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg px-8 py-6 rounded-md shadow-md hover:shadow-lg transition-all group relative overflow-hidden">
            <Link to="/tools">
              <span className="relative z-10">Get Started Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl -z-10"></div>
          <div className="absolute bottom-20 left-20 w-6 h-6 bg-indigo-300 rounded-full animate-float opacity-60"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
