// rewears-backend/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import your User model

// Register a new user
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Basic validation
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User with this email already exists.' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({
      username,
      email,
      passwordHash,
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully!' });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error during registration.', error: err.message });
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // Compare password
    const isMatch = await user.comparePassword(password); // Using the method defined in User model
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // Generate JWT
    const payload = {
      user: {
        id: user.id,
        role: user.role // Include role in token for authorization
      }
    };

    // Replace 'your_jwt_secret' with a strong, environment-variable-loaded secret
    jwt.sign(
      payload,
      process.env.JWT_SECRET || 'your_jwt_secret', // Use environment variable in production
      { expiresIn: '1h' }, // Token expires in 1 hour
      (err, token) => {
        if (err) throw err;
        user.lastLogin = Date.now(); // Update last login time
        user.save(); // Save the updated user object
        res.json({
          message: 'Login successful!',
          token,
          userId: user.id,
          username: user.username,
          rewearPoints: user.rewearPoints
        });
      }
    );

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error during login.', error: err.message });
  }
});

module.exports = router;