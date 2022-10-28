import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PROFILE, QUERY_SINGLE_RESERVATION } from '../utils/queries';
import Auth from '../utils/auth';
import ReservationList from '../components/ReservationList';

const Profile = (props) => {
    const { loading, data } = useQuery(QUERY_PROFILE);

    const user = data?.profile || {};


    const style = {
        maxHeight: {
            height: '100vh'
        },
        offset: {
            height: "93px"
        },
        main: {
            height: "100%"
        },
    }

    if (loading) {
        return <div style={style.maxHeight}>Loading user profile...</div>
    }

    return (
        <main>
            <div style={style.offset}></div>
            <div style={style.main} className='mt-3'>
                <h2 className='text-center'>Welcome, {user.username}!</h2>
                {user.reservations.length ? (
                    <h3 className='text-center mt-5 mb-5'>Reservations:</h3>
                ) : (
                    <h3 className='text-center mt-5 mb-5'>No Planned Reservations</h3>
                )
                }
                <div className='col-12 col-md-10'>
                    <ReservationList
                        reservations={user.reservations}
                        style={style.maxHeight}
                    />
                </div>
            </div>
        </main>
    )
}

export default Profile;