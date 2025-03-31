import { blogs } from "@/lib/blogs";
import BlogsPageContent from "@/components/blogs/BlogsPageContent";

export const metadata = {
  title: "Blogs | TuhinBlog",
  description: "Read the latest blog posts on web development, technology, and more",
};

export default function BlogsPage() {
  return <BlogsPageContent blogs={blogs} />;
} 