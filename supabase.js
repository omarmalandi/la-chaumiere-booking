import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'


const SUPABASE_URL = 'https://anxqwdueqmkfzrnkaddy.supabase.co'


const SUPABASE_KEY = 'sb_publishable_BE7A-o8_UwVE9fflgVB6ow_ivoOwdX9'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
