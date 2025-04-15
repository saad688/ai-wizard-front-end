
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Filter, Image, MessageSquare, LineChart, FileText, Code, Mic, AudioWaveform } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Tool categories
const categories = [
  "All Tools",
  "Image Processing",
  "Text Analysis",
  "Data Visualization",
  "Document Processing",
  "Code Generation",
  "Voice & Audio"
];

// Tool data
const toolsData = [
  {
    id: "noise-remover",
    name: "Noise Remover",
    description: "Remove unwanted noise from your audio recordings with our AI-powered noise cancellation technology.",
    category: "Voice & Audio",
    icon: <AudioWaveform className="h-8 w-8" />,
    popular: true
  },
  {
    id: "image-enhancer",
    name: "Image Enhancer",
    description: "Upscale and enhance images using advanced AI algorithms. Remove noise, increase resolution, and improve clarity.",
    category: "Image Processing",
    icon: <Image className="h-8 w-8" />,
    popular: true
  },
  {
    id: "text-analyzer",
    name: "Text Analyzer",
    description: "Analyze text for sentiment, keywords, and readability. Get insights into your content's tone and effectiveness.",
    category: "Text Analysis",
    icon: <MessageSquare className="h-8 w-8" />,
    popular: true
  },
  {
    id: "data-visualizer",
    name: "Data Visualizer",
    description: "Transform raw data into beautiful, interactive visualizations. Uncover insights and patterns in your data.",
    category: "Data Visualization",
    icon: <LineChart className="h-8 w-8" />,
    popular: false
  },
  {
    id: "document-parser",
    name: "Document Parser",
    description: "Extract structured data from PDFs, images, and scanned documents. Convert unstructured data into usable formats.",
    category: "Document Processing",
    icon: <FileText className="h-8 w-8" />,
    popular: true
  },
  {
    id: "code-assistant",
    name: "Code Assistant",
    description: "Generate, debug, and optimize code across multiple programming languages. Boost your development productivity.",
    category: "Code Generation",
    icon: <Code className="h-8 w-8" />,
    popular: false
  },
  {
    id: "voice-transcriber",
    name: "Voice Transcriber",
    description: "Convert speech to text with high accuracy. Support for multiple languages and speaker identification.",
    category: "Voice & Audio",
    icon: <Mic className="h-8 w-8" />,
    popular: true
  }
];

const Tools = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Tools');
  const [animatedTools, setAnimatedTools] = useState<string[]>([]);

  // Filter tools based on search query and selected category
  const filteredTools = toolsData.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Tools' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Animation effect when tools come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.id) {
            setAnimatedTools(prev => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const toolElements = document.querySelectorAll('.tool-card');
    toolElements.forEach(el => observer.observe(el));

    return () => {
      toolElements.forEach(el => observer.unobserve(el));
    };
  }, [filteredTools]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none">
            <img src="/images/ai-pattern-1.svg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              Our AI Tools
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-600">
              Explore our collection of powerful AI tools designed to help you solve complex problems and boost productivity.
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Input
                type="text"
                placeholder="Search for tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-6 px-4 rounded-md text-gray-800 pr-12 shadow-lg border-0 focus:ring-2 focus:ring-primary-blue/50"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </section>

        {/* Tools Listing */}
        <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto">
            {/* Category Filters */}
            <div className="mb-12 overflow-x-auto scrollbar-thin">
              <div className="flex space-x-2 pb-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap transition-all duration-300 ${
                      selectedCategory === category ? "bg-primary-blue text-white shadow-md" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Tools Grid */}
            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTools.map((tool) => (
                  <Link 
                    to={`/tools/${tool.id}`} 
                    key={tool.id} 
                    className="transition-all duration-300 hover:scale-105"
                  >
                    <Card 
                      id={`tool-${tool.id}`}
                      className={`tool-card h-full shadow-md hover:shadow-xl transition-all duration-300 ${
                        animatedTools.includes(`tool-${tool.id}`) ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-8'
                      }`}
                    >
                      <CardHeader className="pb-2">
                        <div className="mb-4 h-12 w-12 rounded-lg bg-primary-blue/10 flex items-center justify-center">
                          {tool.icon}
                        </div>
                        <CardTitle className="text-2xl font-heading">{tool.name}</CardTitle>
                        <CardDescription className="text-gray-600">{tool.category}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{tool.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <div>
                          {tool.popular && (
                            <span className="px-2 py-1 bg-primary-blue/10 text-primary-blue text-xs rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <Button className="bg-primary-blue hover:bg-primary-light text-white transition-all duration-300 group">
                          <span>Try Now</span>
                          <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 opacity-0 translate-y-8 animate-fade-up">
                <div className="mx-auto h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center mb-6">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No tools found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Featured Tools Section */}
        <section className="py-16 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-heading">Featured Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {toolsData.filter(tool => tool.popular).slice(0, 2).map((tool, index) => (
                <Link 
                  to={`/tools/${tool.id}`} 
                  key={tool.id}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0 translate-y-8 animate-fade-up border border-gray-100"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary-blue/10 flex items-center justify-center mr-4">
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{tool.name}</h3>
                      <p className="text-gray-500 text-sm">{tool.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <Button className="w-full bg-primary-blue hover:bg-primary-light text-white transition-all duration-300 group">
                    <span>Try Now</span>
                    <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-heading">Start Using Our AI Tools Today</h2>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              All our tools are free to use. Explore and leverage the power of AI to solve your problems and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-primary-blue hover:bg-white/90 text-lg px-8 py-6 font-medium group">
                <span>Browse All Tools</span>
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Button>
              <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white text-lg px-8 py-6 font-medium">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
