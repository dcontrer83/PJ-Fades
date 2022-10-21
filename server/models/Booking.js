const { Schema, model } = require('mongoose');

const bookingSchema = new Schema(
    {
        reservation: {
            type: Schema.Types.ObjectId,
            ref: 'Reservation'
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
);

const Booking = model('Booking', bookingSchema);

module.exports = Booking;