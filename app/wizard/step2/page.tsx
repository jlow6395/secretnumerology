"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Heart, Star, Briefcase, TrendingUp, AlertTriangle } from "lucide-react"
import WizardLayout from "@/components/wizard/WizardLayout"

export default function Step2() {
  const router = useRouter()

  const handleNext = () => {
    router.push("/wizard/step3")
  }

  const handleBack = () => {
    router.push("/wizard/step1")
  }

  const lifePathData = {
    number: 8,
    title: "The Achiever",
    description: "You are destined for material success and recognition in the world.",
    strengths: ["Natural leadership", "Business acumen", "Organizational skills", "Determination"],
    challenges: ["Workaholic tendencies", "Materialism", "Impatience", "Control issues"],
    careers: ["CEO/Executive", "Entrepreneur", "Investment Banker", "Real Estate", "Politics"],
    keywords: ["Power", "Success", "Authority", "Material World", "Achievement"],
  }

  return (
    <WizardLayout currentStep={2} totalSteps={9} onNext={handleNext} onBack={handleBack} nextLabel="Explore Talents">
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-red-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Your Life Path Number</h2>
          </div>
          <p className="text-purple-200">The core essence of your soul's journey in this lifetime</p>
        </motion.div>

        {/* Life Path Number Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-3xl blur opacity-60 animate-pulse"></div>
          <div className="relative bg-slate-800/90 rounded-3xl p-8 border border-red-500/30 backdrop-blur-sm text-center">
            <div className="text-8xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-4">
              {lifePathData.number}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{lifePathData.title}</h3>
            <p className="text-red-200 text-lg">{lifePathData.description}</p>
          </div>
        </motion.div>

        {/* Keywords */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {lifePathData.keywords.map((keyword, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/30 rounded-full text-red-300 text-sm font-medium"
            >
              {keyword}
            </span>
          ))}
        </motion.div>

        {/* Strengths & Challenges */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-green-900/20 rounded-xl p-6 border border-green-500/30"
          >
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-green-400 mr-2" />
              <h4 className="text-lg font-semibold text-white">Strengths</h4>
            </div>
            <ul className="space-y-2">
              {lifePathData.strengths.map((strength, index) => (
                <li key={index} className="text-green-200 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  {strength}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-orange-900/20 rounded-xl p-6 border border-orange-500/30"
          >
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-5 w-5 text-orange-400 mr-2" />
              <h4 className="text-lg font-semibold text-white">Challenges</h4>
            </div>
            <ul className="space-y-2">
              {lifePathData.challenges.map((challenge, index) => (
                <li key={index} className="text-orange-200 flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  {challenge}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Career Directions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30"
        >
          <div className="flex items-center mb-4">
            <Briefcase className="h-5 w-5 text-blue-400 mr-2" />
            <h4 className="text-lg font-semibold text-white">Career Directions</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {lifePathData.careers.map((career, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-lg text-blue-200 text-sm"
              >
                {career}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-400/30 text-center"
        >
          <TrendingUp className="h-8 w-8 text-purple-400 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">Want to know more?</h4>
          <p className="text-purple-200 text-sm">
            See your full life transition years and timing in your detailed numerology report
          </p>
        </motion.div>
      </div>
    </WizardLayout>
  )
}
