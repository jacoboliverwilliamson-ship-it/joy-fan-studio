import { createClient } from "@supabase/supabase-js";

export const getSupabase = () => {
  const url = (import.meta as any).env?.VITE_SUPABASE_URL as string | undefined;
  const anon = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY as string | undefined;

  if (!url || !anon) return null;
  try {
    return createClient(url, anon);
  } catch (e) {
    console.error("Failed to create Supabase client", e);
    return null;
  }
};
