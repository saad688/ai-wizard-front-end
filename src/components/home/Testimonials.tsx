
import { Star, Quote, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    content: "I've been testing the Image Enhancer tool, and I'm impressed with how intuitive it is. Looking forward to seeing how it evolves!",
    author: "Sarah Johnson",
    position: "Digital Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
    stars: 4
  },
  {
    content: "As someone who works with data daily, I'm excited about the potential of these visualization tools. They're already helping me present findings more clearly.",
    author: "Michael Chen",
    position: "Data Analyst",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
    stars: 5
  },
  {
    content: "The beta version of the document parsing tool has already saved me time on my research projects. Can't wait to see the final version!",
    author: "Emily Rodriguez",
    position: "Research Associate",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
    stars: 4
  }
];

const earlyAdopters = [
  { name: "Early Adopter Program", color: "#4f46e5" },
  { name: "Beta Testing", color: "#0ea5e9" },
  { name: "AI Enthusiasts", color: "#8b5cf6" },
  { name: "Feedback Partners", color: "#0891b2" },
  { name: "Developer Community", color: "#4338ca" }
];

const Testimonials = () => {
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
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute -top-20 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-60 blur-3xl -z-10"></div>
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-indigo-50 rounded-full opacity-60 blur-3xl -z-10"></div>
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, rgba(99, 102, 241, 0.2) 2px, transparent 0)', backgroundSize: '30px 30px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-light mb-6 text-gray-900">
            Early <span className="font-medium">Feedback</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our beta testers are saying about their experience
          </p>
          
          {/* Animated Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-8"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-soft border border-gray-100 flex flex-col relative group hover:shadow-lg transition-all duration-300"
            >
              {/* Beta badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium transform rotate-3 shadow-md">
                Beta Tester
              </div>
              
              {/* Quote icon */}
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <Quote className="h-6 w-6" />
              </div>
              
              {/* Stars */}
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                  >
                    <Star
                      className={`h-5 w-5 ${
                        i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 mb-8 flex-grow relative">
                <span className="relative z-10">{testimonial.content}</span>
                {/* Subtle decorative elements */}
                <span className="absolute top-0 left-0 text-6xl opacity-5">"</span>
                <span className="absolute bottom-0 right-0 text-6xl opacity-5">"</span>
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-gray-100">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
                </div>
              </div>
              
              {/* Decorative gradient border */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Early Adopter Program instead of Company Logos */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24"
        >
          <div className="flex items-center justify-center gap-2 mb-10">
            <Sparkles className="h-5 w-5 text-indigo-500" />
            <p className="text-center text-sm text-gray-500 uppercase tracking-widest">Join Our Community</p>
            <Sparkles className="h-5 w-5 text-indigo-500" />
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {earlyAdopters.map((program, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-5 py-3 rounded-full bg-white shadow-soft border border-gray-100 text-base font-medium relative group overflow-hidden"
                style={{ color: program.color }}
              >
                <span className="relative z-10">{program.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundImage: `linear-gradient(to right, ${program.color}, ${program.color}CC)` }}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Floating elements */}
        <div className="absolute top-1/3 right-10 w-3 h-3 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-1/4 left-10 w-5 h-5 bg-indigo-300 rounded-full animate-float opacity-60"></div>
      </div>
    </section>
  );
};

export default Testimonials;
