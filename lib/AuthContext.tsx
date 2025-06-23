'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from './supabaseClient';
import { type User as SupabaseUser } from '@supabase/supabase-js';
import { liffService, type LiffProfile } from './liff';
import { toast } from 'sonner';

export interface User {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  birthDate: string;
  birthTime?: string;
  birthPlace?: string;
  gender: 'male' | 'female' | 'other';
  avatar?: string;
  isPremium: boolean;
  isAdmin: boolean;
  loginMethod: 'google' | 'line' | 'temp';
  createdAt: string;
  updatedAt: string;
}

export interface Profile {
  id: string;
  userId: string;
  name: string;
  birthDate: string;
  birthTime?: string;
  birthPlace?: string;
  gender: 'male' | 'female' | 'other';
  relationship?: 'self' | 'spouse' | 'child' | 'parent' | 'friend' | 'other';
  notes?: string;
  isActive: boolean;
  createdAt: string;
}

interface AuthContextType {
  // User Authentication
  user: User | null;
  supabaseUser: SupabaseUser | null;
  dbUser: any | null;
  lineProfile: LiffProfile | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  
  // Auth Methods
  loginWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  loginWithLine: () => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  refreshDbUser: () => Promise<void>;
  
  // Profile Management
  profiles: Profile[];
  activeProfile: Profile | null;
  
  // Profile Methods
  createProfile: (profileData: CreateProfileData) => Promise<{ success: boolean; profile?: Profile; error?: string }>;
  updateProfile: (profileId: string, profileData: Partial<Profile>) => Promise<{ success: boolean; error?: string }>;
  deleteProfile: (profileId: string) => Promise<{ success: boolean; error?: string }>;
  setActiveProfile: (profileId: string) => void;
  
  // Quick Actions
  quickRegister: (profileData: CreateProfileData) => Promise<{ success: boolean; user?: User; profile?: Profile; error?: string }>;
}

interface CreateProfileData {
  name: string;
  birthDate: string;
  birthTime?: string;
  birthPlace?: string;
  gender: 'male' | 'female' | 'other';
  relationship?: 'self' | 'spouse' | 'child' | 'parent' | 'friend' | 'other';
  notes?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Admin configuration - ใช้ LINE ID แทน email
const ADMIN_LINE_ID = process.env.ADMIN_LINE_ID || ''; // LINE User ID ของ Admin

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [supabaseUser, setSupabaseUser] = useState<SupabaseUser | null>(null);
  const [dbUser, setDbUser] = useState<any | null>(null);
  const [lineProfile, setLineProfile] = useState<LiffProfile | null>(null);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [activeProfile, setActiveProfileState] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user;

