
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const LoadingState = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-10 w-64 bg-gray-200 rounded mb-4 mx-auto"></div>
          <div className="h-6 w-96 bg-gray-200 rounded mx-auto"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoadingState;
