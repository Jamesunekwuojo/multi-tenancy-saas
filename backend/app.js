const express = require('express');
const connectDB = require('./config/db');
const tenantRoutes = require('./routes/tenantRoutes');
const dataRoutes = require('./routes/dataRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/tenants', tenantRoutes);
app.use('/api/data', dataRoutes);

// Error handling
app.use(errorHandler);

export default app;