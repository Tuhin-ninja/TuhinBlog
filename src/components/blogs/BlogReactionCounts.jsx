"use client";

import { useEffect, useState } from "react";
import { ThumbsUp, Heart, SmilePlus } from "lucide-react";

export default function BlogReactionCounts({ blogId }) {
  const [reactions, setReactions] = useState({ like: 0, love: 0, laugh: 0 });
  
  useEffect(() => {
    // Get blog reactions from localStorage
    const savedBlogReactions = localStorage.getItem('blogReactions');
    const blogReactions = savedBlogReactions ? JSON.parse(savedBlogReactions) : {};
    
    if (blogReactions[blogId]) {
      setReactions(blogReactions[blogId]);
    }
  }, [blogId]);
  
  const totalReactions = reactions.like + reactions.love + reactions.laugh;
  
  if (totalReactions === 0) {
    return null;
  }
  
  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <div className="flex -space-x-1">
        {reactions.like > 0 && (
          <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center">
            <ThumbsUp className="h-3 w-3 text-white" />
          </div>
        )}
        {reactions.love > 0 && (
          <div className="h-5 w-5 rounded-full bg-red-500 flex items-center justify-center">
            <Heart className="h-3 w-3 text-white" />
          </div>
        )}
        {reactions.laugh > 0 && (
          <div className="h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center">
            <SmilePlus className="h-3 w-3 text-white" />
          </div>
        )}
      </div>
      <span>{totalReactions}</span>
    </div>
  );
} 