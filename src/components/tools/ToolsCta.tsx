
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ToolsCta = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-r from-indigo-900 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <img src="/images/ai-pattern-1.svg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="container mx-auto text-center relative z-10"
      >
        <h2 className="text-3xl font-bold mb-6 font-heading">Start Using Our AI Tools Today</h2>
        <p className="text-xl max-w-3xl mx-auto mb-10">
          All our tools are free to use. Explore and leverage the power of AI to solve your problems and boost productivity.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="bg-white text-indigo-700 hover:bg-white/90 text-lg px-8 py-6 font-medium group">
              <Link to="/tools">
                <span>Browse All Tools</span>
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" asChild className="bg-transparent border-white hover:bg-white/10 text-white text-lg px-8 py-6 font-medium">
              <Link to="/about">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ToolsCta;
