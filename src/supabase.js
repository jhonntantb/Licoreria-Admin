import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rrrgppszpthcqtvcifcf.supabase.co';
const supabaseKey = 'RgDP8MkUmTo7CQSr';
console.log('esta es la url', process.env.REACT_APP_SUPABASE_URL);
export const supabase = createClient(supabaseUrl, supabaseKey);
