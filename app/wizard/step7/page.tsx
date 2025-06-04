"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Calendar, Sparkles, TrendingUp, Star, Zap } from "lucide-react"
import WizardLayout from "@/components/wizard/WizardLayout"

export default function Step7() {
  const router = useRouter()

  const handleNext = () => {
    router.push("/wizard/step8")
  }

  const handleBack = () => {
    router.push("/wizard/step6")
  }

  const personalYearData = {
    number: 7,
    title: "Year of Spiritual Awakening",
    description: "A time for inner reflection, spiritual growth, and developing your intuitive abilities.",
    mood: "Contemplative & Introspective",
    keywords: ["Spirituality", "Intuition", "Research", "Inner Wisdom", "Solitude", "Analysis"],
    monthlyThemes: [
      "January: Setting spiritual intentions",
      "February: Deepening meditation practice",
      "March: Studying metaphysical subjects",
      "April: Connecting with nature",
      "May: Developing psychic abilities",
      "June: Seeking solitude for growth",
    ],
    opportunities: [
      "Spiritual studies and courses",
      "Meditation and mindfulness practices",
      "Research and analysis projects",
      "Writing and journaling",
      "Connecting with spiritual mentors",
    ],
    advice: "This is not a year for major material pursuits, but for inner development and spiritual awakening.",
  }

  return (
    <WizardLayout currentStep={7} totalSteps={9} onNext={handleNext} onBack={handleBack} nextLabel="Find Your Match">
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-8 w-8 text-indigo-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Your Personal Year 2024</h2>
          </div>
          <p className="text-indigo-200">The cosmic energy influencing your entire year</p>
        </motion.div>

        {/* Personal Year Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-60 animate-pulse"></div>
          <div className="relative bg-slate-800/90 rounded-3xl p-8 border border-indigo-500/30 backdrop-blur-sm text-center">
            <div className="text-8xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
              {personalYearData.number}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{personalYearData.title}</h3>
            <p className="text-indigo-200 text-lg mb-4">{personalYearData.description}</p>
            <div className="inline-block px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full">
              <span className="text-indigo-300 font-medium">{personalYearData.mood}</span>
            </div>
          </div>
        </motion.div>

        {/* Keywords */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {personalYearData.keywords.map((keyword, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-sm font-medium"
            >
              {keyword}
            </motion.span>
          ))}
        </motion.div>

        {/* Monthly Themes Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl p-6 border border-indigo-400/30"
        >
          <div className="flex items-center mb-4">
            <Sparkles className="h-6 w-6 text-indigo-400 mr-3" />
            <h4 className="text-lg font-semibold text-white">Monthly Themes Preview</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {personalYearData.monthlyThemes.map((theme, index) => (
              <div
                key={index}
                className="flex items-center p-3 bg-indigo-500/10 rounded-lg border border-indigo-400/20"
              >
                <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                <span className="text-indigo-200 text-sm">{theme}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-green-900/20 rounded-xl p-6 border border-green-500/30"
        >
          <div className="flex items-center mb-4">
            <TrendingUp className="h-6 w-6 text-green-400 mr-3" />
            <h4 className="text-lg font-semibold text-white">Key Opportunities</h4>
          </div>
          <ul className="space-y-2">
            {personalYearData.opportunities.map((opportunity, index) => (
              <li key={index} className="text-green-200 flex items-center">
                <Star className="h-4 w-4 text-green-400 mr-3" />
                {opportunity}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Advice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="bg-amber-900/20 rounded-xl p-6 border border-amber-500/30"
        >
          <div className="flex items-center mb-4">
            <Zap className="h-6 w-6 text-amber-400 mr-3" />
            <h4 className="text-lg font-semibold text-white">Year 7 Guidance</h4>
          </div>
          <p className="text-amber-200 text-lg leading-relaxed">{personalYearData.advice}</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-400/30 text-center"
        >
          <Calendar className="h-8 w-8 text-purple-400 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">Complete Year Forecast</h4>
          <p className="text-purple-200 text-sm">
            Get your complete 12-month forecast with monthly guidance and timing in your full numerology report
          </p>
        </motion.div>
      </div>
    </WizardLayout>
  )
}
