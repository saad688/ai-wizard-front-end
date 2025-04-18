import { useState, useEffect } from 'react';
import BlogCard, { BlogPost } from './BlogCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmptyState from '@/components/tools/EmptyState';

// Updated sample blog data
const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Our AI Tools Suite',
    excerpt: 'A comprehensive guide to help you get started with our growing collection of AI-powered tools.',
    content: 'Full content here...',
    category: 'Guides',
    tags: ['Getting Started', 'Tutorial', 'AI Tools'],
    author: {
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&crop=faces&q=80',
    },
    publishedAt: 'April 18, 2025',
    readTime: '5 min read',
    commentCount: 0,
    viewCount: 124,
  },
  {
    id: '2',
    title: 'Understanding AI Image Processing',
    excerpt: 'Learn the fundamentals of AI image processing and how our tools can help streamline your workflow.',
    content: 'Full content here...',
    category: 'Education',
    tags: ['Image Processing', 'AI', 'Learning'],
    author: {
      name: 'Maya Patel',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&crop=faces&q=80',
    },
    publishedAt: 'April 15, 2025',
    readTime: '8 min read',
    commentCount: 0,
    viewCount: 98,
  },
  {
    id: '3',
    title: 'The Future of AI Tools',
    excerpt: 'Explore our vision for the future of AI tools and how we plan to empower creators and developers.',
    content: 'Full content here...',
    category: 'Vision',
    tags: ['Future', 'AI', 'Innovation'],
    author: {
      name: 'Jordan Smith',
      avatar: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=150&h=150&crop=faces&q=80',
    },
    publishedAt: 'April 10, 2025',
    readTime: '6 min read',
    commentCount: 0,
    viewCount: 156,
  }
];

interface BlogListProps {
  searchQuery: string;
}

const BlogList = ({ searchQuery }: BlogListProps) => {
  const [activeTab, setActiveTab] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(sampleBlogPosts);
  
  useEffect(() => {
    let result = sampleBlogPosts;
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) || 
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    if (activeTab !== 'all') {
      result = result.filter(post => 
        post.category.toLowerCase() === activeTab.toLowerCase()
      );
    }
    
    setFilteredPosts(result);
  }, [searchQuery, activeTab]);
  
  const categories = ['All', ...Array.from(new Set(sampleBlogPosts.map(post => post.category)))];
  
  return (
    <section className="py-16 px-4 md:px-6 bg-white relative overflow-hidden">
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
