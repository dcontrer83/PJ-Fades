import React from 'react';

const ReservationList = ({
    reservations,
}) => {
    return (
        <div>
            {reservations &&
                reservations.map((reservation) => (
                    <div key={reservation._id} className="card mb-3">
                        <p>Reservation Type: {reservation.type}</p>
                        <p>Date of Reservation: {reservation.date}</p>
                        <p>Time of Reservation: {reservation.time}</p>
                        <p>Comments Made: {reservation.comments}</p>
                    </div>
                ))}
        </div>
    );
};

export default ReservationList;
