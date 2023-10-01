import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({toggleWatchlist, handleAddToWatchlist, movie}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = async () => {
    setOpen(true);
    toggleWatchlist(movie)
    await handleAddToWatchlist(movie.id, movie.title)
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Button size="small" onClick={handleClick}>
        Add to watchlist
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          { movie ? (<span>You have added {movie.title} to your watchlist!</span>):(<div></div>)}
        </Alert>
      </Snackbar>
    </Stack>
  );
}