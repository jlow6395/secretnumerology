-- Fix RLS policies for line_users table
-- Allow INSERT without authentication for LINE users

-- Temporarily disable RLS to allow INSERT
ALTER TABLE line_users DISABLE ROW LEVEL SECURITY;

-- Or alternatively, add a more permissive INSERT policy
-- ALTER TABLE line_users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies that might be too restrictive
DROP POLICY IF EXISTS "Users can insert own LINE profile" ON line_users;
DROP POLICY IF EXISTS "Users can update own LINE profile" ON line_users;
DROP POLICY IF EXISTS "Users can view own LINE profile" ON line_users;

-- Create new permissive policies
CREATE POLICY "Allow INSERT for LINE users" ON line_users
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow SELECT for LINE users" ON line_users
  FOR SELECT USING (true);

CREATE POLICY "Allow UPDATE for LINE users" ON line_users
  FOR UPDATE USING (true);

-- Re-enable RLS with new policies
ALTER TABLE line_users ENABLE ROW LEVEL SECURITY; 