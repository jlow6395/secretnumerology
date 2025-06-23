import { NextRequest, NextResponse } from 'next/server'
import { SmartAIRouter } from '@/lib/services/smartAIRouter'
import { supabase } from '@/lib/supabaseClient'
import type { 
  SendMessageRequest, 
  ChatContext, 
  AIRoutingConfig,
  AIMessage,
  AIUserMemory
} from '@/lib/types/aiChat'

export async function POST(request: NextRequest) {
  try {
    const { message, conversation_id, profile_context }: SendMessageRequest = await request.json()
    
    // Validate input
    if (!message) {
      return NextResponse.json(
        { success: false, error: 'ข้อความไม่สามารถว่างได้' },
        { status: 400 }
      )
    }
    
    // Get user info from headers (set by auth middleware)
    const userId = request.headers.get('x-user-id')
    const userType = request.headers.get('x-user-type') as 'google' | 'line'
    
    if (!userId || !userType) {
      return NextResponse.json(
        { success: false, error: 'กรุณาเข้าสู่ระบบ' },
        { status: 401 }
      )
    }
    
    // Determine user tier (check if they have active unlocks)
    const userTier = await getUserTier(userId, userType)
    
    // Get or create conversation
    const conversationId = conversation_id || await createConversation(userId, userType, profile_context)
    
    // Build chat context
    const context = await buildChatContext(userId, userType, conversationId, userTier)
    
    // Configure AI routing
    const aiConfig: AIRoutingConfig = {
      user_tier: userTier,
      message_type: detectMessageType(message),
      urgency: 'realtime',
      budget: userTier === 'free' ? 'low' : userTier === 'paid' ? 'medium' : 'high'
    }
    
    // Build messages array
    const systemPrompt = SmartAIRouter.buildNumerologySystemPrompt(context)
    const messages = [
      { role: 'system', content: systemPrompt },
      ...context.recent_messages.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      { role: 'user', content: message }
    ]
    
    // Generate AI response
    const aiResponse = await SmartAIRouter.generateResponse(messages, context, aiConfig)
    
    // Save user message
    await saveMessage(conversationId, 'user', message, context.numerology_profile)
    
    // Save AI response
    await saveMessage(conversationId, 'assistant', aiResponse.content, context.numerology_profile, {
      ai_model: aiResponse.model,
      tokens_used: aiResponse.tokens_used,
      cost_usd: aiResponse.cost_usd,
      generation_time_ms: aiResponse.generation_time_ms
    })
    
    // Extract and save memory (background task)
    extractAndSaveMemory(userId, userType, message, aiResponse.content, conversationId)
    
    // Update conversation stats
    await updateConversationStats(conversationId, aiResponse.tokens_used, aiResponse.cost_usd)
    
    return NextResponse.json({
      success: true,
      response: aiResponse.content,
      conversation_id: conversationId,
      tokens_used: aiResponse.tokens_used,
      cost_usd: aiResponse.cost_usd
    })
    
  } catch (error) {
    console.error('AI Chat API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'เกิดข้อผิดพลาดในการประมวลผล กรุณาลองใหม่อีกครั้ง' 
      },
      { status: 500 }
    )
  }
}

// Helper functions
async function getUserTier(userId: string, userType: string): Promise<'free' | 'paid' | 'premium'> {
  try {
    const { data, error } = await supabase
      .from('user_profile_unlocks')
      .select('profiles_remaining')
      .eq('user_id', userId)
      .eq('user_type', userType)
      .eq('payment_status', 'completed')
      .eq('is_active', true)
    
    if (error) throw error
    
    if (!data || data.length === 0) return 'free'
    
    const totalRemaining = data.reduce((sum, unlock) => sum + unlock.profiles_remaining, 0)
    
    if (totalRemaining >= 30) return 'premium'
    if (totalRemaining >= 1) return 'paid'
    return 'free'
    
  } catch (error) {
    console.error('Error getting user tier:', error)
    return 'free'
  }
}

async function createConversation(userId: string, userType: string, profileContext?: string): Promise<string> {
  try {
    const { data, error } = await supabase
      .from('ai_conversations')
      .insert({
        user_id: userId,
        user_type: userType,
        primary_profile_id: profileContext,
        conversation_type: profileContext ? 'relationship' : 'general'
      })
      .select('id')
      .single()
    
    if (error) throw error
    return data.id
    
  } catch (error) {
    console.error('Error creating conversation:', error)
    throw error
  }
}

