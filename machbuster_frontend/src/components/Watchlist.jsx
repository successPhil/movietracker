import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Watchlist({ watchlist, handleRemoveFromWatchlist }) {

  return (
    <Grid container spacing={2}>
      {watchlist.map((movie) => (
        <Grid item xs={12} key={movie.id}>
          <Paper sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <img src={movie.img} alt={movie.title} style={{ maxWidth: 100, marginRight: 10 }} />
            <div>{movie.title}</div>
            <IconButton aria-label="delete" onClick={() => handleRemoveFromWatchlist(movie.id)}>
              <DeleteIcon />
            </IconButton>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
