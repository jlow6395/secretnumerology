// lib/numerology/core.ts

/**
 * Reduces a number by repeatedly summing its digits until it becomes a single digit
 * or a master number (11, 22, 33).
 * @param {number} num - The number to reduce.
 * @returns {number} The reduced number.
 */
function reduceToSingleDigit(num: number): number {
  let currentNum = num;
  while (currentNum > 9 && currentNum !== 11 && currentNum !== 22 && currentNum !== 33) {
    currentNum = currentNum
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  }
  return currentNum;
}

/**
 * Reduces a number to a single digit (1-9) only, no master numbers.
 * Used specifically for Challenge Numbers calculation.
 * @param {number} num - The number to reduce
 * @returns {number} The reduced number (1-9)
 */
function reduceToSingleDigitNoMaster(num: number): number {
  let currentNum = num;
  while (currentNum > 9) {
    currentNum = currentNum
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  }
  return currentNum;
}

/**
 * Calculates the Life Path Number from a date of birth.
 * @param {string} dateOfBirth - The date of birth in 'YYYY-MM-DD' format.
 * @returns {number} The Life Path Number.
 */
export function calculateLifePath(dateOfBirth: string): number {
  return calculateLifePathNumber(dateOfBirth);
}

export function calculateLifePathNumber(dateOfBirth: string): number {
  if (!dateOfBirth) return 0;
  
  const [year, month, day] = dateOfBirth.split('-').map(Number);
  
  const reducedYear = reduceToSingleDigit(year);
  const reducedMonth = reduceToSingleDigit(month);
  const reducedDay = reduceToSingleDigit(day);

  const totalSum = reducedYear + reducedMonth + reducedDay;
  return reduceToSingleDigit(totalSum);
}

/**
 * Calculates the Talent Number from a date of birth.
 * Formula: Sum all digits from day + month + year (D1+D2+M1+M2+Y1+Y2+Y3+Y4)
 * @param {string} dateOfBirth - The date of birth in 'YYYY-MM-DD' format.
 * @returns {string} The Talent Number in format "rawSum/reducedValue" (e.g., "35/8").
 */
export function calculateTalentNumber(dateOfBirth: string): string {
    if (!dateOfBirth) return "0/0";
    
    const [year, month, day] = dateOfBirth.split('-');
    
    // Sum all individual digits: D1+D2+M1+M2+Y1+Y2+Y3+Y4
    const allDigits = (day + month + year).split('').map(digit => parseInt(digit, 10));
    const rawSum = allDigits.reduce((sum, digit) => sum + digit, 0);
    
    // Calculate the reduced value (same as Life Path calculation with master numbers)
    const reducedValue = reduceToSingleDigit(rawSum);
    
    return `${rawSum}/${reducedValue}`;
}

/**
 * Finds missing digits (1-9) that don't appear in date of birth and life path number.
 * @param {string} dateOfBirth - The date of birth in 'YYYY-MM-DD' format.
 * @returns {number[]} An array of numbers (1-9) that are missing.
 */
