
import { User, Heart, MessageSquare, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export interface Author {
  name: string;
  avatar: string;
}

export interface BlogComment {
  author: string;
  content: string;
  date: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: Author;
  publishedAt: string;
  readTime: string;
  commentCount: number;
  viewCount: number;
  coverImage?: string;
  likes?: number;
  comments?: BlogComment[];
}

export const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Our AI Tools Suite',
    excerpt: 'A comprehensive guide to help you get started with our growing collection of AI-powered tools.',
    content: `
# Getting Started with Our AI Tools Suite

Welcome to our comprehensive guide on getting started with our AI tools! In this article, we'll walk you through the essentials of our platform and help you make the most of our powerful AI-driven solutions.

## Why AI Tools Matter

In today's fast-paced digital landscape, AI tools have become essential for businesses and individuals looking to streamline their workflows, enhance creativity, and solve complex problems efficiently. Our suite of tools is designed with simplicity and power in mind, making advanced AI capabilities accessible to everyone.

### The Core Benefits

- **Efficiency:** Automate repetitive tasks and focus on what matters most
- **Creativity:** Generate new ideas and content with AI assistance
- **Analysis:** Gain deeper insights from your data with intelligent processing
- **Accessibility:** Use advanced technology with an intuitive interface

## Your First Steps

Getting started with our platform is simple. Here's a step-by-step guide:

1. **Create your account:** Sign up with your email address and set a secure password
2. **Explore the dashboard:** Familiarize yourself with our tool categories and features
3. **Try a simple project:** Start with a basic task to see the AI in action
4. **Review and refine:** Analyze the results and adjust your inputs as needed

### Recommended First Tools

For newcomers, we suggest starting with these beginner-friendly tools:

\`\`\`python
# Example of using our text generator API
import aimaster

# Initialize the client
client = aimaster.Client(api_key="your_api_key")

# Generate text
response = client.generate_text(
    prompt="Write a product description for a smart water bottle",
    max_tokens=150,
    temperature=0.7
)

print(response.text)
\`\`\`

> "The true power of AI lies not in replacing human creativity, but in enhancing it. Our tools are designed to be partners in your creative process." - Jamie Chen, Chief Product Officer

!note[
Remember that AI tools work best when given clear, specific instructions. The more context you provide, the better results you'll get!
]

## Advanced Features for Power Users

Once you're comfortable with the basics, you can explore our advanced features with JavaScript:

\`\`\`javascript
// Using our image enhancement API with JavaScript
const AImaster = require('aimaster-js');

// Initialize with your API key
const client = new AImaster.Client({ apiKey: 'your_api_key' });

// Enhance an image
async function enhanceImage(imageFile) {
  try {
    const result = await client.images.enhance({
      image: imageFile,
      settings: {
        upscale: true,
        denoise: 0.5,
        sharpen: 0.3
      }
    });
    
    return result.enhancedImage;
  } catch (error) {
    console.error('Enhancement failed:', error);
  }
}
\`\`\`

!figure[AI Processing Flow](/images/ai-process-flow.jpg)[Visual representation of how our AI tools process and enhance images]

## Community and Resources

Don't forget to join our community forum where you can:
- Share your projects
- Get help from other users
- Learn new techniques
- Stay updated on the latest features

## Conclusion

Our AI tools suite is designed to grow with you, from simple beginnings to advanced applications. We're excited to see what you'll create with these powerful capabilities at your fingertips!
    `,
    category: 'Guides',
    tags: ['Getting Started', 'Tutorial', 'AI Tools'],
    author: {
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&crop=faces&q=80',
    },
    publishedAt: 'April 18, 2025',
    readTime: '5 min read',
    commentCount: 12,
    viewCount: 324,
    likes: 45,
    comments: [
      {
        author: 'Michael Robert',
        content: 'Great article! The walkthrough of the core benefits really helped me understand how I can use these tools for my projects.',
        date: 'April 15, 2025',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&crop=faces&q=80'
      },
      {
        author: 'Sarah Wilson',
        content: 'I\'ve been looking for a simple explanation of how to get started with AI tools. This is exactly what I needed!',
        date: 'April 12, 2025',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&crop=faces&q=80'
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1080&h=540&fit=crop&q=80',
  },
  {
    id: '2',
    title: 'The Future of Machine Learning: 2025 and Beyond',
    excerpt: 'Discover the revolutionary changes coming to machine learning and how they will transform industries.',
    content: `
# The Future of Machine Learning: 2025 and Beyond

As we step into 2025, machine learning continues to evolve at an unprecedented pace. In this comprehensive guide, we'll explore the latest trends and innovations shaping the future of AI and machine learning.

## The Evolution of Neural Networks

The landscape of neural networks has transformed dramatically over the past few years. Let's explore some cutting-edge architectures:

!note[
The following examples assume familiarity with basic machine learning concepts. If you're new to ML, check out our beginners' guide first.
]

### Advanced Architecture Implementation

Here's an example of a modern neural network implementation:

\`\`\`python
import tensorflow as tf

class AdvancedTransformer(tf.keras.Model):
    def __init__(self, units=512, heads=8):
        super().__init__()
        self.attention = MultiHeadAttention(heads, units)
        self.ffn = FeedForward(units)
        
    def call(self, inputs):
        attention_output = self.attention(inputs)
        return self.ffn(attention_output)

# Initialize the model
model = AdvancedTransformer()
\`\`\`

> "The next generation of neural networks will not just learn patterns – they will understand context and reason about their learning process." - Dr. Emily Chen, AI Research Director

!figure[Neural Network Architecture](/images/ai-brain.svg)[Figure 1: Advanced Neural Network Architecture with Multi-Head Attention]

## Real-World Applications

Let's look at some JavaScript code that demonstrates how to integrate ML models into web applications:

\`\`\`javascript
// Initialize the ML model
const model = await tf.loadLayersModel('model/transformer.json');

// Process input data
async function processInput(text) {
  const tokenized = await tokenizer.tokenize(text);
  const prediction = await model.predict(tokenized);
  return postProcess(prediction);
}
\`\`\`

!note[
Remember to always validate your model's predictions in production environments. Never trust raw output without proper validation!
]

### Performance Considerations

When implementing ML models in production, consider these key metrics:

1. Inference Time
2. Model Size
3. Accuracy vs. Speed tradeoffs
4. Hardware Requirements

!figure[Performance Metrics](/images/ai-analyze.svg)[Figure 2: Key Performance Metrics for ML Models]

## The Impact on Industries

> "Machine learning is not just changing how we build technology – it's fundamentally transforming how entire industries operate." - Mark Thompson, Industry Analyst

### Healthcare Revolution

The healthcare sector is witnessing remarkable transformations:

\`\`\`python
# Example of medical image processing
def analyze_medical_image(image_data):
    preprocessed = preprocess_pipeline(image_data)
    predictions = medical_model.predict(preprocessed)
    
    return {
        'diagnosis': get_diagnosis(predictions),
        'confidence': calculate_confidence(predictions),
        'recommendations': generate_recommendations(predictions)
    }
\`\`\`

!note[
Medical AI applications require extensive testing and certification. Always consult with healthcare professionals when developing such systems.
]

## Conclusion

The future of machine learning is incredibly promising, with new breakthroughs happening every day. Stay tuned for more updates and practical guides on implementing these cutting-edge technologies.

!figure[Future Vision](/images/ai-chip.svg)[Figure 3: The Future of Machine Learning - 2025 and Beyond]

Remember to subscribe to our newsletter for weekly updates on the latest in AI and machine learning!
    `,
    category: 'Machine Learning',
    tags: ['AI', 'Neural Networks', 'Future Tech', 'Programming'],
    author: {
      name: 'Dr. Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&crop=faces&q=80',
    },
    publishedAt: 'April 19, 2025',
    readTime: '8 min read',
    commentCount: 25,
    viewCount: 1240,
    likes: 87,
    comments: [
      {
        author: 'David Miller',
        content: 'This is a fantastic overview of where ML is heading. The code examples make it so much more tangible.',
        date: 'April 17, 2025',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&crop=faces&q=80'
      }
    ],
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1080&h=540&fit=crop&q=80',
  },
];

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <Link to={`/blog/${post.id}`} className="block">
        {post.coverImage && (
          <div className="relative h-48 overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-3 left-4">
              <Badge variant="outline" className="text-xs font-normal bg-white/90 text-gray-800">
                {post.category}
              </Badge>
            </div>
          </div>
        )}
        
        <div className="p-6">
          {!post.coverImage && (
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline" className="text-xs font-normal">
                {post.category}
              </Badge>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {post.publishedAt}
              </span>
            </div>
          )}
          
          <h3 className="text-xl font-semibold mb-2 line-clamp-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            {post.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-8 h-8 rounded-full mr-3"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium flex items-center">
                  <User className="w-3 h-3 mr-1" />
                  {post.author.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {post.readTime}
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="flex items-center text-xs text-gray-500">
                <Eye className="w-3 h-3 mr-1" />
                {post.viewCount}
              </span>
              <span className="flex items-center text-xs text-gray-500">
                <MessageSquare className="w-3 h-3 mr-1" />
                {post.commentCount}
              </span>
              <span className="flex items-center text-xs text-gray-500">
                <Heart className="w-3 h-3 mr-1" />
                {post.likes || 0}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default BlogCard;
