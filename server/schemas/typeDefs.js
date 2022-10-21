const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        reservations: [Reservation]!
    }

    type Reservation {
        _id: ID
        type: String
        comments: String
        price: Int
        date: String
        user: User!
        isApproved: Boolean
    }

    type Booking {
        _id: ID
        reservation: Reservation
        user: User
        createAt: String
        updatedAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user(username: String!): User
        users: [User]
        reservations: [Reservation]
        reservation(reservationId: ID!): Reservation
        bookings: [Booking]
        booking(bookingId: ID!): Booking
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        createReservation(type: String!, comments: String!, price: Int!, date: String!, user: User!, isApproved: Boolean!): Reservation
        deleteReservation(reservationId: ID!): Reservation
        createBooking(reservationId: ID!): Booking
        deleteBooking(bookingId: ID!): Booking
    }

`;

module.exports = typeDefs;