export function calculateMissingNumbers(dateOfBirth: string): number[] {
    if (!dateOfBirth) return [];
    
    // Get all digits from date of birth
    const birthDigits = dateOfBirth.replace(/-/g, '').split('').map(d => parseInt(d, 10));
    
    // Calculate Life Path and get ALL digits involved in the process
    const [year, month, day] = dateOfBirth.split('-').map(Number);
    
    // Get intermediate values and their digits
    const reducedYear = reduceToSingleDigit(year);
    const reducedMonth = reduceToSingleDigit(month);
    const reducedDay = reduceToSingleDigit(day);
    const totalSum = reducedYear + reducedMonth + reducedDay;
    const finalLifePath = reduceToSingleDigit(totalSum);
    
    // Collect all digits that appear in Life Path calculation
    let lifePathDigits = [reducedYear, reducedMonth, reducedDay, finalLifePath];
    
    // Handle master numbers in intermediate steps
    if (reducedDay === 11 || reducedDay === 22 || reducedDay === 33) {
        if (reducedDay === 11) lifePathDigits.push(1, 1, 2);
        else if (reducedDay === 22) lifePathDigits.push(2, 2, 4);
        else if (reducedDay === 33) lifePathDigits.push(3, 3, 6);
    }
    
    // Handle master numbers in final result
    if (finalLifePath === 11) {
        lifePathDigits.push(1, 1, 2);
    } else if (finalLifePath === 22) {
        lifePathDigits.push(2, 2, 4);
    } else if (finalLifePath === 33) {
        lifePathDigits.push(3, 3, 6);
    }
    
    // Add digits from totalSum if it was reduced
    if (totalSum > 9 && totalSum !== 11 && totalSum !== 22 && totalSum !== 33) {
        const sumDigits = totalSum.toString().split('').map(d => parseInt(d, 10));
        lifePathDigits.push(...sumDigits);
    }
    
    // Combine all present digits
    const allPresentDigits = [...birthDigits, ...lifePathDigits];
    const uniquePresent = [...new Set(allPresentDigits.filter(d => d >= 1 && d <= 9))];
    
    // Find missing digits from 1-9
    const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const missing = allNumbers.filter(num => !uniquePresent.includes(num));
    
    return missing.sort((a, b) => a - b);
}

/**
 * Calculates the Date Number from a date of birth.
 * @param {string} dateOfBirth - The date of birth in 'YYYY-MM-DD' format.
 * @returns {number} The Date Number (1-31, unchanged).
 */
export function calculateDateNumber(dateOfBirth: string): number {
    if (!dateOfBirth) return 0;
    
    const day = parseInt(dateOfBirth.split('-')[2], 10);
    return day;
}

/**
 * Calculates the Month Number from a date of birth.
 * @param {string} dateOfBirth - The date of birth in 'YYYY-MM-DD' format.
 * @returns {number} The Month Number (1-12, unchanged).
 */
export function calculateMonthNumber(dateOfBirth: string): number {
    if (!dateOfBirth) return 0;
    
    const month = parseInt(dateOfBirth.split('-')[1], 10);
    return month;
}

/**
 * Calculates the Year Number from a date of birth.
 * Always reduces to single digit (1-9), no master numbers.
 * @param {string} dateOfBirth - The date of birth in 'YYYY-MM-DD' format.
 * @returns {number} The Year Number (1-9).
 */
export function calculateYearNumber(dateOfBirth: string): number {
    if (!dateOfBirth) return 0;
    
    const year = parseInt(dateOfBirth.split('-')[0], 10);
    
    // Sum all digits of the year
    const yearDigits = year.toString().split('').map(digit => parseInt(digit, 10));
    let sum = yearDigits.reduce((total, digit) => total + digit, 0);
    
    // Always reduce to single digit (no master numbers for Year Number)
    while (sum > 9) {
        sum = sum.toString().split('').reduce((total, digit) => total + parseInt(digit, 10), 0);
    }
    
    return sum;
}

/**
 * Calculates the Sun Number from day + month digits (D1+D2+M1+M2).
 * @param {string} dateOfBirth - The date of birth in 'YYYY-MM-DD' format.
 * @returns {number} The Sun Number (1-9).
 */
export function calculateSunNumber(dateOfBirth: string): number {
    if (!dateOfBirth) return 0;
    
    const [year, month, day] = dateOfBirth.split('-');
    
    // Sum individual digits: D1+D2+M1+M2
    const dayDigits = day.split('').map(d => parseInt(d, 10));
    const monthDigits = month.split('').map(d => parseInt(d, 10));
    
    const totalSum = [...dayDigits, ...monthDigits].reduce((sum, digit) => sum + digit, 0);
    
    return reduceToSingleDigit(totalSum);
}

/**
 * Calculates the Special Abilities Number from month + year digits (M1+M2+Y1+Y2+Y3+Y4).
 * @param {string} dateOfBirth - The date of birth in 'YYYY-MM-DD' format.
 * @returns {number} The Special Abilities Number (1-9).
 */
