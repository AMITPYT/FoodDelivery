import dotenv from 'dotenv';
import connectDB from './config/db.js';
import app from './app.js';
import { seedMenu } from './data/seeder.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB().then(() => {
    // Seed data after successful connection
    seedMenu();
});

const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
