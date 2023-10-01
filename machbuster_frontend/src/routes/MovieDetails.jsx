import { useParams } from "react-router-dom";
import { getMovieDetail } from "../api/authApi"
import { useEffect, useState } from "react";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const MovieDetails = () => {
    let { id } = useParams(); // Access the movie ID from route parameters
    const [movieDetail, setMovieDetail] = useState(null)

    useEffect(() => {
        const fetchMovieDetail = async () => {
            const movieData =  await getMovieDetail(id)
            
          
        
        setMovieDetail(movieData)
    }  
        fetchMovieDetail()
      },[]); 

      const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });

      console.log(id)
      console.log(movieDetail)

    return (
        <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        
            <Grid item xs={12} mb={8} mt={2} ml={50} >

{movieDetail ? (      <Paper elevation={0} sx={{ maxWidth: 300 , maxHeight: 250, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius:15, borderTopRightRadius:15}}>
    <img src={movieDetail.Poster} />
        <CardContent sx={{maxHeight:185, height:100}}>
          <Typography gutterBottom variant="h6" component="div">
            {movieDetail.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movieDetail.Plot}
          </Typography>
        </CardContent>
      </Paper>) : (<div>Loading...</div>)}

      
      </Grid>
      </ThemeProvider>
       
    )
}

export default MovieDetails