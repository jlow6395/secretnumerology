# 🔑 วิธีหา Supabase Service Role Key

## ขั้นตอนที่ 1: เข้า Supabase Dashboard
1. เปิดเบราว์เซอร์ไป: https://supabase.com/dashboard/project/eifgyklgplgtorxlnger
2. Login ด้วย Google Account ที่ใช้สร้าง Project

## ขั้นตอนที่ 2: หา Service Role Key
1. ใน Dashboard ไปที่ **Settings** (เมนูซ้าย)
2. คลิก **API** 
3. หาส่วน **Project API keys**
4. คัดลอก **service_role** key (NOT anon key)

## ✅ Service Role Key จะมีลักษณะ:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpZmd5a2xncGxndG9yeGxuZ2VyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDY2MTgzNywiZXhwIjoyMDY2MjM3ODM3fQ.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

## ❌ อย่าเอา anon key (ที่เรามีอยู่แล้ว):
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpZmd5a2xncGxndG9yeGxuZ2VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2NjE4MzcsImV4cCI6MjA2NjIzNzgzN30.ie6ErESCC5zw_mE_rwHxop3j5aHDnfiGvA0rwSY2is4
```

## 🚨 สำคัญ:
- **service_role** key มีสิทธิ์เต็ม สามารถ bypass RLS ได้
- ใช้สำหรับ Migration และ Admin operations เท่านั้น
- **ห้าม** ใส่ใน client-side code

## ขั้นตอนต่อไป:
เมื่อได้ Service Role Key แล้ว ให้ส่งมาให้ผม แล้วเราจะ:
1. สร้าง .env.local file
2. Push migrations ไป Supabase Cloud
3. ทดสอบ Database connection
4. Deploy to Vercel (Phase 4)

---

**รอ Service Role Key จากคุณ...** 🔑 