import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_RESERVATION } from '../utils/mutations';
import Auth from '../utils/auth';

/*
type --> select --> cut/beard/etc
comments --> text field
*/

const Reservation = (props) => {
    // get and set state for type, comments, price, and dates
    const [formState, setFormState] = useState({
        type: '',
        comments: '',
        price: '',
        date: ''
    });

    // mutation for creating a reservation
    const [createReservation, { error, data }] = useMutation(CREATE_RESERVATION);

    //  update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // form submit handler
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            // Create the Reservation
            const { data } = await createReservation({
                variables: {
                    type: formState.type,
                    comments: formState.comments,
                    price: formState.price,
                    date: new Date(Date.now()).toIsoString()
                }
            });

            // Then, reset the form state
            setFormState({
                type: '',
                comments: '',
                price: '',
                date: ''
            });
        } catch (err) {
            throw err;
        }
    }

    return (
        <div>
            <h2>Create a Reservation!</h2>

            {/* If the user is logged in, render the Reservation Form */}
            {Auth.loggedIn() ? (
                <>
                </>
            ) : (
                <p>Please Log in to create a reservation!</p>
            )}
        </div>
    );
};