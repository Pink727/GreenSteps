import { gql } from 'apollo-server-express';
import { typeDefs } from './typeDefs.js';
import resolvers from './resolvers.js';

const schema = {
  typeDefs,
  resolvers,
};

export default schema;