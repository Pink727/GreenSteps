import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import path from 'path';
import { typeDefs, resolvers } from './schemas/index.js';
import router from './routes/index.js';
import { verifyToken } from './utils/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for authentication
app.use(verifyToken);

// Use the router
app.use('/api', router);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/greensteps', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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

// Serve static files from the React app
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
});