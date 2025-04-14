
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

interface CallToActionProps {
  tool: any;
}

const CallToAction = ({ tool }: CallToActionProps) => {
  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gray-50 -z-10"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-light text-gray-900 mb-6">
            Ready to Try <span className="font-medium">{tool.name}</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Join thousands of users who are already transforming their {tool.category.toLowerCase()} with our AI-powered solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="button-primary text-lg group">
              Get Started For Free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-50 rounded-none py-3 px-6 text-lg flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Demo
            </Button>
          </div>
          
          <div className="mt-16 pt-16 border-t border-gray-200 text-gray-600 flex flex-col sm:flex-row justify-center gap-12">
            <div className="flex items-center justify-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-gray-900"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-gray-900"></div>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-gray-900"></div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
