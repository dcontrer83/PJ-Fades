import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
// need to create LOGIN_USER mutation
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = (props) => {

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
    // useState for email and password
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        // authentication
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
        }

        // set formState clean
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <main>
            <div style={style.offset}></div>
            <div style={style.main} className='mt-5'>
                <h2 className='text-center'>Login</h2>
                <div>
                    {data ? (
                        <p>
                            Login in successful!!! You may now head{' '}
                            <Link to="/">back to the homepage.</Link>
                        </p>
                    ) : (
                        <main>
                            <Form className='mx-auto' style={style.formBox2} onSubmit={handleFormSubmit}>
                                <Form.Group className='mt-2'>
                                    <Form.Label className='mt-3'>Email:</Form.Label>
                                    <Form.Control
                                        placeholder="Your email"
                                        name="email"
                                        type="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group className='mt-2'>
                                    <Form.Label className='mt-2'>Password:</Form.Label>
                                    <Form.Control
                                        placeholder="********"
                                        name="password"
                                        type="password"
                                        value={formState.password}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Button
                                    className='mt-2  mb-5'
                                    type="submit"
                                >
                                    Submit
                                </Button>
                                <br></br>
                                <Link to="/signup" className='text-center'>Sign up instead</Link>
                            </Form>
                            
                        </main>
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

export default Login;