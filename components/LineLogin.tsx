'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import { liffService } from '@/lib/liff';
import { toast } from 'sonner';

export default function LineLogin() {
  const { loginWithLine, logout, user, isLoading } = useAuth();
  const [loading, setLoading] = useState(false);
  const [isLineAvailable, setIsLineAvailable] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if LINE is available without initializing
    setIsLineAvailable(liffService.isAvailable());
  }, []);

  const handleLogin = async () => {
    if (!isLineAvailable) {
      toast.error('LINE Login ยังไม่ได้ตั้งค่า กรุณาใช้ Google Login แทน');
      return;
    }

    setLoading(true);
    try {
      const result = await loginWithLine();
      if (result.success) {
        toast.success('เข้าสู่ระบบด้วย LINE สำเร็จ!');
        router.push('/dashboard');
      } else {
        toast.error(result.error || 'ไม่สามารถเข้าสู่ระบบได้');
      }
    } catch (error) {
      console.error('LINE login error:', error);
      toast.error('เกิดข้อผิดพลาดในการเข้าสู่ระบบ');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
      toast.success('ออกจากระบบสำเร็จ');
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('เกิดข้อผิดพลาดในการออกจากระบบ');
    } finally {
      setLoading(false);
    }
  };

  if (isLoading || loading) {
    return (
      <div className="flex items-center justify-center w-8 h-8">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
      </div>
    );
  }

  // Don't show LINE login if not available
  if (!isLineAvailable) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      {!user || user.loginMethod !== 'line' ? (
        <button
          onClick={handleLogin}
          disabled={loading}
          className="flex items-center gap-2 bg-[#00B900] text-white px-4 py-2 rounded-lg hover:bg-[#009900] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
        >
          <LineIcon />
          <span>เข้าสู่ระบบ</span>
        </button>
      ) : (
        <div className="flex items-center gap-3">
          {user.avatar && (
            <img
              src={user.avatar}
              alt={user.name}
              className="w-8 h-8 rounded-full border-2 border-[#00B900]"
            />
          )}
          <div className="hidden md:block">
            <p className="text-white text-sm font-medium">{user.name}</p>
            <p className="text-gray-400 text-xs">LINE User</p>
          </div>
          <button
            onClick={handleLogout}
            disabled={loading}
            className="text-white/80 hover:text-white transition-colors text-sm px-2 py-1 rounded hover:bg-white/10"
          >
            ออกจากระบบ
          </button>
        </div>
      )}
    </div>
  );
}

function LineIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.95 15.65C16.75 16.05 16.35 16.35 15.95 16.45C15.75 16.55 15.45 16.55 15.25 16.45C14.85 16.35 14.45 16.15 14.05 15.95C13.45 15.65 12.85 15.35 12.25 15.05C11.65 14.75 11.05 14.45 10.45 14.15C9.85 13.85 9.25 13.55 8.65 13.25C8.25 13.05 7.85 12.85 7.45 12.75C7.25 12.65 6.95 12.65 6.75 12.75C6.35 12.85 5.95 13.15 5.75 13.55C5.55 13.95 5.45 14.35 5.45 14.85C5.45 15.35 5.55 15.75 5.75 16.15C5.95 16.55 6.35 16.85 6.75 16.95C6.95 17.05 7.25 17.05 7.45 16.95C7.85 16.85 8.25 16.65 8.65 16.45C9.25 16.15 9.85 15.85 10.45 15.55C11.05 15.25 11.65 14.95 12.25 14.65C12.85 14.35 13.45 14.05 14.05 13.75C14.45 13.55 14.85 13.35 15.25 13.25C15.45 13.15 15.75 13.15 15.95 13.25C16.35 13.35 16.75 13.65 16.95 14.05C17.15 14.45 17.25 14.85 17.25 15.35C17.25 15.85 17.15 16.25 16.95 16.65Z" fill="currentColor"/>
    </svg>
  );
} 