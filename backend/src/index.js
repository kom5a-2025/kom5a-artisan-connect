const express = require('express');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('your_table')
    .select('*');
  
  if (error) {
    return res.status(500).send(error.message);
  }

  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
