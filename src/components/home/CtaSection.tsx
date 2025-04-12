
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
          Join thousands of professionals using our AI tools to save time, reduce costs, and achieve better results.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-primary-blue hover:bg-white/90 text-lg px-8 py-6 font-medium">
            Get Started For Free
          </Button>
          <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white text-lg px-8 py-6 font-medium">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
