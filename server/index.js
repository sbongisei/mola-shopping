const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Mola server is working!',
    status: 'success'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Mola server running on port ${PORT}`);
});