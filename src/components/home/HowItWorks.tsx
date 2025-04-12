
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Choose Your Tool',
    description: 'Browse our extensive collection of AI tools and select the one that fits your needs.'
  },
  {
    number: '02',
    title: 'Input Your Data',
    description: 'Upload files, paste text, or connect to your data source depending on the tool.'
  },
  {
    number: '03',
    title: 'Process & Analyze',
    description: 'Our AI engine processes your input data with advanced algorithms for optimal results.'
  },
  {
    number: '04',
    title: 'Get Results',
    description: 'Review, download, or integrate the output directly into your existing workflow.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with our AI tools is simple and straightforward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step number */}
              <div className="text-6xl font-bold text-gray-100 mb-4">{step.number}</div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-full h-0.5 bg-gray-100 transform translate-x-1/2 z-0"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-primary-blue hover:bg-primary-light text-white text-lg px-8 py-6">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
