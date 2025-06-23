"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Calculator, 
  Download, 
  Share2, 
  BookOpen,
  TrendingUp,
  Users,
  Calendar,
  Star,
  Zap,
  User,
  Heart,
  Briefcase,
  Save,
  History
} from 'lucide-react';

import { NumerologyForm } from '@/components/numerology/NumerologyForm';
import { NumerologyCard, NumerologyGrid } from '@/components/numerology/NumerologyCard';
import { NumerologyProfile } from '@/lib/numerology/types';
import { ChineseZodiacEngine } from '@/lib/chinese-zodiac/core';

// LINE LIFF User Management
interface LineUser {
  userId: string;
  displayName: string;
  pictureUrl?: string;
}

interface SavedProfile {
  id: string;
  name: string;
  dateOfBirth: string;
  profile: NumerologyProfile;
  chineseZodiac: any;
  createdAt: string;
}

export default function NumerologyCalculatorPage() {
  const [profile, setProfile] = useState<NumerologyProfile | null>(null);
  const [chineseZodiac, setChineseZodiac] = useState<any>(null);
  const [currentUser, setCurrentUser] = useState<LineUser | null>(null);
  const [savedProfiles, setSavedProfiles] = useState<SavedProfile[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('core');

  // Initialize LINE LIFF
  useEffect(() => {
    initializeLiff();
    loadSavedProfiles();
  }, []);

  const initializeLiff = async () => {
    try {
      // Mock LINE user for development
      const mockUser: LineUser = {
        userId: 'mock-user-123',
        displayName: 'ผู้ใช้ทดสอบ',
        pictureUrl: '/placeholder-user.jpg'
      };
      setCurrentUser(mockUser);
    } catch (error) {
      console.error('LIFF initialization failed:', error);
    }
  };

  const loadSavedProfiles = () => {
    const saved = localStorage.getItem('numerology-profiles');
    if (saved) {
      setSavedProfiles(JSON.parse(saved));
    }
  };

  const handleResult = (newProfile: NumerologyProfile, dateOfBirth?: string, fullName?: string) => {
    setProfile(newProfile);
    
    // คำนวณ Chinese Zodiac
    if (dateOfBirth) {
      try {
        const zodiacResult = ChineseZodiacEngine.calculateZodiac(dateOfBirth);
        setChineseZodiac(zodiacResult);
      } catch (err) {
        console.error('Error calculating Chinese Zodiac:', err);
      }
    }
    
    setError(null);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setProfile(null);
  };

  const saveProfile = () => {
    if (!profile || !currentUser) return;

    const newProfile: SavedProfile = {
      id: Date.now().toString(),
      name: `โปรไฟล์ ${new Date().toLocaleDateString('th-TH')}`,
      dateOfBirth: '', // จะได้จากฟอร์ม
      profile,
      chineseZodiac,
      createdAt: new Date().toISOString()
    };

    const updated = [...savedProfiles, newProfile];
    setSavedProfiles(updated);
    localStorage.setItem('numerology-profiles', JSON.stringify(updated));
  };

  const loadProfile = (profileId: string) => {
    const saved = savedProfiles.find(p => p.id === profileId);
    if (saved) {
      setProfile(saved.profile);
      setChineseZodiac(saved.chineseZodiac);
      setSelectedProfile(profileId);
    }
  };

  const handleShare = async () => {
    if (!profile) return;

    const shareData = {
      title: 'การวิเคราะห์เลขศาสตร์ของฉัน',
      text: `เลขเส้นทางชีวิต: ${profile.lifePath.number} - ${profile.lifePath.description}`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(
        `การวิเคราะห์เลขศาสตร์\n\nเลขเส้นทางชีวิต: ${profile.lifePath.number} - ${profile.lifePath.description}\n\nดูรายละเอียดเพิ่มเติม: ${window.location.href}`
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Mobile Header with User Info */}
      {currentUser && (
        <div className="bg-white dark:bg-slate-800 shadow-sm border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-sm">{currentUser.displayName}</p>
                  <p className="text-xs text-muted-foreground">เลขศาสตร์ส่วนตัว</p>
                </div>
              </div>
              
              {/* Saved Profiles Dropdown */}
              {savedProfiles.length > 0 && (
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => setActiveTab('history')}>
                    <History className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-6">
        {/* Mobile-First Layout */}
        <div className="space-y-6">
          {/* Form Section */}
          <div>
            <NumerologyForm
              onResult={handleResult}
              onError={handleError}
              className="w-full"
            />
          </div>

          {/* Results Section */}
          {!profile && !error && (
            <Card className="text-center py-12">
              <CardContent>
                <Calculator className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">เริ่มต้นการวิเคราะห์</h3>
                <p className="text-muted-foreground text-sm">
                  กรอกข้อมูลของคุณเพื่อรับการวิเคราะห์เลขศาสตร์ที่ครบถ้วน
                </p>
              </CardContent>
            </Card>
          )}

          {error && (
            <Card className="border-red-200 bg-red-50 dark:bg-red-900/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-red-600 mb-2">เกิดข้อผิดพลาด</h3>
                <p className="text-red-600 text-sm">{error}</p>
              </CardContent>
            </Card>
          )}

          {profile && (
            <div className="space-y-4">
              {/* Action Buttons - Mobile Optimized */}
              <div className="grid grid-cols-3 gap-2">
                <Button onClick={saveProfile} variant="outline" size="sm" className="text-xs">
                  <Save className="h-3 w-3 mr-1" />
                  บันทึก
                </Button>
                <Button onClick={handleShare} variant="outline" size="sm" className="text-xs">
                  <Share2 className="h-3 w-3 mr-1" />
                  แชร์
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  <Users className="h-3 w-3 mr-1" />
                  เปรียบเทียบ
                </Button>
              </div>

              {/* Mobile-Optimized Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-auto p-1">
                  <TabsTrigger value="core" className="flex flex-col items-center py-2 text-xs">
                    <Star className="h-4 w-4 mb-1" />
                    หลัก
                  </TabsTrigger>
                  <TabsTrigger value="zodiac" className="flex flex-col items-center py-2 text-xs">
                    <Zap className="h-4 w-4 mb-1" />
                    นักษัตร
                  </TabsTrigger>
                  <TabsTrigger value="more" className="flex flex-col items-center py-2 text-xs">
                    <TrendingUp className="h-4 w-4 mb-1" />
                    เพิ่มเติม
                  </TabsTrigger>
                </TabsList>

                {/* Core Numbers - Mobile Layout */}
                <TabsContent value="core" className="space-y-4 mt-4">
                  <div className="space-y-3">
                    <NumerologyCard result={profile.lifePath} compact={true} />
                    <NumerologyCard result={profile.expression} compact={true} />
                    <NumerologyCard result={profile.heartDesire} compact={true} />
                    <NumerologyCard result={profile.personality} compact={true} />
                  </div>
                  
                  {/* Personal Cycles in Compact View */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4">
                    <h3 className="font-semibold mb-3 text-sm">พลังงานปัจจุบัน</h3>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <Badge variant="secondary" className="text-xs">{profile.personalYear.number}</Badge>
                        <p className="text-xs text-muted-foreground mt-1">ปีนี้</p>
                      </div>
                      <div>
                        <Badge variant="secondary" className="text-xs">{profile.personalMonth.number}</Badge>
                        <p className="text-xs text-muted-foreground mt-1">เดือนนี้</p>
                      </div>
                      <div>
                        <Badge variant="secondary" className="text-xs">{profile.personalDay.number}</Badge>
                        <p className="text-xs text-muted-foreground mt-1">วันนี้</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Chinese Zodiac - Mobile Optimized */}
                <TabsContent value="zodiac" className="space-y-4 mt-4">
                  {chineseZodiac && (
                    <Card>
                      <CardHeader className="text-center pb-4">
                        <div className="text-5xl mb-2">{chineseZodiac.emoji}</div>
                        <CardTitle className="text-xl">
                          {chineseZodiac.elementTh}{chineseZodiac.animalTh}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {chineseZodiac.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* บุคลิกภาพ */}
                        <div>
                          <h4 className="font-semibold mb-2 text-blue-600 text-sm">🌟 บุคลิกภาพ</h4>
                          <div className="flex flex-wrap gap-1">
                            {chineseZodiac.personality.map((trait: string, index: number) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {trait}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* ความเข้ากันได้ */}
                        <div>
                          <h4 className="font-semibold mb-2 text-pink-600 text-sm">💕 ความเข้ากันได้</h4>
                          <div className="space-y-2">
                            <div className="text-xs">
                              <span className="font-medium text-green-600">ดีที่สุด:</span>
                              <span className="ml-2">{chineseZodiac.compatibility.best.join(', ')}</span>
                            </div>
                            <div className="text-xs">
                              <span className="font-medium text-orange-600">ระวัง:</span>
                              <span className="ml-2">{chineseZodiac.compatibility.challenging.join(', ')}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                {/* Additional Numbers & Compatibility */}
                <TabsContent value="more" className="space-y-4 mt-4">
                  <div className="space-y-3">
                    <NumerologyCard result={profile.sunNumber} compact={true} />
                    <NumerologyCard result={profile.talentNumber} compact={true} />
                    <NumerologyCard result={profile.maturityNumber} compact={true} />
                  </div>

                  {/* Compatibility Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="flex flex-col items-center py-4 h-auto">
                      <Heart className="h-6 w-6 mb-2 text-pink-500" />
                      <span className="text-xs">ความรัก</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center py-4 h-auto">
                      <Briefcase className="h-6 w-6 mb-2 text-blue-500" />
                      <span className="text-xs">การงาน</span>
                    </Button>
                  </div>
                </TabsContent>

                {/* History Tab */}
                <TabsContent value="history" className="space-y-4 mt-4">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm">โปรไฟล์ที่บันทึกไว้</h3>
                    {savedProfiles.length === 0 ? (
                      <p className="text-muted-foreground text-sm text-center py-8">
                        ยังไม่มีโปรไฟล์ที่บันทึกไว้
                      </p>
                    ) : (
                      savedProfiles.map((saved) => (
                        <Card key={saved.id} className="cursor-pointer" onClick={() => loadProfile(saved.id)}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium text-sm">{saved.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {new Date(saved.createdAt).toLocaleDateString('th-TH')}
                                </p>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {saved.profile.lifePath.number}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 