
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Award, Heart, Clock, ArrowRight } from 'lucide-react';
import BackgroundParticles from '@/components/tools/noise-remover/BackgroundParticles';
import { motion } from 'framer-motion';

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
              className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 mx-auto flex items-center justify-center"
            >
              <Users className="h-8 w-8 text-white" />
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
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 z-10 rounded-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlYW18ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60"
                  alt="Our team collaborating"
                  className="w-full h-full object-cover"
                />
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
                  icon: <Users className="h-7 w-7 text-white" />,
                  title: "User-Centered",
                  description: "We design all our tools with the user in mind, ensuring they're intuitive and effective for real-world needs."
                },
                {
                  icon: <Award className="h-7 w-7 text-white" />,
                  title: "Excellence",
                  description: "We're committed to the highest standards of technical excellence and continuous improvement."
                },
                {
                  icon: <Heart className="h-7 w-7 text-white" />,
                  title: "Accessibility",
                  description: "We believe powerful AI should be accessible to everyone, regardless of technical expertise."
                },
                {
                  icon: <Clock className="h-7 w-7 text-white" />,
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
                  <div className="h-14 w-14 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center mb-6 relative">
                    {value.icon}
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

        {/* Team Section */}
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
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
                },
                {
                  name: "Michael Chen",
                  role: "CTO & Lead Engineer",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                },
                {
                  name: "Elena Rodriguez",
                  role: "Head of Product Design",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
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