async function buildChatContext(
  userId: string, 
  userType: string, 
  conversationId: string, 
  userTier: 'free' | 'paid' | 'premium'
): Promise<ChatContext> {
  try {
    // Get recent messages
    const { data: messages } = await supabase
      .from('ai_messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: false })
      .limit(20)
    
    // Get user memory
    const { data: memory } = await supabase
      .from('ai_user_memory')
      .select('*')
      .eq('user_id', userId)
      .eq('user_type', userType)
      .eq('is_active', true)
      .order('importance_score', { ascending: false })
      .limit(10)
    
    return {
      numerology_profile: null, // TODO: Get from profile context
      recent_messages: (messages || []).reverse() as AIMessage[],
      user_memory: (memory || []) as AIUserMemory[],
      user_tier: userTier
    }
    
  } catch (error) {
    console.error('Error building chat context:', error)
    return {
      numerology_profile: null,
      recent_messages: [],
      user_memory: [],
      user_tier: userTier
    }
  }
}

function detectMessageType(message: string): 'simple' | 'complex' | 'relationship' {
  const relationshipKeywords = ['ความรัก', 'แฟน', 'สามี', 'ภรรยา', 'ครอบครัว', 'เพื่อน', 'คู่รัก', 'ความสัมพันธ์']
  const complexKeywords = ['ทำนาย', 'อนาคต', 'วิเคราะห์', 'ลึกซึ้ง', 'เฉพาะ', 'รายละเอียด']
  
  if (relationshipKeywords.some(keyword => message.includes(keyword))) {
    return 'relationship'
  }
  
  if (complexKeywords.some(keyword => message.includes(keyword)) || message.length > 100) {
    return 'complex'
  }
  
  return 'simple'
}

async function saveMessage(
  conversationId: string,
  role: 'user' | 'assistant',
  content: string,
  numerologyContext?: any,
  aiMetadata?: {
    ai_model: string
    tokens_used: number
    cost_usd: number
    generation_time_ms: number
  }
): Promise<void> {
  try {
    await supabase
      .from('ai_messages')
      .insert({
        conversation_id: conversationId,
        role,
        content,
        numerology_context: numerologyContext,
        ...aiMetadata
      })
  } catch (error) {
    console.error('Error saving message:', error)
  }
}

async function updateConversationStats(conversationId: string, tokens: number, cost: number): Promise<void> {
  try {
    await supabase
      .from('ai_conversations')
      .update({
        total_tokens_used: supabase.rpc('increment_tokens', { tokens }),
        total_cost_usd: supabase.rpc('increment_cost', { cost }),
        message_count: supabase.rpc('increment_count'),
        last_message_at: new Date().toISOString()
      })
      .eq('id', conversationId)
  } catch (error) {
    console.error('Error updating conversation stats:', error)
  }
}

// Background memory extraction (fire and forget)
async function extractAndSaveMemory(
  userId: string,
  userType: string,
  userMessage: string,
  aiResponse: string,
  conversationId: string
): Promise<void> {
  try {
    // Use a simple AI call to extract memory
    const memoryPrompt = SmartAIRouter.buildMemoryExtractionPrompt(userMessage, aiResponse)
    
    const context: ChatContext = {
      numerology_profile: null,
      recent_messages: [],
      user_memory: [],
      user_tier: 'free' // Use cheapest for memory extraction
    }
    
    const config: AIRoutingConfig = {
      user_tier: 'free',
      message_type: 'simple',
      urgency: 'background',
      budget: 'low'
    }
    
    const messages = [{ role: 'user', content: memoryPrompt }]
    const result = await SmartAIRouter.generateResponse(messages, context, config)
    
    // Parse the JSON response
    const memoryData = JSON.parse(result.content)
    
    // Save memories to database
    for (const memory of memoryData.memories) {
      await supabase
        .from('ai_user_memory')
        .insert({
          user_id: userId,
          user_type: userType,
          memory_type: memory.type,
          memory_content: memory.content,
          importance_score: memory.importance,
          source_conversation_id: conversationId
        })
    }
    
  } catch (error) {
    console.error('Error extracting memory:', error)
    // Don't throw - this is a background task
  }
} 