/*
  # Add References Section to Articles

  1. Changes
    - Add `article_references` column to `articles` table to store citations and sources
    - The column stores an array of reference objects with title, url, and accessed_date

  2. Notes
    - References are stored as JSONB for flexibility
    - Each reference can contain: title, url, and optional accessed_date
    - Existing articles will have empty array by default
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'articles' AND column_name = 'article_references'
  ) THEN
    ALTER TABLE articles ADD COLUMN article_references JSONB DEFAULT '[]'::jsonb;
  END IF;
END $$;