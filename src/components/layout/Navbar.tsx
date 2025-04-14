
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleToolsDropdown = () => setIsToolsDropdownOpen(!isToolsDropdownOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tools = [
    { name: 'Image Processing', path: '/tools/image-enhancer' },
    { name: 'Natural Language Processing', path: '/tools/text-analyzer' },
    { name: 'Data Analysis', path: '/tools/data-analysis' },
    { name: 'Voice Recognition', path: '/tools/voice-recognition' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled ? "bg-white border-b py-4" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-heading font-light tracking-tight text-gray-900">AI<span className="font-medium">Master</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
            <div className="relative">
              <button 
                onClick={toggleToolsDropdown}
                className={cn(
                  "font-normal transition-colors flex items-center",
                  location.pathname.startsWith('/tools') 
                    ? "text-gray-900 font-medium" 
                    : "text-gray-700 hover:text-gray-900"
                )}
              >
                Tools
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isToolsDropdownOpen && (
                <div className="absolute top-full mt-2 py-2 w-64 bg-white border border-gray-100 z-20 animate-fade-in">
                  {tools.map((tool) => (
                    <Link
                      key={tool.name}
                      to={tool.path}
                      className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <NavLink to="/about" active={location.pathname === '/about'}>About</NavLink>
            <NavLink to="/contact" active={location.pathname === '/contact'}>Contact</NavLink>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button className="button-primary">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-900 focus:outline-none transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white z-40 animate-fade-in">
            <div className="flex flex-col p-6 space-y-8">
              <MobileNavLink to="/" active={location.pathname === '/'}>Home</MobileNavLink>
              <button 
                onClick={toggleToolsDropdown}
                className="font-normal text-gray-700 hover:text-gray-900 px-2 py-1.5 text-left flex items-center justify-between"
              >
                Tools
                <ChevronDown className="h-4 w-4" />
              </button>
              {isToolsDropdownOpen && (
                <div className="pl-4 space-y-4">
                  {tools.map((tool) => (
                    <Link
                      key={tool.name}
                      to={tool.path}
                      className="flex items-center py-1.5 text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
              <MobileNavLink to="/about" active={location.pathname === '/about'}>About</MobileNavLink>
              <MobileNavLink to="/contact" active={location.pathname === '/contact'}>Contact</MobileNavLink>
              
              <Button className="button-primary w-full mt-8">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Helper components for navigation links
const NavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className={cn(
      "font-normal transition-colors link-underline",
      active 
        ? "text-gray-900" 
        : "text-gray-700 hover:text-gray-900"
    )}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className={cn(
      "font-normal text-2xl transition-colors",
      active 
        ? "text-gray-900" 
        : "text-gray-700 hover:text-gray-900"
    )}
  >
    {children}
  </Link>
);

export default Navbar;
