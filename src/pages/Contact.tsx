
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Map, Mail, Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

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
              Contact Us
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-600">
              Have questions or need support? We're here to help.
              Get in touch with our team for any inquiries about our AI tools.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 opacity-0 translate-y-8 animate-fade-up">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary-blue/10 flex items-center justify-center mb-6">
                  <Mail className="h-8 w-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  For general inquiries, reach out to us at:
                </p>
                <a href="mailto:info@aimaster.com" className="text-primary-blue font-medium hover:underline">
                  info@aimaster.com
                </a>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 opacity-0 translate-y-8 animate-fade-up animate-delay-100">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary-blue/10 flex items-center justify-center mb-6">
                  <Phone className="h-8 w-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  For urgent matters, give us a call at:
                </p>
                <a href="tel:+1-800-AI-TOOLS" className="text-primary-blue font-medium hover:underline">
                  +1-800-AI-TOOLS
                </a>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 opacity-0 translate-y-8 animate-fade-up animate-delay-200">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary-blue/10 flex items-center justify-center mb-6">
                  <MessageSquare className="h-8 w-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Live Chat</h3>
                <p className="text-gray-600 mb-4">
                  Get real-time assistance through our live chat:
                </p>
                <Button className="bg-primary-blue hover:bg-primary-light text-white transition-all duration-300">
                  Start Live Chat
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="opacity-0 translate-y-8 animate-fade-up">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-heading">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="John Doe" 
                      required 
                      className="mt-1 transition-all duration-300 focus:border-primary-blue"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="john@example.com" 
                      required 
                      className="mt-1 transition-all duration-300 focus:border-primary-blue"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      placeholder="How can we help you?" 
                      required 
                      className="mt-1 transition-all duration-300 focus:border-primary-blue"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      placeholder="Your message here..." 
                      required 
                      rows={5}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1 transition-all duration-300 focus:border-primary-blue"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary-blue hover:bg-primary-light text-white transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Map and Office Info */}
              <div className="opacity-0 translate-y-8 animate-fade-up animate-delay-200">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-heading">Visit Our Office</h2>
                <div className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center overflow-hidden transform transition-all duration-500 hover:shadow-xl">
                  <Map className="h-12 w-12 text-gray-400" />
                  <span className="ml-2 text-gray-600">Interactive map would go here</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md transform transition-all duration-500 hover:shadow-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">AIMaster Headquarters</h3>
                  <p className="text-gray-600 mb-2">
                    123 Tech Plaza, Suite 400<br />
                    San Francisco, CA 94105
                  </p>
                  <p className="text-gray-600">
                    <strong>Business Hours:</strong><br />
                    Monday - Friday: 9:00 AM - 5:00 PM PST<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <img src="/images/ai-pattern-1.svg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
          <div className="container mx-auto relative z-10">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-heading">Frequently Asked Questions</h2>
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
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 opacity-0 translate-y-8 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
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