export function calculateSpecialAbilitiesNumber(dateOfBirth: string): number {
    if (!dateOfBirth) return 0;
    
    const [year, month, day] = dateOfBirth.split('-');
    
    // Sum individual digits: M1+M2+Y1+Y2+Y3+Y4
    const monthDigits = month.split('').map(d => parseInt(d, 10));
    const yearDigits = year.split('').map(d => parseInt(d, 10));
    
    const totalSum = [...monthDigits, ...yearDigits].reduce((sum, digit) => sum + digit, 0);
    
    return reduceToSingleDigit(totalSum);
}

/**
 * Pythagorean Numerology Letter-to-Number Mapping
 */
const PYTHAGOREAN_MAP: { [key: string]: number } = {
  'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
  'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
  'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
};

/**
 * Vowels for Heart's Desire calculation (Y excluded - treated as consonant)
 */
const VOWELS = ['A', 'E', 'I', 'O', 'U'];

/**
 * Consonants for Personality calculation (Y included as consonant)
 */
const CONSONANTS = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

/**
 * Converts a name to numbers using Pythagorean numerology
 * @param {string} name - The name to convert
 * @param {string[]} filterLetters - Optional array of letters to include (for vowels/consonants filtering)
 * @returns {number[]} Array of numbers corresponding to the letters
 */
function nameToNumbers(name: string, filterLetters?: string[]): number[] {
    const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
    const letters = cleanName.split('');
    
    const filteredLetters = filterLetters 
        ? letters.filter(letter => filterLetters.includes(letter))
        : letters;
    
    return filteredLetters.map(letter => PYTHAGOREAN_MAP[letter] || 0);
}

/**
 * Calculates the Expression Number from a full name.
 * @param {string} fullName - The full name in English
 * @returns {number} The Expression Number (1-9, 11, 22, 33)
 */
export function calculateExpressionNumber(fullName: string): number {
    if (!fullName) return 0;
    
    const numbers = nameToNumbers(fullName);
    const sum = numbers.reduce((total, num) => total + num, 0);
    
    return reduceToSingleDigit(sum);
}

/**
 * Calculates the Personality Number from consonants in a name.
 * @param {string} fullName - The full name in English
 * @returns {number} The Personality Number (1-9, 11, 22, 33)
 */
export function calculatePersonalityNumber(fullName: string): number {
    if (!fullName) return 0;
    
    const numbers = nameToNumbers(fullName, CONSONANTS);
    const sum = numbers.reduce((total, num) => total + num, 0);
    
    return reduceToSingleDigit(sum);
}

/**
 * Calculates the Heart's Desire Number from vowels in a name.
 * @param {string} fullName - The full name in English
 * @returns {number} The Heart's Desire Number (1-9, 11, 22, 33)
 */
export function calculateHeartDesireNumber(fullName: string): number {
    if (!fullName) return 0;
    
    const numbers = nameToNumbers(fullName, VOWELS);
    const sum = numbers.reduce((total, num) => total + num, 0);
    
    return reduceToSingleDigit(sum);
}

/**
 * Calculates the Maturity Number from Life Path + Expression Number.
 * @param {string} dateOfBirth - The date of birth in 'YYYY-MM-DD' format
 * @param {string} fullName - The full name in English
 * @returns {number} The Maturity Number (1-9, 11, 22, 33)
 */
export function calculateMaturityNumber(dateOfBirth: string, fullName: string): number {
    if (!dateOfBirth || !fullName) return 0;
    
    const lifePathNumber = calculateLifePathNumber(dateOfBirth);
    const expressionNumber = calculateExpressionNumber(fullName);
    
    const sum = lifePathNumber + expressionNumber;
    
    return reduceToSingleDigit(sum);
}

/**
 * Calculates the Personal Year Number for a given year.
 * @param {string} dateOfBirth - The date of birth in 'YYYY-MM-DD' format
 * @param {number} currentYear - The current year (e.g., 2025)
 * @returns {number} The Personal Year Number (1-9, 11, 22)
 */
