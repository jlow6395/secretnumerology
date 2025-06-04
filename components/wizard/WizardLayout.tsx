"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface WizardLayoutProps {
  children: React.ReactNode
  currentStep: number
  totalSteps: number
  onNext?: () => void
  onBack?: () => void
  nextLabel?: string
  backLabel?: string
  showBack?: boolean
  showNext?: boolean
  nextDisabled?: boolean
}

export default function WizardLayout({
  children,
  currentStep,
  totalSteps,
  onNext,
  onBack,
  nextLabel = "Continue",
  backLabel = "Back",
  showBack = true,
  showNext = true,
  nextDisabled = false,
}: WizardLayoutProps) {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 px-6 pt-8"
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent text-center mb-8">
            SecretNumerology
          </h1>
          <div className="w-full bg-white/5 rounded-full h-1 mb-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-white/60">
            <span className="font-body">Step {currentStep}</span>
            <span className="font-body">{totalSteps} Steps</span>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 px-6 pb-32 mt-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="apple-glass rounded-3xl p-8"
          >
            {children}
          </motion.div>
        </div>
      </main>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-sm p-6 z-20">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          {showBack && onBack ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/15 px-6 py-3 rounded-2xl text-white transition-all duration-300 border border-white/10 focus-ring"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="font-body font-medium">{backLabel}</span>
            </motion.button>
          ) : (
            <div />
          )}

          {showNext && onNext && (
            <motion.button
              whileHover={{ scale: nextDisabled ? 1 : 1.05 }}
              whileTap={{ scale: nextDisabled ? 1 : 0.95 }}
              onClick={nextDisabled ? undefined : onNext}
              disabled={nextDisabled}
              className={`flex items-center space-x-2 px-8 py-3 rounded-2xl font-medium text-white transition-all duration-300 ${
                nextDisabled
                  ? "bg-white/10 border-white/5 cursor-not-allowed opacity-50"
                  : "apple-button border-transparent shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
              } focus-ring`}
            >
              <span>{nextLabel}</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  )
}
