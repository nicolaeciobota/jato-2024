# Uploadcare Integration Setup

This guide will help you set up Uploadcare for image uploads in your social feed.

## Prerequisites

- An Uploadcare account (sign up at [uploadcare.com](https://uploadcare.com))
- Next.js project with social feed functionality

## Step 1: Create Uploadcare Account

1. Go to [uploadcare.com](https://uploadcare.com)
2. Sign up for a free account
3. Create a new project
4. Note down your **Public Key** and **Secret Key**

## Step 2: Configure Environment Variables

Add these to your `.env` file:

```bash
# Uploadcare Configuration
NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY=your_public_key_here
UPLOADCARE_SECRET_KEY=your_secret_key_here
```

## Step 3: Configure Uploadcare Project

1. **File Upload Settings**
   - Set maximum file size (default: 10MB)
   - Configure allowed file types (images only)
   - Set up image transformations

2. **Security Settings**
   - Configure CORS origins
   - Set up authentication if needed
   - Configure file access permissions

3. **Image Processing**
   - Enable automatic image optimization
   - Configure thumbnail generation
   - Set up image effects and filters

## Step 4: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to `/en/social-feed`
3. Sign in with Clerk
4. Try uploading an image using the 📷 button
5. Create a post with the image

## Features Implemented

- ✅ **Image Upload**: Drag & drop or click to upload
- ✅ **Image Preview**: See uploaded image before posting
- ✅ **Image Validation**: File size and type checking
- ✅ **Progress Tracking**: Upload progress indicator
- ✅ **Image Optimization**: Automatic resizing and compression
- ✅ **CDN Delivery**: Fast image loading worldwide
- ✅ **Multiple Formats**: Support for JPEG, PNG, GIF, WebP, HEIC

## Uploadcare Widget Options

The widget is configured with these options:

```typescript
{
  imagesOnly: true,           // Only allow images
  multiple: false,            // Single file upload
  maxFileSize: 10485760,      // 10MB limit
  imagePreviewMaxSize: 26214400, // 25MB preview limit
  imageShrink: {
    quality: 0.8,             // 80% quality
    size: '1024x1024'         // Max dimensions
  },
  accept: 'image/*',          // Image files only
  crop: '1:1,4:3,16:9',      // Aspect ratio options
  imageEffects: ['blur', 'sharpen', 'grayscale', 'sepia'],
  imageTransform: {
    quality: 'smart',         // Smart quality optimization
    format: 'auto'            // Automatic format selection
  }
}
```

## Image Processing Features

### **Automatic Optimization**
- Quality optimization based on content
- Format conversion (WebP for modern browsers)
- Size reduction while maintaining quality

### **Transformations**
- Resize images to specified dimensions
- Crop to different aspect ratios
- Apply filters and effects
- Generate thumbnails

### **CDN Benefits**
- Global content delivery
- Automatic format selection
- Lazy loading support
- Cache optimization

## Customization Options

### **File Types**
```typescript
// Allow specific formats
accept: 'image/jpeg,image/png,image/webp'

// Allow all images
accept: 'image/*'
```

### **Size Limits**
```typescript
// 5MB limit
maxFileSize: 5 * 1024 * 1024

// 20MB limit
maxFileSize: 20 * 1024 * 1024
```

### **Image Quality**
```typescript
imageShrink: {
  quality: 0.9,        // 90% quality
  size: '800x600'      // Smaller dimensions
}
```

## Error Handling

The integration includes comprehensive error handling:

- **File Size**: Automatic validation
- **File Type**: Image format checking
- **Upload Errors**: Network and server errors
- **Progress Tracking**: Real-time upload status

## Performance Features

- **Lazy Loading**: Images load as needed
- **Progressive Loading**: Low-res previews first
- **Format Optimization**: WebP for modern browsers
- **CDN Caching**: Fast global delivery

## Next Steps

- Add video upload support
- Implement image galleries
- Add image editing tools
- Set up image moderation
- Configure backup storage

## Support

- [Uploadcare Documentation](https://uploadcare.com/docs/)
- [React Widget Guide](https://uploadcare.com/docs/uploads/widgets/react/)
- [API Reference](https://uploadcare.com/docs/api_reference/)
- [Community Forum](https://uploadcare.com/community/) 