
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Image, MessageSquare, LineChart, FileText, Code, Mic, Star, Download, Share, Info, CheckCircle } from 'lucide-react';

// Tool data (in a real app, this would come from an API)
const toolsDatabase = {
  "image-enhancer": {
    name: "Image Enhancer",
    description: "Enhance and upscale your images with our state-of-the-art AI technology. Remove noise, increase resolution, and improve clarity with just a few clicks.",
    category: "Image Processing",
    icon: <Image className="h-10 w-10" />,
    features: [
      "AI-powered image upscaling up to 4x resolution",
      "Noise reduction and artifact removal",
      "Automatic color correction and enhancement",
      "Face and detail enhancement algorithms",
      "Batch processing for multiple images",
      "Cloud storage integration"
    ],
    useCases: [
      "Restore old or low-quality photos",
      "Prepare images for large format printing",
      "Enhance product photos for e-commerce",
      "Improve social media content quality",
      "Rescue poorly-lit or blurry images"
    ],
    pricing: {
      free: {
        name: "Free",
        price: "$0",
        features: ["5 image enhancements per month", "Up to 2x upscaling", "Basic noise reduction"]
      },
      pro: {
        name: "Pro",
        price: "$9.99/month",
        features: ["50 image enhancements per month", "Up to 4x upscaling", "Advanced noise reduction", "Batch processing"]
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom",
        features: ["Unlimited image enhancements", "API access", "Priority support", "Custom integration"]
      }
    }
  },
  "text-analyzer": {
    name: "Text Analyzer",
    description: "Analyze text for sentiment, readability, and key insights. Perfect for content creators, marketers, and researchers who need to understand and optimize their written content.",
    category: "Text Analysis",
    icon: <MessageSquare className="h-10 w-10" />,
    features: [
      "Sentiment analysis with emotional tone detection",
      "Readability scoring and optimization suggestions",
      "Keyword extraction and analysis",
      "Grammar and style improvement recommendations",
      "Topic modeling and categorization",
      "Plagiarism detection"
    ],
    useCases: [
      "Optimize marketing content for target audiences",
      "Analyze customer feedback and reviews",
      "Improve readability of technical documentation",
      "Research and analyze large text datasets",
      "Enhance academic papers and essays"
    ],
    pricing: {
      free: {
        name: "Free",
        price: "$0",
        features: ["3 text analyses per day", "Basic sentiment analysis", "Simple readability metrics"]
      },
      pro: {
        name: "Pro",
        price: "$12.99/month",
        features: ["Unlimited text analyses", "Advanced sentiment analysis", "Comprehensive readability tools", "Keyword optimization"]
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom",
        features: ["API access", "Custom analysis models", "Batch processing", "Dedicated support"]
      }
    }
  }
};

const ToolDetail = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const [tool, setTool] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // In a real app, you would fetch data from an API
    // Simulating API call with setTimeout
    const timer = setTimeout(() => {
      if (toolId && toolsDatabase[toolId as keyof typeof toolsDatabase]) {
        setTool(toolsDatabase[toolId as keyof typeof toolsDatabase]);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [toolId]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse text-center">
            <div className="h-10 w-64 bg-gray-200 rounded mb-4 mx-auto"></div>
            <div className="h-6 w-96 bg-gray-200 rounded mx-auto"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!tool) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Tool Not Found</h1>
            <p className="text-gray-600 mb-8">The tool you're looking for doesn't exist or has been removed.</p>
            <Button asChild className="bg-primary-blue hover:bg-primary-light text-white">
              <Link to="/tools">Browse All Tools</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className={`py-20 px-4 md:px-6 gradient-bg text-white`}>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="h-24 w-24 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0">
                {tool.icon}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{tool.name}</h1>
                <p className="text-xl mb-6 max-w-3xl">{tool.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-primary-blue hover:bg-white/90">
                    Try For Free
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Details Tabs */}
        <section className="py-16 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full max-w-2xl mx-auto md:grid-cols-4 h-auto mb-12">
                <TabsTrigger value="overview" className="py-3">Overview</TabsTrigger>
                <TabsTrigger value="features" className="py-3">Features</TabsTrigger>
                <TabsTrigger value="use-cases" className="py-3">Use Cases</TabsTrigger>
                <TabsTrigger value="pricing" className="py-3">Pricing</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
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
              </TabsContent>
              
              <TabsContent value="features" className="mt-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Powerful Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tool.features.map((feature: string, index: number) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <div className="h-12 w-12 rounded-full bg-primary-blue/10 flex items-center justify-center mb-4">
                        <Star className="h-6 w-6 text-primary-blue" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Feature {index + 1}</h3>
                      <p className="text-gray-600">{feature}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="use-cases" className="mt-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">How People Use {tool.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                  {tool.useCases.map((useCase: string, index: number) => (
                    <div key={index} className="flex flex-col">
                      <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                        <p className="text-gray-500">Use case image would go here</p>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Use Case {index + 1}</h3>
                      <p className="text-gray-600">{useCase}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="pricing" className="mt-6">
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
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
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
      </main>
      <Footer />
    </div>
  );
};

export default ToolDetail;
