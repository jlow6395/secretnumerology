/**
 * Chinese Zodiac Calculation Engine for numuru.com
 * ระบบคำนวณนักษัตรจีนแบบฉลาดและยั่งยืน
 * 
 * Strategy: Hybrid approach + Smart feedback collection for 300M revenue potential
 * - Pre-calculated lookup table for accuracy (1900-2050)
 * - Formula fallback for future dates
 * - Intelligent feedback system for big data collection
 * - Scalable architecture for numuru.com expansion
 */

// ข้อมูลวันตรุษจีนที่แม่นยำ (จากแหล่งที่เชื่อถือได้)
const CHINESE_NEW_YEAR_DATES: Record<number, string> = {
  1900: '1900-01-31', 1901: '1901-02-19', 1902: '1902-02-08', 1903: '1903-01-29',
  1904: '1904-02-16', 1905: '1905-02-04', 1906: '1906-01-25', 1907: '1907-02-13',
  1908: '1908-02-02', 1909: '1909-01-22', 1910: '1910-02-10', 1911: '1911-01-30',
  1912: '1912-02-18', 1913: '1913-02-06', 1914: '1914-01-26', 1915: '1915-02-14',
  1916: '1916-02-03', 1917: '1917-01-23', 1918: '1918-02-11', 1919: '1919-02-01',
  1920: '1920-02-20', 1921: '1921-02-08', 1922: '1922-01-28', 1923: '1923-02-16',
  1924: '1924-02-05', 1925: '1925-01-24', 1926: '1926-02-13', 1927: '1927-02-02',
  1928: '1928-01-23', 1929: '1929-02-10', 1930: '1930-01-30', 1931: '1931-02-17',
  1932: '1932-02-06', 1933: '1933-01-26', 1934: '1934-02-14', 1935: '1935-02-04',
  1936: '1936-01-24', 1937: '1937-02-11', 1938: '1938-01-31', 1939: '1939-02-19',
  1940: '1940-02-08', 1941: '1941-01-27', 1942: '1942-02-15', 1943: '1943-02-05',
  1944: '1944-01-25', 1945: '1945-02-13', 1946: '1946-02-02', 1947: '1947-01-22',
  1948: '1948-02-10', 1949: '1949-01-29', 1950: '1950-02-17', 1951: '1951-02-06',
  1952: '1952-01-27', 1953: '1953-02-14', 1954: '1954-02-03', 1955: '1955-01-24',
  1956: '1956-02-12', 1957: '1957-01-31', 1958: '1958-02-18', 1959: '1959-02-08',
  1960: '1960-01-28', 1961: '1961-02-15', 1962: '1962-02-05', 1963: '1963-01-25',
  1964: '1964-02-13', 1965: '1965-02-02', 1966: '1966-01-21', 1967: '1967-02-09',
  1968: '1968-01-30', 1969: '1969-02-17', 1970: '1970-02-06', 1971: '1971-01-27',
  1972: '1972-02-15', 1973: '1973-02-03', 1974: '1974-01-23', 1975: '1975-02-11',
  1976: '1976-01-31', 1977: '1977-02-18', 1978: '1978-02-07', 1979: '1979-01-28',
  1980: '1980-02-16', 1981: '1981-02-05', 1982: '1982-01-25', 1983: '1983-02-13',
  1984: '1984-02-02', 1985: '1985-02-20', 1986: '1986-02-09', 1987: '1987-01-29',
  1988: '1988-02-17', 1989: '1989-02-06', 1990: '1990-01-27', 1991: '1991-02-15',
  1992: '1992-02-04', 1993: '1993-01-23', 1994: '1994-02-10', 1995: '1995-01-31',
  1996: '1996-02-19', 1997: '1997-02-07', 1998: '1998-01-28', 1999: '1999-02-16',
  2000: '2000-02-05', 2001: '2001-01-24', 2002: '2002-02-12', 2003: '2003-02-01',
  2004: '2004-01-22', 2005: '2005-02-09', 2006: '2006-01-29', 2007: '2007-02-18',
  2008: '2008-02-07', 2009: '2009-01-26', 2010: '2010-02-14', 2011: '2011-02-03',
  2012: '2012-01-23', 2013: '2013-02-10', 2014: '2014-01-31', 2015: '2015-02-19',
  2016: '2016-02-08', 2017: '2017-01-28', 2018: '2018-02-16', 2019: '2019-02-05',
  2020: '2020-01-25', 2021: '2021-02-12', 2022: '2022-02-01', 2023: '2023-01-22',
  2024: '2024-02-10', 2025: '2025-01-29', 2026: '2026-02-17', 2027: '2027-02-06',
  2028: '2028-01-26', 2029: '2029-02-13', 2030: '2030-02-03', 2031: '2031-01-23',
  2032: '2032-02-11', 2033: '2033-01-31', 2034: '2034-02-19', 2035: '2035-02-08',
  2036: '2036-01-28', 2037: '2037-02-15', 2038: '2038-02-04', 2039: '2039-01-24',
  2040: '2040-02-12', 2041: '2041-02-01', 2042: '2042-01-22', 2043: '2043-02-10',
  2044: '2044-01-30', 2045: '2045-02-17', 2046: '2046-02-06', 2047: '2047-01-26',
  2048: '2048-02-14', 2049: '2049-02-02', 2050: '2050-01-23'
};

