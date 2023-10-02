import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '5rem', // Very large font size for h1
      },
      h2: {
        fontSize: '3.5rem', // Very large font size for h2
      },
      h3: {
        fontSize: '3rem', 
        fontWeight: 'bold',
        fontFamily: '"Roboto Condensed", sans-serif',
        // Large font size for h3
      },
      h4: {
        fontSize: '1.5rem', // Medium-large font size for h4
      },
      h5: {
        fontSize: '1.3rem', // Medium font size for h5
      },
      h6: {
        fontSize: '1rem', // Medium font size for h6
      },
    },
    // Add other theme configurations
    palette: {
      mode: 'dark',
      primary: {
        main: '#7e57c2',
      },
      // Add more palette options as needed
    },
  });



const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));

const MovieImage = styled(CardMedia)(({ theme }) => ({
  width: '225px',
  height: '420px',
  objectFit: 'cover',
  marginBottom: theme.spacing(2),
  paddingTop: theme.spacing(2), // Add space on top
  paddingBottom: theme.spacing(2),
}));

const DetailMovieCard = ({ movie }) => {
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center"> {/* Use Grid to control positioning */}
        <Grid item xs={12} mb={8}> {/* Grid item to contain the component */}
          <StyledPaper elevation={3}>
            <Typography variant="h3">{movie.title}</Typography>
            <MovieImage
              component="img"
              image={movie.movieImg}
              alt={movie.title}
              
            />
            <Typography variant="h6">{movie.plot}</Typography>
            <Typography variant="h6">Rating: {movie.rating}</Typography>
            <Typography variant="h6">Rated: {movie.rated}</Typography>
            <Typography variant="h6">Duration: {movie.duration}</Typography>
            <Typography variant="h6">Metascore: {movie.metascore}</Typography>

            <Rating name="read-only" value={4.5} readOnly precision={0.5} />
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailMovieCard;
