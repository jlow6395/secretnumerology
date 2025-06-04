"use client"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import AboutNumerology from "@/components/AboutNumerology"
import Benefits from "@/components/Benefits"
import Pricing from "@/components/Pricing"
import Guarantee from "@/components/Guarantee"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      <Hero />
      <Features />
      <AboutNumerology />
      <Benefits />
      <Pricing />
      <Guarantee />
      <Footer />
    </div>
  )
}
