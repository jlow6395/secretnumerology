const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

function loadEnvFile() {
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
}

const envVars = loadEnvFile()
const supabase = createClient(
  envVars.NEXT_PUBLIC_SUPABASE_URL,
  envVars.SUPABASE_SERVICE_ROLE_KEY
)

async function testInsert() {
  console.log('🧪 Testing direct insert to line_users...')
  
  const testUser = {
    line_id: 'U1234567890TEST',
    display_name: 'Test User',
    picture_url: null,
    email: null,
    unlocked: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
  
  const { data, error } = await supabase
    .from('line_users')
    .insert(testUser)
    .select()
  
  if (error) {
    console.error('❌ Insert failed:', error)
    console.log('\n🔧 Manual fix needed:')
    console.log('1. Go to: https://supabase.com/dashboard/project/eifgyklgplgtorxlnger/editor')
    console.log('2. Click on "line_users" table')
    console.log('3. Click "Settings" > "Row Level Security"')
    console.log('4. Click "Disable RLS" button')
    console.log('5. Try login again')
  } else {
    console.log('✅ Insert successful:', data)
    
    // Clean up
    await supabase
      .from('line_users')
      .delete()
      .eq('line_id', 'U1234567890TEST')
    console.log('🧹 Test data cleaned')
  }
}

testInsert() 