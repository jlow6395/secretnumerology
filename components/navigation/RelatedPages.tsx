"use client"

import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

interface RelatedPage {
  title: string
  description: string
  href: string
  category?: string
  isExternal?: boolean
}

interface RelatedPagesProps {
  pages: RelatedPage[]
  title?: string
  className?: string
}

export default function RelatedPages({ pages, title = "หน้าที่เกี่ยวข้อง", className = "" }: RelatedPagesProps) {
  if (!pages.length) return null

  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((page, index) => (
          <motion.div
            key={page.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={page.href}
              className="group block p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#333333] hover:border-[#555555] transition-all duration-200"
              {...(page.isExternal && { target: "_blank", rel: "noopener noreferrer" })}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  {page.category && (
                    <span className="text-xs text-[#ff8c00] font-medium uppercase tracking-wider">{page.category}</span>
                  )}
                  <h4 className="text-white font-medium group-hover:text-[#ff8c00] transition-colors">{page.title}</h4>
                  <p className="text-sm text-gray-400 mt-1 line-clamp-2">{page.description}</p>
                </div>
                <div className="ml-3 text-gray-400 group-hover:text-[#ff8c00] transition-colors">
                  {page.isExternal ? (
                    <ExternalLink className="h-4 w-4" />
                  ) : (
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
