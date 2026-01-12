/*
  # Add Featured Flag to Articles

  1. Changes
    - Add `featured` column to articles table (boolean, defaults to false)
    - Add index on featured column for efficient queries

  2. Important Notes
    - Featured articles will be displayed prominently at the top of the insights page
    - Only admins can mark articles as featured
    - Featured status is independent of published status
*/

-- Add featured column to articles table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'articles' AND column_name = 'featured'
  ) THEN
    ALTER TABLE articles ADD COLUMN featured boolean NOT NULL DEFAULT false;
  END IF;
END $$;

-- Create index on featured column for efficient queries
CREATE INDEX IF NOT EXISTS idx_articles_featured ON articles(featured, published_at DESC);