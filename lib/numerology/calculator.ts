// ==================== NUMEROLOGY CALCULATOR ====================

import { 
  PYTHAGOREAN_VALUES, 
  VOWELS, 
  CONSONANTS, 
  MASTER_NUMBERS,
  NUMBER_MEANINGS,
  PERSONAL_YEAR_MEANINGS
} from './constants';
import { 
  NumerologyResult, 
  LifePathResult, 
  ExpressionResult,
  HeartDesireResult,
  PersonalityResult,
  PersonalCycleResult,
  NumerologyProfile,
  NumerologyInput,
  DateInput,
  CompatibilityAnalysis,
  LoveCompatibility,
  WorkCompatibility,
  FamilyCompatibility,
  CompatibilityResult
} from './types';

/**
 * ==================== UTILITY FUNCTIONS ====================
 */

/**
 * Reduces a number to a single digit or master number
 */
export function reduceToSingleDigit(num: number): number {
  if (MASTER_NUMBERS.includes(num)) {
    return num;
  }
  
  while (num > 9) {
    num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    if (MASTER_NUMBERS.includes(num)) {
      return num;
    }
  }
  
  return num;
}

/**
 * Converts name to numbers using Pythagorean system
 */
export function nameToNumbers(name: string, filterLetters?: string[]): number[] {
  const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
  const letters = filterLetters ? 
    cleanName.split('').filter(letter => filterLetters.includes(letter)) :
    cleanName.split('');
    
  return letters.map(letter => PYTHAGOREAN_VALUES[letter] || 0);
}

/**
 * Parses date string to DateInput
 */
export function parseDate(dateString: string): DateInput {
  const [year, month, day] = dateString.split('-').map(Number);
  
  if (!year || !month || !day) {
    throw new Error('Invalid date format. Use YYYY-MM-DD');
  }
  
  return { day, month, year };
}

/**
 * Validates input data
 */
export function validateInput(input: NumerologyInput): void {
  if (!input.fullName || input.fullName.trim().length < 2) {
    throw new Error('Full name must be at least 2 characters long');
  }
  
  if (!input.dateOfBirth || !/^\d{4}-\d{2}-\d{2}$/.test(input.dateOfBirth)) {
    throw new Error('Date of birth must be in YYYY-MM-DD format');
  }
  
  const date = parseDate(input.dateOfBirth);
  if (date.year < 1900 || date.year > new Date().getFullYear()) {
    throw new Error('Invalid birth year');
  }
  
  if (date.month < 1 || date.month > 12) {
    throw new Error('Invalid birth month');
  }
  
  if (date.day < 1 || date.day > 31) {
    throw new Error('Invalid birth day');
  }
}

/**
 * ==================== CORE CALCULATIONS ====================
 */

/**
 * Calculates Life Path Number
 */
export function calculateLifePath(dateOfBirth: string): LifePathResult {
  const date = parseDate(dateOfBirth);
  
  // Sum all digits from date
  const allDigits = [
    ...date.day.toString().split('').map(Number),
    ...date.month.toString().split('').map(Number),
    ...date.year.toString().split('').map(Number)
  ];
  
  const rawSum = allDigits.reduce((sum, digit) => sum + digit, 0);
  const number = reduceToSingleDigit(rawSum);
  const meaning = NUMBER_MEANINGS[number];
  
  return {
    type: 'life_path',
    number,
    rawSum,
    description: meaning.name,
    meaning: meaning.description,
    calculation: `${date.day}/${date.month}/${date.year} → ${allDigits.join('+')} = ${rawSum} → ${number}`,
    challenges: meaning.challenges,
    opportunities: meaning.opportunities
  };
}

/**
 * Calculates Expression Number (Destiny Number)
 */
export function calculateExpression(fullName: string): ExpressionResult {
  const numbers = nameToNumbers(fullName);
  const rawSum = numbers.reduce((sum, num) => sum + num, 0);
  const number = reduceToSingleDigit(rawSum);
  const meaning = NUMBER_MEANINGS[number];
  
  return {
    type: 'expression',
    number,
    rawSum,
    description: meaning.name,
    meaning: meaning.description,
    calculation: `${fullName} → ${numbers.join('+')} = ${rawSum} → ${number}`,
    talents: meaning.opportunities,
    goals: [`พัฒนา${meaning.keyword}`, ...meaning.opportunities.slice(0, 2)]
  };
}

