
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from '@/components/brand/Logo';

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

  const toolCategories = [
    { name: 'Machine Learning', path: '/tools/machine-learning' },
    { name: 'Natural Language Processing', path: '/tools/nlp' },
    { name: 'Computer Vision', path: '/tools/computer-vision' },
    { name: 'Data Analysis', path: '/tools/data-analysis' },
    { name: 'Voice Recognition', path: '/tools/voice-recognition' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled ? "bg-white border-b border-gray-100 py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Search Bar - Center */}
          <div className="hidden md:flex items-center mx-auto bg-gray-50 rounded-full px-4 py-2 w-full max-w-md">
            <Search className="h-4 w-4 text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search tools..." 
              className="bg-transparent border-none focus:outline-none text-sm w-full"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-8">
            <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
            <div className="relative">
              <button 
                onClick={toggleToolsDropdown}
                className={cn(
                  "font-normal transition-colors flex items-center",
                  location.pathname.startsWith('/tools') 
                    ? "text-primary font-medium" 
                    : "text-text hover:text-primary"
                )}
              >
                Tools
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isToolsDropdownOpen && (
                <div className="absolute top-full mt-2 py-2 w-64 bg-white border border-gray-100 rounded-md shadow-soft z-20 animate-fade-in">
                  {toolCategories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.path}
                      className="flex items-center px-4 py-2.5 text-sm text-text-light hover:bg-gray-50 hover:text-primary"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <NavLink to="/documentation" active={location.pathname === '/documentation'}>Documentation</NavLink>
            <NavLink to="/community" active={location.pathname === '/community'}>Community</NavLink>
            <NavLink to="/about" active={location.pathname === '/about'}>About</NavLink>
          </div>

          {/* CTA */}
          <div className="hidden md:block ml-8">
            <Button className="button-primary">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-primary focus:outline-none transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white z-40 animate-fade-in">
            <div className="flex flex-col p-6 space-y-8">
              {/* Mobile Search */}
              <div className="flex items-center bg-gray-50 rounded-md px-4 py-2 w-full">
                <Search className="h-4 w-4 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search tools..." 
                  className="bg-transparent border-none focus:outline-none text-sm w-full"
                />
              </div>
              
              <MobileNavLink to="/" active={location.pathname === '/'}>Home</MobileNavLink>
              <button 
                onClick={toggleToolsDropdown}
                className="font-normal text-text hover:text-primary px-2 py-1.5 text-left flex items-center justify-between"
              >
                Tools
                <ChevronDown className="h-4 w-4" />
              </button>
              {isToolsDropdownOpen && (
                <div className="pl-4 space-y-4">
                  {toolCategories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.path}
                      className="flex items-center py-1.5 text-text-light hover:text-primary transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
              <MobileNavLink to="/documentation" active={location.pathname === '/documentation'}>Documentation</MobileNavLink>
              <MobileNavLink to="/community" active={location.pathname === '/community'}>Community</MobileNavLink>
              <MobileNavLink to="/about" active={location.pathname === '/about'}>About</MobileNavLink>
              
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
        ? "text-primary" 
        : "text-text hover:text-primary"
    )}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className={cn(
      "font-normal text-xl transition-colors",
      active 
        ? "text-primary" 
        : "text-text hover:text-primary"
    )}
  >
    {children}
  </Link>
);

export default Navbar;
