const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);

// Health Check
app.get('/', (req, res) => {
  res.json({ message: 'User Management System API is running!' });
});

// Error Handler (must be last)
app.use(errorHandler);

module.exports = app;
