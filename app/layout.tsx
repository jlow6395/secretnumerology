import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Poppins } from "next/font/google"
import { GlobalErrorHandler } from "@/components/ui/GlobalErrorHandler"
import { NetworkStatusIndicator } from "@/components/ui/NetworkStatus"
import { AuthProvider } from '@/lib/AuthContext'
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SecretNumerology - เลขศาสตร์ออนไลน์",
  description: "ค้นพบความลับในตัวเลขของคุณด้วยเลขศาสตร์",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider defaultTheme="dark" storageKey="numerology-theme">
            <GlobalErrorHandler />
            <NetworkStatusIndicator />
            <div className="pt-16">
              {children}
            </div>
            <Toaster position="top-center" richColors />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
