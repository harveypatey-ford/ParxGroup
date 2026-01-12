/*
  # Update Article Category from "Parx News" to "News"

  1. Changes
    - Update existing articles with category "Parx News" to "News"
    - Drop the old CHECK constraint on the category column
    - Add a new CHECK constraint with "News" instead of "Parx News"

  2. Important Notes
    - This migration safely updates all existing "Parx News" articles to "News"
    - The constraint is recreated to allow "News" as a valid category value
*/

-- First, update any existing articles with "Parx News" category to "News"
UPDATE articles 
SET category = 'News' 
WHERE category = 'Parx News';

-- Drop the old constraint
ALTER TABLE articles 
DROP CONSTRAINT IF EXISTS articles_category_check;

-- Add the new constraint with "News" instead of "Parx News"
ALTER TABLE articles 
ADD CONSTRAINT articles_category_check 
CHECK (category IN ('PBSA', 'Social Housing', 'Build to Rent', 'Risk Transfer', 'News'));