/**
 * Design System Showcase
 * 
 * ทดสอบและแสดง:
 * - Custom SVG Icons
 * - Apple Dark Tokens
 * - Components ทั้งหมด
 */

"use client"

import React from 'react'
import { NumerologyIcons, getNumberIcon } from '@/design-system/icons/NumerologyIcons'
import { AllNumberIcons, getCompleteNumberIcon } from '@/design-system/icons/AllNumberIcons'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { appleDarkTokens } from '@/design-system/apple-dark-numerology-tokens'

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent mb-4">
          Secret Numerology Design System
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          🎨 Apple-inspired Dark UI + Custom SVG Icons เฉพาะเลขศาสตร์ไทย
        </p>
        
        {/* Stats */}
        <div className="flex gap-6">
          <Badge variant="secondary" className="text-base px-4 py-2">
            ✨ 20+ Dashboard Icons
          </Badge>
          <Badge variant="secondary" className="text-base px-4 py-2">
            🧭 15+ Navigation Icons
          </Badge>
          <Badge variant="secondary" className="text-base px-4 py-2">
            🔢 12 Number Icons
          </Badge>
        </div>
      </div>

      {/* Color Palette */}
      <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-700 p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">🎨 Apple Dark Color System</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Background Colors */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Background</h3>
            <div className="space-y-2">
              {appleDarkTokens?.colors?.background ? Object.entries(appleDarkTokens.colors.background).map(([shade, color]) => (
                <div key={shade} className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-lg border border-gray-600" 
                    style={{ backgroundColor: color as string }}
                  />
                  <code className="text-sm text-gray-300">{shade}: {color}</code>
                </div>
              )) : <p className="text-gray-500">No background colors available</p>}
            </div>
          </div>

          {/* Golden Accent */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Golden (5% usage)</h3>
            <div className="space-y-2">
              {appleDarkTokens?.colors?.golden ? Object.entries(appleDarkTokens.colors.golden).map(([shade, color]) => (
                <div key={shade} className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-lg border border-gray-600" 
                    style={{ backgroundColor: color as string }}
                  />
                  <code className="text-sm text-gray-300">{shade}: {color}</code>
                </div>
              )) : <p className="text-gray-500">No golden colors available</p>}
            </div>
          </div>

          {/* Deep Blue Colors */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Deep Blue</h3>
            <div className="space-y-2">
              {appleDarkTokens?.colors?.deepBlue ? Object.entries(appleDarkTokens.colors.deepBlue).slice(5, 10).map(([shade, color]) => (
                <div key={shade} className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-lg border border-gray-600" 
                    style={{ backgroundColor: color as string }}
                  />
                  <code className="text-sm text-gray-300">{shade}: {color}</code>
                </div>
              )) : <p className="text-gray-500">No deep blue colors available</p>}
            </div>
          </div>

          {/* Text Colors */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Text</h3>
            <div className="space-y-2">
              {appleDarkTokens?.colors?.text ? Object.entries(appleDarkTokens.colors.text).map(([shade, color]) => (
                <div key={shade} className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-lg border border-gray-600" 
                    style={{ backgroundColor: color as string }}
                  />
                  <code className="text-sm text-gray-300">{shade}: {color}</code>
                </div>
              )) : <p className="text-gray-500">No text colors available</p>}
            </div>
          </div>
        </div>
      </Card>

      {/* Dashboard Icons */}
      <Card className="bg-gray-900/30 backdrop-blur-sm border-gray-700 p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">✨ Dashboard Icons</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { icon: NumerologyIcons.insight, name: 'Insight', desc: 'ดวงดาววิเศษ' },
            { icon: NumerologyIcons.stats, name: 'Stats', desc: 'กราฟพลังงาน' },
            { icon: NumerologyIcons.profile, name: 'Profile', desc: 'ร่างกับออรา' },
            { icon: NumerologyIcons.settings, name: 'Settings', desc: 'เฟืองดวงดาว' },
          ].map(({ icon: IconComponent, name, desc }) => (
            <div key={name} className="group relative bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300">
              <div className="flex flex-col items-center">
                <IconComponent size={48} className="mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-white mb-1">{name}</h3>
                <p className="text-sm text-gray-400 text-center">{desc}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-amber-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </Card>

      {/* Navigation Icons */}
      <Card className="bg-gray-900/30 backdrop-blur-sm border-gray-700 p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">🧭 Navigation Icons</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: NumerologyIcons.home, name: 'Home', desc: 'บ้านทรงไทย', color: '#3B82F6' },
            { icon: NumerologyIcons.love, name: 'Love', desc: 'หัวใจคู่', color: '#EF4444' },
            { icon: NumerologyIcons.phone, name: 'Phone', desc: 'โทรศัพท์มงคล', color: '#10B981' },  
            { icon: NumerologyIcons.reports, name: 'Reports', desc: 'หนังสือเลขศาสตร์', color: '#8B5CF6' },
            { icon: NumerologyIcons.aiChat, name: 'AI Chat', desc: 'หุ่นยนต์ไทย', color: '#F59E0B' },
          ].map(({ icon: IconComponent, name, desc, color }) => (
            <div key={name} className="group relative bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300">
              <div className="flex flex-col items-center">
                <IconComponent 
                  size={40} 
                  color={color}
                  className="mb-4 group-hover:scale-110 transition-transform" 
                />
                <h3 className="font-semibold text-white mb-1">{name}</h3>
                <p className="text-sm text-gray-400 text-center">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Number Icons 1-9 */}
      <Card className="bg-gray-900/30 backdrop-blur-sm border-gray-700 p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">🔢 Number Icons (1-9)</h2>
        
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => {
            const IconComponent = getCompleteNumberIcon(num)
            const meanings = {
              1: 'ผู้นำ',
              2: 'คู่แฝด', 
              3: 'นักสื่อสาร',
              4: 'นักสร้าง',
              5: 'นักผจญภัย',
              6: 'ผู้เอาใจใส่',
              7: 'นักปราชญ์',
              8: 'นักธุรกิจ',
              9: 'ผู้ให้'
            }
            
            return (
              <div key={num} className="group relative bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-golden-500/50 hover:bg-gray-800/70 transition-all duration-300">
                <div className="flex flex-col items-center">
                  <IconComponent 
                    size={48} 
                    color="#F59E0B"
                    className="mb-3 group-hover:scale-110 transition-transform" 
                  />
                  <h3 className="font-bold text-xl text-golden-400 mb-1">{num}</h3>
                  <p className="text-xs text-gray-400 text-center">{meanings[num as keyof typeof meanings]}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-golden-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            )
          })}
        </div>
      </Card>

      {/* Master Numbers */}
      <Card className="bg-gray-900/30 backdrop-blur-sm border-gray-700 p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">👑 Master Numbers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { num: 11, name: 'Master 11', desc: 'พลังจิตสัมผัส', color: '#8B5CF6' },
            { num: 22, name: 'Master 22', desc: 'สถาปนิกแห่งความฝัน', color: '#3B82F6' },
            { num: 33, name: 'Master 33', desc: 'ครูแห่งความรัก', color: '#F59E0B' },
          ].map(({ num, name, desc, color }) => {
            const IconComponent = getCompleteNumberIcon(num)
            
            return (
              <div key={num} className="group relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-2xl p-8 border border-gray-600/50 hover:border-golden-500/70 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <IconComponent 
                    size={80} 
                    color={color}
                    className="mb-6 group-hover:scale-105 transition-transform drop-shadow-2xl" 
                  />
                  <h3 className="font-bold text-2xl text-white mb-2">{name}</h3>
                  <p className="text-gray-300 mb-4">{desc}</p>
                  <Badge 
                    variant="secondary" 
                    className="bg-gradient-to-r from-purple-500/20 to-golden-500/20 text-white border-golden-500/30"
                  >
                    Master Number
                  </Badge>
                </div>
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${color}10, ${color}05)`
                  }}
                />
              </div>
            )
          })}
        </div>
      </Card>

      {/* Custom Numerology Icons */}
      <Card className="bg-gray-900/30 backdrop-blur-sm border-gray-700 p-8">
        <h2 className="text-3xl font-bold mb-6">🎨 Custom Numerology Icons</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: NumerologyIcons.yantra, name: 'Yantra', desc: 'ยันต์ไทย', color: '#8B5CF6' },
            { icon: NumerologyIcons.energy, name: 'Energy', desc: 'พลังงานสมดุล', color: '#3B82F6' },
            { icon: NumerologyIcons.lotus, name: 'Lotus', desc: 'ดอกบัวศักดิ์สิทธิ์', color: '#EC4899' },
            { icon: NumerologyIcons.trident, name: 'Trident', desc: 'ตราไผ่สัตรูเข็ด', color: '#10B981' },
            { icon: NumerologyIcons.beads, name: 'Beads', desc: 'สร้อยมาลา', color: '#F59E0B' },
          ].map(({ icon: IconComponent, name, desc, color }) => (
            <div key={name} className="group relative bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-800/70 transition-all duration-300">
              <div className="flex flex-col items-center">
                <IconComponent 
                  size={48} 
                  color={color}
                  className="mb-4 group-hover:scale-110 transition-transform" 
                />
                <h3 className="font-semibold text-white mb-1">{name}</h3>
                <p className="text-sm text-gray-400 text-center">{desc}</p>
              </div>
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${color}15, ${color}05)`
                }}
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
