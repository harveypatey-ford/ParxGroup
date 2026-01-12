import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: window.localStorage,
    storageKey: 'parx_auth_token',
    flowType: 'implicit'
  }
});

export type User = {
  id: string;
  email: string;
  created_at: string;
  updated_at: string;
  full_name: string | null;
  company_name: string | null;
  role: string | null;
  phone: string | null;
};

export type Application = {
  id: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  type: string;
  status: string;
  data: Record<string, any>;
  reference_number: string | null;
};

export async function getCurrentUser() {
  try {
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) return null;

    const { data: profile, error: profileError } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single();

    if (profileError) throw profileError;
    return profile;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

export async function updateUser(id: string, updates: Partial<User>) {
  try {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

export async function createApplication(application: Omit<Application, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const { data, error } = await supabase
      .from('applications')
      .insert([application])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating application:', error);
    throw error;
  }
}

export async function updateApplication(id: string, updates: Partial<Application>) {
  try {
    const { data, error } = await supabase
      .from('applications')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating application:', error);
    throw error;
  }
}

export async function getApplications(userId: string) {
  try {
    const { data, error } = await supabase
      .from('applications')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error getting applications:', error);
    throw error;
  }
}

export async function getApplication(id: string) {
  try {
    const { data, error } = await supabase
      .from('applications')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error getting application:', error);
    throw error;
  }
}

export function generateReferenceNumber(type: string) {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `${type}-${year}${month}-${random}`;
}