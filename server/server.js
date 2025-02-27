import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import path from 'path';
import { fileURLToPath } from 'url';
import { typeDefs, resolvers } from './schemas/index.js';
import router from './routes/index.js';
import { verifyToken } from './utils/auth.js';
import './config/db.js'; // Import the db.js file to establish the MongoDB connection
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve favicon.ico without authentication
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/favicon.ico', express.static(path.join(__dirname, '../client/build/favicon.ico')));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Use the router
app.use('/api', verifyToken, router);

// Apollo Server setup
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        // Add user to context if authenticated
        const token = req.headers.authorization || '';
        const user = getUserFromToken(token);
        return { user };
    },
});

// Apply Apollo GraphQL middleware
server.applyMiddleware({ app });

// Handle all other routes by serving the client-side application
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/greensteps', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error); // Debugging: Log MongoDB connection errors
});