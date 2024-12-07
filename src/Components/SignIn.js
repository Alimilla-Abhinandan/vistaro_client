import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Grid, Link, Alert } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import backgroundImage from './background.jpg';
import axios from 'axios';

function SignIn({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signin', {
        email,
        password,
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      handleLogin(); // Update the logged-in state
      navigate('/dashboard');
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'Login failed');
      } else {
        setError('Network error. Please try again.');
      }
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 10 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', color: 'black' }}>
          Vistaro
        </Typography>
        <Typography variant="h5" sx={{ fontStyle: 'italic', color: 'black' }}>
          Unfold Your Wings
        </Typography>
      </Box>

      <Container component="main" maxWidth="md">
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '50px',
            borderRadius: '8px',
            boxShadow: 3,
            width: '100%',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ color: '#000', mb: 2 }}>
            Sign In
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

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
            InputLabelProps={{ style: { color: '#000' } }}
            InputProps={{
              style: { color: '#000' },
              sx: {
                '&:hover fieldset': { borderColor: 'black' },
                '&.Mui-focused fieldset': { borderColor: 'black' },
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{ style: { color: '#000' } }}
            InputProps={{
              style: { color: '#000' },
              sx: {
                '&:hover fieldset': { borderColor: 'black' },
                '&.Mui-focused fieldset': { borderColor: 'black' },
              },
            }}
          />
          <Button 
            type="submit" 
            fullWidth 
            variant="contained" 
            sx={{ mt: 3, mb: 2, backgroundColor: '#000', color: '#fff' }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link component={RouterLink} to="/forgot-password" variant="body2" sx={{ color: '#000' }}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/signup" variant="body2" sx={{ color: '#000' }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default SignIn;
