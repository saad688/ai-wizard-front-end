
import { Star } from 'lucide-react';

interface FeaturesTabProps {
  tool: any;
}

const FeaturesTab = ({ tool }: FeaturesTabProps) => {
  return (
    <div className="mt-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Powerful Features</h2>
      
      {/* Detailed Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {tool.detailedFeatures && tool.detailedFeatures.map((feature: any, index: number) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
            <div className="h-12 w-12 rounded-full bg-primary-blue/10 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
      
      {/* Simple Features List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tool.features.map((feature: string, index: number) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="h-12 w-12 rounded-full bg-primary-blue/10 flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-primary-blue" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Feature {index + 1}</h3>
            <p className="text-gray-600">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesTab;
