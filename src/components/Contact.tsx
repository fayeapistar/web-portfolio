import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const response = await fetch("https://formspree.io/f/xeooebaw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Thanks for your message!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("There was an error submitting the form.");
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact-wrapper">
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
              <TextField
                required
                id="outlined-name"
                label="Your Name"
                placeholder="What's your name?"
                value={formData.name}
                onChange={handleChange}
                name="name"
              />
              <TextField
                required
                id="outlined-email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={formData.email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <TextField
              required
              id="outlined-message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={formData.message}
              onChange={handleChange}
              name="message"
            />
            <p className="status">{status}</p>
            <Button variant="contained" endIcon={<SendIcon />} type="submit">
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