/**
 * Calculates Heart's Desire Number (Soul Urge)
 */
export function calculateHeartDesire(fullName: string): HeartDesireResult {
  const numbers = nameToNumbers(fullName, VOWELS);
  const rawSum = numbers.reduce((sum, num) => sum + num, 0);
  const number = reduceToSingleDigit(rawSum);
  const meaning = NUMBER_MEANINGS[number];
  
  return {
    type: 'heart_desire',
    number,
    rawSum,
    description: meaning.name,
    meaning: meaning.description,
    calculation: `สระใน ${fullName} → ${numbers.join('+')} = ${rawSum} → ${number}`,
    innerMotivation: meaning.keyword,
    soulUrge: meaning.description
  };
}

/**
 * Calculates Personality Number
 */
export function calculatePersonality(fullName: string): PersonalityResult {
  const numbers = nameToNumbers(fullName, CONSONANTS);
  const rawSum = numbers.reduce((sum, num) => sum + num, 0);
  const number = reduceToSingleDigit(rawSum);
  const meaning = NUMBER_MEANINGS[number];
  
  return {
    type: 'personality',
    number,
    rawSum,
    description: meaning.name,
    meaning: meaning.description,
    calculation: `พยัญชนะใน ${fullName} → ${numbers.join('+')} = ${rawSum} → ${number}`,
    outerPersonality: meaning.keyword,
    firstImpression: meaning.description
  };
}

/**
 * Calculates Personal Year Number
 */
export function calculatePersonalYear(dateOfBirth: string, targetYear?: number): PersonalCycleResult {
  const date = parseDate(dateOfBirth);
  const year = targetYear || new Date().getFullYear();
  
  const daySum = reduceToSingleDigit(date.day);
  const monthSum = reduceToSingleDigit(date.month);
  const yearSum = reduceToSingleDigit(year);
  
  const number = reduceToSingleDigit(daySum + monthSum + yearSum);
  const meaning = PERSONAL_YEAR_MEANINGS[number];
  
  return {
    type: 'personal_year',
    number,
    description: meaning.theme,
    meaning: meaning.advice,
    calculation: `${date.day}+${date.month}+${year} → ${daySum}+${monthSum}+${yearSum} = ${number}`,
    period: `ปี ${year}`,
    energy: meaning.energy,
    advice: meaning.advice
  };
}

/**
 * Calculates Personal Month Number
 */
export function calculatePersonalMonth(dateOfBirth: string, targetYear?: number, targetMonth?: number): PersonalCycleResult {
  const personalYear = calculatePersonalYear(dateOfBirth, targetYear);
  const month = targetMonth || (new Date().getMonth() + 1);
  
  const number = reduceToSingleDigit(personalYear.number + month);
  
  return {
    type: 'personal_month',
    number,
    description: `เดือนส่วนตัว`,
    meaning: `พลังงานของเดือนนี้เน้นไปที่ ${NUMBER_MEANINGS[number]?.keyword || 'การพัฒนาตนเอง'}`,
    calculation: `Personal Year ${personalYear.number} + เดือน ${month} = ${number}`,
    period: `เดือน ${month}/${targetYear || new Date().getFullYear()}`,
    energy: `พลังงาน${NUMBER_MEANINGS[number]?.name || ''}`,
    advice: NUMBER_MEANINGS[number]?.description || 'โฟกัสที่การพัฒนาตนเอง'
  };
}

/**
 * Calculates Personal Day Number
 */
