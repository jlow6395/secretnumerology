"use client"

import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { NumerologyIcons } from '@/design-system/icons/NumerologyIcons'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Send, Bot, User, Sparkles, Clock, Heart, Star } from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'ai'
  content: string
  timestamp: Date
  isTyping?: boolean
}

export default function AiChatPage() {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'สวัสดีครับ! ผมคือ AI Numerologist ที่จะช่วยตอบคำถามเกี่ยวกับเลขศาสตร์ของคุณ\n\nคุณสามารถถามผมเกี่ยวกับ:\n• การตีความเลข Life Path\n• ความเข้ากันได้ในความรัก\n• การเลือกเลขมงคล\n• คำแนะนำในการใช้ชีวิต\n\nมีอะไรอยากถามไหมครับ?',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickQuestions = [
    {
      icon: Heart,
      text: 'เลข 7 กับเลข 3 เข้ากันได้ไหม?',
      category: 'ความรัก'
    },
    {
      icon: Star,
      text: 'เลข Life Path 7 มีจุดแข็งอะไรบ้าง?',
      category: 'บุคลิกภาพ'
    },
    {
      icon: Sparkles,
      text: 'วันนี้เหมาะกับการทำอะไร?',
      category: 'คำแนะนำ'
    },
    {
      icon: Clock,
      text: 'เลขมงคลสำหรับปี 2024 คืออะไร?',
      category: 'เลขมงคล'
    }
  ]

  const aiResponses = {
    'เลข 7 กับเลข 3 เข้ากันได้ไหม?': `เลข 7 และเลข 3 มีความเข้ากันได้ในระดับดี! 

🔮 **เลข 7** - นักปราชญ์ที่ลึกซึ้ง มีจิตวิญญาณสูง
🎨 **เลข 3** - ศิลปิน นักสื่อสาร เต็มไปด้วยความคิดสร้างสรรค์

**จุดที่เข้ากันได้:**
• เลข 3 ช่วยให้เลข 7 แสดงออกมากขึ้น
• เลข 7 ให้ความลึกซึ้งกับความคิดสร้างสรรค์ของเลข 3
• ทั้งคู่ชอบเรียนรู้สิ่งใหม่ๆ

**ข้อควรระวัง:**
• เลข 7 อาจเก็บตัวเกินไป ทำให้เลข 3 รู้สึกเหงา
• เลข 3 พูดเก่ง แต่เลข 7 ชอบเงียบ

**คะแนนความเข้ากันได้: 75/100** 💕`,

    'เลข Life Path 7 มีจุดแข็งอะไรบ้าง?': `เลข Life Path 7 มีจุดแข็งมากมายเลยครับ! ✨

🧠 **ปัญญาเฉียบแหลม**
• วิเคราะห์ปัญหาได้ลึกซึ้ง
• มองเห็นสิ่งที่คนอื่นมองไม่เห็น
• ความจำดี เรียนรู้เร็ว

🔍 **นักค้นหาความจริง**
• ไม่ยอมรับสิ่งที่ผิวเผิน
• ชอบขุดคุ้ยหาข้อมูล
• มีสัญชาตญาณแม่นยำ

🧘 **จิตวิญญาณสูง**
• เข้าใจตัวเองลึกซึ้ง
• มีความเป็นนักปรัชญา
• สามารถทำสมาธิได้ดี

💎 **ความเป็นเอกลักษณ์**
• ไม่ชอบทำตามคนอื่น
• มีมุมมองที่แปลกใหม่
• เป็นตัวของตัวเอง

อาชีพที่เหมาะสม: นักวิจัย, นักเขียน, นักจิตวิทยา, ครู, หมอ`,

    'วันนี้เหมาะกับการทำอะไร?': `วันนี้เป็นวันที่ดีสำหรับเลข 7 เลยครับ! 🌟

🔮 **พลังงานวันนี้**
• เหมาะกับการใคร่ครวญ
• ดาวเสริมด้านปัญญา
• เวลาดีสำหรับการเรียนรู้

✅ **ควรทำ:**
• อ่านหนังสือที่สนใจ
• ทำสมาธิ หรือ meditation
• เขียน journal บันทึกความคิด
• ค้นคว้าเรื่องที่อยากรู้
• ใช้เวลาคนเดียวอย่างมีคุณภาพ

⚠️ **ไม่ควรทำ:**
• ตัดสินใจเรื่องการเงินใหญ่
• เข้าสังคมมากเกินไป
• ทำงานหนักจนเครียด

🎯 **เลขนำโชควันนี้: 7, 16, 25**
🌈 **สีมงคล: ม่วง, น้ำเงินเข้ม**
⏰ **ช่วงเวลาดี: 07:00-09:00, 19:00-21:00**`,

    'เลขมงคลสำหรับปี 2024 คืออะไร?': `ปี 2024 (2+0+2+4 = 8) เป็นปีแห่งความสำเร็จและอำนาจ! 💪

🎯 **เลขมงคลประจำปี 2024:**

**เลขหลัก: 8**
• ความสำเร็จในการงาน
• การเงินมั่นคง
• อำนาจและผู้นำ

**เลขรอง: 2, 4, 6**
• เลข 2: ความร่วมมือ หุ้นส่วน
• เลข 4: ความมั่นคง พื้นฐานแข็งแกร่ง  
• เลข 6: ครอบครัว ความรับผิดชอบ

🔢 **เลขโทรศัพท์มงคล:**
• ลงท้ายด้วย 8, 2, 4, 6
• รวมเลขได้ 8, 17, 26, 35

🏠 **เลขที่บ้านดี:**
• บ้านเลข 8: ธุรกิจเจริญ
• บ้านเลข 17 (1+7=8): ความสำเร็จ
• บ้านเลข 26 (2+6=8): การเงินดี

💰 **วันมงคลซื้อสลาก:**
• วันที่ 8, 17, 26 ของทุกเดือน
• วันพุธ (วันของเลข 8)

สำหรับเลข 7 อย่างคุณ ปีนี้เหมาะกับการใช้ปัญญาสร้างความมั่งคั่ง!`
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const simulateAiResponse = (userMessage: string) => {
    setIsTyping(true)
    
    setTimeout(() => {
      const response = aiResponses[userMessage as keyof typeof aiResponses] || 
        `ขอบคุณสำหรับคำถามครับ! เรื่อง "${userMessage}" เป็นเรื่องที่น่าสนใจมาก\n\nในเลขศาสตร์ เราเชื่อว่าทุกสิ่งมีความหมาย คำถามของคุณสะท้อนถึงความต้องการที่จะเข้าใจตัวเองมากขึ้น\n\nคุณอยากลงลึกในเรื่องไหนเป็นพิเศษไหมครับ? ผมพร้อมช่วยตอบข้อสงสัยของคุณ! ✨`

      const aiMessage: Message = {
        id: Date.now().toString(),
        type: 'ai',
        content: response,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    simulateAiResponse(inputValue)
    setInputValue('')
  }

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: question,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    simulateAiResponse(question)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-indigo-600/20" />
      </div>
      
      {/* Header */}
      <div className="relative z-10 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.back()}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20"
            >
              <ArrowLeft size={18} />
            </Button>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <NumerologyIcons.aiChat size={24} color="white" />
              </div>
              
              <div>
                <h1 className="text-xl font-bold text-white">AI Numerologist</h1>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-gray-400">พร้อมให้คำปรึกษา</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 relative z-10 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 py-6 h-full flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-6 mb-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] flex gap-3 ${
                    message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-br from-purple-500 to-blue-600'
                        : 'bg-gradient-to-br from-indigo-500 to-purple-600'
                    }`}
                  >
                    {message.type === 'user' ? (
                      <User size={20} />
                    ) : (
                      <Bot size={20} />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`rounded-2xl p-4 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-br from-purple-500 to-blue-600 text-white'
                        : 'bg-black/20 backdrop-blur-xl border border-white/10 text-gray-100'
                    }`}
                  >
                    <div className="whitespace-pre-wrap text-sm leading-relaxed">
                      {message.content}
                    </div>
                    
                    <div className="mt-2 text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString('th-TH', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <Bot size={20} />
                  </div>
                  
                  <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <span className="ml-2 text-sm text-gray-400">กำลังคิด...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-400 mb-3">คำถามยอดนิยม</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {quickQuestions.map((question, index) => (
                  <Card
                    key={index}
                    className="bg-black/20 backdrop-blur-xl border border-white/10 p-4 cursor-pointer hover:border-white/20 transition-all duration-300"
                    onClick={() => handleQuickQuestion(question.text)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                        <question.icon size={16} className="text-purple-400" />
                      </div>
                      
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">{question.text}</p>
                        <Badge variant="secondary" className="mt-1 text-xs bg-purple-500/20 text-purple-300 border-purple-500/30">
                          {question.category}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
            <div className="flex items-end gap-3">
              <div className="flex-1">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="พิมพ์คำถามของคุณ..."
                  className="bg-transparent border-none text-white placeholder:text-gray-400 text-sm resize-none min-h-[44px] focus:ring-0 focus:outline-none"
                  disabled={isTyping}
                />
              </div>
              
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="icon"
                className="w-11 h-11 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white flex-shrink-0"
              >
                <Send size={18} />
              </Button>
            </div>
            
            <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
              <span>กด Enter เพื่อส่ง</span>
              <span>AI ตอบภายใน 2-3 วินาที</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
