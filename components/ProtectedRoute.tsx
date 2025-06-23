'use client';

import React from 'react';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  // === DEVELOPMENT OVERRIDE ===
  // Bypassing authentication check for development purposes.
  // The original logic is commented out below.
  return <>{children}</>;

  /*
  // Original Logic
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
  */
} 