// 12 สัตว์นักษัตรจีน (เรียงตามลำดับ)
const ZODIAC_ANIMALS = [
  'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake',
  'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'
] as const;

// ชื่อภาษาไทย
const ZODIAC_ANIMALS_TH = [
  'หนู', 'วัว', 'เสือ', 'กระต่าย', 'มังกร', 'งู',
  'ม้า', 'แพะ', 'ลิง', 'ไก่', 'หมา', 'หมู'
] as const;

// องค์ประกอบ 5 ธาตุ (10 ปีต่อรอบ)
const ELEMENTS = ['Metal', 'Water', 'Wood', 'Fire', 'Earth'] as const;
const ELEMENTS_TH = ['โลหะ', 'น้ำ', 'ไม้', 'ไฟ', 'ดิน'] as const;

// ลักษณะ Yin/Yang (2 ปีต่อรอบ)
const POLARITY = ['Yang', 'Yin'] as const;
const POLARITY_TH = ['หยาง', 'หยิน'] as const;

// Feedback types for intelligent data collection
export type FeedbackType = 
  | 'accuracy_rating'    // ความแม่นยำของการทำนาย (1-5)
  | 'personality_match'  // ความตรงกับบุคลิก (1-5)
  | 'prediction_outcome' // ผลลัพธ์การทำนาย (true/false)
  | 'feature_usage'      // การใช้งานฟีเจอร์
  | 'user_satisfaction'  // ความพึงพอใจ (1-5)
  | 'recommendation'     // คำแนะนำ (helpful/not_helpful)
  | 'compatibility_accuracy' // ความแม่นยำของความเข้ากัน
  | 'prediction_timing'  // ความแม่นยำของเวลาทำนาย
  | 'cultural_relevance' // ความเหมาะสมทางวัฒนธรรม
  | 'app_engagement';    // การมีส่วนร่วมในแอป

export interface SmartFeedback {
  id: string;
  userId: string;
  sessionId: string;
  type: FeedbackType;
  value: number | boolean | string;
  context: {
    zodiacAnimal: string;
    element: string;
    predictionType: string;
    userAge?: number;
    userGender?: string;
    userLocation?: string;
    deviceType?: string;
    timestamp: string;
    interactionDuration?: number;
  };
  metadata: {
    appVersion: string;
    feature: string;
    source: 'explicit' | 'implicit' | 'behavioral';
    confidence: number; // 0-1
  };
}

export interface ChineseZodiacResult {
  // ข้อมูลพื้นฐาน
  animal: typeof ZODIAC_ANIMALS[number];
  animalTh: typeof ZODIAC_ANIMALS_TH[number];
  element: typeof ELEMENTS[number];
  elementTh: typeof ELEMENTS_TH[number];
  polarity: typeof POLARITY[number];
  polarityTh: typeof POLARITY_TH[number];
  
  // ปีจีน
  chineseYear: number;
  chineseNewYearDate: string;
  
  // คำอธิบายพื้นฐาน
  description: string;
  personality: string[];
  luckyNumbers: number[];
  luckyColors: string[];
  
  // ความเข้ากันได้
  compatibility: {
    best: string[];
    good: string[];
    challenging: string[];
  };
  
  // ข้อมูลเพิ่มเติม
  emoji: string;
  yearRange: string;
  
