import React from 'react';
import { TextField, Button } from '@mui/material';
import '../assets/styles/Contact.scss';

const ContactForm = () => {
    return (
        <div className="contact-wrapper" style={{ margin: '0 auto', maxWidth: '800px', textAlign: 'center' }}>
            <h1>Contact Me</h1>
            <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
            <form action="https://formspree.io/f/movvjpjy" method="POST" className="contact-form">
                <div className="form-flex" style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
                    <TextField
                        id="name"
                        name="name"
                        label="Name"
                        placeholder="Your Name"
                        required
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="email"
                        name="email"
                        label="Email / Phone"
                        placeholder="Email / Phone"
                        required
                        variant="outlined"
                        fullWidth
                    />
                </div>
                <TextField
                    id="message"
                    name="message"
                    label="Message"
                    placeholder="Your Message"
                    required
                    multiline
                    rows={5}
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: '1rem' }}
                />
                <p style={{ color: 'red', fontSize: '0.9rem', marginBottom: '1rem' }}>All fields are required.</p>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}
                >
                    SEND →
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;
