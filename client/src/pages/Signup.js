import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Signup = () => {

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

    // useState for name, email, and password
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [confirmState, setConfirmState] = useState({
        confirmPassword: '',
    })
    const [addUser, { error, data }] = useMutation(ADD_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
        
    };

    const handleChangeConfirmPass = (event) => {
        const { name, value } = event.target;
        setConfirmState({
            ...confirmState,
            [name]: value,
        })
    }

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        // authetication 
        const {password } = formState;
        const { confirmPassword } = confirmState;
        if(password !== confirmPassword) {
            alert("Passwords do not match!")
        }
        else {
            try {
                console.log('test')
                console.log({...formState})
                const { data } = await addUser({
                    variables: { ...formState },
                });
                console.log('data');
    
                Auth.login(data.addUser.token);
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <main>
            <div style={style.offset}></div>
            <div style={style.main} className='mt-5'>
                <h2 className='text-center'>Sign Up</h2>
                <div>
                    {data ? (
                        <p>
                            Sign up successful!!! You may now head{' '}
                            <Link to="/">back to the homepage.</Link>
                        </p>
                    ) : (
                        <Form className='mx-auto' style={style.formBox2} onSubmit={handleFormSubmit}>
                            <Form.Group className='mt-2'>
                                <Form.Label className='mt-3'>Create Username:</Form.Label>
                                <Form.Control
                                    placeholder="Your username"
                                    name="username"
                                    type="text"
                                    value={formState.username}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <Form.Label className='mt-3'>Your Email:</Form.Label>
                                <Form.Control
                                    placeholder="Your email"
                                    name="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <Form.Label className='mt-3'>Create Password:</Form.Label>
                                <Form.Control
                                    placeholder="********"
                                    name="password"
                                    type="password"
                                    value={formState.password}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <Form.Label className='mt-3'>Confirm Password:</Form.Label>
                                <Form.Control
                                    placeholder="********"
                                    name="confirmPassword"
                                    type="password"
                                    value={confirmState.confirmPassword}
                                    onChange={handleChangeConfirmPass}
                                />
                            </Form.Group>
                            <Button
                                type="submit"
                                className='mt-2 mb-5'
                            >
                                Submit
                            </Button>
                        </Form>
                    )}

                    {error && (
                        <div>
                            {error.message}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Signup;