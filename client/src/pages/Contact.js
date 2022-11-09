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
        offset: {
            height: "93px"
        },
        main: {
            height: "100%"
        },
        misc: {
            marginTop: "40px",
            marginBottom: "50px"
        },
        sendTitle: {
            padding: "25px"
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
        //send it to database or send it through email?
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
            <div data-testid="div-1-element" style={style.offset}></div>
            <div data-testid="div-2-element" style={style.main}>
                <div data-testid="div-3-element" className='text-center' style={style.misc}>
                    <h1 data-testid="heading-1-element" >Contact</h1>
                    <p data-testid="p-1-element" className='fs-3'>Phone number: 1-951-553-4409</p>
                    <p data-testid="p-2-element" className='fs-3'>DM me on <a data-testid="p-2-a-element" href="https://instagram.com/pushnpj?igshid=YmMyMTA2M2Y=">Instagram!</a></p>
                </div>
                <div data-testid="div-4-element" className='bg-dark text-white mx-auto' style={style.formBox}>
                    <h2 data-testid="heading-2-element" className='text-center mb-0' style={style.sendTitle}>Send a Message!</h2>
                    <Form data-testid="form-element" className='mx-auto' style={style.formBox2} onSubmit={handleSubmit}>
                        <Form.Group data-testid="form-group-element" className='mb-3' controlId='contact-form-name'>
                            <Form.Label data-testid="label-name-element" className='mt-3'>Full Name:</Form.Label>
                            <Form.Control data-testid="input-name"
                            type="text" 
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleInputChange}
                            placeholder="name"
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='contact-form-email'>
                            <Form.Label data-testid="label-email-element">Email:</Form.Label>
                            <Form.Control data-testid="input-email"
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder='Email address'
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='contact-form-message'>
                            <Form.Label data-testid="label-message-element">Message:</Form.Label>
                            <Form.Control data-testid="input-message"
                            as="textarea" 
                            rows={3}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="message"
                            ></Form.Control>
                        </Form.Group>
                        <Button data-testid="submit-btn" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </main>
    )
}

export default Contact;