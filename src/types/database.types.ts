export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          created_at: string
          updated_at: string
          full_name: string | null
          company_name: string | null
          role: string | null
          phone: string | null
        }
        Insert: {
          id?: string
          email: string
          created_at?: string
          updated_at?: string
          full_name?: string | null
          company_name?: string | null
          role?: string | null
          phone?: string | null
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
          updated_at?: string
          full_name?: string | null
          company_name?: string | null
          role?: string | null
          phone?: string | null
        }
      }
      applications: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          user_id: string
          type: string
          status: string
          data: Json
          reference_number: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id: string
          type: string
          status?: string
          data: Json
          reference_number?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id?: string
          type?: string
          status?: string
          data?: Json
          reference_number?: string | null
        }
      }
      articles: {
        Row: {
          id: string
          title: string
          slug: string
          category: 'PBSA' | 'Social Housing' | 'Build to Rent' | 'Risk Transfer' | 'News'
          summary: string
          excerpt: string | null
          featured_image: string
          content: string
          author: string
          author_bio: string | null
          author_profile_picture: string | null
          author_linkedin: string | null
          reading_time: number
          published: boolean
          featured: boolean
          published_at: string | null
          created_at: string
          updated_at: string
          created_by: string | null
        }
        Insert: {
          id?: string
          title: string
          slug: string
          category: 'PBSA' | 'Social Housing' | 'Build to Rent' | 'Risk Transfer' | 'News'
          summary: string
          excerpt?: string | null
          featured_image: string
          content: string
          author?: string
          author_bio?: string | null
          author_profile_picture?: string | null
          author_linkedin?: string | null
          reading_time?: number
          published?: boolean
          featured?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
          created_by?: string | null
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          category?: 'PBSA' | 'Social Housing' | 'Build to Rent' | 'Risk Transfer' | 'News'
          summary?: string
          excerpt?: string | null
          featured_image?: string
          content?: string
          author?: string
          author_bio?: string | null
          author_profile_picture?: string | null
          author_linkedin?: string | null
          reading_time?: number
          published?: boolean
          featured?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
          created_by?: string | null
        }
      }
    }
  }
}