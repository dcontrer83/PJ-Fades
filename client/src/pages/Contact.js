import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        message: '',
    })

    const style = {
        main: {
            height: "100%"
        },
        misc: {
            marginTop: "10%"
        },
        formBox: {
            height: "500px",
        },
        formBox2: {
            width: "60%"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value,
        })
    }
    return (
        <main>
            <div style={style.main}>
                <div className='text-center' style={style.misc}>
                    <h1>Contact</h1>
                    <p>Phone number: </p>
                    <p>Email: </p>
                    <p>Instagram: </p>
                </div>
                <div className='bg-dark text-white mx-auto' style={style.formBox}>
                    <h2 className='text-center mt-5'>Send a Message!</h2>
                    <Form className='mx-auto' style={style.formBox2} onSubmit={handleSubmit}>
                        <Form.Group className='mb-3' controlId='contact-form-name'>
                            <Form.Label className='mt-5'>Full Name:</Form.Label>
                            <Form.Control 
                            type="text" 
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleInputChange}
                            placeholder="name"
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='contact-form-email'>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder='Email address'
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='contact-form-message'>
                            <Form.Label>Message:</Form.Label>
                            <Form.Control 
                            as="textarea" 
                            rows={3}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="message"
                            ></Form.Control>
                        </Form.Group>
                        <Button type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </main>
    )
}

export default Contact;