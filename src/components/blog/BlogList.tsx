
import { useState, useEffect } from 'react';
import BlogCard, { BlogPost } from './BlogCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmptyState from '@/components/tools/EmptyState';

interface BlogListProps {
  searchQuery: string;
  customPosts?: BlogPost[];
}

const BlogList = ({ searchQuery, customPosts }: BlogListProps) => {
  // Use provided posts or default sample posts
  const allPosts = customPosts || [];
  
  const [activeTab, setActiveTab] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(allPosts);
  const [visiblePosts, setVisiblePosts] = useState<number>(6);
  
  useEffect(() => {
    let result = allPosts;
    
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
  }, [searchQuery, activeTab, allPosts]);
  
  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 3);
  };
  
  // Extract unique categories from all posts
  const categories = ['All', ...Array.from(new Set(allPosts.map(post => post.category)))];
  
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
                    {filteredPosts.slice(0, visiblePosts).map((post, index) => (
                      <BlogCard key={post.id} post={post} index={index} />
                    ))}
                  </div>
                  
                  {visiblePosts < filteredPosts.length && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mt-12 text-center"
                    >
                      <Button 
                        onClick={loadMorePosts} 
                        className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-6 rounded-md shadow-md hover:shadow-lg transition-all group relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center">
                          Load More Articles
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </Button>
                    </motion.div>
                  )}
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
