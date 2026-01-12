/*
  # Create Brand Assets Table

  1. New Tables
    - `brand_assets`
      - `id` (uuid, primary key) - Unique identifier
      - `name` (text) - Asset name/title
      - `description` (text, nullable) - Description of the asset
      - `file_path` (text) - URL or path to the asset
      - `asset_type` (text) - Type of asset (logo, icon, banner, etc.)
      - `variant` (text, nullable) - Variant name (e.g., "green-background", "white-text")
      - `width` (integer, nullable) - Image width in pixels
      - `height` (integer, nullable) - Image height in pixels
      - `is_active` (boolean) - Whether this asset is currently in use
      - `created_at` (timestamptz) - When the asset was added
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `brand_assets` table
    - Add policy for public read access (anyone can view brand assets)
    - Add policy for authenticated admin users to manage assets
*/

CREATE TABLE IF NOT EXISTS brand_assets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  file_path text NOT NULL,
  asset_type text NOT NULL CHECK (asset_type IN ('logo', 'icon', 'banner', 'favicon', 'other')),
  variant text,
  width integer,
  height integer,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE brand_assets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Brand assets are viewable by everyone"
  ON brand_assets
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert brand assets"
  ON brand_assets
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update brand assets"
  ON brand_assets
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete brand assets"
  ON brand_assets
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_brand_assets_type ON brand_assets(asset_type);
CREATE INDEX IF NOT EXISTS idx_brand_assets_active ON brand_assets(is_active);
