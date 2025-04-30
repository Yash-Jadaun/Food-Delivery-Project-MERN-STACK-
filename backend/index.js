import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import auth from './routes/auth.js'
import User from './models/User.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', auth); // POST requests go to /signup

// MongoDB connection
mongoose.connect('mongodb+srv://yashjadaun2711:AQlsYCkazgIk2JTj@userdetails.qzwedug.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