export function calculatePersonalDay(dateOfBirth: string, targetYear?: number, targetMonth?: number, targetDay?: number): PersonalCycleResult {
  const personalMonth = calculatePersonalMonth(dateOfBirth, targetYear, targetMonth);
  const day = targetDay || new Date().getDate();
  
  const number = reduceToSingleDigit(personalMonth.number + day);
  
  return {
    type: 'personal_day',
    number,
    description: `วันส่วนตัว`,
    meaning: `พลังงานของวันนี้เหมาะสำหรับ ${NUMBER_MEANINGS[number]?.keyword || 'การทำกิจกรรมใหม่'}`,
    calculation: `Personal Month ${personalMonth.number} + วัน ${day} = ${number}`,
    period: `วันที่ ${day}/${targetMonth || new Date().getMonth() + 1}/${targetYear || new Date().getFullYear()}`,
    energy: `พลังงาน${NUMBER_MEANINGS[number]?.name || ''}`,
    advice: NUMBER_MEANINGS[number]?.description || 'ใช้วันนี้ในการพัฒนาตนเอง'
  };
}

/**
 * Calculates Sun Number (Day + Month)
 */
export function calculateSunNumber(dateOfBirth: string): NumerologyResult {
  const date = parseDate(dateOfBirth);
  
  const dayDigits = date.day.toString().split('').map(Number);
  const monthDigits = date.month.toString().split('').map(Number);
  
  const rawSum = [...dayDigits, ...monthDigits].reduce((sum, digit) => sum + digit, 0);
  const number = reduceToSingleDigit(rawSum);
  const meaning = NUMBER_MEANINGS[number];
  
  return {
    number,
    rawSum,
    description: `Sun Number - ${meaning.name}`,
    meaning: `บุคลิกภาพภายนอก: ${meaning.description}`,
    calculation: `วัน ${date.day} + เดือน ${date.month} → ${[...dayDigits, ...monthDigits].join('+')} = ${rawSum} → ${number}`
  };
}

/**
 * Calculates Talent Number
 */
export function calculateTalentNumber(dateOfBirth: string): NumerologyResult {
  const date = parseDate(dateOfBirth);
  
  const allDigits = [
    ...date.day.toString().split('').map(Number),
    ...date.month.toString().split('').map(Number),
    ...date.year.toString().split('').map(Number)
  ];
  
  const rawSum = allDigits.reduce((sum, digit) => sum + digit, 0);
  
  return {
    number: rawSum,
    description: `Talent Number`,
    meaning: `พรสวรรค์ที่ซ่อนอยู่: ${rawSum} แสดงถึงศักยภาพที่ยังไม่ได้พัฒนา`,
    calculation: `${date.day}/${date.month}/${date.year} → ${allDigits.join('+')} = ${rawSum}`
  };
}

/**
 * Calculates Maturity Number
 */
export function calculateMaturityNumber(lifePath: number, expression: number): NumerologyResult {
  const rawSum = lifePath + expression;
  const number = reduceToSingleDigit(rawSum);
  const meaning = NUMBER_MEANINGS[number];
  
  return {
    number,
    rawSum,
    description: `Maturity Number - ${meaning.name}`,
    meaning: `เป้าหมายในวัยผู้ใหญ่: ${meaning.description}`,
    calculation: `Life Path ${lifePath} + Expression ${expression} = ${rawSum} → ${number}`
  };
}

/**
 * ==================== MAIN CALCULATOR ====================
 */

/**
 * Calculates complete numerology profile
 */
export function calculateNumerologyProfile(input: NumerologyInput): NumerologyProfile {
  validateInput(input);
  
  const lifePath = calculateLifePath(input.dateOfBirth);
  const expression = calculateExpression(input.fullName);
  const heartDesire = calculateHeartDesire(input.fullName);
  const personality = calculatePersonality(input.fullName);
  
  const currentDate = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  };
  
  const personalYear = calculatePersonalYear(input.dateOfBirth, currentDate.year);
  const personalMonth = calculatePersonalMonth(input.dateOfBirth, currentDate.year, currentDate.month);
  const personalDay = calculatePersonalDay(input.dateOfBirth, currentDate.year, currentDate.month, currentDate.day);
  
  const sunNumber = calculateSunNumber(input.dateOfBirth);
  const talentNumber = calculateTalentNumber(input.dateOfBirth);
  const maturityNumber = calculateMaturityNumber(lifePath.number, expression.number);
  
  return {
    lifePath,
    expression,
    heartDesire,
    personality,
    personalYear,
    personalMonth,
    personalDay,
    sunNumber,
    talentNumber,
    maturityNumber
  };
}

