
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import BackgroundParticles from '@/components/tools/noise-remover/BackgroundParticles';
import { motion } from 'framer-motion';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission to your backend
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll respond as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
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
              Contact Us
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-600">
              Have questions or need support? We're here to help.
              Get in touch with our team for any inquiries about our AI tools.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-8"></div>
          </motion.div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4 md:px-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Mail className="h-8 w-8 text-white" />,
                  title: "Email Us",
                  description: "For general inquiries, reach out to us at:",
                  action: <a href="mailto:info@aimaster.com" className="text-indigo-600 font-medium hover:underline">info@aimaster.com</a>
                },
                {
                  icon: <Phone className="h-8 w-8 text-white" />,
                  title: "Call Us",
                  description: "For urgent matters, give us a call at:",
                  action: <a href="tel:+1-800-AI-TOOLS" className="text-indigo-600 font-medium hover:underline">+1-800-AI-TOOLS</a>
                },
                {
                  icon: <MessageSquare className="h-8 w-8 text-white" />,
                  title: "Live Chat",
                  description: "Get real-time assistance through our live chat:",
                  action: <Button className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white transition-all duration-300">Start Live Chat</Button>
                }
              ].map((method, index) => (
                <motion.div 
                  key={index}
                  custom={index}
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group relative overflow-hidden"
                >
                  <div className="absolute -right-12 -top-12 w-40 h-40 bg-gradient-to-bl from-indigo-500/10 to-blue-500/10 rounded-full transition-all duration-300 group-hover:scale-110"></div>
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 relative z-10">{method.title}</h3>
                  <p className="text-gray-600 mb-4 relative z-10">
                    {method.description}
                  </p>
                  <div className="relative z-10">{method.action}</div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mt-4 transition-all duration-300 group-hover:w-24"></div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-indigo-100 rounded-full opacity-60 blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-100 rounded-full opacity-60 blur-xl"></div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-heading relative z-10">Send Us a Message</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mb-8"></div>
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="group">
                    <Label htmlFor="name" className="text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">Your Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="John Doe" 
                      required 
                      className="mt-1 transition-all duration-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
                    />
                  </div>
                  <div className="group">
                    <Label htmlFor="email" className="text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="john@example.com" 
                      required 
                      className="mt-1 transition-all duration-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
                    />
                  </div>
                  <div className="group">
                    <Label htmlFor="subject" className="text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      placeholder="How can we help you?" 
                      required 
                      className="mt-1 transition-all duration-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
                    />
                  </div>
                  <div className="group">
                    <Label htmlFor="message" className="text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">Message</Label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      placeholder="Your message here..." 
                      required 
                      rows={5}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1 transition-all duration-300 shadow-sm"
                    />
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white transition-all duration-300 py-6 group">
                      <span>Send Message</span>
                      <ArrowRight className="ml-2 h-5 w-5 inline-block transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </form>
              </motion.div>

              {/* Office Info - Replaced Map with Visual Element */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-100 rounded-full opacity-60 blur-xl"></div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-heading relative z-10">Visit Our Office</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mb-8"></div>
                
                {/* Replaced map with animated gradient visual */}
                <div className="bg-gradient-to-br from-indigo-500/5 to-blue-500/10 rounded-xl h-64 mb-6 flex items-center justify-center overflow-hidden shadow-inner relative group">
                  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:15px_15px] opacity-50"></div>
                  <div className="absolute w-full h-full flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0.5 }}
                      animate={{ 
                        scale: [0.9, 1.1, 0.9], 
                        opacity: [0.5, 0.8, 0.5] 
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                      className="w-40 h-40 rounded-full bg-gradient-to-r from-indigo-500/30 to-blue-400/30 blur-xl"
                    />
                  </div>
                  <motion.div 
                    initial={{ y: 10 }}
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 text-center p-6 bg-white/50 backdrop-blur-md rounded-lg shadow-lg"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">AIMaster Headquarters</h3>
                    <p className="text-gray-700">123 Tech Plaza, San Francisco, CA</p>
                  </motion.div>
                </div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:shadow-xl relative overflow-hidden"
                >
                  <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-gradient-to-tr from-indigo-500/10 to-blue-500/10 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 relative z-10">AIMaster Headquarters</h3>
                  <p className="text-gray-600 mb-2 relative z-10">
                    123 Tech Plaza, Suite 400<br />
                    San Francisco, CA 94105
                  </p>
                  <p className="text-gray-600 relative z-10">
                    <strong>Business Hours:</strong><br />
                    Monday - Friday: 9:00 AM - 5:00 PM PST<br />
                    Saturday - Sunday: Closed
                  </p>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 mt-4"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <BackgroundParticles />
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <img src="/images/ai-pattern-1.svg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 font-heading">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
                Find quick answers to common questions about our services and support.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto"></div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "How quickly will I get a response to my inquiry?",
                  answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please use our phone support or live chat."
                },
                {
                  question: "Do you offer demo sessions for your AI tools?",
                  answer: "Yes, we offer personalized demo sessions for businesses interested in our enterprise solutions. Please contact our sales team to schedule a demo."
                },
                {
                  question: "Is technical support included with all subscriptions?",
                  answer: "Yes, all tools include technical support. Our tools are free to use, and we provide comprehensive support to ensure you get the most out of them."
                },
                {
                  question: "How can I request a feature for one of your tools?",
                  answer: "You can submit feature requests through your account dashboard or by contacting our support team. We regularly review and prioritize feature requests from our users."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden"
                >
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-tl from-indigo-500/10 to-blue-500/10 rounded-full transition-all duration-300 group-hover:scale-110"></div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 relative z-10">{faq.question}</h3>
                  <p className="text-gray-600 relative z-10">{faq.answer}</p>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 mt-4 transition-all duration-300 group-hover:w-20"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