  // Initialize auth system - ใช้ LINE เท่านั้น
  useEffect(() => {
    const initAuth = async () => {
      try {
        // ลบ Supabase session check ออก - ไม่ใช้ Google OAuth แล้ว
        // เช็ค LINE Login แทน
        console.log('🔄 Initializing LINE-only authentication...');
        
        // ไม่ต้อง auto-initialize LINE เพื่อป้องกัน redirect
        // ให้ user คลิก login เอง
        
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const loadLineUserProfile = async (lineProfile: LiffProfile) => {
    try {
      // หา LINE user ใน database
      const { data: profile, error } = await supabase
        .from('line_users')
        .select('*')
        .eq('line_id', lineProfile.userId)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error loading LINE user profile:', error);
        return;
      }

      // เช็ค Admin จาก LINE ID แทน email
      const isAdmin = lineProfile.userId === ADMIN_LINE_ID;
      console.log('👑 Admin check:', { userId: lineProfile.userId, isAdmin });

      const userData: User = {
        id: lineProfile.userId,
        name: profile?.display_name || lineProfile.displayName,
        email: lineProfile.email,
        birthDate: profile?.date_of_birth || '',
        gender: 'other',
        avatar: lineProfile.pictureUrl,
        isPremium: profile?.unlocked || isAdmin, // Admin ได้ premium ฟรี
        isAdmin,
        loginMethod: 'line',
        createdAt: profile?.created_at || new Date().toISOString(),
        updatedAt: profile?.updated_at || new Date().toISOString()
      };
      
      setUser(userData);

      // สร้าง default profile ถ้ามีข้อมูลเกิด
      if (profile?.date_of_birth && profile?.display_name) {
        const defaultProfile: Profile = {
          id: `profile_${lineProfile.userId}`,
          userId: lineProfile.userId,
          name: profile.display_name,
          birthDate: profile.date_of_birth,
          gender: 'other',
          relationship: 'self',
          isActive: true,
          createdAt: profile.created_at || new Date().toISOString()
        };
        
        setProfiles([defaultProfile]);
        setActiveProfileState(defaultProfile);
      }
    } catch (error) {
      console.error('Error loading LINE user profile:', error);
    }
  };

  const refreshDbUser = async () => {
    if (lineProfile) {
      await loadLineUserProfile(lineProfile);
    }
  };

  const loginWithLine = async (): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    
    try {
      console.log('🔄 Starting LINE login process...');
      console.log('🔧 Environment check:', {
        LIFF_ID: process.env.NEXT_PUBLIC_LIFF_ID,
        ADMIN_LINE_ID: ADMIN_LINE_ID,
        isAvailable: liffService.isAvailable()
      });
      
      await liffService.initialize();
      
      if (!liffService.isLoggedIn()) {
        console.log('🔄 User not logged in, redirecting to LINE...');
        await liffService.login();
        return { success: true };
      }

      console.log('✅ User is logged in via LINE');
      const profile = await liffService.getProfile();
      console.log('📱 LINE Profile:', profile);
      
      if (profile) {
        setLineProfile(profile);
        await loadLineUserProfile(profile);
        
        // สร้างหรืออัปเดต LINE user ใน database
        console.log('💾 Saving LINE user to database...');
        console.log('📝 Data to save:', {
          line_id: profile.userId,
          display_name: profile.displayName,
          picture_url: profile.pictureUrl,
          email: profile.email
        });
        
        const { data, error } = await supabase
          .from('line_users')
          .upsert({
            line_id: profile.userId,
            display_name: profile.displayName,
            picture_url: profile.pictureUrl,
            email: profile.email,
            unlocked: false,
            updated_at: new Date().toISOString()
          }, {
            onConflict: 'line_id'
          })
          .select();

        if (error) {
          console.error('❌ Error saving LINE user:', error);
          console.error('Error details:', {
            message: error.message,
            details: error.details,
            hint: error.hint,
            code: error.code
          });
        } else {
          console.log('✅ LINE user saved successfully:', data);
        }

        return { success: true };
      }

      return { success: false, error: 'ไม่สามารถดึงข้อมูลจาก LINE ได้' };
    } catch (error: any) {
      console.error('💥 LINE login error:', error);
      return { success: false, error: error.message || 'เกิดข้อผิดพลาดในการเข้าสู่ระบบด้วย LINE' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      // ลบ Supabase logout - ไม่ใช้แล้ว
      
      if (lineProfile) {
        await liffService.logout();
        setLineProfile(null);
      }
      
      setSupabaseUser(null);
      setUser(null);
      setDbUser(null);
      setProfiles([]);
      setActiveProfileState(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const createProfile = async (profileData: CreateProfileData): Promise<{ success: boolean; profile?: Profile; error?: string }> => {
    if (!user) {
      return { success: false, error: 'กรุณาเข้าสู่ระบบก่อน' };
    }

    try {
      const newProfile: Profile = {
        id: `profile_${Date.now()}`,
        userId: user.id,
        name: profileData.name,
        birthDate: profileData.birthDate,
        birthTime: profileData.birthTime,
        birthPlace: profileData.birthPlace,
        gender: profileData.gender,
        relationship: profileData.relationship || 'other',
        notes: profileData.notes,
        isActive: true,
        createdAt: new Date().toISOString()
      };
      
      setProfiles(prev => [...prev, newProfile]);
      
      if (profiles.length === 0) {
        setActiveProfileState(newProfile);
      }
      
      return { success: true, profile: newProfile };
    } catch (error) {
      return { success: false, error: 'เกิดข้อผิดพลาดในการสร้างโปรไฟล์' };
    }
  };

  const updateProfile = async (profileId: string, profileData: Partial<Profile>): Promise<{ success: boolean; error?: string }> => {
    try {
      setProfiles(prev => 
        prev.map(profile => 
          profile.id === profileId 
            ? { ...profile, ...profileData, updatedAt: new Date().toISOString() }
            : profile
        )
      );
      
      if (activeProfile?.id === profileId) {
        setActiveProfileState(prev => prev ? { ...prev, ...profileData } : null);
      }
      
      return { success: true };
    } catch (error) {
      return { success: false, error: 'เกิดข้อผิดพลาดในการอัพเดทโปรไฟล์' };
    }
  };

  const deleteProfile = async (profileId: string): Promise<{ success: boolean; error?: string }> => {
    try {
      setProfiles(prev => prev.filter(profile => profile.id !== profileId));
      
      if (activeProfile?.id === profileId) {
        const remainingProfiles = profiles.filter(p => p.id !== profileId);
        setActiveProfileState(remainingProfiles.length > 0 ? remainingProfiles[0] : null);
      }
      
      return { success: true };
    } catch (error) {
      return { success: false, error: 'เกิดข้อผิดพลาดในการลบโปรไฟล์' };
    }
  };

  const setActiveProfile = (profileId: string) => {
    const profile = profiles.find(p => p.id === profileId);
    if (profile) {
      setActiveProfileState(profile);
    }
  };

  const quickRegister = async (profileData: CreateProfileData): Promise<{ success: boolean; user?: User; profile?: Profile; error?: string }> => {
    setIsLoading(true);
    
    try {
      const tempUser: User = {
        id: `temp_${Date.now()}`,
        name: profileData.name,
        birthDate: profileData.birthDate,
        birthTime: profileData.birthTime,
        birthPlace: profileData.birthPlace,
        gender: profileData.gender,
        isPremium: false,
        isAdmin: false,
        loginMethod: 'temp',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      const tempProfile: Profile = {
        id: `profile_${Date.now()}`,
        userId: tempUser.id,
        name: profileData.name,
        birthDate: profileData.birthDate,
        birthTime: profileData.birthTime,
        birthPlace: profileData.birthPlace,
        gender: profileData.gender,
        relationship: 'self',
        notes: profileData.notes,
        isActive: true,
        createdAt: new Date().toISOString()
      };
      
      setUser(tempUser);
      setProfiles([tempProfile]);
      setActiveProfileState(tempProfile);
      
      return { success: true, user: tempUser, profile: tempProfile };
    } catch (error) {
      return { success: false, error: 'เกิดข้อผิดพลาดในการสร้างบัญชี' };
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    supabaseUser,
    dbUser,
    lineProfile,
    isLoading,
    isAuthenticated,
    loginWithGoogle: () => Promise.resolve({ success: false, error: 'Google login is not supported' }),
    loginWithLine,
    logout,
    refreshDbUser,
    profiles,
    activeProfile,
    createProfile,
    updateProfile,
    deleteProfile,
    setActiveProfile,
    quickRegister
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}