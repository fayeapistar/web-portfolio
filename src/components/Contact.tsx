import React from 'react';
import { TextField, Button } from '@mui/material';
import '../assets/styles/Contact.scss'; 

const ContactForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/movvjpjy', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          alert('Thank you for your message!');
          form.reset();
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
            required
            className="MuiTextField-root"
          />
          <TextField
            label="Last Name"
            name="lastName"
            required
            className="MuiTextField-root"
          />
        </div>
        <TextField
          label="Email"
          name="email"
          type="email"
          required
          className="MuiTextField-root body-form"
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
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
