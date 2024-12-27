import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  // State variables to hold form data
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // State variables for error handling
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  // State for showing form submission status (success/error messages)
  const [formStatus, setFormStatus] = useState<string | null>(null);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name && email && message) {
      const formData = {
        name,
        email,
        message,
      };

      try {
        const response = await fetch('https://formspree.io/f/movvjpjy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormStatus('Thank you for reaching out! Your message has been sent.');
          setName('');
          setEmail('');
          setMessage('');
        } else {
          setFormStatus('Oops! Something went wrong, please try again.');
        }
      } catch (error) {
        console.error('An error occurred:', error);
        setFormStatus('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-flex">
              {/* Name Input */}
              <TextField
                required
                id="outlined-required-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update name state on change
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
              />
              {/* Email Input */}
              <TextField
                required
                id="outlined-required-email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state on change
                error={emailError}
                helperText={emailError ? 'Please enter your email or phone number' : ''}
              />
            </div>
            {/* Message Input */}
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Update message state on change
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
            />
            {/* Submit Button */}
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
          {/* Displaying success or error message */}
          {formStatus && <p className="form-status">{formStatus}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
