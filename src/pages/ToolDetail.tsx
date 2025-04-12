
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/tool-detail/HeroSection';
import OverviewTab from '@/components/tool-detail/OverviewTab';
import FeaturesTab from '@/components/tool-detail/FeaturesTab';
import DemoTab from '@/components/tool-detail/DemoTab';
import CompareTab from '@/components/tool-detail/CompareTab';
import PricingTab from '@/components/tool-detail/PricingTab';
import CallToAction from '@/components/tool-detail/CallToAction';
import LoadingState from '@/components/tool-detail/LoadingState';
import NotFoundState from '@/components/tool-detail/NotFoundState';
import { toolsDatabase, faqs, sampleAnalysis } from '@/components/tool-detail/ToolData';

const ToolDetail = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const [tool, setTool] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Simulate API call with setTimeout
    const timer = setTimeout(() => {
      if (toolId && toolsDatabase[toolId as keyof typeof toolsDatabase]) {
        setTool(toolsDatabase[toolId as keyof typeof toolsDatabase]);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [toolId]);

  if (loading) {
    return <LoadingState />;
  }

  if (!tool) {
    return <NotFoundState />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection tool={tool} />

        {/* Tool Details Tabs */}
        <section className="py-16 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full max-w-3xl mx-auto md:grid-cols-5 h-auto mb-12">
                <TabsTrigger value="overview" className="py-3">Overview</TabsTrigger>
                <TabsTrigger value="features" className="py-3">Features</TabsTrigger>
                <TabsTrigger value="demo" className="py-3">Live Demo</TabsTrigger>
                <TabsTrigger value="compare" className="py-3">Compare</TabsTrigger>
                <TabsTrigger value="pricing" className="py-3">Pricing</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <OverviewTab tool={tool} faqs={faqs} />
              </TabsContent>
              
              <TabsContent value="features">
                <FeaturesTab tool={tool} />
              </TabsContent>
              
              <TabsContent value="demo">
                <DemoTab tool={tool} sampleAnalysis={sampleAnalysis} />
              </TabsContent>
              
              <TabsContent value="compare">
                <CompareTab tool={tool} />
              </TabsContent>
              
              <TabsContent value="pricing">
                <PricingTab tool={tool} />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <CallToAction tool={tool} />
      </main>
      <Footer />
    </div>
  );
};

export default ToolDetail;
