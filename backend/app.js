
import express from 'express';
import connectDB from './config/db.js';
import tenantRoutes from './routes/tenantRoutes.js';
import dataRoutes from './routes/dataRoutes.js';
import swaggerSetup from './swagger.js';
import { errorHandler } from './middleware/errorMiddleware.js';


const app = express();
app.use(express.json());
swaggerSetup(app);

// Connect to MongoDB
connectDB();

// Routes
app.get('/', (req, res) =>res.send('API is running...'))

app.use('/api/tenants', tenantRoutes);
app.use('/api/data', dataRoutes);

// Error handling
app.use(errorHandler);

export default app;