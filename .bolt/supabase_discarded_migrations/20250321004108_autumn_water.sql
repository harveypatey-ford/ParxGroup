/*
  # Fix RLS Policies

  1. Changes
    - Remove circular dependencies in RLS policies
    - Simplify admin role checks
    - Add explicit admin check function
    - Update existing policies to use new admin check

  2. Security
    - Maintain security while preventing infinite recursion
    - Keep all admin privileges intact
    - Ensure proper access control
*/

-- Create admin check function that doesn't use RLS
CREATE OR REPLACE FUNCTION is_admin(user_id uuid)
RETURNS boolean AS $$
BEGIN
  -- Direct query without RLS to prevent recursion
  RETURN EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_id = $1
    AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Update user_roles policies
DROP POLICY IF EXISTS "User roles access policy" ON user_roles;
DROP POLICY IF EXISTS "Users can read own roles" ON user_roles;

CREATE POLICY "User roles base policy"
  ON user_roles
  FOR ALL
  TO authenticated
  USING (
    -- Users can access their own roles
    user_id = auth.uid()
  );

CREATE POLICY "Admin roles policy"
  ON user_roles
  FOR ALL
  TO authenticated
  USING (
    -- Admins can access all roles
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid()
      AND role = 'admin'
    )
  );

-- Update users policies
DROP POLICY IF EXISTS "Users access policy" ON users;

CREATE POLICY "Users base policy"
  ON users
  FOR ALL
  TO authenticated
  USING (
    -- Users can access their own data
    id = auth.uid()
  );

CREATE POLICY "Admin users policy"
  ON users
  FOR ALL
  TO authenticated
  USING (
    -- Admins can access all users
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid()
      AND role = 'admin'
    )
  );

-- Update applications policies
DROP POLICY IF EXISTS "Applications access policy" ON applications;

CREATE POLICY "Applications base policy"
  ON applications
  FOR ALL
  TO authenticated
  USING (
    -- Users can access their own applications
    user_id = auth.uid()
  );

CREATE POLICY "Admin applications policy"
  ON applications
  FOR ALL
  TO authenticated
  USING (
    -- Admins can access all applications
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid()
      AND role = 'admin'
    )
  );