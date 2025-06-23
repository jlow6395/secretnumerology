/**
 * Integration Layer for Chinese Zodiac + Numerology System
 * ระบบผสานนักษัตรจีนกับเลขศาสตร์สำหรับประสบการณ์ที่สมบูรณ์
 * 
 * Strategy:
 * - Unified calculation engine
 * - Cross-system compatibility analysis
 * - Comprehensive insights combining both systems
 * - Smart recommendations based on both zodiac and numerology
 */

import { ChineseZodiacEngine, ChineseZodiacResult } from './core';
import { SmartAnalytics, MicroFeedbackSystem } from './analytics';
import { 
  calculateLifePath, 
  calculateTalentNumber, 
  calculateExpressionNumber,
  calculatePersonalityNumber,
  calculateHeartDesireNumber,
  calculateMaturityNumber,
  calculatePersonalYear,
  calculatePersonalMonth,
  calculatePersonalDay,
  calculateChallengeNumbers,
  calculatePinnacleNumbers
} from '../numerology/core';

export interface UnifiedProfile {
  // ข้อมูลพื้นฐาน
  userId: string;
  name: string;
  dateOfBirth: string; // YYYY-MM-DD
  
  // ผลลัพธ์เลขศาสตร์
  numerology: {
    lifePath: { number: number; description: string };
    talentNumber: { number: string; description: string };
    expressionNumber: { number: number; description: string };
    personalityNumber: { number: number; description: string };
    heartDesire: { number: number; description: string };
    maturityNumber: { number: number; description: string };
    personalYear: { number: number; description: string };
    personalMonth: { number: number; description: string };
    personalDay: { number: number; description: string };
    challengeNumbers: { numbers: number[]; descriptions: string[] };
    pinnacleNumbers: { numbers: number[]; descriptions: string[] };
  };
  
  // ผลลัพธ์นักษัตรจีน
  chineseZodiac: ChineseZodiacResult;
  
  // การวิเคราะห์แบบผสาน
  combinedInsights: {
    personalityMatch: number; // 0-100 ความสอดคล้องระหว่าง 2 ระบบ
    strengthsAndWeaknesses: {
      strengths: string[];
      weaknesses: string[];
      opportunities: string[];
      threats: string[];
    };
    
    // คำแนะนำแบบผสาน
    recommendations: {
      career: string[];
      relationships: string[];
      health: string[];
      finance: string[];
      personal: string[];
    };
    
    // ช่วงเวลาที่ดี/ไม่ดี
    timeAnalysis: {
      favorablePeriods: Array<{
        period: string;
        description: string;
        confidence: number;
      }>;
      challengingPeriods: Array<{
        period: string;
        description: string;
        advice: string;
      }>;
    };
    
    // ความเข้ากันได้แบบผสาน
    compatibility: {
      numerologyBased: any;
      zodiacBased: any;
      combined: {
        score: number;
        explanation: string;
        tips: string[];
      };
    };
  };
  
  // Metadata
  calculatedAt: string;
  version: string;
}

export interface CompatibilityAnalysis {
  person1: UnifiedProfile;
  person2: UnifiedProfile;
  
  analysis: {
    // คะแนนรวม
    overallScore: number; // 0-100
    
    // แยกตามระบบ
    numerologyScore: number;
    zodiacScore: number;
    
    // แยกตามด้าน
    personalityCompatibility: number;
    communicationStyle: number;
    lifestyleCompatibility: number;
    goalsAlignment: number;
    
    // คำอธิบายรายละเอียด
    strengths: string[];
    challenges: string[];
    advice: string[];
    
    // การพยากรณ์
    relationshipDynamics: {
      shortTerm: string; // 0-1 ปี
      mediumTerm: string; // 1-5 ปี
      longTerm: string; // 5+ ปี
    };
  };
}

export class UnifiedCalculationEngine {
  
