import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import  Container  from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { getWatchlist, removeFromWatchlist } from '../api/authApi';

export default function Watchlist() {

const [userWatchlist, setUserWatchlist] = useState([])

useEffect(() => {
  const fetchUserWatchlist = async () => {
    const watchlist = await getWatchlist()
    setUserWatchlist(watchlist)
  }
  fetchUserWatchlist()
}, [])
console.log(userWatchlist)
const handleRemoveFromWatchlist = async (movieId) => {
  await removeFromWatchlist(movieId)
  const updatedWatchlist = userWatchlist.filter((movie) => (movie.movie_id !== movieId))
  
  setUserWatchlist(updatedWatchlist)
}
  return (
    <Container fixed sx={{ paddingLeft: '250px', width: '60%' }}>
      <Grid container spacing={1}>
        {userWatchlist.map((movie) => (
          <Grid item xs={12} key={movie.id}>
            <Paper sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
              <img className='watchlist-item-img' src={movie.movie_img} alt={movie.title} style={{ maxWidth: 100, marginRight: 10 }} />
              <Typography  className='watchlist-text' variant='h5' component='h4' ml={21} sx={{ color: '#04045d', fontFamily: 'Sono-VariableFont_MONO', fontSize: '2rem', flexGrow: 1, textAlign: 'left' }}>{movie.title}</Typography>
              <IconButton aria-label="delete" onClick={() => handleRemoveFromWatchlist(movie.movie_id)}>
                <DeleteIcon />
              </IconButton>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
