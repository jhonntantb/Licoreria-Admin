/* eslint-disable operator-linebreak */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rrrgppszpthcqtvcifcf.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJycmdwcHN6cHRoY3F0dmNpZmNmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NDU5MDkwMiwiZXhwIjoxOTgwMTY2OTAyfQ.6kM2iJ1LW5sEVEg3iPpo8AZHDsRmbPg3pXF994m-xsw';
console.log('esta es la url', process.env.REACT_APP_SUPABASE_URL);
export const supabase = createClient(supabaseUrl, supabaseKey);