  /**
   * คำนวณโปรไฟล์แบบครบถ้วน (เลขศาสตร์ + นักษัตรจีน)
   */
  static async calculateUnifiedProfile(
    userId: string,
    name: string,
    dateOfBirth: string,
    options: {
      includePredictions?: boolean;
      includeInsights?: boolean;
      sessionId?: string;
    } = {}
  ): Promise<UnifiedProfile> {
    
    // คำนวณเลขศาสตร์
    const numerologyResults = this.calculateAllNumerology(name, dateOfBirth);
    
    // คำนวณนักษัตรจีน
    const zodiacResult = ChineseZodiacEngine.calculateZodiac(dateOfBirth, {
      includePredictions: options.includePredictions,
      includeInsights: options.includeInsights,
      userId,
      sessionId: options.sessionId
    });
    
    // วิเคราะห์แบบผสาน
    const combinedInsights = this.generateCombinedInsights(numerologyResults, zodiacResult);
    
    const profile: UnifiedProfile = {
      userId,
      name,
      dateOfBirth,
      numerology: numerologyResults,
      chineseZodiac: zodiacResult,
      combinedInsights,
      calculatedAt: new Date().toISOString(),
      version: '1.0.0'
    };
    
    // บันทึกการใช้งาน
    if (options.sessionId) {
      SmartAnalytics.trackEvent({
        userId,
        sessionId: options.sessionId,
        eventType: 'zodiac_calculation',
        data: {
          feature: 'unified_profile',
          zodiacAnimal: zodiacResult.animal,
          element: zodiacResult.element,
          lifePath: numerologyResults.lifePath.number
        },
        metadata: {
          appVersion: '1.0.0',
          platform: 'web',
          source: 'unified_engine'
        }
      });
    }
    
    return profile;
  }
  
  /**
   * วิเคราะห์ความเข้ากันได้แบบผสาน
   */
  static analyzeCompatibility(
    profile1: UnifiedProfile,
    profile2: UnifiedProfile
  ): CompatibilityAnalysis {
    
    // คำนวณความเข้ากันได้ด้านเลขศาสตร์
    const numerologyScore = this.calculateNumerologyCompatibility(
      profile1.numerology,
      profile2.numerology
    );
    
    // คำนวณความเข้ากันได้ด้านนักษัตรจีน
    const zodiacScore = this.calculateZodiacCompatibility(
      profile1.chineseZodiac,
      profile2.chineseZodiac
    );
    
    // คำนวณคะแนนรวม (weighted average)
    const overallScore = Math.round((numerologyScore * 0.6) + (zodiacScore * 0.4));
    
    // วิเคราะห์ด้านต่าง ๆ
    const personalityCompatibility = this.analyzePersonalityCompatibility(profile1, profile2);
    const communicationStyle = this.analyzeCommunicationCompatibility(profile1, profile2);
    const lifestyleCompatibility = this.analyzeLifestyleCompatibility(profile1, profile2);
    const goalsAlignment = this.analyzeGoalsAlignment(profile1, profile2);
    
    // สร้างคำแนะนำ
    const { strengths, challenges, advice } = this.generateCompatibilityAdvice(
      profile1, profile2, overallScore
    );
    
    // พยากรณ์ความสัมพันธ์
    const relationshipDynamics = this.predictRelationshipDynamics(
      profile1, profile2, overallScore
    );
    
    return {
      person1: profile1,
      person2: profile2,
      analysis: {
        overallScore,
        numerologyScore,
        zodiacScore,
        personalityCompatibility,
        communicationStyle,
        lifestyleCompatibility,
        goalsAlignment,
        strengths,
        challenges,
        advice,
        relationshipDynamics
      }
    };
  }
  
  /**
   * สร้าง Micro-feedback สำหรับการทำนายแบบผสาน
   */
  static createUnifiedFeedback(
    userId: string,
    profile: UnifiedProfile,
    predictionType: string,
    content: string
  ) {
    return MicroFeedbackSystem.createMicroFeedback(
      `unified_${profile.userId}_${Date.now()}`,
      userId,
      predictionType,
      content
    );
  }
  
