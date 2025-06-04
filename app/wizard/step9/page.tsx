"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Crown, Star, Zap, Clock, Check, Gift, Shield, Heart } from "lucide-react"
import WizardLayout from "@/components/wizard/WizardLayout"

export default function Step9() {
  const router = useRouter()
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState(15 * 60) // 15 minutes in seconds

  const handleBack = () => {
    router.push("/wizard/step8")
  }

  const handlePurchase = (packageType: string) => {
    setSelectedPackage(packageType)
    // Handle purchase logic here
    console.log(`Purchasing ${packageType} package`)
  }

  const packages = [
    {
      id: "full-report",
      name: "Numerology Full Report",
      originalPrice: 1299,
      price: 399,
      discount: "69% OFF",
      popular: true,
      features: [
        "Complete Core Numbers Analysis",
        "Life Path & Destiny Mapping",
        "Yearly Timeline & Predictions",
        "Career & Relationship Guidance",
        "Monthly Energy Forecast",
        "Lucky Numbers & Dates",
        "Personality Deep Dive",
        "Challenge & Growth Periods",
      ],
      bonus: "Free: Personal Year Guide",
      color: "from-purple-600 to-pink-600",
      icon: Star,
    },
    {
      id: "full-plus-talisman",
      name: "Full Report + Sacred Talisman",
      originalPrice: 2499,
      price: 799,
      discount: "68% OFF",
      premium: true,
      features: [
        "Everything in Full Report",
        "Personalized Digital Talisman (ยันต์หนุนดวง)",
        "AI-Consecrated Sacred Geometry",
        "Custom Protection Symbols",
        "Energy Activation Ritual Guide",
        "Monthly Talisman Updates",
        "Spiritual Mentor Consultation",
        "Priority Support Access",
      ],
      bonus: "Free: Monk Blessing Ceremony",
      color: "from-amber-500 to-orange-600",
      icon: Crown,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      text: "The accuracy was incredible! My numerology report revealed things about myself I never knew.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      text: "The talisman has brought such positive energy into my life. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      text: "Best investment I've made for my spiritual growth. The insights are life-changing.",
      rating: 5,
    },
  ]

  // Format time for countdown
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <WizardLayout currentStep={9} totalSteps={9} onBack={handleBack} showNext={false} nextLabel="Complete Purchase">
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Gift className="h-8 w-8 text-amber-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Your Soul's Blueprint Awaits</h2>
          </div>
          <p className="text-amber-200 text-lg">
            Choose your path to unlock the complete mysteries of your numerological destiny
          </p>
        </motion.div>

        {/* Limited Time Offer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-xl p-4 border border-red-500/30 text-center"
        >
          <div className="flex items-center justify-center mb-2">
            <Clock className="h-5 w-5 text-red-400 mr-2" />
            <span className="text-red-300 font-semibold">Limited Time Offer</span>
          </div>
          <div className="text-2xl font-bold text-white">{formatTime(timeLeft)}</div>
          <p className="text-red-200 text-sm">Special pricing expires soon!</p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2 }}
              className={`relative overflow-hidden rounded-2xl border transition-all duration-300 hover:scale-105 ${
                pkg.popular
                  ? "border-purple-400/50 bg-gradient-to-br from-purple-900/30 to-pink-900/30"
                  : pkg.premium
                    ? "border-amber-400/50 bg-gradient-to-br from-amber-900/30 to-orange-900/30"
                    : "border-slate-600/30 bg-slate-800/30"
              }`}
            >
              {/* Popular/Premium Badge */}
              {(pkg.popular || pkg.premium) && (
                <div className="absolute top-4 right-4 z-10">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                      pkg.popular ? "bg-purple-600" : "bg-amber-600"
                    }`}
                  >
                    {pkg.popular ? "MOST POPULAR" : "PREMIUM"}
                  </div>
                </div>
              )}

              {/* Discount Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold">{pkg.discount}</div>
              </div>

              <div className="p-8">
                {/* Package Header */}
                <div className="text-center mb-6">
                  <pkg.icon className={`h-12 w-12 mx-auto mb-4 text-white`} />
                  <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-3xl font-bold text-white">฿{pkg.price}</span>
                    <span className="text-lg text-gray-400 line-through">฿{pkg.originalPrice}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bonus */}
                <div className="bg-green-900/20 rounded-lg p-3 mb-6 border border-green-500/30">
                  <div className="flex items-center">
                    <Gift className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-green-300 text-sm font-medium">{pkg.bonus}</span>
                  </div>
                </div>

                {/* Purchase Button */}
                <button
                  onClick={() => handlePurchase(pkg.id)}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 bg-gradient-to-r ${pkg.color} hover:shadow-xl hover:shadow-purple-500/25`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Get Your {pkg.popular ? "Report" : "Premium Package"} Now</span>
                  </div>
                </button>

                <p className="text-center text-gray-400 text-xs mt-3">
                  Secure payment • Instant delivery • 30-day guarantee
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30"
        >
          <h4 className="text-lg font-semibold text-white mb-4 text-center">What Our Customers Say</h4>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-3">"{testimonial.text}"</p>
                <p className="text-gray-400 text-xs font-medium">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-400/30 text-center"
        >
          <Shield className="h-8 w-8 text-green-400 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">30-Day Money-Back Guarantee</h4>
          <p className="text-green-200 text-sm">
            Not satisfied with your reading? Get a full refund within 30 days, no questions asked.
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center items-center space-x-8 text-gray-400 text-sm"
        >
          <div className="flex items-center">
            <Shield className="h-4 w-4 mr-1" />
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center">
            <Heart className="h-4 w-4 mr-1" />
            <span>10,000+ Happy Customers</span>
          </div>
          <div className="flex items-center">
            <Zap className="h-4 w-4 mr-1" />
            <span>Instant Delivery</span>
          </div>
        </motion.div>
      </div>
    </WizardLayout>
  )
}
