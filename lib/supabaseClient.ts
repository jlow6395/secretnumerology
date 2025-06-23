import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl) {
  console.error("Supabase URL not found. Make sure NEXT_PUBLIC_SUPABASE_URL is set in your .env.local file.")
}

if (!supabaseAnonKey) {
  console.error("Supabase anonymous key not found. Make sure NEXT_PUBLIC_SUPABASE_ANON_KEY is set in your .env.local file.")
}

// Create client with fallback values to prevent crashes
export const supabase = createClient(
  supabaseUrl || 'http://localhost:54321', 
  supabaseAnonKey || 'dummy-key'
)

export type UserProfile = {
  id: string;
  line_id?: string;
  display_name?: string;
  picture_url?: string;
  updated_at?: string;
  full_name?: string;
  date_of_birth?: string;
  main_goal?: string;
  unlocked?: boolean;
  life_path_number?: number;
  talent_number?: number;
  recurring_numbers?: number[];
};

export async function createOrUpdateUser(profile: {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  email?: string;
}): Promise<UserProfile | null> {
  try {
    const { data, error } = await supabase
      .from('users')
      .upsert(
        {
          line_id: profile.userId,
          display_name: profile.displayName,
          picture_url: profile.pictureUrl,
          email: profile.email,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: 'line_id',
        }
      )
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating/updating user:', error);
    return null;
  }
}

export async function getUserProfile(lineId: string): Promise<UserProfile | null> {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('line_id', lineId)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error getting user profile:', error);
    return null;
  }
}

export async function saveUserReading(userId: string, readingType: string, readingData: any): Promise<boolean> {
  try {
    const { error } = await supabase.from('user_readings').insert({
      user_id: userId,
      reading_type: readingType,
      reading_data: readingData,
    });

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error saving user reading:', error);
    return false;
  }
}

export async function getUserReadings(userId: string): Promise<any[]> {
  try {
    const { data, error } = await supabase
      .from('user_readings')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error getting user readings:', error);
    return [];
  }
} 