  /**
   * แนะนำคู่ที่เข้ากันได้ (สำหรับฟีเจอร์ Premium)
   */
  static recommendCompatiblePartners(
    userProfile: UnifiedProfile,
    candidateProfiles: UnifiedProfile[]
  ): Array<{
    profile: UnifiedProfile;
    compatibilityScore: number;
    reasons: string[];
    potential: 'high' | 'medium' | 'low';
  }> {
    
    return candidateProfiles
      .map(candidate => {
        const compatibility = this.analyzeCompatibility(userProfile, candidate);
        const score = compatibility.analysis.overallScore;
        
        return {
          profile: candidate,
          compatibilityScore: score,
          reasons: compatibility.analysis.strengths.slice(0, 3),
          potential: score >= 80 ? 'high' : score >= 60 ? 'medium' : 'low'
        };
      })
      .sort((a, b) => b.compatibilityScore - a.compatibilityScore)
      .slice(0, 10); // Top 10 matches
  }
  
  /**
   * สร้างรายงานประจำวัน/เดือน/ปี
   */
  static generatePeriodicReport(
    profile: UnifiedProfile,
    period: 'daily' | 'monthly' | 'yearly'
  ): {
    title: string;
    summary: string;
    highlights: string[];
    warnings: string[];
    recommendations: string[];
    luckyNumbers: number[];
    luckyColors: string[];
    favorableDates: string[];
  } {
    
    const currentDate = new Date();
    const { numerology, chineseZodiac } = profile;
    
    // คำนวณเลขประจำวัน/เดือน/ปี
    const personalNumbers = {
      year: calculatePersonalYear(profile.dateOfBirth, currentDate.getFullYear()),
      month: calculatePersonalMonth(profile.dateOfBirth, currentDate.getFullYear(), currentDate.getMonth() + 1),
      day: calculatePersonalDay(profile.dateOfBirth, currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate())
    };
    
    let title, summary, highlights, warnings, recommendations;
    
    switch (period) {
      case 'daily':
        title = `รายงานประจำวัน - ${currentDate.toLocaleDateString('th-TH')}`;
        summary = this.generateDailySummary(profile, personalNumbers);
        highlights = this.getDailyHighlights(profile, personalNumbers);
        warnings = this.getDailyWarnings(profile, personalNumbers);
        recommendations = this.getDailyRecommendations(profile, personalNumbers);
        break;
        
      case 'monthly':
        title = `รายงานประจำเดือน - ${currentDate.toLocaleDateString('th-TH', { month: 'long', year: 'numeric' })}`;
        summary = this.generateMonthlySummary(profile, personalNumbers);
        highlights = this.getMonthlyHighlights(profile, personalNumbers);
        warnings = this.getMonthlyWarnings(profile, personalNumbers);
        recommendations = this.getMonthlyRecommendations(profile, personalNumbers);
        break;
        
      case 'yearly':
        title = `รายงานประจำปี - ${currentDate.getFullYear()}`;
        summary = this.generateYearlySummary(profile, personalNumbers);
        highlights = this.getYearlyHighlights(profile, personalNumbers);
        warnings = this.getYearlyWarnings(profile, personalNumbers);
        recommendations = this.getYearlyRecommendations(profile, personalNumbers);
        break;
    }
    
    return {
      title,
      summary,
      highlights,
      warnings,
      recommendations,
      luckyNumbers: [...numerology.lifePath.number.toString().split('').map(Number), ...chineseZodiac.luckyNumbers],
      luckyColors: chineseZodiac.luckyColors,
      favorableDates: this.calculateFavorableDates(profile, period)
    };
  }
  
