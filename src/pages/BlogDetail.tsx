
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BlogPost } from '@/components/blog/BlogCard';
import { User, Calendar, Clock, Tag, Share2, ThumbsUp, MessageSquare, Bookmark, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

// Sample blog post data - in a real app this would come from an API
const sampleBlogPosts: BlogPost[] = [
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

- **Text Generator:** Create content effortlessly
- **Image Enhancer:** Improve your visuals with a single click
- **Data Summarizer:** Extract key insights from complex documents

## Advanced Features for Power Users

Once you're comfortable with the basics, you can explore our advanced features:

- Custom model training
- API integrations
- Batch processing
- Collaborative workflows

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
  },
  // ... other blog posts
];

const BlogDetail = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setIsLoading(true);
    setTimeout(() => {
      const foundPost = sampleBlogPosts.find(p => p.id === blogId);
      setPost(foundPost || null);
      setIsLoading(false);
    }, 500);
  }, [blogId]);

  // Function to convert markdown headings to HTML with classes
  const formatContent = (content: string) => {
    // Replace markdown headings with styled HTML
    let formatted = content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl md:text-4xl font-bold mt-10 mb-6">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl md:text-3xl font-semibold mt-8 mb-4">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl md:text-2xl font-semibold mt-6 mb-3">$1</h3>')
      .replace(/^\- (.*$)/gm, '<li class="ml-6 list-disc my-1">$1</li>')
      .replace(/^(\d+)\. (.*$)/gm, '<li class="ml-6 list-decimal my-2">$1. $2</li>');
    
    // Convert paragraphs (lines that aren't headings or list items)
    const paragraphs = formatted.split('\n\n');
    formatted = paragraphs.map(p => {
      if (!p.startsWith('<h') && !p.startsWith('<li') && p.trim().length > 0) {
        return `<p class="my-4 text-gray-700 dark:text-gray-300 leading-relaxed">${p}</p>`;
      }
      return p;
    }).join('\n\n');
    
    return formatted;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center p-10">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-6"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/4 mb-10"></div>
            <div className="space-y-3 w-full max-w-3xl">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-10">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <a href="/blog">Return to Blog</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20 pb-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge className="mb-4 bg-indigo-600 hover:bg-indigo-700">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">{post.title}</h1>
              <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-gray-700 dark:text-gray-300">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span className="font-medium">{post.author.name}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.publishedAt}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  <span>{post.viewCount} views</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Main Content */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:w-3/4"
              >
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div className="mb-8 flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-200 dark:border-indigo-900"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">{post.author.name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Content Writer</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Share2 className="h-4 w-4" />
                        <span className="hidden sm:inline">Share</span>
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Bookmark className="h-4 w-4" />
                        <span className="hidden sm:inline">Save</span>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft mb-10">
                    <div 
                      className="blog-content"
                      dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
                    />
                  </div>

                  <div className="mt-10 flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-10 border-t border-b border-gray-200 dark:border-gray-700 py-6 my-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <Button variant="outline" className="flex items-center gap-2">
                          <ThumbsUp className="h-4 w-4" />
                          <span>Like</span>
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4" />
                          <span>Comment</span>
                        </Button>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {post.commentCount} comments
                      </div>
                    </div>
                  </div>

                  {/* Comments Section - Simplified */}
                  <div className="mt-10">
                    <h3 className="text-2xl font-bold mb-6">Comments</h3>
                    <Card className="mb-6">
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&crop=faces&q=80"
                            alt="User"
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <div className="flex items-center mb-1">
                              <h4 className="font-medium text-gray-900 dark:text-gray-100 mr-2">Michael Robert</h4>
                              <span className="text-xs text-gray-500 dark:text-gray-400">3 days ago</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                              Great article! The walkthrough of the core benefits really helped me understand how I can use these tools for my projects.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&crop=faces&q=80"
                            alt="User"
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <div className="flex items-center mb-1">
                              <h4 className="font-medium text-gray-900 dark:text-gray-100 mr-2">Sarah Wilson</h4>
                              <span className="text-xs text-gray-500 dark:text-gray-400">1 week ago</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                              I've been looking for a simple explanation of how to get started with AI tools. This is exactly what I needed!
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="lg:w-1/4"
              >
                {/* Author Card */}
                <Card className="mb-8">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <img 
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-indigo-200 dark:border-indigo-900"
                      />
                      <h3 className="font-bold text-lg mb-2">{post.author.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Content Writer specializing in AI tools and technology explainers.
                      </p>
                      <Button variant="outline" className="w-full">Follow</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Topics */}
                <Card className="mb-8">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-4">Related Topics</h3>
                    <div className="flex flex-wrap gap-2">
                      {['AI Tools', 'Machine Learning', 'Beginners Guide', 'Tutorials', 'Technology'].map((topic, index) => (
                        <Badge key={index} variant="outline" className="cursor-pointer">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Articles */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-4">Popular Articles</h3>
                    <div className="space-y-4">
                      {[
                        'How to Use AI for Content Creation',
                        'The Future of AI Tools in 2025',
                        'Beginner\'s Guide to Machine Learning',
                        'Top 10 AI Tools for Designers'
                      ].map((title, index) => (
                        <div key={index} className="border-b border-gray-100 dark:border-gray-700 pb-3 last:border-0">
                          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            {title}
                          </a>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
