import React from 'react';
import '../assets/styles/Contact.scss';

const ContactForm = () => {
    return (
        <div className="contact-wrapper" style={{ marginLeft: '1in', marginRight: '1in' }}>
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out using the form below.</p>
            <form action="https://formspree.io/f/movvjpjy" method="POST" className="contact-form">
                <div className="form-flex">
                    <div className="MuiTextField-root">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="MuiTextField-root">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>
                </div>
                <div className="MuiTextField-root body-form">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;