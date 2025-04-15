
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Filter, Image, MessageSquare, LineChart, FileText, Code, Mic, AudioWaveform } from 'lucide-react';
import { useState } from 'react';
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

  // Filter tools based on search query and selected category
  const filteredTools = toolsData.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Tools' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-6 gradient-bg text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our AI Tools</h1>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              Explore our collection of powerful AI tools designed to help you solve complex problems and boost productivity.
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Input
                type="text"
                placeholder="Search for tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-6 px-4 rounded-md text-gray-800 pr-12"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </section>

        {/* Tools Listing */}
        <section className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto">
            {/* Category Filters */}
            <div className="mb-12 overflow-x-auto scrollbar-thin">
              <div className="flex space-x-2 pb-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap ${
                      selectedCategory === category ? "bg-primary-blue text-white" : "text-gray-700"
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
                  <Link to={`/tools/${tool.id}`} key={tool.id} className="transition-transform duration-200 hover:scale-105">
                    <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-200">
                      <CardHeader className="pb-2">
                        <div className="mb-4 h-12 w-12 rounded-lg bg-primary-blue/10 flex items-center justify-center">
                          {tool.icon}
                        </div>
                        <CardTitle className="text-2xl">{tool.name}</CardTitle>
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
                        <Button className="bg-primary-blue hover:bg-primary-light text-white">
                          Try Now
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
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

        {/* Compare Tools */}
        <section className="py-16 px-4 md:px-6 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Need Help Choosing?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Not sure which tool is right for your needs? Use our comparison tool to find the perfect match.
            </p>
            <Button size="lg" className="bg-primary-blue hover:bg-primary-light text-white">
              Compare Tools
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
