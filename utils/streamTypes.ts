export interface StreamUser {
  id: string;
  name: string;
  imageUrl?: string;
  username?: string;
  bio?: string;
}

export interface StreamActivity {
  id: string;
  text?: string;
  type: string;
  actor: string;
  object?: string;
  target?: string;
  time: string;
  foreign_id?: string;
  image?: string;
  video?: string;
  location?: string;
  imageData?: {
    uuid: string;
    width?: number;
    height?: number;
    size: number;
  };
  [key: string]: any;
}

export interface StreamReaction {
  id: string;
  type: string;
  user_id: string;
  activity_id: string;
  data?: Record<string, any>;
  created_at: string;
}

export interface StreamComment {
  id: string;
  text: string;
  user_id: string;
  activity_id: string;
  created_at: string;
  updated_at: string;
}

export interface StreamFeed {
  id: string;
  group: string;
  user_id: string;
  activities: StreamActivity[];
  next?: string;
  previous?: string;
}

export interface StreamFollow {
  target: string;
  source: string;
  created_at: string;
}

export interface StreamProfile {
  id: string;
  name: string;
  imageUrl?: string;
  username?: string;
  bio?: string;
  posts: StreamActivity[];
  followers: StreamFollow[];
  following: StreamFollow[];
  followersCount: number;
  followingCount: number;
  postsCount: number;
} 