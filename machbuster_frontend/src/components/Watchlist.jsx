import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';
import { getWatchlist, removeFromWatchlist } from '../api/authApi';

export default function Watchlist() {

const [userWatchlist, setUserWatchlist] = useState([])

useEffect(() => {
  const fetchUserWatchlist = async () => {
    const watchlist = await getWatchlist()
    setUserWatchlist(watchlist)
    // console.log(watchlist)
  }
  fetchUserWatchlist()
  


}, [])
console.log(userWatchlist, "this is sparta")

const handleRemoveFromWatchlist = async (movieId) => {
  await removeFromWatchlist(movieId)
  const updatedWatchlist = userWatchlist.filter((movie) => (movie.movie_id !== movieId))
  setUserWatchlist(updatedWatchlist)
  console.log(updatedWatchlist)
}




  return (
    <Grid container spacing={2}>
      {userWatchlist.map((movie) => (
        <Grid item xs={12} key={movie.id}>
          <Paper sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <img src={movie.movie_img
} alt={movie.title} style={{ maxWidth: 100, marginRight: 10 }} />
            <div>{movie.title}</div>
            <IconButton aria-label="delete" onClick={() => handleRemoveFromWatchlist(movie.movie_id)}>
              <DeleteIcon />
            </IconButton>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
