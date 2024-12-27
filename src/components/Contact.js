import React from 'react';
import '../assets/styles/Contact.scss';

const ContactForm = () => {
    return (
        <div className="contact-wrapper" style={{ margin: '0 auto', maxWidth: '800px', textAlign: 'center' }}>
            <h1>Contact Me</h1>
            <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
            <form action="https://formspree.io/f/movvjpjy" method="POST" className="contact-form">
                <div className="form-flex" style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
                    <div className="MuiTextField-root" style={{ flex: '1' }}>
                        <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            required
                            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    </div>
                    <div className="MuiTextField-root" style={{ flex: '1' }}>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email / Phone</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email / Phone"
                            required
                            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    </div>
                </div>
                <div className="MuiTextField-root" style={{ marginBottom: '1rem' }}>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                        style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                    ></textarea>
                </div>
                <p style={{ color: 'red', fontSize: '0.9rem', marginBottom: '1rem' }}>All fields are required.</p>
                <button
                    type="submit"
                    style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '1rem',
                    }}
                >
                    SEND →
                </button>
            </form>
        </div>
    );
};

export default ContactForm;