export function calculatePersonalYear(dateOfBirth: string, currentYear: number): number {
    if (!dateOfBirth || !currentYear) return 0;
    
    const [year, month, day] = dateOfBirth.split('-');
    
    // Sum day + month + current year digits
    const dayDigits = day.split('').map(d => parseInt(d, 10));
    const monthDigits = month.split('').map(d => parseInt(d, 10));
    const currentYearDigits = currentYear.toString().split('').map(d => parseInt(d, 10));
    
    const totalSum = [...dayDigits, ...monthDigits, ...currentYearDigits].reduce((sum, digit) => sum + digit, 0);
    
    return reduceToSingleDigit(totalSum);
}

/**
 * Calculates the Personal Month Number for a given month.
 * @param {string} dateOfBirth - The date of birth in 'YYYY-MM-DD' format
 * @param {number} currentYear - The current year (e.g., 2025)
 * @param {number} currentMonth - The current month (1-12)
 * @returns {number} The Personal Month Number (1-9, 11, 22)
 */
export function calculatePersonalMonth(dateOfBirth: string, currentYear: number, currentMonth: number): number {
    if (!dateOfBirth || !currentYear || !currentMonth) return 0;
    
    const personalYear = calculatePersonalYear(dateOfBirth, currentYear);
    const sum = personalYear + currentMonth;
    
    return reduceToSingleDigit(sum);
}

/**
 * Calculates the Personal Day Number for a given date.
 * @param {string} dateOfBirth - The date of birth in 'YYYY-MM-DD' format
 * @param {number} currentYear - The current year (e.g., 2025)
 * @param {number} currentMonth - The current month (1-12)
 * @param {number} currentDay - The current day (1-31)
 * @returns {number} The Personal Day Number (1-9)
 */
export function calculatePersonalDay(dateOfBirth: string, currentYear: number, currentMonth: number, currentDay: number): number {
    if (!dateOfBirth || !currentYear || !currentMonth || !currentDay) return 0;
    
    const personalMonth = calculatePersonalMonth(dateOfBirth, currentYear, currentMonth);
    const sum = personalMonth + currentDay;
    
    return reduceToSingleDigit(sum);
}

/**
 * Calculates all 4 Challenge Numbers representing life lessons in different periods.
 * @param {string} dateOfBirth - The date of birth in 'YYYY-MM-DD' format
 * @returns {number[]} Array of 4 Challenge Numbers [Challenge1, Challenge2, Challenge3, Challenge4]
 */
export function calculateChallengeNumbers(dateOfBirth: string): number[] {
    if (!dateOfBirth) return [0, 0, 0, 0];
    
    const [year, month, day] = dateOfBirth.split('-').map(Number);
    
    // For Challenge Numbers, reduce ALL components to single digit (no master numbers)
    const reducedDay = reduceToSingleDigitNoMaster(day);
    const reducedMonth = reduceToSingleDigitNoMaster(month);
    const reducedYear = reduceToSingleDigitNoMaster(year);
    
    // Calculate challenges using absolute difference (always positive)
    const challenge1 = Math.abs(reducedDay - reducedMonth);
    const challenge2 = Math.abs(reducedYear - reducedDay);
    const challenge3 = Math.abs(challenge2 - challenge1);
    const challenge4 = Math.abs(reducedYear - reducedMonth);
    
    return [challenge1, challenge2, challenge3, challenge4];
}

/**
 * Calculates all 4 Pinnacles Numbers representing life opportunities in different periods.
 * @param {string} dateOfBirth - The date of birth in 'YYYY-MM-DD' format
 * @returns {number[]} Array of 4 Pinnacles Numbers [Pinnacle1, Pinnacle2, Pinnacle3, Pinnacle4]
 */
