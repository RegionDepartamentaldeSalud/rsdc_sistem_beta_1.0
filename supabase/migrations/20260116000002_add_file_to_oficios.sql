-- Add file columns to rsdc_oficios table
ALTER TABLE public.rsdc_oficios 
ADD COLUMN IF NOT EXISTS file_url TEXT,
ADD COLUMN IF NOT EXISTS file_name TEXT;

-- Note: Storage buckets usually need to be created via the Supabase Dashboard 
-- or using the storage API, but we can attempt to create it via SQL if the extension is enabled.
-- However, standard practice is to handle the bucket creation once.
