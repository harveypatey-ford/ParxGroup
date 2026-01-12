/*
  # Add call-to-action configuration to articles

  1. Changes
    - Add `cta_type` column (text) - Either 'contact' (default) or 'custom'
    - Add `cta_title` column (text) - Custom title for the CTA section
    - Add `cta_description` column (text) - Custom description text
    - Add `cta_link` column (text) - Custom link URL (internal or external)
    - Add `cta_button_text` column (text) - Custom button text
  
  2. Notes
    - All fields are optional to maintain backward compatibility
    - If cta_type is null or 'contact', defaults to the contact page behavior
    - Custom CTAs allow admins to direct readers to specific service pages
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'articles' AND column_name = 'cta_type'
  ) THEN
    ALTER TABLE articles ADD COLUMN cta_type text DEFAULT 'contact';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'articles' AND column_name = 'cta_title'
  ) THEN
    ALTER TABLE articles ADD COLUMN cta_title text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'articles' AND column_name = 'cta_description'
  ) THEN
    ALTER TABLE articles ADD COLUMN cta_description text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'articles' AND column_name = 'cta_link'
  ) THEN
    ALTER TABLE articles ADD COLUMN cta_link text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'articles' AND column_name = 'cta_button_text'
  ) THEN
    ALTER TABLE articles ADD COLUMN cta_button_text text;
  END IF;
END $$;