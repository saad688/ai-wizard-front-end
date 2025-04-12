
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 rounded-xl gradient-bg flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <span className="text-xl font-heading font-bold gradient-text">AIMaster</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Advanced AI tools for professionals, businesses, and developers.
              Simplifying complex tasks with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/tools">All Tools</FooterLink>
              <FooterLink to="/pricing">Pricing</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Tools */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6">Tools</h3>
            <ul className="space-y-3">
              <FooterLink to="/tools/image-enhancer">Image Enhancer</FooterLink>
              <FooterLink to="/tools/text-analyzer">Text Analyzer</FooterLink>
              <FooterLink to="/tools/data-visualizer">Data Visualizer</FooterLink>
              <FooterLink to="/tools/document-parser">Document Parser</FooterLink>
              <FooterLink to="/tools/code-assistant">Code Assistant</FooterLink>
              <FooterLink to="/tools/voice-transcriber">Voice Transcriber</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest updates and AI insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="py-3 px-4 w-full rounded-l-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-l-none rounded-r-xl">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 AIMaster. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper components
const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-gray-500 hover:text-blue-400 transition-colors flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link 
      to={to} 
      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
    >
      <ChevronRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
      {children}
    </Link>
  </li>
);

export default Footer;
