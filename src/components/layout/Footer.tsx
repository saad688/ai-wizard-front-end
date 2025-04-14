
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          {/* Company Info */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <span className="text-xl font-heading font-bold tracking-tight text-primary">AI<span className="text-secondary">Master</span></span>
            </div>
            <p className="text-text-light mb-8 leading-relaxed max-w-md">
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
          <div className="md:col-span-2">
            <h3 className="text-sm font-medium text-text uppercase tracking-wider mb-6">
              Navigation
            </h3>
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
          <div className="md:col-span-2">
            <h3 className="text-sm font-medium text-text uppercase tracking-wider mb-6">
              Tools
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/tools/image-enhancer">Image Enhancer</FooterLink>
              <FooterLink to="/tools/text-analyzer">Text Analyzer</FooterLink>
              <FooterLink to="/tools/data-visualizer">Data Visualizer</FooterLink>
              <FooterLink to="/tools/document-parser">Document Parser</FooterLink>
              <FooterLink to="/tools/code-assistant">Code Assistant</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-medium text-text uppercase tracking-wider mb-6">
              Stay Updated
            </h3>
            <p className="text-text-light mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="minimal-input w-full"
              />
              <Button className="ml-2 bg-primary text-white p-2 rounded-md hover:bg-primary-hover">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <div className="text-text-muted text-sm mb-4 md:mb-0">
            © 2025 AIMaster. All rights reserved.
          </div>
          <div className="flex space-x-8">
            <Link to="/privacy" className="text-text-muted hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-text-muted hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-text-muted hover:text-primary text-sm transition-colors">
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
    className="text-text-muted hover:text-primary transition-colors flex items-center justify-center h-10 w-10 border border-gray-200 hover:border-primary rounded-md"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link 
      to={to} 
      className="text-text-light hover:text-primary transition-colors link-underline"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
