import { UploadcareWidget } from '@uploadcare/react-widget';

// Uploadcare configuration
export const UPLOADCARE_CONFIG = {
  publicKey: process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY || '',
  // Widget options
  widgetOptions: {
    imagesOnly: true,
    multiple: false,
    maxFileSize: 10485760, // 10MB
    imagePreviewMaxSize: 25 * 1024 * 1024, // 25MB
    imageShrink: {
      quality: 0.8,
      size: '1024x1024'
    },
    // Allowed file types
    accept: 'image/*',
    // Custom locale
    locale: 'en',
    // Preview settings
    previewStep: true,
    // Crop settings
    crop: '1:1,4:3,16:9',
    // Image effects
    imageEffects: ['blur', 'sharpen', 'grayscale', 'sepia'],
    // Image transformations
    imageTransform: {
      quality: 'smart',
      format: 'auto'
    }
  }
};

// File upload result interface
export interface UploadResult {
  cdnUrl: string;
  uuid: string;
  name: string;
  size: number;
  mimeType: string;
  isImage: boolean;
  isVideo: boolean;
  width?: number;
  height?: number;
  duration?: number;
}

// Helper function to get file info from Uploadcare
export const getFileInfo = (file: any): UploadResult => {
  return {
    cdnUrl: file.cdnUrl,
    uuid: file.uuid,
    name: file.name,
    size: file.size,
    mimeType: file.mimeType,
    isImage: file.isImage,
    isVideo: file.isVideo,
    width: file.imageInfo?.width,
    height: file.imageInfo?.height,
    duration: file.videoInfo?.duration
  };
};

// Helper function to validate file
export const validateFile = (file: File): { valid: boolean; error?: string } => {
  const maxSize = 10 * 1024 * 1024; // 10MB
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/heic'];
  
  if (file.size > maxSize) {
    return { valid: false, error: 'File size must be less than 10MB' };
  }
  
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Only image files are allowed' };
  }
  
  return { valid: true };
};

// Helper function to get optimized image URL
export const getOptimizedImageUrl = (cdnUrl: string, options: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'jpeg' | 'png' | 'webp' | 'auto';
} = {}): string => {
  const url = new URL(cdnUrl);
  
  if (options.width) {
    url.searchParams.set('width', options.width.toString());
  }
  
  if (options.height) {
    url.searchParams.set('height', options.height.toString());
  }
  
  if (options.quality) {
    url.searchParams.set('quality', options.quality.toString());
  }
  
  if (options.format) {
    url.searchParams.set('format', options.format);
  }
  
  return url.toString();
};

// Helper function to get thumbnail URL
export const getThumbnailUrl = (cdnUrl: string, size: number = 300): string => {
  return getOptimizedImageUrl(cdnUrl, {
    width: size,
    height: size,
    quality: 80,
    format: 'webp'
  });
}; 