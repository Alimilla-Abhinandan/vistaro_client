import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box, MenuItem, FormControlLabel, Checkbox, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './background.jpg';
import axios from 'axios';

function SignUp({ handleLogin }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [termsChecked, setTermsChecked] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!termsChecked) {
      setError('You must agree to the terms and conditions');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        ...formData,
        age: parseInt(formData.age, 10),
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      handleLogin(); // Update the logged-in state
      navigate('/dashboard');
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'Signup failed');
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
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0)',
          padding: 3,
          borderRadius: 2,
          textAlign: 'center',
          mb: 4,
          width: '100%',
          maxWidth: 800,
        }}
      >
        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', color: 'black' }}>
          Vistaro
        </Typography>
        <Typography variant="h5" sx={{ mt: 1, fontStyle: 'italic', color: 'black' }}>
          Unfold Your Wings
        </Typography>
      </Box>

      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography component="h1" variant="h5" color="black" sx={{ mb: 3 }}>
              Sign Up
            </Typography>

            {error && (
              <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              <TextField
                required
                fullWidth
                name="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={handleChange}
                sx={{ flex: '1 1 48%' }}
              />
              <TextField
                required
                fullWidth
                name="lastName"
                label="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                sx={{ flex: '1 1 48%' }}
              />
              <TextField
                required
                fullWidth
                name="age"
                label="Age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                sx={{ flex: '1 1 48%' }}
              />
              <TextField
                required
                fullWidth
                name="gender"
                label="Gender"
                select
                value={formData.gender}
                onChange={handleChange}
                sx={{ flex: '1 1 48%' }}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="preferred-not-to-say">Prefer not to say</MenuItem>
              </TextField>
              <TextField
                required
                fullWidth
                name="username"
                label="Username"
                value={formData.username}
                onChange={handleChange}
                sx={{ flex: '1 1 48%' }}
              />
              <TextField
                required
                fullWidth
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                sx={{ flex: '1 1 48%' }}
              />
              <TextField
                required
                fullWidth
                name="phone"
                label="Phone"
                value={formData.phone}
                onChange={handleChange}
                sx={{ flex: '1 1 48%' }}
              />
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                sx={{ flex: '1 1 48%' }}
              />
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                sx={{ flex: '1 1 48%' }}
              />

              <FormControlLabel
                control={<Checkbox checked={termsChecked} onChange={() => setTermsChecked(!termsChecked)} />}
                label="I agree to the terms and conditions"
                sx={{ width: '100%' }}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: '100%', mt: 3 }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default SignUp;
