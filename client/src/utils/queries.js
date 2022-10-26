import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query users {
        users {
            _id
            username
            email
            reservations {
                _id
                type
                comments
                date
                isApproved
            }
        }
    }
`;

export const QUERY_SINGLE_USER = gql`
    query users($username: String!) {
        user(username: $username) {
            _id
            username
            email
            reservations {
                _id
                type
                comments
                date
                isApproved
            }
        }
    }
`;

export const QUERY_RESERVATIONS = gql`
    query reservations {
        reservations {
            _id
            type
            comments
            date
            isApproved
        }
    }
`;

export const QUERY_SINGLE_RESERVATION = gql`
    query reservation($reservationId: ID!) {
        reservation(reservationId: $reservationId) {
            _id
            type
            comments
            date
            isApproved
        }
    }
`;

export const QUERY_BOOKINGS = gql`
    query bookings {
        bookings {
            _id
            createdAt
            updatedAt
            reservation {
                _id
                type
                comments
                price
                date
            }
            user {
                _id
                username
                email
            }
        }
    }
`;

export const QUERY_SINGLE_BOOKING = gql`
    query booking($bookingId: ID!) {
        booking(bookingId: $bookingId) {
            _id
            createdAt
            updatedAt
            reservation {
                _id
                type
                comments
                price
                date
            }
            user {
                _id
                username
                email
            }
        }
    }
`;

