/*
  # Add author contact information to articles

  1. Changes
    - Add `author_phone` column to `articles` table (optional text field)
    - Add `author_email` column to `articles` table (optional text field)
  
  2. Notes
    - Both fields are optional to maintain backward compatibility
    - No default values needed as these are optional contact details
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'articles' AND column_name = 'author_phone'
  ) THEN
    ALTER TABLE articles ADD COLUMN author_phone text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'articles' AND column_name = 'author_email'
  ) THEN
    ALTER TABLE articles ADD COLUMN author_email text;
  END IF;
END $$;