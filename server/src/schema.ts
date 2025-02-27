import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
    }

    type Query {
        getUser(id: ID!): User
    }

    type Mutation {
        registerUser(username: String!, email: String!, password: String!): User
        loginUser(email: String!, password: String!): String
        updateUser(id: ID!, username: String, email: String, password: String): User
    }
`;