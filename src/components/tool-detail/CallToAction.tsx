
import { Button } from '@/components/ui/button';
import { ArrowRight, ZapIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface CallToActionProps {
  tool: any;
}

const CallToAction = ({ tool }: CallToActionProps) => {
  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden bg-gradient-to-r from-indigo-900 to-blue-800">
      <div className="absolute inset-0 bg-grid-white/5 bg-[length:20px_20px]"></div>
      
      {/* Animated particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/5 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <div className="inline-block p-2 bg-white/10 backdrop-blur-sm rounded-xl mb-4">
            <span className="text-white/90 font-medium text-sm px-3 py-1">
              New AI Tool
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Try <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200">{tool.name}</span> Today
          </h2>
          
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Join our early adopters exploring the capabilities of our AI-powered {tool.category.toLowerCase()} solution.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
              <Button className="relative bg-gradient-to-br from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-lg py-6 px-8 text-lg w-full sm:w-auto">
                <span className="flex items-center">
                  Try It Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </motion.div>
            
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-lg py-6 px-8 text-lg backdrop-blur-sm">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-white/70 flex flex-col sm:flex-row justify-center gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center gap-2"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
              <span>Free during beta</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center gap-2"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
              <span>No account needed</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center gap-2"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
              <span>Feedback welcome</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