/**
 * คำนวณความเข้ากันได้ระหว่างบุคคล 2 คน
 * @param profile1 โปรไฟล์คนที่ 1
 * @param profile2 โปรไฟล์คนที่ 2
 * @param analysisType ประเภทการวิเคราะห์
 * @returns ผลการวิเคราะห์ความเข้ากันได้
 */
export function calculateCompatibility(
  profile1: NumerologyProfile,
  profile2: NumerologyProfile,
  analysisType: 'love' | 'work' | 'family' | 'all' = 'all'
): CompatibilityAnalysis {
  // คำนวณคะแนนความเข้ากันได้พื้นฐาน
  const lifePathCompatibility = calculateNumberCompatibility(
    profile1.lifePath.number,
    profile2.lifePath.number
  );
  
  const expressionCompatibility = calculateNumberCompatibility(
    profile1.expression.number,
    profile2.expression.number
  );
  
  const heartDesireCompatibility = calculateNumberCompatibility(
    profile1.heartDesire.number,
    profile2.heartDesire.number
  );
  
  const personalityCompatibility = calculateNumberCompatibility(
    profile1.personality.number,
    profile2.personality.number
  );

  // คำนวณคะแนนรวม
  const overallScore = Math.round(
    (lifePathCompatibility.score * 0.4 +
     expressionCompatibility.score * 0.25 +
     heartDesireCompatibility.score * 0.2 +
     personalityCompatibility.score * 0.15) * 10
  ) / 10;

  // สร้างผลการวิเคราะห์
  const loveCompatibility: LoveCompatibility = generateLoveCompatibility(
    profile1, profile2, overallScore
  );
  
  const workCompatibility: WorkCompatibility = generateWorkCompatibility(
    profile1, profile2, overallScore
  );
  
  const familyCompatibility: FamilyCompatibility = generateFamilyCompatibility(
    profile1, profile2, overallScore
  );

  const overall: CompatibilityResult = {
    score: overallScore,
    level: getCompatibilityLevel(overallScore),
    description: getOverallCompatibilityDescription(overallScore),
    strengths: combineStrengths([lifePathCompatibility, expressionCompatibility, heartDesireCompatibility, personalityCompatibility]),
    challenges: combineChallenges([lifePathCompatibility, expressionCompatibility, heartDesireCompatibility, personalityCompatibility]),
    advice: generateOverallAdvice(overallScore, profile1, profile2)
  };

  return {
    person1: profile1,
    person2: profile2,
    love: loveCompatibility,
    work: workCompatibility,
    family: familyCompatibility,
    overall
  };
}

/**
 * คำนวณความเข้ากันได้ระหว่างตัวเลข 2 ตัว
 */
