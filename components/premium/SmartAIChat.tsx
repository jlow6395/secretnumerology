'use client'

import { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Send, MessageCircle, Sparkles } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
  tokens_used?: number
  cost_usd?: number
}

interface SmartAIChatProps {
  currentUser: {
    id: string
    type: 'google' | 'line'
    tier: 'free' | 'paid' | 'premium'
  }
  profileContext?: {
    id: string
    name: string
    numerology?: any
  }
  onUpgrade?: () => void
}

export default function SmartAIChat({ 
  currentUser, 
  profileContext,
  onUpgrade 
}: SmartAIChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [conversationId, setConversationId] = useState<string | null>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const sendMessage = async () => {
    if (!inputMessage.trim() || isTyping) return

    // Check message limits for free users
    if (currentUser.tier === 'free' && messages.length >= 10) {
      alert('ผู้ใช้ฟรีสามารถส่งข้อความได้สูงสุด 10 ข้อความ กรุณาอัปเกรดเพื่อใช้งานแบบไม่จำกัด')
      onUpgrade?.()
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': currentUser.id,
          'x-user-type': currentUser.type
        },
        body: JSON.stringify({
          message: inputMessage,
          conversation_id: conversationId,
          profile_context: profileContext?.id
        })
      })

      const result = await response.json()

      if (result.success) {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: result.response,
          timestamp: new Date().toISOString(),
          tokens_used: result.tokens_used,
          cost_usd: result.cost_usd
        }

        setMessages(prev => [...prev, aiMessage])
        
        if (!conversationId) {
          setConversationId(result.conversation_id)
        }
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'ขออภัย เกิดข้อผิดพลาดในการประมวลผล กรุณาลองใหม่อีกครั้ง',
        timestamp: new Date().toISOString()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('th-TH', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getTierBadgeColor = () => {
    switch (currentUser.tier) {
      case 'premium': return 'bg-purple-100 text-purple-800'
      case 'paid': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTierLabel = () => {
    switch (currentUser.tier) {
      case 'premium': return 'Premium'
      case 'paid': return 'Paid'
      default: return 'Free'
    }
  }

  const getMessageLimit = () => {
    switch (currentUser.tier) {
      case 'premium': return '∞'
      case 'paid': return '100'
      default: return '10'
    }
  }

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-purple-600" />
            AI เลขศาสตร์ที่ฉลาด
            <Sparkles className="w-4 h-4 text-yellow-500" />
          </CardTitle>
          <Badge className={getTierBadgeColor()}>
            {getTierLabel()} ({messages.filter(m => m.role === 'user').length}/{getMessageLimit()})
          </Badge>
        </div>
        {profileContext && (
          <div className="text-sm text-gray-600">
            กำลังปรึกษาเรื่อง: {profileContext.name}
          </div>
        )}
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 px-6" ref={scrollAreaRef}>
          <div className="space-y-4 py-4">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  เริ่มต้นการสนทนากับ AI เลขศาสตร์
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  ถามเกี่ยวกับตัวเลขของคุณ, ความสัมพันธ์, หรือเส้นทางชีวิต
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setInputMessage('เส้นทางชีวิตของฉันเป็นอย่างไร?')}
                  >
                    เส้นทางชีวิต
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setInputMessage('ช่วงนี้ฉันควรระวังอะไร?')}
                  >
                    คำแนะนำ
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setInputMessage('ความรักของฉันเป็นอย่างไร?')}
                  >
                    ความรัก
                  </Button>
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{message.content}</div>
                  <div className={`text-xs mt-2 ${
                    message.role === 'user' ? 'text-purple-200' : 'text-gray-500'
                  }`}>
                    {formatTime(message.timestamp)}
                    {message.role === 'assistant' && currentUser.tier !== 'free' && message.tokens_used && (
                      <span className="ml-2">
                        • {message.tokens_used} tokens
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-gray-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="border-t p-4">
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                currentUser.tier === 'free' && messages.length >= 10
                  ? 'กรุณาอัปเกรดเพื่อส่งข้อความเพิ่มเติม'
                  : 'พิมพ์คำถามของคุณ...'
              }
              disabled={isTyping || (currentUser.tier === 'free' && messages.length >= 10)}
              className="flex-1"
            />
            <Button
              onClick={sendMessage}
              disabled={!inputMessage.trim() || isTyping || (currentUser.tier === 'free' && messages.length >= 10)}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          
          {currentUser.tier === 'free' && (
            <div className="mt-2 text-xs text-gray-500 text-center">
              ผู้ใช้ฟรี: {messages.filter(m => m.role === 'user').length}/10 ข้อความ
              {messages.length >= 8 && (
                <Button 
                  variant="link" 
                  size="sm" 
                  onClick={onUpgrade}
                  className="text-purple-600 p-0 ml-2 h-auto"
                >
                  อัปเกรดเลย
                </Button>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
} 