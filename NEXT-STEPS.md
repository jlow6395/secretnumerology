# 🎯 Next Steps - Ready to Deploy!

## ✅ Phase 1-2 เสร็จแล้ว
- ✅ Supabase Project: `secret-numerology-v2`
- ✅ LINE Login Channel: `ความลับเลขมงคล`
- ✅ LIFF App: `2007563809-E0YXRpZM`

---

## 📋 Phase 3: Setup Environment Variables

### 3.1 สร้าง .env.local
```bash
# Copy env-template.txt เป็น .env.local
cp env-template.txt .env.local
```

### 3.2 หา Supabase Service Role Key
```bash
1. ไปที่ https://supabase.com/dashboard/project/eifgyklgplgtorxlnger
2. Settings > API
3. Copy "service_role" key (secret)
4. แทนที่ "your-service-role-key-here" ใน .env.local
```

### 3.3 Push Migrations to Supabase
```bash
# Link project
supabase link --project-ref eifgyklgplgtorxlnger

# Push migrations (4 ไฟล์)
supabase db push

# ตรวจสอบ
supabase status
```

---

## 🚀 Phase 4: Deploy to Vercel

### 4.1 Create Vercel Project
```bash
1. ไปที่ https://vercel.com/dashboard
2. New Project > Import from GitHub
3. เลือก "SECRET NUMEROLOGY V2"
4. Import
```

### 4.2 Add Environment Variables
```bash
# ใน Vercel Dashboard > Settings > Environment Variables
# Add ทีละตัว:

NEXT_PUBLIC_SUPABASE_URL=https://eifgyklgplgtorxlnger.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpZmd5a2xncGxndG9yeGxuZ2VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2NjE4MzcsImV4cCI6MjA2NjIzNzgzN30.ie6ErESCC5zw_mE_rwHxop3j5aHDnfiGvA0rwSY2is4
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_LIFF_ID=2007563809-E0YXRpZM
LINE_CHANNEL_ID=2007563809
LINE_CHANNEL_SECRET=ae1dead8697ca0255d08a3a78fb5a02a
ADMIN_LINE_ID=U1234567890abcdef
NEXT_PUBLIC_SITE_URL=https://www.secretnumerology.com
NEXT_PUBLIC_BASE_URL=https://www.secretnumerology.com
```

### 4.3 Deploy
```bash
1. คลิก "Deploy"
2. รอ 2-3 นาที
3. ได้ URL: https://secret-numerology-v2-xxxxx.vercel.app
```

---

## 🌐 Phase 5: Domain Setup

### 5.1 Add Custom Domain
```bash
# ใน Vercel > Settings > Domains
1. Add: www.secretnumerology.com
2. Add: secretnumerology.com (redirect)
```

### 5.2 Update LINE Callback URL
```bash
# ใน LINE Developers Console
1. ไปที่ LINE Login settings
2. เปลี่ยน Callback URL เป็น:
   https://www.secretnumerology.com/auth/callback
3. Update LIFF Endpoint เป็น:
   https://www.secretnumerology.com
4. คลิก "Update"
```

---

## 🧪 Phase 6: Testing

### 6.1 Test Local First
```bash
npm run dev
# เปิด http://localhost:3000
# ทดสอบ LINE Login
```

### 6.2 Test Production
```bash
1. เข้า https://www.secretnumerology.com
2. คลิก "เข้าสู่ระบบด้วย LINE"
3. ตรวจสอบ redirect
4. ดู console.log หา LINE User ID
```

### 6.3 Update Admin LINE ID
```bash
# ใน Vercel > Settings > Environment Variables
1. แก้ไข ADMIN_LINE_ID
2. ใส่ LINE User ID ที่หาได้
3. Redeploy
```

---

## ⚠️ ข้อควรระวัง

1. **Callback URL**: ต้องตรงกับ production domain
2. **HTTPS**: LINE ต้องใช้ HTTPS เท่านั้น
3. **Service Role Key**: เก็บเป็นความลับ
4. **Admin LINE ID**: หาได้หลัง login ครั้งแรก

---

## 🎯 Ready for Phase 3!

คุณพร้อมไปต่อแล้ว! เริ่มจาก:
1. หา Supabase Service Role Key
2. Push migrations
3. Deploy to Vercel 