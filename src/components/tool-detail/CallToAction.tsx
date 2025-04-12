
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

interface CallToActionProps {
  tool: any;
}

const CallToAction = ({ tool }: CallToActionProps) => {
  return (
    <section className="py-20 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 -z-10"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Try {tool.name}?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join thousands of users who are already transforming their {tool.category.toLowerCase()} with our AI-powered solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 font-medium rounded-xl shadow-lg">
              Get Started For Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white text-lg px-8 py-6 font-medium rounded-xl">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Demo
            </Button>
          </div>
          
          <div className="mt-12 pt-12 border-t border-blue-300/30 text-blue-100 flex flex-col sm:flex-row justify-center gap-8">
            <div className="flex items-center justify-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-200"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-200"></div>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-200"></div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
