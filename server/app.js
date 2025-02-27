import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'; // Ensure mongoose is imported

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Ensure the server can parse JSON bodies

// Middleware to log all incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log('Request body:', req.body);
    next();
});

// Ping test endpoint
app.get('/api/ping', async (req, res) => {
    try {
        // Check database connection
        await mongoose.connection.db.admin().ping();
        res.status(200).json({ message: 'Pong! Database connection is healthy.' });
    } catch (error) {
        console.error('Error pinging database:', error);
        res.status(500).json({ message: 'Error pinging database', error });
    }
});

app.use('/api/auth', authRoutes);

export default app;
