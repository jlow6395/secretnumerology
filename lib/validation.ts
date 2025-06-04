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
    const result = schema.parse(data)\
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
