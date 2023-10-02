import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import CustomizedSnackbars from './WatchlistSnack';


export default function MovieCard({movie, handleAddToWatchlist, toggleWatchlist}) {
    return (
      <Grid item xs={4} mb={8} mt={2}>
      <Paper elevation={12} sx={{ maxWidth: 345 , maxHeight: 725, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius:15, borderTopRightRadius:15}}>
        <CardMedia
          component="img"
          alt={movie.title}
          height="540"
          image={movie.movieImg}
          sx={{borderTopLeftRadius:15, borderTopRightRadius:15}}
        />
        <CardContent sx={{maxHeight:185, height:100}}>
          <Typography gutterBottom variant="h6" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.text}
          </Typography>
        </CardContent>
        <CardActions>
        <Link to={`/movies/${movie.id}/details`}>
          <Button key={`btn${movie.id}`} size="small">Learn More</Button>
          </Link>
          <CustomizedSnackbars
          toggleWatchlist={toggleWatchlist} handleAddToWatchlist={handleAddToWatchlist} movie={movie}/>
        </CardActions>
      </Paper>
      </Grid>
    );
  }