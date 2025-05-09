
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Award, Heart, Clock, ArrowRight } from 'lucide-react';
import BackgroundParticles from '@/components/tools/noise-remover/BackgroundParticles';
import { motion } from 'framer-motion';
import ToolIcon from '@/components/icons/ToolIcons';

const About = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <BackgroundParticles />
          <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none">
            <img src="/images/ai-pattern-1.svg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="container mx-auto text-center relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
              About AIMaster
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-600">
              We're on a mission to make powerful AI tools accessible to everyone.
              Learn about our journey, our team, and the technology that powers our solutions.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-8 mb-6"></div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-600/20 mx-auto flex items-center justify-center"
            >
              <ToolIcon type="ai-assistant" className="h-10 w-10" />
            </motion.div>
          </motion.div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4 md:px-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-100 rounded-full opacity-60 blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-60 blur-xl"></div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-heading relative z-10">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6 relative z-10">
                  Founded in 2023, AIMaster began with a simple idea: make cutting-edge AI 
                  technology accessible to everyone, not just tech giants and specialized researchers.
                </p>
                <p className="text-lg text-gray-600 mb-6 relative z-10">
                  Our team of AI researchers, engineers, and designers came together with a shared 
                  vision of democratizing artificial intelligence. We believe that AI should be a tool 
                  that empowers creativity, productivity, and problem-solving for individuals and businesses of all sizes.
                </p>
                <p className="text-lg text-gray-600 relative z-10">
                  Today, we offer a comprehensive suite of AI tools that are both powerful and easy to use, 
                  allowing our users to harness the potential of artificial intelligence without needing a PhD in computer science.
                </p>
              </motion.div>
              
              {/* Replace image with animated visual element */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="rounded-lg overflow-hidden shadow-xl relative h-[400px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 z-10 rounded-lg"></div>
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:15px_15px] opacity-40"></div>
                
                {/* Animated elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div 
                    initial={{ x: -100, y: -100 }}
                    animate={{ 
                      x: [100, -100, 100], 
                      y: [100, -100, 100] 
                    }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                    className="absolute w-80 h-80 rounded-full bg-indigo-400/20 blur-3xl"
                  />
                  <motion.div 
                    initial={{ x: 200, y: 200 }}
                    animate={{ 
                      x: [0, 200, 0], 
                      y: [0, 200, 0] 
                    }}
                    transition={{ 
                      duration: 15, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                    className="absolute w-80 h-80 rounded-full bg-blue-400/20 blur-3xl"
                  />
                </div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="text-center px-8 py-10 bg-white/60 backdrop-blur-md rounded-xl shadow-lg max-w-sm"
                  >
                    <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-r from-indigo-600/20 to-blue-500/20 flex items-center justify-center mb-6">
                      <ToolIcon type="image-enhancer" className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-700">
                      To democratize artificial intelligence by creating powerful yet accessible tools that empower everyone to harness the potential of AI technology.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <BackgroundParticles />
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <img src="/images/ai-pattern-1.svg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
          <div className="container mx-auto relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center text-gray-800 mb-6 font-heading"
            >
              Our Core Values
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "ai-assistant",
                  title: "User-Centered",
                  description: "We design all our tools with the user in mind, ensuring they're intuitive and effective for real-world needs."
                },
                {
                  icon: "data-visualizer",
                  title: "Excellence",
                  description: "We're committed to the highest standards of technical excellence and continuous improvement."
                },
                {
                  icon: "text-analyzer",
                  title: "Accessibility",
                  description: "We believe powerful AI should be accessible to everyone, regardless of technical expertise."
                },
                {
                  icon: "code-assistant",
                  title: "Innovation",
                  description: "We're constantly exploring the cutting edge of AI to bring the latest advancements to our users."
                }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  custom={index}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden group"
                >
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-full transition-all duration-300 group-hover:scale-110"></div>
                  <div className="h-14 w-14 rounded-full bg-gradient-to-r from-indigo-600/20 to-blue-500/20 flex items-center justify-center mb-6 relative">
                    <ToolIcon type={value.icon as any} className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 relative z-10">
                    {value.description}
                  </p>
                  <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mt-4 transition-all duration-300 group-hover:w-16"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section - Replace team member images with animated cards */}
        <section className="py-16 px-4 md:px-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 font-heading">Meet Our Team</h2>
              <p className="text-lg text-center text-gray-600 mb-6 max-w-3xl mx-auto">
                Our diverse team combines expertise in AI research, software engineering, design, and business to create exceptional AI tools.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto"></div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO & AI Researcher",
                  icon: "ai-assistant"
                },
                {
                  name: "Michael Chen",
                  role: "CTO & Lead Engineer",
                  icon: "code-assistant"
                },
                {
                  name: "Elena Rodriguez",
                  role: "Head of Product Design",
                  icon: "image-enhancer"
                }
              ].map((member, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group"
                >
                  {/* Replaced image with gradient animation */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px] opacity-30"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20"></div>
                    
                    {/* Animated particles */}
                    <motion.div 
                      initial={{ opacity: 0.2 }}
                      animate={{ 
                        opacity: [0.2, 0.6, 0.2],
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                      className="absolute w-full h-full"
                    >
                      <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white/30 blur-md"></div>
                      <div className="absolute top-2/3 left-2/3 w-12 h-12 rounded-full bg-white/20 blur-md"></div>
                      <div className="absolute top-2/3 left-1/4 w-8 h-8 rounded-full bg-white/20 blur-md"></div>
                    </motion.div>
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-20 z-10"></div>
                    
                    {/* Profile icon */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="h-24 w-24 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <div className="h-20 w-20 rounded-full bg-gradient-to-r from-indigo-600/20 to-blue-500/20 flex items-center justify-center">
                          <ToolIcon type={member.icon as any} className="h-12 w-12" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="p-6 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/10 to-blue-500/10 rounded-full -mt-16 -mr-16"></div>
                    <h3 className="text-xl font-bold text-gray-800 relative z-10">{member.name}</h3>
                    <p className="text-gray-600 relative z-10">{member.role}</p>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 mt-3 transition-all duration-300 group-hover:w-20"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-6 bg-gradient-to-r from-indigo-900 to-blue-800 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <img src="/images/ai-pattern-1.svg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="container mx-auto text-center relative z-10"
          >
            <h2 className="text-3xl font-bold mb-6 font-heading">Join Us on Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              We're always looking for talented individuals who share our passion for AI and making technology accessible.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white text-indigo-700 hover:bg-white/90 text-lg px-8 py-6 font-medium group relative overflow-hidden">
                  <span className="relative z-10">View Open Positions</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <ArrowRight className="ml-2 h-5 w-5 inline-block transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white text-lg px-8 py-6 font-medium">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
