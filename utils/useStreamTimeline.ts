import { useState, useEffect, useCallback } from 'react';
import { useUser } from '@clerk/nextjs';
import { streamClient, getUserTimeline } from './streamClient';
import { StreamActivity } from './streamTypes';

export const useStreamTimeline = () => {
  const { user, isSignedIn } = useUser();
  const [activities, setActivities] = useState<StreamActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeline, setTimeline] = useState<any>(null);

  // Initialize timeline when user signs in
  useEffect(() => {
    if (!isSignedIn || !user) {
      setLoading(false);
      return;
    }

    const initTimeline = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const userTimeline = await getUserTimeline(user.id);
        setTimeline(userTimeline);

        // Get initial activities
        const response = await userTimeline.get();
        setActivities(response.results || []);

        // Subscribe to real-time updates
        userTimeline.subscribe((data: any) => {
          if (data.new && data.new.length > 0) {
            setActivities(prev => [...data.new, ...prev]);
          }
          if (data.deleted && data.deleted.length > 0) {
            setActivities(prev => prev.filter(activity => 
              !data.deleted.some((deleted: any) => deleted.id === activity.id)
            ));
          }
        });

        setLoading(false);
      } catch (err) {
        console.error('Error initializing timeline:', err);
        setError(err instanceof Error ? err.message : 'Failed to load timeline');
        setLoading(false);
      }
    };

    initTimeline();

    // Cleanup subscription on unmount
    return () => {
      if (timeline) {
        timeline.unsubscribe();
      }
    };
  }, [isSignedIn, user]);

  // Add new activity to timeline
  const addActivity = useCallback(async (activityData: {
    text: string;
    type?: string;
    [key: string]: any;
  }) => {
    if (!timeline || !user) {
      throw new Error('Timeline not initialized or user not signed in');
    }

    try {
      const activity = await timeline.addActivity({
        text: activityData.text,
        type: activityData.type || 'post',
        actor: user.id,
        ...activityData
      });

      return activity;
    } catch (err) {
      console.error('Error adding activity:', err);
      throw err;
    }
  }, [timeline, user]);

  // Remove activity from timeline
  const removeActivity = useCallback(async (activityId: string) => {
    if (!timeline) {
      throw new Error('Timeline not initialized');
    }

    try {
      await timeline.removeActivity(activityId);
    } catch (err) {
      console.error('Error removing activity:', err);
      throw err;
    }
  }, [timeline]);

  // Add reaction to activity
  const addReaction = useCallback(async (activityId: string, reactionType: string) => {
    if (!streamClient) {
      throw new Error('Stream client not initialized');
    }

    try {
      await streamClient.addReaction({
        activity_id: activityId,
        type: reactionType,
      });
    } catch (err) {
      console.error('Error adding reaction:', err);
      throw err;
    }
  }, []);

  // Add comment to activity
  const addComment = useCallback(async (activityId: string, commentText: string) => {
    if (!streamClient) {
      throw new Error('Stream client not initialized');
    }

    try {
      await streamClient.addComment({
        object_id: activityId,
        object_type: 'activity',
        comment: commentText,
      });
    } catch (err) {
      console.error('Error adding comment:', err);
      throw err;
    }
  }, []);

  return {
    activities,
    loading,
    error,
    addActivity,
    removeActivity,
    addReaction,
    addComment,
    isSignedIn,
    user
  };
}; 