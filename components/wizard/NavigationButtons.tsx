"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface NavigationButtonsProps {
  prevStep?: string
  nextStep?: string
  isLastStep?: boolean
}

export default function NavigationButtons({ prevStep, nextStep, isLastStep = false }: NavigationButtonsProps) {
  const router = useRouter()

  const handlePrev = () => {
    if (prevStep) {
      router.push(prevStep)
    }
  }

  const handleNext = () => {
    if (nextStep) {
      router.push(nextStep)
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-between p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePrev}
        className={`group flex items-center justify-center rounded-full bg-slate-800/80 hover:bg-slate-700/80 p-4 text-white backdrop-blur-sm transition-all duration-300 border border-slate-600/50 hover:border-indigo-400/50 ${
          !prevStep ? "invisible" : ""
        }`}
        disabled={!prevStep}
        aria-label="Previous step"
      >
        <ArrowLeft className="h-6 w-6 group-hover:text-indigo-400 transition-colors" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNext}
        className={`group relative overflow-hidden rounded-2xl ${
          isLastStep
            ? "bg-gradient-to-r from-amber-600 to-purple-600 hover:from-amber-500 hover:to-purple-500"
            : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
        } px-8 py-4 font-semibold text-white shadow-2xl transition-all duration-300 border border-white/20`}
        disabled={!nextStep && !isLastStep}
        aria-label={isLastStep ? "Complete" : "Next step"}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 -top-10 -left-10 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 w-6 h-32 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>

        <div className="relative flex items-center space-x-3">
          <span className="text-lg">{isLastStep ? "Complete Journey" : "Continue"}</span>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ArrowRight className="h-6 w-6" />
          </motion.div>
        </div>
      </motion.button>
    </div>
  )
}
