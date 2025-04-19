
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogHero from '@/components/blog/BlogHero';
import BlogList from '@/components/blog/BlogList';
import ToolsCta from '@/components/tools/ToolsCta';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '@/lib/blog-service';
import { BlogPost } from '@/components/blog/BlogCard';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    // Load blog posts from localStorage
    const posts = getBlogPosts();
    setBlogPosts(posts);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BlogHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <div className="container mx-auto px-4 pt-8 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Latest Articles</h2>
          <Button asChild className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
            <Link to="/create-blog" className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              Write New Blog
            </Link>
          </Button>
        </div>
        
        <BlogList searchQuery={searchQuery} customPosts={blogPosts} />
        <ToolsCta />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
