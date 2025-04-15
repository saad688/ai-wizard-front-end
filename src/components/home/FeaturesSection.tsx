
import { Check, Zap, Shield, Clock, Globe, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Get results in seconds, not minutes. Our AI tools are optimized for speed and efficiency.'
  },
  {
    icon: Check,
    title: 'Highly Accurate',
    description: 'Trained on vast datasets to ensure precision and reliability across all tasks.'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your data never leaves our secure servers. Privacy is our top priority.'
  },
  {
    icon: Clock,
    title: 'Time-Saving',
    description: 'Automate repetitive tasks and focus on what truly matters to your business.'
  },
  {
    icon: Globe,
    title: 'Multilingual',
    description: 'Support for over 50 languages for global accessibility and reach.'
  },
  {
    icon: Target,
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
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 -left-16 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      
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
          
          {/* Animated Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-8"></div>
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
              className="bg-white p-8 rounded-lg shadow-soft border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-6 shadow-md">
                <feature.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              
              {/* Subtle Background Design Element */}
              <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 rounded-br-lg border-indigo-100 opacity-50"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Floating Elements */}
        <div className="absolute bottom-10 right-10 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/4 left-10 w-6 h-6 bg-indigo-300 rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-300 rounded-full animate-float opacity-60"></div>
      </div>
    </section>
  );
};

export default FeaturesSection;