  // AI-enhanced predictions (สำหรับ Premium)
  predictions?: {
    career: string[];
    love: string[];
    health: string[];
    finance: string[];
    general: string[];
  };
  
  // Personalized insights (จาก big data)
  insights?: {
    popularityScore: number; // ความนิยมของนักษัตรนี้
    accuracyRating: number;  // คะแนนความแม่นยำจาก feedback
    userSimilarity: number;  // ความคล้ายกับผู้ใช้คนอื่น
    trendingTopics: string[]; // หัวข้อที่กำลังเป็นที่นิยม
  };
  
  // Feedback collection points
  feedbackPrompts?: {
    questions: string[];
    triggers: string[];
  };
}

export class ChineseZodiacEngine {
  
  /**
   * คำนวณนักษัตรจีนจากวันเกิด พร้อมระบบ feedback ที่ชาญฉลาด
   * @param dateOfBirth วันเกิดในรูปแบบ 'YYYY-MM-DD'
   * @param options ตัวเลือกเพิ่มเติม
   * @returns ผลลัพธ์การคำนวณนักษัตรจีน
   */
  static calculateZodiac(
    dateOfBirth: string, 
    options: {
      includePredictions?: boolean;
      includeInsights?: boolean;
      userId?: string;
      sessionId?: string;
    } = {}
  ): ChineseZodiacResult {
    if (!dateOfBirth) {
      throw new Error('Date of birth is required');
    }

    const birthDate = new Date(dateOfBirth);
    const birthYear = birthDate.getFullYear();
    
    // หาปีจีนที่ถูกต้อง
    const chineseYear = this.getChineseYear(dateOfBirth);
    const chineseNewYearDate = this.getChineseNewYearDate(chineseYear);
    
    // คำนวณดัชนีสัตว์ (1900 = ปีหนู = ดัชนี 0)
    const animalIndex = (chineseYear - 1900) % 12;
    const animal = ZODIAC_ANIMALS[animalIndex];
    const animalTh = ZODIAC_ANIMALS_TH[animalIndex];
    
    // คำนวณธาตุ (10 ปีต่อรอบ)
    const elementIndex = Math.floor(((chineseYear - 1900) % 10) / 2);
    const element = ELEMENTS[elementIndex];
    const elementTh = ELEMENTS_TH[elementIndex];
    
    // คำนวณ Yin/Yang
    const polarityIndex = (chineseYear - 1900) % 2;
    const polarity = POLARITY[polarityIndex];
    const polarityTh = POLARITY_TH[polarityIndex];
    
    const baseResult: ChineseZodiacResult = {
      animal,
      animalTh,
      element,
      elementTh,
      polarity,
      polarityTh,
      chineseYear,
      chineseNewYearDate,
      description: this.getAnimalDescription(animal),
      personality: this.getPersonalityTraits(animal),
      luckyNumbers: this.getLuckyNumbers(animal),
      luckyColors: this.getLuckyColors(animal),
      compatibility: this.getCompatibility(animal),
      emoji: this.getAnimalEmoji(animal),
      yearRange: this.getYearRange(chineseYear, animal)
    };

    // เพิ่ม AI predictions สำหรับ Premium users
    if (options.includePredictions) {
      baseResult.predictions = this.generatePredictions(animal, element, new Date().getFullYear());
    }

    // เพิ่ม insights จาก big data
    if (options.includeInsights) {
      baseResult.insights = this.getDataDrivenInsights(animal, element);
    }

    // เพิ่ม feedback prompts ที่ชาญฉลาด
    baseResult.feedbackPrompts = this.generateSmartFeedbackPrompts(animal, options.userId);

    // บันทึกการใช้งานสำหรับ analytics
    if (options.userId && options.sessionId) {
      this.trackUsage(options.userId, options.sessionId, animal, element);
    }

    return baseResult;
  }
  
  /**
   * หาปีจีนที่ถูกต้องตามวันเกิด
   */
  private static getChineseYear(dateOfBirth: string): number {
    const birthDate = new Date(dateOfBirth);
    const birthYear = birthDate.getFullYear();
    
    // ตรวจสอบว่าเกิดก่อนหรือหลังตรุษจีน
    const newYearDate = this.getChineseNewYearDate(birthYear);
    
    if (birthDate < new Date(newYearDate)) {
      // เกิดก่อนตรุษจีน = ยังเป็นปีจีนก่อนหน้า
      return birthYear - 1;
    } else {
      // เกิดหลังตรุษจีน = เป็นปีจีนปัจจุบัน
      return birthYear;
    }
  }
  
