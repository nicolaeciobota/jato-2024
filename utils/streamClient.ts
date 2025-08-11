import { FeedsClient } from "@stream-io/feeds-client";
import { StreamUser, StreamProfile, StreamFollow } from "./streamTypes";

// Initialize the Stream Feeds client
export const streamClient = new FeedsClient(
  process.env.NEXT_PUBLIC_STREAM_API_KEY || ""
);

// Helper function to get user token from our API
const getUserToken = async (): Promise<string> => {
  try {
    const response = await fetch('/api/stream-token');
    if (!response.ok) {
      throw new Error('Failed to get user token');
    }
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Error getting user token:', error);
    throw error;
  }
};

// Helper function to connect user with Clerk user data
export const connectStreamUser = async (clerkUser: any): Promise<FeedsClient> => {
  if (!clerkUser?.id) {
    throw new Error("User ID is required");
  }

  try {
    // Get the user token from our API
    const userToken = await getUserToken();
    
    // Connect the user to Stream
    await streamClient.connectUser(
      { 
        id: clerkUser.id,
        name: clerkUser.fullName || clerkUser.firstName || "User",
        image: clerkUser.imageUrl || undefined
      },
      userToken
    );

    return streamClient;
  } catch (error) {
    console.error("Error connecting user to Stream:", error);
    throw error;
  }
};

// Helper function to get or create a user's timeline feed
export const getUserTimeline = async (userId: string) => {
  try {
    const timeline = streamClient.feed("timeline", userId);
    await timeline.getOrCreate({ watch: true });
    return timeline;
  } catch (error) {
    console.error("Error getting user timeline:", error);
    throw error;
  }
};

// Helper function to get or create a user's profile feed
export const getUserProfile = async (userId: string) => {
  try {
    const profile = streamClient.feed("user", userId);
    await profile.getOrCreate({ watch: true });
    return profile;
  } catch (error) {
    console.error("Error getting user profile:", error);
    throw error;
  }
};

// Helper function to get user profile data
export const getUserProfileData = async (userId: string): Promise<StreamProfile> => {
  try {
    const userFeed = streamClient.feed("user", userId);
    const response = await userFeed.get();
    
    // Get followers count
    const followersResponse = await streamClient.feed("followers", userId).get();
    const followersCount = followersResponse.results?.length || 0;
    
    // Get following count
    const followingResponse = await streamClient.feed("following", userId).get();
    const followingCount = followingResponse.results?.length || 0;
    
    return {
      id: userId,
      name: `User ${userId}`, // You might want to store this in Stream
      imageUrl: undefined,
      username: undefined,
      bio: undefined,
      posts: response.results || [],
      followers: followersResponse.results || [],
      following: followingResponse.results || [],
      followersCount,
      followingCount,
      postsCount: response.results?.length || 0,
    };
  } catch (error) {
    console.error("Error getting user profile data:", error);
    throw error;
  }
};

// Helper function to follow a user
export const followUser = async (currentUserId: string, targetUserId: string): Promise<void> => {
  try {
    const currentUserFeed = streamClient.feed("user", currentUserId);
    await currentUserFeed.follow("user", targetUserId);
  } catch (error) {
    console.error("Error following user:", error);
    throw error;
  }
};

// Helper function to unfollow a user
export const unfollowUser = async (currentUserId: string, targetUserId: string): Promise<void> => {
  try {
    const currentUserFeed = streamClient.feed("user", currentUserId);
    await currentUserFeed.unfollow("user", targetUserId);
  } catch (error) {
    console.error("Error unfollowing user:", error);
    throw error;
  }
};

// Helper function to check if user is following another user
export const isFollowingUser = async (currentUserId: string, targetUserId: string): Promise<boolean> => {
  try {
    const followingFeed = streamClient.feed("following", currentUserId);
    const response = await followingFeed.get();
    return response.results?.some((follow: any) => follow.target === targetUserId) || false;
  } catch (error) {
    console.error("Error checking follow status:", error);
    return false;
  }
};

// Helper function to get user's followers
export const getUserFollowers = async (userId: string): Promise<StreamFollow[]> => {
  try {
    const followersFeed = streamClient.feed("followers", userId);
    const response = await followersFeed.get();
    return response.results || [];
  } catch (error) {
    console.error("Error getting followers:", error);
    return [];
  }
};

// Helper function to get user's following
export const getUserFollowing = async (userId: string): Promise<StreamFollow[]> => {
  try {
    const followingFeed = streamClient.feed("following", userId);
    const response = await followingFeed.get();
    return response.results || [];
  } catch (error) {
    console.error("Error getting following:", error);
    return [];
  }
}; 