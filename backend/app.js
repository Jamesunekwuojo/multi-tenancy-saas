

import express from 'express';
import connectDB from './config/db';
import tenantRoutes from './routes/tenantRoutes';
import dataRoutes from './routes/dataRoutes';

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