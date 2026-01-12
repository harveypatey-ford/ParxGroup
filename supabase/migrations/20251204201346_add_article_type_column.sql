/*
  # Add Article Type Column

  1. Changes
    - Add `article_type` column to `articles` table
      - Type: text
      - Constraint: Must be either 'Insight' or 'News'
      - Default: 'Insight'
      - Not nullable
    
  2. Notes
    - This column will be displayed alongside the existing category (e.g., PBSA)
    - Existing articles will default to 'Insight'
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'articles' AND column_name = 'article_type'
  ) THEN
    ALTER TABLE articles 
    ADD COLUMN article_type text NOT NULL DEFAULT 'Insight'
    CHECK (article_type IN ('Insight', 'News'));
  END IF;
END $$;