export function calculatePinnaclesNumbers(dateOfBirth: string): number[] {
    if (!dateOfBirth) return [0, 0, 0, 0];
    
    const [year, month, day] = dateOfBirth.split('-').map(Number);
    
    // Reduce each component to single digit first
    const reducedDay = reduceToSingleDigit(day);
    const reducedMonth = reduceToSingleDigit(month);
    const reducedYear = reduceToSingleDigit(year);
    
    // Calculate pinnacles
    const pinnacle1 = reduceToSingleDigit(reducedDay + reducedMonth);
    const pinnacle2 = reduceToSingleDigit(reducedDay + reducedYear);
    const pinnacle3 = reduceToSingleDigit(pinnacle1 + pinnacle2);
    const pinnacle4 = reduceToSingleDigit(reducedMonth + reducedYear);
    
    return [pinnacle1, pinnacle2, pinnacle3, pinnacle4];
}

/**
 * Gets the age ranges for Challenge and Pinnacle periods based on Life Path Number.
 * @param {number} lifePathNumber - The Life Path Number
 * @returns {object} Object containing age ranges for each period
 */
export function getLifePeriodAges(lifePathNumber: number): {
    challenge1: string;
    challenge2: string;
    challenge3: string;
    challenge4: string;
    pinnacle1: string;
    pinnacle2: string;
    pinnacle3: string;
    pinnacle4: string;
} {
    // Age calculation: 36 - Life Path Number
    const firstPeriodEnd = 36 - lifePathNumber;
    const secondPeriodEnd = firstPeriodEnd + 9;
    const thirdPeriodEnd = secondPeriodEnd + 9;
    
    return {
        challenge1: `0-${firstPeriodEnd} ปี`,
        challenge2: `${firstPeriodEnd-5}-60 ปี`,
        challenge3: `ตลอดชีวิต`,
        challenge4: `60+ ปี`,
        pinnacle1: `0-${firstPeriodEnd} ปี`,
        pinnacle2: `${firstPeriodEnd+1}-${secondPeriodEnd} ปี`,
        pinnacle3: `${secondPeriodEnd+1}-${thirdPeriodEnd} ปี`,
        pinnacle4: `${thirdPeriodEnd+1}+ ปี`
    };
}

/**
 * Calculates detailed timeline data for life periods (0-99 years)
 * Includes Pinnacle and Challenge numbers with age ranges
 * @param {string} dateOfBirth - The date of birth in 'YYYY-MM-DD' format.
 * @returns {object} Complete timeline data with periods, ages, and insights
 */
