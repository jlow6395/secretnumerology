import { z } from "zod"

// Form validation schemas
export const numerologyFormSchema = z.object({
  fullName: z.string().min(2, "ชื่อต้องมีอย่างน้อย 2 ตัวอักษร").max(100, "ชื่อยาวเกินไป"),
  birthDate: z.object({
    day: z.number().min(1).max(31),
    month: z.number().min(1).max(12),
    year: z.number().min(1900).max(new Date().getFullYear()),
  }),
})

export const phoneNumberSchema = z.object({
  number: z.string().regex(/^[0-9-+().\s]+$/, "รูปแบบเบอร์โทรไม่ถูกต้อง"),
})

export const compatibilitySchema = z.object({
  partner1: numerologyFormSchema,
  partner2: numerologyFormSchema,
})

// Validation utilities
export const validateInput = <T>(schema: z.ZodSchema<T>, data: unknown): { success: boolean; data?: T; errors?: string[] } => {
  try {
    const result = schema.parse(data)
    return { success: true, data: result }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        errors: error.errors.map(err => err.message) 
      }
    }
    return { success: false, errors: ["เกิดข้อผิดพลาดในการตรวจสอบข้อมูล"] }
  }
}

// ระบบตรวจสอบข้อมูลที่รัดกุม
// Comprehensive Data Validation System

export interface ValidationResult {
  isValid: boolean
  errors: string[]
  warnings?: string[]
}

export interface ProfileValidationData {
  fullName: string
  dateOfBirth: string
  email?: string
}

export interface NumerologyValidationData {
  name: string
  birthDate: string
}

// ==================== PROFILE VALIDATION ====================

/**
 * ตรวจสอบข้อมูลโปรไฟล์ผู้ใช้
 * Validates user profile data
 */
export function validateProfileData(data: ProfileValidationData): ValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  // ตรวจสอบชื่อ-นามสกุล
  const nameValidation = validateFullName(data.fullName)
  if (!nameValidation.isValid) {
    errors.push(...nameValidation.errors)
  }
  if (nameValidation.warnings) {
    warnings.push(...nameValidation.warnings)
  }

  // ตรวจสอบวันเกิด
  const birthValidation = validateBirthDate(data.dateOfBirth)
  if (!birthValidation.isValid) {
    errors.push(...birthValidation.errors)
  }
  if (birthValidation.warnings) {
    warnings.push(...birthValidation.warnings)
  }

  // ตรวจสอบอีเมล (ถ้ามี)
  if (data.email) {
    const emailValidation = validateEmail(data.email)
    if (!emailValidation.isValid) {
      errors.push(...emailValidation.errors)
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings: warnings.length > 0 ? warnings : undefined
  }
}

/**
 * ตรวจสอบชื่อ-นามสกุล
 * Validates full name
 */
export function validateFullName(fullName: string): ValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  // ตรวจสอบว่าไม่ว่าง
  if (!fullName || !fullName.trim()) {
    errors.push('กรุณากรอกชื่อ-นามสกุล')
    return { isValid: false, errors }
  }

  const trimmedName = fullName.trim()

  // ตรวจสอบความยาว
  if (trimmedName.length < 2) {
    errors.push('ชื่อ-นามสกุลต้องมีอย่างน้อย 2 ตัวอักษร')
  }

  if (trimmedName.length > 100) {
    errors.push('ชื่อ-นามสกุลต้องไม่เกิน 100 ตัวอักษร')
  }

  // ตรวจสอบตัวอักษรที่ไม่อนุญาต
  const invalidChars = /[<>{}[\]\\\/&"'`]/
  if (invalidChars.test(trimmedName)) {
    errors.push('ชื่อ-นามสกุลมีตัวอักษรที่ไม่อนุญาต')
  }

  // ตรวจสอบว่ามีตัวเลขมากเกินไป
  const numberCount = (trimmedName.match(/\d/g) || []).length
  if (numberCount > trimmedName.length * 0.3) {
    warnings.push('ชื่อ-นามสกุลมีตัวเลขค่อนข้างเยอะ กรุณาตรวจสอบความถูกต้อง')
  }

  // ตรวจสอบว่ามีช่องว่างมากเกินไป
  const spaceCount = (trimmedName.match(/ /g) || []).length
  if (spaceCount > 5) {
    warnings.push('ชื่อ-นามสกุลมีช่องว่างมาก อาจส่งผลต่อการคำนวณ')
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings: warnings.length > 0 ? warnings : undefined
  }
}

