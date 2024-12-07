import React from 'react';
import master from './master.png';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';

// Example eBook data
const eBooksData = [
  {
    id: 1,
    title: 'Mastering React',
    author: 'John Doe',
    description: 'An in-depth guide to modern React development.',
    imageUrl: './master.png',
    downloadLink: 'https://blog.bitsrc.io/mastering-react-components-an-in-depth-guide-be3bf5c995b0',
  },
  {
    id: 2,
    title: 'The Art of Python',
    author: 'Jane Smith',
    description: 'Explore the beauty of Python programming.',
    imageUrl: 'https://via.placeholder.com/150',
    downloadLink: '#',
  },
  {
    id: 3,
    title: 'JavaScript Essentials',
    author: 'Chris Lee',
    description: 'Learn the fundamentals of JavaScript with ease.',
    imageUrl: 'https://via.placeholder.com/150',
    downloadLink: '#',
  },
];

const EBooks = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'transparent',
        minHeight: '100vh',
        padding: '40px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 600, color: '#333', textAlign: 'center' }}
      >
        Explore Our eBooks 📚
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#555',
          textAlign: 'center',
          marginBottom: '30px',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      ><p></p>
        Discover a wide range of eBooks across various topics to enhance your
        knowledge and skills. Download and start learning today!
        <p></p>
      
      </Typography>

      {/* eBooks Grid */}
      <Grid container spacing={4}>
        {eBooksData.map((eBook) => (
          <Grid item xs={12} sm={6} md={4} key={eBook.id}>
            <Card
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <CardMedia
                component="img"
                alt={eBook.title}
                height="200"
                image={eBook.imageUrl}
                sx={{ objectFit: 'cover' }}
              />
              {/* eBook Details */}
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 500, color: '#333' }}
                  gutterBottom
                >
                  {eBook.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 400, color: '#777', marginBottom: '10px' }}
                >
                  By {eBook.author}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#555', marginBottom: '15px' }}
                >
                  {eBook.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={eBook.downloadLink}
                  sx={{
                    width: '100%',
                    textTransform: 'none',
                    fontWeight: 500,
                  }}
                >
                  Download
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EBooks;