  // Helper Methods
  private static calculateAllNumerology(name: string, dateOfBirth: string) {
    const currentDate = new Date();
    
    return {
      lifePath: {
        number: calculateLifePath(dateOfBirth),
        description: 'เส้นทางชีวิตหลัก'
      },
      talentNumber: {
        number: calculateTalentNumber(dateOfBirth),
        description: 'พรสวรรค์และความสามารถ'
      },
      expressionNumber: {
        number: calculateExpressionNumber(name),
        description: 'การแสดงออกและเป้าหมายชีวิต'
      },
      personalityNumber: {
        number: calculatePersonalityNumber(name),
        description: 'บุคลิกภาพที่คนอื่นมองเห็น'
      },
      heartDesire: {
        number: calculateHeartDesireNumber(name),
        description: 'ความปรารถนาภายในใจ'
      },
      maturityNumber: {
        number: calculateMaturityNumber(calculateLifePath(dateOfBirth), calculateExpressionNumber(name)),
        description: 'เป้าหมายในวัยผู้ใหญ่'
      },
      personalYear: {
        number: calculatePersonalYear(dateOfBirth, currentDate.getFullYear()),
        description: 'พลังงานประจำปีนี้'
      },
      personalMonth: {
        number: calculatePersonalMonth(dateOfBirth, currentDate.getFullYear(), currentDate.getMonth() + 1),
        description: 'พลังงานประจำเดือนนี้'
      },
      personalDay: {
        number: calculatePersonalDay(dateOfBirth, currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()),
        description: 'พลังงานประจำวันนี้'
      },
      challengeNumbers: {
        numbers: calculateChallengeNumbers(dateOfBirth),
        descriptions: ['ความท้าทายในวัยเด็ก', 'ความท้าทายในวัยกลางคน', 'ความท้าทายหลักในชีวิต', 'ความท้าทายในวัยผู้ใหญ่']
      },
      pinnacleNumbers: {
        numbers: calculatePinnacleNumbers(dateOfBirth),
        descriptions: ['จุดสูงสุดในวัยเด็ก', 'จุดสูงสุดในวัยกลางคน', 'จุดสูงสุดหลักในชีวิต', 'จุดสูงสุดในวัยผู้ใหญ่']
      }
    };
  }
  
  private static generateCombinedInsights(numerology: any, zodiac: ChineseZodiacResult) {
    // วิเคราะห์ความสอดคล้อง
    const personalityMatch = this.calculatePersonalityMatch(numerology, zodiac);
    
    // SWOT Analysis
    const strengthsAndWeaknesses = this.performSWOTAnalysis(numerology, zodiac);
    
    // คำแนะนำแบบผสาน
    const recommendations = this.generateCombinedRecommendations(numerology, zodiac);
    
    // วิเคราะห์ช่วงเวลา
    const timeAnalysis = this.analyzeTimeFrames(numerology, zodiac);
    
    return {
      personalityMatch,
      strengthsAndWeaknesses,
      recommendations,
      timeAnalysis,
      compatibility: {
        numerologyBased: {},
        zodiacBased: {},
        combined: {
          score: personalityMatch,
          explanation: 'การวิเคราะห์แบบผสานระหว่างเลขศาสตร์และนักษัตรจีน',
          tips: ['ใช้จุดแข็งจากทั้งสองระบบ', 'ระวังจุดอ่อนที่ซ้ำกัน']
        }
      }
    };
  }
  
  // Placeholder implementations (จริง ๆ จะซับซ้อนกว่านี้)
  private static calculatePersonalityMatch(numerology: any, zodiac: ChineseZodiacResult): number {
    // เปรียบเทียบลักษณะบุคลิกจากทั้งสองระบบ
    return Math.floor(Math.random() * 40) + 60; // 60-100
  }
  
  private static performSWOTAnalysis(numerology: any, zodiac: ChineseZodiacResult) {
    return {
      strengths: ['ความฉลาด', 'ความมั่นใจ', 'ความเป็นผู้นำ'],
      weaknesses: ['ความใจร้อน', 'ความดื้อรั้น'],
      opportunities: ['โอกาสในการงาน', 'โอกาสในความรัก'],
      threats: ['ความเครียด', 'ปัญหาสุขภาพ']
    };
  }
  
  private static generateCombinedRecommendations(numerology: any, zodiac: ChineseZodiacResult) {
    return {
      career: ['เหมาะกับงานที่ใช้ความคิดสร้างสรรค์', 'ควรเป็นผู้นำทีม'],
      relationships: ['เลือกคู่ที่เข้าใจกัน', 'สื่อสารอย่างตรงไปตรงมา'],
      health: ['ดูแลระบบย่อยอาหาร', 'ออกกำลังกายสม่ำเสมอ'],
      finance: ['ลงทุนระยะยาว', 'ประหยัดเงินสำหรับอนาคต'],
      personal: ['พัฒนาความอดทน', 'เรียนรู้สิ่งใหม่ ๆ']
    };
  }
  
  private static analyzeTimeFrames(numerology: any, zodiac: ChineseZodiacResult) {
    return {
      favorablePeriods: [
        { period: 'เดือนหน้า', description: 'เหมาะกับการเริ่มต้นใหม่', confidence: 0.8 }
      ],
      challengingPeriods: [
        { period: 'ไตรมาสหน้า', description: 'อาจมีปัญหาด้านการงาน', advice: 'ใช้ความระมัดระวัง' }
      ]
    };
  }
  
