import { blogs } from "@/lib/blogs";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import CommentsSection from "@/components/blogs/CommentsSection";
import BlogReactionWrapper from "@/components/blogs/BlogReactionWrapper";

export async function generateMetadata({ params }) {
  const {blogId} = await params;
  const blog = blogs.find((blog) => blog.id === blogId);
  
  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }
  
  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    blogId: blog.id,
  }));
}

export default async function BlogPostPage({ params }) {
  const {blogId} = await params;
  const blog = blogs.find((blog) => blog.id === blogId);
  
  if (!blog) {
    notFound();
  }
  
  // Generate a dynamic color theme based on the blog category
  const getGradientByCategory = (category) => {
    const categories = {
      "Web Development": "from-blue-500 to-purple-500",
      "CSS": "from-teal-500 to-blue-500",
      "UI Libraries": "from-pink-500 to-orange-500",
      "default": "from-indigo-500 to-purple-600"
    };
    
    return categories[category] || categories.default;
  };
  
  const gradientClass = getGradientByCategory(blog.category);
  
  return (
    <div>
      {/* Hero section with gradient background */}
      <div className={`bg-gradient-to-br ${gradientClass} text-white`}>
        <div className="container mx-auto py-16 px-4">
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to blogs</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <User className="h-4 w-4" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <Calendar className="h-4 w-4" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <Clock className="h-4 w-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto py-12 px-4 max-w-5xl">
        {/* Featured image with elevation */}
        <div className="aspect-video w-full mb-8 overflow-hidden rounded-xl shadow-xl -mt-20 relative z-10">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Blog Reactions */}
        <BlogReactionWrapper blogId={blog.id} />
        
        {/* Content */}
        <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-6 rounded-lg shadow-sm mb-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {blog.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('```') && paragraph.endsWith('```')) {
                const code = paragraph.slice(paragraph.indexOf('\n') + 1, paragraph.lastIndexOf('```'));
                const language = paragraph.slice(3, paragraph.indexOf('\n'));
                
                return (
                  <pre key={index} className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>{code}</code>
                  </pre>
                );
              }
              
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 bg-muted/50 p-4 rounded-lg">
          <span className="text-sm font-medium">Tags:</span>
          {blog.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              {tag}
            </Badge>
          ))}
        </div>
        
        {/* Comments Section */}
        <div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-sm">
          <CommentsSection comments={blog.comments} />
        </div>
        
        <div className="border-t pt-8 mt-16">
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">More blog posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs
              .filter((b) => b.id !== blog.id)
              .slice(0, 2)
              .map((relatedBlog) => (
                <Link key={relatedBlog.id} href={`/blogs/${relatedBlog.id}`} className="no-underline">
                  <div className="flex gap-4 items-start bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-4 rounded-lg hover:shadow-md transition-all duration-300">
                    <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                      <img
                        src={relatedBlog.imageUrl}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium line-clamp-2">{relatedBlog.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                        {relatedBlog.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 