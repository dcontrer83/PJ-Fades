import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PROFILE, QUERY_SINGLE_RESERVATION } from '../utils/queries';
import Auth from '../utils/auth';
import ReservationList from '../components/ReservationList';

const Profile = (props) => {
    const { loading, data } = useQuery(QUERY_PROFILE);

    const user = data?.profile || {};


    const style = {
        offset: {
            height: "93px"
        },
        main: {
            backgroundColor: "#caf0f8",
            fontSize: '1.2em'
        },
        border: {
            border: '2px solid #000000'
        }
    }

    if (loading) {
        return <div style={style.maxHeight}>Loading user profile...</div>
    }

    return (
        <main style={style.main}>
            <div style={style.offset}></div>
            <div className='mt-3'>
                <h2 className='text-center'>Welcome, {user.username}!</h2>
                {user.reservations.length ? (
                    <h3 className='text-center mt-5 mb-4'>Reservations:</h3>
                ) : (
                    <h3 className='text-center mt-5 mb-5'>No Planned Reservations</h3>
                )
                }
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='col-12 col-md-10 text-center'>
                        <ReservationList
                            reservations={user.reservations}
                            style={style.maxHeight}
                        />
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Profile;