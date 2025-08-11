"use client";

import { useUser } from '@clerk/nextjs';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProfileIndexPage() {
  const { user, isSignedIn } = useUser();
  const { lng } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn && user) {
      router.push(`/${lng}/profile/${user.id}`);
    } else {
      router.push('/sign-in');
    }
  }, [isSignedIn, user, lng, router]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  );
} 