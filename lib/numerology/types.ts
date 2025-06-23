// ==================== NUMEROLOGY TYPES ====================

/**
 * Base Numerology Result
 */
export interface NumerologyResult {
  number: number;
  rawSum?: number;
  description: string;
  meaning: string;
  calculation: string;
}

/**
 * Master Numbers (11, 22, 33)
 */
export type MasterNumber = 11 | 22 | 33;

/**
 * Regular Numbers (1-9)
 */
export type RegularNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/**
 * All possible numerology numbers
 */
export type NumerologyNumber = RegularNumber | MasterNumber;

/**
 * Date input format
 */
export interface DateInput {
  day: number;
  month: number;
  year: number;
}

/**
 * Life Path Number Result
 */
export interface LifePathResult extends NumerologyResult {
  type: 'life_path';
  challenges: string[];
  opportunities: string[];
}

/**
 * Expression Number Result
 */
export interface ExpressionResult extends NumerologyResult {
  type: 'expression';
  talents: string[];
  goals: string[];
}

/**
 * Heart's Desire Number Result
 */
export interface HeartDesireResult extends NumerologyResult {
  type: 'heart_desire';
  innerMotivation: string;
  soulUrge: string;
}

/**
 * Personality Number Result
 */
export interface PersonalityResult extends NumerologyResult {
  type: 'personality';
  outerPersonality: string;
  firstImpression: string;
}

/**
 * Personal Year/Month/Day Result
 */
export interface PersonalCycleResult extends NumerologyResult {
  type: 'personal_year' | 'personal_month' | 'personal_day';
  period: string;
  energy: string;
  advice: string;
}

/**
 * Complete Numerology Profile
 */
export interface NumerologyProfile {
  lifePath: LifePathResult;
  expression: ExpressionResult;
  heartDesire: HeartDesireResult;
  personality: PersonalityResult;
  personalYear: PersonalCycleResult;
  personalMonth: PersonalCycleResult;
  personalDay: PersonalCycleResult;
  sunNumber: NumerologyResult;
  talentNumber: NumerologyResult;
  maturityNumber: NumerologyResult;
}

/**
 * Calculation Input
 */
export interface NumerologyInput {
  fullName: string;
  dateOfBirth: string; // YYYY-MM-DD format
}

/**
 * Formula Configuration
 */
export interface NumerologyFormula {
  id: string;
  name: string;
  input: string[];
  output: string;
  description: string;
  calculation: (input: any) => NumerologyResult;
  validation: (input: any) => boolean;
}

/**
 * Compatibility Result
 */
export interface CompatibilityResult {
  score: number;
  level: 'low' | 'moderate' | 'good' | 'excellent';
  description: string;
  strengths: string[];
  challenges: string[];
  advice: string[];
}

export interface LoveCompatibility extends CompatibilityResult {
  romanticPotential: string;
  communicationStyle: string;
  emotionalConnection: string;
  longTermProspects: string;
}

export interface WorkCompatibility extends CompatibilityResult {
  workingStyle: string;
  leadershipDynamic: string;
  collaborationPotential: string;
  conflictResolution: string;
}

export interface FamilyCompatibility extends CompatibilityResult {
  parentChildDynamic?: string;
  siblingRelationship?: string;
  familyHarmony: string;
  supportSystem: string;
}

export interface CompatibilityAnalysis {
  person1: NumerologyProfile;
  person2: NumerologyProfile;
  love: LoveCompatibility;
  work: WorkCompatibility;
  family: FamilyCompatibility;
  overall: CompatibilityResult;
  chineseZodiacCompatibility?: {
    score: number;
    description: string;
    bestAspects: string[];
    challenges: string[];
  };
}

// User Profile for LINE LIFF
export interface UserProfile {
  id: string;
  lineUserId: string;
  displayName: string;
  pictureUrl?: string;
  numerologyProfiles: SavedNumerologyProfile[];
  createdAt: string;
  updatedAt: string;
}

export interface SavedNumerologyProfile {
  id: string;
  name: string;
  fullName: string;
  dateOfBirth: string;
  profile: NumerologyProfile;
  chineseZodiac?: any;
  isDefault: boolean;
  createdAt: string;
  tags?: string[]; // เช่น 'myself', 'partner', 'family', 'friend'
}

// Compatibility Request
export interface CompatibilityRequest {
  profile1Id: string;
  profile2Id: string;
  analysisType: 'love' | 'work' | 'family' | 'all';
} 