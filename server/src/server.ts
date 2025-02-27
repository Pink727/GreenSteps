import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import { typeDefs } from './schemas';
import { resolvers } from './resolvers';
import { PORT, MONGODB_URI } from './config';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.json());

server.applyMiddleware({ app });

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });