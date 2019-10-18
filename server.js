const express = require('express');
const dotenv = require('dotenv');

// Route files
const bootcamps = require('./routes/bootcamps');

// env vars
dotenv.config({ path: './config/config.env' });

// Instantiate server
const app = express();

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

// Set port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`
  )
);
