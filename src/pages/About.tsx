
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ToolsCta from '@/components/tools/ToolsCta';
import BackgroundParticles from '@/components/tools/noise-remover/BackgroundParticles';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Activity, Award, Code, UsersRound, Sparkles, Brain, ArrowRight, Cpu, LucideIcon, Shield, Target } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

interface ValueProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  delay: number;
}

const ValueCard = ({ title, description, icon: Icon, color, delay }: ValueProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
    >
      <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-tl opacity-5 rounded-full"></div>
      <div className={`w-14 h-14 rounded-lg ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="h-7 w-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const team: TeamMember[] = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=160&h=160&crop=faces&q=80',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Sarah Williams',
    role: 'CTO',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&crop=faces&q=80',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Lead AI Engineer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&crop=faces&q=80',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Emma Rodriguez',
    role: 'UX Designer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&h=160&crop=faces&q=80',
    social: {
      twitter: '#',
      linkedin: '#'
    }
  }
];

const values = [
  {
    title: 'Innovation',
    description: 'We continuously push the boundaries of AI technology to create tools that solve real-world problems.',
    icon: Sparkles,
    color: 'bg-gradient-to-r from-blue-500 to-blue-600',
    delay: 0.1
  },
  {
    title: 'Accessibility',
    description: 'We believe AI tools should be accessible to everyone, with intuitive interfaces and helpful documentation.',
    icon: UsersRound,
    color: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
    delay: 0.2
  },
  {
    title: 'Transparency',
    description: 'We're committed to being open about our technology, its capabilities, and its limitations.',
    icon: Code,
    color: 'bg-gradient-to-r from-purple-500 to-purple-600',
    delay: 0.3
  },
  {
    title: 'Quality',
    description: 'We maintain high standards in our tools' performance, reliability, and user experience.',
    icon: Award,
    color: 'bg-gradient-to-r from-pink-500 to-pink-600',
    delay: 0.4
  },
  {
    title: 'Privacy',
    description: 'We respect user data and implement strong privacy measures in all our tools and processes.',
    icon: Shield,
    color: 'bg-gradient-to-r from-cyan-500 to-cyan-600',
    delay: 0.5
  },
  {
    title: 'Purpose-Driven',
    description: 'We develop tools with clear objectives, focused on delivering real value to our users.',
    icon: Target,
    color: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
    delay: 0.6
  }
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <BackgroundParticles />
          <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none">
            <img src="/images/ai-pattern-1.svg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
          <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
          <div className="absolute -bottom-40 left-0 w-96 h-96 bg-indigo-100 rounded-full opacity-60 blur-3xl"></div>
          
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center mb-16">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500"
              >
                Our Mission
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                We're building accessible AI tools that empower people to solve complex problems and enhance their creativity
              </motion.p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-8"></div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              {/* Interactive 3D-like visual */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 opacity-50"></div>
                <div className="px-8 py-12 md:p-12 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left column with animated elements */}
                    <div className="relative">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ 
                          opacity: [0.3, 1, 0.3], 
                          scale: [0.9, 1.02, 0.9],
                          rotate: [0, 2, 0, -2, 0] 
                        }}
                        transition={{ 
                          duration: 6, 
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                        className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl"
                      />
                      
                      <motion.div 
                        initial={{ y: 0 }}
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div className="relative z-10 bg-white p-6 rounded-xl shadow-soft border border-gray-100">
                          <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                            <Brain className="h-8 w-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h3>
                          <p className="text-gray-600">
                            We envision a future where AI tools are seamlessly integrated into everyday workflows, 
                            making complex tasks simpler and empowering everyone to achieve more with less effort.
                          </p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ 
                          opacity: [0.5, 0.8, 0.5], 
                          scale: [0.95, 1.05, 0.95] 
                        }}
                        transition={{ 
                          duration: 8, 
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 2
                        }}
                        className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-indigo-300/20 to-blue-300/20 rounded-full blur-xl"
                      />
                    </div>
                    
                    {/* Right column - About content */}
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800 mb-6">Building the Future of AI Tools</h2>
                      <div className="space-y-6 text-gray-600">
                        <p>
                          Founded in 2023, AIMaster is a startup focused on creating practical AI tools 
                          that solve real problems for real people. We're a small team of AI enthusiasts, 
                          engineers, and designers passionate about making AI accessible to everyone.
                        </p>
                        <p>
                          Our journey is just beginning, and we're excited to build tools that help people 
                          harness the power of artificial intelligence in their daily work and creative endeavors.
                        </p>
                        <div className="flex gap-3 mt-2">
                          <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white group">
                            <a href="#team">
                              <span>Meet Our Team</span>
                              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </a>
                          </Button>
                          <Button asChild variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                            <a href="#values">Our Values</a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 px-4 md:px-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
          <div className="absolute top-1/3 left-0 w-full h-40 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50 transform rotate-1 -z-5"></div>
          
          <div className="container mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A small but mighty team of innovators passionate about AI and its potential to transform the world
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-8"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-indigo-600 mb-4">{member.role}</p>
                    
                    <div className="flex space-x-3 items-center">
                      {member.social.linkedin && (
                        <a 
                          href={member.social.linkedin} 
                          className="text-gray-400 hover:text-indigo-600 transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      )}
                      
                      {member.social.twitter && (
                        <a 
                          href={member.social.twitter} 
                          className="text-gray-400 hover:text-indigo-600 transition-colors"
                          aria-label={`${member.name}'s Twitter`}
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </a>
                      )}
                      
                      {member.social.github && (
                        <a 
                          href={member.social.github} 
                          className="text-gray-400 hover:text-indigo-600 transition-colors"
                          aria-label={`${member.name}'s GitHub`}
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section id="values" className="py-24 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <BackgroundParticles />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
          
          <div className="container mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The core principles that guide our work and shape our company culture
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-8"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <ValueCard key={index} {...value} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Interactive Vision Section */}
        <section className="py-24 px-4 md:px-6 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-50 to-transparent"></div>
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="vision-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F3F4F6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#F9FAFB" stopOpacity="0.3" />
                  </linearGradient>
                  <pattern id="vision-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(99, 102, 241, 0.05)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#vision-gradient)" />
                <rect width="100%" height="100%" fill="url(#vision-pattern)" />
              </svg>
            </div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-gradient-to-br from-indigo-900 to-blue-800 text-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-grid-white/5 bg-[length:20px_20px]"></div>
                <div className="p-8 md:p-12 relative">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                  
                  {/* Animated floating elements */}
                  <motion.div 
                    initial={{ y: 0 }}
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-20 opacity-30"
                  >
                    <Cpu className="h-12 w-12 text-white" />
                  </motion.div>
                  <motion.div 
                    initial={{ y: 0 }}
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 left-20 opacity-30"
                  >
                    <Activity className="h-16 w-16 text-white" />
                  </motion.div>
                  
                  <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us on Our Journey</h2>
                    <p className="text-xl text-white/90 mb-8">
                      We're just getting started, and there's so much more to come. Whether you're interested in using our tools, 
                      providing feedback, or joining our team, we'd love to connect with you.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Button asChild className="bg-white text-indigo-700 hover:bg-white/90 text-lg px-8 py-6 font-medium group">
                        <a href="/tools">
                          <span className="flex items-center">
                            Explore Our Tools
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </span>
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 font-medium">
                        <a href="mailto:info@aimaster.com">Contact Us</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <ToolsCta />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