function calculateNumberCompatibility(num1: number, num2: number): CompatibilityResult {
  const compatibilityMatrix: Record<string, CompatibilityResult> = {
    // Life Path 1
    '1-1': { score: 7, level: 'good', description: 'พลังงานเดียวกัน แข่งขันได้ดี', strengths: ['เป้าหมายชัดเจน', 'แรงบันดาลใจ'], challenges: ['การแข่งขัน', 'อีโก้'], advice: ['เรียนรู้การประนีประนอม', 'แบ่งปันความเป็นผู้นำ'] },
    '1-2': { score: 8, level: 'good', description: 'ผู้นำและผู้สนับสนุน', strengths: ['สมดุล', 'เสริมกัน'], challenges: ['ความเร่งรีบ vs ความระมัดระวัง'], advice: ['เคารพจังหวะกัน', 'สื่อสารอย่างชัดเจน'] },
    '1-3': { score: 9, level: 'excellent', description: 'พลังสร้างสรรค์และการนำ', strengths: ['ความคิดสร้างสรรค์', 'พลังงานสูง'], challenges: ['ความไม่อดทน'], advice: ['มุ่งเน้นเป้าหมายร่วม', 'ใช้ความคิดสร้างสรรค์'] },
    '1-4': { score: 6, level: 'moderate', description: 'ผู้นำและผู้วางแผน', strengths: ['เสถียรภาพ', 'ความมุ่งมั่น'], challenges: ['ความเร่งรีบ vs ความระมัดระวัง'], advice: ['เรียนรู้จากกัน', 'สร้างแผนร่วม'] },
    '1-5': { score: 8, level: 'good', description: 'การผจญภัยและการนำ', strengths: ['ความตื่นเต้น', 'การเปลี่ยนแปลง'], challenges: ['ความไม่แน่นอน'], advice: ['สร้างความสมดุล', 'วางแผนการผจญภัย'] },
    '1-6': { score: 7, level: 'good', description: 'ผู้นำและผู้ดูแล', strengths: ['ความรับผิดชอบ', 'การสนับสนุน'], challenges: ['ความเครียดจากหน้าที่'], advice: ['แบ่งปันความรับผิดชอบ', 'ดูแลกันและกัน'] },
    '1-7': { score: 5, level: 'moderate', description: 'ผู้นำและนักคิด', strengths: ['ความลึกซึ้ง', 'วิสัยทัศน์'], challenges: ['การสื่อสาร', 'ความเข้าใจ'], advice: ['ใช้เวลาพูดคุย', 'เคารพความแตกต่าง'] },
    '1-8': { score: 9, level: 'excellent', description: 'พลังแห่งความสำเร็จ', strengths: ['ความมุ่งมั่น', 'ความสำเร็จ'], challenges: ['การแข่งขัน'], advice: ['ร่วมมือแทนการแข่งขัน', 'สร้างเป้าหมายร่วม'] },
    '1-9': { score: 7, level: 'good', description: 'ผู้นำและผู้ให้', strengths: ['วิสัยทัศน์กว้าง', 'การบริการ'], challenges: ['ความเห็นแก่ตัว vs ความเสียสละ'], advice: ['เรียนรู้การให้และรับ', 'สร้างจุดมุ่งหมายร่วม'] },
    
    // Life Path 2
    '2-2': { score: 8, level: 'good', description: 'ความสามัคคีและการร่วมมือ', strengths: ['ความเข้าใจ', 'การสนับสนุน'], challenges: ['การตัดสินใจ', 'ความไม่แน่วแน่'], advice: ['สร้างความมั่นใจ', 'แบ่งปันการตัดสินใจ'] },
    '2-3': { score: 9, level: 'excellent', description: 'ความอ่อนโยนและความสนุกสนาน', strengths: ['ความสร้างสรรค์', 'การสื่อสาร'], challenges: ['ความอ่อนไหว'], advice: ['สร้างสภาพแวดล้อมที่ปลอดภัย', 'แสดงออกอย่างสร้างสรรค์'] },
    '2-4': { score: 8, level: 'good', description: 'ความมั่นคงและการสนับสนุน', strengths: ['เสถียรภาพ', 'ความไว้วางใจ'], challenges: ['ความเครียด'], advice: ['สร้างสมดุลงาน-ชีวิต', 'ดูแลความต้องการทางอารมณ์'] },
    '2-5': { score: 6, level: 'moderate', description: 'ความมั่นคง vs ความเปลี่ยนแปลง', strengths: ['การเรียนรู้', 'การปรับตัว'], challenges: ['ความไม่แน่นอน'], advice: ['สื่อสารความต้องการ', 'สร้างความมั่นคงในความเปลี่ยนแปลง'] },
    '2-6': { score: 9, level: 'excellent', description: 'ความรักและการดูแล', strengths: ['ความอบอุ่น', 'การดูแล'], challenges: ['ความกดดัน'], advice: ['แบ่งปันภาระ', 'ดูแลตัวเอง'] },
    '2-7': { score: 7, level: 'good', description: 'ความอ่อนโยนและปัญญา', strengths: ['ความเข้าใจลึก', 'การสนับสนุน'], challenges: ['การสื่อสาร'], advice: ['ใช้เวลาร่วมกันอย่างมีคุณภาพ', 'เคารพความต้องการเงียบ'] },
    '2-8': { score: 6, level: 'moderate', description: 'ความอ่อนโยน vs ความแข็งแกร่ง', strengths: ['สมดุล', 'การสนับสนุน'], challenges: ['ความเครียด'], advice: ['เรียนรู้จากกัน', 'สร้างความเข้าใจ'] },
    '2-9': { score: 8, level: 'good', description: 'ความเมตตาและการให้', strengths: ['ความเข้าใจ', 'การช่วยเหลือ'], challenges: ['การเสียสละมากเกินไป'], advice: ['ดูแลตัวเอง', 'สร้างขอบเขต'] },

    // เพิ่มความเข้ากันได้สำหรับตัวเลขอื่นๆ...
    // (สามารถขยายต่อได้ตามต้องการ)
  };

  const key1 = `${num1}-${num2}`;
  const key2 = `${num2}-${num1}`;
  
  return compatibilityMatrix[key1] || compatibilityMatrix[key2] || {
    score: 5,
    level: 'moderate',
    description: 'ความเข้ากันได้ปานกลาง',
    strengths: ['มีโอกาสเรียนรู้จากกัน'],
    challenges: ['ต้องใช้ความเข้าใจ'],
    advice: ['สื่อสารอย่างเปิดใจ', 'เคารพความแตกต่าง']
  };
}

