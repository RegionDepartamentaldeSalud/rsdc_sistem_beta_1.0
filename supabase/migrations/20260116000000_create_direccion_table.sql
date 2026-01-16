-- Create the rsdc_direccion_documentos table
CREATE TABLE IF NOT EXISTS public.rsdc_direccion_documentos (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    titulo TEXT NOT NULL,
    numero_documento TEXT NOT NULL,
    quien_recibio TEXT NOT NULL,
    fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    estado TEXT NOT NULL CHECK (estado IN ('pending', 'approved', 'review')),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.rsdc_direccion_documentos ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own documents"
    ON public.rsdc_direccion_documentos
    FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own documents"
    ON public.rsdc_direccion_documentos
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own documents"
    ON public.rsdc_direccion_documentos
    FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own documents"
    ON public.rsdc_direccion_documentos
    FOR DELETE
    USING (auth.uid() = user_id);
