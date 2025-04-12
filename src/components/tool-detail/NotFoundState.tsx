
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const NotFoundState = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Tool Not Found</h1>
          <p className="text-gray-600 mb-8">The tool you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="bg-primary-blue hover:bg-primary-light text-white">
            <Link to="/tools">Browse All Tools</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundState;
