
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, ChevronRight } from 'lucide-react';
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
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-soft py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-xl gradient-bg flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-xl">AI</span>
            </div>
            <span className="text-xl font-heading font-bold gradient-text">AIMaster</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
            <div className="relative">
              <button 
                onClick={toggleToolsDropdown}
                className={cn(
                  "font-medium transition-colors flex items-center",
                  location.pathname.startsWith('/tools') 
                    ? "gradient-text font-semibold" 
                    : "text-gray-700 hover:text-blue-600"
                )}
              >
                Tools
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isToolsDropdownOpen && (
                <div className="absolute top-full mt-2 py-2 w-64 bg-white rounded-xl shadow-soft border border-gray-100 z-20 animate-scale-in">
                  {tools.map((tool) => (
                    <Link
                      key={tool.name}
                      to={tool.path}
                      className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg mx-1 transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 text-blue-400" />
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <NavLink to="/about" active={location.pathname === '/about'}>About</NavLink>
            <NavLink to="/contact" active={location.pathname === '/contact'}>Contact</NavLink>
          </div>

          {/* Search and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tools..."
                className="py-2.5 pl-10 pr-4 w-64 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-soft rounded-xl">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/" active={location.pathname === '/'}>Home</MobileNavLink>
              <button 
                onClick={toggleToolsDropdown}
                className="font-medium text-gray-700 hover:text-blue-600 px-2 py-1.5 text-left flex items-center justify-between rounded-lg transition-colors"
              >
                Tools
                <ChevronDown className="h-4 w-4" />
              </button>
              {isToolsDropdownOpen && (
                <div className="pl-4 space-y-2 animate-fade-in">
                  {tools.map((tool) => (
                    <Link
                      key={tool.name}
                      to={tool.path}
                      className="flex items-center py-1.5 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 mr-1.5 text-blue-400" />
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
              <MobileNavLink to="/about" active={location.pathname === '/about'}>About</MobileNavLink>
              <MobileNavLink to="/contact" active={location.pathname === '/contact'}>Contact</MobileNavLink>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Search tools..."
                  className="py-2.5 pl-10 pr-4 w-full rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-2 shadow-soft rounded-xl">
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
      "font-medium transition-colors",
      active 
        ? "gradient-text font-semibold" 
        : "text-gray-700 hover:text-blue-600"
    )}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className={cn(
      "font-medium px-2 py-1.5 rounded-lg transition-colors",
      active 
        ? "bg-blue-50 text-blue-600 font-semibold" 
        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
    )}
  >
    {children}
  </Link>
);

export default Navbar;
