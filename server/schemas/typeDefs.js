const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        reservations: [Reservation]
    }

    type Reservation {
        _id: ID!
        type: String!
        commonts: String!
        price: Number!
        date: Date!
        creater: User!
        isApproved: Boolean!
    }

    type Booking {
        reservation: Reservation!
        user: User!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user(username: String!): User
        users: [User]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }

`;

module.exports = typeDefs;