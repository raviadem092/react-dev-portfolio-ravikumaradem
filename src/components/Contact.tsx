import React, { useState, useEffect } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xzzjogdb");

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [messageError, setMessageError] = useState<string>('');

  // Reset fields after successful submission
  useEffect(() => {
    if (state.succeeded) {
      setName('');
      setEmail('');
      setMessage('');
      setNameError('');
      setEmailError('');
      setMessageError('');
    }
  }, [state.succeeded]);

  // Validate fields
  const validate = (): boolean => {
    let valid = true;

    if (!name.trim()) {
      setNameError("Please enter your name");
      valid = false;
    } else if (name.trim().length < 3) {
      setNameError("Name must be at least 3 characters");
      valid = false;
    } else {
      setNameError("");
    }

    if (!email.trim()) {
      setEmailError("Please enter your email");
      valid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!message.trim()) {
      setMessageError("Please enter your message");
      valid = false;
    } else if (message.trim().length < 3) {
      setMessageError("Message must be at least 3 characters");
      valid = false;
    } else {
      setMessageError("");
    }

    return valid;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      handleSubmit(e);
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          {state.succeeded && (
            <p className="thank-you-message">
              Thanks for your message! I will get back to you soon.
            </p>
          )}

          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={onSubmit}
          >
            <div className="form-flex">
              <TextField
                fullWidth
                required
                label="Your Name"
                placeholder="What's your name?"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!nameError}
                helperText={nameError}
              />
              <TextField
                required
                label="Email"
                placeholder="How can I reach you?"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
              />
            </div>
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={!!messageError}
              helperText={messageError}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={state.submitting}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
