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

  type ForumPost {
    id: ID!
    title: String!
    content: String!
    author: User!
    createdAt: String!
  }

  type Query {
    getUser(id: ID!): User
    getAllUsers: [User]
    getHabit(id: ID!): Habit
    getAllHabits: [Habit]
    getForumPosts: [ForumPost]
  }

  type Mutation {
    addUser(username: String!, password: String!): User
    addHabit(name: String!, description: String, frequency: String, userId: ID!): Habit
    updateHabit(id: ID!, name: String, description: String, frequency: String): Habit
    deleteHabit(id: ID!): Habit
    addForumPost(title: String!, content: String!, authorId: ID!): ForumPost
  }
`;

module.exports = typeDefs;