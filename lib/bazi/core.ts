/**
 * Chinese Bazi (Four Pillars) Calculation Engine
 * 中国八字命理计算引擎
 */

export interface BaziData {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  gender: "male" | "female"
  timezone?: string
}

export interface BaziResult {
  fourPillars: {
    year: { heavenlyStem: string; earthlyBranch: string }
    month: { heavenlyStem: string; earthlyBranch: string }
    day: { heavenlyStem: string; earthlyBranch: string }
    hour: { heavenlyStem: string; earthlyBranch: string }
  }
  elements: {
    dayMaster: string
    strongestElement: string
    weakestElement: string
    elementBalance: Record<string, number>
  }
  luckyElements: string[]
  unluckyElements: string[]
  personality: string[]
  career: string[]
  relationships: string[]
}

export class BaziEngine {
  private static readonly HEAVENLY_STEMS = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"]

  private static readonly EARTHLY_BRANCHES = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"]

  private static readonly ELEMENTS = {
    甲: "Wood",
    乙: "Wood",
    丙: "Fire",
    丁: "Fire",
    戊: "Earth",
    己: "Earth",
    庚: "Metal",
    辛: "Metal",
    壬: "Water",
    癸: "Water",
  }

  private static readonly BRANCH_ELEMENTS = {
    子: "Water",
    丑: "Earth",
    寅: "Wood",
    卯: "Wood",
    辰: "Earth",
    巳: "Fire",
    午: "Fire",
    未: "Earth",
    申: "Metal",
    酉: "Metal",
    戌: "Earth",
    亥: "Water",
  }

  /**
   * Calculate Four Pillars of Destiny
   */
  static calculateFourPillars(baziData: BaziData): BaziResult["fourPillars"] {
    const { year, month, day, hour } = baziData

    // Simplified calculation - real implementation would use precise astronomical data
    const yearStem = this.HEAVENLY_STEMS[(year - 4) % 10]
    const yearBranch = this.EARTHLY_BRANCHES[(year - 4) % 12]

    const monthStem = this.getMonthStem(year, month)
    const monthBranch = this.getMonthBranch(month)

    const dayStem = this.getDayStem(year, month, day)
    const dayBranch = this.getDayBranch(year, month, day)

    const hourStem = this.getHourStem(dayStem, hour)
    const hourBranch = this.getHourBranch(hour)

    return {
      year: { heavenlyStem: yearStem, earthlyBranch: yearBranch },
      month: { heavenlyStem: monthStem, earthlyBranch: monthBranch },
      day: { heavenlyStem: dayStem, earthlyBranch: dayBranch },
      hour: { heavenlyStem: hourStem, earthlyBranch: hourBranch },
    }
  }

  /**
   * Analyze element balance
   */
  static analyzeElements(fourPillars: BaziResult["fourPillars"]): BaziResult["elements"] {
    const elementCount: Record<string, number> = {
      Wood: 0,
      Fire: 0,
      Earth: 0,
      Metal: 0,
      Water: 0,
    }

    // Count elements from stems and branches
    Object.values(fourPillars).forEach((pillar) => {
      const stemElement = this.ELEMENTS[pillar.heavenlyStem]
      const branchElement = this.BRANCH_ELEMENTS[pillar.earthlyBranch]

      elementCount[stemElement]++
      elementCount[branchElement]++
    })

    const dayMaster = this.ELEMENTS[fourPillars.day.heavenlyStem]
    const strongestElement = Object.entries(elementCount).reduce((a, b) =>
      elementCount[a[0]] > elementCount[b[0]] ? a : b,
    )[0]
    const weakestElement = Object.entries(elementCount).reduce((a, b) =>
      elementCount[a[0]] < elementCount[b[0]] ? a : b,
    )[0]

    return {
      dayMaster,
      strongestElement,
      weakestElement,
      elementBalance: elementCount,
    }
  }

  /**
   * Calculate complete Bazi analysis
   */
  static calculateComplete(baziData: BaziData): BaziResult {
    const fourPillars = this.calculateFourPillars(baziData)
    const elements = this.analyzeElements(fourPillars)

    return {
      fourPillars,
      elements,
      luckyElements: this.getLuckyElements(elements),
      unluckyElements: this.getUnluckyElements(elements),
      personality: this.getPersonalityTraits(elements.dayMaster),
      career: this.getCareerSuggestions(elements.dayMaster),
      relationships: this.getRelationshipAdvice(elements.dayMaster),
    }
  }

