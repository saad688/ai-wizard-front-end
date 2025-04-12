
import { Check, Zap, Shield, Clock, Globe, Target } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Get results in seconds, not minutes. Our AI tools are optimized for speed and efficiency.'
  },
  {
    icon: Check,
    title: 'Highly Accurate',
    description: 'Trained on vast datasets to ensure precision and reliability across all tasks.'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your data never leaves our secure servers. Privacy is our top priority.'
  },
  {
    icon: Clock,
    title: 'Time-Saving',
    description: 'Automate repetitive tasks and focus on what truly matters to your business.'
  },
  {
    icon: Globe,
    title: 'Multilingual',
    description: 'Support for over 50 languages for global accessibility and reach.'
  },
  {
    icon: Target,
    title: 'Industry-Specific',
    description: 'Tailored solutions for healthcare, finance, legal, and many more industries.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Our AI Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to deliver exceptional results and transform your workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white mb-6">
                <feature.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
