
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BlogPost, BlogComment } from '@/components/blog/BlogCard';
import { 
  User, Calendar, Clock, Tag, Share2, ThumbsUp, MessageSquare, 
  Bookmark, Eye, Code, FileCode, Quote, AlertCircle, Image, 
  Send, Edit, Trash2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { 
  getBlogPostById, 
  incrementBlogViews, 
  likeBlogPost, 
  addComment,
  deleteBlogPost
} from '@/lib/blog-service';
import { useToast } from '@/hooks/use-toast';

interface BlogDetailProps {
  previewMode?: boolean;
  previewPost?: BlogPost;
}

const BlogDetail = ({ previewMode = false, previewPost }: BlogDetailProps) => {
  const { blogId } = useParams<{ blogId: string }>();
  const { toast } = useToast();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(!previewMode);
  const [newComment, setNewComment] = useState('');
  const [commentName, setCommentName] = useState('');
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (previewMode && previewPost) {
      setPost(previewPost);
      return;
    }

    setIsLoading(true);
    
    if (blogId) {
      const foundPost = getBlogPostById(blogId);
      
      if (foundPost) {
        setPost(foundPost);
        if (!previewMode) incrementBlogViews(blogId);
      }
    }
    
    setIsLoading(false);
  }, [blogId, previewMode, previewPost]);

  const formatContent = (content: string) => {
    // Improved content formatting to make the blog look better
    let formatted = content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl md:text-4xl font-bold mt-10 mb-6 text-gray-900 dark:text-gray-50 border-b pb-2 border-gray-200 dark:border-gray-700">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-100">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl md:text-2xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200">$1</h3>')
      .replace(/^- (.*$)/gm, '<li class="ml-6 list-disc my-2 text-gray-700 dark:text-gray-300">$1</li>')
      .replace(/^(\d+)\. (.*$)/gm, '<li class="ml-6 list-decimal my-2 text-gray-700 dark:text-gray-300">$1. $2</li>');

    // Code blocks with improved styling
    formatted = formatted.replace(/```([a-z]*)\n([\s\S]*?)```/gm, (match, language, code) => `
      <div class="relative my-6 rounded-lg overflow-hidden shadow-lg">
        <div class="flex items-center justify-between bg-gray-800 dark:bg-gray-900 px-4 py-2">
          <div class="flex items-center gap-2">
            <Code class="w-4 h-4 text-gray-400" />
            <span class="text-sm font-mono text-gray-400">${language || 'code'}</span>
          </div>
        </div>
        <pre class="bg-gray-900 dark:bg-gray-950 p-4 overflow-x-auto">
          <code class="text-sm font-mono text-gray-200">${code.trim()}</code>
        </pre>
      </div>
    `);

    // Blockquotes with improved styling
    formatted = formatted.replace(/^> (.*$)/gm, (match, quote) => `
      <blockquote class="my-6 border-l-4 border-indigo-500 pl-4 italic bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-r-lg">
        <div class="flex items-start gap-3">
          <Quote class="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
          <p class="text-gray-700 dark:text-gray-300">${quote}</p>
        </div>
      </blockquote>
    `);

    // Note boxes with improved styling
    formatted = formatted.replace(/!note\[([\s\S]*?)\]/gm, (match, content) => `
      <div class="my-6 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 rounded-r-lg shadow-sm">
        <div class="flex items-start gap-3">
          <AlertCircle class="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
          <div>
            <h4 class="font-semibold text-blue-700 dark:text-blue-300 mb-2">Note</h4>
            <p class="text-blue-700 dark:text-blue-300">${content}</p>
          </div>
        </div>
      </div>
    `);

    // Figures with improved styling
    formatted = formatted.replace(/!figure\[(.*?)\]\((.*?)\)\[(.*?)\]/gm, (match, alt, src, caption) => `
      <figure class="my-8">
        <div class="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg">
          <img src="${src}" alt="${alt}" class="w-full h-auto" />
        </div>
        <figcaption class="mt-3 text-sm text-center text-gray-600 dark:text-gray-400 italic">
          <div class="flex items-center justify-center gap-2">
            <Image class="w-4 h-4" />
            <span>${caption}</span>
          </div>
        </figcaption>
      </figure>
    `);

    // Improve paragraph styling
    const paragraphs = formatted.split('\n\n');
    formatted = paragraphs.map(p => {
      if (!p.startsWith('<') && p.trim().length > 0) {
        return `<p class="my-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">${p}</p>`;
      }
      return p;
    }).join('\n\n');
    
    return formatted;
  };

  const handleAddComment = () => {
    if (!post || !blogId || !newComment.trim() || !commentName.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide your name and a comment",
        variant: "destructive"
      });
      return;
    }

    const comment: BlogComment = {
      author: commentName,
      content: newComment,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      }),
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&crop=faces&q=80'
    };

    addComment(blogId, comment);

    setPost(prev => {
      if (!prev) return null;
      
      const updatedComments = [...(prev.comments || []), comment];
      return {
        ...prev,
        comments: updatedComments,
        commentCount: updatedComments.length
      };
    });

    setNewComment('');
    
    toast({
      title: "Comment Posted",
      description: "Your comment has been added to the blog"
    });
  };

  const handleLike = () => {
    if (!post || !blogId || liked) return;
    
    likeBlogPost(blogId);
    setLiked(true);
    
    setPost(prev => {
      if (!prev) return null;
      return {
        ...prev,
        likes: (prev.likes || 0) + 1
      };
    });
    
    toast({
      title: "Blog Liked",
      description: "You liked this blog post"
    });
  };

  const handleDelete = () => {
    if (!blogId || previewMode) return;
    
    if (window.confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) {
      deleteBlogPost(blogId);
      toast({
        title: "Blog Deleted",
        description: "The blog post has been deleted successfully"
      });
      
      window.location.href = '/blog';
    }
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
              <Link to="/blog">Return to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col ${previewMode ? 'pt-0' : ''}`}>
      {!previewMode && <Navbar />}
      <main className={`flex-grow ${previewMode ? 'pt-0' : ''}`}>
        {post.coverImage && (
          <div className="w-full h-[40vh] md:h-[50vh] relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 container mx-auto px-4 py-8">
              <Badge className="mb-4 bg-indigo-600 hover:bg-indigo-700">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">{post.title}</h1>
              <div className="flex flex-wrap gap-4 text-gray-200">
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
            </div>
          </div>
        )}
        
        {!post.coverImage && (
          <section className="w-full bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20 pb-10">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <Badge className="mb-4 bg-indigo-600 hover:bg-indigo-700">{post.category}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">{post.title}</h1>
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
        )}

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10">
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
                      {!previewMode && (
                        <>
                          <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                            <Link to={`/edit-blog/${post.id}`}>
                              <Edit className="h-4 w-4" />
                              <span className="hidden sm:inline">Edit</span>
                            </Link>
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex items-center gap-1 text-red-500 hover:text-red-600"
                            onClick={handleDelete}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="hidden sm:inline">Delete</span>
                          </Button>
                        </>
                      )}
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

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-10">
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
                        <Button 
                          variant={liked ? "default" : "outline"} 
                          className={`flex items-center gap-2 ${liked ? 'bg-indigo-500 hover:bg-indigo-600' : ''}`}
                          onClick={handleLike}
                          disabled={liked}
                        >
                          <ThumbsUp className="h-4 w-4" />
                          <span>{post.likes || 0} {post.likes === 1 ? 'Like' : 'Likes'}</span>
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4" />
                          <span>{post.commentCount} {post.commentCount === 1 ? 'Comment' : 'Comments'}</span>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {!previewMode && (
                    <div className="mt-10">
                      <h3 className="text-2xl font-bold mb-6">Leave a Comment</h3>
                      <Card className="mb-6 shadow-sm">
                        <CardContent className="pt-6">
                          <div className="mb-4">
                            <Input
                              placeholder="Your Name"
                              value={commentName}
                              onChange={(e) => setCommentName(e.target.value)}
                              className="mb-4"
                            />
                            <Textarea
                              placeholder="Write your comment..."
                              value={newComment}
                              onChange={(e) => setNewComment(e.target.value)}
                              className="mb-4"
                              rows={4}
                            />
                            <Button 
                              onClick={handleAddComment}
                              className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 flex items-center gap-2"
                            >
                              <Send className="h-4 w-4" />
                              Post Comment
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  <div className="mt-10">
                    <h3 className="text-2xl font-bold mb-6">Comments ({post.commentCount})</h3>
                    {post.comments && post.comments.length > 0 ? (
                      post.comments.map((comment, index) => (
                        <Card key={index} className="mb-6 shadow-sm hover:shadow-md transition-shadow">
                          <CardContent className="pt-6">
                            <div className="flex items-start space-x-4">
                              <img
                                src={comment.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&crop=faces&q=80"}
                                alt={comment.author}
                                className="w-10 h-10 rounded-full"
                              />
                              <div>
                                <div className="flex items-center mb-1">
                                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mr-2">{comment.author}</h4>
                                  <span className="text-xs text-gray-500 dark:text-gray-400">{comment.date}</span>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">
                                  {comment.content}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-500 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                        <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        <p>No comments yet. Be the first to share your thoughts!</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="lg:w-1/4"
              >
                <Card className="mb-8 shadow-sm hover:shadow-md transition-shadow sticky top-20">
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

                <Card className="mb-8 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-4">Related Topics</h3>
                    <div className="flex flex-wrap gap-2">
                      {['AI Tools', 'Machine Learning', 'Beginners Guide', 'Tutorials', 'Technology'].map((topic, index) => (
                        <Badge key={index} variant="outline" className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-4">Popular Articles</h3>
                    <div className="space-y-4">
                      {[
                        'How to Use AI for Content Creation',
                        'The Future of AI Tools in 2025',
                        'Beginner\'s Guide to Machine Learning',
                        'Top 10 AI Tools for Designers'
                      ].map((title, index) => (
                        <div key={index} className="border-b border-gray-100 dark:border-gray-700 pb-3 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded transition-colors">
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
      {!previewMode && <Footer />}
    </div>
  );
};

export default BlogDetail;
