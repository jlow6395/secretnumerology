// AI Chat System Types
export interface AIConversation {
  id: string
  user_id: string
  user_type: 'google' | 'line'
  
  // Profile context
  primary_profile_id?: string
  related_profile_ids?: string[]
  
  // Conversation metadata
  title?: string
  conversation_type: 'general' | 'relationship' | 'prediction'
  
  // AI Model tracking
  ai_provider: string
  ai_model: string
  total_tokens_used: number
  total_cost_usd: number
  
  // Status
  is_active: boolean
  started_at: string
  last_message_at: string
  message_count: number
  created_at: string
}

export interface AIMessage {
  id: string
  conversation_id: string
  
  // Message content
  role: 'user' | 'assistant' | 'system'
  content: string
  
  // Context
  numerology_context?: any
  user_mood?: string
  message_type?: 'question' | 'advice' | 'prediction' | 'insight'
  
  // AI metadata (for assistant messages)
  ai_model?: string
  tokens_used?: number
  cost_usd?: number
  generation_time_ms?: number
  
  created_at: string
}

export interface AIUserMemory {
  id: string
  user_id: string
  user_type: 'google' | 'line'
  
  // Memory content
  memory_type: 'personal' | 'preference' | 'goal' | 'challenge' | 'relationship'
  memory_content: string
  confidence_score: number
  
  // Source tracking
  source_conversation_id?: string
  source_message_id?: string
  
  // Memory management
  importance_score: number
  last_referenced: string
  reference_count: number
  
  // Expiry
  expires_at: string
  is_active: boolean
  created_at: string
  updated_at: string
}

// Chat Service Types
export interface SendMessageRequest {
  message: string
  conversation_id?: string
  profile_context?: string
}

export interface SendMessageResponse {
  success: boolean
  response?: string
  conversation_id?: string
  tokens_used?: number
  cost_usd?: number
  error?: string
}

export interface ChatContext {
  numerology_profile?: any
  recent_messages: AIMessage[]
  user_memory: AIUserMemory[]
  user_tier: 'free' | 'paid' | 'premium'
  current_mood?: string
  active_goals?: string[]
}

// Memory extraction types
export interface MemoryExtraction {
  memories: {
    type: 'personal' | 'preference' | 'goal' | 'challenge' | 'relationship'
    content: string
    importance: number
  }[]
}

// AI Provider Configuration
export interface AIProviderConfig {
  provider: 'openrouter' | 'groq' | 'direct'
  model: string
  cost_per_1k_tokens: number
  max_tokens: number
  temperature: number
}

export interface AIRoutingConfig {
  user_tier: 'free' | 'paid' | 'premium'
  message_type: 'simple' | 'complex' | 'relationship'
  urgency: 'realtime' | 'background'
  budget: 'low' | 'medium' | 'high'
} 