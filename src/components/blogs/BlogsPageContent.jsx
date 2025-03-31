"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";
import dynamic from "next/dynamic";

// Import BlogReactionCounts with no SSR
const BlogReactionCounts = dynamic(() => import("@/components/blogs/BlogReactionCounts"), { ssr: false });

export default function BlogsPageContent({ blogs }) {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.id}`} className="no-underline">
            <Card className="h-full transition-all duration-300 hover:shadow-lg">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{blog.date}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{blog.readTime}</span>
                </div>
                <div className="flex justify-between w-full items-center">
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <BlogReactionCounts blogId={blog.id} />
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MessageCircle className="h-4 w-4" />
                      <span>{blog.comments?.length || 0}</span>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
} 