/**
 * ตรวจสอบวันเกิด
 * Validates birth date
 */
export function validateBirthDate(dateOfBirth: string): ValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  // ตรวจสอบว่าไม่ว่าง
  if (!dateOfBirth) {
    errors.push('กรุณาเลือกวันเกิด')
    return { isValid: false, errors }
  }

  // ตรวจสอบรูปแบบวันที่
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/
  if (!dateRegex.test(dateOfBirth)) {
    errors.push('รูปแบบวันเกิดไม่ถูกต้อง')
    return { isValid: false, errors }
  }

  const birthDate = new Date(dateOfBirth)
  const today = new Date()

  // ตรวจสอบว่าเป็นวันที่ที่ถูกต้อง
  if (isNaN(birthDate.getTime())) {
    errors.push('วันเกิดไม่ถูกต้อง')
    return { isValid: false, errors }
  }

  // ตรวจสอบว่าไม่เป็นวันในอนาคต
  if (birthDate > today) {
    errors.push('วันเกิดไม่สามารถเป็นวันในอนาคตได้')
  }

  // ตรวจสอบอายุ
  const age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  const actualAge = monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate()) 
    ? age - 1 : age

  if (actualAge < 0) {
    errors.push('วันเกิดไม่ถูกต้อง')
  } else if (actualAge > 120) {
    errors.push('อายุไม่สามารถเกิน 120 ปี')
  } else if (actualAge < 1) {
    warnings.push('อายุน้อยมาก กรุณาตรวจสอบความถูกต้อง')
  } else if (actualAge > 100) {
    warnings.push('อายุสูงมาก กรุณาตรวจสอบความถูกต้อง')
  }

  // ตรวจสอบวันที่ในอดีตไกล
  const yearDiff = today.getFullYear() - birthDate.getFullYear()
  if (yearDiff > 100) {
    warnings.push('วันเกิดในอดีตไกลมาก กรุณาตรวจสอบความถูกต้อง')
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings: warnings.length > 0 ? warnings : undefined
  }
}

/**
 * ตรวจสอบอีเมล
 * Validates email address
 */
export function validateEmail(email: string): ValidationResult {
  const errors: string[] = []

  if (!email || !email.trim()) {
    errors.push('กรุณากรอกอีเมล')
    return { isValid: false, errors }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.trim())) {
    errors.push('รูปแบบอีเมลไม่ถูกต้อง')
  }

  if (email.length > 254) {
    errors.push('อีเมลยาวเกินไป')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// ==================== NUMEROLOGY VALIDATION ====================

/**
 * ตรวจสอบข้อมูลสำหรับการคำนวณเลขศาสตร์
 * Validates data for numerology calculations
 */
export function validateNumerologyData(data: NumerologyValidationData): ValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  // ตรวจสอบชื่อ
  const nameValidation = validateNumerologyName(data.name)
  if (!nameValidation.isValid) {
    errors.push(...nameValidation.errors)
  }
  if (nameValidation.warnings) {
    warnings.push(...nameValidation.warnings)
  }

  // ตรวจสอบวันเกิด
  const birthValidation = validateBirthDate(data.birthDate)
  if (!birthValidation.isValid) {
    errors.push(...birthValidation.errors)
  }
  if (birthValidation.warnings) {
    warnings.push(...birthValidation.warnings)
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings: warnings.length > 0 ? warnings : undefined
  }
}

