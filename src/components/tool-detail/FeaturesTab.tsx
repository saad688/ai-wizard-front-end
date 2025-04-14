
import { CheckCircle } from 'lucide-react';
import { getIconByName } from './IconHelper';
import { cn } from '@/lib/utils';

interface FeaturesTabProps {
  tool: any;
}

const FeaturesTab = ({ tool }: FeaturesTabProps) => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-primary">
        Powerful <span className="text-secondary">Features</span>
      </h2>
      
      {/* Detailed Features Grid */}
      {tool.detailedFeatures && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-32">
          {tool.detailedFeatures.map((feature: any, index: number) => (
            <div 
              key={index} 
              className="border-t border-gray-200 pt-6 transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="mb-5 text-secondary">
                {getIconByName(feature.iconName, "h-7 w-7")}
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-text-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      )}
      
      {/* Simple Features List */}
      <div className="bg-gray-50 p-12 md:p-16 mb-12 rounded-lg">
        <h3 className="text-2xl font-heading font-semibold text-center mb-16 text-primary">
          Everything <span className="text-secondary">You Need</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tool.features.map((feature: string, index: number) => (
            <div 
              key={index} 
              className={cn(
                "bg-white p-6 border border-gray-100 rounded-md",
                "flex items-start gap-3 transition-all hover:shadow-soft"
              )}
            >
              <div className="flex-shrink-0 mt-0.5 text-secondary">
                <CheckCircle className="h-5 w-5" />
              </div>
              <p className="text-text-light">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesTab;
