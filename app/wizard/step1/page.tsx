"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Sparkles, Heart, Target, Sun, Star } from "lucide-react"
import WizardLayout from "@/components/wizard/WizardLayout"

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

  const soulMapPreview = [
    { icon: Heart, label: "Life Path", value: "8", color: "text-red-400" },
    { icon: Target, label: "Expression", value: "3", color: "text-blue-400" },
    { icon: Sparkles, label: "Talent", value: "47/11", color: "text-purple-400" },
    { icon: Sun, label: "Sun Number", value: "5", color: "text-yellow-400" },
    { icon: Star, label: "Personal Year", value: "7", color: "text-green-400" },
  ]

  return (
    <WizardLayout
      currentStep={1}
      totalSteps={9}
      onNext={handleNext}
      showBack={false}
      nextDisabled={!isFormValid}
      nextLabel="Begin Journey"
    >
      <div className="space-y-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent mb-4">
            Welcome to Your Soul's Journey
          </h2>
          <p className="font-body text-lg text-white/80 leading-relaxed">
            Discover the hidden patterns in your name and birthdate that reveal your life's purpose, talents, and
            destiny.
          </p>
        </motion.div>

        {/* Input Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-2xl p-6 border border-white/10"
        >
          <h3 className="font-heading text-xl font-semibold text-white mb-6 flex items-center">
            <Sparkles className="h-5 w-5 mr-2 text-blue-400" />
            Your Sacred Details
          </h3>

          <div className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-white/80 mb-2 font-body">
                Full Name (as on birth certificate)
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your complete name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm transition-all duration-300 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20 font-body"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2 font-body">Date of Birth</label>
              <div className="grid grid-cols-3 gap-3">
                <select
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white backdrop-blur-sm transition-all duration-300 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20 font-body"
                  required
                >
                  <option value="">Day</option>
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                    <option key={day} value={day} className="bg-slate-800 text-white">
                      {day}
                    </option>
                  ))}
                </select>

                <select
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white backdrop-blur-sm transition-all duration-300 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20 font-body"
                  required
                >
                  <option value="">Month</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <option key={month} value={month} className="bg-slate-800 text-white">
                      {month}
                    </option>
                  ))}
                </select>

                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white backdrop-blur-sm transition-all duration-300 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20 font-body"
                  required
                >
                  <option value="">Year</option>
                  {Array.from({ length: 100 }, (_, i) => 2024 - i).map((year) => (
                    <option key={year} value={year} className="bg-slate-800 text-white">
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Soul Map Preview */}
        {formData.fullName && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-strong rounded-2xl p-6 border border-white/20 backdrop-blur-xl"
          >
            <h3 className="font-heading text-xl font-semibold text-white mb-4 text-center">
              Hello {formData.fullName.split(" ")[0]}, here's a preview of your Soul Map
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {soulMapPreview.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center p-3 glass rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <item.icon className={`h-6 w-6 mx-auto mb-2 ${item.color}`} />
                  <div className={`text-lg font-bold ${item.color} font-mono`}>{item.value}</div>
                  <div className="text-xs text-white/60 font-body">{item.label}</div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-white/70 mt-4 text-sm font-body">
              ✨ Let's explore your cosmic blueprint and unlock your soul's secrets
            </p>
          </motion.div>
        )}
      </div>
    </WizardLayout>
  )
}
