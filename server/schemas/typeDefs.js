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
        comments: String!
        price: Number!
        date: Date!
        creater: User!
        isApproved: Boolean!
    }

    type Booking {
        _id: ID!
        reservation: Reservation!
        user: User!
        createAt: String!
        updatedAt: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user(username: String!): User
        users: [User]
        reservations: [reservations]
        reservation(reservationId: ID!): Reservation
        bookings: [Booking]
        booking(bookingId: ID!): Booking
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        createReservation(type: String!, comments: String!, price: Number!, date: Date!, creater: User!, isApproved: Boolean!!): Reservation
        bookReservation(eventId: ID!): Booking
        cancelBooking(bookingId: ID!)
    }

`;

module.exports = typeDefs;