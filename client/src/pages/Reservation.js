import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_RESERVATION } from '../utils/mutations';
import Auth from '../utils/auth';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Reservation } from '../../../server/models';

const Reservation = (props) => {
    // get and set state for type, comments, price, and dates
    const [formState, setFormState] = useState({
        type: '',
        comments: '',
        date: '',
        time: '',
    });

    const style = {
        offset: {
            height: "93px"
        },
        main: {
            height: "100%"
        },
        formBox2: {
            width: "55%"
        },
        loginErr: {
            color: "#9e2a2b"
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
                    date: new Date(formState.date).toIsoString(),
                    time: formState.time
                }
            });

            // Then, reset the form state
            setFormState({
                type: '',
                comments: '',
                date: '',
                time: ''
            });
        } catch (err) {
            throw err;
        }
    }

    return (
        <main>
            <div style={style.offset}></div>
            <div style={style.main} className='mt-5'>
                <h2 className='text-center'>Create a Reservation</h2>
                {/* If the user is logged in, render the Reservation Form */}
                {Auth.loggedIn() ? (
                    <Form className='mx-auto' style={style.formBox2}>
                        <Form.Group className='mt-2'>
                            <Form.Label className='mt-3'>Select a Service:</Form.Label>
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
                        <Form.Group className='mt-2'>
                            <Form.Label className='mt-2'>Select A Date:</Form.Label>
                            <Form.Control
                                type="date"
                                name="date"
                                value={formState.date}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className='mt-2'>
                            <Form.Label className='mt-3'>Select a Time:</Form.Label>
                            <Form.Select
                                name="time"
                                value={formState.time}
                                onChange={handleChange}
                            >
                                <option>9 AM</option>
                                <option>10 AM</option>
                                <option>11 AM</option>
                                <option>12 AM</option>
                                <option>1 PM</option>
                                <option>2 PM</option>
                                <option>3 PM</option>
                                <option>4 PM</option>
                                <option>5 PM</option>
                                <option>6 PM</option>
                                <option>7 PM</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mt-2'>
                            <Form.Label className='mt-2'>Please enter any comments you wish to add:</Form.Label>
                            <Form.Control
                                as='textarea'
                                name='comments'
                                value={formState.value}
                                onChange={handleChange}
                                rows={4}
                            ></Form.Control>
                        </Form.Group>
                        <Button type="submit" className='mt-2 mb-5'>
                            Submit
                        </Button>
                    </Form>
                ) : (
                    <>
                        <h3 className='text-center mt-5' style={style.loginErr}>Please login to create a reservation!</h3>
                        <Form className='mx-auto' style={style.formBox2}>
                            <Form.Group className='mt-1'>
                                <Form.Label className='mt-3'>Select a Service:</Form.Label>
                                <Form.Select
                                    disabled
                                >
                                    <option>Kid's Cut - $40</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className='mt-1'>
                                <Form.Label className='mt-2'>Select A Date:</Form.Label>
                                <Form.Control
                                    type="date"
                                    disabled
                                >
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className='mt-1'>
                                <Form.Label className='mt-3'>Select a Time:</Form.Label>
                                <Form.Select
                                    name="time"
                                    disabled
                                >
                                    <option>9 AM</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <Form.Label className='mt-2'>Please enter any comments you wish to add:</Form.Label>
                                <Form.Control
                                    as='textarea'
                                    disabled
                                    rows={4}
                                ></Form.Control>
                            </Form.Group>
                            <Button type="submit" className='mt-2 mb-5' disabled>
                                Submit
                            </Button>
                        </Form>
                    </>
                )}

            </div>
        </main>
    );
};

export default Reservation;