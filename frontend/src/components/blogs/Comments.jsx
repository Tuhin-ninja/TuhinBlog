"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, ThumbsUp, Heart, CornerDownRight, MessagesSquare } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const ReactionIcons = {
  like: ThumbsUp,
  love: Heart,
  laugh: () => <span className="text-lg">😂</span>
};

const Comment = ({ comment, onToggleReaction, onAddReply, level = 0, userReactions }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [showReplies, setShowReplies] = useState(level < 1); // Auto expand first level

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyContent.trim()) {
      onAddReply(comment.id, replyContent);
      setReplyContent("");
      setIsReplying(false);
    }
  };

  const hasReplies = comment.replies && comment.replies.length > 0;
  
  // Check if user has reacted to this comment
  const commentReactionKey = `${comment.id}`;
  const userReactionType = userReactions[commentReactionKey] || null;

  return (
    <div className={`flex flex-col ${level > 0 ? "ml-12 mt-4" : "mb-6"}`}>
      <div className="p-4 rounded-lg border bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarImage src={comment.avatarUrl} alt={comment.author} />
            <AvatarFallback>{comment.author.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">{comment.author}</h3>
              <span className="text-sm text-muted-foreground">
                {comment.date}
              </span>
            </div>
            <p className="text-sm mb-3">{comment.content}</p>
            
            <div className="flex items-center gap-3 text-sm">
              <Button 
                variant={userReactionType === 'like' ? "default" : "ghost"} 
                size="sm" 
                className={`h-auto px-2 py-1 flex items-center gap-1 ${userReactionType === 'like' ? "bg-blue-500 hover:bg-blue-400" : ""}`}
                onClick={() => onToggleReaction(comment.id, 'like', level > 0)}
              >
                <ThumbsUp className="h-4 w-4" />
                <span>{comment.reactions.like > 0 ? comment.reactions.like : ""}</span>
              </Button>
              
              <Button 
                variant={userReactionType === 'love' ? "default" : "ghost"} 
                size="sm" 
                className={`h-auto px-2 py-1 flex items-center gap-1 ${userReactionType === 'love' ? "bg-red-500 hover:bg-red-400" : ""}`}
                onClick={() => onToggleReaction(comment.id, 'love', level > 0)}
              >
                <Heart className="h-4 w-4" />
                <span>{comment.reactions.love > 0 ? comment.reactions.love : ""}</span>
              </Button>
              
              <Button 
                variant={userReactionType === 'laugh' ? "default" : "ghost"} 
                size="sm" 
                className={`h-auto px-2 py-1 flex items-center gap-1 ${userReactionType === 'laugh' ? "bg-yellow-500 hover:bg-yellow-400" : ""}`}
                onClick={() => onToggleReaction(comment.id, 'laugh', level > 0)}
              >
                <span className="text-lg">😂</span>
                <span>{comment.reactions.laugh > 0 ? comment.reactions.laugh : ""}</span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-auto p-1 text-muted-foreground ml-2"
                onClick={() => setIsReplying(!isReplying)}
              >
                Reply
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reply form */}
      {isReplying && (
        <div className="ml-12 mt-3">
          <form onSubmit={handleReplySubmit} className="flex flex-col gap-2">
            <Textarea
              placeholder="Write a reply..."
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              className="min-h-[80px] border-blue-200 focus:border-blue-500 dark:border-gray-700"
            />
            <div className="flex justify-end gap-2">
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setIsReplying(false);
                  setReplyContent("");
                }}
              >
                Cancel
              </Button>
              <Button type="submit" size="sm" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">Post Reply</Button>
            </div>
          </form>
        </div>
      )}
      
      {/* Replies */}
      {hasReplies && (
        <div className="ml-8 mt-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1 h-auto p-1 text-muted-foreground"
            onClick={() => setShowReplies(!showReplies)}
          >
            {showReplies ? (
              <span className="flex items-center gap-1">
                <CornerDownRight className="h-3 w-3" /> 
                Hide replies
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <MessagesSquare className="h-3 w-3" /> 
                Show {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
              </span>
            )}
          </Button>
          
          {showReplies && (
            <div className="mt-2">
              {comment.replies.map((reply) => (
                <Comment 
                  key={reply.id} 
                  comment={reply} 
                  onToggleReaction={onToggleReaction}
                  onAddReply={onAddReply}
                  level={level + 1}
                  userReactions={userReactions}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function Comments({ comments }) {
  const [localComments, setLocalComments] = useState(comments || []);
  const [commentInput, setCommentInput] = useState("");
  const [userReactions, setUserReactions] = useState({});
  
  // Initialize user reactions from localStorage if available
  useEffect(() => {
    const savedReactions = localStorage.getItem('blogCommentReactions');
    if (savedReactions) {
      setUserReactions(JSON.parse(savedReactions));
    }
  }, []);
  
  // Save user reactions to localStorage
  useEffect(() => {
    localStorage.setItem('blogCommentReactions', JSON.stringify(userReactions));
  }, [userReactions]);
  
  const handleAddComment = (e) => {
    e.preventDefault();
    
    if (commentInput.trim() === "") return;
    
    const newComment = {
      id: Date.now(),
      author: "Guest User",
      avatarUrl: "https://ui-avatars.com/api/?name=Guest+User&background=random",
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      content: commentInput,
      reactions: { like: 0, love: 0, laugh: 0 },
      replies: []
    };
    
    setLocalComments([...localComments, newComment]);
    setCommentInput("");
  };
  
  const handleToggleReaction = (commentId, reactionType, isReply = false) => {
    const reactionKey = `${commentId}`;
    const currentUserReactions = {...userReactions};
    const currentReaction = currentUserReactions[reactionKey];
    
    // 1. If current reaction is same as new one, remove it (toggle off)
    if (currentReaction === reactionType) {
      // Remove the reaction
      delete currentUserReactions[reactionKey];
      
      setUserReactions(currentUserReactions);
      
      // Update comment reaction count (decrease)
      setLocalComments(prevComments => {
        return updateCommentReactions(prevComments, commentId, reactionType, false, isReply);
      });
    }
    // 2. If different reaction or no reaction, update to new reaction
    else {
      // If user had a different reaction before, remove it first
      if (currentReaction) {
        setLocalComments(prevComments => {
          return updateCommentReactions(prevComments, commentId, currentReaction, false, isReply);
        });
      }
      
      // Set the new reaction
      currentUserReactions[reactionKey] = reactionType;
      setUserReactions(currentUserReactions);
      
      // Update comment reaction count (increase)
      setLocalComments(prevComments => {
        return updateCommentReactions(prevComments, commentId, reactionType, true, isReply);
      });
    }
  };
  
  const updateCommentReactions = (comments, commentId, reactionType, addReaction, isReply) => {
    return comments.map(comment => {
      if (!isReply && comment.id === commentId) {
        return {
          ...comment,
          reactions: {
            ...comment.reactions,
            [reactionType]: Math.max(0, comment.reactions[reactionType] + (addReaction ? 1 : -1))
          }
        };
      } else if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: updateCommentReactions(comment.replies, commentId, reactionType, addReaction, false)
        };
      }
      return comment;
    });
  };
  
  const handleAddReply = (commentId, content) => {
    const newReply = {
      id: Date.now(),
      author: "Guest User",
      avatarUrl: "https://ui-avatars.com/api/?name=Guest+User&background=random",
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      content,
      reactions: { like: 0, love: 0, laugh: 0 },
      replies: []
    };
    
    setLocalComments(prevComments => {
      return updateCommentsWithReply(prevComments, commentId, newReply);
    });
  };
  
  const updateCommentsWithReply = (comments, commentId, newReply) => {
    return comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), newReply]
        };
      } else if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: updateCommentsWithReply(comment.replies, commentId, newReply)
        };
      }
      return comment;
    });
  };
  
  return (
    <div className="pt-6">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
        <MessageCircle className="h-6 w-6 text-blue-500" />
        <span>Comments ({localComments.length})</span>
      </h2>
      
      {/* Comment Form */}
      <form onSubmit={handleAddComment} className="mb-8 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-4 rounded-lg shadow-sm">
        <Textarea
          placeholder="Write a comment..."
          className="mb-4 min-h-[100px] border-blue-200 focus:border-blue-500 dark:border-gray-700"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <div className="flex justify-end">
          <Button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
            Post Comment
          </Button>
        </div>
      </form>
      
      {/* Comments List */}
      <div className="space-y-6">
        {localComments.length === 0 ? (
          <div className="p-8 text-center bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-lg">
            <p className="text-muted-foreground italic">
              No comments yet. Be the first to share your thoughts!
            </p>
          </div>
        ) : (
          localComments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              onToggleReaction={handleToggleReaction}
              onAddReply={handleAddReply}
              userReactions={userReactions}
            />
          ))
        )}
      </div>
    </div>
  );
} 