  /**
   * หาวันตรุษจีนของปีที่กำหนด
   */
  private static getChineseNewYearDate(year: number): string {
    // ใช้ข้อมูลจากตารางที่แม่นยำ
    if (CHINESE_NEW_YEAR_DATES[year]) {
      return CHINESE_NEW_YEAR_DATES[year];
    }
    
    // สำหรับปีที่ไม่มีในตาราง ใช้สูตรประมาณ
    return this.estimateChineseNewYear(year);
  }
  
  /**
   * ประมาณวันตรุษจีนสำหรับปีที่ไม่มีในตาราง
   */
  private static estimateChineseNewYear(year: number): string {
    // สูตรประมาณการ (ไม่แม่นยำ 100% แต่ใช้ได้สำหรับปีไกล ๆ)
    const nearestYear = Object.keys(CHINESE_NEW_YEAR_DATES)
      .map(y => parseInt(y))
      .reduce((prev, curr) => 
        Math.abs(curr - year) < Math.abs(prev - year) ? curr : prev
      );
    
    const yearDiff = year - nearestYear;
    const baseDate = new Date(CHINESE_NEW_YEAR_DATES[nearestYear]);
    
    // เพิ่ม/ลบวันโดยประมาณ (ปีจีน ≈ 354 วัน)
    const estimatedDays = yearDiff * 354;
    baseDate.setDate(baseDate.getDate() + estimatedDays);
    
    // ปรับให้อยู่ในช่วง 21 ม.ค. - 20 ก.พ.
    if (baseDate.getMonth() === 0 && baseDate.getDate() < 21) {
      baseDate.setDate(baseDate.getDate() + 30);
    } else if (baseDate.getMonth() === 1 && baseDate.getDate() > 20) {
      baseDate.setDate(baseDate.getDate() - 30);
    }
    
    return baseDate.toISOString().split('T')[0];
  }

  /**
   * สร้าง AI predictions ตามสัตว์และธาตุ
   */
  private static generatePredictions(animal: string, element: string, currentYear: number): ChineseZodiacResult['predictions'] {
    // ระบบ AI ที่จะเรียนรู้จาก feedback และปรับปรุงการทำนาย
    const predictions = {
      career: this.getCareerPredictions(animal, element, currentYear),
      love: this.getLovePredictions(animal, element, currentYear),
      health: this.getHealthPredictions(animal, element, currentYear),
      finance: this.getFinancePredictions(animal, element, currentYear),
      general: this.getGeneralPredictions(animal, element, currentYear)
    };

    return predictions;
  }

  /**
   * ดึง insights จาก big data ของผู้ใช้
   */
  private static getDataDrivenInsights(animal: string, element: string): ChineseZodiacResult['insights'] {
    // ข้อมูลจะมาจาก database ที่เก็บ feedback ของผู้ใช้จำนวนมาก
    return {
      popularityScore: this.calculatePopularityScore(animal),
      accuracyRating: this.getAccuracyRating(animal, element),
      userSimilarity: this.calculateUserSimilarity(animal, element),
      trendingTopics: this.getTrendingTopics(animal)
    };
  }

  /**
   * สร้าง feedback prompts ที่ชาญฉลาด
   */
  private static generateSmartFeedbackPrompts(animal: string, userId?: string): ChineseZodiacResult['feedbackPrompts'] {
    // ระบบจะเลือก prompts ที่เหมาะสมตามบริบท
    const questions = [
      'ลักษณะนิสัยตรงกับคุณมากแค่ไหน?',
      'เลขมงคลช่วยให้คุณโชคดีจริงหรือไม่?',
      'คำทำนายเรื่องความรักแม่นยำไหม?',
      'คำแนะนำด้านการงานมีประโยชน์ไหม?'
    ];

    const triggers = [
      'after_reading_personality',
      'after_checking_compatibility', 
      'after_viewing_predictions',
      'before_leaving_app'
    ];

    return { questions, triggers };
  }

