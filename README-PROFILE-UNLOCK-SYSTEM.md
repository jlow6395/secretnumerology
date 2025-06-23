# Profile-Centric Monetization System

## 🎯 Overview

ระบบใหม่ที่เปลี่ยนจาก **subscription model** เป็น **profile-centric monetization** โดยเน้น:

1. **Micro-payment** - จ่ายเพื่อปลดล็อกโปรไฟล์เพิ่มเติม
2. **Smart AI Chat** - AI ที่จำผู้ใช้และตอบแบบเฉพาะตัว  
3. **Advanced Relationship Analysis** - วิเคราะห์ความสัมพันธ์หลายมิติ
4. **First Person View** - มองจากมุมของแต่ละคน

---

## 💰 Pricing Structure

| แพ็กเกจ | ราคา | โปรไฟล์ | ราคา/คน | เหมาะสำหรับ |
|---------|------|----------|-----------|-------------|
| เพิ่ม 1 คน | ฿39 | 1 | ฿39 | ทดลองใช้ |
| 6 โปรไฟล์ | ฿199 | 6 | ฿33 | ครอบครัวเล็ก |
| 30 โปรไฟล์ | ฿599 | 30 | ฿20 | นักพยากรณ์/เพจดูดวง |

---

## 🏗️ Technical Architecture

### Database Schema

```sql
-- Profile packages
profile_packages (id, name, profile_count, price_thb)

-- User unlocks  
user_profile_unlocks (user_id, package_id, profiles_remaining, payment_status)

-- Individual profiles
unlocked_profiles (unlock_id, profile_id, profile_name, birth_date)

-- AI Chat system
ai_conversations (user_id, primary_profile_id, conversation_type)
ai_messages (conversation_id, role, content, numerology_context)
ai_user_memory (user_id, memory_type, memory_content, importance_score)

-- Relationship analysis cache
relationship_analyses (profile1_data, profile2_data, analysis_type, ai_insights)
```

### Services

1. **PaymentService** - PromptPay QR via Omise
2. **SmartAIRouter** - OpenRouter with fallback system
3. **ProfileUnlockService** - Management of unlocked profiles
4. **RelationshipAnalysisService** - AI-powered compatibility analysis

---

## 🤖 AI Configuration

### Provider Routing

```typescript
// Tier-based AI model selection
free: 'meta-llama/llama-3.1-8b-instruct'     // Fast & cheap
paid: 'anthropic/claude-3-haiku'              // Balanced
premium: 'anthropic/claude-3.5-sonnet'       // Best quality
```

### Memory System

AI จำข้อมูลผู้ใช้ 5 ประเภท:
- **Personal**: ข้อมูลส่วนตัว
- **Preference**: ความชอบ
- **Goal**: เป้าหมาย
- **Challenge**: ปัญหาที่เผชิญ
- **Relationship**: ความสัมพันธ์

---

## 💳 Payment Integration

### PromptPay QR Flow

1. User selects package → Create Omise source
2. Display QR code → User scans with banking app
3. Real-time polling → Payment verification
4. Auto-unlock profiles → Update database

### Webhook Handling

```typescript
POST /api/webhooks/omise
- Verify signature
- Process charge.complete events
- Unlock purchased profiles
- Send confirmation
```

---

## 📱 Components

### ProfileUnlockModal
- Package selection with savings calculation
- PromptPay QR code display
- Real-time payment status
- Auto-close on success

### SmartAIChat
- Tier-based message limits (Free: 10, Paid: 100, Premium: ∞)
- Context-aware responses
- Memory integration
- Thai-optimized prompts

---

## 🔧 Environment Variables

```bash
# AI & Payment
OPENROUTER_API_KEY=sk-or-xxx
OMISE_PUBLIC_KEY=pkey_xxx
OMISE_SECRET_KEY=skey_xxx

# Authentication  
ADMIN_EMAIL=jlow6395@gmail.com
LINE_CHANNEL_ID=xxx
GOOGLE_CLIENT_ID=xxx

# Feature Flags
NEXT_PUBLIC_ENABLE_AI_CHAT=true
NEXT_PUBLIC_ENABLE_PROFILE_UNLOCK=true
```

---

## 🚀 Deployment

### Database Migration

```bash
# Run new migration
supabase db push
```

### Vercel Deployment

```bash
# Production
vercel --prod

# Staging 
vercel --staging
```

---

## 📊 Expected Impact

### Revenue Model
- **Current**: Subscription churn, limited users
- **New**: Pay-per-profile, viral growth through family/friends

### User Journey
1. **Discovery**: Free analysis of 1 profile
2. **Engagement**: Add family member (+฿39)
3. **Growth**: Family pack (+฿199)
4. **Pro**: Business/consultant pack (+฿599)

### AI-Driven Retention
- Personalized insights based on memory
- Relationship analysis between profiles
- Context-aware recommendations

---

## 🎛️ Admin Features

### Dashboard Metrics
- Profile unlock statistics
- AI usage analytics
- Payment conversion rates
- User tier distribution

### Content Management
- AI prompt optimization
- Numerology interpretation updates
- Pricing strategy adjustments

---

## 🔐 Security & Privacy

### Data Protection
- 90-day chat history retention
- User-controlled data deletion
- GDPR/PDPA compliance ready

### Payment Security
- Omise PCI DSS compliance
- No card data storage
- Webhook signature verification

---

## 📈 Success Metrics

### KPIs to Track
1. **ARPU**: Average Revenue Per User
2. **Profile Conversion**: Free → Paid unlock rate  
3. **AI Engagement**: Messages per session
4. **Viral Coefficient**: Referral through family analysis
5. **LTV**: Customer Lifetime Value

### Target Goals
- **300M users** through viral growth
- **30% conversion** rate from free to paid
- **฿60 ARPU** average across all users

---

## 🛠️ Next Steps

1. **Phase 1**: Core payment + AI system ✅
2. **Phase 2**: Advanced chart visualizations
3. **Phase 3**: First Person View features
4. **Phase 4**: Viral sharing mechanisms
5. **Phase 5**: Business intelligence dashboard

---

## 🎨 UI/UX Philosophy

**Mobile First**: เน้นประสบการณ์บนมือถือ
**Thai Language**: ภาษาไทยเป็นหลัก ไม่มีภาษาอังกฤษ
**Design System**: ใช้ระบบที่มีอยู่ใน `/design-system/`
**Conversion Optimized**: ทุก component เน้นการแปลงเป็นลูกค้า

---

*สร้างโดย: Claude-3.5-Sonnet สำหรับ Secret Numerology V2*
*วันที่: 27 มกราคม 2568* 