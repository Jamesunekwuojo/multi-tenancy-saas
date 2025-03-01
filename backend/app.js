
import express from 'express';
import connectDB from './config/db';
import tenantRoutes from './routes/tenantRoutes';
import dataRoutes from './routes/dataRoutes';
import swaggerSetup from './swagger';

const app = express();
app.use(express.json());
swaggerSetup(app);

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/tenants', tenantRoutes);
app.use('/api/data', dataRoutes);

// Error handling
// app.use(errorHandler);

export default app;