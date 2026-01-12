/*
  # Create Articles Table for Insights Management

  1. New Tables
    - `articles`
      - `id` (uuid, primary key) - Unique identifier for each article
      - `title` (text) - Article title
      - `slug` (text, unique) - URL-friendly version of title
      - `category` (text) - Article category (PBSA, Social Housing, Build to Rent, Risk Transfer, Parx News)
      - `summary` (text) - Short preview text (3-line preview)
      - `excerpt` (text) - Alternative summary field for meta tags
      - `featured_image` (text) - URL to the article's featured image
      - `content` (text) - Full article content (rich text HTML)
      - `author` (text) - Author name, defaults to 'Parx Team'
      - `reading_time` (integer) - Estimated reading time in minutes, defaults to 5
      - `published` (boolean) - Publication status, defaults to false
      - `published_at` (timestamptz) - When the article was published
      - `created_at` (timestamptz) - When the article was created
      - `updated_at` (timestamptz) - When the article was last updated
      - `created_by` (uuid) - References auth.users who created the article

  2. Security
    - Enable RLS on `articles` table
    - Add policy for public read access to published articles
    - Add policy for authenticated admin users to manage all articles

  3. Important Notes
    - Slug must be unique to prevent URL conflicts
    - Only published articles (published = true) are visible to the public
    - The excerpt field is used for social media meta tags
    - The summary field is used for article list previews
*/

-- Create articles table
CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL CHECK (category IN ('PBSA', 'Social Housing', 'Build to Rent', 'Risk Transfer', 'Parx News')),
  summary text NOT NULL,
  excerpt text,
  featured_image text NOT NULL,
  content text NOT NULL,
  author text NOT NULL DEFAULT 'Parx Team',
  reading_time integer NOT NULL DEFAULT 5,
  published boolean NOT NULL DEFAULT false,
  published_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_by uuid REFERENCES auth.users(id)
);

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);

-- Create index on published and published_at for efficient queries
CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(published, published_at DESC);

-- Enable Row Level Security
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view published articles
CREATE POLICY "Published articles are publicly viewable"
  ON articles
  FOR SELECT
  USING (published = true);

-- Policy: Authenticated users can view all articles (including drafts)
CREATE POLICY "Authenticated users can view all articles"
  ON articles
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Authenticated users can insert articles
CREATE POLICY "Authenticated users can create articles"
  ON articles
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Authenticated users can update articles
CREATE POLICY "Authenticated users can update articles"
  ON articles
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Authenticated users can delete articles
CREATE POLICY "Authenticated users can delete articles"
  ON articles
  FOR DELETE
  TO authenticated
  USING (true);

-- Create trigger to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_articles_updated_at
  BEFORE UPDATE ON articles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();