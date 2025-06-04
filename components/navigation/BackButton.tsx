"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

interface BackButtonProps {
  href?: string
  label?: string
  className?: string
  variant?: "default" | "minimal" | "floating"
}

export default function BackButton({ href, label = "ย้อนกลับ", className = "", variant = "default" }: BackButtonProps) {
  const router = useRouter()

  const handleBack = () => {
    if (href) {
      router.push(href)
    } else {
      router.back()
    }
  }

  const variants = {
    default:
      "flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] text-gray-300 hover:text-white transition-all duration-200 border border-[#333333] hover:border-[#555555]",
    minimal: "flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200",
    floating:
      "fixed top-4 left-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-black/80 backdrop-blur-sm text-white hover:bg-black/90 transition-all duration-200 border border-white/20",
  }

  return (
    <motion.button
      whileHover={{ scale: variant === "floating" ? 1.1 : 1.02 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleBack}
      className={`${variants[variant]} ${className}`}
      aria-label={label}
    >
      <ArrowLeft className="h-5 w-5" />
      {variant !== "floating" && <span className="font-medium">{label}</span>}
    </motion.button>
  )
}
