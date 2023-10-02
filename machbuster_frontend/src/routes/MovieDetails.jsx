import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetail } from "../api/authApi"
import { useEffect, useState } from "react";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box"
import DetailMovieCard from "../muiComponents/DetailMovieCard";

const MovieDetails = () => {
    let { id } = useParams(); // Access the movie ID from route parameters
    const [movieDetail, setMovieDetail] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchMovieDetail = async () => {
            const movieData =  await getMovieDetail(id)
            console.log(movieData)
            const formattedMovieData = {
              id: movieData.imdbID,
              title: movieData.Title,
              movieImg: movieData.Poster,
              plot: movieData.Plot,
              duration: movieData.Runtime,
              rating: movieData.imdbRating,
              rated: movieData.Rated,
              metascore: movieData.Metascore,
            }
        setMovieDetail(formattedMovieData)
    }  
        fetchMovieDetail()
      },[]); 

      const handleBack = () => {
        console.log('calling handleBack')
        return navigate("/movies")
      }
      console.log(movieDetail)
    return (
    <>
    {movieDetail && (<>
    <DetailMovieCard movie={movieDetail} />

</>)}
</>)
}

export default MovieDetails