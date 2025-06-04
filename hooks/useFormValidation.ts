"use client"

import { useState, useCallback } from "react"

interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: any) => string | null
}

interface ValidationRules {
  [key: string]: ValidationRule
}

interface ValidationErrors {
  [key: string]: string
}

export function useFormValidation<T extends Record<string, any>>(initialValues: T, rules: ValidationRules) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateField = useCallback(
    (name: string, value: any): string | null => {
      const rule = rules[name]
      if (!rule) return null

      if (rule.required && (!value || value.toString().trim() === "")) {
        return "ฟิลด์นี้จำเป็นต้องกรอก"
      }

      if (rule.minLength && value.toString().length < rule.minLength) {
        return `ต้องมีอย่างน้อย ${rule.minLength} ตัวอักษร`
      }

      if (rule.maxLength && value.toString().length > rule.maxLength) {
        return `ต้องไม่เกิน ${rule.maxLength} ตัวอักษร`
      }

      if (rule.pattern && !rule.pattern.test(value.toString())) {
        return "รูปแบบไม่ถูกต้อง"
      }

      if (rule.custom) {
        return rule.custom(value)
      }

      return null
    },
    [rules],
  )

  const setValue = useCallback(
    (name: string, value: any) => {
      setValues((prev) => ({ ...prev, [name]: value }))

      // Validate if field has been touched
      if (touched[name]) {
        const error = validateField(name, value)
        setErrors((prev) => ({
          ...prev,
          [name]: error || "",
        }))
      }
    },
    [touched, validateField],
  )

  const setFieldTouched = useCallback(
    (name: string) => {
      setTouched((prev) => ({ ...prev, [name]: true }))

      // Validate when field is touched
      const error = validateField(name, values[name])
      setErrors((prev) => ({
        ...prev,
        [name]: error || "",
      }))
    },
    [values, validateField],
  )

  const validateAll = useCallback((): boolean => {
    const newErrors: ValidationErrors = {}
    let isValid = true

    Object.keys(rules).forEach((name) => {
      const error = validateField(name, values[name])
      if (error) {
        newErrors[name] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    setTouched(Object.keys(rules).reduce((acc, key) => ({ ...acc, [key]: true }), {}))

    return isValid
  }, [rules, values, validateField])

  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }, [initialValues])

  return {
    values,
    errors,
    touched,
    setValue,
    setFieldTouched,
    validateAll,
    reset,
    isValid: Object.keys(errors).length === 0 && Object.keys(touched).length > 0,
  }
}