  /**
   * บันทึกการใช้งานสำหรับ analytics
   */
  private static trackUsage(userId: string, sessionId: string, animal: string, element: string): void {
    // บันทึกข้อมูลการใช้งานเพื่อวิเคราะห์พฤติกรรม
    const usageData = {
      userId,
      sessionId,
      animal,
      element,
      timestamp: new Date().toISOString(),
      feature: 'zodiac_calculation'
    };

    // ส่งข้อมูลไป analytics service
    // this.sendToAnalytics(usageData);
  }

  /**
   * ระบบ feedback ที่ชาญฉลาด
   */
  static collectSmartFeedback(feedback: SmartFeedback): void {
    // ประมวลผล feedback และปรับปรุงระบบ AI
    this.processFeedback(feedback);
    
    // บันทึกลง database สำหรับ machine learning
    this.storeFeedbackForML(feedback);
    
    // อัปเดต accuracy ratings แบบ real-time
    this.updateAccuracyRatings(feedback);
  }

  private static processFeedback(feedback: SmartFeedback): void {
    // ประมวลผล feedback เพื่อปรับปรุงการทำนาย
    switch (feedback.type) {
      case 'accuracy_rating':
        this.updatePredictionAccuracy(feedback);
        break;
      case 'personality_match':
        this.updatePersonalityMatching(feedback);
        break;
      case 'prediction_outcome':
        this.updatePredictionOutcomes(feedback);
        break;
      // ... other feedback types
    }
  }

  private static storeFeedbackForML(feedback: SmartFeedback): void {
    // บันทึกข้อมูลสำหรับ machine learning
    // ข้อมูลจะถูกใช้ในการปรับปรุงอัลกอริทึมการทำนาย
  }

  private static updateAccuracyRatings(feedback: SmartFeedback): void {
    // อัปเดตคะแนนความแม่นยำแบบ real-time
  }

  // Helper methods สำหรับ predictions และ insights
  private static getCareerPredictions(animal: string, element: string, year: number): string[] {
    // AI-generated career predictions based on zodiac + current trends
    return ['การงานมีโอกาสก้าวหน้า', 'ควรระวังการตัดสินใจสำคัญ'];
  }

  private static getLovePredictions(animal: string, element: string, year: number): string[] {
    return ['ความรักราบรื่น', 'อาจมีคนใหม่เข้ามา'];
  }

  private static getHealthPredictions(animal: string, element: string, year: number): string[] {
    return ['สุขภาพแข็งแรง', 'ควรดูแลระบบย่อยอาหาร'];
  }

  private static getFinancePredictions(animal: string, element: string, year: number): string[] {
    return ['การเงินมั่นคง', 'มีโอกาสลงทุนที่ดี'];
  }

  private static getGeneralPredictions(animal: string, element: string, year: number): string[] {
    return ['ปีนี้เป็นปีที่ดี', 'ควรใช้ความระมัดระวัง'];
  }

  private static calculatePopularityScore(animal: string): number {
    // คำนวณจากจำนวนผู้ใช้ที่เป็นนักษัตรนี้
    return Math.random() * 100; // placeholder
  }

  private static getAccuracyRating(animal: string, element: string): number {
    // คะแนนความแม่นยำจาก feedback ของผู้ใช้
    return Math.random() * 5; // placeholder
  }

  private static calculateUserSimilarity(animal: string, element: string): number {
    // ความคล้ายกับผู้ใช้คนอื่นที่มีนักษัตรเดียวกัน
    return Math.random() * 100; // placeholder
  }

  private static getTrendingTopics(animal: string): string[] {
    // หัวข้อที่กำลังเป็นที่นิยมสำหรับนักษัตรนี้
    return ['ความรัก', 'การงาน', 'สุขภาพ'];
  }

  private static updatePredictionAccuracy(feedback: SmartFeedback): void {
    // อัปเดตความแม่นยำของการทำนาย
  }

  private static updatePersonalityMatching(feedback: SmartFeedback): void {
    // อัปเดตการจับคู่บุคลิกภาพ
  }

  private static updatePredictionOutcomes(feedback: SmartFeedback): void {
    // อัปเดตผลลัพธ์การทำนาย
  }

