// filepath: /GreenSteps/GreenSteps/server/routes/index.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('../schemas');
const auth = require('../utils/auth');

const router = express.Router();

// Middleware for authentication
router.use(auth.verifyToken);

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

// Export the router
module.exports = router; // Change this line to use default export