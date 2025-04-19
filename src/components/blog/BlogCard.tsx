
import { User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export interface Author {
  name: string;
  avatar: string;
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
}

export const sampleBlogPosts: BlogPost[] = [
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
  },
];

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <Link to={`/blog/${post.id}`} className="block">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className="text-xs font-normal">
              {post.category}
            </Badge>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {post.publishedAt}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 line-clamp-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            {post.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex items-center mt-4">
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
        </div>
      </Link>
    </Card>
  );
};

export default BlogCard;
