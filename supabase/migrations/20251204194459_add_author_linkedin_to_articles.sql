/*
  # Add author LinkedIn URL to articles

  1. Changes
    - Add `author_linkedin` column to `articles` table
      - Optional text field to store the author's LinkedIn profile URL
      - Allows admins to link to author's professional profile

  2. Notes
    - This field is optional and can be null
    - No default value needed
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'articles' AND column_name = 'author_linkedin'
  ) THEN
    ALTER TABLE articles ADD COLUMN author_linkedin text;
  END IF;
END $$;