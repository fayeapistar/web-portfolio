import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import '../assets/styles/Contact.scss'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formDataObject = new FormData(form);

    fetch('https://formspree.io/f/yourFormspreeID', {
      method: 'POST',
      body: formDataObject,
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          alert('Thank you for your message!');
          form.reset();
          setFormData({ firstName: '', lastName: '', email: '', message: '' });
        } else {
          alert('Something went wrong. Please try again later.');
        }
      })
      .catch(() => {
        alert('There was a problem submitting your form.');
      });
  };

  return (
    <div className="contact-wrapper">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-flex">
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="MuiTextField-root"
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="MuiTextField-root"
          />
        </div>
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="MuiTextField-root body-form"
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="MuiTextField-root body-form"
        />
        <Button
          type="submit"
          variant="contained"
          className="MuiTextField-root"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
