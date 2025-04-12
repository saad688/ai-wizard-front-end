
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Image, MessageSquare, LineChart, FileText, Code, Mic, Star, 
  Download, Share, Info, CheckCircle, PlusCircle, MinusCircle, 
  ArrowRight, Check, FileType, FileText2, Sparkles, AlertCircle
} from 'lucide-react';

// FAQ data
const faqs = [
  {
    question: "How accurate is the sentiment analysis?",
    answer: "Our text analyzer achieves over 90% accuracy on industry-standard benchmarks for sentiment analysis. It's trained on diverse datasets to recognize nuanced expressions across various contexts and industries."
  },
  {
    question: "Can it analyze text in languages other than English?",
    answer: "Yes, our Text Analyzer supports 40+ languages including Spanish, French, German, Chinese, Japanese, and Arabic. Language detection is automatic, or you can manually specify the language for more accurate results."
  },
  {
    question: "Is my data secure when using this tool?",
    answer: "Absolutely. We prioritize data security and privacy. Your text is encrypted during transit and processing. We don't store your analyzed content unless you explicitly save it to your account, and we never use your data to train our models."
  },
  {
    question: "What's the maximum text length I can analyze?",
    answer: "The free plan allows analysis of up to 3,000 characters per request. Pro users can analyze up to 25,000 characters, and Enterprise plans support unlimited text length with batch processing capabilities."
  },
  {
    question: "Can I integrate this tool with my existing applications?",
    answer: "Yes, Pro and Enterprise plans include API access with comprehensive documentation, allowing you to integrate our text analysis capabilities directly into your applications, websites, or workflows."
  }
];

// Sample analysis result data
const sampleAnalysis = {
  sentiment: {
    score: 0.78,
    label: "Positive",
    confidence: 0.92
  },
  readability: {
    fleschKincaid: 65,
    readingTime: "2 min",
    grade: "8th grade"
  },
  keywords: [
    { text: "analysis", relevance: 0.95 },
    { text: "technology", relevance: 0.82 },
    { text: "innovative", relevance: 0.77 },
    { text: "solutions", relevance: 0.73 },
    { text: "powerful", relevance: 0.68 }
  ],
  topics: [
    { name: "Technology", confidence: 0.91 },
    { name: "Business", confidence: 0.68 },
    { name: "Innovation", confidence: 0.65 }
  ],
  entities: [
    { text: "AI technology", type: "Technology" },
    { text: "Text Analyzer", type: "Product" },
    { text: "language processing", type: "Concept" }
  ]
};

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
    },
    detailedFeatures: [
      {
        title: "Sentiment Analysis",
        description: "Determine the emotional tone of text with precise sentiment scores",
        icon: <Sparkles className="h-6 w-6" />
      },
      {
        title: "Readability Metrics",
        description: "Get Flesch-Kincaid scores and grade-level assessments of your content",
        icon: <FileText2 className="h-6 w-6" />
      },
      {
        title: "Keyword Extraction",
        description: "Identify the most important terms and topics in your content",
        icon: <FileType className="h-6 w-6" />
      },
      {
        title: "Language Detection",
        description: "Automatic detection of 40+ languages for multilingual analysis",
        icon: <MessageSquare className="h-6 w-6" />
      },
      {
        title: "Entity Recognition",
        description: "Identify people, organizations, locations, and other entities",
        icon: <CheckCircle className="h-6 w-6" />
      },
      {
        title: "Style Suggestions",
        description: "Recommendations for improving clarity, engagement, and impact",
        icon: <AlertCircle className="h-6 w-6" />
      }
    ],
    competitors: [
      { name: "CompetitorX", pros: ["Lower price point"], cons: ["Limited accuracy", "Fewer languages", "Basic features only"] },
      { name: "CompetitorY", pros: ["More visualization options"], cons: ["Slower processing", "Less intuitive interface", "No API access"] },
      { name: "CompetitorZ", pros: ["Integrated with more platforms"], cons: ["Less accurate sentiment analysis", "Higher price", "Poor customer support"] }
    ]
  }
};

