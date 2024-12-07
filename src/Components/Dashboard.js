import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

import course1Image from './react.png';
import course2Image from './python.png';
import course3Image from './javascript.webp';

function Dashboard() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    courses: [],
    recentlyVisitedCourses: [],
  });

  useEffect(() => {
    // Example data for courses
    setUserData({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      courses: [
        { name: 'React', description: 'A major component of MERN Stack', imageUrl: course1Image },
        { name: 'Course 2', description: 'Modern Coding Language', imageUrl: course2Image },
        { name: 'Course 3', description: 'Dive into world of web developement', imageUrl: course3Image }, 
      ],
      recentlyVisitedCourses: ['Course 3', 'Course 4'],
    });
  }, []);

  return (
    <Box sx={{ backgroundColor: '#f9fafb', minHeight: '100vh', paddingBottom: '40px' }}>
      <Box sx={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Welcome Section */}
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: '#333', textAlign: 'center' }}>
          <l>Welcome to Vistaro 🎉</l>
          <p></p>
          <p>Explore some new courses: </p>
        </Typography>

        {/* Registered Courses */}
        <Grid container spacing={3}>
          {userData.courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                {/* Card Media for Image */}
                <CardMedia
                  component="img"
                  alt={course.name}
                  height="200"
                  image={course.imageUrl}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 500, color: '#333' }}>
                    {course.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#777' }}>
                    {course.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <Button variant="contained" color="primary">
                      Enroll Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Advertisements Section */}
      <Box sx={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <Card sx={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 500, color: '#333' }}>
              Latest Advertisements
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              🏫 New courses available at discounted prices! Check out the offers now.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Dashboard;
