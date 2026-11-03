import React, { useState, useEffect } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import ScrollReveal from './ScrollReveal';
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
    <section id="contact" aria-labelledby="contact-title">
      <div className="items-container">
        <ScrollReveal>
        <div className="contact-layout">
          <div className="contact-intro" data-reveal>
            <p className="section-eyebrow">Let's connect</p>
            <h1 id="contact-title">Have a system worth building?</h1>
            <p>Whether you are modernizing cloud workloads, shaping a backend service, or creating a thoughtful web experience, I would love to hear about it.</p>
            <div className="contact-points">
              <div><RocketLaunchOutlinedIcon /><span><strong>Cloud-native delivery</strong>AWS, Azure, Docker, Terraform, and CI/CD automation.</span></div>
              <div><AutoAwesomeOutlinedIcon /><span><strong>Product engineering</strong>Backend services, databases, and responsive interfaces.</span></div>
            </div>
          </div>
          <div className="contact_wrapper" data-reveal>
          <h2>Send a message</h2>
          <p className="contact-form-intro">Tell me a little about the problem you are solving.</p>

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
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Contact;
