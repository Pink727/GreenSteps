import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import path from 'path';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import dotenv from 'dotenv';
import authController from './controllers/authController';

dotenv.config();
const PORT = process.env.PORT || '4000';
const MONGODB_URI = process.env.MONGODB_URI;

console.log('PORT:', PORT);
console.log('MONGODB_URI:', MONGODB_URI);

if (!MONGODB_URI) {
  console.error('MONGODB_URI is not defined. Please set the MONGODB_URI environment variable.');
  process.exit(1);
}

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any, // Ensure the resolvers are cast to any to avoid type issues
});

app.use(express.json());

// Serve static files from the client/build directory
app.use(express.static(path.join(__dirname, '../../client/build')));

server.start().then(() => {
  server.applyMiddleware({ app });

  mongoose.connect(MONGODB_URI, {
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

// Serve the client-side application for any unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

app.post('/api/auth/register', (req, res) => authController.registerUser(req, res));
app.post('/api/auth/login', (req, res) => authController.loginUser(req, res));