export function calculateLifeTimeline(dateOfBirth: string) {
  if (!dateOfBirth) return null;
  
  const lifePathNumber = calculateLifePathNumber(dateOfBirth);
  const pinnacles = calculatePinnaclesNumbers(dateOfBirth);
  const challenges = calculateChallengeNumbers(dateOfBirth);
  const periods = getLifePeriodAges(lifePathNumber);
  
  // Parse age ranges from periods
  const parseAgeRange = (range: string) => {
    const [start, end] = range.split('-').map(num => parseInt(num.trim()));
    return { start, end: end || 99 };
  };
  
  const pinnacle1Ages = parseAgeRange(periods.pinnacle1);
  const pinnacle2Ages = parseAgeRange(periods.pinnacle2);
  const pinnacle3Ages = parseAgeRange(periods.pinnacle3);
  const pinnacle4Ages = parseAgeRange(periods.pinnacle4);
  
  // Calculate current age
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  const currentAge = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();
  const adjustedAge = currentAge - (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? 1 : 0);
  
  // Determine current period
  let currentPinnacle = 1;
  let currentChallenge = 1;
  
  if (adjustedAge >= pinnacle4Ages.start) {
    currentPinnacle = 4;
    currentChallenge = 4;
  } else if (adjustedAge >= pinnacle3Ages.start) {
    currentPinnacle = 3;
    currentChallenge = 3;
  } else if (adjustedAge >= pinnacle2Ages.start) {
    currentPinnacle = 2;
    currentChallenge = 2;
  }
  
  // Timeline periods with detailed data
  const timelinePeriods = [
    {
      id: 1,
      name: "Foundation Years",
      startAge: pinnacle1Ages.start,
      endAge: pinnacle1Ages.end,
      pinnacleNumber: pinnacles[0],
      challengeNumber: challenges[0],
      isActive: currentPinnacle === 1,
      phase: "childhood-youth",
      description: "ช่วงสร้างรากฐานชีวิตและการเรียนรู้",
      keyThemes: ["การศึกษา", "ครอบครัว", "การค้นหาตัวตน"],
      opportunities: getNumberInsight(pinnacles[0], "opportunity"),
      challenges: getNumberInsight(challenges[0], "challenge"),
      advice: getNumberInsight(pinnacles[0], "advice")
    },
    {
      id: 2,
      name: "Growth & Development",
      startAge: pinnacle2Ages.start,
      endAge: pinnacle2Ages.end,
      pinnacleNumber: pinnacles[1],
      challengeNumber: challenges[1],
      isActive: currentPinnacle === 2,
      phase: "young-adult",
      description: "ช่วงพัฒนาตัวเองและสร้างความสัมพันธ์",
      keyThemes: ["ความรัก", "การงาน", "ความสัมพันธ์"],
      opportunities: getNumberInsight(pinnacles[1], "opportunity"),
      challenges: getNumberInsight(challenges[1], "challenge"),
      advice: getNumberInsight(pinnacles[1], "advice")
    },
    {
      id: 3,
      name: "Achievement & Mastery",
      startAge: pinnacle3Ages.start,
      endAge: pinnacle3Ages.end,
      pinnacleNumber: pinnacles[2],
      challengeNumber: challenges[2],
      isActive: currentPinnacle === 3,
      phase: "mid-life",
      description: "ช่วงความสำเร็จและการเป็นผู้นำ",
      keyThemes: ["ความสำเร็จ", "ภาวะผู้นำ", "การสร้างมรดก"],
      opportunities: getNumberInsight(pinnacles[2], "opportunity"),
      challenges: getNumberInsight(challenges[2], "challenge"),
      advice: getNumberInsight(pinnacles[2], "advice")
    },
    {
      id: 4,
      name: "Wisdom & Legacy",
      startAge: pinnacle4Ages.start,
      endAge: 99,
      pinnacleNumber: pinnacles[3],
      challengeNumber: challenges[3],
      isActive: currentPinnacle === 4,
      phase: "mature-wisdom",
      description: "ช่วงแห่งภูมิปัญญาและการถ่ายทอด",
      keyThemes: ["ภูมิปัญญา", "การถ่ายทอด", "จิตวิญญาณ"],
      opportunities: getNumberInsight(pinnacles[3], "opportunity"),
      challenges: getNumberInsight(challenges[3], "challenge"),
      advice: getNumberInsight(pinnacles[3], "advice")
    }
  ];
  
  // Calculate Personal Year cycles for timeline
  const currentYear = today.getFullYear();
  const personalYearCycles = [];
  
  for (let age = Math.max(0, adjustedAge - 5); age <= Math.min(99, adjustedAge + 10); age++) {
    const yearForAge = birthDate.getFullYear() + age;
    const personalYear = calculatePersonalYear(dateOfBirth, yearForAge);
    personalYearCycles.push({
      age,
      year: yearForAge,
      personalYear,
      isCurrent: age === adjustedAge,
      insight: getPersonalYearInsight(personalYear)
    });
  }
  
  return {
    currentAge: adjustedAge,
    currentPinnacle,
    currentChallenge,
    lifePathNumber,
    timelinePeriods,
    personalYearCycles,
    summary: {
      totalPeriods: 4,
      activePeriod: timelinePeriods.find(p => p.isActive),
      nextTransition: timelinePeriods.find(p => p.startAge > adjustedAge),
      keyInsights: generateKeyInsights(adjustedAge, currentPinnacle, pinnacles, challenges)
    }
  };
}

/**
 * Get insights for numbers based on context
 * @param {number} number - The numerology number
 * @param {string} type - Type of insight (opportunity, challenge, advice)
 * @returns {string} Insight text
 */
