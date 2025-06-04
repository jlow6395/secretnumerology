"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Heart, Users, Zap, Shield, Star } from "lucide-react"
import WizardLayout from "@/components/wizard/WizardLayout"

export default function Step8() {
  const router = useRouter()

  const handleNext = () => {
    router.push("/wizard/step9")
  }

  const handleBack = () => {
    router.push("/wizard/step7")
  }

  const compatibilityData = {
    userType: "Life Path 8 - The Achiever",
    compatibilityGroup: "Power & Success Oriented",
    bestMatches: [
      { number: 2, type: "The Supporter", reason: "Provides balance and emotional support" },
      { number: 4, type: "The Builder", reason: "Shares practical approach to success" },
      { number: 6, type: "The Nurturer", reason: "Offers stability and care" },
    ],
    challengingMatches: [
      { number: 7, type: "The Seeker", reason: "Different priorities - spiritual vs material" },
      { number: 9, type: "The Humanitarian", reason: "Conflicting views on success and giving" },
    ],
    partnerEnergyTypes: {
      supportive: ["Grounding", "Nurturing", "Cooperative"],
      conflicting: ["Overly Spiritual", "Unpractical", "Overly Emotional"],
    },
    loveAdvice:
      "You need a partner who understands your ambition and supports your goals while helping you stay grounded.",
  }

  return (
    <WizardLayout currentStep={8} totalSteps={9} onNext={handleNext} onBack={handleBack} nextLabel="Get Your Report">
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-pink-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Your Love Compatibility</h2>
          </div>
          <p className="text-pink-200">Discover your perfect match and relationship dynamics</p>
        </motion.div>

        {/* User Type Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-red-600 to-purple-600 rounded-3xl blur opacity-60 animate-pulse"></div>
          <div className="relative bg-slate-800/90 rounded-3xl p-8 border border-pink-500/30 backdrop-blur-sm text-center">
            <h3 className="text-2xl font-bold text-white mb-2">{compatibilityData.userType}</h3>
            <p className="text-pink-200 text-lg">{compatibilityData.compatibilityGroup}</p>
          </div>
        </motion.div>

        {/* Best Matches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-green-900/20 rounded-xl p-6 border border-green-500/30"
        >
          <div className="flex items-center mb-4">
            <Star className="h-6 w-6 text-green-400 mr-3" />
            <h4 className="text-lg font-semibold text-white">Your Best Matches</h4>
          </div>
          <div className="space-y-4">
            {compatibilityData.bestMatches.map((match, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center p-4 bg-green-500/10 rounded-lg border border-green-400/20"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                  {match.number}
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-semibold">{match.type}</h5>
                  <p className="text-green-200 text-sm">{match.reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenging Matches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-orange-900/20 rounded-xl p-6 border border-orange-500/30"
        >
          <div className="flex items-center mb-4">
            <Zap className="h-6 w-6 text-orange-400 mr-3" />
            <h4 className="text-lg font-semibold text-white">Challenging Matches</h4>
          </div>
          <div className="space-y-4">
            {compatibilityData.challengingMatches.map((match, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex items-center p-4 bg-orange-500/10 rounded-lg border border-orange-400/20"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                  {match.number}
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-semibold">{match.type}</h5>
                  <p className="text-orange-200 text-sm">{match.reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partner Energy Types */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30"
          >
            <div className="flex items-center mb-4">
              <Shield className="h-5 w-5 text-blue-400 mr-2" />
              <h4 className="text-lg font-semibold text-white">Supportive Energies</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {compatibilityData.partnerEnergyTypes.supportive.map((energy, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-lg text-blue-200 text-sm"
                >
                  {energy}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
            className="bg-red-900/20 rounded-xl p-6 border border-red-500/30"
          >
            <div className="flex items-center mb-4">
              <Zap className="h-5 w-5 text-red-400 mr-2" />
              <h4 className="text-lg font-semibold text-white">Conflicting Energies</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {compatibilityData.partnerEnergyTypes.conflicting.map((energy, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-red-500/20 border border-red-400/30 rounded-lg text-red-200 text-sm"
                >
                  {energy}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Love Advice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-xl p-6 border border-pink-400/30"
        >
          <div className="flex items-center mb-4">
            <Heart className="h-6 w-6 text-pink-400 mr-3" />
            <h4 className="text-lg font-semibold text-white">Love Guidance</h4>
          </div>
          <p className="text-pink-200 text-lg leading-relaxed">{compatibilityData.loveAdvice}</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-400/30 text-center"
        >
          <Users className="h-8 w-8 text-purple-400 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">Deep Compatibility Analysis</h4>
          <p className="text-purple-200 text-sm">
            Explore your complete love potential and detailed partner matching in your full numerology report
          </p>
        </motion.div>
      </div>
    </WizardLayout>
  )
}
