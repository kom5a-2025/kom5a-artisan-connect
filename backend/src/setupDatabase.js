import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function setupDatabase() {
  const { data, error } = await supabase.from('users').insert([{ name: 'Admin', email: 'admin@kom5a.com' }]);
  
  if (error) {
    console.error('❌ Erreur lors de la configuration de la base de données:', error.message);
  } else {
    console.log('✅ Base de données configurée automatiquement:', data);
  }
}

setupDatabase();