function getNumberInsight(number: number, type: 'opportunity' | 'challenge' | 'advice'): string {
  const insights = {
    1: {
      opportunity: "ความเป็นผู้นำและการเริ่มต้นใหม่",
      challenge: "ความเอาแต่ใจตัวเองและการขาดความอดทน",
      advice: "ใช้ความมุ่งมั่นในการสร้างสิ่งใหม่ แต่อย่าลืมฟังความคิดเห็นผู้อื่น"
    },
    2: {
      opportunity: "ความร่วมมือและการสร้างความสัมพันธ์",
      challenge: "ความลังเลใจและการพึ่งพาผู้อื่นมากเกินไป",
      advice: "ใช้ความอ่อนโยนในการทำงานร่วมกับผู้อื่น แต่เชื่อมันในตัวเองมากขึ้น"
    },
    3: {
      opportunity: "ความคิดสร้างสรรค์และการสื่อสาร",
      challenge: "การกระจายความสนใจและพูดมากเกินไป",
      advice: "ใช้ความสามารถด้านการสื่อสารอย่างสร้างสรรค์ แต่เรียนรู้การโฟกัส"
    },
    4: {
      opportunity: "ความมั่นคงและการสร้างรากฐานที่แข็งแกร่ง",
      challenge: "ความเข้มงวดและการต่อต้านการเปลี่ยนแปลง",
      advice: "ใช้ความละเอียดรอบคอบสร้างความมั่นคง แต่เปิดใจรับการเปลี่ยนแปลง"
    },
    5: {
      opportunity: "เสรีภาพและการผจญภัย",
      challenge: "ความไม่อดทนและการขาดความรับผิดชอบ",
      advice: "ใช้ความหลากหลายในการเรียนรู้ แต่อย่าหนีจากความรับผิดชอบ"
    },
    6: {
      opportunity: "ความรักและการดูแลผู้อื่น",
      challenge: "การเสียสละมากเกินไปและการควบคุม",
      advice: "ใช้ความรักในการช่วยเหลือผู้อื่น แต่อย่าลืมดูแลตัวเอง"
    },
    7: {
      opportunity: "ภูมิปัญญาและการค้นหาความจริง",
      challenge: "การแยกตัวและความไม่ไว้วางใจ",
      advice: "ใช้ความลึกซึ้งในการทำความเข้าใจ แต่อย่าแยกตัวจากสังคม"
    },
    8: {
      opportunity: "ความสำเร็จทางวัตถุและอำนาจ",
      challenge: "ความโลภและการใช้อำนาจในทางที่ผิด",
      advice: "ใช้ความสามารถในการบริหารจัดการ แต่อย่าลืมความยุติธรรม"
    },
    9: {
      opportunity: "การให้และการรับใช้มวลมนุษย์",
      challenge: "ความหวังสูงเกินไปและการผิดหวัง",
      advice: "ใช้ความเมื่อยมกรุณาช่วยเหลือผู้อื่น แต่เรียนรู้การปล่อยวาง"
    },
    11: {
      opportunity: "แรงบันดาลใจและการเป็นผู้นำทางจิตวิญญาณ",
      challenge: "ความกดดันและความไม่มั่นคง",
      advice: "ใช้ความไวทางจิตวิญญาณเป็นแรงบันดาลใจ แต่เรียนรู้การจัดการความเครียด"
    },
    22: {
      opportunity: "การสร้างสิ่งยิ่งใหญ่และการเป็นผู้นำระดับโลก",
      challenge: "ความกดดันสูงและความคาดหวังมากเกินไป",
      advice: "ใช้วิสัยทัศน์ในการสร้างสิ่งยิ่งใหญ่ แต่อย่าลืมเริ่มจากสิ่งเล็กๆ"
    },
    33: {
      opportunity: "การเป็นครูผู้สอนและการรักษา",
      challenge: "ภาระหน้าที่หนักหนาและการเสียสละมากเกินไป",
      advice: "ใช้ความรักในการสอนและรักษา แต่เรียนรู้การสร้างสมดุล"
    }
  };
  
  return insights[number as keyof typeof insights]?.[type] || "ไม่มีข้อมูล";
}

