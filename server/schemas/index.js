// filepath: /GreenSteps/GreenSteps/server/schemas/index.js
const { gql } = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const schema = {
  typeDefs,
  resolvers,
};

module.exports = schema;