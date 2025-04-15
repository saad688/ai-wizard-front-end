
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 -z-10"></div>
      
      {/* Animated abstract background */}
      <div className="absolute inset-0 -z-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <linearGradient id="cta-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.2)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.2)" />
            </linearGradient>
            <pattern id="cta-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="40" fill="none" stroke="url(#cta-gradient)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" opacity="0.3" />
        </svg>
        
        {/* Animated particles */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 100 + '%', 
                scale: Math.random() * 0.5 + 0.5 
              }}
              animate={{ 
                y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ 
                duration: Math.random() * 10 + 20, 
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-light mb-6 text-white">
            Ready to <span className="font-medium">Transform Your Workflow</span>?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join thousands of professionals using our AI tools to save time, reduce costs, and achieve better results.
          </p>
          
          {/* Glowing line divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-12 glow"></div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button className="bg-white text-gray-900 hover:bg-white/90 text-lg px-8 py-6 font-medium rounded-md shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Get Started For Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/80 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-white hover:bg-white/10 text-white text-lg px-8 py-6 font-medium rounded-md shadow-lg hover:shadow-xl transition-all group">
              <Calendar className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              <span>Schedule a Demo</span>
            </Button>
          </motion.div>
          
          {/* Features list */}
          <motion.div 
            className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-white/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
              <span>No credit card required</span>
            </motion.div>
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></div>
              <span>14-day free trial</span>
            </motion.div>
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></div>
              <span>Cancel anytime</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
};

export default CtaSection;
