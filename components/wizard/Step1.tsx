"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Step1() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    day: "",
    month: "",
    year: "",
  })
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  useEffect(() => {
    setIsFormValid(formData.fullName && formData.day && formData.month && formData.year)
  }, [formData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (isFormValid) {
      localStorage.setItem("numerology_name", formData.fullName)
      localStorage.setItem("numerology_birthdate", `${formData.day}/${formData.month}/${formData.year}`)
      router.push("/wizard/step2")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Mystical Background */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="sacred-geometry" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
              <circle cx="7.5" cy="7.5" r="0.8" fill="currentColor" opacity="0.4" />
              <path d="M3,3 L12,3 L12,12 L3,12 Z" fill="none" stroke="currentColor" strokeWidth="0.15" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sacred-geometry)" className="text-violet-400" />
        </svg>
      </div>

      {/* Clean Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex items-center justify-center pt-6 pb-4 px-6"
      >
        <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-amber-400 to-violet-400 bg-clip-text text-transparent">
          SecretNumerology
        </h1>
      </motion.header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-[calc(100vh-120px)] px-6 pb-24">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent mb-4">
                What Is My Life Path Number?
              </h2>
              <p className="text-lg text-purple-200 leading-relaxed">
                Get your complete Numerology Reading for FREE. Discover your life path number and cosmic blueprint.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Your Details</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-purple-200 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-purple-500/30 bg-slate-700/50 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-2">Date of Birth:</label>
                  <div className="grid grid-cols-3 gap-2">
                    <select
                      name="day"
                      value={formData.day}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-purple-500/30 bg-slate-700/50 px-3 py-3 text-white backdrop-blur-sm transition-all duration-300 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                      required
                    >
                      <option value="">DD</option>
                      {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>

                    <select
                      name="month"
                      value={formData.month}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-purple-500/30 bg-slate-700/50 px-3 py-3 text-white backdrop-blur-sm transition-all duration-300 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                      required
                    >
                      <option value="">MM</option>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>

                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-purple-500/30 bg-slate-700/50 px-3 py-3 text-white backdrop-blur-sm transition-all duration-300 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                      required
                    >
                      <option value="">YYYY</option>
                      {Array.from({ length: 100 }, (_, i) => 2024 - i).map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-sm p-6 z-20">
        <div className="flex justify-end max-w-sm mx-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleNext}
            disabled={!isFormValid}
            className={`flex-1 relative overflow-hidden px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 border ${
              isFormValid
                ? "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 border-violet-400/30"
                : "bg-slate-600/50 border-slate-500/30 cursor-not-allowed opacity-50"
            }`}
          >
            <div className="relative flex items-center justify-center space-x-2">
              <span>Continue</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  )
}