  private static calculateNumerologyCompatibility(num1: any, num2: any): number {
    // คำนวณความเข้ากันได้ด้านเลขศาสตร์
    return Math.floor(Math.random() * 40) + 50;
  }
  
  private static calculateZodiacCompatibility(zodiac1: ChineseZodiacResult, zodiac2: ChineseZodiacResult): number {
    // ตรวจสอบความเข้ากันได้จาก compatibility data
    const animal1 = zodiac1.animal;
    const animal2 = zodiac2.animal;
    
    if (zodiac1.compatibility.best.includes(animal2)) return 90;
    if (zodiac1.compatibility.good.includes(animal2)) return 70;
    if (zodiac1.compatibility.challenging.includes(animal2)) return 40;
    
    return 60; // neutral
  }
  
  // More placeholder methods...
  private static analyzePersonalityCompatibility(p1: UnifiedProfile, p2: UnifiedProfile): number { return 75; }
  private static analyzeCommunicationCompatibility(p1: UnifiedProfile, p2: UnifiedProfile): number { return 70; }
  private static analyzeLifestyleCompatibility(p1: UnifiedProfile, p2: UnifiedProfile): number { return 80; }
  private static analyzeGoalsAlignment(p1: UnifiedProfile, p2: UnifiedProfile): number { return 65; }
  
  private static generateCompatibilityAdvice(p1: UnifiedProfile, p2: UnifiedProfile, score: number) {
    return {
      strengths: ['เข้าใจกันดี', 'มีเป้าหมายคล้ายกัน'],
      challenges: ['ต่างความคิดเห็นบางเรื่อง'],
      advice: ['สื่อสารกันอย่างเปิดใจ', 'เคารพความแตกต่าง']
    };
  }
  
  private static predictRelationshipDynamics(p1: UnifiedProfile, p2: UnifiedProfile, score: number) {
    return {
      shortTerm: 'ความสัมพันธ์จะราบรื่น',
      mediumTerm: 'อาจมีความท้าทายบ้าง',
      longTerm: 'มีโอกาสประสบความสำเร็จ'
    };
  }
  
  private static generateDailySummary(profile: UnifiedProfile, numbers: any): string { return 'วันนี้เป็นวันที่ดี'; }
  private static getDailyHighlights(profile: UnifiedProfile, numbers: any): string[] { return ['โชคดีด้านการงาน']; }
  private static getDailyWarnings(profile: UnifiedProfile, numbers: any): string[] { return ['ระวังการใช้จ่าย']; }
  private static getDailyRecommendations(profile: UnifiedProfile, numbers: any): string[] { return ['ทำสมาธิ']; }
  
  private static generateMonthlySummary(profile: UnifiedProfile, numbers: any): string { return 'เดือนนี้มีโอกาสดี'; }
  private static getMonthlyHighlights(profile: UnifiedProfile, numbers: any): string[] { return ['ความรักราบรื่น']; }
  private static getMonthlyWarnings(profile: UnifiedProfile, numbers: any): string[] { return ['ระวังสุขภาพ']; }
  private static getMonthlyRecommendations(profile: UnifiedProfile, numbers: any): string[] { return ['ออกกำลังกาย']; }
  
  private static generateYearlySummary(profile: UnifiedProfile, numbers: any): string { return 'ปีนี้เป็นปีแห่งการเปลี่ยนแปลง'; }
  private static getYearlyHighlights(profile: UnifiedProfile, numbers: any): string[] { return ['โอกาสก้าวหน้า']; }
  private static getYearlyWarnings(profile: UnifiedProfile, numbers: any): string[] { return ['ระวังความเครียด']; }
  private static getYearlyRecommendations(profile: UnifiedProfile, numbers: any): string[] { return ['วางแผนระยะยาว']; }
  
  private static calculateFavorableDates(profile: UnifiedProfile, period: string): string[] {
    return ['2024-12-25', '2024-12-31']; // placeholder
  }
}

export default UnifiedCalculationEngine;