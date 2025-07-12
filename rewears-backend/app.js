const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); 
app.use(express.json());

// Database Connection 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rewear_db')
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));


// Basic test route
app.get('/', (req, res) => {
  res.send('ReWear Backend API is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});