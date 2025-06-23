const { createClient } = require('@supabase/supabase-js')

// อ่าน environment variables จาก .env.local manually
const fs = require('fs')
const path = require('path')

function loadEnvFile() {
  try {
    const envPath = path.join(__dirname, '.env.local')
    const envContent = fs.readFileSync(envPath, 'utf8')
    const envVars = {}
    
    envContent.split('\n').forEach(line => {
      const trimmed = line.trim()
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=')
        if (key && valueParts.length > 0) {
          envVars[key.trim()] = valueParts.join('=').trim()
        }
      }
    })
    
    return envVars
  } catch (error) {
    console.error('❌ Cannot read .env.local file:', error.message)
    return {}
  }
}

const envVars = loadEnvFile()
const supabaseUrl = envVars.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = envVars.SUPABASE_SERVICE_ROLE_KEY

console.log('🔧 Environment check:')
console.log('SUPABASE_URL:', supabaseUrl ? '✅ Set' : '❌ Missing')
console.log('SERVICE_KEY:', supabaseServiceKey ? '✅ Set' : '❌ Missing')
console.log('')

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function checkLineUsers() {
  console.log('🔍 Checking LINE users in database...\n')
  
  try {
    // 1. ตรวจสอบ table line_users
    console.log('📋 1. Checking line_users table...')
    const { data: lineUsers, error: lineError } = await supabase
      .from('line_users')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (lineError) {
      console.error('❌ Error querying line_users:', lineError.message)
    } else {
      console.log(`✅ Found ${lineUsers.length} LINE users`)
      lineUsers.forEach((user, index) => {
        console.log(`\n👤 User ${index + 1}:`)
        console.log(`   LINE ID: ${user.line_id}`)
        console.log(`   Display Name: ${user.display_name}`)
        console.log(`   Email: ${user.email || 'N/A'}`)
        console.log(`   Unlocked: ${user.unlocked ? 'Yes' : 'No'}`)
        console.log(`   Created: ${user.created_at}`)
      })
    }
    
    // 2. ตรวจสอบ Admin LINE ID
    console.log('\n👑 2. Checking Admin configuration...')
    const adminLineId = envVars.ADMIN_LINE_ID
    console.log(`Admin LINE ID in env: ${adminLineId || 'NOT SET'}`)
    
    if (adminLineId && lineUsers.length > 0) {
      const adminUser = lineUsers.find(user => user.line_id === adminLineId)
      if (adminUser) {
        console.log(`✅ Admin user found: ${adminUser.display_name}`)
      } else {
        console.log(`⚠️ Admin LINE ID not found in database`)
        console.log(`💡 Available LINE IDs:`)
        lineUsers.forEach(user => {
          console.log(`   - ${user.line_id} (${user.display_name})`)
        })
      }
    }
    
    // 3. ตรวจสอบ profiles table (Google users)
    console.log('\n📋 3. Checking profiles table (Google users)...')
    const { data: profiles, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .order('updated_at', { ascending: false })
    
    if (profileError) {
      console.error('❌ Error querying profiles:', profileError.message)
    } else {
      console.log(`✅ Found ${profiles.length} Google profiles`)
    }
    
    // 4. สรุปผล
    console.log('\n📊 SUMMARY:')
    console.log(`Total LINE users: ${lineUsers.length}`)
    console.log(`Total Google users: ${profiles.length}`)
    console.log(`Admin configured: ${adminLineId ? 'Yes' : 'No'}`)
    
    if (lineUsers.length > 0) {
      console.log('\n🎯 NEXT STEPS:')
      console.log('1. Copy the LINE ID ของคุณจากรายการข้างบน')
      console.log('2. อัปเดท ADMIN_LINE_ID ใน .env.local')
      console.log('3. Deploy ไป Vercel และอัปเดท Environment Variables')
      
      console.log('\n📝 To set as admin, update .env.local:')
      lineUsers.forEach(user => {
        console.log(`   ADMIN_LINE_ID=${user.line_id}  # ${user.display_name}`)
      })
    }
    
  } catch (error) {
    console.error('💥 Unexpected error:', error)
  }
}

checkLineUsers() 