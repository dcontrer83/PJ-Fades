import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_RESERVATION } from '../utils/mutations';
import Auth from '../utils/auth';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Reservation = (props) => {
    // get and set state for type, comments, price, and dates
    const [formState, setFormState] = useState({
        type: '',
        comments: '',
        date: ''
    });

    const style = {
        offset: {
            height: "93px"
        },
        main: {
            height: "100%"
        },
        formBox2: {
            width: "60%"
        }
    }

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
                    date: new Date(formState.date).toIsoString()
                }
            });

            // Then, reset the form state
            setFormState({
                type: '',
                comments: '',
                date: ''
            });
        } catch (err) {
            throw err;
        }
    }

    return (
        <main>
            <div style={style.main} className='mt-5'>
                <h2>Create a Reservation!</h2>
                {/* If the user is logged in, render the Reservation Form */}
                <Form className='mx-auto' style={style.formBox2}>
                    <Form.Group className='m-2'>
                        <Form.Label className='mt-3'>Please Select a Service:</Form.Label>
                        <Form.Select
                            name="type"
                            value={formState.type}
                            onChange={handleChange}
                        >
                            <option>Kid's Cut - $40</option>
                            <option>Men's Cut - $50</option>
                            <option>Cut and Beard - $65</option>
                            <option>Beard - $20</option>
                            <option>Lineup - $15</option>
                            <option>Blonde Session - $150</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='m-2'>
                        <Form.Label className='mt-2'>Select A Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="date"
                            value={formState.date}
                            onChange={handleChange}
                        >
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
        </main>
    );
};

export default Reservation;