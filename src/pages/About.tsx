
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Award, Heart, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none">
            <img src="/images/ai-pattern-1.svg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              About AIMaster
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-600">
              We're on a mission to make powerful AI tools accessible to everyone.
              Learn about our journey, our team, and the technology that powers our solutions.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="opacity-0 translate-y-8 animate-fade-up">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-heading">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2023, AIMaster began with a simple idea: make cutting-edge AI 
                  technology accessible to everyone, not just tech giants and specialized researchers.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our team of AI researchers, engineers, and designers came together with a shared 
                  vision of democratizing artificial intelligence. We believe that AI should be a tool 
                  that empowers creativity, productivity, and problem-solving for individuals and businesses of all sizes.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we offer a comprehensive suite of AI tools that are both powerful and easy to use, 
                  allowing our users to harness the potential of artificial intelligence without needing a PhD in computer science.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 opacity-0 translate-y-8 animate-fade-up animate-delay-200">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlYW18ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60"
                  alt="Our team collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <img src="/images/ai-pattern-1.svg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
          <div className="container mx-auto relative z-10">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-heading">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 opacity-0 translate-y-8 animate-fade-up">
                <div className="h-14 w-14 rounded-full bg-primary-blue/10 flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">User-Centered</h3>
                <p className="text-gray-600">
                  We design all our tools with the user in mind, ensuring they're intuitive and effective for real-world needs.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 opacity-0 translate-y-8 animate-fade-up animate-delay-100">
                <div className="h-14 w-14 rounded-full bg-primary-blue/10 flex items-center justify-center mb-6">
                  <Award className="h-7 w-7 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We're committed to the highest standards of technical excellence and continuous improvement.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 opacity-0 translate-y-8 animate-fade-up animate-delay-200">
                <div className="h-14 w-14 rounded-full bg-primary-blue/10 flex items-center justify-center mb-6">
                  <Heart className="h-7 w-7 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Accessibility</h3>
                <p className="text-gray-600">
                  We believe powerful AI should be accessible to everyone, regardless of technical expertise.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 opacity-0 translate-y-8 animate-fade-up animate-delay-300">
                <div className="h-14 w-14 rounded-full bg-primary-blue/10 flex items-center justify-center mb-6">
                  <Clock className="h-7 w-7 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We're constantly exploring the cutting edge of AI to bring the latest advancements to our users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 font-heading">Meet Our Team</h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Our diverse team combines expertise in AI research, software engineering, design, and business to create exceptional AI tools.
            </p>
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
                <div 
                  key={index} 
                  className="bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 opacity-0 translate-y-8 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-heading">Join Us on Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              We're always looking for talented individuals who share our passion for AI and making technology accessible.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-primary-blue hover:bg-white/90 text-lg px-8 py-6 font-medium group">
                <span>View Open Positions</span>
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Button>
              <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white text-lg px-8 py-6 font-medium">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
