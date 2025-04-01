"use client";

import Link from "next/link";
import { blogs } from "@/lib/blogs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import dynamic from "next/dynamic";

// Import BlogReactionCounts with no SSR
const BlogReactionCounts = dynamic(() => import("@/components/blogs/BlogReactionCounts"), { ssr: false });

export default function BlogPreview() {
  // Get the latest 3 blogs
  const latestBlogs = blogs.slice(0, 3);

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
          <Button variant="outline" asChild>
            <Link href="/blogs" className="flex items-center gap-2">
              View all posts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestBlogs.map((blog) => (
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
                  <p className="text-muted-foreground line-clamp-2">{blog.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{blog.date}</span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground ml-2">
                      <BlogReactionCounts blogId={blog.id} />
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MessageCircle className="h-4 w-4" />
                      <span>{blog.comments?.length || 0}</span>
                    </div>
                  </div>
                  <Badge variant="secondary">{blog.category}</Badge>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 