
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center px-4">
          <h1 className="text-7xl md:text-9xl font-bold text-primary-blue mb-4">404</h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Page Not Found</p>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Button asChild size="lg" className="bg-primary-blue hover:bg-primary-light">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
