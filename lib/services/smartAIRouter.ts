// Smart AI Router Service
import type { AIRoutingConfig, AIProviderConfig, ChatContext } from '../types/aiChat'

interface AIResponse {
  content: string
  tokens_used: number
  cost_usd: number
  provider: string
  model: string
  generation_time_ms: number
}

export class SmartAIRouter {
  
  private static readonly PROVIDER_CONFIGS: Record<string, Record<string, AIProviderConfig>> = {
    // Free Tier - เน้นความเร็วและราคา
    free: {
      primary: {
        provider: 'openrouter',
        model: 'meta-llama/llama-3.1-8b-instruct',
        cost_per_1k_tokens: 0.05,
        max_tokens: 1000,
        temperature: 0.7
      }
    },
    
    // Paid Tier - สมดุลระหว่างคุณภาพและราคา
    paid: {
      simple: {
        provider: 'openrouter',
        model: 'anthropic/claude-3-haiku',
        cost_per_1k_tokens: 0.25,
        max_tokens: 1500,
        temperature: 0.7
      },
      complex: {
        provider: 'openrouter',
        model: 'anthropic/claude-3.5-sonnet',
        cost_per_1k_tokens: 3.00,
        max_tokens: 2000,
        temperature: 0.7
      },
      fallback: {
        provider: 'openrouter',
        model: 'meta-llama/llama-3.1-70b-instruct',
        cost_per_1k_tokens: 0.88,
        max_tokens: 1500,
        temperature: 0.7
      }
    },
    
    // Premium Tier - เน้นคุณภาพสูงสุด
    premium: {
      primary: {
        provider: 'openrouter',
        model: 'anthropic/claude-3.5-sonnet',
        cost_per_1k_tokens: 3.00,
        max_tokens: 3000,
        temperature: 0.7
      },
      secondary: {
        provider: 'openrouter',
        model: 'openai/gpt-4o',
        cost_per_1k_tokens: 5.00,
        max_tokens: 2500,
        temperature: 0.7
      },
      fallback: {
        provider: 'openrouter',
        model: 'openai/gpt-4o-mini',
        cost_per_1k_tokens: 0.15,
        max_tokens: 2000,
        temperature: 0.7
      }
    }
  }
  
  static async generateResponse(
    messages: any[],
    context: ChatContext,
    config: AIRoutingConfig
  ): Promise<AIResponse> {
    const startTime = Date.now()
    
    // Select appropriate provider configuration
    const providerConfig = this.selectProvider(config)
    
    try {
      // Try primary provider
      const result = await this.callProvider(providerConfig, messages)
      
      return {
        content: result.content,
        tokens_used: result.tokens_used,
        cost_usd: this.calculateCost(result.tokens_used, providerConfig.cost_per_1k_tokens),
        provider: providerConfig.provider,
        model: providerConfig.model,
        generation_time_ms: Date.now() - startTime
      }
      
    } catch (primaryError) {
      console.log(`Primary AI provider failed: ${primaryError instanceof Error ? primaryError.message : 'Unknown error'}`)
      
      // Try fallback if available
      const fallbackConfig = this.getFallbackProvider(config)
      if (fallbackConfig) {
        try {
          const result = await this.callProvider(fallbackConfig, messages)
          
          return {
            content: result.content,
            tokens_used: result.tokens_used,
            cost_usd: this.calculateCost(result.tokens_used, fallbackConfig.cost_per_1k_tokens),
            provider: fallbackConfig.provider,
            model: fallbackConfig.model,
            generation_time_ms: Date.now() - startTime
          }
        } catch (fallbackError) {
          console.log(`Fallback AI provider failed: ${fallbackError instanceof Error ? fallbackError.message : 'Unknown error'}`)
        }
      }
      
      // Final fallback - cheapest option
      const emergencyConfig = this.PROVIDER_CONFIGS.free.primary
      const result = await this.callProvider(emergencyConfig, messages)
      
      return {
        content: result.content,
        tokens_used: result.tokens_used,
        cost_usd: this.calculateCost(result.tokens_used, emergencyConfig.cost_per_1k_tokens),
        provider: emergencyConfig.provider,
        model: emergencyConfig.model,
        generation_time_ms: Date.now() - startTime
      }
    }
  }
  
  private static selectProvider(config: AIRoutingConfig): AIProviderConfig {
    const { user_tier, message_type, urgency } = config
    
    if (user_tier === 'free') {
      return this.PROVIDER_CONFIGS.free.primary
    }
    
    if (user_tier === 'paid') {
      // For paid users, choose based on complexity
      if (message_type === 'simple' || urgency === 'realtime') {
        return this.PROVIDER_CONFIGS.paid.simple
      } else {
        return this.PROVIDER_CONFIGS.paid.complex
      }
    }
    
    // Premium users get the best
    return this.PROVIDER_CONFIGS.premium.primary
  }
  
