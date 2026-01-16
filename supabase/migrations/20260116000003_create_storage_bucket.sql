-- Create the 'oficios' storage bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('oficios', 'oficios', true)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policies for the 'oficios' bucket
-- Allow public access to read files
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'oficios');

-- Allow authenticated users to upload files
CREATE POLICY "Authenticated users can upload oficios" ON storage.objects FOR INSERT WITH CHECK (
  bucket_id = 'oficios' AND auth.role() = 'authenticated'
);

-- Allow users to update their own files
CREATE POLICY "Users can update their own oficios" ON storage.objects FOR UPDATE USING (
  bucket_id = 'oficios' AND auth.uid() = owner
);

-- Allow users to delete their own files
CREATE POLICY "Users can delete their own oficios" ON storage.objects FOR DELETE USING (
  bucket_id = 'oficios' AND auth.uid() = owner
);
