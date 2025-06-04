"use client"

import type React from "react"

import { useState } from "react"
import { Send, Bot, User, Sparkles, Zap, MessageSquare, Star } from "lucide-react"

interface ChatMessage {
  id: string
  type: "user" | "ai"
  message: string
  timestamp: Date
}

export default function AiChatCard() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "ai",
      message: "สวัสดีครับ! ผมเป็น AI ที่ช่วยตอบคำถามเกี่ยวกับเลขศาสตร์ มีอะไรให้ผมช่วยไหมครับ? 🔮",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      message: inputMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        message: getAIResponse(inputMessage),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getAIResponse = (userInput: string): string => {
    const responses = [
      "น่าสนใจมากครับ! ตามหลักเลขศาสตร์ คำถามของคุณเชื่อมโยงกับพลังงานของตัวเลข ✨",
      "ผมเข้าใจครับ ให้ผมวิเคราะห์ตามหลักเลขศาสตร์ให้คุณฟัง 🔮",
      "คำถามที่ดีครับ! ในโลกของเลขศาสตร์ ทุกอย่างมีความหมายลึกซึ้ง 🌟",
      "ขอบคุณที่ถามครับ ผมจะอธิบายตามหลักการเลขศาสตร์ให้คุณฟัง 📊",
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickSuggestions = [
    { text: "เลขชีวิตของฉันคืออะไร?", icon: "🔢" },
    { text: "วันนี้เป็นวันดีไหม?", icon: "📅" },
    { text: "เลขโชคดีของฉัน", icon: "🍀" },
    { text: "ความรักในปีนี้", icon: "💕" },
  ]

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] via-[#1F1F1F] to-[#151515] border border-[#2A2A2A] shadow-2xl h-full flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tr from-[#00E5FF] to-[#00FFA3] rounded-full blur-2xl"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 p-6 border-b border-[#2A2A2A] bg-gradient-to-r from-[#232323]/50 to-[#1A1A1A]/50 backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] flex items-center justify-center shadow-lg shadow-[#8b5cf6]/30">
              <Bot className="h-7 w-7 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
              <Zap className="h-3 w-3 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              AI Numerology Assistant
            </h2>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-sm text-gray-400 flex items-center">
                <Star className="h-3 w-3 mr-1" />
                พร้อมให้คำปรึกษา 24/7
              </p>
            </div>
          </div>
          <MessageSquare className="h-6 w-6 text-[#8b5cf6] animate-pulse" />
        </div>
      </div>

      {/* Messages */}
      <div className="relative z-10 flex-1 p-4 overflow-y-auto space-y-4 max-h-80">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl p-4 ${
                msg.type === "user"
                  ? "bg-gradient-to-r from-[#00E5FF] to-[#00FFA3] text-black shadow-lg shadow-[#00FFA3]/20"
                  : "bg-gradient-to-r from-[#232323] to-[#1A1A1A] text-white border border-[#2A2A2A] shadow-lg"
              }`}
            >
              <div className="flex items-start space-x-3">
                {msg.type === "ai" && (
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="h-3 w-3 text-white" />
                  </div>
                )}
                <p className="text-sm leading-relaxed flex-1">{msg.message}</p>
                {msg.type === "user" && (
                  <div className="h-6 w-6 rounded-full bg-black/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User className="h-3 w-3 text-black" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gradient-to-r from-[#232323] to-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] flex items-center justify-center">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-[#8b5cf6] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#ec4899] rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-[#00E5FF] rounded-full animate-bounce delay-200"></div>
                </div>
                <span className="text-xs text-gray-400">กำลังคิด...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Suggestions */}
      <div className="relative z-10 px-4 py-2 border-t border-[#2A2A2A] bg-[#1A1A1A]/50 backdrop-blur-sm">
        <p className="text-xs text-gray-400 mb-2 flex items-center">
          <Zap className="h-3 w-3 mr-1" />
          คำถามยอดนิยม
        </p>
        <div className="flex flex-wrap gap-2">
          {quickSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setInputMessage(suggestion.text)}
              className="text-xs px-3 py-2 rounded-full bg-gradient-to-r from-[#2A2A2A] to-[#232323] text-gray-300 hover:from-[#3A3A3A] hover:to-[#2A2A2A] hover:text-white transition-all border border-[#3A3A3A] hover:border-[#4A4A4A] flex items-center space-x-1"
            >
              <span>{suggestion.icon}</span>
              <span>{suggestion.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="relative z-10 p-4 border-t border-[#2A2A2A] bg-gradient-to-r from-[#232323]/50 to-[#1A1A1A]/50 backdrop-blur-sm">
        <div className="flex space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="ถามเกี่ยวกับเลขศาสตร์..."
              className="w-full rounded-xl border border-[#2A2A2A] bg-gradient-to-r from-[#232323] to-[#1A1A1A] px-4 py-3 text-white placeholder-gray-400 focus:border-[#8b5cf6] focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/30 transition-all"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Sparkles className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            className="rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] p-3 text-white transition-all hover:shadow-lg hover:shadow-[#8b5cf6]/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