/**
 * สร้างผลวิเคราะห์ความเข้ากันได้ด้านความรัก
 */
function generateLoveCompatibility(
  profile1: NumerologyProfile,
  profile2: NumerologyProfile,
  overallScore: number
): LoveCompatibility {
  const heartCompatibility = calculateNumberCompatibility(
    profile1.heartDesire.number,
    profile2.heartDesire.number
  );

  return {
    score: overallScore,
    level: getCompatibilityLevel(overallScore),
    description: `ความเข้ากันได้ด้านความรัก: ${getCompatibilityLevel(overallScore)}`,
    strengths: [
      'ความเข้าใจในความต้องการทางใจ',
      'การสนับสนุนเป้าหมายชีวิต',
      ...heartCompatibility.strengths
    ],
    challenges: [
      'ความแตกต่างในการแสดงออก',
      ...heartCompatibility.challenges
    ],
    advice: [
      'สื่อสารความรู้สึกอย่างตรงไปตรงมา',
      'เคารพความต้องการของกันและกัน',
      ...heartCompatibility.advice
    ],
    romanticPotential: getRomanticPotential(overallScore),
    communicationStyle: getCommunicationStyle(profile1, profile2),
    emotionalConnection: getEmotionalConnection(overallScore),
    longTermProspects: getLongTermProspects(overallScore)
  };
}

/**
 * สร้างผลวิเคราะห์ความเข้ากันได้ด้านการงาน
 */
function generateWorkCompatibility(
  profile1: NumerologyProfile,
  profile2: NumerologyProfile,
  overallScore: number
): WorkCompatibility {
  const expressionCompatibility = calculateNumberCompatibility(
    profile1.expression.number,
    profile2.expression.number
  );

  return {
    score: overallScore,
    level: getCompatibilityLevel(overallScore),
    description: `ความเข้ากันได้ด้านการงาน: ${getCompatibilityLevel(overallScore)}`,
    strengths: [
      'ความสามารถที่เสริมกัน',
      'เป้าหมายที่สอดคล้อง',
      ...expressionCompatibility.strengths
    ],
    challenges: [
      'วิธีการทำงานที่แตกต่าง',
      ...expressionCompatibility.challenges
    ],
    advice: [
      'แบ่งปันหน้าที่ตามจุดแข็ง',
      'สร้างเป้าหมายร่วม',
      ...expressionCompatibility.advice
    ],
    workingStyle: getWorkingStyle(profile1, profile2),
    leadershipDynamic: getLeadershipDynamic(profile1, profile2),
    collaborationPotential: getCollaborationPotential(overallScore),
    conflictResolution: getConflictResolution(profile1, profile2)
  };
}

/**
 * สร้างผลวิเคราะห์ความเข้ากันได้ด้านครอบครัว
 */
