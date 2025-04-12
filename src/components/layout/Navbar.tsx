
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleToolsDropdown = () => setIsToolsDropdownOpen(!isToolsDropdownOpen);

  const tools = [
    { name: 'Image Processing', path: '/tools/image-processing' },
    { name: 'Natural Language Processing', path: '/tools/nlp' },
    { name: 'Data Analysis', path: '/tools/data-analysis' },
    { name: 'Voice Recognition', path: '/tools/voice-recognition' },
  ];

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AI</span>
            </div>
            <span className="text-xl font-heading font-semibold text-primary-blue">AIMaster</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-primary-blue transition-colors">
              Home
            </Link>
            <div className="relative">
              <button 
                onClick={toggleToolsDropdown}
                className="font-medium text-gray-700 hover:text-primary-blue transition-colors flex items-center"
              >
                Tools
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isToolsDropdownOpen && (
                <div className="absolute top-full mt-2 py-2 w-64 bg-white rounded-md shadow-lg z-20">
                  {tools.map((tool) => (
                    <Link
                      key={tool.name}
                      to={tool.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-muted hover:text-primary-blue transition-colors"
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/about" className="font-medium text-gray-700 hover:text-primary-blue transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-primary-blue transition-colors">
              Contact
            </Link>
          </div>

          {/* Search and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tools..."
                className="py-2 pl-10 pr-4 w-64 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <Button className="bg-primary-blue hover:bg-primary-light text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-primary-blue focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-gray-700 hover:text-primary-blue px-2 py-1">
                Home
              </Link>
              <button 
                onClick={toggleToolsDropdown}
                className="font-medium text-gray-700 hover:text-primary-blue px-2 py-1 text-left flex items-center justify-between"
              >
                Tools
                <ChevronDown className="h-4 w-4" />
              </button>
              {isToolsDropdownOpen && (
                <div className="pl-4 space-y-2">
                  {tools.map((tool) => (
                    <Link
                      key={tool.name}
                      to={tool.path}
                      className="block py-1 text-sm text-gray-700 hover:text-primary-blue"
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
              <Link to="/about" className="font-medium text-gray-700 hover:text-primary-blue px-2 py-1">
                About
              </Link>
              <Link to="/contact" className="font-medium text-gray-700 hover:text-primary-blue px-2 py-1">
                Contact
              </Link>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Search tools..."
                  className="py-2 pl-10 pr-4 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <Button className="bg-primary-blue hover:bg-primary-light text-white w-full mt-2">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
