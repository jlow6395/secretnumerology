/**
 * Chinese Zodiac Demo Page
 * หน้าสาธิตระบบนักษัตรจีนพร้อมการผสานกับเลขศาสตร์
 * 
 * Features:
 * - Input form for birth date and name
 * - Display Chinese zodiac results
 * - Show unified analysis (numerology + zodiac)
 * - Micro-feedback system demonstration
 * - Revenue optimization features
 */

'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { 
  CalendarDays, 
  User, 
  Sparkles, 
  TrendingUp, 
  Heart,
  Crown,
  Star,
  Zap
} from 'lucide-react';
import { ChineseZodiacEngine, ChineseZodiacResult } from '@/lib/chinese-zodiac/core';
import { UnifiedCalculationEngine, UnifiedProfile } from '@/lib/chinese-zodiac/integration';
import { SmartAnalytics } from '@/lib/chinese-zodiac/analytics';
import ZodiacCard from '@/components/chinese-zodiac/ZodiacCard';

interface FormData {
  name: string;
  dateOfBirth: string;
}

export default function ChineseZodiacPage() {
  const [formData, setFormData] = useState<FormData>({ name: '', dateOfBirth: '' });
  const [zodiacResult, setZodiacResult] = useState<ChineseZodiacResult | null>(null);
  const [unifiedProfile, setUnifiedProfile] = useState<UnifiedProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('basic');
  const [feedbackCount, setFeedbackCount] = useState(0);

  // Mock user ID for demo
  const userId = 'demo_user_123';
  const sessionId = `session_${Date.now()}`;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleCalculate = async () => {
    if (!formData.name.trim() || !formData.dateOfBirth) {
      setError('กรุณากรอกชื่อและวันเกิดให้ครบถ้วน');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // คำนวณนักษัตรจีนพื้นฐาน
      const basicResult = ChineseZodiacEngine.calculateZodiac(formData.dateOfBirth, {
        includePredictions: true,
        includeInsights: true,
        userId,
        sessionId
      });

      setZodiacResult(basicResult);

      // คำนวณโปรไฟล์แบบผสาน (numerology + zodiac)
      const unified = await UnifiedCalculationEngine.calculateUnifiedProfile(
        userId,
        formData.name,
        formData.dateOfBirth,
        {
          includePredictions: true,
          includeInsights: true,
          sessionId
        }
      );

      setUnifiedProfile(unified);

      // Track การใช้งาน
      SmartAnalytics.trackEvent({
        userId,
        sessionId,
        eventType: 'zodiac_calculation',
        data: {
          feature: 'demo_calculation',
          zodiacAnimal: basicResult.animal,
          element: basicResult.element
        },
        metadata: {
          appVersion: '1.0.0',
          platform: 'web',
          source: 'demo_page'
        }
      });

    } catch (err) {
      setError('เกิดข้อผิดพลาดในการคำนวณ กรุณาลองใหม่อีกครั้ง');
      console.error('Calculation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeedback = (feedbackId: string, isPositive: boolean) => {
    setFeedbackCount(prev => prev + 1);
    
    // แสดงการตอบสนองต่อ feedback
    const message = isPositive ? 'ขอบคุณสำหรับ feedback! 👍' : 'ขอบคุณที่ช่วยเราปรับปรุง 👎';
    
    // ใน production จะส่งไป analytics service
    console.log(`Feedback received: ${feedbackId} - ${isPositive ? 'Positive' : 'Negative'}`);
  };

  const resetForm = () => {
    setFormData({ name: '', dateOfBirth: '' });
    setZodiacResult(null);
    setUnifiedProfile(null);
    setError(null);
    setActiveTab('basic');
    setFeedbackCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            🐲 ระบบนักษัตรจีนอัจฉริยะ
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            ค้นพบบุคลิกและชะตาชีวิตของคุณผ่านการผสานระหว่างนักษัตรจีนและเลขศาสตร์
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              AI-Powered
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Big Data Analytics
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Heart className="w-3 h-3" />
              Smart Feedback
            </Badge>
          </div>
        </div>

        {/* Input Form */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-purple-500" />
              กรอกข้อมูลของคุณ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4" />
                  ชื่อ-นามสกุล
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="เช่น นายสมชาย ใจดี"
                  className="w-full"
                />
              </div>
              
              <div>
                <Label htmlFor="dateOfBirth" className="flex items-center gap-2 mb-2">
                  <CalendarDays className="w-4 h-4" />
                  วันเกิด
                </Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            {error && (
              <Alert className="mb-4 border-red-200 bg-red-50">
                <AlertDescription className="text-red-700">
                  {error}
                </AlertDescription>
              </Alert>
            )}

            <div className="flex gap-3">
              <Button 
                onClick={handleCalculate} 
                disabled={isLoading}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    กำลังคำนวณ...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    คำนวณนักษัตรจีน
                  </>
                )}
              </Button>
              
              {(zodiacResult || unifiedProfile) && (
                <Button variant="outline" onClick={resetForm}>
                  เริ่มใหม่
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {zodiacResult && (
          <div className="space-y-6">
            
            {/* Feedback Counter */}
            {feedbackCount > 0 && (
              <Alert className="border-green-200 bg-green-50">
                <Star className="w-4 h-4" />
                <AlertDescription className="text-green-700">
                  ขอบคุณสำหรับ feedback {feedbackCount} ครั้ง! ข้อมูลนี้จะช่วยปรับปรุงระบบให้แม่นยำยิ่งขึ้น 🙏
                </AlertDescription>
              </Alert>
            )}

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="basic" className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  นักษัตรจีน
                </TabsTrigger>
                <TabsTrigger value="unified" className="flex items-center gap-2" disabled={!unifiedProfile}>
                  <Crown className="w-4 h-4" />
                  การวิเคราะห์แบบผสาน
                </TabsTrigger>
                <TabsTrigger value="insights" className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  ข้อมูลเชิงลึก
                </TabsTrigger>
              </TabsList>

              {/* Basic Zodiac Results */}
              <TabsContent value="basic" className="mt-6">
                <ZodiacCard
                  result={zodiacResult}
                  userId={userId}
                  showPredictions={true}
                  showInsights={true}
                  onFeedback={handleFeedback}
                  className="shadow-lg"
                />
              </TabsContent>

              {/* Unified Analysis */}
              <TabsContent value="unified" className="mt-6">
                {unifiedProfile ? (
                  <div className="space-y-6">
                    
                    {/* Personality Match Score */}
                    <Card className="shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Crown className="w-5 h-5 text-gold-500" />
                          การวิเคราะห์แบบผสาน (เลขศาสตร์ + นักษัตรจีน)
                          <Badge variant="secondary" className="ml-2">Premium</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          
                          {/* Compatibility Score */}
                          <div>
                            <h3 className="font-semibold mb-3">ความสอดคล้องของบุคลิก</h3>
                            <div className="text-center">
                              <div className="text-4xl font-bold text-purple-600 mb-2">
                                {unifiedProfile.combinedInsights.personalityMatch}%
                              </div>
                              <p className="text-gray-600">
                                ความสอดคล้องระหว่างเลขศาสตร์และนักษัตรจีน
                              </p>
                            </div>
                          </div>

                          {/* Key Numbers */}
                          <div>
                            <h3 className="font-semibold mb-3">เลขสำคัญในชีวิต</h3>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>Life Path:</span>
                                <Badge variant="outline">{unifiedProfile.numerology.lifePath.number}</Badge>
                              </div>
                              <div className="flex justify-between">
                                <span>Talent Number:</span>
                                <Badge variant="outline">{unifiedProfile.numerology.talentNumber.number}</Badge>
                              </div>
                              <div className="flex justify-between">
                                <span>นักษัตร:</span>
                                <Badge variant="outline">{unifiedProfile.chineseZodiac.animalTh}</Badge>
                              </div>
                              <div className="flex justify-between">
                                <span>ธาตุ:</span>
                                <Badge variant="outline">{unifiedProfile.chineseZodiac.elementTh}</Badge>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Separator className="my-6" />

                        {/* SWOT Analysis */}
                        <div>
                          <h3 className="font-semibold mb-4">การวิเคราะห์ SWOT</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            
                            <div className="bg-green-50 p-4 rounded-lg">
                              <h4 className="font-medium text-green-800 mb-2">💪 จุดแข็ง</h4>
                              <ul className="text-sm text-green-700 space-y-1">
                                {unifiedProfile.combinedInsights.strengthsAndWeaknesses.strengths.map((strength, index) => (
                                  <li key={index}>• {strength}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-red-50 p-4 rounded-lg">
                              <h4 className="font-medium text-red-800 mb-2">⚠️ จุดอ่อน</h4>
                              <ul className="text-sm text-red-700 space-y-1">
                                {unifiedProfile.combinedInsights.strengthsAndWeaknesses.weaknesses.map((weakness, index) => (
                                  <li key={index}>• {weakness}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg">
                              <h4 className="font-medium text-blue-800 mb-2">🚀 โอกาส</h4>
                              <ul className="text-sm text-blue-700 space-y-1">
                                {unifiedProfile.combinedInsights.strengthsAndWeaknesses.opportunities.map((opportunity, index) => (
                                  <li key={index}>• {opportunity}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-lg">
                              <h4 className="font-medium text-yellow-800 mb-2">⚡ อุปสรรค</h4>
                              <ul className="text-sm text-yellow-700 space-y-1">
                                {unifiedProfile.combinedInsights.strengthsAndWeaknesses.threats.map((threat, index) => (
                                  <li key={index}>• {threat}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <Separator className="my-6" />

                        {/* Recommendations */}
                        <div>
                          <h3 className="font-semibold mb-4">คำแนะนำแบบผสาน</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(unifiedProfile.combinedInsights.recommendations).map(([category, recommendations]) => (
                              <div key={category} className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-medium mb-2 capitalize">
                                  {category === 'career' ? '💼 การงาน' :
                                   category === 'relationships' ? '💕 ความสัมพันธ์' :
                                   category === 'health' ? '🏥 สุขภาพ' :
                                   category === 'finance' ? '💰 การเงิน' :
                                   category === 'personal' ? '🌟 การพัฒนาตนเอง' : category}
                                </h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  {recommendations.map((rec: string, index: number) => (
                                    <li key={index}>• {rec}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">กำลังวิเคราะห์แบบผสาน...</p>
                  </div>
                )}
              </TabsContent>

              {/* AI Insights */}
              <TabsContent value="insights" className="mt-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-indigo-500" />
                      ข้อมูลเชิงลึกจาก AI
                      <Badge variant="secondary" className="ml-2">Beta</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      
                      {/* Demo Analytics */}
                      <div>
                        <h3 className="font-semibold mb-4">สถิติการใช้งานระบบ</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="bg-blue-50 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-blue-600">10,247</div>
                            <div className="text-sm text-blue-700">ผู้ใช้ทั้งหมด</div>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-green-600">4.2/5</div>
                            <div className="text-sm text-green-700">คะแนนความแม่นยำ</div>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-purple-600">85%</div>
                            <div className="text-sm text-purple-700">ความพึงพอใจ</div>
                          </div>
                          <div className="bg-pink-50 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-pink-600">{feedbackCount}</div>
                            <div className="text-sm text-pink-700">Feedback ของคุณ</div>
                          </div>
                        </div>
                      </div>

                      {/* Revenue Optimization Demo */}
                      <div className="bg-gradient-to-r from-gold-50 to-yellow-50 p-6 rounded-lg border border-gold-200">
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <Crown className="w-5 h-5 text-gold-600" />
                          คุณสมควรได้รับประสบการณ์ที่ดีกว่านี้!
                        </h3>
                        <p className="text-gray-700 mb-4">
                          อัปเกรดเป็น Premium เพื่อปลดล็อกฟีเจอร์พิเศษ:
                        </p>
                        <ul className="text-sm text-gray-600 space-y-2 mb-4">
                          <li>✨ การทำนายแบบละเอียดจาก AI</li>
                          <li>📊 รายงานประจำวัน/เดือน/ปี</li>
                          <li>💕 การวิเคราะห์ความเข้ากันได้แบบครบถ้วน</li>
                          <li>🎯 คำแนะนำเฉพาะบุคคล</li>
                          <li>📅 ปฏิทินนักษัตรจีน</li>
                        </ul>
                        <Button className="bg-gradient-to-r from-gold-500 to-yellow-500 hover:from-gold-600 hover:to-yellow-600">
                          <Crown className="w-4 h-4 mr-2" />
                          อัปเกรดเป็น Premium - 159 บาท/เดือน
                        </Button>
                      </div>

                      {/* System Architecture Demo */}
                      <div>
                        <h3 className="font-semibold mb-4">สถาปัตยกรรมระบบ</h3>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div className="bg-white p-3 rounded border">
                              <div className="text-lg font-bold text-purple-600 mb-1">Chinese Zodiac Engine</div>
                              <div className="text-xs text-gray-600">ตารางวันตรุษจีนแม่นยำ 1900-2050</div>
                            </div>
                            <div className="bg-white p-3 rounded border">
                              <div className="text-lg font-bold text-blue-600 mb-1">Smart Analytics</div>
                              <div className="text-xs text-gray-600">Big Data + Machine Learning</div>
                            </div>
                            <div className="bg-white p-3 rounded border">
                              <div className="text-lg font-bold text-green-600 mb-1">Micro-feedback</div>
                              <div className="text-xs text-gray-600">การเรียนรู้แบบ Real-time</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 py-8 border-t border-gray-200">
          <p className="text-gray-600 mb-2">
            🚀 ระบบนี้ถูกออกแบบมาเพื่อรองรับการเติบโตถึง <strong>300 ล้านบาท</strong>
          </p>
          <p className="text-sm text-gray-500">
            พร้อมระบบ Big Data Analytics และ Smart Feedback สำหรับ numuru.com
          </p>
        </div>
      </div>
    </div>
  );
}
