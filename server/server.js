import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { typeDefs, resolvers } from './schemas/index.js';
import router from './routes/index.js';
import { verifyToken } from './utils/auth.js';

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

// Middleware for authentication
app.use(verifyToken);

// Use the router
app.use('/api', router);

// Connect to MongoDB
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/greensteps';
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

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

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
});