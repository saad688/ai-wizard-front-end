
import { CheckCircle } from 'lucide-react';
import { getIconByName } from './IconHelper';
import { cn } from '@/lib/utils';

interface FeaturesTabProps {
  tool: any;
}

const FeaturesTab = ({ tool }: FeaturesTabProps) => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl md:text-4xl font-heading font-light text-center mb-16 text-gray-900">
        Powerful <span className="font-medium">Features</span>
      </h2>
      
      {/* Detailed Features Grid */}
      {tool.detailedFeatures && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {tool.detailedFeatures.map((feature: any, index: number) => (
            <div 
              key={index} 
              className="border-t border-gray-200 pt-6 transition-all duration-500 hover:translate-y-[-4px]"
            >
              <div className="mb-5">
                {getIconByName(feature.iconName, "h-6 w-6 text-gray-900")}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      )}
      
      {/* Simple Features List */}
      <div className="bg-gray-50 p-12 md:p-16 mb-12">
        <h3 className="text-2xl font-heading font-light text-center mb-16 text-gray-900">
          Everything <span className="font-medium">You Need</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tool.features.map((feature: string, index: number) => (
            <div 
              key={index} 
              className={cn(
                "bg-white p-6 border border-gray-100",
                "flex items-start gap-3 transition-all hover:shadow-soft"
              )}
            >
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle className="h-5 w-5 text-gray-900" />
              </div>
              <p className="text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesTab;
