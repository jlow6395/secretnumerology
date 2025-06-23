'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from '@/lib/AuthContext'
import { Button } from '@/components/ui/button'
import { 
  Menu, 
  X, 
  Sparkles, 
  User, 
  LogOut,
  Crown,
  Shield
} from 'lucide-react'
import { toast } from 'sonner'

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout, isLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = async () => {
    try {
      await logout()
      toast.success('ออกจากระบบสำเร็จ')
      router.push('/')
    } catch (error) {
      toast.error('เกิดข้อผิดพลาดในการออกจากระบบ')
    }
  }

  const navItems = [
    { name: 'หน้าหลัก', href: '/' },
    { name: 'เกี่ยวกับ', href: '/about' },
    { name: 'บล็อก', href: '/blog' },
    { name: 'ติดต่อ', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-lg">Secret Numerology</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 ${
                  pathname === item.href 
                    ? 'text-orange-400 font-medium' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoading ? (
              <div className="w-8 h-8 animate-spin border-2 border-white/30 border-t-white rounded-full"></div>
            ) : user ? (
              <div className="flex items-center gap-3">
                {/* User Info */}
                <div className="flex items-center gap-2">
                  {user.avatar && (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full border-2 border-white/20"
                    />
                  )}
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <span className="text-white text-sm font-medium">{user.name}</span>
                      {user.isAdmin && <Crown className="w-4 h-4 text-yellow-500" />}
                      {user.loginMethod === 'google' && <Shield className="w-3 h-3 text-blue-500" />}
                    </div>
                    <p className="text-gray-400 text-xs">
                      {user.loginMethod === 'google' ? 'Google Admin' : 
                       user.loginMethod === 'line' ? 'LINE User' : 'Guest'}
                    </p>
                  </div>
                </div>

                {/* Dashboard Button */}
                <Button
                  onClick={() => router.push('/dashboard')}
                  size="sm"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  <User className="w-4 h-4 mr-1" />
                  Dashboard
                </Button>

                {/* Logout Button */}
                <Button
                  onClick={handleLogout}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-white/10"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => router.push('/wizard/step1')}
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-white hover:bg-white/10"
                >
                  ทดลองใช้
                </Button>
                <Button
                  onClick={() => router.push('/auth/login')}
                  size="sm"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  เข้าสู่ระบบ
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md border-t border-white/10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 transition-colors duration-200 ${
                    pathname === item.href 
                      ? 'text-orange-400 font-medium bg-white/5' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-white/10 pt-3 mt-3">
                {user ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 px-3 py-2">
                      {user.avatar && (
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-8 h-8 rounded-full border-2 border-white/20"
                        />
                      )}
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-white text-sm font-medium">{user.name}</span>
                          {user.isAdmin && <Crown className="w-4 h-4 text-yellow-500" />}
                        </div>
                        <p className="text-gray-400 text-xs">
                          {user.loginMethod === 'google' ? 'Google Admin' : 
                           user.loginMethod === 'line' ? 'LINE User' : 'Guest'}
                        </p>
                      </div>
                    </div>
                    
                    <Button
                      onClick={() => {
                        router.push('/dashboard')
                        setIsOpen(false)
                      }}
                      className="w-full mx-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Dashboard
                    </Button>
                    
                    <Button
                      onClick={() => {
                        handleLogout()
                        setIsOpen(false)
                      }}
                      variant="ghost"
                      className="w-full mx-3 text-gray-400 hover:text-white hover:bg-white/10"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      ออกจากระบบ
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button
                      onClick={() => {
                        router.push('/wizard/step1')
                        setIsOpen(false)
                      }}
                      variant="ghost"
                      className="w-full mx-3 text-gray-300 hover:text-white hover:bg-white/10"
                    >
                      ทดลองใช้
                    </Button>
                    <Button
                      onClick={() => {
                        router.push('/auth/login')
                        setIsOpen(false)
                      }}
                      className="w-full mx-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    >
                      เข้าสู่ระบบ
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 