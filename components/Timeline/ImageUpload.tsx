"use client";

import React, { useState, useCallback } from 'react';
import { UploadcareWidget } from '@uploadcare/react-widget';
import { UPLOADCARE_CONFIG, UploadResult, getFileInfo, validateFile } from '../../utils/uploadcare';

interface ImageUploadProps {
  onImageSelected: (image: UploadResult) => void;
  onError?: (error: string) => void;
  className?: string;
  disabled?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageSelected,
  onError,
  className = "",
  disabled = false
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleUpload = useCallback((fileInfo: any) => {
    try {
      setIsUploading(true);
      setUploadProgress(100);
      
      const uploadResult = getFileInfo(fileInfo);
      onImageSelected(uploadResult);
      
      // Reset progress after a short delay
      setTimeout(() => {
        setUploadProgress(0);
        setIsUploading(false);
      }, 500);
      
    } catch (error) {
      console.error('Upload error:', error);
      onError?.(error instanceof Error ? error.message : 'Upload failed');
      setIsUploading(false);
      setUploadProgress(0);
    }
  }, [onImageSelected, onError]);

  const handleUploadError = useCallback((error: any) => {
    console.error('Uploadcare error:', error);
    onError?.(error.message || 'Upload failed');
    setIsUploading(false);
    setUploadProgress(0);
  }, [onError]);

  const handleUploadProgress = useCallback((progress: number) => {
    setUploadProgress(progress);
  }, []);

  if (disabled) {
    return null;
  }

  return (
    <div className={`relative ${className}`}>
      {/* Uploadcare Widget */}
      <UploadcareWidget
        publicKey={UPLOADCARE_CONFIG.publicKey}
        onUploadComplete={handleUpload}
        onError={handleUploadError}
        onProgress={handleUploadProgress}
        {...UPLOADCARE_CONFIG.widgetOptions}
      >
        {({ open }) => (
          <button
            onClick={open}
            disabled={isUploading}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-xl">📷</span>
            <span className="text-sm font-medium">
              {isUploading ? 'Uploading...' : 'Add Image'}
            </span>
          </button>
        )}
      </UploadcareWidget>

      {/* Upload Progress */}
      {isUploading && uploadProgress > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-1 text-center">
            {uploadProgress}% uploaded
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload; 