"use client";

import { useUser } from '@clerk/nextjs';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { StreamProfile } from '@/utils/streamTypes';
import { getUserProfileData, followUser, unfollowUser, isFollowingUser } from '@/utils/streamClient';

export default function UserProfilePage() {
  const { userId } = useParams();
  const { user: currentUser, isSignedIn } = useUser();
  const [profile, setProfile] = useState<StreamProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isOwnProfile, setIsOwnProfile] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      if (!userId) return;
      
      try {
        setLoading(true);
        
        // Check if this is the current user's profile
        if (currentUser && userId === currentUser.id) {
          setIsOwnProfile(true);
        }

        // Get user profile data from Stream
        const profileData = await getUserProfileData(userId as string);
        setProfile(profileData);

        // Check if current user is following this profile
        if (isSignedIn && currentUser && !isOwnProfile) {
          const followingStatus = await isFollowingUser(currentUser.id, userId as string);
          setIsFollowing(followingStatus);
        }
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [userId, currentUser, isSignedIn]);

  const handleFollow = async () => {
    if (!isSignedIn || !profile || !currentUser) return;
    
    try {
      setFollowLoading(true);
      await followUser(currentUser.id, profile.id);
      setIsFollowing(true);
      
      // Update profile data
      if (profile) {
        setProfile({
          ...profile,
          followersCount: profile.followersCount + 1
        });
      }
    } catch (error) {
      console.error('Error following user:', error);
    } finally {
      setFollowLoading(false);
    }
  };

  const handleUnfollow = async () => {
    if (!isSignedIn || !profile || !currentUser) return;
    
    try {
      setFollowLoading(true);
      await unfollowUser(currentUser.id, profile.id);
      setIsFollowing(false);
      
      // Update profile data
      if (profile) {
        setProfile({
          ...profile,
          followersCount: profile.followersCount - 1
        });
      }
    } catch (error) {
      console.error('Error unfollowing user:', error);
    } finally {
      setFollowLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Profile Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            This user profile doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center space-x-6">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                {profile.imageUrl ? (
                  <img
                    src={profile.imageUrl}
                    alt={profile.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  profile.name.charAt(0).toUpperCase()
                )}
              </div>
              {isOwnProfile && (
                <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors">
                  ✏️
                </button>
              )}
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {profile.name}
              </h1>
              
              {profile.bio && (
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {profile.bio}
                </p>
              )}
              
              <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400 mb-4">
                <span><strong>{profile.postsCount}</strong> posts</span>
                <span><strong>{profile.followersCount}</strong> followers</span>
                <span><strong>{profile.followingCount}</strong> following</span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                {!isOwnProfile && isSignedIn && (
                  <>
                    {isFollowing ? (
                      <button
                        onClick={handleUnfollow}
                        disabled={followLoading}
                        className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
                      >
                        {followLoading ? 'Unfollowing...' : 'Unfollow'}
                      </button>
                    ) : (
                      <button
                        onClick={handleFollow}
                        disabled={followLoading}
                        className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                      >
                        {followLoading ? 'Following...' : 'Follow'}
                      </button>
                    )}
                    <button className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      Message
                    </button>
                  </>
                )}
                
                {isOwnProfile && (
                  <button className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <nav className="flex space-x-8">
            <button className="py-2 px-1 border-b-2 border-primary text-primary font-medium">
              Posts
            </button>
            <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium">
              Media
            </button>
            <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium">
              Likes
            </button>
          </nav>
        </div>

        {/* Posts Grid */}
        {profile.posts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">
              {isOwnProfile ? "You haven&apos;t posted anything yet" : "No posts yet"}
            </div>
            <p className="text-gray-500">
              {isOwnProfile ? "Share your first post!" : "Check back later for posts from this user."}
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {profile.posts.map((post) => (
              <div
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold mr-3">
                    {profile.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {profile.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(post.time).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                {post.text && (
                  <div className="text-gray-900 dark:text-white mb-4">
                    {post.text}
                  </div>
                )}

                {post.image && (
                  <div className="mb-4">
                    <img
                      src={post.image}
                      alt="Post image"
                      className="rounded-lg max-w-full h-auto"
                    />
                  </div>
                )}
                
                {/* Post Actions */}
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                    <span>👍</span>
                    <span>Like</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                    <span>💬</span>
                    <span>Comment</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                    <span>🔄</span>
                    <span>Share</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 