  private static getFallbackProvider(config: AIRoutingConfig): AIProviderConfig | null {
    const { user_tier } = config
    
    if (user_tier === 'paid') {
      return this.PROVIDER_CONFIGS.paid.fallback
    }
    
    if (user_tier === 'premium') {
      return this.PROVIDER_CONFIGS.premium.fallback
    }
    
    return null
  }
  
  private static async callProvider(
    config: AIProviderConfig,
    messages: any[]
  ): Promise<{ content: string, tokens_used: number }> {
    
    if (config.provider === 'openrouter') {
      return this.callOpenRouter(config, messages)
    }
    
    throw new Error(`Unknown provider: ${config.provider}`)
  }
  
  private static async callOpenRouter(
    config: AIProviderConfig,
    messages: any[]
  ): Promise<{ content: string, tokens_used: number }> {
    
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'X-Title': 'Secret Numerology',
        'HTTP-Referer': 'https://secretnumerology.com'
      },
      body: JSON.stringify({
        model: config.model,
        messages: messages,
        max_tokens: config.max_tokens,
        temperature: config.temperature,
        stream: false
      })
    })
    
    if (!response.ok) {
      const error = await response.text()
      throw new Error(`OpenRouter API error: ${response.status} - ${error}`)
    }
    
    const data = await response.json()
    
    if (!data.choices || !data.choices[0]) {
      throw new Error('Invalid response from OpenRouter')
    }
    
    return {
      content: data.choices[0].message.content,
      tokens_used: data.usage?.total_tokens || 0
    }
  }
  
  private static calculateCost(tokens: number, costPer1k: number): number {
    return (tokens / 1000) * costPer1k
  }
  
  // Thai-optimized system prompts
  static buildNumerologySystemPrompt(context: ChatContext): string {
    const { numerology_profile, user_memory, user_tier } = context
    
    let systemPrompt = `คุณเป็นผู้เชี่ยวชาญด้านเลขศาสตร์และโค้ชส่วนตัวที่มีความเข้าใจลึกซึ้งในวัฒนธรรมไทย

บุคลิกภาพ: อบอุ่น เป็นกันเอง สร้างแรงบันดาลใจ และให้คำแนะนำที่ปฏิบัติได้จริง

ข้อมูลเลขศาสตร์ของผู้ใช้:`
    
    if (numerology_profile) {
      systemPrompt += `
- Life Path: ${numerology_profile.lifePath?.number} (${numerology_profile.lifePath?.meaning})
- Expression Number: ${numerology_profile.expression?.number}
- Heart Desire: ${numerology_profile.heartDesire?.number} 
- Personal Year: ${numerology_profile.personalYear?.number}`
    }
    
    if (user_memory && user_memory.length > 0) {
      systemPrompt += `\n\nสิ่งที่คุณจำเกี่ยวกับผู้ใช้:`
      user_memory.forEach(memory => {
        systemPrompt += `\n- ${memory.memory_content}`
      })
    }
    
    systemPrompt += `\n\nหลักการตอบ:
1. ใช้ภาษาไทยที่เข้าใจง่าย หลีกเลี่ยงศัพท์เทคนิค
2. อ้างอิงเลขศาสตร์อย่างชัดเจน เชื่อมโยงกับชีวิตจริง
3. ให้คำแนะนำเชิงปฏิบัติ ไม่ใช่แค่ทำนาย
4. แสดงความเข้าใจในอารมณ์และสถานการณ์
5. สร้างแรงบันดาลใจและความหวัง`

    // Add tier-specific instructions
    if (user_tier === 'premium') {
      systemPrompt += `\n\nสำหรับผู้ใช้พรีเมียม: ให้คำแนะนำที่ละเอียดลึกซึ้ง วิเคราะห์หลายมิติ และแนะนำกลยุทธ์เฉพาะตัว`
    }
    
    return systemPrompt
  }
  
  // Memory extraction prompt
  static buildMemoryExtractionPrompt(userMessage: string, aiResponse: string): string {
    return `จากการสนทนานี้ มีข้อมูลสำคัญอะไรที่ควรจำเกี่ยวกับผู้ใช้บ้าง?

ผู้ใช้พูด: "${userMessage}"
AI ตอบ: "${aiResponse}"

วิเคราะห์และสกัดข้อมูลที่ควรจำ ตอบเป็น JSON:
{
  "memories": [
    {
      "type": "personal|preference|goal|challenge|relationship",
      "content": "สิ่งที่ควรจำ (เขียนเป็นประโยคสั้นๆ)",
      "importance": 1-10
    }
  ]
}

เน้นข้อมูลที่:
- เป็นข้อเท็จจริงเกี่ยวกับผู้ใช้
- สามารถใช้ในการให้คำแนะนำครั้งถัดไปได้
- มีความสำคัญต่อการใช้ชีวิต
- ไม่ใช่ข้อมูลชั่วคราวหรือไม่สำคัญ`
  }
} 