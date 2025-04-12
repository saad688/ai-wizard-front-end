
import { 
  Image, MessageSquare, LineChart, FileText, Code, Mic, Star, 
  Download, Share, Info, CheckCircle, PlusCircle, MinusCircle, 
  ArrowRight, Check, FileType, FileText as FileText2, Sparkles, AlertCircle
} from 'lucide-react';
import { ReactNode } from 'react';

// FAQ data
export const faqs = [
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
export const sampleAnalysis = {
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

// Tool data
interface ToolFeature {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ToolCompetitor {
  name: string;
  pros: string[];
  cons: string[];
}

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

interface ToolPricing {
  free: PricingPlan;
  pro: PricingPlan;
  enterprise: PricingPlan;
}

export interface Tool {
  name: string;
  description: string;
  category: string;
  icon: ReactNode;
  features: string[];
  useCases: string[];
  pricing: ToolPricing;
  detailedFeatures?: ToolFeature[];
  competitors?: ToolCompetitor[];
}

interface ToolsDatabase {
  [key: string]: Tool;
}

export const toolsDatabase: ToolsDatabase = {
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
