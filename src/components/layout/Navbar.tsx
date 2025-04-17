
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="inline-block w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg"></span>
          <span className={cn(
            "font-bold text-xl transition-colors",
            isScrolled ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-white"
          )}>
            AIMaster
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-medium",
                      location.pathname === "/" ? "text-blue-600 dark:text-blue-400" : ""
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/tools">
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-medium",
                      location.pathname.includes("/tools") ? "text-blue-600 dark:text-blue-400" : ""
                    )}
                  >
                    Tools
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/blog">
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-medium",
                      location.pathname.includes("/blog") ? "text-blue-600 dark:text-blue-400" : ""
                    )}
                  >
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-medium",
                      location.pathname === "/about" ? "text-blue-600 dark:text-blue-400" : ""
                    )}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="ml-4 flex space-x-3">
            <Button 
              asChild
              variant="default" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            >
              <Link to="/tools">Get Started</Link>
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-white")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-white")} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/"
                  className={cn(
                    "px-4 py-2 rounded-md font-medium",
                    location.pathname === "/" 
                      ? "bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400" 
                      : "text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                  )}
                >
                  Home
                </Link>
                <Link 
                  to="/tools"
                  className={cn(
                    "px-4 py-2 rounded-md font-medium",
                    location.pathname.includes("/tools") 
                      ? "bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400" 
                      : "text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                  )}
                >
                  Tools
                </Link>
                <Link 
                  to="/blog"
                  className={cn(
                    "px-4 py-2 rounded-md font-medium",
                    location.pathname.includes("/blog") 
                      ? "bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400" 
                      : "text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                  )}
                >
                  Blog
                </Link>
                <Link 
                  to="/about"
                  className={cn(
                    "px-4 py-2 rounded-md font-medium",
                    location.pathname === "/about" 
                      ? "bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400" 
                      : "text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                  )}
                >
                  About
                </Link>
                <div className="pt-2">
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                  >
                    <Link to="/tools">Get Started</Link>
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
