"use client";

import { useState, useEffect } from "react";
import { ThumbsUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogReactions({ blogId }) {
  const [reactions, setReactions] = useState({ like: 0, love: 0, laugh: 0 });
  const [userReaction, setUserReaction] = useState(null);
  
  // Initialize from localStorage on first render
  useEffect(() => {
    // Get blog reactions
    const savedBlogReactions = localStorage.getItem('blogReactions');
    const blogReactions = savedBlogReactions ? JSON.parse(savedBlogReactions) : {};
    
    if (blogReactions[blogId]) {
      setReactions(blogReactions[blogId]);
    }
    
    // Get user's reaction
    const savedUserReactions = localStorage.getItem('userBlogReactions');
    const userReactions = savedUserReactions ? JSON.parse(savedUserReactions) : {};
    
    if (userReactions[blogId]) {
      setUserReaction(userReactions[blogId]);
    }
  }, [blogId]);
  
  // Save reactions to localStorage when they change
  useEffect(() => {
    const savedBlogReactions = localStorage.getItem('blogReactions');
    const blogReactions = savedBlogReactions ? JSON.parse(savedBlogReactions) : {};
    
    blogReactions[blogId] = reactions;
    localStorage.setItem('blogReactions', JSON.stringify(blogReactions));
  }, [reactions, blogId]);
  
  // Save user's reaction to localStorage when it changes
  useEffect(() => {
    const savedUserReactions = localStorage.getItem('userBlogReactions');
    const userReactions = savedUserReactions ? JSON.parse(savedUserReactions) : {};
    
    if (userReaction) {
      userReactions[blogId] = userReaction;
    } else {
      delete userReactions[blogId];
    }
    
    localStorage.setItem('userBlogReactions', JSON.stringify(userReactions));
  }, [userReaction, blogId]);
  
  const handleToggleReaction = (reactionType) => {
    // 1. If current reaction is same as new one, remove it (toggle off)
    if (userReaction === reactionType) {
      // Update reaction count (decrease)
      setReactions(prev => ({
        ...prev,
        [reactionType]: Math.max(0, prev[reactionType] - 1)
      }));
      
      // Remove user's reaction
      setUserReaction(null);
    }
    // 2. If different reaction or no reaction, update to new reaction
    else {
      // If user had a different reaction before, update previous reaction count
      if (userReaction) {
        setReactions(prev => ({
          ...prev,
          [userReaction]: Math.max(0, prev[userReaction] - 1)
        }));
      }
      
      // Update new reaction count (increase)
      setReactions(prev => ({
        ...prev,
        [reactionType]: prev[reactionType] + 1
      }));
      
      // Set user's new reaction
      setUserReaction(reactionType);
    }
  };
  
  const getTotalReactions = () => {
    return reactions.like + reactions.love + reactions.laugh;
  };
  
  return (
    <div className="flex flex-col rounded-lg p-4 mb-8 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">React to this post</h3>
        <div className="flex items-center gap-2">
          {getTotalReactions() > 0 && (
            <div className="flex -space-x-1 mr-2">
              {reactions.like > 0 && (
                <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center ring-2 ring-white dark:ring-gray-800">
                  <ThumbsUp className="h-3 w-3 text-white" />
                </div>
              )}
              {reactions.love > 0 && (
                <div className="h-6 w-6 rounded-full bg-red-500 flex items-center justify-center ring-2 ring-white dark:ring-gray-800">
                  <Heart className="h-3 w-3 text-white" />
                </div>
              )}
              {reactions.laugh > 0 && (
                <div className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center ring-2 ring-white dark:ring-gray-800">
                  <span className="text-sm">😂</span>
                </div>
              )}
            </div>
          )}
          <span className="text-sm text-muted-foreground">{getTotalReactions()} reactions</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Button 
          variant={userReaction === 'like' ? "default" : "ghost"} 
          size="sm" 
          className={`flex-1 h-auto py-3 flex items-center justify-center gap-2 rounded-md transition-all ${
            userReaction === 'like' 
              ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700" 
              : "hover:bg-blue-50 dark:hover:bg-blue-950"
          }`}
          onClick={() => handleToggleReaction('like')}
        >
          <ThumbsUp className="h-5 w-5" />
          <span>{reactions.like > 0 ? reactions.like : "Like"}</span>
        </Button>
        
        <Button 
          variant={userReaction === 'love' ? "default" : "ghost"} 
          size="sm" 
          className={`flex-1 h-auto py-3 flex items-center justify-center gap-2 rounded-md transition-all ${
            userReaction === 'love' 
              ? "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600" 
              : "hover:bg-red-50 dark:hover:bg-red-950"
          }`}
          onClick={() => handleToggleReaction('love')}
        >
          <Heart className="h-5 w-5" />
          <span>{reactions.love > 0 ? reactions.love : "Love"}</span>
        </Button>
        
        <Button 
          variant={userReaction === 'laugh' ? "default" : "ghost"} 
          size="sm" 
          className={`flex-1 h-auto py-3 flex items-center justify-center gap-2 rounded-md transition-all ${
            userReaction === 'laugh' 
              ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-white hover:from-yellow-500 hover:to-amber-600" 
              : "hover:bg-yellow-50 dark:hover:bg-yellow-950"
          }`}
          onClick={() => handleToggleReaction('laugh')}
        >
          <span className="text-xl">😂</span>
          <span>{reactions.laugh > 0 ? reactions.laugh : "Haha"}</span>
        </Button>
      </div>
    </div>
  );
} 