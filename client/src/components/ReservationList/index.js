import React from 'react';

const ReservationList = ({
    reservations,
}) => {
    const style = {
        border: {
            border: '2px solid #000000'
        }
    }

    return (
        <div>
            {reservations &&
                reservations.map((reservation) => (
                    <div key={reservation._id} className="card mb-3" style={style.border}>
                        <p className='m-2'><strong>Reservation Type: </strong> {reservation.type}</p>
                        <p className='m-2'><strong>Date of Reservation: </strong>{reservation.date}</p>
                        <p className='m-2'><strong>Time of Reservation: </strong>{reservation.time}</p>
                        <p className='m-2'><strong>Comments Made: </strong>{reservation.comments}</p>
                    </div>
                ))}
        </div>
    );
};

export default ReservationList;
