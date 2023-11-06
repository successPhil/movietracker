import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'; 
import { useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';

const DetailMovieCard = ({ movie }) => {
  const navigate = useNavigate()
  const containerStyle = {
    width: '360px',
    height: '500px',
    background: `url(${movie.movieImg}) no-repeat center center`,
    backgroundSize: 'cover',
    position: 'relative',
    margin: 'auto',
  };

  const textContainerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '16px',
    textAlign: 'center',
    color: '#ffc107',
    position: 'absolute',
    width: '100%',
    bottom: 0,
  };

  const paperStyle = {
    padding: '16px',// Add padding to create space from the edges
    borderRadius: '14px',
  };

  const handleBack = () => {
    return navigate('/movies')
  }

  return (
    <Container style={{ margin: 'auto', width: '66vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={1} style={{ justifyContent: 'center', marginTop: '-210px' }}>
        <Grid item xs={12}>
          <Paper style={containerStyle}>
            <div style={textContainerStyle}>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={paperStyle}>
            <Typography className='card-title' variant='h3'>{movie.title}</Typography>
            <Divider variant="middle" style={{ margin: '16px 0' }} />
            <Typography variant='h4'><strong>Plot: </strong>{movie.plot}</Typography>

            {/* Movie length and Rated */}
            <Box display="flex" justifyContent="space-between" alignItems="center" p={0}>
              <Typography variant='h6' component='p'>Movie length: {movie.duration}</Typography>
              <Typography variant='h6' component='p'>Rated: {movie.rated}</Typography>
            </Box>

            {/* IMDB Rating */}
            <Box display="flex" alignItems="center" p={0}>
              <Typography variant='h6' component='p'>IMDB Rating: {movie.rating}</Typography>
                {/* Place your rating component here */}
                {/* Example: <RatingComponent value={movie.imdbRating} /> */}
            </Box>
            {/* Metascore */}
            <Box display="flex" alignItems="center" p={0}>
              <Typography variant='h6' component='p'>Metascore: {movie.metascore}</Typography>
                {/* Place your rating component here */}
                {/* Example: <RatingComponent value={movie.metascore} /> */}
            </Box>

            {/* Machbuster Score */}
            <Box display="flex" alignItems="center" p={0}>
              <Typography variant='h6' component='p'>Machbuster Score: N/A</Typography>
                {/* Place your rating component here */}
                {/* Example: <RatingComponent value={movie.machbusterScore} /> */}
            </Box>

            <Button variant="contained" color="primary">
              Add to watchlist
            </Button>
            <Button onClick={handleBack}>
              Back
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailMovieCard;