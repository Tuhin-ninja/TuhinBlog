import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogNotFound() {
  return (
    <div className="container mx-auto py-24 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">Blog Post Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8">
        The blog post you're looking for doesn't exist or has been removed.
      </p>
      <Button asChild>
        <Link href="/blogs">
          Go Back to Blogs
        </Link>
      </Button>
    </div>
  );
} 