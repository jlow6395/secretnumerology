"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Calculator, 
  Heart, 
  Briefcase, 
  Users, 
  MessageSquare, 
  BookOpen, 
  Settings,
  Menu,
  Star,
  Zap,
  TrendingUp,
  Phone,
  Gift,
  User
} from 'lucide-react';

const navigationItems = [
  {
    title: 'หน้าหลัก',
    href: '/dashboard',
    icon: Home,
    description: 'ภาพรวมบัญชีของคุณ'
  },
  {
    title: 'เลขศาสตร์ของฉัน',
    href: '/dashboard/my-numbers',
    icon: Star,
    description: 'ตัวเลขสำคัญในชีวิต'
  },
  {
    title: 'คำนวณเลขศาสตร์',
    href: '/numerology/calculator',
    icon: Calculator,
    description: 'เครื่องคำนวณครบครัน',
    badge: 'ใหม่'
  },
  {
    title: 'ความเข้ากันได้',
    href: '/dashboard/compatibility',
    icon: Heart,
    description: 'วิเคราะห์ความรัก การงาน',
    badge: 'ฮิต',
    color: 'text-pink-500'
  },
  {
    title: 'ความเข้ากันได้การงาน',
    href: '/dashboard/compatibility/work',
    icon: Briefcase,
    description: 'หุ้นส่วนธุรกิจ เพื่อนร่วมงาน',
    color: 'text-blue-500'
  },
  {
    title: 'ความเข้ากันได้ครอบครัว',
    href: '/dashboard/compatibility/family',
    icon: Users,
    description: 'สมาชิกครอบครัว ญาติพี่น้อง',
    color: 'text-green-500'
  },
  {
    title: 'เลขมงคลโทรศัพท์',
    href: '/dashboard/lucky-phone',
    icon: Phone,
    description: 'เลขมงคลสำหรับคุณ',
    color: 'text-purple-500'
  },
  {
    title: 'AI แชทปรึกษา',
    href: '/dashboard/ai-chat',
    icon: MessageSquare,
    description: 'ปรึกษาปัญหาส่วนตัว',
    badge: 'AI',
    color: 'text-indigo-500'
  },
  {
    title: 'วงจรชีวิต',
    href: '/dashboard/life-cycles',
    icon: TrendingUp,
    description: 'พลังงานแต่ละช่วงชีวิต'
  },
  {
    title: 'สูตรเลขศาสตร์',
    href: '/dashboard/numerology-formulas',
    icon: BookOpen,
    description: 'สูตรคำนวณต่างๆ'
  },
  {
    title: 'โปรไฟล์',
    href: '/dashboard/profile',
    icon: User,
    description: 'จัดการข้อมูลส่วนตัว'
  }
];

function UnifiedMobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-gray-700 z-50 md:hidden">
        <div className="grid grid-cols-5 gap-1 p-2">
          {/* Home */}
          <Link href="/dashboard" className={`flex flex-col items-center py-2 px-1 rounded-lg transition-colors ${
            isActive('/dashboard') && pathname === '/dashboard'
              ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/20'
              : 'text-gray-600 dark:text-gray-400 hover:text-purple-600'
          }`}>
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">หลัก</span>
          </Link>

          {/* Calculator */}
          <Link href="/numerology/calculator" className={`flex flex-col items-center py-2 px-1 rounded-lg transition-colors ${
            isActive('/numerology/calculator')
              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/20'
              : 'text-gray-600 dark:text-gray-400 hover:text-blue-600'
          }`}>
            <Calculator className="h-5 w-5" />
            <span className="text-xs mt-1">คำนวณ</span>
          </Link>

          {/* Compatibility */}
          <Link href="/dashboard/compatibility" className={`flex flex-col items-center py-2 px-1 rounded-lg transition-colors relative ${
            isActive('/dashboard/compatibility')
              ? 'bg-pink-100 text-pink-600 dark:bg-pink-900/20'
              : 'text-gray-600 dark:text-gray-400 hover:text-pink-600'
          }`}>
            <Heart className="h-5 w-5" />
            <span className="text-xs mt-1">เข้ากัน</span>
            <Badge className="absolute -top-1 -right-1 px-1 py-0 text-xs bg-pink-500 text-white">
              ฮิต
            </Badge>
          </Link>

          {/* AI Chat */}
          <Link href="/dashboard/ai-chat" className={`flex flex-col items-center py-2 px-1 rounded-lg transition-colors relative ${
            isActive('/dashboard/ai-chat')
              ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/20'
              : 'text-gray-600 dark:text-gray-400 hover:text-indigo-600'
          }`}>
            <MessageSquare className="h-5 w-5" />
            <span className="text-xs mt-1">AI</span>
            <Badge className="absolute -top-1 -right-1 px-1 py-0 text-xs bg-indigo-500 text-white">
              AI
            </Badge>
          </Link>

          {/* More Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="flex flex-col items-center py-2 px-1 rounded-lg transition-colors text-gray-600 dark:text-gray-400 hover:text-purple-600">
                <Menu className="h-5 w-5" />
                <span className="text-xs mt-1">เพิ่ม</span>
              </button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh] rounded-t-xl">
              <div className="py-4">
                <h2 className="text-lg font-semibold mb-4 text-center">เมนูทั้งหมด</h2>
                
                {/* Featured Items */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">⭐ แนะนำ</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Link 
                      href="/dashboard/compatibility"
                      onClick={() => setIsOpen(false)}
                      className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg border border-pink-200 dark:border-pink-800"
                    >
                      <Heart className="h-6 w-6 text-pink-500 mb-2" />
                      <p className="font-medium text-sm">ความเข้ากันได้</p>
                      <p className="text-xs text-muted-foreground">ความรัก การงาน</p>
                    </Link>
                    
                    <Link 
                      href="/dashboard/ai-chat"
                      onClick={() => setIsOpen(false)}
                      className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800"
                    >
                      <MessageSquare className="h-6 w-6 text-indigo-500 mb-2" />
                      <p className="font-medium text-sm">AI ปรึกษา</p>
                      <p className="text-xs text-muted-foreground">ถามปัญหาส่วนตัว</p>
                    </Link>
                  </div>
                </div>

                {/* All Menu Items */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">📱 เมนูทั้งหมด</h3>
                  {navigationItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                          isActive(item.href)
                            ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/20'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        <Icon className={`h-5 w-5 ${item.color || 'text-gray-500'}`} />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{item.title}</span>
                            {item.badge && (
                              <Badge variant="secondary" className="text-xs px-2 py-0">
                                {item.badge}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Sidebar (Hidden on Mobile) */}
      <div className="hidden md:block fixed left-0 top-0 h-full w-64 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-gray-700 z-40">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">เลขศาสตร์</h2>
          <nav className="space-y-2">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/20'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${item.color || 'text-gray-500'}`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{item.title}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="text-xs px-2 py-0">
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Desktop Content Padding */}
      <div className="hidden md:block w-64 flex-shrink-0" />
    </>
  );
}

export default UnifiedMobileNav;