/**
 * ตรวจสอบชื่อสำหรับการคำนวณเลขศาสตร์
 * Validates name for numerology calculations
 */
export function validateNumerologyName(name: string): ValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  if (!name || !name.trim()) {
    errors.push('กรุณากรอกชื่อ')
    return { isValid: false, errors }
  }

  const trimmedName = name.trim()

  // ตรวจสอบความยาว
  if (trimmedName.length < 2) {
    errors.push('ชื่อต้องมีอย่างน้อย 2 ตัวอักษร')
  }

  if (trimmedName.length > 50) {
    warnings.push('ชื่อยาวมาก อาจส่งผลต่อความแม่นยำของการคำนวณ')
  }

  // ตรวจสอบตัวอักษรพิเศษ
  const specialChars = /[!@#$%^&*()_+=[\]{};':"\\|,.<>?]/
  if (specialChars.test(trimmedName)) {
    warnings.push('ชื่อมีตัวอักษรพิเศษ อาจส่งผลต่อการคำนวณ')
  }

  // ตรวจสอบตัวเลข
  if (/\d/.test(trimmedName)) {
    warnings.push('ชื่อมีตัวเลข อาจส่งผลต่อการคำนวณเลขศาสตร์')
  }

  // ตรวจสอบการเว้นวรรค
  if (trimmedName.includes('  ')) {
    warnings.push('ชื่อมีช่องว่างมากเกินไป กรุณาตรวจสอบ')
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings: warnings.length > 0 ? warnings : undefined
  }
}

// ==================== UTILITY FUNCTIONS ====================

/**
 * ทำความสะอาดชื่อสำหรับการคำนวณ
 * Sanitizes name for calculations
 */
export function sanitizeName(name: string): string {
  return name
    .trim()
    .replace(/\s+/g, ' ') // แทนที่ช่องว่างมากกว่า 1 ด้วย 1 ช่องว่าง
    .replace(/[^\u0E00-\u0E7Fa-zA-Z\s]/g, '') // เก็บเฉพาะตัวอักษรไทย อังกฤษ และช่องว่าง
}

/**
 * ตรวจสอบว่าข้อมูลพร้อมสำหรับการคำนวณหรือไม่
 * Checks if data is ready for calculations
 */
export function isDataReadyForCalculation(data: NumerologyValidationData): boolean {
  const validation = validateNumerologyData(data)
  return validation.isValid
}

/**
 * สร้างข้อความแสดงข้อผิดพลาด
 * Creates error message string
 */
export function formatValidationErrors(validation: ValidationResult): string {
  if (validation.isValid) return ''
  
  let message = validation.errors.join('\n')
  
  if (validation.warnings && validation.warnings.length > 0) {
    message += '\n\nคำเตือน:\n' + validation.warnings.join('\n')
  }
  
  return message
}

/**
 * ตรวจสอบรหัสผ่าน
 * Validates password strength
 */
export function validatePassword(password: string): ValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  if (!password) {
    errors.push('กรุณากรอกรหัสผ่าน')
    return { isValid: false, errors }
  }

  if (password.length < 6) {
    errors.push('รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร')
  }

  if (password.length < 8) {
    warnings.push('รหัสผ่านควรมีอย่างน้อย 8 ตัวอักษร')
  }

  if (!/[A-Z]/.test(password)) {
    warnings.push('รหัสผ่านควรมีตัวอักษรพิมพ์ใหญ่')
  }

  if (!/[a-z]/.test(password)) {
    warnings.push('รหัสผ่านควรมีตัวอักษรพิมพ์เล็ก')
  }

  if (!/\d/.test(password)) {
    warnings.push('รหัสผ่านควรมีตัวเลข')
  }

  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?]/.test(password)) {
    warnings.push('รหัสผ่านควรมีตัวอักษรพิเศษ')
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings: warnings.length > 0 ? warnings : undefined
  }
}
