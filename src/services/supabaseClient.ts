import { createClient } from '@supabase/supabase-js';

// const options = {
//   db: {
//     schema: 'public',
//   },
//   auth: {
//     autoRefreshToken: true,
//     persistSession: true,
//     detectSessionInUrl: true,
//   },
//   global: {
//     headers: { 'x-my-custom-header': 'kmb' },
//   },
// };

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
  // options,
);
