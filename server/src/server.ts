import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: __dirname + '/../.env' });

const PORT = 4000; // Define the PORT directly in the file
const { MONGODB_URI } = process.env;

console.log('PORT:', PORT);
console.log('MONGODB_URI:', MONGODB_URI);

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any, // Ensure the resolvers are cast to any to avoid type issues
});

app.use(express.json());

server.start().then(() => {
  server.applyMiddleware({ app });

  mongoose.connect(MONGODB_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, // Use createIndex instead of ensureIndex
  })
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
      });
    })
    .catch(err => {
      console.error('Database connection error:', err);
    });
});