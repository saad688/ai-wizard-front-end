
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Calendar, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 -z-10"></div>
      
      {/* Animated abstract background */}
      <div className="absolute inset-0 -z-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <linearGradient id="cta-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.3)" />
            </linearGradient>
            <pattern id="cta-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="40" fill="none" stroke="url(#cta-gradient)" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" opacity="0.4" />
        </svg>
        
        {/* Animated particles */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 100 + '%', 
                scale: Math.random() * 0.5 + 0.5 
              }}
              animate={{ 
                y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                opacity: [0.1, 0.4, 0.1]
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
      
      {/* 3D Animated elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-indigo-600/10 to-blue-500/10 blur-3xl -z-5 animate-pulse-subtle"></div>
      
      {/* Floating decorative elements */}
      <motion.div 
        initial={{ y: 0, rotate: 0 }}
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[15%] text-white/10 z-0"
      >
        <Sparkles className="w-16 h-16" />
      </motion.div>
      
      <motion.div 
        initial={{ y: 0, rotate: 0 }}
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[15%] text-white/10 z-0"
      >
        <Star className="w-24 h-24" />
      </motion.div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
            Discover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">Future of AI</span> Today
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Start exploring our cutting-edge AI tools and join the growing community of early adopters shaping the future.
          </p>
          
          {/* Glowing line divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-12 shadow-glow"></div>
          
          {/* Animated card */}
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/20 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Early Access Benefits</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Be among the first to try our innovative tools</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></div>
                    <span>Provide feedback that shapes product development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></div>
                    <span>Completely free during our beta phase</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mr-2"></div>
                    <span>Access to exclusive updates and new features</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <Button asChild className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0 text-lg px-8 py-6 font-medium rounded-xl shadow-glow hover:shadow-glow-lg transition-all group relative overflow-hidden">
                  <Link to="/tools">
                    <span className="relative z-10 flex items-center">
                      Explore Our Tools
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white text-lg px-8 py-6 font-medium rounded-xl transition-all group">
                  <Link to="/blog">
                    <span className="flex items-center">
                      Read Our Blog
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
          
          {/* Interactive features */}
          <motion.div 
            className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-white/90"
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
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              </div>
              <span>Completely free</span>
            </motion.div>
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center mr-2">
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
              </div>
              <span>No signup required</span>
            </motion.div>
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-2">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              </div>
              <span>Use immediately</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
