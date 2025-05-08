
import { Check, Zap, Shield, Clock, Globe, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import ToolIcon from '@/components/icons/ToolIcons';

// Define feature items using our consistent icon system
const features = [
  {
    iconType: 'ai-assistant',
    title: 'Lightning Fast',
    description: 'Get results in seconds, not minutes. Our AI tools are optimized for speed and efficiency.'
  },
  {
    iconType: 'data-visualizer',
    title: 'Highly Accurate',
    description: 'Trained on vast datasets to ensure precision and reliability across all tasks.'
  },
  {
    iconType: 'code-assistant',
    title: 'Secure & Private',
    description: 'Your data never leaves our secure servers. Privacy is our top priority.'
  },
  {
    iconType: 'text-analyzer',
    title: 'Time-Saving',
    description: 'Automate repetitive tasks and focus on what truly matters to your business.'
  },
  {
    iconType: 'image-enhancer',
    title: 'Multilingual',
    description: 'Support for over 50 languages for global accessibility and reach.'
  },
  {
    iconType: 'document-parser',
    title: 'Industry-Specific',
    description: 'Tailored solutions for healthcare, finance, legal, and many more industries.'
  }
];

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
      
      {/* Animated gradient blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-100 rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="absolute top-1/3 -left-16 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-green-100 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Animated particles */}
      <svg className="absolute inset-0 w-full h-full -z-10" aria-hidden="true">
        <defs>
          <pattern id="features-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M.5 40V.5H40" fill="none" stroke="rgba(79, 70, 229, 0.1)" strokeDasharray="4 1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#features-grid)" />
      </svg>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/4 left-10 w-6 h-6 bg-indigo-300 rounded-full animate-float opacity-60" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-300 rounded-full animate-float opacity-60" style={{ animationDelay: '0.7s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-green-300 rounded-full animate-float opacity-60" style={{ animationDelay: '2.1s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-light mb-6 text-gray-900">
            Why Choose <span className="font-medium">Our AI Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to deliver exceptional results and transform your workflow
          </p>
          
          {/* Enhanced Animated Line with glow effect */}
          <div className="relative h-1 w-24 mx-auto mt-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <motion.div 
              initial={{ x: '-100%' }}
              whileInView={{ x: '0%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 bg-white opacity-50"
            />
            <div className="absolute inset-0 glow opacity-50"></div>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group bg-white p-8 rounded-lg shadow-soft border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 card-3d relative overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>
              
              {/* Using our consistent ToolIcon component for icons */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-600/20 flex items-center justify-center mb-6 shadow-sm group-hover:from-blue-500/30 group-hover:to-indigo-600/30 transition-all duration-300">
                <ToolIcon type={feature.iconType as any} className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              
              {/* Interactive element - Fixed z-index to prevent overlap issues */}
              <div className="mt-6 pt-6 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-20">
                <a href="#" className="text-blue-600 font-medium flex items-center hover:text-blue-700 text-sm">
                  Learn more
                  <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              
              {/* Subtle Background Design Element with improved z-index */}
              <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 rounded-br-lg border-indigo-100 opacity-50 z-10"></div>
              
              {/* Animated corner accent with fixed z-index to prevent overlap */}
              <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden z-10">
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-500/40 to-indigo-600/40 rotate-45 origin-bottom-right transform -translate-y-8 -translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Interactive stat counters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="p-6 bg-white rounded-lg shadow-soft border border-gray-100">
            <motion.h3 
              className="text-4xl font-bold text-gray-900 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            >
              100+
            </motion.h3>
            <p className="text-gray-500">AI Models</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-soft border border-gray-100">
            <motion.h3 
              className="text-4xl font-bold text-gray-900 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            >
              500K+
            </motion.h3>
            <p className="text-gray-500">Users</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-soft border border-gray-100">
            <motion.h3 
              className="text-4xl font-bold text-gray-900 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            >
              99.9%
            </motion.h3>
            <p className="text-gray-500">Uptime</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-soft border border-gray-100">
            <motion.h3 
              className="text-4xl font-bold text-gray-900 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            >
              24/7
            </motion.h3>
            <p className="text-gray-500">Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
