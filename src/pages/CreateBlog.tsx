
import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import BlogDetail from './BlogDetail';
import {
  Bold,
  Italic,
  Underline,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Image,
  Quote,
  Link as LinkIcon,
  List,
  ListOrdered,
  Undo,
  Redo,
  FileQuestion,
  Save,
  Bot,
  Send,
  FileImage,
  Info,
  X,
  Plus,
  PlusCircle,
} from 'lucide-react';
import { BlogPost } from '@/components/blog/BlogCard';
import { getBlogPostById, saveBlogPost, generateId } from '@/lib/blog-service';

const CreateBlog = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Guides');
  const [coverImage, setCoverImage] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [activeTab, setActiveTab] = useState('edit');
  
  const editorRef = useRef<HTMLTextAreaElement>(null);
  
  // Load post data if editing
  useEffect(() => {
    if (blogId) {
      const post = getBlogPostById(blogId);
      if (post) {
        setTitle(post.title);
        setExcerpt(post.excerpt);
        setContent(post.content);
        setCategory(post.category);
        setCoverImage(post.coverImage || '');
        setTags(post.tags);
      }
    }
  }, [blogId]);
  
  const insertFormatting = (startTag: string, endTag: string = '') => {
    if (!editorRef.current) return;
    
    const textarea = editorRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const before = textarea.value.substring(0, start);
    const after = textarea.value.substring(end);
    
    const finalEndTag = endTag || startTag;
    const newText = before + startTag + selectedText + finalEndTag + after;
    
    setContent(newText);
    
    // Set selection after update
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + startTag.length,
        start + startTag.length + selectedText.length
      );
    }, 10);
  };
  
  const getPreviewPost = (): BlogPost => {
    return {
      id: blogId || generateId(),
      title: title || 'Untitled Blog Post',
      excerpt: excerpt || 'No excerpt provided',
      content: content || '# Untitled\n\nNo content yet.',
      category: category || 'Uncategorized',
      tags: tags.length ? tags : ['Uncategorized'],
      author: {
        name: 'You',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&crop=faces&q=80',
      },
      publishedAt: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      readTime: `${Math.max(1, Math.ceil(content.split(' ').length / 200))} min read`,
      commentCount: 0,
      viewCount: 0,
      coverImage: coverImage,
    };
  };
  
  const handleSave = (publish: boolean = false) => {
    if (!title.trim()) {
      toast({
        title: "Title Required",
        description: "Please provide a title for your blog post",
        variant: "destructive",
      });
      return;
    }
    
    if (!content.trim()) {
      toast({
        title: "Content Required",
        description: "Your blog post needs some content",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const newPost: BlogPost = {
        ...getPreviewPost(),
        published: publish,
      };
      
      saveBlogPost(newPost);
      
      toast({
        title: publish ? "Blog Published!" : "Draft Saved",
        description: publish 
          ? "Your blog post is now live on the blog page" $
          : "Your draft has been saved successfully",
      });
      
      if (publish) {
        navigate('/blog');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save blog post",
        variant: "destructive",
      });
    }
  };
  
  const handleAddTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };
  
  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };
  
  const categories = [
    'Guides', 'Tutorials', 'Education', 'Technology', 'AI', 
    'Machine Learning', 'Programming', 'Career', 'News'
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="mb-6 flex flex-col md:flex-row justify-between gap-4">
              <div className="w-full md:w-3/4">
                <Label htmlFor="title" className="text-lg font-medium mb-2">Blog Title</Label>
                <Input
                  id="title"
                  placeholder="Enter your blog title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-xl mb-4"
                />
                
                <Label htmlFor="excerpt" className="text-lg font-medium mb-2">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Write a brief summary of your blog post..."
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="mb-4 h-20"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="category" className="text-base font-medium mb-2">Category</Label>
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="coverImage" className="text-base font-medium mb-2">Cover Image URL</Label>
                    <Input
                      id="coverImage"
                      placeholder="https://example.com/image.jpg"
                      value={coverImage}
                      onChange={(e) => setCoverImage(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="tags" className="text-base font-medium mb-2">Tags</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="px-3 py-1 flex items-center gap-1">
                        {tag}
                        <button onClick={() => removeTag(tag)}>
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      id="tags"
                      placeholder="Add a tag..."
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddTag();
                        }
                      }}
                    />
                    <Button type="button" size="sm" onClick={handleAddTag} variant="outline">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {coverImage && (
                <div className="w-full md:w-1/4 flex flex-col items-center">
                  <Label className="text-base font-medium mb-2">Cover Preview</Label>
                  <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
                    <img 
                      src={coverImage} 
                      alt="Cover preview" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=300&fit=crop&q=80';
                      }} 
                    />
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="edit" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="edit">Edit</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => handleSave(false)}
                className="flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Draft
              </Button>
              
              <Button 
                onClick={() => handleSave(true)}
                className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Publish
              </Button>
            </div>
          </div>
          
          <TabsContent value="edit" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 mb-4 flex flex-wrap gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => insertFormatting('**', '**')}
                    title="Bold"
                  >
                    <Bold className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => insertFormatting('*', '*')}
                    title="Italic"
                  >
                    <Italic className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => insertFormatting('# ')}
                    title="Heading 1"
                  >
                    <Heading1 className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => insertFormatting('## ')}
                    title="Heading 2"
                  >
                    <Heading2 className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => insertFormatting('### ')}
                    title="Heading 3"
                  >
                    <Heading3 className="w-4 h-4" />
                  </Button>
                  <Separator orientation="vertical" className="h-6" />
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => insertFormatting('\n```\n', '\n```\n')}
                    title="Code Block"
                  >
                    <Code className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => insertFormatting('> ')}
                    title="Quote"
                  >
                    <Quote className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => insertFormatting('- ')}
                    title="Bullet List"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => insertFormatting('1. ')}
                    title="Numbered List"
                  >
                    <ListOrdered className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => insertFormatting('[', '](url)')}
                    title="Link"
                  >
                    <LinkIcon className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => insertFormatting('![alt text](', ')')}
                    title="Image"
                  >
                    <Image className="w-4 h-4" />
                  </Button>
                  <Separator orientation="vertical" className="h-6" />
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => insertFormatting('!note[\n', '\n]')}
                    title="Note Box"
                  >
                    <Info className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => insertFormatting('!figure[alt text](image-url)[caption]')}
                    title="Figure with Caption"
                  >
                    <FileImage className="w-4 h-4" />
                  </Button>
                </div>
                
                <Textarea
                  ref={editorRef}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your blog post content using Markdown..."
                  className="h-[50vh] font-mono text-sm resize-none"
                />
                
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    <strong>Tip:</strong> Use Markdown for formatting. Examples:
                  </p>
                  <ul className="list-disc ml-5 mt-2">
                    <li># Heading 1, ## Heading 2, ### Heading 3</li>
                    <li>**Bold**, *Italic*</li>
                    <li>```code blocks```</li>
                    <li>> Blockquotes</li>
                    <li>- Bullet points, 1. Numbered lists</li>
                    <li>!note[Your note text] for note boxes</li>
                    <li>!figure[alt text](image-url)[caption] for figures with captions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="preview" className="mt-0">
            <Card className="border border-gray-200 dark:border-gray-700">
              <CardContent className="p-0">
                <div className="w-full">
                  <BlogDetail previewMode={true} previewPost={getPreviewPost()} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateBlog;
