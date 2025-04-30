import express from 'express';
import bcrypt from 'bcryptjs';   // Add bcryptjs for hashing
import User from '../models/User.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // ईमेल की अद्वितीयता की जाँच
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // पासवर्ड को हैश करना
    const salt = await bcrypt.genSalt(10); // Salt create करना
    const hashedPassword = await bcrypt.hash(password, salt); // Password hash करना

    const newUser = new User({ name, email, password: hashedPassword }); // Use hashed password
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Signup error:', error);  // Add better error logging
    res.status(500).json({ error: 'Signup failed' });
  }
});

export default router;
