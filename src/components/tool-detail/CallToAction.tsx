
import { Button } from '@/components/ui/button';

interface CallToActionProps {
  tool: any;
}

const CallToAction = ({ tool }: CallToActionProps) => {
  return (
    <section className="py-16 px-4 md:px-6 bg-primary-blue text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Try {tool.name}?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-10">
          Join thousands of users who are already transforming their {tool.category.toLowerCase()} with our AI-powered solution.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-primary-blue hover:bg-white/90 text-lg px-8 py-6 font-medium">
            Get Started For Free
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white text-lg px-8 py-6 font-medium">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
