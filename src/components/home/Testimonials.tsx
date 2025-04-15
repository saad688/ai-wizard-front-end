
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    content: "The Image Enhancer tool literally saved hours of manual retouching work. The quality of the output is remarkable, and now we rely on it for all our promotional materials.",
    author: "Sarah Johnson",
    position: "Marketing Director, TechGrowth",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
    stars: 5
  },
  {
    content: "As a data scientist, the visualization tools have transformed how I present findings to stakeholders. Complex patterns are now immediately clear to everyone in the room.",
    author: "Michael Chen",
    position: "Lead Data Scientist, AnalyticsPro",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
    stars: 5
  },
  {
    content: "The document parsing accuracy exceeds anything we've tried before. We've integrated it into our workflow and reduced processing time by 78%.",
    author: "Emily Rodriguez",
    position: "Operations Manager, LegalTech Solutions",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
    stars: 4
  }
];

const companyLogos = [
  { name: "Microsoft", color: "#00a4ef" },
  { name: "IBM", color: "#1e4598" },
  { name: "Adobe", color: "#fa0f00" },
  { name: "Salesforce", color: "#00a1e0" },
  { name: "Oracle", color: "#f80000" }
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
            What Our <span className="font-medium">Users Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of professionals and businesses worldwide
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

        {/* Logos */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24"
        >
          <p className="text-center text-sm text-gray-500 mb-10 uppercase tracking-widest">TRUSTED BY LEADING COMPANIES</p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {companyLogos.map((logo, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-gray-400 font-heading font-bold text-xl relative group"
                style={{ color: logo.color }}
              >
                {logo.name}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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
