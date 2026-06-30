import React, { useState, useEffect } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm('xzzjogdb');

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [messageError, setMessageError] = useState<string>('');

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

  const validate = (): boolean => {
    let valid = true;

    if (!name.trim()) {
      setNameError('Please enter your name');
      valid = false;
    } else if (name.trim().length < 3) {
      setNameError('Name must be at least 3 characters');
      valid = false;
    } else {
      setNameError('');
    }

    if (!email.trim()) {
      setEmailError('Please enter your email');
      valid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!message.trim()) {
      setMessageError('Please enter your message');
      valid = false;
    } else if (message.trim().length < 3) {
      setMessageError('Message must be at least 3 characters');
      valid = false;
    } else {
      setMessageError('');
    }

    return valid;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      handleSubmit(e);
    }
  };

  // ✅ Theme-aware MUI styles
  const textFieldStyles = {
    '& .MuiInputBase-root': {
      backgroundColor: (theme: any) =>
        theme.palette.mode === 'dark' ? '#1e1e1e' : '#ffffff',
      borderRadius: '6px',
    },
    '& .MuiInputBase-input': {
      color: (theme: any) => theme.palette.text.primary,
      fontFamily: 'DomaineDispNar-Medium, sans-serif',
    },
    '& .MuiFormLabel-root': {
      color: (theme: any) => theme.palette.text.secondary,
      fontFamily: 'DomaineDispNar-Medium, sans-serif',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
      {
        borderColor: (theme: any) => theme.palette.primary.main,
      },
    '& .MuiFormHelperText-root': {
      color: (theme: any) => theme.palette.error.main,
    },
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it happen!
          </p>

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
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!nameError}
                helperText={nameError}
                sx={textFieldStyles}
              />

              <TextField
                fullWidth
                required
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
                sx={textFieldStyles}
              />
            </div>

            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <TextField
              fullWidth
              required
              label="Message"
              name="message"
              multiline
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={!!messageError}
              helperText={messageError}
              sx={textFieldStyles}
            />

            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={state.submitting}
              sx={{
                float: 'right',
                mt: 2,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
                color: '#050f0b',
                fontWeight: 600,
                padding: '8px 20px',
                borderRadius: '5px',
                transition: '0.3s ease',
                '&:hover': {
                  backgroundColor: '#5000ca',
                  color: '#ffffff',
                },
              }}
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