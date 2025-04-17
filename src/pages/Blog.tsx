
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogHero from '@/components/blog/BlogHero';
import BlogList from '@/components/blog/BlogList';
import ToolsCta from '@/components/tools/ToolsCta';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BlogHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <BlogList searchQuery={searchQuery} />
        <ToolsCta />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