  // Helper methods (simplified implementations)
  private static getMonthStem(year: number, month: number): string {
    // Simplified - real calculation is more complex
    const baseIndex = ((year - 4) % 10) * 2 + month - 1
    return this.HEAVENLY_STEMS[baseIndex % 10]
  }

  private static getMonthBranch(month: number): string {
    const monthBranches = ["寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥", "子", "丑"]
    return monthBranches[month - 1]
  }

  private static getDayStem(year: number, month: number, day: number): string {
    // Simplified day stem calculation
    const totalDays = this.daysSinceEpoch(year, month, day)
    return this.HEAVENLY_STEMS[totalDays % 10]
  }

  private static getDayBranch(year: number, month: number, day: number): string {
    const totalDays = this.daysSinceEpoch(year, month, day)
    return this.EARTHLY_BRANCHES[totalDays % 12]
  }

  private static getHourStem(dayStem: string, hour: number): string {
    const dayIndex = this.HEAVENLY_STEMS.indexOf(dayStem)
    const hourIndex = Math.floor(hour / 2)
    return this.HEAVENLY_STEMS[(dayIndex * 2 + hourIndex) % 10]
  }

  private static getHourBranch(hour: number): string {
    const hourBranches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"]
    return hourBranches[Math.floor((hour + 1) / 2) % 12]
  }

  private static daysSinceEpoch(year: number, month: number, day: number): number {
    // Simplified calculation from a reference date
    const date = new Date(year, month - 1, day)
    const epoch = new Date(1900, 0, 1) // Reference date
    return Math.floor((date.getTime() - epoch.getTime()) / (1000 * 60 * 60 * 24))
  }

  private static getLuckyElements(elements: BaziResult["elements"]): string[] {
    // Simplified lucky element calculation based on day master
    const elementCycle = ["Wood", "Fire", "Earth", "Metal", "Water"]
    const dayMasterIndex = elementCycle.indexOf(elements.dayMaster)

    // Elements that support the day master
    return [
      elementCycle[(dayMasterIndex + 4) % 5], // Supporting element
      elementCycle[dayMasterIndex], // Same element
    ]
  }

  private static getUnluckyElements(elements: BaziResult["elements"]): string[] {
    const elementCycle = ["Wood", "Fire", "Earth", "Metal", "Water"]
    const dayMasterIndex = elementCycle.indexOf(elements.dayMaster)

    // Elements that clash with day master
    return [
      elementCycle[(dayMasterIndex + 2) % 5], // Destructive element
      elementCycle[(dayMasterIndex + 3) % 5], // Draining element
    ]
  }

  private static getPersonalityTraits(dayMaster: string): string[] {
    const traits: Record<string, string[]> = {
      Wood: ["Creative", "Flexible", "Growth-oriented", "Compassionate"],
      Fire: ["Passionate", "Energetic", "Charismatic", "Impulsive"],
      Earth: ["Stable", "Reliable", "Practical", "Nurturing"],
      Metal: ["Disciplined", "Organized", "Strong-willed", "Precise"],
      Water: ["Intuitive", "Adaptable", "Wise", "Mysterious"],
    }
    return traits[dayMaster] || []
  }

  private static getCareerSuggestions(dayMaster: string): string[] {
    const careers: Record<string, string[]> = {
      Wood: ["Education", "Healthcare", "Environmental", "Arts"],
      Fire: ["Entertainment", "Marketing", "Leadership", "Technology"],
      Earth: ["Real Estate", "Agriculture", "Construction", "Finance"],
      Metal: ["Engineering", "Law", "Military", "Manufacturing"],
      Water: ["Research", "Psychology", "Spirituality", "Communication"],
    }
    return careers[dayMaster] || []
  }

  private static getRelationshipAdvice(dayMaster: string): string[] {
    const advice: Record<string, string[]> = {
      Wood: ["Seek partners who appreciate growth", "Avoid overly rigid personalities"],
      Fire: ["Need passionate connections", "Balance intensity with stability"],
      Earth: ["Value loyalty and commitment", "Provide security to partners"],
      Metal: ["Appreciate honesty and directness", "Need intellectual stimulation"],
      Water: ["Seek deep emotional connections", "Value intuitive understanding"],
    }
    return advice[dayMaster] || []
  }
}
