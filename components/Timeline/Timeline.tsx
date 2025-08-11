"use client";

import React, { useState } from 'react';
import { useStreamTimeline } from '../../utils/useStreamTimeline';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ImageUpload from './ImageUpload';
import { UploadResult } from '../../utils/uploadcare';

interface TimelineProps {
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ className = "" }) => {
  const { user } = useUser();
  const { lng } = useParams();
  const {
    activities,
    loading,
    error,
    addActivity,
    removeActivity,
    addReaction,
    addComment
  } = useStreamTimeline();

  const [newPostText, setNewPostText] = useState('');
  const [selectedImage, setSelectedImage] = useState<UploadResult | null>(null);
  const [isPosting, setIsPosting] = useState(false);
  const [commentText, setCommentText] = useState<{ [key: string]: string }>({});
  const [showComments, setShowComments] = useState<{ [key: string]: boolean }>({});

  const handleSubmitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!newPostText.trim() && !selectedImage) || isPosting) return;

    try {
      setIsPosting(true);
      await addActivity({
        text: newPostText.trim() || "",
        type: 'post',
        image: selectedImage?.cdnUrl,
        imageData: selectedImage ? {
          uuid: selectedImage.uuid,
          width: selectedImage.width,
          height: selectedImage.height,
          size: selectedImage.size
        } : undefined
      });
      
      setNewPostText('');
      setSelectedImage(null);
    } catch (error) {
      console.error('Error posting:', error);
    } finally {
      setIsPosting(false);
    }
  };

  const handleImageSelected = (image: UploadResult) => {
    setSelectedImage(image);
  };

  const handleImageError = (error: string) => {
    console.error('Image upload error:', error);
    // You could show a toast notification here
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
  };

  const handleReaction = async (activityId: string, reactionType: string) => {
    try {
      await addReaction(activityId, reactionType);
    } catch (error) {
      console.error('Error adding reaction:', error);
    }
  };

  const handleComment = async (activityId: string) => {
    const comment = commentText[activityId];
    if (!comment?.trim()) return;

    try {
      await addComment(activityId, comment);
      setCommentText(prev => ({ ...prev, [activityId]: '' }));
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const toggleComments = (activityId: string) => {
    setShowComments(prev => ({
      ...prev,
      [activityId]: !prev[activityId]
    }));
  };

  const formatTime = (timeString: string) => {
    const date = new Date(timeString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <div className={`flex items-center justify-center py-12 ${className}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <span className="ml-2 text-gray-600">Loading timeline...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="text-red-500 text-lg mb-2">Error loading timeline</div>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      {/* Create Post Form */}
      {user && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
          <form onSubmit={handleSubmitPost} className="space-y-3">
            <textarea
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
              placeholder="What's happening?"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
              rows={3}
              maxLength={280}
            />
            
            {/* Image Preview */}
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage.cdnUrl}
                  alt="Selected image"
                  className="max-w-full h-auto rounded-lg max-h-64 object-cover"
                />
                <button
                  type="button"
                  onClick={removeSelectedImage}
                  className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  ×
                </button>
              </div>
            )}
            
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <ImageUpload
                  onImageSelected={handleImageSelected}
                  onError={handleImageError}
                  disabled={isPosting}
                />
                <span className="text-sm text-gray-500">
                  {newPostText.length}/280
                </span>
              </div>
              <button
                type="submit"
                disabled={(!newPostText.trim() && !selectedImage) || isPosting}
                className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPosting ? 'Posting...' : 'Post'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Timeline Feed */}
      <div className="space-y-4">
        {activities.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">No posts yet</div>
            <p className="text-gray-500">Be the first to share something!</p>
          </div>
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4"
            >
              {/* Activity Header */}
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  {activity.actor?.charAt(0)?.toUpperCase() || 'U'}
                </div>
                <div className="flex-1">
                  <Link
                    href={`/${lng}/profile/${activity.actor}`}
                    className="font-semibold text-gray-900 dark:text-white hover:text-primary transition-colors"
                  >
                    User {activity.actor}
                  </Link>
                  <div className="text-sm text-gray-500">
                    {formatTime(activity.time)}
                  </div>
                </div>
              </div>

              {/* Activity Content */}
              {activity.text && (
                <div className="text-gray-900 dark:text-white mb-4">
                  {activity.text}
                </div>
              )}

              {/* Activity Image */}
              {activity.image && (
                <div className="mb-4">
                  <img
                    src={activity.image}
                    alt="Post image"
                    className="rounded-lg max-w-full h-auto max-h-96 object-cover"
                  />
                </div>
              )}

              {/* Activity Actions */}
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <button
                  onClick={() => handleReaction(activity.id, 'like')}
                  className="flex items-center space-x-1 hover:text-primary transition-colors"
                >
                  <span>👍</span>
                  <span>Like</span>
                </button>
                
                <button
                  onClick={() => toggleComments(activity.id)}
                  className="flex items-center space-x-1 hover:text-primary transition-colors"
                >
                  <span>💬</span>
                  <span>Comment</span>
                </button>

                {user && (
                  <button
                    onClick={() => removeActivity(activity.id)}
                    className="flex items-center space-x-1 hover:text-red-500 transition-colors"
                  >
                    <span>🗑️</span>
                    <span>Delete</span>
                  </button>
                )}
              </div>

              {/* Comments Section */}
              {showComments[activity.id] && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="space-y-3">
                    {/* Add Comment Form */}
                    {user && (
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={commentText[activity.id] || ''}
                          onChange={(e) => setCommentText(prev => ({
                            ...prev,
                            [activity.id]: e.target.value
                          }))}
                          placeholder="Add a comment..."
                          className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                        />
                        <button
                          onClick={() => handleComment(activity.id)}
                          disabled={!commentText[activity.id]?.trim()}
                          className="px-3 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Comment
                        </button>
                      </div>
                    )}
                    
                    {/* Comments would be displayed here */}
                    <div className="text-sm text-gray-500 italic">
                      Comments feature coming soon...
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline; 