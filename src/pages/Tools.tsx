
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Search, Filter, Image, MessageSquare, LineChart, FileText, Code, Mic, AudioWaveform } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ToolsHero from '@/components/tools/ToolsHero';
import CategoryFilters from '@/components/tools/CategoryFilters';
import ToolCard from '@/components/tools/ToolCard';
import EmptyState from '@/components/tools/EmptyState';
import FeaturedTools from '@/components/tools/FeaturedTools';
import ToolsCta from '@/components/tools/ToolsCta';
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
    icon: <AudioWaveform className="h-8 w-8 text-indigo-600" />,
    popular: true
  },
  {
    id: "image-enhancer",
    name: "Image Enhancer",
    description: "Upscale and enhance images using advanced AI algorithms. Remove noise, increase resolution, and improve clarity.",
    category: "Image Processing",
    icon: <Image className="h-8 w-8 text-indigo-600" />,
    popular: true
  },
  {
    id: "text-analyzer",
    name: "Text Analyzer",
    description: "Analyze text for sentiment, keywords, and readability. Get insights into your content's tone and effectiveness.",
    category: "Text Analysis",
    icon: <MessageSquare className="h-8 w-8 text-indigo-600" />,
    popular: true
  },
  {
    id: "data-visualizer",
    name: "Data Visualizer",
    description: "Transform raw data into beautiful, interactive visualizations. Uncover insights and patterns in your data.",
    category: "Data Visualization",
    icon: <LineChart className="h-8 w-8 text-indigo-600" />,
    popular: false
  },
  {
    id: "document-parser",
    name: "Document Parser",
    description: "Extract structured data from PDFs, images, and scanned documents. Convert unstructured data into usable formats.",
    category: "Document Processing",
    icon: <FileText className="h-8 w-8 text-indigo-600" />,
    popular: true
  },
  {
    id: "code-assistant",
    name: "Code Assistant",
    description: "Generate, debug, and optimize code across multiple programming languages. Boost your development productivity.",
    category: "Code Generation",
    icon: <Code className="h-8 w-8 text-indigo-600" />,
    popular: false
  },
  {
    id: "voice-transcriber",
    name: "Voice Transcriber",
    description: "Convert speech to text with high accuracy. Support for multiple languages and speaker identification.",
    category: "Voice & Audio",
    icon: <Mic className="h-8 w-8 text-indigo-600" />,
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
        <ToolsHero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Tools Listing */}
        <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
          <div className="container mx-auto">
            {/* Category Filters */}
            <CategoryFilters 
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            {/* Tools Grid */}
            {filteredTools.length > 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredTools.map((tool, index) => (
                  <ToolCard 
                    key={tool.id}
                    id={tool.id}
                    name={tool.name}
                    description={tool.description}
                    category={tool.category}
                    icon={tool.icon}
                    popular={tool.popular}
                    animationDelay={index * 0.05}
                  />
                ))}
              </motion.div>
            ) : (
              <EmptyState />
            )}
          </div>
        </section>

        {/* Featured Tools Section */}
        <FeaturedTools tools={toolsData} />

        {/* CTA Section */}
        <ToolsCta />
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
