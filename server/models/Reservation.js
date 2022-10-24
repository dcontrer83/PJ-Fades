const { UniqueOperationTypesRule } = require('graphql');
const { Schema, model } = require('mongoose');

const reservationSchema = new Schema({
    // Type of Service being reserved for
    type: {
        type: String,
        required: true
    },
    // Comments made by the User
    comments: {
        type: String,
        minlength: 1,
        maxLength: 280
    },
    // Price of the service
    price: {
        type: Number,
        required: true
    },
    // Date selected for the Service
    date: {
        type: Date,
        requried: true
    },
    // Person who created the reservation
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // Is the reservation approved by the Admin?
    isApproved: {
        type: Boolean,
        required: true,
        default: true
    }
});

const Reservation = model('Reservation', reservationSchema);
module.exports = Reservation;