-- Create the rsdc_oficios table
CREATE TABLE IF NOT EXISTS public.rsdc_oficios (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    numero_oficio INTEGER NOT NULL,
    descripcion TEXT NOT NULL,
    fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    hecho_por TEXT NOT NULL,
    anio INTEGER NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    -- Ensure unique oficio number per year for each user (or globally, let's stick to user-based for RLS)
    UNIQUE(numero_oficio, anio, user_id)
);

-- Enable Row Level Security
ALTER TABLE public.rsdc_oficios ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own oficios"
    ON public.rsdc_oficios
    FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own oficios"
    ON public.rsdc_oficios
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own oficios"
    ON public.rsdc_oficios
    FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own oficios"
    ON public.rsdc_oficios
    FOR DELETE
    USING (auth.uid() = user_id);
