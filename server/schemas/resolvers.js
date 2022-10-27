// Import Models
const { User, Reservation, Booking } = require('../models/index');

// Import Authentication
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');


const resolvers = {
    Query: {
        // Retrieve all Users
        users: async () => {
            return User.find().populate('reservations');
        },

        // Find User based on Username passed in
        user: async (username) => {
            return User.findOne({ username }).populate('reservations');
        },

        // Retrieve the profile of the user
        profile: async (parent, args, context) => {
            try {
                if (context.user) {
                    return User.findOne({ _id: context.user._id }).populate('reservations')
                } else {
                    throw new AuthenticationError('Must be logged in');
                }
            } catch (err) {
                throw err;
            }
        },

        // Retrieve all Reservations
        reservations: async () => {
            return Reservation.find();
        },

        // Retrieve a Reservation based on the Reservation ID passed into it
        reservation: async (parent, { reservationId }) => {
            return Reservation.findOne({ _id: reservationId });
        },

        // Retrieve all Bookings
        bookings: async () => {
            return Booking.find();
        },

        // Return a specific Booking based on the Booking ID
        booking: async (parent, { bookingId }) => {
            return Booking.findOne({ _id: bookingId });
        }
    },
    Mutation: {
        // Add a User
        addUser: async (parent, args) => {
            try {
                const userData = await User.create(args);     // Create a User based on the arguments passed in
                const token = signToken(userData);              // Generate JSON web token for the user
                return { token, userData }
            } catch (err) {
                throw err;
            }

        },
        // Log in a User
        login: async (parent, { email, password }) => {
            try {
                const userData = await User.findOne({ email });

                // Check if the email is found within the User model
                if (!userData) {
                    throw new AuthenticationError('Incorrect Email!');
                }

                // Check if the password passed in is correct
                const correctPassword = await userData.verifyPassword(password);

                // If the password is incorrect, throw an Authentication Error
                if (!correctPassword) {
                    throw new AuthenticationError('Incorrect Password!');
                }

                // Sign and validate the login credentials w/ JSON web token
                const token = signToken(userData);

                return { token, userData };
            } catch (err) {
                throw err;
            }
        },
        // Create a new Reservation
        createReservation: async (parent, { reservationInput }, context) => {
            try {
                if (context.user) {
                    // Create the Reservation
                    const reservationData = await Reservation.create(reservationInput);

                    // Add the reservation to the User
                    await User.findOneAndUpdate(
                        { _id: context.user._id },
                        { $addToSet: { reservations: reservationData._id } }
                    );

                    console.log(reservationData);
                    return reservationData;
                }
            } catch (err) {
                throw err;
            }
        },
        deleteReservation: async (parent, { reservationId }, context) => {
            try {
                if (context.user) {
                    const reservationData = await Reservation.findOneAndDelete({
                        _id: reservationId
                    });
                    await User.findOneAndUpdate(
                        { _id: context.user._id },
                        { $pull: { reservations: reservationData._id } }
                    );
                    return reservationData
                }
            } catch (err) {
                throw err;
            }
        },
        // Create a new Booking
        createBooking: async (parent, { reservationId }) => {
            try {
                // Find the Reservation then retrieve the User ID
                const reservation = Reservation.findOne({ _id: reservationId });
                const userId = reservation.user;

                const bookingData = await Booking.create({
                    reservation: reservationId,
                    user: userId
                });

                return bookingData;
            } catch (err) {
                throw err;
            }
        },
        // Cancel a Booking
        deleteBooking: async (parent, { bookingId }) => {
            try {
                const bookingData = Booking.findOneAndDelete({
                    _id: bookingId
                });
                return bookingData;
            } catch (err) {
                throw err
            }
        }
    }
}

module.exports = resolvers;