/**
 * Get Personal Year insight
 * @param {number} personalYear - Personal Year number (1-9)
 * @returns {string} Insight for the personal year
 */
function getPersonalYearInsight(personalYear: number): string {
  const insights = {
    1: "ปีแห่งการเริ่มต้นใหม่และการเป็นผู้นำ",
    2: "ปีแห่งความร่วมมือและความสัมพันธ์",
    3: "ปีแห่งความคิดสร้างสรรค์และการสื่อสาร",
    4: "ปีแห่งการทำงานหนักและสร้างรากฐาน",
    5: "ปีแห่งการเปลี่ยนแปลงและผจญภัย",
    6: "ปีแห่งความรับผิดชอบและครอบครัว",
    7: "ปีแห่งการพัฒนาตัวเองและจิตวิญญาณ",
    8: "ปีแห่งความสำเร็จและความก้าวหน้า",
    9: "ปีแห่งการสรุปและการปล่อยวาง"
  };
  
  return insights[personalYear as keyof typeof insights] || "ไม่มีข้อมูล";
}

/**
 * Generate key insights for current life situation
 * @param {number} currentAge - Current age
 * @param {number} currentPinnacle - Current pinnacle period
 * @param {number[]} pinnacles - All pinnacle numbers
 * @param {number[]} challenges - All challenge numbers
 * @returns {string[]} Array of key insights
 */
function generateKeyInsights(currentAge: number, currentPinnacle: number, pinnacles: number[], challenges: number[]): string[] {
  const insights = [];
  
  // Current period insight
  insights.push(`คุณกำลังอยู่ในช่วงที่ ${currentPinnacle} ของชีวิต พลังงานหลักคือเลข ${pinnacles[currentPinnacle - 1]}`);
  
  // Challenge insight
  insights.push(`ความท้าทายในช่วงนี้คือ ${getNumberInsight(challenges[currentPinnacle - 1], 'challenge')}`);
  
  // Age-specific insights
  if (currentAge < 30) {
    insights.push("ช่วงนี้เหมาะสำหรับการเรียนรู้และสร้างรากฐาน");
  } else if (currentAge < 45) {
    insights.push("ช่วงนี้เป็นเวลาของการพัฒนาความสัมพันธ์และความก้าวหน้า");
  } else if (currentAge < 65) {
    insights.push("ช่วงนี้เป็นเวลาแห่งความสำเร็จและการเป็นผู้นำ");
  } else {
    insights.push("ช่วงนี้เป็นเวลาแห่งภูมิปัญญาและการถ่ายทอดประสบการณ์");
  }
  
  return insights;
}

/**
 * Find recurring numbers in a date of birth
 * @param {string} dateOfBirth - The date of birth in 'YYYY-MM-DD' format.
 * @returns {number[]} Array of recurring numbers
 */
export function findRecurringNumbers(dateOfBirth: string): number[] {
  if (!dateOfBirth) return [];
  
  // Get all digits from date of birth (excluding separators)
  const allDigits = dateOfBirth.replace(/-/g, '').split('').map(d => parseInt(d, 10));
  
  // Count occurrences of each digit (1-9)
  const digitCounts: { [key: number]: number } = {};
  for (let i = 1; i <= 9; i++) {
    digitCounts[i] = 0;
  }
  
  allDigits.forEach(digit => {
    if (digit >= 1 && digit <= 9) {
      digitCounts[digit]++;
    }
  });
  
  // Find digits that appear more than once
  const recurring: number[] = [];
  for (let digit = 1; digit <= 9; digit++) {
    if (digitCounts[digit] > 1) {
      recurring.push(digit);
    }
  }
  
  return recurring.sort((a, b) => a - b);
}

/**
 * Calculate Pinnacle Numbers (alias for calculatePinnaclesNumbers)
 * @param {string} dateOfBirth - The date of birth in 'YYYY-MM-DD' format.
 * @returns {number[]} Array of 4 pinnacle numbers
 */
export function calculatePinnacleNumbers(dateOfBirth: string): number[] {
  return calculatePinnaclesNumbers(dateOfBirth);
} 