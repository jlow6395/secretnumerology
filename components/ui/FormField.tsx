"use client"

import { useState } from "react"
import { AlertCircle, Eye, EyeOff } from "lucide-react"

interface FormFieldProps {
  label: string
  name: string
  type?: "text" | "email" | "password" | "number" | "tel" | "date"
  value: string | number
  onChange: (value: string | number) => void
  error?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  className?: string
}

export default function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  required = false,
  disabled = false,
  className = "",
}: FormFieldProps) {
  const [showPassword, setShowPassword] = useState(false)

  const inputType = type === "password" && showPassword ? "text" : type

  return (
    <div className={`space-y-2 ${className}`}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>

      <div className="relative">
        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={(e) => onChange(type === "number" ? Number(e.target.value) : e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full px-4 py-3 rounded-xl border bg-[#0a0a0a] text-white placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-[#333333] focus:border-[#ff8c00] focus:ring-[#ff8c00]/20"
          } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        )}
      </div>

      {error && (
        <div className="flex items-center space-x-2 text-red-400 text-sm">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}
