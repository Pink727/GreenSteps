// filepath: /GreenSteps/GreenSteps/server/schemas/typeDefs.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    habits: [Habit]
  }

  type Habit {
    id: ID!
    name: String!
    description: String
    frequency: String
    userId: ID!
  }

  type Query {
    getUser(id: ID!): User
    getAllUsers: [User]
    getHabit(id: ID!): Habit
    getAllHabits: [Habit]
  }

  type Mutation {
    addUser(username: String!, password: String!): User
    addHabit(name: String!, description: String, frequency: String, userId: ID!): Habit
    updateHabit(id: ID!, name: String, description: String, frequency: String): Habit
    deleteHabit(id: ID!): Habit
  }
`;

module.exports = typeDefs;