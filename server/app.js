import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Ensure the server can parse JSON bodies

// Middleware to log all incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log('Request body:', req.body);
    next();
});

// ...existing code...

app.use('/api/auth', authRoutes);

// ...existing code...

export default app;