  // ฟังก์ชันพื้นฐานเดิม (ย่อเพื่อประหยัดพื้นที่)
  private static getAnimalDescription(animal: string): string {
    const descriptions: Record<string, string> = {
      'Rat': 'ฉลาด มีไหวพริบ และปรับตัวได้ดี',
      'Ox': 'อดทน มั่นคง และเชื่อถือได้',
      'Tiger': 'กล้าหาญ มีความเป็นผู้นำ และมีเสน่ห์',
      'Rabbit': 'อ่อนโยน มีความเมตตา และรักสันติ',
      'Dragon': 'ทรงพลัง มีความมั่นใจ และโชคดี',
      'Snake': 'ฉลาด ลึกลับ และมีสัญชาตญาณดี',
      'Horse': 'มีพลัง รักอิสระ และมีความกระตือรือร้น',
      'Goat': 'อ่อนโยน มีความคิดสร้างสรรค์ และรักสันติ',
      'Monkey': 'ฉลาด มีไหวพริบ และชอบเล่นตลก',
      'Rooster': 'มั่นใจ ตรงต่อเวลา และมีความภาคภูมิใจ',
      'Dog': 'ซื่อสัตย์ เชื่อถือได้ และมีความรับผิดชอบ',
      'Pig': 'ใจดี มีความเมตตา และรักความสุข'
    };
    return descriptions[animal] || '';
  }
  
  private static getPersonalityTraits(animal: string): string[] {
    const traits: Record<string, string[]> = {
      'Rat': ['ฉลาด', 'มีไหวพริบ', 'ปรับตัวได้ดี', 'มีเสน่ห์'],
      'Ox': ['อดทน', 'มั่นคง', 'เชื่อถือได้', 'ขยัน'],
      'Tiger': ['กล้าหาญ', 'มีความเป็นผู้นำ', 'มีเสน่ห์', 'แข็งแกร่ง'],
      'Rabbit': ['อ่อนโยน', 'มีความเมตตา', 'รักสันติ', 'ละเอียดอ่อน'],
      'Dragon': ['ทรงพลัง', 'มั่นใจ', 'โชคดี', 'มีความคิดสร้างสรรค์'],
      'Snake': ['ฉลาด', 'ลึกลับ', 'มีสัญชาตญาณดี', 'เก็บตัว'],
      'Horse': ['มีพลัง', 'รักอิสระ', 'กระตือรือร้น', 'ผจญภัย'],
      'Goat': ['อ่อนโยน', 'มีความคิดสร้างสรรค์', 'รักสันติ', 'ศิลปิน'],
      'Monkey': ['ฉลาด', 'มีไหวพริบ', 'ตลก', 'เปลี่ยนแปลงได้'],
      'Rooster': ['มั่นใจ', 'ตรงต่อเวลา', 'ภาคภูมิใจ', 'มีระเบียบ'],
      'Dog': ['ซื่อสัตย์', 'เชื่อถือได้', 'รับผิดชอบ', 'ยุติธรรม'],
      'Pig': ['ใจดี', 'เมตตา', 'รักความสุข', 'มีน้ำใจ']
    };
    return traits[animal] || [];
  }
  
  private static getLuckyNumbers(animal: string): number[] {
    const numbers: Record<string, number[]> = {
      'Rat': [2, 3], 'Ox': [1, 9], 'Tiger': [1, 3, 4], 'Rabbit': [3, 4, 6],
      'Dragon': [1, 6, 7], 'Snake': [2, 8, 9], 'Horse': [2, 3, 7], 'Goat': [3, 4, 9],
      'Monkey': [1, 7, 8], 'Rooster': [5, 7, 8], 'Dog': [3, 4, 9], 'Pig': [2, 5, 8]
    };
    return numbers[animal] || [];
  }
  
  private static getLuckyColors(animal: string): string[] {
    const colors: Record<string, string[]> = {
      'Rat': ['น้ำเงิน', 'ทอง', 'เขียว'],
      'Ox': ['น้ำเงิน', 'เหลือง', 'เขียว'],
      'Tiger': ['น้ำเงิน', 'เทา', 'ส้ม'],
      'Rabbit': ['แดง', 'ชมพู', 'ม่วง', 'น้ำเงิน'],
      'Dragon': ['ทอง', 'เงิน', 'เทา'],
      'Snake': ['แดง', 'เหลือง', 'ดำ'],
      'Horse': ['เหลือง', 'เขียว'],
      'Goat': ['เขียว', 'แดง', 'ม่วง'],
      'Monkey': ['ขาว', 'น้ำเงิน', 'ทอง'],
      'Rooster': ['ทอง', 'น้ำตาล', 'เหลือง'],
      'Dog': ['แดง', 'เขียว', 'ม่วง'],
      'Pig': ['เหลือง', 'เทา', 'น้ำตาล', 'ทอง']
    };
    return colors[animal] || [];
  }
  
