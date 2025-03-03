const express = require('express');
const { ApolloServer } = require('apollo-server-express');
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI || 'your_mongodb_uri';

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
});