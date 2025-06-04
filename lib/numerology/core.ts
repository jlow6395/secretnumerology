/**
 * Core Numerology Calculation Engine
 * Supports all major numerology systems
 */

export interface BirthData {
  day: number
  month: number
  year: number
  hour?: number
  minute?: number
}

export interface NumerologyResult {
  lifePathNumber: number
  expressionNumber: number
  soulUrgeNumber: number
  personalityNumber: number
  birthdayNumber: number
  maturityNumber: number
  karmaNumbers: number[]
  masterNumbers: number[]
}

export class NumerologyEngine {
  private static readonly LETTER_VALUES = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 1,
    K: 2,
    L: 3,
    M: 4,
    N: 5,
    O: 6,
    P: 7,
    Q: 8,
    R: 9,
    S: 1,
    T: 2,
    U: 3,
    V: 4,
    W: 5,
    X: 6,
    Y: 7,
    Z: 8,
  }

  private static readonly MASTER_NUMBERS = [11, 22, 33, 44]

  /**
   * Calculate Life Path Number
   * Most important number in numerology
   */
  static calculateLifePath(birthData: BirthData): number {
    const { day, month, year } = birthData

    // Method 1: Add all digits then reduce
    const totalSum = day + month + year
    return this.reduceToSingleDigit(totalSum)
  }

  /**
   * Calculate Expression Number (Destiny Number)
   * Based on full birth name
   */
  static calculateExpression(fullName: string): number {
    const cleanName = fullName.toUpperCase().replace(/[^A-Z]/g, "")
    const nameValue = cleanName.split("").reduce((sum, letter) => sum + (this.LETTER_VALUES[letter] || 0), 0)

    return this.reduceToSingleDigit(nameValue)
  }

  /**
   * Calculate Soul Urge Number (Heart's Desire)
   * Based on vowels in name
   */
  static calculateSoulUrge(fullName: string): number {
    const vowels = fullName.toUpperCase().match(/[AEIOU]/g) || []
    const vowelValue = vowels.reduce((sum, vowel) => sum + (this.LETTER_VALUES[vowel] || 0), 0)

    return this.reduceToSingleDigit(vowelValue)
  }

  /**
   * Calculate Personality Number
   * Based on consonants in name
   */
  static calculatePersonality(fullName: string): number {
    const consonants = fullName.toUpperCase().match(/[BCDFGHJKLMNPQRSTVWXYZ]/g) || []
    const consonantValue = consonants.reduce((sum, consonant) => sum + (this.LETTER_VALUES[consonant] || 0), 0)

    return this.reduceToSingleDigit(consonantValue)
  }

  /**
   * Calculate Birthday Number
   * Simple day of birth
   */
  static calculateBirthday(day: number): number {
    return this.reduceToSingleDigit(day)
  }

  /**
   * Calculate Maturity Number
   * Life Path + Expression
   */
  static calculateMaturity(lifePathNumber: number, expressionNumber: number): number {
    return this.reduceToSingleDigit(lifePathNumber + expressionNumber)
  }

  /**
   * Find Karmic Debt Numbers
   * Numbers 13, 14, 16, 19
   */
  static findKarmicDebt(birthData: BirthData, fullName: string): number[] {
    const karmicNumbers: number[] = []
    const calculations = [
      this.calculateLifePath(birthData),
      this.calculateExpression(fullName),
      this.calculateSoulUrge(fullName),
      this.calculatePersonality(fullName),
    ]

    // Check for karmic debt in intermediate calculations
    // This is a simplified version - real implementation would be more complex
    calculations.forEach((num) => {
      if ([13, 14, 16, 19].includes(num)) {
        karmicNumbers.push(num)
      }
    })

    return [...new Set(karmicNumbers)] // Remove duplicates
  }

  /**
   * Calculate complete numerology profile
   */
  static calculateComplete(birthData: BirthData, fullName: string): NumerologyResult {
    const lifePathNumber = this.calculateLifePath(birthData)
    const expressionNumber = this.calculateExpression(fullName)
    const soulUrgeNumber = this.calculateSoulUrge(fullName)
    const personalityNumber = this.calculatePersonality(fullName)
    const birthdayNumber = this.calculateBirthday(birthData.day)
    const maturityNumber = this.calculateMaturity(lifePathNumber, expressionNumber)
    const karmaNumbers = this.findKarmicDebt(birthData, fullName)

    return {
      lifePathNumber,
      expressionNumber,
      soulUrgeNumber,
      personalityNumber,
      birthdayNumber,
      maturityNumber,
      karmaNumbers,
      masterNumbers: this.findMasterNumbers([lifePathNumber, expressionNumber, soulUrgeNumber, personalityNumber]),
    }
  }

  /**
   * Reduce number to single digit (except master numbers)
   */
  private static reduceToSingleDigit(num: number): number {
    while (num > 9 && !this.MASTER_NUMBERS.includes(num)) {
      num = num
        .toString()
        .split("")
        .reduce((sum, digit) => sum + Number.parseInt(digit, 10), 0)
    }
    return num
  }

  /**
   * Find master numbers in array
   */
  private static findMasterNumbers(numbers: number[]): number[] {
    return numbers.filter((num) => this.MASTER_NUMBERS.includes(num))
  }
}
