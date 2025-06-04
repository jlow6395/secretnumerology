"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface NavigationItem {
  title: string
  href: string
  description?: string
}

interface PageNavigationProps {
  previous?: NavigationItem
  next?: NavigationItem
  className?: string
}

export default function PageNavigation({ previous, next, className = "" }: PageNavigationProps) {
  if (!previous && !next) return null

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      {/* Previous Page */}
      {previous ? (
        <motion.div whileHover={{ scale: 1.02 }} className="flex-1">
          <Link
            href={previous.href}
            className="group flex items-center p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#333333] hover:border-[#555555] transition-all duration-200"
          >
            <ArrowLeft className="h-5 w-5 text-gray-400 group-hover:text-[#ff8c00] mr-3 transition-colors" />
            <div className="text-left">
              <div className="text-xs text-gray-500 uppercase tracking-wider">ก่อนหน้า</div>
              <div className="text-white font-medium group-hover:text-[#ff8c00] transition-colors">
                {previous.title}
              </div>
              {previous.description && <div className="text-sm text-gray-400 mt-1">{previous.description}</div>}
            </div>
          </Link>
        </motion.div>
      ) : (
        <div className="flex-1" />
      )}

      {/* Next Page */}
      {next ? (
        <motion.div whileHover={{ scale: 1.02 }} className="flex-1">
          <Link
            href={next.href}
            className="group flex items-center justify-end p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#333333] hover:border-[#555555] transition-all duration-200"
          >
            <div className="text-right">
              <div className="text-xs text-gray-500 uppercase tracking-wider">ถัดไป</div>
              <div className="text-white font-medium group-hover:text-[#ff8c00] transition-colors">{next.title}</div>
              {next.description && <div className="text-sm text-gray-400 mt-1">{next.description}</div>}
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#ff8c00] ml-3 transition-colors" />
          </Link>
        </motion.div>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  )
}
