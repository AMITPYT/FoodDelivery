import express from 'express';
import cors from 'cors';
import foodRoutes from './routes/foodRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', foodRoutes);

export default app;
