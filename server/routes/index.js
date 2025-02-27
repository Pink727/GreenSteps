import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from '../schemas/index.js';
import auth from '../utils/auth.js';
import { registerUser } from '../controllers/authController.js';

const router = express.Router();

// Middleware for authentication
router.use(auth.verifyToken);

// Registration route
router.post('/auth/register', registerUser);

// Apollo Server setup
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        // Add user to context if authenticated
        const token = req.headers.authorization || '';
        const user = auth.getUserFromToken(token);
        return { user };
    },
});

// Apply Apollo GraphQL middleware
server.applyMiddleware({ app: router });

// Export the router as default
export default router;