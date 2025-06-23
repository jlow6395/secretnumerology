/**
 * Icon Showcase - แสดง Custom SVG Icons ทั้งหมด
 * 
 * ใช้สำหรับ:
 * - ทดสอบ icons ใน dark theme
 * - ตรวจสอบขนาดและสี
 * - คัดลอกโค้ดเพื่อใช้งาน
 */

"use client"

import React, { useState } from 'react'
import { NumerologyIcons, getNumberIcon } from './NumerologyIcons'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function IconShowcase() {
  const [selectedSize, setSelectedSize] = useState(24)
  const [selectedColor, setSelectedColor] = useState('#FFFFFF')
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null)

  // จัดกลุ่ม icons
  const iconGroups = {
    '✨ Dashboard Icons': {
      insight: NumerologyIcons.insight,
      stats: NumerologyIcons.stats,
      profile: NumerologyIcons.profile,
      settings: NumerologyIcons.settings,
    },
    '🧭 Navigation Icons': {
      home: NumerologyIcons.home,
      love: NumerologyIcons.love,
      phone: NumerologyIcons.phone,
      reports: NumerologyIcons.reports,
      aiChat: NumerologyIcons.aiChat,
    },
    '🔢 Number Icons': {
      number1: NumerologyIcons.number1,
      number2: NumerologyIcons.number2,
      number3: NumerologyIcons.number3,
      number7: NumerologyIcons.number7,
    },
    '🎨 Custom Numerology': {
      yantra: NumerologyIcons.yantra,
      energy: NumerologyIcons.energy,
      lotus: NumerologyIcons.lotus,
      trident: NumerologyIcons.trident,
      beads: NumerologyIcons.beads,
    },
    '👑 Master Numbers': {
      master11: NumerologyIcons.master11,
      master22: NumerologyIcons.master22,
      master33: NumerologyIcons.master33,
    }
  }

  const copyIconCode = (iconName: string) => {
    const code = `import { NumerologyIcons } from '@/design-system/icons/NumerologyIcons'

<NumerologyIcons.${iconName} 
  size={${selectedSize}} 
  color="${selectedColor}"
  className="your-custom-class"
/>`
    
    navigator.clipboard.writeText(code)
    setCopiedIcon(iconName)
    
    setTimeout(() => setCopiedIcon(null), 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent mb-4">
          Secret Numerology Icons
        </h1>
        <p className="text-gray-400 text-lg">
          Custom SVG Icons เฉพาะเลขศาสตร์ไทย - Apple-style minimalism
        </p>
      </div>

      {/* Controls */}
      <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-700 p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">การตั้งค่าการแสดงผล</h3>
        
        <div className="flex flex-wrap gap-6">
          {/* Size Control */}
          <div>
            <label className="block text-sm font-medium mb-2">ขนาด (Size)</label>
            <div className="flex gap-2">
              {[16, 20, 24, 32, 48].map(size => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSize(size)}
                >
                  {size}px
                </Button>
              ))}
            </div>
          </div>

          {/* Color Control */}
          <div>
            <label className="block text-sm font-medium mb-2">สี (Color)</label>
            <div className="flex gap-2">
              {[
                { name: 'White', value: '#FFFFFF' },
                { name: 'Blue', value: '#3B82F6' },
                { name: 'Gold', value: '#F59E0B' },
                { name: 'Gray', value: '#9CA3AF' },
                { name: 'Red', value: '#EF4444' },
              ].map(color => (
                <Button
                  key={color.value}
                  variant={selectedColor === color.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedColor(color.value)}
                  className="min-w-16"
                >
                  <div 
                    className="w-4 h-4 rounded mr-2" 
                    style={{ backgroundColor: color.value }}
                  />
                  {color.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Icon Groups */}
      {Object.entries(iconGroups).map(([groupName, icons]) => (
        <Card key={groupName} className="bg-gray-900/30 backdrop-blur-sm border-gray-700 p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-6">{groupName}</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {Object.entries(icons).map(([iconName, IconComponent]) => (
              <div 
                key={iconName}
                className="group relative bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-200"
              >
                {/* Icon Display */}
                <div className="flex items-center justify-center h-16 mb-3">
                  <IconComponent 
                    size={selectedSize} 
                    color={selectedColor}
                    className="drop-shadow-lg"
                  />
                </div>

                {/* Icon Name */}
                <div className="text-center">
                  <p className="font-medium text-sm text-gray-300 mb-2">
                    {iconName}
                  </p>
                  
                  {/* Copy Button */}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyIconCode(iconName)}
                    className="w-full text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {copiedIcon === iconName ? (
                      <span className="text-green-400">✓ Copied!</span>
                    ) : (
                      'Copy Code'
                    )}
                  </Button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-amber-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </Card>
      ))}

      {/* Usage Examples */}
      <Card className="bg-gray-900/30 backdrop-blur-sm border-gray-700 p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-6">🎯 ตัวอย่างการใช้งาน</h2>
        
        <div className="space-y-6">
          {/* Dashboard Example */}
          <div>
            <h3 className="text-lg font-medium mb-3">Dashboard Header</h3>
            <div className="bg-gray-800/50 rounded-lg p-4 flex items-center gap-4">
              <NumerologyIcons.insight size={32} color="#F59E0B" />
              <div>
                <h4 className="font-semibold">Insight of the Day</h4>
                <p className="text-gray-400 text-sm">ดวงดาววิเศษประจำวัน</p>
              </div>
            </div>
          </div>

          {/* Navigation Example */}
          <div>
            <h3 className="text-lg font-medium mb-3">Bottom Navigation</h3>
            <div className="bg-gray-800/50 rounded-lg p-4 flex justify-around">
              <div className="flex flex-col items-center gap-1">
                <NumerologyIcons.home size={24} color="#3B82F6" />
                <span className="text-xs text-gray-400">หน้าแรก</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <NumerologyIcons.love size={24} color="#EF4444" />
                <span className="text-xs text-gray-400">ความรัก</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <NumerologyIcons.phone size={24} color="#10B981" />
  
              </div>
              <div className="flex flex-col items-center gap-1">
                <NumerologyIcons.reports size={24} color="#8B5CF6" />
                <span className="text-xs text-gray-400">รายงาน</span>
              </div>
            </div>
          </div>

          {/* Number Cards Example */}
          <div>
            <h3 className="text-lg font-medium mb-3">Number Cards</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 7].map(num => {
                const IconComponent = getNumberIcon(num)
                return (
                  <div key={num} className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <IconComponent size={32} color="#F59E0B" className="mx-auto mb-2" />
                    <h4 className="font-semibold">เลข {num}</h4>
                    <p className="text-gray-400 text-xs">Life Path Number</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Card>

      {/* Code Installation */}
      <Card className="bg-gray-900/30 backdrop-blur-sm border-gray-700 p-6">
        <h2 className="text-2xl font-semibold mb-4">📦 การติดตั้งและใช้งาน</h2>
        <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <div className="text-green-400 mb-2">// 1. Import icons</div>
          <div className="text-white mb-4">
            import {`{ NumerologyIcons, getNumberIcon }`} from '@/design-system/icons/NumerologyIcons'
          </div>
          
          <div className="text-green-400 mb-2">// 2. ใช้งาน specific icon</div>
          <div className="text-white mb-4">
            {`<NumerologyIcons.insight size={24} color="#F59E0B" />`}
          </div>
          
          <div className="text-green-400 mb-2">// 3. ใช้งาน number icon</div>
          <div className="text-white">
            {`const IconComponent = getNumberIcon(7)
<IconComponent size={32} color="#3B82F6" />`}
          </div>
        </div>
      </Card>
    </div>
  )
} 