  private static getCompatibility(animal: string): { best: string[], good: string[], challenging: string[] } {
    const compatibility: Record<string, { best: string[], good: string[], challenging: string[] }> = {
      'Rat': { best: ['Dragon', 'Monkey'], good: ['Ox', 'Rabbit'], challenging: ['Horse', 'Rooster'] },
      'Ox': { best: ['Snake', 'Rooster'], good: ['Rat', 'Rabbit'], challenging: ['Tiger', 'Dragon', 'Horse', 'Goat'] },
      'Tiger': { best: ['Horse', 'Dog'], good: ['Dragon', 'Pig'], challenging: ['Ox', 'Tiger', 'Snake', 'Monkey'] },
      'Rabbit': { best: ['Goat', 'Pig'], good: ['Ox', 'Dragon', 'Snake'], challenging: ['Rat', 'Rooster'] },
      'Dragon': { best: ['Rat', 'Monkey', 'Rooster'], good: ['Tiger', 'Rabbit', 'Horse'], challenging: ['Ox', 'Dragon', 'Dog'] },
      'Snake': { best: ['Ox', 'Rooster'], good: ['Rabbit', 'Dragon'], challenging: ['Tiger', 'Monkey', 'Pig'] },
      'Horse': { best: ['Tiger', 'Goat', 'Dog'], good: ['Dragon', 'Monkey', 'Rooster'], challenging: ['Rat', 'Ox', 'Horse'] },
      'Goat': { best: ['Rabbit', 'Horse', 'Pig'], good: ['Tiger', 'Monkey', 'Rooster'], challenging: ['Ox', 'Dog'] },
      'Monkey': { best: ['Rat', 'Dragon'], good: ['Horse', 'Goat', 'Dog'], challenging: ['Tiger', 'Snake', 'Pig'] },
      'Rooster': { best: ['Ox', 'Snake'], good: ['Dragon', 'Horse', 'Goat'], challenging: ['Rat', 'Rabbit', 'Dog'] },
      'Dog': { best: ['Tiger', 'Horse'], good: ['Monkey', 'Pig'], challenging: ['Dragon', 'Goat', 'Rooster'] },
      'Pig': { best: ['Rabbit', 'Goat'], good: ['Tiger', 'Dog'], challenging: ['Snake', 'Monkey'] }
    };
    return compatibility[animal] || { best: [], good: [], challenging: [] };
  }
  
  private static getAnimalEmoji(animal: string): string {
    const emojis: Record<string, string> = {
      'Rat': '🐭', 'Ox': '🐂', 'Tiger': '🐅', 'Rabbit': '🐰',
      'Dragon': '🐲', 'Snake': '🐍', 'Horse': '🐴', 'Goat': '🐐',
      'Monkey': '🐵', 'Rooster': '🐓', 'Dog': '🐕', 'Pig': '🐷'
    };
    return emojis[animal] || '🐾';
  }
  
  private static getYearRange(chineseYear: number, animal: string): string {
    const baseYear = chineseYear;
    const years = [];
    
    if (baseYear - 12 >= 1900) years.push(baseYear - 12);
    years.push(baseYear);
    if (baseYear + 12 <= 2050) years.push(baseYear + 12);
    
    return years.join(', ');
  }

  /**
   * ฟังก์ชันสำหรับ Calendar Integration (รองรับการขยายในอนาคต)
   */
  static getChineseCalendarInfo(date: string) {
    const zodiac = this.calculateZodiac(date);
    return {
      isChineseNewYear: date === zodiac.chineseNewYearDate,
      chineseYear: zodiac.chineseYear,
      animal: zodiac.animal,
      element: zodiac.element,
      // สามารถเพิ่มข้อมูลปฏิทินจีนอื่น ๆ เช่น เทศกาล, วันดี
    };
  }
}

// Export types และ constants สำหรับใช้งานในส่วนอื่น
export type ZodiacAnimal = typeof ZODIAC_ANIMALS[number];
export type ZodiacElement = typeof ELEMENTS[number];
export { ZODIAC_ANIMALS, ZODIAC_ANIMALS_TH, ELEMENTS, ELEMENTS_TH };