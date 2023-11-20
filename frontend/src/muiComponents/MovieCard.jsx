import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import CustomizedSnackbars from './WatchlistSnack';

export default function MovieCard({ movie, handleAddToWatchlist, toggleWatchlist }) {
  return (
    <Grid item xs={4} mb={8} mt={2}>
      <Paper elevation={12} sx={{ maxWidth: 345, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
        <CardMedia
          component="img"
          alt={movie.title}
          height="540"
          image={movie.movieImg}
          sx={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
        />
        <CardContent className='card-content' sx={{ maxHeight: 185, height: 100 }}>
          <Typography gutterBottom variant="h6" component="div" sx={{ color: '#04045d', fontFamily: 'Sono-VariableFont_MONO', fontSize: '1.6rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {movie.title}
          </Typography>
          <Typography variant="body2" sx={{ color: '#04045d', fontFamily: 'Sono-VariableFont_MONO', fontSize: '1.1rem' }}>
            {movie.text}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/movies/${movie.id}/details`}>
            <Button key={`btn${movie.id}`} size="small" sx={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#0d47a1' }}>Learn More</Button>
          </Link>
          <CustomizedSnackbars
            toggleWatchlist={toggleWatchlist} handleAddToWatchlist={handleAddToWatchlist} movie={movie} />
        </CardActions>
      </Paper>
    </Grid>
  );
}
