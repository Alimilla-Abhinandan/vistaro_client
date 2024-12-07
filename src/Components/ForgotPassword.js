import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './background.jpg'; // Assuming your background image is located in the same folder

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset password for:', email);
    setMessage("Reset password link has been sent to your email. You will be redirected to Sign In shortly.");
    setTimeout(() => {
      navigate('/signin');
    }, 5000); // Redirect to the Sign In page after 5 seconds
  };

  return (
    <Box
      sx={{
        minHeight: '100vh', // Full viewport height
        backgroundImage: `url(${backgroundImage})`, // Use the background image
        backgroundSize: 'cover', // Ensure the image covers the whole area
        backgroundPosition: 'center', // Center the image
        display: 'flex', // Flexbox to center the form
        flexDirection: 'column', // Stack title and form containers vertically
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
      }}
    >
      {/* Fully transparent container for the title and subtitle */}
      <Box
        sx={{
          backgroundColor: 'transparent', // Fully transparent background
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
          mb: 5, // Add margin to separate from the form container
        }}
      >
        <Typography variant="h3" sx={{ color: '#fff', fontWeight: 'bold' }}>
          Vistaro
        </Typography>
        <Typography variant="h6" sx={{ color: '#fff', fontStyle: 'italic' }}>
          Unfold Your Wings
        </Typography>
      </Box>

      {/* White container for the form with slight transparency */}
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background with slight transparency
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          color: '#000', // Black text for better contrast
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5" sx={{ color: '#000' }}>
            Forgot Password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{
                style: { color: '#000' }, // Label text color to black
              }}
              InputProps={{
                style: { color: '#000' }, // Input text color
                sx: {
                  '&:hover fieldset': {
                    borderColor: 'black', // Change hover border color to black
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black', // Change focused border color to black
                  },
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#000', color: '#fff' }} // Button with white text and black background
            >
              Reset Password
            </Button>
            {message && (
              <Typography color="success.main" variant="body2" sx={{ mt: 2, textAlign: 'center', color: '#000' }}>
                {message}
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ForgotPassword;
