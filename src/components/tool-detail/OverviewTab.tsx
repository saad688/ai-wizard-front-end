
import { CheckCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

interface OverviewTabProps {
  tool: any;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

const OverviewTab = ({ tool, faqs }: OverviewTabProps) => {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What is {tool.name}?</h2>
          <p className="text-gray-600 mb-6">
            {tool.description} Our {tool.name.toLowerCase()} uses cutting-edge AI technology to deliver exceptional results with minimal effort on your part.
          </p>
          <p className="text-gray-600 mb-6">
            Whether you're a professional or just starting out, our intuitive interface makes it easy to get the results you need without a steep learning curve.
          </p>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Key Benefits</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary-blue mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Save time with AI-powered automation</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary-blue mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Get professional-quality results with minimal effort</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary-blue mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Intuitive interface with no technical expertise required</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary-blue mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Compatible with all major file formats</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <div className="aspect-video bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Demo video would go here</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">See {tool.name} in Action</h3>
            <p className="text-gray-600 mb-4">
              Watch how easy it is to use {tool.name} to transform your {tool.category.toLowerCase()} projects.
            </p>
            <Button className="w-full bg-primary-blue hover:bg-primary-light text-white">
              Watch Full Tutorial
            </Button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-gray-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
