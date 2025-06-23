-- Create LINE users table
CREATE TABLE line_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  line_id TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL,
  picture_url TEXT,
  email TEXT,
  date_of_birth DATE,
  unlocked BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create index for faster lookups
CREATE INDEX idx_line_users_line_id ON line_users(line_id);

-- Create RLS policies
ALTER TABLE line_users ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own data
CREATE POLICY "Users can view own LINE profile" ON line_users
  FOR SELECT USING (line_id = current_setting('app.current_line_id', true));

-- Policy: Users can insert their own data
CREATE POLICY "Users can insert own LINE profile" ON line_users
  FOR INSERT WITH CHECK (line_id = current_setting('app.current_line_id', true));

-- Policy: Users can update their own data
CREATE POLICY "Users can update own LINE profile" ON line_users
  FOR UPDATE USING (line_id = current_setting('app.current_line_id', true));

-- Update trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_line_users_updated_at 
  BEFORE UPDATE ON line_users 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column(); 