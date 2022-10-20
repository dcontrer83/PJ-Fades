// Import User Model
const User = require('../models/index');

// Import Authentication
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');


const resolvers = {
    Query: {
        // Retrieve all Users
        users: async () => {
            return User.find();
        },

        // Find User based on Username passed in
        user: async (username) => {
            return User.findOne({ username });
        }
    },

    Mutation: {
        // Add a User
        addUser: async (parent, args) => {
            const userData = User.create(args);     // Create a User based on the arguments passed in
            const token = signToken(userData);      // Generate JSON web token for the user
        },

        // Log in a User
        login: async (parent, { email, password }) => {
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
        }
    }
}

export default resolvers;