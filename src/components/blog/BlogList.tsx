
import { useState, useEffect } from 'react';
import BlogCard, { BlogPost } from './BlogCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmptyState from '@/components/tools/EmptyState';

// Sample blog data
const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Introduction to AI: Understanding the Basics',
    excerpt: 'Learn the fundamental concepts of artificial intelligence and how it\'s transforming industries worldwide.',
    content: 'Full content here...',
    coverImage: 'https://images.unsplash.com/photo-1677442135068-17b1c5c298cb?q=80&w=500',
    category: 'AI Basics',
    tags: ['AI', 'Machine Learning', 'Beginners'],
    author: {
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&crop=faces&q=80',
    },
    publishedAt: 'June 12, 2023',
    readTime: '5 min read',
    commentCount: 8,
    viewCount: 1240,
  },
  {
    id: '2',
    title: 'Optimizing Image Processing with Our AI Tools',
    excerpt: 'Discover how our suite of AI-powered image processing tools can transform your workflow and save time.',
    content: 'Full content here...',
    coverImage: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=500',
    category: 'Tutorials',
    tags: ['Image Processing', 'Optimization', 'Workflow'],
    author: {
      name: 'Maya Patel',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&crop=faces&q=80',
    },
    publishedAt: 'May 28, 2023',
    readTime: '8 min read',
    commentCount: 12,
    viewCount: 2130,
  },
  {
    id: '3',
    title: 'The Future of Text Generation: GPT Models Explained',
    excerpt: 'An in-depth look at how GPT models work and what the future might hold for text generation technology.',
    content: 'Full content here...',
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=500',
    category: 'Research',
    tags: ['GPT', 'NLP', 'Text Generation'],
    author: {
      name: 'Jordan Smith',
      avatar: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=150&h=150&crop=faces&q=80',
    },
    publishedAt: 'April 15, 2023',
    readTime: '12 min read',
    commentCount: 21,
    viewCount: 3450,
  },
  {
    id: '4',
    title: 'Getting Started with Our Noise Remover Tool',
    excerpt: 'A step-by-step guide to using our noise remover tool for crystal clear audio in your projects.',
    content: 'Full content here...',
    coverImage: 'https://images.unsplash.com/photo-1558478551-1a378f63328e?q=80&w=500',
    category: 'Tutorials',
    tags: ['Audio', 'Noise Removal', 'Beginners'],
    author: {
      name: 'Samantha Lee',
      avatar: 'https://images.unsplash.com/photo-1569913486515-b74bf7751574?w=150&h=150&crop=faces&q=80',
    },
    publishedAt: 'March 3, 2023',
    readTime: '6 min read',
    commentCount: 7,
    viewCount: 1890,
  },
  {
    id: '5',
    title: 'AI Ethics: Navigating the Challenges of Automated Systems',
    excerpt: 'Exploring the ethical considerations and challenges that come with implementing AI in various contexts.',
    content: 'Full content here...',
    coverImage: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=500',
    category: 'Ethics',
    tags: ['Ethics', 'AI Impact', 'Society'],
    author: {
      name: 'David Chen',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&crop=faces&q=80',
    },
    publishedAt: 'February 18, 2023',
    readTime: '10 min read',
    commentCount: 32,
    viewCount: 4120,
  },
  {
    id: '6',
    title: 'Comparing Top AI Tools in 2023: A Comprehensive Guide',
    excerpt: 'A detailed comparison of the most popular AI tools available today and how to choose the right one for your needs.',
    content: 'Full content here...',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500',
    category: 'Comparisons',
    tags: ['Tools', 'Comparison', 'Decision Making'],
    author: {
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&crop=faces&q=80',
    },
    publishedAt: 'January 5, 2023',
    readTime: '15 min read',
    commentCount: 18,
    viewCount: 3760,
  }
];

interface BlogListProps {
  searchQuery: string;
}

const BlogList = ({ searchQuery }: BlogListProps) => {
  const [activeTab, setActiveTab] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(sampleBlogPosts);
  
  // Filter posts based on search query and active tab
  useEffect(() => {
    let result = sampleBlogPosts;
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) || 
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Apply category filter
    if (activeTab !== 'all') {
      result = result.filter(post => 
        post.category.toLowerCase() === activeTab.toLowerCase()
      );
    }
    
    setFilteredPosts(result);
  }, [searchQuery, activeTab]);
  
  // Get unique categories from posts
  const categories = ['All', ...Array.from(new Set(sampleBlogPosts.map(post => post.category)))];
  
  return (
    <section className="py-16 px-4 md:px-6 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-100/20 to-blue-100/20 rounded-full blur-3xl -z-5"></div>
      
      <div className="container mx-auto">
        <div className="mb-10">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto flex flex-wrap justify-center bg-gray-100/70 backdrop-blur-sm p-1 rounded-xl">
              {categories.map((category, index) => (
                <TabsTrigger 
                  key={index} 
                  value={category.toLowerCase()}
                  className="data-[state=active]:bg-white data-[state=active]:text-indigo-600 rounded-lg px-4 py-2"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="all" className="mt-10">
              {filteredPosts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                      <BlogCard key={post.id} post={post} index={index} />
                    ))}
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 text-center"
                  >
                    <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-6 rounded-md shadow-md hover:shadow-lg transition-all group relative overflow-hidden">
                      <span className="relative z-10 flex items-center">
                        Load More Articles
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Button>
                  </motion.div>
                </>
              ) : (
                <EmptyState />
              )}
            </TabsContent>
            
            {/* Repeat for each category */}
            {categories.slice(1).map((category) => (
              <TabsContent key={category} value={category.toLowerCase()} className="mt-10">
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                      <BlogCard key={post.id} post={post} index={index} />
                    ))}
                  </div>
                ) : (
                  <EmptyState />
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
