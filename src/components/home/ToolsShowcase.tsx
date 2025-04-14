
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, MessageCircle, BarChart2, FileSearch, Cpu, Mic } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const tools = [
  {
    id: 1,
    name: 'Image Enhancer',
    description: 'Improve quality and resolution of any image with our advanced AI upscaling technology.',
    icon: Sparkles,
    path: '/tools/image-enhancer',
    category: 'Image Processing'
  },
  {
    id: 2,
    name: 'Text Analyzer',
    description: 'Extract insights, sentiment, and key information from any text with our NLP engine.',
    icon: MessageCircle,
    path: '/tools/text-analyzer',
    category: 'NLP'
  },
  {
    id: 3,
    name: 'Data Visualizer',
    description: 'Transform complex datasets into beautiful, interactive visualizations instantly.',
    icon: BarChart2,
    path: '/tools/data-visualizer',
    category: 'Data Analysis'
  },
  {
    id: 4,
    name: 'Document Parser',
    description: 'Automatically extract structured data from various document formats with high accuracy.',
    icon: FileSearch,
    path: '/tools/document-parser',
    category: 'Document Processing'
  },
  {
    id: 5,
    name: 'Code Assistant',
    description: 'Get intelligent code suggestions, bug fixes, and optimizations as you type.',
    icon: Cpu,
    path: '/tools/code-assistant',
    category: 'Development'
  },
  {
    id: 6,
    name: 'Voice Transcriber',
    description: 'Convert speech to highly accurate text in real-time across multiple languages.',
    icon: Mic,
    path: '/tools/voice-transcriber',
    category: 'Voice Recognition'
  }
];

const ToolsShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our AI Toolbox</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our collection of powerful AI tools designed to solve your most challenging problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Link to={tool.path} key={tool.id} className="group">
              <Card className="h-full card-hover border border-gray-100">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-between items-start">
                    <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center text-white">
                      <tool.icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-medium text-gray-500">{tool.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary-blue transition-colors">
                    {tool.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  
                  <div className="flex items-center text-primary-blue font-medium">
                    <span>Learn more</span>
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsShowcase;
