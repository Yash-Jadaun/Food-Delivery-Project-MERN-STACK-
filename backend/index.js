const express = require('express');
require('dotenv').config();
const connectDB = require('./db/connect');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth')); // <-- ✅ mount auth routes

app.get('/', (req, res) => res.send('🌟 API is running...'));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
