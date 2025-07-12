// rewears-backend/server.js (excerpt)

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // To load environment variables from .env file

dotenv.config(); // Load .env file at the start

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // For parsing application/json

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/rewear_db') // Use MONGO_URI from .env
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import routes
const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes'); // Assuming you have this from previous commits

// Use routes
app.use('/api/auth', authRoutes); // Auth routes prefix
app.use('/api/items', itemRoutes); // Item routes prefix (ensure authMiddleware is applied here later for protected routes)