const ToolDetail = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const [tool, setTool] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [sampleText, setSampleText] = useState("Our Text Analyzer uses advanced AI technology to provide deep insights into your content. It analyzes sentiment, readability, and key topics to help you optimize your writing for any audience. This innovative solution makes text analysis accessible and powerful.");
  const [showAnalysis, setShowAnalysis] = useState(false);

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

  const handleAnalyzeClick = () => {
    setShowAnalysis(true);
  };

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
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-blue-400/20 text-white border-none px-3 py-1">{tool.category}</Badge>
                  <Badge className="bg-green-400/20 text-white border-none px-3 py-1">Popular</Badge>
                </div>
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
              <TabsList className="grid w-full max-w-3xl mx-auto md:grid-cols-5 h-auto mb-12">
                <TabsTrigger value="overview" className="py-3">Overview</TabsTrigger>
                <TabsTrigger value="features" className="py-3">Features</TabsTrigger>
                <TabsTrigger value="demo" className="py-3">Live Demo</TabsTrigger>
                <TabsTrigger value="compare" className="py-3">Compare</TabsTrigger>
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
              </TabsContent>
              
              <TabsContent value="features" className="mt-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Powerful Features</h2>
                
                {/* Detailed Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {tool.detailedFeatures && tool.detailedFeatures.map((feature: any, index: number) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                      <div className="h-12 w-12 rounded-full bg-primary-blue/10 flex items-center justify-center mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
                
                {/* Simple Features List */}
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
              
              <TabsContent value="demo" className="mt-6">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden max-w-4xl mx-auto">
                  <div className="p-6 bg-gray-50 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800">Try {tool.name} Now</h2>
                    <p className="text-gray-600">Enter your text below and see the power of our AI analysis in action</p>
                  </div>
                  
                  <div className="p-6">
                    <Textarea 
                      value={sampleText}
                      onChange={(e) => setSampleText(e.target.value)}
                      placeholder="Enter text to analyze..."
                      className="w-full h-32 mb-4 p-3 text-gray-700"
                    />
                    
                    <div className="flex justify-end mb-6">
                      <Button 
                        onClick={handleAnalyzeClick}
                        className="bg-primary-blue hover:bg-primary-light text-white"
                      >
                        Analyze Text
                      </Button>
                    </div>
                    
                    {showAnalysis && (
                      <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 animate-fade-in">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Analysis Results</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          {/* Sentiment Analysis */}
                          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Sentiment</h4>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-gray-600">Score: {sampleAnalysis.sentiment.score}</span>
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                                {sampleAnalysis.sentiment.label}
                              </Badge>
                            </div>
                            <Progress value={sampleAnalysis.sentiment.confidence * 100} className="h-2 mb-1" />
                            <p className="text-xs text-gray-500 text-right">Confidence: {sampleAnalysis.sentiment.confidence * 100}%</p>
                          </div>
                          
                          {/* Readability */}
                          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Readability</h4>
                            <div className="grid grid-cols-3 gap-2">
                              <div className="text-center p-2 bg-gray-50 rounded">
                                <p className="text-sm text-gray-500">Flesch Score</p>
                                <p className="font-bold text-gray-800">{sampleAnalysis.readability.fleschKincaid}</p>
                              </div>
                              <div className="text-center p-2 bg-gray-50 rounded">
                                <p className="text-sm text-gray-500">Reading Time</p>
                                <p className="font-bold text-gray-800">{sampleAnalysis.readability.readingTime}</p>
                              </div>
                              <div className="text-center p-2 bg-gray-50 rounded">
                                <p className="text-sm text-gray-500">Grade Level</p>
                                <p className="font-bold text-gray-800">{sampleAnalysis.readability.grade}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Keywords */}
                        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 mb-6">
                          <h4 className="text-lg font-semibold text-gray-800 mb-3">Keywords</h4>
                          <div className="flex flex-wrap gap-2">
                            {sampleAnalysis.keywords.map((keyword: any, index: number) => (
                              <Badge 
                                key={index} 
                                className="bg-blue-50 text-blue-800 hover:bg-blue-50 px-3 py-1"
                                variant="outline"
                              >
                                {keyword.text}
                                <span className="ml-1 text-xs text-blue-500">({keyword.relevance.toFixed(2)})</span>
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {/* Topics and Entities */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Topics</h4>
                            <ul className="space-y-2">
                              {sampleAnalysis.topics.map((topic: any, index: number) => (
                                <li key={index} className="flex justify-between items-center">
                                  <span className="text-gray-700">{topic.name}</span>
                                  <Progress value={topic.confidence * 100} className="w-1/2 h-2" />
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Entities</h4>
                            <ul className="space-y-2">
                              {sampleAnalysis.entities.map((entity: any, index: number) => (
                                <li key={index} className="flex justify-between">
                                  <span className="text-gray-700">{entity.text}</span>
                                  <Badge variant="outline" className="bg-gray-50">
                                    {entity.type}
                                  </Badge>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="compare" className="mt-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">How We Compare</h2>
                
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-4 text-left font-semibold text-gray-800 border-b border-gray-200 min-w-[200px]">Features</th>
                        <th className="p-4 text-center font-semibold text-gray-800 border-b border-gray-200 min-w-[180px]">
                          <span className="block text-primary-blue">{tool.name}</span>
                        </th>
                        {tool.competitors && tool.competitors.map((competitor: any, index: number) => (
                          <th key={index} className="p-4 text-center font-semibold text-gray-800 border-b border-gray-200 min-w-[180px]">
                            {competitor.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Sentiment Analysis</td>
                        <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                        <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                        <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                        <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Readability Metrics</td>
                        <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                        <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                        <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                        <td className="p-4 border-b border-gray-200 text-center"><MinusCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Keyword Extraction</td>
                        <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                        <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                        <td className="p-4 border-b border-gray-200 text-center"><MinusCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
                        <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Grammar Checking</td>
                        <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                        <td className="p-4 border-b border-gray-200 text-center"><MinusCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
                        <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                        <td className="p-4 border-b border-gray-200 text-center"><MinusCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Multiple Languages</td>
                        <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                        <td className="p-4 border-b border-gray-200 text-center"><MinusCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
                        <td className="p-4 border-b border-gray-200 text-center"><MinusCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
                        <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b border-gray-200 font-medium text-gray-700">API Access</td>
                        <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                        <td className="p-4 border-b border-gray-200 text-center"><MinusCircle className="h-5 w-5 text-gray-300 mx-auto" /></td>
                        <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                        <td className="p-4 border-b border-gray-200 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Accuracy</td>
                        <td className="p-4 border-b border-gray-200 text-center">92%</td>
                        <td className="p-4 border-b border-gray-200 text-center">78%</td>
                        <td className="p-4 border-b border-gray-200 text-center">85%</td>
                        <td className="p-4 border-b border-gray-200 text-center">80%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {tool.competitors && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tool.competitors.map((competitor: any, index: number) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                          {tool.name} vs. {competitor.name}
                        </h3>
                        
                        <div className="mb-4">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                            {competitor.name} Advantages
                          </h4>
                          <ul className="space-y-2">
                            {competitor.pros.map((pro: string, i: number) => (
                              <li key={i} className="flex items-start text-gray-700">
                                <PlusCircle className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                            {competitor.name} Disadvantages
                          </h4>
                          <ul className="space-y-2">
                            {competitor.cons.map((con: string, i: number) => (
                              <li key={i} className="flex items-start text-gray-700">
                                <MinusCircle className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
