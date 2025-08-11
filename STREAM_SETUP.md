# Stream Feeds Integration Setup

This guide will help you set up Stream's Activity Feeds API with Clerk authentication in your Next.js app.

## Prerequisites

- A Stream account (sign up at [getstream.io](https://getstream.io))
- Clerk authentication already configured
- Next.js 13+ with App Router

## Step 1: Create a Stream App

1. Go to your [Stream Dashboard](https://dashboard.getstream.io/)
2. Click "Create App"
3. Choose "Feeds" as the product
4. Set the **Feeds Data Storage Location** to **US Ohio** (required for v3 alpha)
5. Note down your API Key and API Secret

## Step 2: Configure Environment Variables

Add these variables to your `.env` file:

```bash
# Stream Feeds Configuration
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key_here
NEXT_PUBLIC_FEEDS_BASE_URL=https://us-east-1-api.stream-io-api.com
STREAM_API_SECRET=your_stream_api_secret_here
```

## Step 3: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to `/en/social-feed` in your browser
3. Sign in with Clerk
4. You should see the timeline feed with the ability to create posts

## Features Implemented

- ✅ Real-time timeline feed
- ✅ User authentication with Clerk
- ✅ Create, read, delete posts
- ✅ Like reactions
- ✅ Comments (basic structure)
- ✅ Real-time updates via WebSocket

## API Endpoints

- `GET /api/stream-token` - Generates Stream user tokens for authenticated users

## Components

- `components/Timeline/Timeline.tsx` - Main timeline component
- `utils/useStreamTimeline.ts` - Custom hook for timeline operations
- `utils/streamClient.ts` - Stream client configuration

## Customization

### Adding New Activity Types

To add new activity types (like photos, videos, etc.), modify the `addActivity` function in `useStreamTimeline.ts`:

```typescript
const addActivity = async (activityData: {
  text: string;
  type?: string;
  image?: string;
  video?: string;
  [key: string]: any;
}) => {
  // ... existing code
};
```

### Custom Reactions

Add new reaction types in the Timeline component:

```typescript
<button onClick={() => handleReaction(activity.id, 'love')}>
  ❤️ Love
</button>
```

### Feed Types

You can create different feed types by modifying the feed group in `streamClient.ts`:

```typescript
// User profile feed
const profileFeed = streamClient.feed("user", userId);

// Notification feed
const notificationFeed = streamClient.feed("notification", userId);

// Flat feed (no aggregation)
const flatFeed = streamClient.feed("flat", userId);
```

## Troubleshooting

### "Cannot connect to Stream" Error

1. Check your API key and secret in `.env`
2. Ensure the Feeds Data Storage Location is set to US Ohio
3. Verify your Stream app is active

### Authentication Issues

1. Make sure Clerk is properly configured
2. Check that the middleware is protecting the `/api/stream-token` route
3. Verify user tokens are being generated correctly

### Real-time Updates Not Working

1. Check WebSocket connection in browser dev tools
2. Verify the feed subscription is active
3. Ensure the feed has `watch: true` enabled

## Next Steps

- Implement image/video uploads
- Add user profiles and following
- Create notification feeds
- Add activity aggregation
- Implement feed filtering and search

## Resources

- [Stream Feeds Documentation](https://getstream.io/activity-feeds/docs/)
- [Stream Feeds v3 Demo](https://feeds-v3-demo.vercel.app/)
- [Clerk Documentation](https://clerk.com/docs)
- [Next.js Documentation](https://nextjs.org/docs) 