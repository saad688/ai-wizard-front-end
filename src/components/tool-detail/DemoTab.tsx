
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface DemoTabProps {
  tool: any;
  sampleAnalysis: any;
}

const DemoTab = ({ tool, sampleAnalysis }: DemoTabProps) => {
  const [sampleText, setSampleText] = useState("Our Text Analyzer uses advanced AI technology to provide deep insights into your content. It analyzes sentiment, readability, and key topics to help you optimize your writing for any audience. This innovative solution makes text analysis accessible and powerful.");
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleAnalyzeClick = () => {
    setShowAnalysis(true);
  };

  return (
    <div className="mt-6">
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
    </div>
  );
};

export default DemoTab;
