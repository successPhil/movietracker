import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'; 
import { useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import CustomizedSnackbars from './WatchlistSnack';
import Rating from '@mui/material/Rating';

const DetailMovieCard = ({ movie, handleAddToWatchlist, toggleWatchlist }) => {
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
    marginBottom: '20px',
    marginTop: '20px',
  };

  const handleBack = () => {
    return navigate('/movies')
  }
  const convertIMDBRating = (imdbRating) => {
    // IMDb ratings are on a scale of 1 to 10
    // Convert to a scale of 0 to 5
    const rating = parseFloat(imdbRating);
    return isNaN(rating) ? 0 : rating / 2;
  };
  
  // Utility function to convert a Metascore to a MUI Rating value
  const convertMetaRating = (metaRating) => {
    // Metascores are on a scale of 0 to 100
    // Convert to a scale of 0 to 5
    const rating = parseFloat(metaRating);
    return isNaN(rating) ? 0 : rating / 20;
  };

  return (
    <Container style={{ margin: 'auto', width: '66vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={1} style={{ justifyContent: 'center', marginBottom: '30px' }}>
        <Grid item xs={12}>
          <Paper style={containerStyle}>
            <div style={textContainerStyle}>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={paperStyle}>
            <Typography className='card-title' variant='h3' sx={{ color: '#04045d', fontFamily: 'Sono-VariableFont_MONO', fontSize: '3rem' }}>{movie.title}</Typography>
            <Divider variant="middle" style={{ margin: '16px 0' }} />
            <Typography  variant='h4' sx={{ color: '#04045d', fontFamily: 'Sono-VariableFont_MONO', fontSize: '1.8rem', marginBottom: '20px' }}>Plot: {movie.plot}</Typography>

            {/* Movie length and Rated */}
            <Box display="flex" justifyContent="space-around" alignItems="center" p={0}>
              <Typography  variant='h6' component='p' sx={{ color: '#04045d', fontFamily: 'Sono-VariableFont_MONO', fontSize: '1.4rem' }}>Movie length: {movie.duration}</Typography>
              <Typography  variant='h6' component='p' sx={{ color: '#04045d', fontFamily: 'Sono-VariableFont_MONO', fontSize: '1.4rem' }}>Rated: {movie.rated}</Typography>
            </Box>

            {/* IMDB Rating */}
            <Box display="flex" justifyContent="space-around" alignItems="center" p={0}>
              <Typography  variant='h6' component='p' sx={{ color: '#04045d', fontFamily: 'Sono-VariableFont_MONO', fontSize: '1.4rem' }}>IMDB Rating: {movie.rating}</Typography>
              <Rating value={convertIMDBRating(movie.rating)} precision={0.5}  name='imdb-read-only' readOnly/>
                {/* Example: <RatingComponent value={movie.imdbRating} /> */}
            </Box>
            {/* Metascore */}
            <Box display="flex" justifyContent="space-around" alignItems="center" p={0}>
              <Typography  variant='h6' component='p' sx={{ color: '#04045d', fontFamily: 'Sono-VariableFont_MONO', fontSize: '1.4rem' }}>Metascore: {movie.metascore}</Typography>
              <Rating value={convertMetaRating(movie.metascore)} precision={0.5}  name='imdb-read-only' readOnly/>
                {/* Place your rating component here */}
                {/* Example: <RatingComponent value={movie.metascore} /> */}
            </Box>

            {/* Machbuster Score */}
            <Box display="flex" justifyContent="space-around" alignItems="center" p={0}>
              <Typography  variant='h6' component='p' sx={{ color: '#04045d', fontFamily: 'Sono-VariableFont_MONO', fontSize: '1.4rem' }}>Machbuster Score: N/A</Typography>
              <Rating value={0} precision={0.5}  name='imdb-read-only' readOnly/>
                {/* Example: <RatingComponent value={movie.machbusterScore} /> */}
            </Box>

            <Box sx={{display: 'flex'}}>
            <CustomizedSnackbars
            toggleWatchlist={toggleWatchlist} handleAddToWatchlist={handleAddToWatchlist} movie={movie}/>
            <Button size="small" sx={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#0d47a1' }} onClick={handleBack}>
              Back
            </Button>

            </Box>

            
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailMovieCard;