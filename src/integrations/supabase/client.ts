// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wofriauwdvffuhuylbrm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvZnJpYXV3ZHZmZnVodXlsYnJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NjM5MDYsImV4cCI6MjA2MDUzOTkwNn0.IZoCC5nMKPXIFYv8YeESAnmJbZYo30fRMpD_A1S7Vdc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);