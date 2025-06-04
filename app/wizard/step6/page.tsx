"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { AlertTriangle, Clock, Target, TrendingUp } from "lucide-react"
import WizardLayout from "@/components/wizard/WizardLayout"

export default function Step6() {
  const router = useRouter()

  const handleNext = () => {
    router.push("/wizard/step7")
  }

  const handleBack = () => {
    router.push("/wizard/step5")
  }

  const challengeData = {
    challenges: [
      {
        number: 4,
        title: "Building Stability",
        phase: "Youth (0-28 years)",
        description: "Learning patience, discipline, and creating solid foundations",
        color: "from-red-500 to-orange-500",
      },
      {
        number: 7,
        title: "Inner Wisdom",
        phase: "Maturity (29-56 years)",
        description: "Developing spiritual understanding and trusting your intuition",
        color: "from-purple-500 to-indigo-500",
      },
      {
        number: 2,
        title: "Cooperation",
        phase: "Wisdom (57+ years)",
        description: "Learning to work with others and finding balance in relationships",
        color: "from-blue-500 to-cyan-500",
      },
    ],
    currentChallenge: {
      number: 4,
      phase: "Active Now",
      insight: "You're currently learning to build stable foundations in your life",
    },
  }

  return (
    <WizardLayout currentStep={6} totalSteps={9} onNext={handleNext} onBack={handleBack} nextLabel="See This Year">
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 text-orange-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Your Challenge Numbers</h2>
          </div>
          <p className="text-orange-200">Life lessons that shape your growth through different phases</p>
        </motion.div>

        {/* Current Challenge Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl blur opacity-60 animate-pulse"></div>
          <div className="relative bg-slate-800/90 rounded-3xl p-8 border border-orange-500/30 backdrop-blur-sm text-center">
            <div className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
              {challengeData.currentChallenge.number}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{challengeData.currentChallenge.phase}</h3>
            <p className="text-orange-200 text-lg">{challengeData.currentChallenge.insight}</p>
          </div>
        </motion.div>

        {/* All Challenges Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-white text-center mb-6">Your Life Challenge Timeline</h3>
          {challengeData.challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.2 }}
              className="relative"
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${challenge.color} rounded-2xl blur opacity-30`}
              ></div>
              <div className="relative bg-slate-800/80 rounded-2xl p-6 border border-slate-600/30 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${challenge.color} flex items-center justify-center text-white font-bold text-xl mr-4`}
                    >
                      {challenge.number}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{challenge.title}</h4>
                      <p className="text-gray-400 text-sm">{challenge.phase}</p>
                    </div>
                  </div>
                  <Clock className="h-5 w-5 text-gray-400" />
                </div>
                <p className="text-gray-300">{challenge.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Challenge Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl p-6 border border-purple-400/30"
        >
          <div className="flex items-center mb-4">
            <Target className="h-6 w-6 text-purple-400 mr-3" />
            <h4 className="text-lg font-semibold text-white">Understanding Your Challenges</h4>
          </div>
          <p className="text-purple-200 leading-relaxed">
            These challenges aren't obstacles—they're opportunities for growth. Each phase of life brings specific
            lessons that help you develop into your highest potential. Embrace them as stepping stones to wisdom.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-xl p-6 border border-amber-400/30 text-center"
        >
          <TrendingUp className="h-8 w-8 text-amber-400 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">Perfect Timing</h4>
          <p className="text-amber-200 text-sm">
            Your Pinnacle periods reveal the exact timing of these challenges and how to navigate them successfully
          </p>
        </motion.div>
      </div>
    </WizardLayout>
  )
}
