
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingTabProps {
  tool: any;
}

const PricingTab = ({ tool }: PricingTabProps) => {
  return (
    <div className="mt-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {Object.values(tool.pricing).map((plan: any, index: number) => (
          <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden border ${
            plan.name === 'Pro' ? 'border-primary-blue' : 'border-gray-200'
          }`}>
            {plan.name === 'Pro' && (
              <div className="bg-primary-blue text-white py-2 text-center font-semibold">
                Most Popular
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                {plan.name !== 'Free' && plan.name !== 'Enterprise' && <span className="text-gray-500">/month</span>}
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className={`w-full ${
                plan.name === 'Pro' 
                  ? 'bg-primary-blue hover:bg-primary-light text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 max-w-3xl mx-auto bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">All Plans Include</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary-blue mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Secure SSL encryption</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary-blue mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">99.9% uptime guarantee</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary-blue mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Email support</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary-blue mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Regular feature updates</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTab;
