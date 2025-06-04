"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Breadcrumb from "./Breadcrumb"
import BackButton from "./BackButton"
import RelatedPages from "./RelatedPages"
import PageNavigation from "./PageNavigation"

interface NavigationWrapperProps {
  children: React.ReactNode
  showBreadcrumbs?: boolean
  showBackButton?: boolean
  backButtonVariant?: "default" | "minimal" | "floating"
  relatedPages?: Array<{
    title: string
    description: string
    href: string
    category?: string
    isExternal?: boolean
  }>
  pageNavigation?: {
    previous?: { title: string; href: string; description?: string }
    next?: { title: string; href: string; description?: string }
  }
  className?: string
}

export default function NavigationWrapper({
  children,
  showBreadcrumbs = true,
  showBackButton = true,
  backButtonVariant = "default",
  relatedPages = [],
  pageNavigation,
  className = "",
}: NavigationWrapperProps) {
  const pathname = usePathname()

  // Don't show navigation on wizard pages
  const isWizardPage = pathname?.includes("/wizard/")

  if (isWizardPage) {
    return <>{children}</>
  }

  return (
    <div className={`min-h-screen bg-[#0a0a0a] ${className}`}>
      {/* Header Navigation */}
      <div className="sticky top-0 z-40 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-[#1a1a1a]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {showBreadcrumbs && <Breadcrumb className="flex-1" />}
            {showBackButton && backButtonVariant !== "floating" && <BackButton variant={backButtonVariant} />}
          </div>
        </div>
      </div>

      {/* Floating Back Button */}
      {showBackButton && backButtonVariant === "floating" && <BackButton variant="floating" />}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {children}

        {/* Related Pages */}
        {relatedPages.length > 0 && (
          <div className="mt-12 pt-8 border-t border-[#1a1a1a]">
            <RelatedPages pages={relatedPages} />
          </div>
        )}

        {/* Page Navigation */}
        {pageNavigation && (
          <div className="mt-8 pt-8 border-t border-[#1a1a1a]">
            <PageNavigation {...pageNavigation} />
          </div>
        )}
      </div>
    </div>
  )
}
