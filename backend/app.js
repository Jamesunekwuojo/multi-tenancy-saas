
import express from 'express';
// import connectDB from './config/db.js';
import tenantRoutes from './routes/tenantRoutes.js';
import dataRoutes from './routes/dataRoutes.js';
import swaggerSetup from './swagger.js';
import errorHandler  from './middleware/errorHandler.js';
import cors from 'cors';

import adminRoutes from './routes/adminRoutes.js';


const app = express();
app.use(express.json());
swaggerSetup(app); 


app.use(cors({ origin: ['https://localhost:5173', ''], credentials: true,  }));
// Connect to MongoDB
// connectDB();

// Routes
app.get('/', (req, res) =>res.send('API is running...'))

app.use('/api/tenants', tenantRoutes);
app.use('/api/data', dataRoutes);

app.use('/api/admin', adminRoutes);

// Error handling
app.use(errorHandler);

export default app;