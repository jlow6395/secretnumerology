"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Target, Users, Briefcase, MessageCircle, Crown, Palette } from "lucide-react"
import WizardLayout from "@/components/wizard/WizardLayout"

export default function Step4() {
  const router = useRouter()

  const handleNext = () => {
    router.push("/wizard/step5")
  }

  const handleBack = () => {
    router.push("/wizard/step3")
  }

  const expressionData = {
    number: 3,
    title: "The Creative Communicator",
    description: "You are perceived as charismatic, artistic, and inspiring to others.",
    traits: [
      { icon: MessageCircle, label: "Excellent Communicator", color: "text-blue-400" },
      { icon: Palette, label: "Artistic & Creative", color: "text-purple-400" },
      { icon: Crown, label: "Natural Entertainer", color: "text-yellow-400" },
      { icon: Users, label: "Social & Charming", color: "text-green-400" },
    ],
    perception: "Others see you as someone who brings joy, creativity, and inspiration wherever you go.",
    careerAlignment: ["Creative Arts", "Entertainment", "Marketing", "Teaching", "Public Speaking", "Writing"],
  }

  return (
    <WizardLayout currentStep={4} totalSteps={9} onNext={handleNext} onBack={handleBack} nextLabel="Explore Emotions">
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Target className="h-8 w-8 text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Your Expression Number</h2>
          </div>
          <p className="text-blue-200">How the world perceives your energy and presence</p>
        </motion.div>

        {/* Expression Number Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-3xl blur opacity-60 animate-pulse"></div>
          <div className="relative bg-slate-800/90 rounded-3xl p-8 border border-blue-500/30 backdrop-blur-sm text-center">
            <div className="text-8xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              {expressionData.number}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{expressionData.title}</h3>
            <p className="text-blue-200 text-lg">{expressionData.description}</p>
          </div>
        </motion.div>

        {/* Personality Traits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {expressionData.traits.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-slate-800/50 rounded-xl p-4 border border-slate-600/30 text-center"
            >
              <trait.icon className={`h-8 w-8 mx-auto mb-3 ${trait.color}`} />
              <p className="text-white text-sm font-medium">{trait.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* How Others See You */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-400/30"
        >
          <div className="flex items-center mb-4">
            <Users className="h-6 w-6 text-blue-400 mr-3" />
            <h4 className="text-lg font-semibold text-white">How Others Perceive You</h4>
          </div>
          <p className="text-blue-200 text-lg leading-relaxed">{expressionData.perception}</p>
        </motion.div>

        {/* Career Alignment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="bg-green-900/20 rounded-xl p-6 border border-green-500/30"
        >
          <div className="flex items-center mb-4">
            <Briefcase className="h-6 w-6 text-green-400 mr-3" />
            <h4 className="text-lg font-semibold text-white">Career Alignment</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {expressionData.careerAlignment.map((career, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-lg text-green-200 text-sm"
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
          transition={{ delay: 1.6 }}
          className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-400/30 text-center"
        >
          <Target className="h-8 w-8 text-purple-400 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">Align Your Energy</h4>
          <p className="text-purple-200 text-sm">
            Find how you can align this energy with your career path and life purpose in your detailed reading
          </p>
        </motion.div>
      </div>
    </WizardLayout>
  )
}
