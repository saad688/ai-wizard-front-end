
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import ToolsShowcase from '@/components/home/ToolsShowcase';
import FeaturesSection from '@/components/home/FeaturesSection';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import CtaSection from '@/components/home/CtaSection';
import Footer from '@/components/layout/Footer';
import FeaturedPosts from '@/components/blog/FeaturedPosts';
import { BlogPost } from '@/components/blog/BlogCard';

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
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ToolsShowcase />
        <FeaturesSection />
        <HowItWorks />
        <Testimonials />
        <FeaturedPosts posts={sampleBlogPosts} />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
