
import { BlogPost } from '@/components/blog/BlogCard';
import { sampleBlogPosts } from '@/components/blog/BlogCard';

const BLOG_STORAGE_KEY = 'ai-master-blogs';

export const getBlogPosts = (): BlogPost[] => {
  try {
    const storedPosts = localStorage.getItem(BLOG_STORAGE_KEY);
    if (storedPosts) {
      const parsedPosts = JSON.parse(storedPosts);
      return [...sampleBlogPosts, ...parsedPosts];
    }
    return sampleBlogPosts;
  } catch (error) {
    console.error('Error fetching blog posts from storage:', error);
    return sampleBlogPosts;
  }
};

export const saveBlogPost = (post: BlogPost): BlogPost => {
  try {
    // Get existing posts
    const existingPosts = localStorage.getItem(BLOG_STORAGE_KEY);
    let posts: BlogPost[] = existingPosts ? JSON.parse(existingPosts) : [];
    
    // Check if we're updating an existing post
    const existingIndex = posts.findIndex(p => p.id === post.id);
    
    if (existingIndex >= 0) {
      // Update existing post
      posts[existingIndex] = post;
    } else {
      // Add new post
      posts.push(post);
    }
    
    // Save back to localStorage
    localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts));
    return post;
  } catch (error) {
    console.error('Error saving blog post:', error);
    throw new Error('Failed to save blog post');
  }
};

export const getBlogPostById = (id: string): BlogPost | undefined => {
  // First check sample posts
  const samplePost = sampleBlogPosts.find(post => post.id === id);
  if (samplePost) return samplePost;
  
  // Then check user-created posts
  try {
    const storedPosts = localStorage.getItem(BLOG_STORAGE_KEY);
    if (storedPosts) {
      const posts: BlogPost[] = JSON.parse(storedPosts);
      return posts.find(post => post.id === id);
    }
  } catch (error) {
    console.error('Error fetching blog post by ID:', error);
  }
  
  return undefined;
};

export const deleteBlogPost = (id: string): boolean => {
  try {
    const storedPosts = localStorage.getItem(BLOG_STORAGE_KEY);
    if (!storedPosts) return false;
    
    const posts: BlogPost[] = JSON.parse(storedPosts);
    const updatedPosts = posts.filter(post => post.id !== id);
    
    localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(updatedPosts));
    return true;
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return false;
  }
};

export const incrementBlogViews = (id: string): void => {
  try {
    // Handle sample posts separately
    const samplePost = sampleBlogPosts.find(post => post.id === id);
    if (samplePost) {
      samplePost.viewCount += 1;
      return;
    }
    
    const storedPosts = localStorage.getItem(BLOG_STORAGE_KEY);
    if (!storedPosts) return;
    
    const posts: BlogPost[] = JSON.parse(storedPosts);
    const postIndex = posts.findIndex(post => post.id === id);
    
    if (postIndex >= 0) {
      posts[postIndex].viewCount += 1;
      localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts));
    }
  } catch (error) {
    console.error('Error incrementing blog views:', error);
  }
};

export const likeBlogPost = (id: string): void => {
  try {
    // For simplicity, we'll just increment likes without tracking who liked it
    const storedPosts = localStorage.getItem(BLOG_STORAGE_KEY);
    if (!storedPosts) return;
    
    const posts: BlogPost[] = JSON.parse(storedPosts);
    const postIndex = posts.findIndex(post => post.id === id);
    
    if (postIndex >= 0) {
      // Initialize likes if not present
      if (!posts[postIndex].likes) posts[postIndex].likes = 0;
      posts[postIndex].likes! += 1;
      localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts));
    }
  } catch (error) {
    console.error('Error liking blog post:', error);
  }
};

export const addComment = (id: string, comment: {
  author: string;
  content: string;
  date: string;
  avatar?: string;
}): void => {
  try {
    const storedPosts = localStorage.getItem(BLOG_STORAGE_KEY);
    if (!storedPosts) return;
    
    const posts: BlogPost[] = JSON.parse(storedPosts);
    const postIndex = posts.findIndex(post => post.id === id);
    
    if (postIndex >= 0) {
      if (!posts[postIndex].comments) posts[postIndex].comments = [];
      posts[postIndex].comments!.push(comment);
      posts[postIndex].commentCount = posts[postIndex].comments!.length;
      localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts));
    }
  } catch (error) {
    console.error('Error adding comment:', error);
  }
};

// Generate a unique ID for new blog posts
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};
