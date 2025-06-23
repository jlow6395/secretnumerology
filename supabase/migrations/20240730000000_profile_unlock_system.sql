-- Profile Unlock System Migration
-- Date: 2025-01-27

-- ===== PROFILE UNLOCK SYSTEM =====

-- Profile unlock packages
CREATE TABLE profile_packages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  name_en TEXT NOT NULL,
  profile_count INT NOT NULL,
  price_thb INT NOT NULL, -- ราคาเป็นสตางค์
  price_per_profile_thb INT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT now()
);

-- Seed packages
INSERT INTO profile_packages (name, name_en, profile_count, price_thb, price_per_profile_thb) VALUES
('เพิ่ม 1 โปรไฟล์', 'Add 1 Profile', 1, 3900, 3900),
('แพ็ค 6 โปรไฟล์', '6 Profiles Pack', 6, 19900, 3317),
('แพ็ค 30 โปรไฟล์', '30 Profiles Pack', 30, 59900, 1997);

-- User profile unlocks
CREATE TABLE user_profile_unlocks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL, -- ไม่ reference เพราะรองรับ LINE users
  user_type TEXT NOT NULL, -- 'google', 'line'
  
  -- Package info
  package_id UUID REFERENCES profile_packages(id),
  profiles_purchased INT NOT NULL,
  profiles_used INT DEFAULT 0,
  profiles_remaining INT NOT NULL,
  
  -- Payment info
  payment_id TEXT, -- Omise payment ID
  payment_status TEXT DEFAULT 'pending', -- 'pending', 'completed', 'failed', 'refunded'
  payment_method TEXT DEFAULT 'promptpay',
  amount_thb INT NOT NULL,
  
  -- Metadata
  purchase_date TIMESTAMP DEFAULT now(),
  expires_at TIMESTAMP, -- NULL = permanent
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT now()
);

-- Individual profile unlocks (tracking each unlocked profile)
CREATE TABLE unlocked_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  unlock_id UUID REFERENCES user_profile_unlocks(id) ON DELETE CASCADE,
  
  -- Profile info
  profile_id TEXT NOT NULL, -- from AuthContext profiles
  profile_name TEXT NOT NULL,
  profile_birth_date DATE NOT NULL,
  
  -- Unlock metadata
  unlocked_at TIMESTAMP DEFAULT now(),
  unlock_type TEXT DEFAULT 'purchase', -- 'purchase', 'gift', 'admin'
  
  created_at TIMESTAMP DEFAULT now()
);

-- ===== AI CHAT SYSTEM =====

-- AI Chat conversations
CREATE TABLE ai_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  user_type TEXT NOT NULL, -- 'google', 'line'
  
  -- Profile context
  primary_profile_id TEXT, -- หลักฐานที่กำลังปรึกษา
  related_profile_ids JSONB, -- profiles ที่เกี่ยวข้องในการสนทนา
  
  -- Conversation metadata
  title TEXT, -- AI-generated title
  conversation_type TEXT DEFAULT 'general', -- 'general', 'relationship', 'prediction'
  
  -- AI Model tracking
  ai_provider TEXT DEFAULT 'openrouter',
  ai_model TEXT DEFAULT 'anthropic/claude-3.5-sonnet',
  total_tokens_used INT DEFAULT 0,
  total_cost_usd DECIMAL(10,6) DEFAULT 0,
  
  -- Status
  is_active BOOLEAN DEFAULT true,
  started_at TIMESTAMP DEFAULT now(),
  last_message_at TIMESTAMP DEFAULT now(),
  message_count INT DEFAULT 0,
  
  created_at TIMESTAMP DEFAULT now()
);

-- AI Chat messages
CREATE TABLE ai_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID REFERENCES ai_conversations(id) ON DELETE CASCADE,
  
  -- Message content
  role TEXT NOT NULL, -- 'user', 'assistant', 'system'
  content TEXT NOT NULL,
  
  -- Context when message was sent
  numerology_context JSONB, -- เลขศาสตร์ที่เกี่ยวข้อง
  user_mood TEXT, -- AI detected mood
  message_type TEXT, -- 'question', 'advice', 'prediction', 'insight'
  
  -- AI metadata (for assistant messages)
  ai_model TEXT,
  tokens_used INT,
  cost_usd DECIMAL(10,6),
  generation_time_ms INT,
  
  created_at TIMESTAMP DEFAULT now()
);

