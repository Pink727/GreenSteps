const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');
const routes = require('./routes');
const path = require('path');
const auth = require('./utils/auth');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/greensteps', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Apollo Server setup
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: auth.context,
});

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