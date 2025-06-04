"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Sparkles, Eye, Heart, Gift } from "lucide-react"
import WizardLayout from "@/components/wizard/WizardLayout"

export default function Step3() {
  const router = useRouter()

  const handleNext = () => {
    router.push("/wizard/step4")
  }

  const handleBack = () => {
    router.push("/wizard/step2")
  }

  const talentData = {
    fullNumber: "47/11",
    expressionDigit: 47,
    innerDriveDigit: 11,
    title: "The Intuitive Visionary",
    description: "You possess rare gifts of spiritual insight combined with practical manifestation abilities.",
    expressionMeaning: "Creative expression through innovative ideas and artistic vision",
    innerDriveMeaning: "Deep spiritual intuition and desire to inspire others",
    hiddenGifts: [
      "Psychic sensitivity",
      "Innovative thinking",
      "Healing abilities",
      "Artistic talents",
      "Leadership through inspiration",
    ],
  }

  return (
    <WizardLayout
      currentStep={3}
      totalSteps={9}
      onNext={handleNext}
      onBack={handleBack}
      nextLabel="Discover Expression"
    >
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-purple-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Your Talent Number</h2>
          </div>
          <p className="text-purple-200">พรสวรรค์ - The hidden gifts encoded in your name</p>
        </motion.div>

        {/* Talent Number Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-3xl blur opacity-60 animate-pulse"></div>
          <div className="relative bg-slate-800/90 rounded-3xl p-8 border border-purple-500/30 backdrop-blur-sm text-center">
            <div className="text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              {talentData.fullNumber}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{talentData.title}</h3>
            <p className="text-purple-200 text-lg">{talentData.description}</p>
          </div>
        </motion.div>

        {/* Digit Breakdown */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30"
          >
            <div className="flex items-center mb-4">
              <Eye className="h-6 w-6 text-blue-400 mr-3" />
              <div>
                <h4 className="text-xl font-bold text-white">{talentData.expressionDigit}</h4>
                <p className="text-blue-300 text-sm">Expression Digit</p>
              </div>
            </div>
            <p className="text-blue-200">{talentData.expressionMeaning}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-pink-900/20 rounded-xl p-6 border border-pink-500/30"
          >
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-pink-400 mr-3" />
              <div>
                <h4 className="text-xl font-bold text-white">{talentData.innerDriveDigit}</h4>
                <p className="text-pink-300 text-sm">Inner Drive Digit</p>
              </div>
            </div>
            <p className="text-pink-200">{talentData.innerDriveMeaning}</p>
          </motion.div>
        </div>

        {/* Hidden Gifts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl p-6 border border-purple-400/30"
        >
          <div className="flex items-center mb-4">
            <Gift className="h-6 w-6 text-purple-400 mr-3" />
            <h4 className="text-lg font-semibold text-white">Your Hidden Gifts</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {talentData.hiddenGifts.map((gift, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex items-center p-3 bg-purple-500/10 rounded-lg border border-purple-400/20"
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                <span className="text-purple-200">{gift}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-xl p-6 border border-amber-400/30 text-center"
        >
          <Sparkles className="h-8 w-8 text-amber-400 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">Unlock Your Full Potential</h4>
          <p className="text-amber-200 text-sm">
            Your hidden gifts are explained deeper in your full numerology reading with practical activation steps
          </p>
        </motion.div>
      </div>
    </WizardLayout>
  )
}