function generateFamilyCompatibility(
  profile1: NumerologyProfile,
  profile2: NumerologyProfile,
  overallScore: number
): FamilyCompatibility {
  return {
    score: overallScore,
    level: getCompatibilityLevel(overallScore),
    description: `ความเข้ากันได้ด้านครอบครัว: ${getCompatibilityLevel(overallScore)}`,
    strengths: [
      'ความเข้าใจในบทบาทครอบครัว',
      'การสนับสนุนกันและกัน'
    ],
    challenges: [
      'ความแตกต่างในการเลี้ยงดู',
      'ความคาดหวังที่แตกต่าง'
    ],
    advice: [
      'สร้างกฎครอบครัวร่วมกัน',
      'เคารพความแตกต่างของแต่ละคน'
    ],
    familyHarmony: getFamilyHarmony(overallScore),
    supportSystem: getSupportSystem(overallScore)
  };
}

// Helper Functions
function getCompatibilityLevel(score: number): 'low' | 'moderate' | 'good' | 'excellent' {
  if (score >= 8.5) return 'excellent';
  if (score >= 7) return 'good';
  if (score >= 5) return 'moderate';
  return 'low';
}

function getOverallCompatibilityDescription(score: number): string {
  if (score >= 8.5) return 'ความเข้ากันได้ยอดเยี่ยม มีศักยภาพสูงในการสร้างความสัมพันธ์ที่ยั่งยืน';
  if (score >= 7) return 'ความเข้ากันได้ดี สามารถสร้างความสัมพันธ์ที่แข็งแกร่งได้';
  if (score >= 5) return 'ความเข้ากันได้ปานกลาง ต้องใช้ความเข้าใจและการปรับตัว';
  return 'ความเข้ากันได้ต่ำ ต้องใช้ความพยายามมากในการสร้างความสัมพันธ์';
}

function combineStrengths(compatibilities: CompatibilityResult[]): string[] {
  const allStrengths = compatibilities.flatMap(c => c.strengths);
  return [...new Set(allStrengths)]; // Remove duplicates
}

function combineChallenges(compatibilities: CompatibilityResult[]): string[] {
  const allChallenges = compatibilities.flatMap(c => c.challenges);
  return [...new Set(allChallenges)]; // Remove duplicates
}

function generateOverallAdvice(score: number, profile1: NumerologyProfile, profile2: NumerologyProfile): string[] {
  const baseAdvice = [
    'สื่อสารอย่างเปิดใจและซื่อสัตย์',
    'เคารพความแตกต่างของกันและกัน',
    'สร้างเป้าหมายร่วมกัน'
  ];

  if (score >= 8) {
    baseAdvice.push('ใช้จุดแข็งร่วมกันในการสร้างสิ่งดีๆ');
  } else if (score >= 6) {
    baseAdvice.push('ใช้เวลาทำความเข้าใจกันมากขึ้น');
  } else {
    baseAdvice.push('ต้องใช้ความอดทนและความเข้าใจมากขึ้น');
  }

  return baseAdvice;
}

function getRomanticPotential(score: number): string {
  if (score >= 8.5) return 'ศักยภาพรักแท้สูงมาก';
  if (score >= 7) return 'ศักยภาพความรักที่ดี';
  if (score >= 5) return 'ศักยภาพความรักปานกลาง';
  return 'ต้องใช้ความพยายามในการสร้างความรัก';
}

function getCommunicationStyle(profile1: NumerologyProfile, profile2: NumerologyProfile): string {
  // วิเคราะห์รูปแบบการสื่อสารจาก Expression Number
  const expr1 = profile1.expression.number;
  const expr2 = profile2.expression.number;
  
  if (expr1 === expr2) return 'รูปแบบการสื่อสารคล้ายกัน เข้าใจกันง่าย';
  if (Math.abs(expr1 - expr2) <= 2) return 'รูปแบบการสื่อสารเสริมกัน';
  return 'รูปแบบการสื่อสารแตกต่าง ต้องปรับตัว';
}

