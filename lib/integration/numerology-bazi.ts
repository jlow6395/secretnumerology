/**
 * Integration between Numerology and Bazi systems
 * 数字命理学与八字的整合分析
 */

import { NumerologyEngine, type NumerologyResult, type BirthData } from "../numerology/core"
import { BaziEngine, type BaziResult, type BaziData } from "../bazi/core"

export interface IntegratedReading {
  numerology: NumerologyResult
  bazi: BaziResult
  synthesis: {
    overallPersonality: string[]
    careerGuidance: string[]
    relationshipAdvice: string[]
    luckyNumbers: number[]
    luckyColors: string[]
    bestDirections: string[]
    compatibilityFactors: string[]
  }
}

export class IntegratedAnalysis {
  /**
   * Generate complete integrated reading
   */
  static generateReading(
    birthData: BirthData & { hour: number; minute: number },
    fullName: string,
    gender: "male" | "female",
  ): IntegratedReading {
    // Calculate numerology
    const numerology = NumerologyEngine.calculateComplete(birthData, fullName)

    // Calculate bazi
    const baziData: BaziData = {
      year: birthData.year,
      month: birthData.month,
      day: birthData.day,
      hour: birthData.hour,
      minute: birthData.minute,
      gender,
    }
    const bazi = BaziEngine.calculateComplete(baziData)

    // Generate synthesis
    const synthesis = this.synthesizeReadings(numerology, bazi)

    return {
      numerology,
      bazi,
      synthesis,
    }
  }

  /**
   * Synthesize numerology and bazi readings
   */
  private static synthesizeReadings(numerology: NumerologyResult, bazi: BaziResult): IntegratedReading["synthesis"] {
    return {
      overallPersonality: this.combinePersonalityTraits(numerology, bazi),
      careerGuidance: this.combineCareerAdvice(numerology, bazi),
      relationshipAdvice: this.combineRelationshipAdvice(numerology, bazi),
      luckyNumbers: this.calculateLuckyNumbers(numerology, bazi),
      luckyColors: this.calculateLuckyColors(numerology, bazi),
      bestDirections: this.calculateBestDirections(numerology, bazi),
      compatibilityFactors: this.calculateCompatibilityFactors(numerology, bazi),
    }
  }

  private static combinePersonalityTraits(numerology: NumerologyResult, bazi: BaziResult): string[] {
    const traits: string[] = []

    // Add numerology-based traits
    traits.push(`Life Path ${numerology.lifePathNumber}: Natural leader and innovator`)
    traits.push(`Expression ${numerology.expressionNumber}: Creative and communicative`)

    // Add bazi-based traits
    traits.push(...bazi.personality)

    return traits
  }

  private static combineCareerAdvice(numerology: NumerologyResult, bazi: BaziResult): string[] {
    const advice: string[] = []

    // Numerology career guidance
    if (numerology.lifePathNumber === 1) {
      advice.push("Leadership roles and entrepreneurship")
    }
    if (numerology.lifePathNumber === 7) {
      advice.push("Research, analysis, and spiritual work")
    }

    // Bazi career guidance
    advice.push(...bazi.career)

    return advice
  }

  private static combineRelationshipAdvice(numerology: NumerologyResult, bazi: BaziResult): string[] {
    const advice: string[] = []

    // Numerology relationship patterns
    advice.push(`Soul Urge ${numerology.soulUrgeNumber}: Seeks deep emotional connection`)

    // Bazi relationship advice
    advice.push(...bazi.relationships)

    return advice
  }

  private static calculateLuckyNumbers(numerology: NumerologyResult, bazi: BaziResult): number[] {
    const luckyNumbers: number[] = []

    // Primary numerology numbers
    luckyNumbers.push(numerology.lifePathNumber)
    luckyNumbers.push(numerology.expressionNumber)
    luckyNumbers.push(numerology.birthdayNumber)

    // Element-based numbers from bazi
    const elementNumbers: Record<string, number[]> = {
      Wood: [3, 4],
      Fire: [2, 7],
      Earth: [5, 8],
      Metal: [6, 9],
      Water: [1, 0],
    }

    bazi.luckyElements.forEach((element) => {
      luckyNumbers.push(...elementNumbers[element])
    })

    return [...new Set(luckyNumbers)].sort()
  }

  private static calculateLuckyColors(numerology: NumerologyResult, bazi: BaziResult): string[] {
    const colors: string[] = []

    // Numerology-based colors
    const numerologyColors: Record<number, string[]> = {
      1: ["Red", "Orange"],
      2: ["Blue", "Green"],
      3: ["Yellow", "Purple"],
      4: ["Green", "Brown"],
      5: ["Silver", "Gray"],
      6: ["Pink", "Blue"],
      7: ["Purple", "Violet"],
      8: ["Black", "Dark Blue"],
      9: ["Gold", "Red"],
    }

    colors.push(...(numerologyColors[numerology.lifePathNumber] || []))

    // Bazi element colors
    const elementColors: Record<string, string[]> = {
      Wood: ["Green", "Brown"],
      Fire: ["Red", "Orange", "Pink"],
      Earth: ["Yellow", "Beige", "Brown"],
      Metal: ["White", "Silver", "Gold"],
      Water: ["Black", "Blue", "Navy"],
    }

    bazi.luckyElements.forEach((element) => {
      colors.push(...elementColors[element])
    })

    return [...new Set(colors)]
  }

  private static calculateBestDirections(numerology: NumerologyResult, bazi: BaziResult): string[] {
    // Simplified direction calculation based on elements
    const elementDirections: Record<string, string[]> = {
      Wood: ["East", "Southeast"],
      Fire: ["South"],
      Earth: ["Center", "Southwest", "Northeast"],
      Metal: ["West", "Northwest"],
      Water: ["North"],
    }

    const directions: string[] = []
    bazi.luckyElements.forEach((element) => {
      directions.push(...elementDirections[element])
    })

    return [...new Set(directions)]
  }

  private static calculateCompatibilityFactors(numerology: NumerologyResult, bazi: BaziResult): string[] {
    return [
      `Life Path ${numerology.lifePathNumber} compatibility`,
      `${bazi.elements.dayMaster} element harmony`,
      "Complementary energy patterns",
      "Shared life goals and values",
    ]
  }
}