-- AI User Memory (สิ่งที่ AI จำเกี่ยวกับ user)
CREATE TABLE ai_user_memory (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  user_type TEXT NOT NULL,
  
  -- Memory content
  memory_type TEXT NOT NULL, -- 'personal', 'preference', 'goal', 'challenge', 'relationship'
  memory_content TEXT NOT NULL,
  confidence_score DECIMAL(3,2) DEFAULT 0.80, -- 0.00-1.00
  
  -- Source tracking
  source_conversation_id UUID REFERENCES ai_conversations(id),
  source_message_id UUID REFERENCES ai_messages(id),
  
  -- Memory management
  importance_score INT DEFAULT 5, -- 1-10
  last_referenced TIMESTAMP DEFAULT now(),
  reference_count INT DEFAULT 1,
  
  -- Expiry
  expires_at TIMESTAMP DEFAULT (now() + interval '90 days'),
  is_active BOOLEAN DEFAULT true,
  
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- ===== RELATIONSHIP ANALYSIS CACHE =====

-- Cached relationship analyses
CREATE TABLE relationship_analyses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Profile combination (order-independent)
  profile1_data JSONB NOT NULL, -- numerology profile
  profile2_data JSONB NOT NULL,
  profile_hash TEXT NOT NULL, -- hash for fast lookup
  
  -- Analysis results
  analysis_type TEXT NOT NULL, -- 'love', 'work', 'family', 'friendship'
  compatibility_score DECIMAL(3,1), -- 0.0-10.0
  
  -- AI-generated insights
  ai_insights JSONB NOT NULL,
  ai_model TEXT NOT NULL,
  generation_cost_usd DECIMAL(10,6),
  
  -- Cache management
  generated_at TIMESTAMP DEFAULT now(),
  expires_at TIMESTAMP DEFAULT (now() + interval '24 hours'),
  hit_count INT DEFAULT 0,
  last_accessed TIMESTAMP DEFAULT now()
);

-- ===== INDEXES FOR PERFORMANCE =====

-- Profile unlocks
CREATE INDEX idx_profile_unlocks_user ON user_profile_unlocks(user_id, user_type);
CREATE INDEX idx_profile_unlocks_payment ON user_profile_unlocks(payment_id, payment_status);
CREATE INDEX idx_unlocked_profiles_lookup ON unlocked_profiles(unlock_id, profile_id);

-- AI Chat
CREATE INDEX idx_conversations_user ON ai_conversations(user_id, user_type, last_message_at);
CREATE INDEX idx_messages_conversation ON ai_messages(conversation_id, created_at);
CREATE INDEX idx_user_memory_lookup ON ai_user_memory(user_id, user_type, memory_type);

-- Relationship cache
CREATE INDEX idx_relationship_hash ON relationship_analyses(profile_hash, analysis_type);
CREATE INDEX idx_relationship_expire ON relationship_analyses(expires_at) WHERE expires_at IS NOT NULL;

-- ===== RLS POLICIES =====

-- Enable RLS
ALTER TABLE user_profile_unlocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE unlocked_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_user_memory ENABLE ROW LEVEL SECURITY;
ALTER TABLE relationship_analyses ENABLE ROW LEVEL SECURITY;

-- Profile unlocks policies
CREATE POLICY "Users can view own unlocks" ON user_profile_unlocks
  FOR SELECT USING (
    (user_type = 'google' AND user_id::text = auth.uid()::text) OR
    (user_type = 'line' AND user_id::text = current_setting('app.current_line_id', true))
  );

CREATE POLICY "Users can create own unlocks" ON user_profile_unlocks
  FOR INSERT WITH CHECK (
    (user_type = 'google' AND user_id::text = auth.uid()::text) OR
    (user_type = 'line' AND user_id::text = current_setting('app.current_line_id', true))
  );

-- AI Chat policies
CREATE POLICY "Users can access own conversations" ON ai_conversations
  FOR ALL USING (
    (user_type = 'google' AND user_id::text = auth.uid()::text) OR
    (user_type = 'line' AND user_id::text = current_setting('app.current_line_id', true))
  );

CREATE POLICY "Users can access own messages" ON ai_messages
  FOR ALL USING (
    conversation_id IN (
      SELECT id FROM ai_conversations WHERE 
        (user_type = 'google' AND user_id::text = auth.uid()::text) OR
        (user_type = 'line' AND user_id::text = current_setting('app.current_line_id', true))
    )
  );

CREATE POLICY "Users can access own memory" ON ai_user_memory
  FOR ALL USING (
    (user_type = 'google' AND user_id::text = auth.uid()::text) OR
    (user_type = 'line' AND user_id::text = current_setting('app.current_line_id', true))
  );

-- Relationship analyses - public read for caching efficiency
CREATE POLICY "Allow read access to relationship analyses" ON relationship_analyses
  FOR SELECT USING (true);

CREATE POLICY "Allow insert relationship analyses" ON relationship_analyses
  FOR INSERT WITH CHECK (true); 