function getEmotionalConnection(score: number): string {
  if (score >= 8.5) return 'การเชื่อมต่อทางอารมณ์ลึกซึ้งมาก';
  if (score >= 7) return 'การเชื่อมต่อทางอารมณ์ดี';
  if (score >= 5) return 'การเชื่อมต่อทางอารมณ์ปานกลาง';
  return 'ต้องใช้เวลาสร้างการเชื่อมต่อทางอารมณ์';
}

function getLongTermProspects(score: number): string {
  if (score >= 8.5) return 'แนวโน้มความสัมพันธ์ระยะยาวยอดเยี่ยม';
  if (score >= 7) return 'แนวโน้มความสัมพันธ์ระยะยาวดี';
  if (score >= 5) return 'แนวโน้มความสัมพันธ์ระยะยาวปานกลาง';
  return 'ต้องใช้ความพยายามมากสำหรับความสัมพันธ์ระยะยาว';
}

function getWorkingStyle(profile1: NumerologyProfile, profile2: NumerologyProfile): string {
  const life1 = profile1.lifePath.number;
  const life2 = profile2.lifePath.number;
  
  if (life1 === 1 || life2 === 1) return 'มีผู้นำที่ชัดเจน ทำงานได้อย่างมีประสิทธิภาพ';
  if (life1 === 2 || life2 === 2) return 'เน้นการทำงานเป็นทีม และการร่วมมือ';
  if (life1 === 8 || life2 === 8) return 'เน้นผลลัพธ์และความสำเร็จ';
  return 'รูปแบบการทำงานที่สมดุล';
}

function getLeadershipDynamic(profile1: NumerologyProfile, profile2: NumerologyProfile): string {
  const life1 = profile1.lifePath.number;
  const life2 = profile2.lifePath.number;
  
  if ((life1 === 1 && life2 === 1) || (life1 === 8 && life2 === 8)) {
    return 'อาจมีการแข่งขันในการนำ ต้องแบ่งปันบทบาท';
  }
  if (life1 === 1 || life1 === 8 || life2 === 1 || life2 === 8) {
    return 'มีผู้นำธรรมชาติ สามารถแบ่งหน้าที่ได้ดี';
  }
  return 'การนำแบบร่วมมือ เน้นการตัดสินใจร่วมกัน';
}

function getCollaborationPotential(score: number): string {
  if (score >= 8.5) return 'ศักยภาพการร่วมมือสูงมาก';
  if (score >= 7) return 'ศักยภาพการร่วมมือดี';
  if (score >= 5) return 'ศักยภาพการร่วมมือปานกลาง';
  return 'ต้องใช้ความพยายามในการร่วมมือ';
}

function getConflictResolution(profile1: NumerologyProfile, profile2: NumerologyProfile): string {
  const heart1 = profile1.heartDesire.number;
  const heart2 = profile2.heartDesire.number;
  
  if (heart1 === 2 || heart2 === 2) return 'แก้ไขความขัดแย้งด้วยการสื่อสารและความเข้าใจ';
  if (heart1 === 6 || heart2 === 6) return 'แก้ไขความขัดแย้งด้วยความรักและการดูแล';
  if (heart1 === 9 || heart2 === 9) return 'แก้ไขความขัดแย้งด้วยการให้อภัยและความเข้าใจ';
  return 'แก้ไขความขัดแย้งด้วยเหตุผลและการประนีประนอม';
}

function getFamilyHarmony(score: number): string {
  if (score >= 8.5) return 'ความสามัคคีในครอบครัวสูงมาก';
  if (score >= 7) return 'ความสามัคคีในครอบครัวดี';
  if (score >= 5) return 'ความสามัคคีในครอบครัวปานกลาง';
  return 'ต้องใช้ความพยายามในการสร้างความสามัคคี';
}

function getSupportSystem(score: number): string {
  if (score >= 8.5) return 'ระบบการสนับสนุนที่แข็งแกร่งมาก';
  if (score >= 7) return 'ระบบการสนับสนุนที่ดี';
  if (score >= 5) return 'ระบบการสนับสนุนปานกลาง';
  return 'ต้องสร้างระบบการสนับสนุนให้แข็งแกร่งขึ้น';
}

 