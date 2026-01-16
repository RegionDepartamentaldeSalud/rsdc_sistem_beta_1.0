-- Add contenido_editor column to rsdc_oficios table
ALTER TABLE public.rsdc_oficios 
ADD COLUMN IF NOT EXISTS contenido_editor TEXT;
