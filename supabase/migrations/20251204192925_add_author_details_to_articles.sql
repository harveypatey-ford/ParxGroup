/*
  # Add Author Details to Articles

  1. Changes
    - Add `author_bio` column to store author biography
    - Add `author_profile_picture` column to store author profile image URL
  
  2. Details
    - `author_bio` is optional text field for author's short biography
    - `author_profile_picture` is optional text field for author's profile image URL
    - Both fields are nullable to support existing articles
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'articles' AND column_name = 'author_bio'
  ) THEN
    ALTER TABLE articles ADD COLUMN author_bio text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'articles' AND column_name = 'author_profile_picture'
  ) THEN
    ALTER TABLE articles ADD COLUMN author_profile_picture text;
  END IF;
END $$;