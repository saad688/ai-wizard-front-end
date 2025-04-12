
import { Star, CheckCircle } from 'lucide-react';
import { getIconByName } from './IconHelper';
import { cn } from '@/lib/utils';

interface FeaturesTabProps {
  tool: any;
}

const FeaturesTab = ({ tool }: FeaturesTabProps) => {
  return (
    <div className="mt-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
        Powerful Features
      </h2>
      
      {/* Detailed Features Grid */}
      {tool.detailedFeatures && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {tool.detailedFeatures.map((feature: any, index: number) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1 p-6"
            >
              <div className="h-14 w-14 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-5">
                {getIconByName(feature.iconName, "h-7 w-7 text-blue-600 dark:text-blue-400")}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      )}
      
      {/* Simple Features List */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-10 mb-12">
        <h3 className="text-2xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Everything You Need
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tool.features.map((feature: string, index: number) => (
            <div 
              key={index} 
              className={cn(
                "bg-white dark:bg-gray-800 rounded-xl p-5 shadow-soft",
                "flex items-start gap-3 transition-all hover:shadow-md"
              )}
            >
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-gray-700 dark:text-gray-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesTab;
