"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Sun, Heart, Zap, TrendingDown, TrendingUp, Calendar } from "lucide-react"
import WizardLayout from "@/components/wizard/WizardLayout"

export default function Step5() {
  const router = useRouter()

  const handleNext = () => {
    router.push("/wizard/step6")
  }

  const handleBack = () => {
    router.push("/wizard/step4")
  }

  const sunData = {
    number: 5,
    title: "The Dynamic Adventurer",
    description: "Your emotional foundation is built on freedom, change, and new experiences.",
    emotionalPattern: "You thrive on variety and can become restless when life becomes too routine.",
    stressTriggers: [
      "Feeling trapped or confined",
      "Monotonous routines",
      "Lack of personal freedom",
      "Being micromanaged",
    ],
    emotionalStrengths: [
      "Adaptable to change",
      "Optimistic outlook",
      "Adventurous spirit",
      "Quick recovery from setbacks",
    ],
    monthlyRhythm: "Your emotions follow a 5-month cycle of expansion and contraction",
  }

  return (
    <WizardLayout currentStep={5} totalSteps={9} onNext={handleNext} onBack={handleBack} nextLabel="Face Challenges">
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Sun className="h-8 w-8 text-yellow-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Your Sun Number</h2>
          </div>
          <p className="text-yellow-200">Your emotional foundation and inner rhythm</p>
        </motion.div>

        {/* Sun Number Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 rounded-3xl blur opacity-60 animate-pulse"></div>
          <div className="relative bg-slate-800/90 rounded-3xl p-8 border border-yellow-500/30 backdrop-blur-sm text-center">
            <div className="text-8xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">
              {sunData.number}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{sunData.title}</h3>
            <p className="text-yellow-200 text-lg">{sunData.description}</p>
          </div>
        </motion.div>

        {/* Emotional Pattern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-xl p-6 border border-yellow-400/30"
        >
          <div className="flex items-center mb-4">
            <Heart className="h-6 w-6 text-yellow-400 mr-3" />
            <h4 className="text-lg font-semibold text-white">Your Emotional Pattern</h4>
          </div>
          <p className="text-yellow-200 text-lg leading-relaxed">{sunData.emotionalPattern}</p>
        </motion.div>

        {/* Stress & Strengths */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-red-900/20 rounded-xl p-6 border border-red-500/30"
          >
            <div className="flex items-center mb-4">
              <TrendingDown className="h-5 w-5 text-red-400 mr-2" />
              <h4 className="text-lg font-semibold text-white">Stress Triggers</h4>
            </div>
            <ul className="space-y-2">
              {sunData.stressTriggers.map((trigger, index) => (
                <li key={index} className="text-red-200 flex items-center">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  {trigger}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-green-900/20 rounded-xl p-6 border border-green-500/30"
          >
            <div className="flex items-center mb-4">
              <TrendingUp className="h-5 w-5 text-green-400 mr-2" />
              <h4 className="text-lg font-semibold text-white">Emotional Strengths</h4>
            </div>
            <ul className="space-y-2">
              {sunData.emotionalStrengths.map((strength, index) => (
                <li key={index} className="text-green-200 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  {strength}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Monthly Rhythm */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30"
        >
          <div className="flex items-center mb-4">
            <Zap className="h-6 w-6 text-blue-400 mr-3" />
            <h4 className="text-lg font-semibold text-white">Your Emotional Rhythm</h4>
          </div>
          <p className="text-blue-200 text-lg">{sunData.monthlyRhythm}</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-400/30 text-center"
        >
          <Calendar className="h-8 w-8 text-purple-400 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">Track Your Rhythm</h4>
          <p className="text-purple-200 text-sm">
            Discover your emotional rhythm and monthly energy map in your complete numerology reading
          </p>
        </motion.div>
      </div>
    </WizardLayout>
  )
}
