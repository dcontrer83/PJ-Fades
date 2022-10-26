import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
mutation addUser($username: String!, $email: String!, $password: String) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
                user {
                _id
                username
            }
        }
    }
`;

export const CREATE_RESERVATION = gql`
    mutation createReservation($reservationInput: ReservationInput!) {
        createReservation(reservationInput: $reservationInput) {
            reservation {
                _id
                type
                comments
                date
                time
                isApproved
            }
        }
    }
`;

export const DELETE_RESERVATION = gql`
    mutation deleteReservation($reservationId: ID!) {
        deleteReservation(reservationId: $reservationId) {
            reservation {
                _id
                type
                comments
                date
                time
                isApproved
            }
        }
    }
`;

export const CREATE_BOOKING = gql`
    mutation createBooking($reservationId: ID!) {
        createBooking(reservationId: $reservationId) {
            booking {
                _id
                createdAt
                updatedAt
                reservation {
                    _id
                    type
                    comments
                    date
                    time
                }
                user {
                    _id
                    username
                    email
                }
            }
        }
    }
`;