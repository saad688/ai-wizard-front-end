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

In today's fast-paced digital landscape, AI tools have become essential for businesses and individuals looking to streamline their workflows, enhance creativity, and solve complex problems efficiently.

!note[
This guide is designed for both beginners and experienced users. Feel free to skip to the sections most relevant to you.
]

> "AI is not just about automation; it's about augmenting human capabilities and unlocking new possibilities." - Dr. Sarah Chen, AI Research Lead

### Getting Started with Code

Here's a simple example of how to use our AI API:

\`\`\`python
import ai_tools

# Initialize the AI client
client = ai_tools.Client(api_key="your_key")

# Generate text
response = client.generate_text(
    prompt="Write a blog post about AI",
    max_length=1000
)

print(response.text)
\`\`\`

!figure[AI Process Flowchart](/images/ai-process-flow.png)[Figure 1: Basic workflow of our AI text generation process]

## Advanced Features

!note[
Remember to check our documentation regularly as we frequently update our tools with new features and improvements.
]

### Real-world Applications

Here's what our users are saying:

> "This tool has revolutionized how we handle content creation. What used to take days now takes hours." - Mark Thompson, Content Director

!figure[Dashboard Screenshot](/images/ai-dashboard.png)[Figure 2: AI Tools Dashboard Interface]

// ... rest of the blog post content
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
  },
  // ... other blog posts
];

interface BlogCardProps {
  post: BlogPost;
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
